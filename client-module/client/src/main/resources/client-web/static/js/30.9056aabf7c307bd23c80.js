webpackJsonp([30],{"/QpR":function(t,e){},"9Hnk":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3cXf"),o=s.n(a),c=s("zsLt"),n=s.n(c),r=s("6ROu"),l=s.n(r),i=s("LPk9"),m=s("FJop"),d=s("YgNb"),u={data:function(){var t=this;return{activeName:sessionStorage.getItem("CinfoActiveName")||"first",passChange:"delete",accountAddressValue:localStorage.getItem("newAccountAddress"),contractAddress:this.$route.query.address,contractInfo:[],collectOk:!1,tradeData:[],pages:1,totalAll:0,contractData:[],contractItem:[],systemGas:0,callForm:{region:"",domains:[],gas:"",price:"",values:"",addtion:""},callRules:{gas:[{validator:function(e,s,a){s?s<1?(t.callForm.gas=1,a()):s>1e7?(t.callForm.gas=1e7,a()):a():a(new Error(t.$t("message.c204")))},trigger:"blur"}],price:[{validator:function(e,s,a){s?s<1?t.callForm.price=1:a():a(new Error(t.$t("message.c205")))},trigger:"blur"}]},callFormOptions:[],callSeniorValue:!1,switchDisabled:!1,valuesIf:!1,submitCallFormIf:!1,resultHash:"",submitCallFormSuccse:"",submitCallFormHight:0,decimals:0,isNrc20:!1,bigInteger:!1,contractInfoSetInterval:null}},components:{Back:i.a,Password:m.a},mounted:function(){var t=this;this.getContractInfo(this.contractAddress),this.getContractTradeList(this.contractAddress),this.contractInfoSetInterval=setInterval(function(){setTimeout(function(){t.getContractTradeList(t.contractAddress)},5e3),""!==t.resultHash&&t.getResultInfo(t.resultHash)},5e3)},destroyed:function(){clearInterval(this.contractInfoSetInterval)},methods:{handleClick:function(t){this.activeName=t.name,this.resultHash=""},getContractInfo:function(t){var e=this;this.$fetch("/contract/info/"+t+"?accountAddress="+this.accountAddressValue).then(function(t){if(t.success){e.contractInfo=t.data;var s=Object(d.d)(t.data.decimals);for(var a in e.decimals=s,t.data.isNrc20&&(e.isNrc20=!0,t.data.totalSupply=Object(d.a)(t.data.totalSupply,s).toString()),t.data.method){if("<init>"===t.data.method[a].name||t.data.method[a].event||e.contractData.push(t.data.method[a]),t.data.method[a].args.length>0)for(var o in t.data.method[a].args)t.data.method[a].newArgs?t.data.method[a].newArgs=t.data.method[a].newArgs+t.data.method[a].args[o].name+" _"+t.data.method[a].args[o].type+",":t.data.method[a].newArgs=t.data.method[a].args[o].name+" _"+t.data.method[a].args[o].type+",";else t.data.method[a].newArgs=e.$t("message.c245");t.data.method[a].newArgs.length>0&&(t.data.method[a].newArgs=t.data.method[a].newArgs.substr(0,t.data.method[a].newArgs.length-1))}e.collectOk=e.accountAddressValue===t.data.creater,t.data.balance=Object(d.b)(t.data.balance).toString()}else e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})},collect:function(){var t=this,e="",s="";this.contractInfo.isCollect?(e="/contract/collection/cancel",s='{"accountAddress":"'+this.accountAddressValue+'","contractAddress":"'+this.contractAddress+'"}'):(e="/contract/collection",s='{"accountAddress":"'+this.accountAddressValue+'","contractAddress":"'+this.contractAddress+'","remarkName":""}'),this.$post(e,s).then(function(e){e.success?t.contractInfo.isCollect=!t.contractInfo.isCollect:t.$message({message:t.$t("message.passWordFailed")+e.data.msg,type:"warning"})})},deleteContract:function(){var t=this;this.passChange="delete","true"===localStorage.getItem("encrypted")?this.$refs.password.showPassword(!0):this.$confirm(this.$t("message.tip1"),"",{confirmButtonText:this.$t("message.confirmButtonText"),cancelButtonText:this.$t("message.cancelButtonText")}).then(function(){t.toSubmit("")}).catch(function(){console.log("")})},getContractTradeList:function(t){var e=this,s="/contract/tx/list/"+t+"?pageNumber="+this.pages+"&pageSize=15&accountAddress="+localStorage.getItem("newAccountAddress");this.$fetch(s).then(function(t){if(t.success){for(var s in e.totalAll=t.data.total,t.data.list)t.data.list[s].time=l()(Object(d.i)(t.data.list[s].time)).format("YYYY-MM-DD HH:mm:ss");e.tradeData=t.data.list}else e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})},allConsensusSize:function(t){this.pages=t,this.getContractTradeList(this.contractAddress)},toNulscan:function(t){window.open("https://nulscan.io/accountInfo?address="+t,"_blank")},toTxid:function(t,e){this.$router.push({name:"dealInfo",query:{hash:t,type:e}})},changeCallOptions:function(t){for(var e in this.contractItem=t,t.args){var s=new n.a(t.args[e].type);s.has("[")&&s.has("]")?t.args[e].types=this.$t("message.c241"):t.args[e].types="","BigInteger"===t.args[e].type?t.args[e].bigInteger=!0:t.args[e].bigInteger=!1}this.callForm.domains=t.args,this.callForm.region=t.name,this.valuesIf=t.view,this.submitCallFormIf=!1,this.submitCallFormSuccse="",this.resultHash="",t.view?(this.switchDisabled=!1,this.callSeniorValue=!1,this.systemCallGas=1,this.callForm.gas=1,this.callForm.price=1,this.callForm.values=0):this.switchDisabled=!0,"BigInteger"===t.returnArg?this.bigInteger=!0:this.bigInteger=!1,t.args.length>0?this.callForm.domains=t.args:this.getCallGas(t)},getCallGas:function(t){var e=this,s="";t.view||(this.callForm.domains.length>0?Object(d.g)(this.callForm.domains).success&&(s='{"sender":"'+this.accountAddressValue+'","contractAddress":"'+this.contractAddress+'","value":"0","methodName":"'+t.name+'","methodDesc":"'+t.desc+'","price":"1","args":['+Object(d.g)(this.callForm.domains,this.decimals).params+"]}"):s='{"sender":"'+this.accountAddressValue+'","contractAddress":"'+this.contractAddress+'","value":"0","methodName":"'+t.name+'","methodDesc":"'+t.desc+'","price":"1"}'),s&&this.$post("/contract/imputedgas/call",s).then(function(t){t.success?(e.systemGas=t.data.gasLimit,e.callForm.gas=t.data.gasLimit,e.callForm.price=20,e.callForm.values=0):e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})},submitCallForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;if(e.valuesIf){var s='{"contractAddress":"'+e.contractAddress+'","methodName":"'+e.contractItem.name+'","methodDesc":"'+e.contractItem.desc+'","args":['+Object(d.g)(e.callForm.domains,e.decimals).params+"]}";e.$post("/contract/view",s).then(function(t){t.success?(e.submitCallFormIf=!0,e.submitCallFormHight=2,document.getElementById("out_pre").innerText="",e.isNrc20&&e.bigInteger?document.getElementById("out_pre").innerText=Object(d.a)(t.data,e.decimals).toString():document.getElementById("out_pre").innerText=t.data.toString()):e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})}else e.passChange="call","true"===localStorage.getItem("encrypted")?e.$refs.password.showPassword(!0):e.$confirm(e.$t("message.tip1"),"",{confirmButtonText:e.$t("message.confirmButtonText"),cancelButtonText:e.$t("message.cancelButtonText")}).then(function(){e.toSubmit("")}).catch(function(){console.log("")})})},toSubmit:function(t){var e=this,s="",a="";"call"===this.passChange?(s="/contract/call",a='{"sender":"'+this.accountAddressValue+'","gasLimit":'+this.callForm.gas+',"price":'+this.callForm.price+',"password":"'+t+'","remark":"'+Object(d.k)(this.callForm.addtion)+'","contractAddress":"'+this.contractAddress+'","value":"'+Object(d.e)(this.callForm.values||0).toString()+'","methodName":"'+this.contractItem.name+'","methodDesc":"'+this.contractItem.desc+'","args":['+Object(d.g)(this.callForm.domains,this.decimals).params+"]}"):(s="/contract/delete",a='{"sender":"'+this.accountAddressValue+'","contractAddress":"'+this.contractAddress+'","password":"'+t+'","remark":""}'),this.$post(s,a).then(function(t){t.success?"call"===e.passChange?(e.submitCallFormSuccse="",e.submitCallFormIf=!0,e.submitCallFormSuccse=t.data,e.resultHash=t.data,e.getResultInfo(t.data)):e.$router.push({name:"contract"}):e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})},getResultInfo:function(t){var e=this;this.$fetch("/contract/result/"+t).then(function(t){t.success?(document.getElementById("out_pre").innerText="",e.submitCallFormHight=0,t.data.flag?(e.submitCallFormHight=t.data.confirmCount,t.data.confirmCount>1?(document.getElementById("out_pre").innerText="",document.getElementById("out_pre").innerText=o()(t.data.data,null,2),e.resultHash=""):e.submitCallFormSuccse=e.resultHash):e.submitCallFormSuccse=e.resultHash):e.$message({message:e.$t("message.passWordFailed")+t.data.msg,type:"warning"})})}},watch:{}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contract-info"},[s("Back",{attrs:{backTitle:this.$t("message.contract")}}),t._v(" "),s("div",{staticClass:"contract-info-top"},[s("div",{staticClass:"address"},[s("h3",[t._v(t._s(t.$t("message.c215"))+"："+t._s(this.contractAddress))]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!this.collectOk&&"stop"!==this.contractInfo.status,expression:"!this.collectOk && this.contractInfo.status !=='stop'"}],staticClass:"cursor-p",on:{click:t.collect}},[t._v("\n          "+t._s(this.contractInfo.isCollect?t.$t("message.c2262"):t.$t("message.c2261"))+"\n          "),s("i",{staticClass:"el-icon-star-on",class:this.contractInfo.isCollect?"collects":"collect"})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:this.collectOk&&"stop"!==this.contractInfo.status,expression:"this.collectOk && this.contractInfo.status !=='stop'"}],staticClass:"cursor-p",on:{click:t.deleteContract}},[t._v("\n          "+t._s(t.$t("message.c95"))+" "),s("i",{staticClass:"el-icon-delete"})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:"stop"===this.contractInfo.status,expression:"this.contractInfo.status ==='stop'"}]},[t._v(t._s(t.$t("message.c951"))+" ")])]),t._v(" "),s("ul",{staticClass:"info",class:this.contractInfo.isNrc20?"":"infos"},[s("li",[s("span",[t._v(t._s(t.$t("message.tips4"))+":")]),t._v(t._s(this.contractInfo.balance)+" NULS")]),t._v(" "),s("li",[s("span",[t._v(t._s(t.$t("message.tips5"))+":")]),t._v(t._s(this.contractInfo.txCount)+" Txns")]),t._v(" "),s("li",{staticClass:"overflow"},[s("span",[t._v(t._s(t.$t("message.tips6"))+":")]),t._v(" "),s("label",{staticClass:"overflow cursor-p text-ds",on:{click:function(e){t.toNulscan(t.contractInfo.creater)}}},[t._v(t._s(this.contractInfo.creater))]),t._v(" "),s("label",{staticClass:"labels"},[t._v("at txid")]),t._v(" "),s("label",{staticClass:"overflow cursor-p text-ds",on:{click:function(e){t.toTxid(t.contractInfo.createTxHash,101)}}},[t._v(t._s(this.contractInfo.createTxHash))])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:this.contractInfo.isNrc20,expression:"this.contractInfo.isNrc20"}],staticClass:"overflow"},[s("span",[t._v("Token Tracker:")]),t._v("\n            "+t._s(this.contractInfo.nrc20TokenName)+"\n            "),s("font",{directives:[{name:"show",rawName:"v-show",value:this.contractInfo.nrc20TokenSymbol,expression:"this.contractInfo.nrc20TokenSymbol"}]},[t._v("("+t._s(this.contractInfo.nrc20TokenSymbol)+")")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:this.contractInfo.isNrc20,expression:"this.contractInfo.isNrc20"}]},[s("span",[t._v(t._s(t.$t("message.tips8"))+":")]),t._v(t._s(this.contractInfo.totalSupply))])])]),t._v(" "),s("el-tabs",{staticClass:"contract-info-tab",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("message.transactionRecord"),name:"first"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tradeData}},[s("el-table-column",{attrs:{label:t.$t("message.transactionType"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.$t("message.type"+e.row.type))+"\n            ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"txData.data.sender",label:t.$t("message.c242"),"min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"cursor-p text-ds overflow",on:{click:function(s){t.toNulscan(e.row.txData.data.sender)}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.txData.data.sender)+"\n\t\t\t\t\t\t\t\t")])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"txid","min-width":"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"cursor-p text-ds overflow",on:{click:function(s){t.toTxid(e.row.hash,e.row.type)}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.hash)+"\n\t\t\t\t\t\t\t\t")])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"time",label:t.$t("message.time"),width:"145",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{label:t.$t("message.state"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t.$t("message.statusS"+e.row.status)))])]}}])})],1),t._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalAll>15,expression:"totalAll>15"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":15,total:t.totalAll,"current-page":t.pages},on:{"current-change":t.allConsensusSize}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("message.c243"),name:"second"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.contractData}},[s("el-table-column",{attrs:{prop:"name",label:t.$t("message.c218"),width:"150",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{prop:"newArgs",label:t.$t("message.c219"),"min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(""===e.row.newArgs?t.$t("message.c245"):e.row.newArgs))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"returnArg",label:t.$t("message.c220"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(" ["+t._s(e.row.returnArg)+"]")])]}}])})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("message.type101"),name:"third",disabled:"stop"===this.contractInfo.status}},[s("div",{staticClass:"query-info"},[s("el-form",{ref:"callForm",staticClass:"call-contract",attrs:{model:t.callForm,rules:t.callRules}},[s("el-form-item",{staticClass:"lable",attrs:{label:""}},[s("el-select",{attrs:{placeholder:t.$t("message.c229")},on:{change:t.changeCallOptions},model:{value:t.callForm.region,callback:function(e){t.$set(t.callForm,"region",e)},expression:"callForm.region"}},t._l(t.contractData,function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t}})}))],1),t._v(" "),t._l(t.callForm.domains,function(e,a){return s("el-form-item",{key:e.name,attrs:{label:e.name+"( "+e.type+")"+e.types,prop:"domains."+a+".value",rules:{required:e.required,message:e.name+t.$t("message.c230"),trigger:"blur"}}},[s("el-input",{on:{change:function(e){t.getCallGas(t.contractItem)}},model:{value:e.value,callback:function(s){t.$set(e,"value","string"==typeof s?s.trim():s)},expression:"domain.value"}})],1)}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.switchDisabled,expression:"this.switchDisabled"}],staticClass:"call-senior"},[t._v("\n              "+t._s(t.$t("message.c203"))+"\n              "),s("el-switch",{attrs:{width:35},model:{value:t.callSeniorValue,callback:function(e){t.callSeniorValue=e},expression:"callSeniorValue"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.callSeniorValue,expression:"callSeniorValue"}],staticClass:"seniorInfo"},[s("el-form-item",{attrs:{label:"Gas Limit",prop:"gas"}},[s("el-input",{attrs:{onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:t.callForm.gas,callback:function(e){t.$set(t.callForm,"gas",e)},expression:"callForm.gas"}}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:this.callForm.gas<this.systemGas&&this.callForm.gas>0,expression:"this.callForm.gas < this.systemGas && this.callForm.gas > 0"}],staticClass:"price-min"},[t._v(t._s(t.$t("message.c206")))])],1),t._v(" "),s("el-form-item",{attrs:{label:"Price",prop:"price"}},[s("el-input",{attrs:{onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:t.callForm.price,callback:function(e){t.$set(t.callForm,"price",e)},expression:"callForm.price"}})],1),t._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!t.valuesIf,expression:"!valuesIf"}],attrs:{label:"Value",prop:"values"}},[s("el-input",{attrs:{onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:t.callForm.values,callback:function(e){t.$set(t.callForm,"values",e)},expression:"callForm.values"}})],1),t._v(" "),s("el-form-item",{attrs:{label:t.$t("message.tips3"),prop:"addtion"}},[s("el-input",{attrs:{maxlength:30},model:{value:t.callForm.addtion,callback:function(e){t.$set(t.callForm,"addtion",e)},expression:"callForm.addtion"}})],1)],1),t._v(" "),s("el-form-item",{staticClass:"submit-bt",staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitCallForm("callForm")}}},[t._v(t._s(t.$t("message.c231")))])],1)],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.submitCallFormIf,expression:"submitCallFormIf"}],staticClass:"click-after scroll"},[s("p",{class:this.submitCallFormHight<=6?"waingClass":""},[s("span",{directives:[{name:"show",rawName:"v-show",value:this.submitCallFormHight<=1,expression:"this.submitCallFormHight <= 1"}],staticClass:"overflow"},[t._v("TxID:"+t._s(this.submitCallFormSuccse)+" "+t._s(t.$t("message.confirming"))+"....")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:this.submitCallFormHight>1,expression:"this.submitCallFormHight > 1"}],staticClass:"cursor-p text-ds overflow",on:{click:function(e){t.toTxid(t.submitCallFormSuccse,100)}}},[t._v(t._s(this.submitCallFormSuccse))])]),t._v(" "),s("pre",{attrs:{id:"out_pre"}})])],1)])],1),t._v(" "),s("Password",{ref:"password",on:{toSubmit:t.toSubmit}})],1)},staticRenderFns:[]};var g=s("vSla")(u,h,!1,function(t){s("/QpR")},null,null);e.default=g.exports}});