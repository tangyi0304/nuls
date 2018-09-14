package io.nuls.accout.ledger.rpc.form;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "创建DAPP交易")
public class DataTransactionForm {

    @ApiModelProperty(name = "address", value = "交易输入", required = true)
    private String address;

    @ApiModelProperty(name = "password", value = "密码", required = false)
    private String password;

    @ApiModelProperty(name = "data", value = "负载信息", required = true)
    private String data;

    @ApiModelProperty(name = "remark", value = "备注", required = false)
    private String remark;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}