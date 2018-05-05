package io.nuls.contract.entity.form;

/**
 * @Desription:
 * @Author: PierreLuo
 * @Date: 2018/4/21
 */
public class ContractBase {
    private String sender;
    private long naLimit;
    private int price;
    private String password;
    private String remark;

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public long getNaLimit() {
        return naLimit;
    }

    public void setNaLimit(long naLimit) {
        this.naLimit = naLimit;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
