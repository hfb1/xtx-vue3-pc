"use strict";(self["webpackChunkeribbit_client_pc"]=self["webpackChunkeribbit_client_pc"]||[]).push([[135],{2711:function(e,t,a){a.d(t,{Z:function(){return g}});var s=a(3396),r=a(7139);const o=["src"],n={class:"name ellipsis"},i={class:"desc ellipsis"},l={class:"price"};function c(e,t,a,c,d,u){const p=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.j4)(p,{to:`/product/${a.goods.id}`,class:"goods-item"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:a.goods.picture,alt:""},null,8,o),(0,s._)("p",n,(0,r.zw)(a.goods.name),1),(0,s._)("p",i,(0,r.zw)(a.goods.desc),1),(0,s._)("p",l,"¥"+(0,r.zw)(a.goods.price),1)])),_:1},8,["to"])}var d={name:"GoodsItem",props:{goods:{type:Object,default:()=>({})}}},u=a(89);const p=(0,u.Z)(d,[["render",c],["__scopeId","data-v-7411d050"]]);var g=p},1135:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var s=a(3396);const r={class:"sub-category"},o={class:"container"},n={class:"goods-list"};function i(e,t,a,i,l,c){const d=(0,s.up)("SubBread"),u=(0,s.up)("SubFilter"),p=(0,s.up)("SubSort"),g=(0,s.up)("GoodsItem"),h=(0,s.up)("XtxInfiniteLoading");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s.Wm)(d),(0,s.Wm)(u,{onFilterChange:i.fliterChange},null,8,["onFilterChange"]),(0,s._)("div",n,[(0,s.Wm)(p,{onSortChange:i.sortChange},null,8,["onSortChange"]),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.goodsList,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id},[(0,s.Wm)(g,{goods:e},null,8,["goods"])])))),128))]),(0,s.Wm)(h,{loading:i.loading,finished:i.finished,onInfinite:i.getDate},null,8,["loading","finished","onInfinite"])])])])}a(7658);var l=a(4870),c=a(7139);const d=e=>((0,s.dD)("data-v-6592ec75"),e=e(),(0,s.Cn)(),e),u={key:0,class:"sub-filter"},p={class:"item"},g=d((()=>(0,s._)("div",{class:"head"},"品牌：",-1))),h={class:"body"},m=["onClick"],v={class:"head"},f={class:"body"},_=["onClick"],b={key:1,class:"sub-filter"};function w(e,t,a,r,o,n){const i=(0,s.up)("XtxSkeleton");return r.filterData&&!r.filterLoading?((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",p,[g,(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filterData.brands,(e=>((0,s.wg)(),(0,s.iD)("a",{onClick:t=>r.changeBrands(e.id),class:(0,c.C_)({active:e.id===r.filterData.brands.selectedBrand}),href:"javascript:;",key:e.id},(0,c.zw)(e.name),11,m)))),128))])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filterData.saleProperties,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"item",key:e.id},[(0,s._)("div",v,(0,c.zw)(e.name)+"：",1),(0,s._)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.properties,(t=>((0,s.wg)(),(0,s.iD)("a",{onClick:a=>r.changeProp(e,t.id),class:(0,c.C_)({active:t.id===e.selectedProp}),href:"javascript:;",key:t.id},(0,c.zw)(t.name),11,_)))),128))])])))),128))])):((0,s.wg)(),(0,s.iD)("div",b,[(0,s.Wm)(i,{class:"item",width:"800px",height:"40px"}),(0,s.Wm)(i,{class:"item",width:"800px",height:"40px"}),(0,s.Wm)(i,{class:"item",width:"600px",height:"40px"}),(0,s.Wm)(i,{class:"item",width:"600px",height:"40px"}),(0,s.Wm)(i,{class:"item",width:"600px",height:"40px"})]))}a(541);var C=a(588),k=a(2483),y={name:"SubFilter",setup(e,{emit:t}){const a=(0,k.yj)(),r=(0,l.iH)(null),o=(0,l.iH)(!1);(0,s.YP)((()=>a.params.id),(e=>{e&&`/category/sub/${e}`===a.path&&(o.value=!0,(0,C.qu)(a.params.id).then((e=>{console.log("筛选的数据：",e.result),e.result.brands.selectedBrand=null,e.result.brands.unshift({id:null,name:"全部"}),e.result.saleProperties.forEach((e=>{e.selectedProp=null,e.properties.unshift({id:null,name:"全部"})})),r.value=e.result,o.value=!1})))}),{immediate:!0});const n=()=>{const e={brandId:null,attrs:[]};return e.brandId=r.value.brands.selectedBrand,r.value.saleProperties.forEach((t=>{if(t.selectedProp){const a=t.properties.find((e=>e.id===t.selectedProp));e.attrs.push({groupName:t.name,propertyName:a.name})}})),0===e.attrs.length&&(e.attrs=null),e},i=e=>{r.value.brands.selectedBrand!==e&&(r.value.brands.selectedBrand=e,t("filter-change",n()))},c=(e,a)=>{e.selectedProp!==a&&(e.selectedProp=a,t("filter-change",n()))};return{filterData:r,filterLoading:o,changeBrands:i,changeProp:c}}},P=a(89);const S=(0,P.Z)(y,[["render",w],["__scopeId","data-v-6592ec75"]]);var D=S,j=a(9242);function x(e,t,a,r,o,n){const i=(0,s.up)("XtxBreadItem"),l=(0,s.up)("XtxBread");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("首页")])),_:1}),r.category.top?((0,s.wg)(),(0,s.j4)(i,{key:r.category.top.id,to:`/category/${r.category.top.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(r.category.top.name),1)])),_:1},8,["to"])):(0,s.kq)("",!0),(0,s.Wm)(j.uT,{name:"fade-right"},{default:(0,s.w5)((()=>[r.category.sub?((0,s.wg)(),(0,s.j4)(i,{key:r.category.sub.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(r.category.sub.name),1)])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1})}var F=a(65),I={name:"SubBread",setup(){const e=(0,k.yj)(),t=(0,F.oR)(),a=(0,s.Fl)((()=>{const a={};return t.state.category.list.forEach((t=>{if(t.children){const s=t.children.find((t=>t.id===e.params.id));s&&(a.top={id:t.id,name:t.name},a.sub={id:s.id,name:s.name})}})),a}));return{category:a}}};const W=(0,P.Z)(I,[["render",x]]);var B=W;const z={class:"sub-sort"},H={class:"sort"},M={class:"check"};function U(e,t,a,r,o,n){const i=(0,s.up)("XtxCheckbox");return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",H,[(0,s._)("a",{class:(0,c.C_)({active:null===r.sortParams.sortField}),onClick:t[0]||(t[0]=e=>r.changeSort(null)),href:"javascript:;"},"默认排序",2),(0,s._)("a",{class:(0,c.C_)({active:"publishTime"===r.sortParams.sortField}),onClick:t[1]||(t[1]=e=>r.changeSort("publishTime")),href:"javascript:;"},"最新商品",2),(0,s._)("a",{class:(0,c.C_)({active:"orderNum"===r.sortParams.sortField}),onClick:t[2]||(t[2]=e=>r.changeSort("orderNum")),href:"javascript:;"},"最高人气",2),(0,s._)("a",{class:(0,c.C_)({active:"evaluateNum"===r.sortParams.sortField}),onClick:t[3]||(t[3]=e=>r.changeSort("evaluateNum")),href:"javascript:;"},"评论最多",2),(0,s._)("a",{onClick:t[4]||(t[4]=e=>r.changeSort("price")),href:"javascript:;"},[(0,s.Uk)(" 价格排序 "),(0,s._)("i",{class:(0,c.C_)([{active:"price"===r.sortParams.sortField&&"asc"===r.sortParams.sortMethod},"arrow up"])},null,2),(0,s._)("i",{class:(0,c.C_)([{active:"price"===r.sortParams.sortField&&"desc"===r.sortParams.sortMethod},"arrow down"])},null,2)])]),(0,s._)("div",M,[(0,s.Wm)(i,{onChange:r.changeCheck,modelValue:r.sortParams.inventory,"onUpdate:modelValue":t[5]||(t[5]=e=>r.sortParams.inventory=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("仅显示有货商品")])),_:1},8,["onChange","modelValue"]),(0,s.Wm)(i,{onChange:r.changeCheck,modelValue:r.sortParams.onlyDiscount,"onUpdate:modelValue":t[6]||(t[6]=e=>r.sortParams.onlyDiscount=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("仅显示特惠商品")])),_:1},8,["onChange","modelValue"])])])}var Z={name:"SubSort",setup(e,{emit:t}){const a=(0,l.qj)({inventory:!1,onlyDiscount:!1,sortField:null,sortMethod:null}),s=e=>{if("price"===e)a.sortField=e,null===a.sortMethod?a.sortMethod="desc":a.sortMethod="desc"===a.sortMethod?"asc":"desc";else{if(a.sortField===e)return;a.sortField=e,a.sortMethod=null}t("sort-change",a)},r=()=>{t("sort-change",a)};return{sortParams:a,changeSort:s,changeCheck:r}}};const L=(0,P.Z)(Z,[["render",U],["__scopeId","data-v-013b5020"]]);var N=L,V=a(2711),Y={name:"SubCategory",components:{SubBread:B,SubFilter:D,SubSort:N,GoodsItem:V.Z},setup(){const e=(0,k.yj)(),t=(0,l.iH)(!1),a=(0,l.iH)(!1),r=(0,l.iH)([]);let o={page:1,pageSize:20};const n=()=>{t.value=!0,o.categoryId=e.params.id,(0,C.Sm)(o).then((({result:e})=>{e.items.length?(r.value.push(...e.items),o.page++):a.value=!0,t.value=!1}))};(0,s.YP)((()=>e.params.id),(t=>{t&&`/category/sub/${t}`===e.path&&(a.value=!1,r.value=[],o={page:1,pageSize:20})}));const i=e=>{a.value=!1,o={...o,...e},o.page=1,r.value=[]},c=e=>{a.value=!1,o={...o,...e},o.page=1,r.value=[]};return{getDate:n,loading:t,finished:a,goodsList:r,sortChange:i,fliterChange:c}}};const X=(0,P.Z)(Y,[["render",i],["__scopeId","data-v-765bd491"]]);var q=X}}]);
//# sourceMappingURL=135.c9d224ef.js.map