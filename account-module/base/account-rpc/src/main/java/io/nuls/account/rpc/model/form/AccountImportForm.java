package io.nuls.account.rpc.model.form;

import io.nuls.account.model.AccountKeyStore;
import io.nuls.core.tools.crypto.Hex;
import io.nuls.core.tools.str.StringUtils;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * @author: Charlie
 * @date: 2018/4/19
 */
@ApiModel(value = "导入账户表单数据")
public class AccountImportForm {

    @ApiModelProperty(name = "address", value = "账户地址", required = true)
    private String address;

    @ApiModelProperty(name = "encryptedPrivateKey", value = "加密后的私钥")
    private String encryptedPrivateKey;

    @ApiModelProperty(name = "alias", value = "别名")
    private String alias;

    @ApiModelProperty(name = "pubKey", value = "公钥", required = true)
    private String pubKey;

    @ApiModelProperty(name = "prikey", value = "私钥")
    private String prikey;

    public AccountKeyStore toAccountKeyStore() {
        AccountKeyStore accountKeyStore = new AccountKeyStore();
        accountKeyStore.setAddress(this.address);
        accountKeyStore.setEncryptedPrivateKey(this.encryptedPrivateKey);
        accountKeyStore.setAlias(this.alias);
        accountKeyStore.setPubKey(Hex.decode(this.pubKey));
        accountKeyStore.setPrikey(Hex.decode(this.prikey));
        return accountKeyStore;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEncryptedPrivateKey() {
        return encryptedPrivateKey;
    }

    public void setEncryptedPrivateKey(String encryptedPrivateKey) {
        this.encryptedPrivateKey = StringUtils.formatStringPara(encryptedPrivateKey);
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getPubKey() {
        return pubKey;
    }

    public void setPubKey(String pubKey) {
        this.pubKey = pubKey;
    }

    public String getPrikey() {
        return prikey;
    }

    public void setPrikey(String prikey) {
        this.prikey = prikey;
    }
}