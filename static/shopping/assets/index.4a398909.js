import{w as r,x as p,j as e,a as c}from"./index.b0063055.js";import{C as N,T as s,I as x,a as n,B as g}from"./index.esm.eade6510.js";const f=()=>{const i=r(a=>a.userInfo.userInfo.userName),{cartLists:l,totalPrice:o,unit:d,currencySymbol:t}=r(a=>a.cartInfo),m=p(),h=()=>m("/");return e(N,{maxW:"768px",className:"checkout-page",children:[e("p",{className:"user-name",children:[c(s,{children:"checkoutPage.dear"}),e("span",{children:[": ",i]})]}),Array.from(l.values()).map((a,u)=>e("div",{className:"cart-item",children:[c("div",{className:"session-item",children:e("div",{className:"session",children:[c(x,{width:"120px",src:a.cover}),e("div",{className:"desc-box ml-8",children:[c("p",{children:a.productName}),c("p",{className:"text-ellipsis_2 description",children:a.description})]})]})}),e("div",{className:"quantity-box",children:[e("p",{children:[c(s,{children:"cartPage.quantity"}),": ",a.quantity]}),e("p",{className:"mt-12",children:[c(s,{children:"cartPage.price"}),": ",t,n(a.price*a.quantity/d)]})]})]},u)),e("p",{className:"total-price",children:[c(s,{children:"checkoutPage.total"}),e("span",{children:[": ",t,n(o)]})]}),c(g,{onClick:h,className:"mt-20",width:"100%",colorScheme:"twitter",children:c(s,{children:"checkoutPage.text"})})]})};export{f as default};
//# sourceMappingURL=index.4a398909.js.map
