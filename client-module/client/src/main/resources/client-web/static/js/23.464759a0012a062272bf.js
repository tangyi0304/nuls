webpackJsonp([23],{"1CGH":function(a,t){},DgPo:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("3cXf"),n=e.n(s),o=e("HzJ8"),i=e.n(o),r=e("LPk9"),c=e("6ROu"),l=e.n(c),v=e("x47x"),u=e("YgNb"),d=(e("2tLR"),{data:function(){return{hash:this.$route.query.hash,infoData:[],inputs:[],allInputs:0,outputs:[],allOutputs:0,times:"",contractIf:!1,callIf:!1,insideIf:!1,tokenIf:!1}},components:{Back:r.a},mounted:function(){this.getHashInfo(this.hash)},methods:{getHashInfo:function(a){var t=this,e="",s=document.getElementById("outPre");e=100===this.$route.query.type||101===this.$route.query.type||102===this.$route.query.type||103===this.$route.query.type||1e3===this.$route.query.type?"/contract/tx/"+a:"/accountledger/tx/"+a,this.$fetch(e).then(function(a){if(t.infoData=a.data,t.infoData.fee=Object(u.b)(a.data.fee).toString(),t.times=l()(Object(u.i)(a.data.time)).format("YYYY-MM-DD HH:mm:ss"),a.data.remark=a.data.remark?Object(u.j)(a.data.remark):"",a.data.inputs.length>0)for(var e=0;e<a.data.inputs.length;e++)a.data.inputs[e].value=Object(u.b)(a.data.inputs[e].value),t.allInputs=Object(v.BigNumber)(t.allInputs).plus(a.data.inputs[e].value).toString();if(t.inputs=a.data.inputs,a.data.outputs.length>0)for(var o=0;o<a.data.outputs.length;o++)a.data.outputs[o].value=Object(u.b)(a.data.outputs[o].value),t.allOutputs=Object(v.BigNumber)(t.allOutputs).plus(a.data.outputs[o].value).toString();if(t.outputs=a.data.outputs,100===a.data.type||101===a.data.type||102===a.data.type||1e3===a.data.type){if(t.contractIf=!0,100===a.data.type);else if(101===a.data.type){if(t.callIf=!0,a.data.callName=a.data.txData.data.methodName,a.data.callParmas="",a.data.txData.data.args.length>0){var r=!0,c=!1,d=void 0;try{for(var _,f=i()(a.data.txData.data.args);!(r=(_=f.next()).done);r=!0){var m=_.value;a.data.callParmas+=m[0]+","}}catch(a){c=!0,d=a}finally{try{!r&&f.return&&f.return()}finally{if(c)throw d}}a.data.callParmas.length>0&&(a.data.callParmas=a.data.callParmas.substr(0,a.data.callParmas.length-1))}if(a.data.callResult=a.data.contractResult.result,a.data.contractResult.transfers.length>0){t.insideIf=!0,a.data.insideUnit="NULS";var p=a.data.contractResult.transfers;for(var h in p)"0"===h.toString()?p[h].name=t.$t("message.c222"):p[h].name="",p[h].value=Object(u.b)(p[h].value).toString();a.data.insideItme=a.data.contractResult.transfers}if(a.data.contractResult.tokenTransfers.length>0){t.tokenIf=!0,a.data.tokenUnit=a.data.contractResult.symbol;var g=Object(u.d)(a.data.contractResult.decimals),w=a.data.contractResult.tokenTransfers;for(var I in w)"0"===I.toString()?w[I].name="Token":w[I].name="",w[I].value=Object(u.a)(w[I].value,g).toString();a.data.tokenItme=a.data.contractResult.tokenTransfers}}else t.contractIf=!1,a.data.txDataHexString="",a.data.contractAddress=a.data.contractResult.contractAddress;a.data.totalFee=Object(u.b)(a.data.contractResult.totalFee).toString(),a.data.txSizeFee=Object(u.b)(a.data.contractResult.txSizeFee).toString(),a.data.actualContractFee=Object(u.b)(a.data.contractResult.actualContractFee).toString(),a.data.refundFee=Object(u.b)(a.data.contractResult.refundFee).toString(),a.data.contractAddress=a.data.contractResult.contractAddress,a.data.gasLimit=a.data.contractResult.gasLimit,a.data.price=a.data.contractResult.price,a.data.gasUsed=a.data.contractResult.gasUsed,a.data.modelIf=a.data.contractResult.success,a.data.errorMessage=a.data.contractResult.errorMessage,s.innerText=n()(a.data.txData.data,null,2)}})},hashCopy:function(a){a.length>50?window.open("https://nulscan.io/transactionHash?hash="+a,"_blank"):window.open("https://nulscan.io/accountInfo?address="+a,"_blank")}},beforeRouteLeave:function(a,t,e){"/wallet"!==a.name&&(sessionStorage.removeItem("walletTotalAll"),sessionStorage.removeItem("walletPages"),sessionStorage.removeItem("walletTypes")),e()}}),_={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"deal-info"},[e("Back",{attrs:{backTitle:this.$t("message.transactionManagement")}}),a._v(" "),e("div",{staticClass:"deal-info-top"},[e("div",{staticClass:"deal-left fl"},[e("div",[a._v(a._s(a.$t("message.input"))),e("span",[a._v(" "+a._s(this.allInputs.toString())+" NULS")])]),a._v(" "),e("ul",a._l(a.inputs,function(t){return e("li",[e("label",{staticClass:"cursor-p",on:{click:function(e){a.hashCopy(t.address)}}},[a._v(a._s(t.address))]),a._v(" "),e("span",[a._v(a._s(t.value.toString()))])])}))]),a._v(" "),e("div",{staticClass:"deal-right fr"},[e("div",[a._v(a._s(a.$t("message.output"))),e("span",[a._v(a._s(this.allOutputs.toString())+" NULS")])]),a._v(" "),e("ul",a._l(a.outputs,function(t){return e("li",[e("label",{staticClass:"cursor-p",on:{click:function(e){a.hashCopy(t.address)}}},[a._v(a._s(t.address))]),a._v(" "),e("span",[a._v(a._s(t.value.toString()))])])}))])]),a._v(" "),e("div",{staticClass:"deal-case"},[e("h3",[a._v(a._s(a.$t("message.overview")))]),a._v(" "),e("ul",[e("li",[e("span",[a._v(a._s(a.$t("message.tradingTime")))]),a._v(a._s(this.times))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!a.contractIf,expression:"!contractIf"}]},[e("span",[a._v(a._s(a.$t("message.miningFee1")))]),a._v(a._s(a.infoData.fee)+" NULS")]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf,expression:"contractIf"}]},[e("span",[a._v(a._s(a.$t("message.miningFee1")))]),a._v("\n        "+a._s(this.infoData.totalFee)+"("+a._s(a.$t("message.c210"))+") =\n        "+a._s(this.infoData.txSizeFee)+"（"+a._s(a.$t("message.c211"))+"）+\n        "+a._s(this.infoData.actualContractFee)+"（"+a._s(a.$t("message.type"+a.infoData.type))+"）+\n        "+a._s(this.infoData.refundFee)+"（"+a._s(a.$t("message.c213"))+"）\n        "),e("label",{staticClass:"unit"},[a._v(a._s(a.$t("message.c214"))+": NULS")])]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.autograph")))]),e("label",{staticClass:"text-ds cursor-p",on:{click:function(t){a.hashCopy(a.infoData.hash)}}},[a._v(a._s(a.infoData.hash))])]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.transactionType")))]),a._v(a._s(a.$t("message.type"+a.infoData.type)))]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.transactionState")))]),a._v(a._s(a.$t("message.statusS"+a.infoData.status)))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf||102===a.infoData.type,expression:"contractIf || infoData.type === 102 "}]},[e("span",[a._v(a._s(a.$t("message.c215")))]),a._v(a._s(a.infoData.contractAddress))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf||102===a.infoData.type,expression:"contractIf || infoData.type === 102 "}]},[e("span",[a._v(a._s(a.$t("message.c247")))]),a._v(" "),e("font",{class:a.infoData.modelIf?"success":"failed"},[a._v(a._s(a.$t("message.c"+a.infoData.modelIf)))]),a._v(" "),e("font",{directives:[{name:"show",rawName:"v-show",value:!a.infoData.modelIf,expression:"!infoData.modelIf"}],class:a.infoData.modelIf?"success":"failed"},[a._v("( "+a._s(a.infoData.errorMessage)+" )")])],1),a._v(" "),a._l(a.infoData.insideItme,function(t){return e("li",{directives:[{name:"show",rawName:"v-show",value:a.insideIf,expression:"insideIf"}]},[e("span",[a._v(a._s(""===t.name?" ":t.name))]),a._v("\n        From "),e("label",{staticClass:"text-ds cursor-p",on:{click:function(e){a.hashCopy(t.from)}}},[a._v(a._s(t.from))]),a._v("\n        To "),e("label",{staticClass:"text-ds cursor-p",on:{click:function(e){a.hashCopy(t.to)}}},[a._v(a._s(t.to))]),a._v("\n        for "),e("label",{staticClass:"text-ds"},[a._v(a._s(t.value))]),a._v(" "+a._s(a.infoData.insideUnit)+"\n        "),e("p",[e("span",[a._v(" ")]),a._v("TXID: "),e("label",{staticClass:"text-ds cursor-p",on:{click:function(e){a.hashCopy(t.to)}}},[a._v(a._s(t.txHash))])])])}),a._v(" "),a._l(a.infoData.tokenItme,function(t){return e("li",{directives:[{name:"show",rawName:"v-show",value:a.tokenIf,expression:"tokenIf"}]},[e("span",[a._v(a._s(t.name)+" ")]),a._v("\n        From "),e("label",{staticClass:"text-ds cursor-p",on:{click:function(e){a.hashCopy(t.from)}}},[a._v(a._s(t.from))]),a._v("\n        To "),e("label",{staticClass:"text-ds cursor-p",on:{click:function(e){a.hashCopy(t.to)}}},[a._v(a._s(t.to))]),a._v("\n        for "),e("label",{staticClass:"text-ds"},[a._v(a._s(t.value))]),a._v(" "+a._s(a.infoData.tokenUnit)+"\n      ")])}),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf,expression:"contractIf"}]},[e("span",[a._v("GasLimit")]),a._v(a._s(a.infoData.gasLimit))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf,expression:"contractIf"}]},[e("span",[a._v(a._s(a.$t("message.c216")))]),a._v(a._s(a.infoData.price))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.contractIf,expression:"contractIf"}]},[e("span",[a._v("GasUsed")]),a._v(a._s(a.infoData.gasUsed))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.callIf,expression:"callIf"}]},[e("span",[a._v(a._s(a.$t("message.c217")))]),a._v(a._s(a.$t("message.c218"))+": "+a._s(a.infoData.callName))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.callIf,expression:"callIf"}]},[e("span",[a._v(" ")]),a._v(a._s(a.$t("message.c219"))+": "+a._s(a.infoData.callParmas))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:a.callIf,expression:"callIf"}]},[e("span",[a._v(" ")]),a._v(a._s(a.$t("message.c2201"))+": "+a._s(a.infoData.callResult))]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.blockHeight")))]),a._v(a._s(a.infoData.blockHeight<0?"- -":a.infoData.blockHeight))]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.c221")))]),a._v(a._s(a.infoData.confirmCount))]),a._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:102!==a.infoData.type,expression:"infoData.type !== 102"}]},[e("span",[a._v("TxData")]),a._v(" "),e("pre",{directives:[{name:"show",rawName:"v-show",value:!a.contractIf,expression:"!contractIf"}],staticClass:"out-pre"},[a._v(a._s(""===a.infoData.txDataHexString?" ":a.infoData.txDataHexString))]),a._v(" "),e("pre",{directives:[{name:"show",rawName:"v-show",value:a.contractIf,expression:"contractIf"}],staticClass:"out-pre",attrs:{id:"outPre"}},[a._v(" ")])]),a._v(" "),e("li",[e("span",[a._v(a._s(a.$t("message.remarks")))]),a._v(a._s(""===a.infoData.remark?" ":a.infoData.remark))])],2)])],1)},staticRenderFns:[]};var f=e("vSla")(d,_,!1,function(a){e("1CGH")},null,null);t.default=f.exports}});