"use strict";(self["webpackChunkeribbit_client_pc"]=self["webpackChunkeribbit_client_pc"]||[]).push([[989],{7535:function(e,l,t){t.d(l,{KB:function(){return m},L8:function(){return o},LV:function(){return a},Nc:function(){return p},Nv:function(){return u},TM:function(){return v},Yb:function(){return n},g5:function(){return r},pm:function(){return i},sl:function(){return c},y$:function(){return d}});var s=t(4471);const a=()=>(0,s.Z)("/member/order/pre","get"),d=e=>(0,s.Z)("/member/address","post",e),n=e=>(0,s.Z)(`/member/address/${e.id}`,"put",e),i=e=>(0,s.Z)("/member/order","post",e),r=e=>(0,s.Z)("/member/order/"+e,"get"),o=({orderState:e=0,page:l=1,pageSize:t=10})=>(0,s.Z)("/member/order","get",{orderState:e,page:l,pageSize:t}),c=({orderId:e,cancelReason:l})=>(0,s.Z)(`/member/order/${e}/cancel`,"put",{cancelReason:l}),u=e=>(0,s.Z)("/member/order","delete",{ids:e}),p=e=>(0,s.Z)(`/member/order/${e}/receipt`,"put"),m=e=>(0,s.Z)(`/member/order/${e}/logistics`,"get"),v=e=>(0,s.Z)(`/member/order/repurchase/${e}`,"get")},7989:function(e,l,t){t.r(l),t.d(l,{default:function(){return xe}});var s=t(3396),a=t(7139);const d=e=>((0,s.dD)("data-v-9c72f968"),e=e(),(0,s.Cn)(),e),n={class:"xtx-pay-checkout-page"},i={class:"container"},r={key:0,class:"wrapper"},o=d((()=>(0,s._)("h3",{class:"box-title"},"收货地址",-1))),c={class:"box-body"},u=d((()=>(0,s._)("h3",{class:"box-title"},"商品信息",-1))),p={class:"box-body"},m={class:"goods"},v=d((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"520"},"商品信息"),(0,s._)("th",{width:"170"},"单价"),(0,s._)("th",{width:"170"},"数量"),(0,s._)("th",{width:"170"},"小计"),(0,s._)("th",{width:"170"},"实付")])],-1))),f={href:"javascript:;",class:"info"},_=["src"],h={class:"right"},g=(0,s.uE)('<h3 class="box-title" data-v-9c72f968>配送时间</h3><div class="box-body" data-v-9c72f968><a class="my-btn active" href="javascript:;" data-v-9c72f968>不限送货时间：周一至周日</a><a class="my-btn" href="javascript:;" data-v-9c72f968>工作日送货：周一至周五</a><a class="my-btn" href="javascript:;" data-v-9c72f968>双休日、假日送货：周六至周日</a></div><h3 class="box-title" data-v-9c72f968>支付方式</h3><div class="box-body" data-v-9c72f968><a class="my-btn active" href="javascript:;" data-v-9c72f968>在线支付</a><a class="my-btn" href="javascript:;" data-v-9c72f968>货到付款</a><span style="color:#999;" data-v-9c72f968>货到付款需付5元手续费</span></div><h3 class="box-title" data-v-9c72f968>金额明细</h3>',5),b={class:"box-body"},y={class:"total"},w=d((()=>(0,s._)("dt",null,"商品件数：",-1))),k=d((()=>(0,s._)("dt",null,"商品总价：",-1))),C=d((()=>(0,s._)("dt",null,[(0,s.Uk)("运"),(0,s._)("i"),(0,s.Uk)("费：")],-1))),x=d((()=>(0,s._)("dt",null,"应付总额：",-1))),D={class:"price"},U={class:"submit"};function A(e,l,t,d,A,z){const Z=(0,s.up)("XtxBreadItem"),I=(0,s.up)("XtxBread"),W=(0,s.up)("CheckoutAddress"),$=(0,s.up)("XtxButton");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",i,[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("首页")])),_:1}),(0,s.Wm)(Z,{to:"/cart"},{default:(0,s.w5)((()=>[(0,s.Uk)("购物车")])),_:1}),(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)("填写订单")])),_:1})])),_:1}),d.order?((0,s.wg)(),(0,s.iD)("div",r,[o,(0,s._)("div",c,[(0,s.Wm)(W,{onChange:d.changeAddress,list:d.order.userAddresses},null,8,["onChange","list"])]),u,(0,s._)("div",p,[(0,s._)("table",m,[v,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.order.goods,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.skuId},[(0,s._)("td",null,[(0,s._)("a",f,[(0,s._)("img",{src:e.picture,alt:""},null,8,_),(0,s._)("div",h,[(0,s._)("p",null,(0,a.zw)(e.name),1),(0,s._)("p",null,(0,a.zw)(e.attrsText),1)])])]),(0,s._)("td",null,"¥"+(0,a.zw)(e.price),1),(0,s._)("td",null,(0,a.zw)(e.count),1),(0,s._)("td",null,"¥"+(0,a.zw)(e.totalPrice),1),(0,s._)("td",null,"¥"+(0,a.zw)(e.totalPayPrice),1)])))),128))])])]),g,(0,s._)("div",b,[(0,s._)("div",y,[(0,s._)("dl",null,[w,(0,s._)("dd",null,(0,a.zw)(d.order.summary.goodsCount)+"件",1)]),(0,s._)("dl",null,[k,(0,s._)("dd",null,"¥"+(0,a.zw)(d.order.summary.totalPrice),1)]),(0,s._)("dl",null,[C,(0,s._)("dd",null,"¥"+(0,a.zw)(d.order.summary.postFee),1)]),(0,s._)("dl",null,[x,(0,s._)("dd",D,"¥"+(0,a.zw)(d.order.summary.totalPayPrice),1)])])]),(0,s._)("div",U,[(0,s.Wm)($,{onClick:d.submitOrderFn,type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("提交订单")])),_:1},8,["onClick"])])])):(0,s.kq)("",!0)])])}t(7658);const z=e=>((0,s.dD)("data-v-6fac3f59"),e=e(),(0,s.Cn)(),e),Z={class:"checkout-address"},I={class:"text"},W={key:0,class:"none"},$={key:1},j=z((()=>(0,s._)("span",null,[(0,s.Uk)("收"),(0,s._)("i"),(0,s.Uk)("货"),(0,s._)("i"),(0,s.Uk)("人：")],-1))),H=z((()=>(0,s._)("span",null,"联系方式：",-1))),L=z((()=>(0,s._)("span",null,"收货地址：",-1))),E={class:"action"},T=["onClick"],X=z((()=>(0,s._)("span",null,[(0,s.Uk)("收"),(0,s._)("i"),(0,s.Uk)("货"),(0,s._)("i"),(0,s.Uk)("人：")],-1))),P=z((()=>(0,s._)("span",null,"联系方式：",-1))),S=z((()=>(0,s._)("span",null,"收货地址：",-1)));function V(e,l,t,d,n,i){const r=(0,s.up)("XtxButton"),o=(0,s.up)("XtxDialog"),c=(0,s.up)("AddressEdit");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Z,[(0,s._)("div",I,[d.showAddress?((0,s.wg)(),(0,s.iD)("ul",$,[(0,s._)("li",null,[j,(0,s.Uk)((0,a.zw)(d.showAddress.receiver),1)]),(0,s._)("li",null,[H,(0,s.Uk)((0,a.zw)(d.showAddress.contact.replace(/^(\d{3})\d{4}(\d{4})/,"$1****$2")),1)]),(0,s._)("li",null,[L,(0,s.Uk)((0,a.zw)(d.showAddress.fullLocation)+(0,a.zw)(e.address),1)])])):((0,s.wg)(),(0,s.iD)("div",W," 您需要先添加收货地址才可提交订单。 ")),d.showAddress?((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:l[0]||(l[0]=e=>d.openAddressEdit(d.showAddress)),href:"javascript:;"},"修改地址")):(0,s.kq)("",!0)]),(0,s._)("div",E,[(0,s.Wm)(r,{onClick:l[1]||(l[1]=e=>d.openDialog()),class:"btn"},{default:(0,s.w5)((()=>[(0,s.Uk)("切换地址")])),_:1}),(0,s.Wm)(r,{onClick:l[2]||(l[2]=e=>d.openAddressEdit({})),class:"btn"},{default:(0,s.w5)((()=>[(0,s.Uk)("添加地址")])),_:1})])]),(0,s.Wm)(o,{visible:d.visibleDialog,"onUpdate:visible":l[4]||(l[4]=e=>d.visibleDialog=e),title:"切换收货地址"},{footer:(0,s.w5)((()=>[(0,s.Wm)(r,{onClick:l[3]||(l[3]=e=>d.visibleDialog=!1),type:"gray",style:{"margin-right":"20px"}},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1}),(0,s.Wm)(r,{onClick:d.confirmAddressFn,type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("确认")])),_:1},8,["onClick"])])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.list,(e=>((0,s.wg)(),(0,s.iD)("div",{onClick:l=>d.selectedAddress=e,class:(0,a.C_)([{active:d.selectedAddress&&d.selectedAddress.id===e.id},"text item"]),key:e.id},[(0,s._)("ul",null,[(0,s._)("li",null,[X,(0,s.Uk)((0,a.zw)(e.receiver),1)]),(0,s._)("li",null,[P,(0,s.Uk)((0,a.zw)(e.contact.replace(/^(\d{3})\d{4}(\d{4})/,"$1****$2")),1)]),(0,s._)("li",null,[S,(0,s.Uk)((0,a.zw)(e.fullLocation.replace(/ /g,"")+e.address),1)])])],10,T)))),128))])),_:1},8,["visible"]),(0,s.Wm)(c,{onOnSuccess:d.successHandler,ref:"addressEditCom"},null,8,["onOnSuccess"])],64)}t(541);var q=t(9242);const B=e=>((0,s.dD)("data-v-2d8098e0"),e=e(),(0,s.Cn)(),e),O={class:"address-edit"},F={class:"xtx-form"},Y={class:"xtx-form-item"},N=B((()=>(0,s._)("div",{class:"label"},"收货人：",-1))),K={class:"field"},M={class:"xtx-form-item"},J=B((()=>(0,s._)("div",{class:"label"},"手机号：",-1))),R={class:"field"},G={class:"xtx-form-item"},Q=B((()=>(0,s._)("div",{class:"label"},"地区：",-1))),ee={class:"field"},le={class:"xtx-form-item"},te=B((()=>(0,s._)("div",{class:"label"},"详细地址：",-1))),se={class:"field"},ae={class:"xtx-form-item"},de=B((()=>(0,s._)("div",{class:"label"},"邮政编码：",-1))),ne={class:"field"},ie={class:"xtx-form-item"},re=B((()=>(0,s._)("div",{class:"label"},"地址标签：",-1))),oe={class:"field"};function ce(e,l,t,a,d,n){const i=(0,s.up)("XtxCity"),r=(0,s.up)("XtxButton"),o=(0,s.up)("XtxDialog");return(0,s.wg)(),(0,s.j4)(o,{title:(a.formData.id?"修改":"添加")+"收货地址",visible:a.visibleDialog,"onUpdate:visible":l[6]||(l[6]=e=>a.visibleDialog=e)},{footer:(0,s.w5)((()=>[(0,s.Wm)(r,{onClick:l[5]||(l[5]=e=>a.visibleDialog=!1),type:"gray",style:{"margin-right":"20px"}},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1}),(0,s.Wm)(r,{onClick:a.submit,type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("确认")])),_:1},8,["onClick"])])),default:(0,s.w5)((()=>[(0,s._)("div",O,[(0,s._)("div",F,[(0,s._)("div",Y,[N,(0,s._)("div",K,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>a.formData.receiver=e),class:"input",placeholder:"请输入收货人"},null,512),[[q.nr,a.formData.receiver]])])]),(0,s._)("div",M,[J,(0,s._)("div",R,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>a.formData.contact=e),class:"input",placeholder:"请输入手机号"},null,512),[[q.nr,a.formData.contact]])])]),(0,s._)("div",G,[Q,(0,s._)("div",ee,[(0,s.Wm)(i,{fullLocation:a.formData.fullLocation,onChange:a.changeCity,placeholder:"请选择所在地区"},null,8,["fullLocation","onChange"])])]),(0,s._)("div",le,[te,(0,s._)("div",se,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>a.formData.address=e),class:"input",placeholder:"请输入详细地址"},null,512),[[q.nr,a.formData.address]])])]),(0,s._)("div",ae,[de,(0,s._)("div",ne,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>a.formData.postalCode=e),class:"input",placeholder:"请输入邮政编码"},null,512),[[q.nr,a.formData.postalCode]])])]),(0,s._)("div",ie,[re,(0,s._)("div",oe,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>a.formData.addressTags=e),class:"input",placeholder:"请输入地址标签，逗号分隔"},null,512),[[q.nr,a.formData.addressTags]])])])])])])),_:1},8,["title","visible"])}var ue=t(7535),pe=t(4870),me=t(8391),ve={name:"AddressEdit",setup(e,{emit:l}){const t=(0,pe.iH)(!1),s=e=>{if(t.value=!0,e.id)for(const l in a)a[l]=e[l];else for(const l in a)"isDefault"===l&&(a[l]=1),a[l]=null},a=(0,pe.qj)({receiver:null,contact:null,provinceCode:null,cityCode:null,countyCode:null,address:null,postalCode:null,addressTags:null,isDefault:1,fullLocation:null}),d=e=>{a.provinceCode=e.provinceCode,a.cityCode=e.cityCode,a.countyCode=e.countyCode,a.fullLocation=e.fullLocation},n=()=>{a.id?(0,ue.Yb)(a).then((e=>{(0,me.Z)({type:"success",text:"修改收货地址成功"}),t.value=!1,l("on-success",a)})):(0,ue.y$)(a).then((e=>{a.id=e.result.id,(0,me.Z)({type:"success",text:"添加收货地址成功"}),t.value=!1,l("on-success",a)}))};return{visibleDialog:t,open:s,formData:a,changeCity:d,submit:n}}},fe=t(89);const _e=(0,fe.Z)(ve,[["render",ce],["__scopeId","data-v-2d8098e0"]]);var he=_e,ge={name:"CheckoutAddress",components:{AddressEdit:he},props:{list:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:l}){const t=(0,pe.iH)(null),s=e.list.find((e=>0===e.isDefault));s?t.value=s:e.list.length&&(t.value=e.list[0]),l("change",t.value&&t.value.id);const a=(0,pe.iH)(!1),d=(0,pe.iH)(null),n=()=>{t.value=d.value,l("change",d.value?.id),a.value=!1},i=()=>{d.value=null,a.value=!0},r=(0,pe.iH)(null),o=e=>{r.value.open(e)},c=l=>{const t=e.list.find((e=>e.id===l.id));if(t)for(const e in t)t[e]=l[e];else{const t=JSON.stringify(l);e.list.unshift(JSON.parse(t))}};return{showAddress:t,visibleDialog:a,selectedAddress:d,confirmAddressFn:n,openDialog:i,openAddressEdit:o,addressEditCom:r,successHandler:c}}};const be=(0,fe.Z)(ge,[["render",V],["__scopeId","data-v-6fac3f59"]]);var ye=be,we=t(2483),ke={name:"XtxPayCheckoutPage",components:{CheckoutAddress:ye},setup(){const e=(0,we.yj)(),l=(0,pe.iH)(null);e.query.orderId?(0,ue.TM)(e.query.orderId).then((e=>{console.log("再次购买",e),l.value=e.result,s.goods=e.result.goods.map((({skuId:e,count:l})=>({skuId:e,count:l})))})):(0,ue.LV)().then((e=>{l.value=e.result,s.goods=e.result.goods.map((({skuId:e,count:l})=>({skuId:e,count:l})))}));const t=e=>{s.addressId=e},s=(0,pe.qj)({deliveryTimeType:1,payType:1,payChannel:1,buyerMessage:"",goods:[],addressId:null}),a=(0,we.tv)(),d=()=>{if(!s.addressId)return(0,me.Z)({text:"亲，请选择收货地址"});(0,ue.pm)(s).then((e=>{(0,me.Z)({type:"success",text:"提交订单成功"}),a.push(`/member/pay?orderId=${e.result.id}`)}))};return{order:l,changeAddress:t,submitOrderFn:d}}};const Ce=(0,fe.Z)(ke,[["render",A],["__scopeId","data-v-9c72f968"]]);var xe=Ce}}]);
//# sourceMappingURL=989.90896c4a.js.map