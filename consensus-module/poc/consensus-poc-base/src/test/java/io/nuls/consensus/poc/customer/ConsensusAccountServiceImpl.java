/*
 * *
 *  * MIT License
 *  *
 *  * Copyright (c) 2017-2018 nuls.io
 *  *
 *  * Permission is hereby granted, free of charge, to any person obtaining a copy
 *  * of this software and associated documentation files (the "Software"), to deal
 *  * in the Software without restriction, including without limitation the rights
 *  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  * copies of the Software, and to permit persons to whom the Software is
 *  * furnished to do so, subject to the following conditions:
 *  *
 *  * The above copyright notice and this permission notice shall be included in all
 *  * copies or substantial portions of the Software.
 *  *
 *  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  * SOFTWARE.
 *
 */

package io.nuls.consensus.poc.customer;

import io.nuls.account.model.Account;
import io.nuls.account.model.Address;
import io.nuls.account.model.Balance;
import io.nuls.account.service.AccountService;
import io.nuls.kernel.exception.NulsException;
import io.nuls.kernel.lite.annotation.Component;
import io.nuls.kernel.model.NulsSignData;
import io.nuls.kernel.model.Result;

import java.util.List;

/**
 * Created by ln on 2018/5/7.
 */
@Component
public class ConsensusAccountServiceImpl implements AccountService {
    @Override
    public Result<List<Account>> createAccount(int count, String password) {
        return null;
    }

    @Override
    public Result<Boolean> removeAccount(String accountId, String password) {
        return null;
    }

    @Override
    public Result<Account> getAccount(String address) {
        return null;
    }

    @Override
    public Result<Account> getAccount(Address address) {
        return null;
    }

    @Override
    public Result<Address> getAddress(String pubKey) {
        return null;
    }

    @Override
    public Result<Address> getAddress(byte[] pubKey) {
        return null;
    }

    @Override
    public Result<Boolean> isEncrypted(Account account) {
        return null;
    }

    @Override
    public Result<Boolean> isEncrypted(Address address) {
        return null;
    }

    @Override
    public Result<Boolean> isEncrypted(String address) {
        return null;
    }

    @Override
    public Result verifyAddressFormat(String address) {
        return null;
    }

    @Override
    public Result<List<Account>> getAccountList() {
        return null;
    }

    @Override
    public Result<Account> getDefaultAccount() {
        return null;
    }

    @Override
    public NulsSignData signData(byte[] data, Account account, String password) throws NulsException {
        return null;
    }

    @Override
    public NulsSignData signData(byte[] data, Account account) throws NulsException {
        return null;
    }

    @Override
    public Result verifySignData(byte[] data, NulsSignData signData, byte[] pubKey) {
        return null;
    }

    @Override
    public Result<Balance> getBalance() {
        return null;
    }

    @Override
    public Result<Balance> getBalance(Account account) {
        return null;
    }

    @Override
    public Result<Balance> getBalance(Address address) {
        return null;
    }

    @Override
    public Result<Balance> getBalance(String address) {
        return null;
    }
}