"use strict";(self["webpackChunkeribbit_client_pc"]=self["webpackChunkeribbit_client_pc"]||[]).push([[79],{1787:function(e,s,a){a.d(s,{IA:function(){return t},ZI:function(){return n},lK:function(){return l},s6:function(){return i},t5:function(){return c}});var o=a(4471);const t=e=>(0,o.Z)("/goods","get",{id:e}),n=(e,s=16)=>(0,o.Z)("/goods/relevant","get",{id:e,limit:s}),l=({id:e,type:s,limit:a=3})=>(0,o.Z)("/goods/hot","get",{id:e,type:s,limit:a}),c=e=>(0,o.Z)(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate`,"get"),i=(e,s)=>(0,o.Z)(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate/page`,"get",s)},2711:function(e,s,a){a.d(s,{Z:function(){return p}});var o=a(3396),t=a(7139);const n=["src"],l={class:"name ellipsis"},c={class:"desc ellipsis"},i={class:"price"};function d(e,s,a,d,r,u){const g=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(g,{to:`/product/${a.goods.id}`,class:"goods-item"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.goods.picture,alt:""},null,8,n),(0,o._)("p",l,(0,t.zw)(a.goods.name),1),(0,o._)("p",c,(0,t.zw)(a.goods.desc),1),(0,o._)("p",i,"¥"+(0,t.zw)(a.goods.price),1)])),_:1},8,["to"])}var r={name:"GoodsItem",props:{goods:{type:Object,default:()=>({})}}},u=a(89);const g=(0,u.Z)(r,[["render",d],["__scopeId","data-v-7411d050"]]);var p=g},4840:function(e,s,a){a.d(s,{Z:function(){return f}});var o=a(3396),t=a(7139);const n=e=>((0,o.dD)("data-v-627fc13b"),e=e(),(0,o.Cn)(),e),l={class:"goods-relevant"},c={class:"header"},i=n((()=>(0,o._)("i",{class:"icon"},null,-1))),d={class:"title"};function r(e,s,a,n,r,u){const g=(0,o.up)("XtxCarousel");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",c,[i,(0,o._)("span",d,(0,t.zw)(a.goodsId?"同类商品推荐":"猜你喜欢"),1)]),(0,o.Wm)(g,{sliders:n.sliders},null,8,["sliders"])])}a(7658);var u=a(1787),g=a(4870),p={name:"GoodsRelevant",props:{goodsId:{type:String,default:""}},setup(e){const s=(0,g.iH)([]);return(0,u.ZI)(e.goodsId).then((e=>{const a=4,o=Math.ceil(e.result.length/a);for(let t=0;t<o;t++)s.value.push(e.result.slice(a*t,a*(t+1)))})),{sliders:s}}},v=a(89);const m=(0,v.Z)(p,[["render",r],["__scopeId","data-v-627fc13b"]]);var f=m},6901:function(e,s,a){a.d(s,{Z:function(){return k}});var o=a(3396),t=a(7139);const n={class:"goods-sku"},l=["onClick","src"],c=["onClick"];function i(e,s,a,i,d,r){return(0,o.wg)(),(0,o.iD)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.goods.specs,(e=>((0,o.wg)(),(0,o.iD)("dl",{key:e.id},[(0,o._)("dt",null,(0,t.zw)(e.name),1),(0,o._)("dd",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.values,(s=>((0,o.wg)(),(0,o.iD)(o.HY,{key:s.name},[s.picture?((0,o.wg)(),(0,o.iD)("img",{key:0,class:(0,t.C_)([{active:s.selected,disabled:s.disabled},"selected"]),onClick:a=>i.changeSku(e,s),src:s.picture,alt:""},null,10,l)):((0,o.wg)(),(0,o.iD)("span",{key:1,class:(0,t.C_)({active:s.selected,disabled:s.disabled}),onClick:a=>i.changeSku(e,s)},(0,t.zw)(s.name),11,c))],64)))),128))])])))),128))])}a(7658);function d(e){const s=[],a=2**e.length;for(let o=0;o<a;o+=1){const a=[];for(let s=0;s<e.length;s+=1)o&1<<s&&a.push(e[s]);s.push(a)}return s}const r="★",u=e=>{const s={};return e.forEach((e=>{if(e.inventory>0){const a=e.specs.map((e=>e.valueName)),o=d(a);o.forEach((a=>{const o=a.join(r);s[o]?s[o].push(e.id):s[o]=[e.id]}))}})),s},g=e=>{const s=[];return e.forEach((e=>{const a=e.values.find((e=>e.selected));s.push(a?a.name:void 0)})),s},p=(e,s)=>{e.forEach(((a,o)=>{const t=g(e);a.values.forEach((e=>{if(e.selected)return;t[o]=e.name;const a=t.filter((e=>e)).join(r);e.disabled=!s[a]}))}))},v=(e,s)=>{const a=e.skus.find((e=>e.id===s));e.specs.forEach(((e,s)=>{const o=e.values.find((e=>e.name===a.specs[s].valueName));o.selected=!0}))};var m={name:"GoodsSku",props:{goods:{type:Object,default:()=>({})},skuId:{type:String,default:""}},setup(e,{emit:s}){const a=u(e.goods.skus);e.skuId&&v(e.goods,e.skuId),p(e.goods.specs,a);const o=(o,t)=>{if(t.disabled)return;t.selected?t.selected=!1:(o.values.forEach((e=>{e.selected=!1})),t.selected=!0),p(e.goods.specs,a);const n=g(e.goods.specs).filter((e=>e));if(n.length===e.goods.specs.length){const o=a[n.join(r)],t=e.goods.skus.find((e=>e.id===o[0]));s("change",{skuId:t.id,price:t.price,oldPrice:t.oldPrice,inventory:t.inventory,specsText:t.specs.reduce(((e,s)=>`${e} ${s.name}:${s.valueName}`),"").trim()})}else s("change",{})};return{changeSku:o}}},f=a(89);const _=(0,f.Z)(m,[["render",i],["__scopeId","data-v-7b3080da"]]);var k=_},4079:function(e,s,a){a.r(s),a.d(s,{default:function(){return us}});var o=a(3396),t=a(7139);const n={class:"xtx-goods-page"},l={class:"container"},c={class:"goods-info"},i={class:"media"},d={class:"spec"},r={class:"goods-footer"},u={class:"goods-article"},g={class:"goods-aside"};function p(e,s,a,p,v,m){const f=(0,o.up)("XtxBreadItem"),_=(0,o.up)("XtxBread"),k=(0,o.up)("GoodsImage"),w=(0,o.up)("GoodsSales"),y=(0,o.up)("GoodsName"),h=(0,o.up)("GoodsSku"),b=(0,o.up)("XtxNumbox"),C=(0,o.up)("XtxButton"),I=(0,o.up)("GoodsRelevant"),D=(0,o.up)("GoodsTabs"),x=(0,o.up)("GoodsWarn"),G=(0,o.up)("GoodsHot");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",l,[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首页")])),_:1}),p.goods?((0,o.wg)(),(0,o.j4)(f,{key:0,to:`/category/${p.goods.categories[1].id}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(p.goods.categories[1].name),1)])),_:1},8,["to"])):(0,o.kq)("",!0),p.goods?((0,o.wg)(),(0,o.j4)(f,{key:1,to:`/category/sub/${p.goods.categories[0].id}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(p.goods.categories[0].name),1)])),_:1},8,["to"])):(0,o.kq)("",!0),p.goods?((0,o.wg)(),(0,o.j4)(f,{key:2},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(p.goods.name),1)])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o._)("div",c,[(0,o._)("div",i,[p.goods?((0,o.wg)(),(0,o.j4)(k,{key:0,images:p.goods.mainPictures},null,8,["images"])):(0,o.kq)("",!0),(0,o.Wm)(w)]),(0,o._)("div",d,[p.goods?((0,o.wg)(),(0,o.j4)(y,{key:0,goods:p.goods},null,8,["goods"])):(0,o.kq)("",!0),p.goods&&p.goods.specs?((0,o.wg)(),(0,o.j4)(h,{key:1,goods:p.goods,onChange:p.changeSku},null,8,["goods","onChange"])):(0,o.kq)("",!0),p.goods?((0,o.wg)(),(0,o.j4)(b,{key:2,label:"数量",modelValue:p.num,"onUpdate:modelValue":s[0]||(s[0]=e=>p.num=e),max:p.goods.inventory},null,8,["modelValue","max"])):(0,o.kq)("",!0),p.goods?((0,o.wg)(),(0,o.j4)(C,{key:3,onClick:s[1]||(s[1]=e=>p.insertCart()),type:"primary",style:{"margin-top":"20px"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" 加入购物车 ")])),_:1})):(0,o.kq)("",!0)])]),p.goods?((0,o.wg)(),(0,o.j4)(I,{key:0,goodsId:p.goods.id},null,8,["goodsId"])):(0,o.kq)("",!0),(0,o._)("div",r,[(0,o._)("div",u,[(0,o.Wm)(D),(0,o.Wm)(x)]),(0,o._)("div",g,[(0,o.Wm)(G),(0,o.Wm)(G,{type:2}),(0,o.Wm)(G,{type:3})])])])])}const v={key:0,class:"goods-tabs"};function m(e,s,a,n,l,c){return n.goods?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("nav",null,[(0,o._)("a",{onClick:s[0]||(s[0]=e=>n.activeName="GoodsDetail"),class:(0,t.C_)({active:"GoodsDetail"===n.activeName}),href:"javascript:;"},"商品详情",2),(0,o._)("a",{onClick:s[1]||(s[1]=e=>n.activeName="GoodsComment"),class:(0,t.C_)({active:"GoodsComment"===n.activeName}),href:"javascript:;"},[(0,o.Uk)("商品评价"),(0,o._)("span",null,"("+(0,t.zw)(n.goods.commentCount)+")",1)],2)]),((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(n.activeName)))],1024))])):(0,o.kq)("",!0)}const f={class:"goods-detail"},_={class:"attrs"},k={class:"dt"},w={class:"dd"},y=["src"];function h(e,s,a,n,l,c){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("ul",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods.details.properties,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.value},[(0,o._)("span",k,(0,t.zw)(e.name),1),(0,o._)("span",w,(0,t.zw)(e.value),1)])))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods.details.pictures,(e=>((0,o.wg)(),(0,o.iD)("img",{key:e,src:e,alt:""},null,8,y)))),128))])}var b={name:"GoodsDetail",setup(){const e=(0,o.f3)("goods");return{goods:e}}},C=a(89);const I=(0,C.Z)(b,[["render",h],["__scopeId","data-v-04080ef9"]]);var D=I;const x=e=>((0,o.dD)("data-v-317be798"),e=e(),(0,o.Cn)(),e),G={class:"goods-comment"},j={class:"head"},P={key:0,class:"data"},H=x((()=>(0,o._)("span",null,"人购买",-1))),z=x((()=>(0,o._)("span",null,"好评率",-1))),q={class:"tags"},Z=x((()=>(0,o._)("div",{class:"dt"},"大家都在说：",-1))),S={key:0,class:"dd"},Y=["onClick"],N={key:0,class:"sort"},L=x((()=>(0,o._)("span",null,"排序：",-1))),K={key:1,class:"list"},T={class:"user"},W=["src"],$={class:"body"},X={class:"score"},E={class:"attr"},F={class:"text"},U={class:"time"},A={class:"zan"},R=x((()=>(0,o._)("i",{class:"iconfont icon-dianzan"},null,-1)));function O(e,s,a,n,l,c){const i=(0,o.up)("GoodsCommentImage"),d=(0,o.up)("XtxPagination");return(0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("div",j,[n.commentInfo?((0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("p",null,[(0,o._)("span",null,(0,t.zw)(n.commentInfo.salesCount),1),H]),(0,o._)("p",null,[(0,o._)("span",null,(0,t.zw)(n.commentInfo.praisePercent),1),z])])):(0,o.kq)("",!0),(0,o._)("div",q,[Z,n.commentInfo?((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.commentInfo.tags,((e,s)=>((0,o.wg)(),(0,o.iD)("a",{onClick:e=>n.changeTag(s),key:e.title,href:"javascript:;",class:(0,t.C_)({active:n.currentTagIndex===s})},(0,t.zw)(e.title)+"（"+(0,t.zw)(e.tagCount)+"）",11,Y)))),128))])):(0,o.kq)("",!0)])]),n.commentInfo?((0,o.wg)(),(0,o.iD)("div",N,[L,(0,o._)("a",{onClick:s[0]||(s[0]=e=>n.changeSort(null)),class:(0,t.C_)({active:null===n.reqParams.sortField}),href:"javascript:;"},"默认",2),(0,o._)("a",{onClick:s[1]||(s[1]=s=>n.changeSort(e.createTime)),class:(0,t.C_)({active:"createTime"===n.reqParams.sortField}),href:"javascript:;"},"最新",2),(0,o._)("a",{onClick:s[2]||(s[2]=s=>n.changeSort(e.praiseCount)),class:(0,t.C_)({active:"praiseCount"===n.reqParams.sortField}),href:"javascript:;"},"最热",2)])):(0,o.kq)("",!0),n.commentList?((0,o.wg)(),(0,o.iD)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.commentList,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"item",key:e.id},[(0,o._)("div",T,[(0,o._)("img",{src:e.member.avatar,alt:""},null,8,W),(0,o._)("span",null,(0,t.zw)(n.formatNickname(e.member.nickname)),1)]),(0,o._)("div",$,[(0,o._)("div",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.score,(e=>((0,o.wg)(),(0,o.iD)("i",{key:e+"s",class:"iconfont icon-wjx01"})))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(5-e.score,(e=>((0,o.wg)(),(0,o.iD)("i",{key:e+"k",class:"iconfont icon-wjx02"})))),128)),(0,o._)("span",E,(0,t.zw)(n.formatSpecs(e.orderInfo.specs)),1)]),(0,o._)("div",F,(0,t.zw)(e.content),1),e.pictures.length?((0,o.wg)(),(0,o.j4)(i,{key:0,pictures:e.pictures},null,8,["pictures"])):(0,o.kq)("",!0),(0,o._)("div",U,[(0,o._)("span",null,(0,t.zw)(e.orderInfo.createTime),1),(0,o._)("span",A,[R,(0,o.Uk)((0,t.zw)(e.praiseCount),1)])])])])))),128))])):(0,o.kq)("",!0),n.total?((0,o.wg)(),(0,o.j4)(d,{key:2,total:n.total,"page-size":n.reqParams.pageSize,"current-page":n.reqParams.page,onCurrentChange:[n.changePagerFn,s[3]||(s[3]=e=>n.reqParams.page=e)]},null,8,["total","page-size","current-page","onCurrentChange"])):(0,o.kq)("",!0)])}a(541);const V={class:"goods-comment-image"},B={class:"list"},M=["onClick"],J=["src"],Q={key:0,class:"preview"},ee=["src"];function se(e,s,a,n,l,c){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pictures,(e=>((0,o.wg)(),(0,o.iD)("a",{onClick:s=>n.currImg=e,class:(0,t.C_)({active:n.currImg===e}),key:e,href:"javascript:;"},[(0,o._)("img",{alt:"",src:e},null,8,J)],10,M)))),128))]),n.currImg?((0,o.wg)(),(0,o.iD)("div",Q,[(0,o._)("img",{src:n.currImg,alt:""},null,8,ee),(0,o._)("i",{onClick:s[0]||(s[0]=e=>n.currImg=null),class:"iconfont icon-close-new"})])):(0,o.kq)("",!0)])}var ae=a(4870),oe={name:"GoodsCommentImage",props:{pictures:{type:Array,default:()=>[]}},setup(e){const s=(0,ae.iH)(null);return{currImg:s}}};const te=(0,C.Z)(oe,[["render",se],["__scopeId","data-v-381dfdb8"]]);var ne=te,le=a(1787),ce={name:"GoodsComment",components:{GoodsCommentImage:ne},setup(){const e=(0,ae.iH)([]),s=(0,ae.iH)(null),a=(0,o.f3)("goods");(0,le.t5)(a.value.id).then((e=>{e.result.tags.unshift({title:"有图",tagCount:e.result.hasPictureCount,type:"img"}),e.result.tags.unshift({title:"全部评价",tagCount:e.result.evaluateCount,type:"all"}),s.value=e.result}));const t=e=>{c.sortField=e,c.page=1},n=(0,ae.iH)(0),l=e=>{n.value=e;const a=s.value.tags[e];"all"===a.type?(c.hasPicture=null,c.tag=null):"img"===a.type?(c.hasPicture=!0,c.tag=null):(c.hasPicture=null,c.tag=a.title),c.page=1},c=(0,ae.qj)({page:1,pageSize:10,hasPicture:null,tag:null,sortField:null}),i=(0,ae.iH)(0);(0,o.YP)(c,(()=>{(0,le.s6)(a.value.id,c).then((s=>{e.value=s.result.items,i.value=s.result.counts}))}),{immediate:!0});const d=e=>e.reduce(((e,s)=>`${e} ${s.name}: ${s.nameValue}`),"").trim(),r=e=>e.substr(0,1)+"****"+e.substr(-1),u=e=>{c.page=e};return{commentInfo:s,currentTagIndex:n,changeTag:l,reqParams:c,commentList:e,changeSort:t,formatSpecs:d,formatNickname:r,total:i,changePagerFn:u}}};const ie=(0,C.Z)(ce,[["render",O],["__scopeId","data-v-317be798"]]);var de=ie,re={name:"GoodsTabs",components:{GoodsDetail:D,GoodsComment:de},setup(){const e=(0,ae.iH)("GoodsDetail"),s=(0,o.f3)("goods");return{activeName:e,goods:s}}};const ue=(0,C.Z)(re,[["render",m],["__scopeId","data-v-470c13b9"]]);var ge=ue;const pe={class:"goods-warn"},ve=(0,o.uE)('<h3 data-v-e7f1e2c8>注意事项</h3><p class="tit" data-v-e7f1e2c8>• 购买运费如何收取？</p><p data-v-e7f1e2c8> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br data-v-e7f1e2c8><p class="tit" data-v-e7f1e2c8>• 使用什么快递发货?</p><p data-v-e7f1e2c8>默认使用顺丰快递发货(个别商品使用其他快递）</p><p data-v-e7f1e2c8>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-e7f1e2c8><p class="tit" data-v-e7f1e2c8>• 如何申请退货?</p><p data-v-e7f1e2c8> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p><p data-v-e7f1e2c8>2.内裤和食品等特殊商品无质量问题不支持退货；</p><p data-v-e7f1e2c8> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p><p data-v-e7f1e2c8> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>',13),me=[ve];function fe(e,s,a,t,n,l){return(0,o.wg)(),(0,o.iD)("div",pe,me)}var _e={name:"GoodsWarn"};const ke=(0,C.Z)(_e,[["render",fe],["__scopeId","data-v-e7f1e2c8"]]);var we=ke;const ye={class:"goods-hot"},he={key:0};function be(e,s,a,n,l,c){const i=(0,o.up)("GoodsItem");return(0,o.wg)(),(0,o.iD)("div",ye,[(0,o._)("h3",null,(0,t.zw)(n.title),1),n.getsList?((0,o.wg)(),(0,o.iD)("div",he,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.getsList,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.id,goods:e},null,8,["goods"])))),128))])):(0,o.kq)("",!0)])}var Ce=a(2711),Ie=a(2483),De={name:"GoodsHot",components:{GoodsItem:Ce.Z},props:{type:{type:Number,default:1}},setup(e){const s=(0,Ie.yj)(),a={1:"24小时热销榜",2:"周热销榜",3:"总热销榜"},t=(0,o.Fl)((()=>a[e.type])),n=(0,ae.iH)([]);return(0,le.lK)(s.params.id,e.type).then((e=>{n.value=e.result})),{title:t,getsList:n}}};const xe=(0,C.Z)(De,[["render",be],["__scopeId","data-v-fea30272"]]);var Ge=xe,je=a(6901),Pe=a(4840);const He={class:"goods-sales"},ze=(0,o.uE)('<li data-v-ca3db56a><p data-v-ca3db56a>销量人气</p><p data-v-ca3db56a>200+</p><p data-v-ca3db56a><i class="iconfont icon-task-filling" data-v-ca3db56a></i>销量人气</p></li><li data-v-ca3db56a><p data-v-ca3db56a>商品评价</p><p data-v-ca3db56a>400+</p><p data-v-ca3db56a><i class="iconfont icon-comment-filling" data-v-ca3db56a></i>查看评价</p></li><li data-v-ca3db56a><p data-v-ca3db56a>收藏人气</p><p data-v-ca3db56a>600+</p><p data-v-ca3db56a><i class="iconfont icon-favorite-filling" data-v-ca3db56a></i>收藏商品</p></li><li data-v-ca3db56a><p data-v-ca3db56a>品牌信息</p><p data-v-ca3db56a>苏宁电器</p><p data-v-ca3db56a><i class="iconfont icon-dynamic-filling" data-v-ca3db56a></i>品牌主页</p></li>',4),qe=[ze];function Ze(e,s,a,t,n,l){return(0,o.wg)(),(0,o.iD)("ul",He,qe)}var Se={name:"GoodsSales"};const Ye=(0,C.Z)(Se,[["render",Ze],["__scopeId","data-v-ca3db56a"]]);var Ne=Ye;const Le=e=>((0,o.dD)("data-v-644320e3"),e=e(),(0,o.Cn)(),e),Ke={class:"g-name"},Te={class:"g-desc"},We={class:"g-price"},$e={class:"g-service"},Xe=Le((()=>(0,o._)("dl",null,[(0,o._)("dt",null,"促销"),(0,o._)("dd",null,"12月好物放送，App领券购买直降120元")],-1))),Ee=Le((()=>(0,o._)("dt",null,"配送",-1))),Fe=Le((()=>(0,o._)("dl",null,[(0,o._)("dt",null,"服务"),(0,o._)("dd",null,[(0,o._)("span",null,"无忧退货"),(0,o._)("span",null,"快速退款"),(0,o._)("span",null,"免费包邮"),(0,o._)("a",{href:"javascript:;"},"了解详情")])],-1)));function Ue(e,s,a,n,l,c){const i=(0,o.up)("XtxCity");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("p",Ke,(0,t.zw)(a.goods.name),1),(0,o._)("p",Te,(0,t.zw)(a.goods.desc),1),(0,o._)("p",We,[(0,o._)("span",null,(0,t.zw)(a.goods.price),1),(0,o._)("span",null,(0,t.zw)(a.goods.oldPrice),1)]),(0,o._)("div",$e,[Xe,(0,o._)("dl",null,[Ee,(0,o._)("dd",null,[(0,o.Uk)("至 "),(0,o.Wm)(i,{onChange:n.changeCity,fullLocation:n.fullLocation},null,8,["onChange","fullLocation"])])]),Fe])],64)}var Ae={name:"GoodName",props:{goods:{type:Object,default:()=>({})}},setup(e){const s=(0,ae.iH)("110000"),a=(0,ae.iH)("119900"),o=(0,ae.iH)("110101"),t=(0,ae.iH)("北京市 市辖区 东城区");if(e.goods.userAddresses){const n=e.goods.userAddresses.find((e=>1===e.isDefault));n&&(s.value=n.provinceCode,a.value=n.cityCode,o.value=n.countyCode,t.value=n.fullLocation)}const n=e=>{s.value=e.provinceCode,a.value=e.cityCode,o.value=e.countyCode,t.value=e.fullLocation};return{fullLocation:t,changeCity:n}}};const Re=(0,C.Z)(Ae,[["render",Ue],["__scopeId","data-v-644320e3"]]);var Oe=Re,Ve=a(9242);const Be={class:"goods-image"},Me={class:"middle",ref:"target"},Je=["src"],Qe={class:"small"},es=["onMouseenter","src"];function ss(e,s,a,n,l,c){return(0,o.wg)(),(0,o.iD)("div",Be,[(0,o.wy)((0,o._)("div",{class:"large",style:(0,t.j5)([{backgroundImage:`url(${a.images[n.currIndex]})`},n.largePosition])},null,4),[[Ve.F8,n.show]]),(0,o._)("div",Me,[(0,o._)("img",{src:a.images[n.currIndex],alt:""},null,8,Je),(0,o.wy)((0,o._)("div",{style:(0,t.j5)(n.layerPosition),class:"layer"},null,4),[[Ve.F8,n.show]])],512),(0,o._)("ul",Qe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.images,((e,s)=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:(0,t.C_)({active:s===n.currIndex})},[(0,o._)("img",{onMouseenter:e=>n.currIndex=s,src:e,alt:""},null,40,es)],2)))),128))])])}var as=a(6367),os={name:"GoodsImage",props:{images:{type:Array,default:()=>[]}},setup(e){const s=(0,ae.iH)(0),a=(0,ae.iH)(!1),t=(0,ae.qj)({left:0,top:0}),n=(0,ae.qj)({backgroundPositionX:0,backgroundPositionY:0}),l=(0,ae.iH)(null),{elementX:c,elementY:i,isOutside:d}=(0,as.jYR)(l);return(0,o.YP)([c,i,d],(()=>{a.value=!d.value;const e={x:0,y:0};c.value<100?e.x=0:c.value>300?e.x=200:e.x=c.value-100,i.value<100?e.y=0:i.value>300?e.y=200:e.y=i.value-100,t.left=e.x+"px",t.top=e.y+"px",n.backgroundPositionX=-2*e.x+"px",n.backgroundPositionY=-2*e.y+"px"})),{currIndex:s,target:l,show:a,layerPosition:t,largePosition:n}}};const ts=(0,C.Z)(os,[["render",ss],["__scopeId","data-v-26cd216e"]]);var ns=ts,ls=a(65),cs=a(8391),is={name:"XtxGoodsPage",components:{GoodsRelevant:Pe.Z,GoodsImage:ns,GoodsSales:Ne,GoodsName:Oe,GoodsSku:je.Z,GoodsTabs:ge,GoodsHot:Ge,GoodsWarn:we},setup(){const e=ds(),s=s=>{s.skuId&&(e.value.price=s.price,e.value.oldPrice=s.oldPrice,e.value.inventory=s.inventory),t.value=s};(0,o.JJ)("goods",e);const a=(0,ls.oR)(),t=(0,ae.iH)(null),n=()=>{if(t.value&&t.value.skuId){const{skuId:s,specsText:o,inventory:n}=t.value,{name:c,price:i,mainPictures:d,id:r}=e.value;a.dispatch("cart/insertCart",{skuId:s,attrsText:o,stock:n,name:c,price:i,picture:d[0],nowPrice:i,id:r,count:l.value,selected:!0,isEffective:!0}).then((()=>{(0,cs.Z)({type:"success",text:"成功加入购物车"})}))}else(0,cs.Z)({text:"请选择完整的规格"})},l=(0,ae.iH)(1);return{num:l,goods:e,changeSku:s,insertCart:n}}};const ds=()=>{const e=(0,ae.iH)(null),s=(0,Ie.yj)();return(0,o.YP)((()=>s.params.id),(a=>{a&&`/product/${a}`===s.path&&(0,le.IA)(s.params.id).then((s=>{console.log("商品详情的数据：",s),e.value=null,(0,o.Y3)((()=>{e.value=s.result}))}))}),{immediate:!0}),e},rs=(0,C.Z)(is,[["render",p],["__scopeId","data-v-21a4b2cb"]]);var us=rs}}]);
//# sourceMappingURL=79.1b08597a.js.map