package io.nuls.account.service;

import io.nuls.account.constant.AccountConstant;
import io.nuls.account.constant.AccountErrorCode;
import io.nuls.account.model.Account;
import io.nuls.account.model.Address;
import io.nuls.account.model.Alias;
import io.nuls.account.model.Balance;
import io.nuls.account.storage.po.AccountPo;
import io.nuls.account.storage.po.AliasPo;
import io.nuls.account.storage.service.AccountStorageService;
import io.nuls.account.storage.service.AliasStorageService;
import io.nuls.account.tx.AliasTransaction;
import io.nuls.accountLedger.model.CoinDataResult;
import io.nuls.accountLedger.service.AccountLedgerService;
import io.nuls.core.tools.log.Log;
import io.nuls.core.tools.str.StringUtils;
import io.nuls.kernel.exception.NulsException;
import io.nuls.kernel.exception.NulsRuntimeException;
import io.nuls.kernel.lite.annotation.Autowired;
import io.nuls.kernel.lite.annotation.Service;
import io.nuls.kernel.model.*;
import io.nuls.kernel.script.P2PKHScriptSig;
import io.nuls.message.bus.service.MessageBusService;
import io.nuls.protocol.message.TransactionMessage;

import java.util.ArrayList;
import java.util.List;

/**
 * 账户模块内部功能服务类
 * Account module internal function service class
 *
 * @author: Charlie
 * @date: 2018/5/11
 */
@Service
public class AliasService {

    @Autowired
    public AccountService accountService;

    @Autowired
    public AccountStorageService accountStorageService;

    @Autowired
    private AccountLedgerService accountLedgerService;

    @Autowired
    private AliasStorageService aliasStorageService;

    @Autowired
    private AccountCacheService AccountCacheService;

    @Autowired
    private MessageBusService messageBusService;

    /**
     * 设置别名
     * Initiate a transaction to set alias.
     *
     * @param addr      Address of account
     * @param password  password of account
     * @param aliasName the alias to set
     * @return
     */
    public Result<Boolean> setAlias(String addr, String password, String aliasName) {
        if (!Address.validAddress(addr)) {
            Result.getFailed(AccountErrorCode.DATA_PARSE_ERROR);
        }
        Account account = AccountCacheService.getAccountByAddress(addr);

        if (null == account) {
            account = accountService.getAccount(addr).getData();
            if(null == account){
                return Result.getFailed(AccountErrorCode.ACCOUNT_NOT_EXIST);
            }
            try {
                account.decrypt(password);
            } catch (NulsException e) {
                return Result.getFailed(AccountErrorCode.PASSWORD_IS_WRONG);
            }
        }
        if (StringUtils.isNotBlank(account.getAlias())) {
            return new Result(false, AccountErrorCode.ACCOUNT_ALREADY_SET_ALIAS, "Alias has been set up");
        }
        if (!StringUtils.validAlias(aliasName)) {
            return new Result(false, "The alias is between 3 to 20 characters");
        }
        if (isAliasExist(aliasName)) {
            Result.getFailed(AccountErrorCode.ALIAS_EXIST);
        }
        byte[] addressBytes = account.getAddress().getBase58Bytes();
        try {
            //创建一笔设置别名的交易
            AliasTransaction tx = new AliasTransaction();
            tx.setTime(System.currentTimeMillis());
            Alias alias = new Alias(addressBytes, aliasName);
            tx.setTxData(alias);
            tx.setHash(NulsDigestData.calcDigestData(tx.serialize()));

            CoinDataResult coinDataResult = accountLedgerService.getCoinData(addressBytes, AccountConstant.ALIAS_NA, tx.size());
            if(!coinDataResult.isEnough()){
                Result.getFailed(AccountErrorCode.INSUFFICIENT_BALANCE);
            }
            CoinData coinData = new CoinData();
            coinData.setFrom(coinDataResult.getCoinList());
            Coin change = coinDataResult.getChange();
            if (null != change) {
                //创建toList
                List<Coin> toList = new ArrayList<>();
                toList.add(change);
                coinData.setTo(toList);
            }
            tx.setCoinData(coinData);
            NulsSignData nulsSignData = accountService.signData(tx.serializeForHash(), account, password);
            P2PKHScriptSig scriptSig = new P2PKHScriptSig(nulsSignData, account.getPubKey());
            tx.setScriptSig(scriptSig.serialize());
            TransactionMessage message = new TransactionMessage();
            message.setMsgBody(tx);
            messageBusService.receiveMessage(message, null);
            return Result.getSuccess();
        } catch (Exception e) {
            Log.error(e);
            return new Result(false, e.getMessage());
        }
    }

    /**
     * 保存别名
     * 1.保存别名alias至数据库
     * 2.从数据库取出对应的account账户,将别名设置进account然后保存至数据库
     * 3.将修改后的account重新进行缓存
     * saveAlias
     * 1. Save the alias to the database.
     * 2. Take the corresponding account from the database, set the alias to account and save it to the database.
     * 3. Re-cache the modified account.
     *
     * @param aliaspo
     * @return
     */
    public Result saveAlias(AliasPo aliaspo) {
        try {
            aliasStorageService.saveAlias(aliaspo);
            AccountPo po = accountStorageService.getAccount(aliaspo.getAddress()).getData();
            if (null == po) {
                return Result.getFailed(AccountErrorCode.ACCOUNT_NOT_EXIST);
            }
            po.setAlias(aliaspo.getAlias());
            accountStorageService.updateAccount(po);
            AccountCacheService.putAccount(po.toAccount());
        } catch (Exception e) {
            throw new NulsRuntimeException(AccountErrorCode.FAILED);
        }
        return Result.getSuccess();
    }

    public Alias getAlias(String alias) {
        AliasPo aliasPo = aliasStorageService.getAlias(alias).getData();
        return aliasPo == null ? null : aliasPo.toAlias();
    }

    public boolean isAliasExist(String alias) {
        return null != getAlias(alias);
    }

    /**
     * 回滚别名操作(删除别名)
     * 1.从数据库删除别名对象数据
     * 2.取出对应的account将别名清除,重新存入数据库
     * 3.重新缓存account
     * rollbackAlias
     * 1.Delete the alias data from the database.
     * 2. Remove the corresponding account to clear the alias and restore it in the database.
     * 3. Recache the account.
     *
     * @param aliasPo
     * @return
     */
    public Result rollbackAlias(AliasPo aliasPo) {
        try {
            AliasPo po = aliasStorageService.getAlias(aliasPo.getAlias()).getData();
            if (po != null && po.getAddress().equals(aliasPo.getAddress())) {
                aliasStorageService.removeAlias(aliasPo.getAlias());
                AccountPo accountPo = accountStorageService.getAccount(aliasPo.getAddress()).getData();
                accountPo.setAlias("");
                accountStorageService.updateAccount(accountPo);
                AccountCacheService.putAccount(accountPo.toAccount());
            }
        } catch (Exception e) {
            throw new NulsRuntimeException(AccountErrorCode.ALIAS_ROLLBACK_ERROR);
        }
        return Result.getSuccess();
    }


}