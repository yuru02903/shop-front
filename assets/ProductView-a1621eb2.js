import{aq as S,X as B,Y as k,Z as C,x as F,A as M,a0 as P,a1 as $,c as a,a3 as s,ar as A,a5 as N,ab as R,an as n,aa as d,V as E,a7 as l,ao as T,ap as U,J as v,a8 as _}from"./index-d98b89b2.js";import{c as j,e as D,u as I,d as J,V as L}from"./index.esm-5b77e9ad.js";import{V as O}from"./VContainer-9bc2caf9.js";import{V as X}from"./VRow-b4ad5e86.js";import{V as m}from"./VCol-6604e8af.js";const Y={style:{"white-space":"pre"}},Z=n("h1",{class:"text-red text-h1"},"已下架",-1),ee={__name:"ProductView",setup(z){const V=S(),p=B(),{api:y,apiAuth:h}=R(),i=k(),f=C(),t=F({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),b=j({quantity:D().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:g,handleSubmit:x}=I({validationSchema:b,initialValues:{quantity:1}}),c=J("quantity"),w=x(async u=>{var o,e;if(!f.isLogin){p.push("/login");return}try{const{data:r}=await h.patch("/users/cart",{product:t.value._id,quantity:u.quantity});f.cart=r.result,i({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(r){const q=((e=(o=r==null?void 0:r.response)==null?void 0:o.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";i({text:q,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return M(async()=>{var u,o;try{const{data:e}=await y.get("/products/"+V.params.id);t.value._id=e.result._id,t.value.name=e.result.name,t.value.price=e.result.price,t.value.description=e.result.description,t.value.image=e.result.image,t.value.sell=e.result.sell,t.value.category=e.result.category,document.title=`購物網 | ${t.value.name}`}catch(e){const r=((o=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";i({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),p.push("/")}}),(u,o)=>(P(),$(N,null,[a(O,null,{default:s(()=>[a(X,null,{default:s(()=>[a(m,{cols:"12"},{default:s(()=>[n("h1",null,d(t.value.name),1)]),_:1}),a(m,{cols:"12",md:"6"},{default:s(()=>[a(E,{src:t.value.image},null,8,["src"])]),_:1}),a(m,{cols:"12",md:"6"},{default:s(()=>[n("p",null,"$"+d(t.value.price),1),n("p",Y,d(t.value.description),1),a(L,{disabled:l(g),onSubmit:T(l(w),["prevent"])},{default:s(()=>[a(U,{type:"number",min:"0",modelValue:l(c).value.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l(c).value.value=e),modelModifiers:{number:!0},"error-messages":l(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(v,{type:"submit","prepend-icon":"mdi-cart",loading:l(g)},{default:s(()=>[_("加入購物車")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),a(A,{class:"align-center justify-center text-center","model-value":!t.value.sell,persistent:""},{default:s(()=>[Z,a(v,{to:"/",color:"green"},{default:s(()=>[_("回首頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{ee as default};
