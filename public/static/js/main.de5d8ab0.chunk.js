(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),o=n.n(c),i=(n(29),n(30),n(21)),s=n(5),l=n(2),u=n(10),d=n(4),p=n.n(d),j=function(){var e=Object(u.a)(p.a.mark((function e(t,n,a,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={amount:100*t,currency:n,customer_id:a},e.prev=1,e.next=4,fetch("https://revolut-server.herokuapp.com/card/newOrderSandbox",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){r.push("/cardSandbox",e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=j,h=function(){var e=Object(u.a)(p.a.mark((function e(t,n,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={amount:100*t,currency:n},e.prev=1,e.next=4,fetch("/card/newOrderLive",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){a.push("/cardLive",e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n,a){return e.apply(this,arguments)}}(),m=h,f=n(11),x=n(0);var O=function(){var e=Object(a.useState)("USD"),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],d=o[1],p=Object(a.useState)([]),j=Object(s.a)(p,2),h=j[0],f=j[1],O=Object(a.useState)(0),y=Object(s.a)(O,2),g=y[0],v=y[1],C=Object(a.useState)(null),w=Object(s.a)(C,2),S=(w[0],w[1],[{name:"Backpack",price:150},{name:"Hat",price:.05},{name:"Jacket",price:300},{name:"Boots",price:250},{name:"Skis",price:600},{name:"Gloves",price:10},{name:"Shirt",price:20},{name:"Pants",price:25},{name:"Glasses",price:40},{name:"Snowboard",price:500}]),P=Object(l.f)();return Object(a.useEffect)((function(){v(h.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0))}),[h]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:" Revolut Shop "}),Object(x.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"},children:[Object(x.jsx)("div",{className:"items",children:Object(x.jsx)("div",{className:"itemsList",style:{textAlign:"left"},children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",margin:"5px"},children:[Object(x.jsx)("input",{style:{display:"inline-block",margin:"1em 5px 5px 5px"},placeholder:"Search item",onChange:function(e){d(e.target.value)}}),Object(x.jsx)("select",{className:"pay-option-button",style:{padding:"0px 10px"},onChange:function(e){return r(e.target.value)},placeholder:"USD",children:["USD","EUR","GBP","RON","JPY","CZK","AUD","CAD","AED","CHF","DKK","HKD","NOK","NZD","PLN","QAR","SEK","SGD","TRY","ZAR"].map((function(e){return Object(x.jsxs)("option",{children:[" ",e," "]},e)}))})]}),S.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).map((function(e,t){return Object(x.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",margin:"5px"},children:[e.name," Price:"," ","USD"===n?Math.round(Number(e.price)):"GBP"===n?Math.round(.74*Number(e.price)):"EUR"===n?Math.round(.87*Number(e.price)):"JPY"===n?Math.round(127*Number(e.price),12):Math.round(4.28*Number(e.price))," ",n,Object(x.jsx)("button",{className:"pay-option-button",onClick:function(){!function(e){f([].concat(Object(i.a)(h),[S[e]]))}(t)},children:"Add to cart"})]},t)}))]})})}),Object(x.jsx)("div",{className:"Cart",style:{textAlign:"center"},children:h.length>0?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Cart"}),Object(x.jsx)("ul",{style:{listStyle:"none"},children:h.map((function(e,t){return Object(x.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",width:"40%",margin:"0 auto"},children:[e.name,Object(x.jsx)("button",{className:"pay-option-button",onClick:function(){return function(e){h.splice(e,1),f(Object(i.a)(h))}(t)},style:{margin:"5px"},children:"Remove from Cart"})]},t)}))}),Object(x.jsxs)("button",{className:"pay-option-button",onClick:function(){return b(g,n,"16ec0824-1a78-4032-adfa-fefab834a591",P)},children:[" ","Go to Checkout-Sandbox"]}),Object(x.jsxs)("button",{className:"pay-option-button",onClick:function(){return m(g,n,P)},children:[" ","Go to Checkout-Live"]}),Object(x.jsxs)("p",{style:{background:"linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)"},children:["Total:"," ","GBP"===n?Math.round(.74*g):"EUR"===n?Math.round(.87*g):"RON"===n?Math.round(4.28*g):Math.round(g)," ",n]}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",borderRadius:"10px",padding:"6px"},id:"revolut-payment-request"})]}):""})]})]})},y=n(13),g=n(14),v=n(9),C=function(){var e=Object(u.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={payment_method_id:t,order_id:n},e.prev=1,e.next=4,fetch("/card/confirmOrderSandbox",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){return alert("Order was succesfully captured")}));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(1),console.error(e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),w=C,S=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(a.useState)({countryCode:"",region:"",city:"",streetLine1:"",streetLine2:"",postcode:""}),j=Object(s.a)(p,2),b=j[0],h=j[1];console.log(b);var m=function(e){var t=e.target.name,n=e.target.value;h(Object(g.a)(Object(g.a)({},b),{},Object(y.a)({},t,n)))},O=Object(l.f)().location.state.public_id,C=Object(l.f)().location.state.id,S=Object(l.f)().location.state;return Object(f.a)(O,"sandbox").then((function(e){var t=e.createCardField({target:document.getElementById("card-field"),onSuccess:function(){setTimeout((function(){window.alert("Thank you! Payment completed")}),1e3)},onError:function(e){window.alert("Oh no :( ".concat(e,"."))}});document.getElementById("button-submit").addEventListener("click",(function(){t.submit({name:n,email:u,billingAddress:b})}))})),r.a.useEffect((function(){Object(f.a)(O,"sandbox").then((function(e){e.revolutPay({target:document.getElementById("revolut-pay"),phone:"+441632960022",buttonStyle:{variant:"light-outlined"},onSuccess:function(){console.log("Payment completed")},onError:function(e){console.error("Payment failed: "+e.message)}})}))}),[]),Object(x.jsxs)("div",{className:"payment-sandbox-page",style:{display:"grid",gridTemplateColumns:"2fr 1fr"},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(v.b,{className:"pay-option-button",to:"/",children:"Home"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Use the folowing test cards for succesful payments:"}),Object(x.jsx)("p",{children:"Visa: 4929420573595709"}),Object(x.jsx)("p",{children:"Mastercard: 5281438801804148"}),Object(x.jsx)("p",{children:"For expiry date use any future date, and for CVV any numbers you wish"})]}),Object(x.jsxs)("form",{style:{display:"flex",flexDirection:"column",width:"50%",margin:"10px auto"},onSubmit:function(e){return e.preventDefault()},children:[Object(x.jsxs)("div",{style:{display:"flex",alignItems:"stretch"},children:[Object(x.jsx)("label",{}),Object(x.jsx)("input",{name:"full_name",placeholder:"Full name",style:{width:"100%"},onChange:function(e){return c(e.target.value)}})]}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"stretch"},children:[Object(x.jsx)("label",{}),Object(x.jsx)("input",{name:"email",placeholder:"customer@example.com",style:{width:"100%"},onChange:function(e){return d(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{}),Object(x.jsx)("div",{name:"card"})]}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsx)("label",{children:"Billing Address"}),Object(x.jsx)("input",{name:"countryCode",placeholder:"Country Code",onChange:m}),Object(x.jsx)("input",{name:"region",placeholder:"Region",onChange:m}),Object(x.jsx)("input",{name:"city",placeholder:"City",onChange:m}),Object(x.jsx)("input",{name:"streetLine1",placeholder:"Address line 1",onChange:m}),Object(x.jsx)("input",{name:"streetLine2",placeholder:"Address line 2",onChange:m}),Object(x.jsx)("input",{name:"postcode",placeholder:"Postal Code",onChange:m})]})]}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",border:"solid black 3px",borderRadius:"10px",padding:"6px",background:"#fff"},id:"card-field"}),Object(x.jsxs)("div",{className:"payButtons",style:{margin:"10px auto",display:"flex",justifyContent:"space-between",width:"40%"},children:[Object(x.jsx)("button",{className:"pay-option-button",id:"button-submit",children:"Pay with Card"}),Object(x.jsx)("button",{className:"pay-option-button",onClick:function(){return Object(f.a)(O,"sandbox").then((function(e){e.payWithPopup({onSuccess:function(){window.alert("Thank you! Payment was succesful")},onError:function(e){window.alert(e)},name:n,email:u,billingAddress:b,savePaymentMethodFor:"merchant"})}))},children:"Pay with Popup"}),Object(x.jsxs)("button",{className:"pay-option-button",title:"For paying with saved payment method",onClick:function(){return w("b465452f-72f6-4237-83d9-3c2b1a5a9f2d",C)},children:[" ","Confirm Order"]}),"        "]}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",borderRadius:"10px",padding:"6px"},id:"revolut-pay"}),Object(x.jsx)("div",{id:"revolut-payment-request"})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("pre",{children:[Object(x.jsx)("strong",{children:"Order"}),": ",JSON.stringify(S,void 0,2)]})})]})},P=function(){var e=Object(u.a)(p.a.mark((function e(t,n,a,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={amount:t,currency:n,order_id:a},e.prev=1,e.next=4,fetch("/card/updateOrderLive",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){r.push("/cardLive",e),console.log("update Order response",e)}));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(1),console.error(e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=P,k=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(s.a)(c,2),i=(o[0],o[1]),d=Object(a.useState)(null),j=Object(s.a)(d,2),b=j[0],h=j[1],m=Object(a.useState)({countryCode:"",region:"",city:"",streetLine1:"",streetLine2:"",postcode:""}),O=Object(s.a)(m,2),C=O[0],w=O[1];console.log(C);var S=function(e){var t=e.target.name,n=e.target.value;w(Object(g.a)(Object(g.a)({},C),{},Object(y.a)({},t,n)))},P=Object(l.f)(),k=Object(l.f)().location.state.public_id,T=Object(l.f)().location.state.id,E=Object(l.f)().location.state.order_amount.value,L=Object(l.f)().location.state.order_amount.currency,A=Object(l.f)().location.state;console.log("public_id-Live",k),console.log("order_id-Live",T),console.log("amount",E),console.log("body",A);Object(f.a)(k,"prod").then((function(e){var t=e.createCardField({target:document.getElementById("card-field"),onSuccess:function(){setTimeout((function(){window.alert("Thank you! Payment completed")}),1e3)},onError:function(e){window.alert("Oh no :( ".concat(e))}});document.getElementById("button-submit").addEventListener("click",(function(){t.submit({name:n,email:b,billingAddress:C})}))})),Object(f.a)(k,"prod").then((function(e){console.log("revolutpay function fired"),e.revolutPay({target:document.getElementById("revolut-pay"),phone:"+441632960022",buttonStyle:{variant:"light-outlined"},onSuccess:function(){console.log("Payment completed")},onError:function(e){console.error("Payment failed: "+e.message)}})}));return Object(x.jsxs)("div",{className:"payment-live-page",style:{display:"grid",gridTemplateColumns:"2fr 1fr"},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(v.b,{className:"pay-option-button",to:"/",children:"Home"}),Object(x.jsxs)("form",{style:{display:"flex",flexDirection:"column",width:"50%",margin:" 10px auto"},onSubmit:function(e){return e.preventDefault()},children:[Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(x.jsx)("label",{}),Object(x.jsx)("input",{name:"full_name",placeholder:"Full Name",style:{width:"100%"},onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(x.jsx)("label",{}),Object(x.jsx)("input",{name:"email",placeholder:"customer@example.com",style:{width:"100%"},onChange:function(e){return h(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{}),Object(x.jsx)("div",{name:"card"})]}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsx)("label",{children:"Billing Address"}),Object(x.jsx)("input",{name:"countryCode",placeholder:"Country Code",onChange:S}),Object(x.jsx)("input",{name:"region",placeholder:"Region",onChange:S}),Object(x.jsx)("input",{name:"city",placeholder:"City",onChange:S}),Object(x.jsx)("input",{name:"streetLine1",placeholder:"Address line 1",onChange:S}),Object(x.jsx)("input",{name:"streetLine2",placeholder:"Address line 2",onChange:S}),Object(x.jsx)("input",{name:"postcode",placeholder:"Postal Code",onChange:S})]})]}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",border:"solid black 3px",borderRadius:"10px",padding:"6px",background:"#fff"},id:"card-field"}),Object(x.jsxs)("div",{className:"payButtons",style:{margin:"10px auto",display:"flex",justifyContent:"space-between",width:"60%"},children:[Object(x.jsx)("button",{className:"pay-option-button",id:"button-submit",children:"Pay with Card"}),Object(x.jsx)("button",{className:"pay-option-button",onClick:function(){return Object(f.a)(k,"prod").then((function(e){e.payWithPopup({onSuccess:function(){window.alert("Thank you! Payment was succesful")},onError:function(e){window.alert(e)},name:n,email:b,savePaymentMethodFor:"merchant"})}))},children:"Pay with Popup"}),Object(x.jsx)("button",{className:"pay-option-button",onClick:function(){return function(){var e=Object(f.a)(k,"prod"),t=[{id:"flex",label:"The big flex express shipping",amount:1,description:"The shipping method faster than batman"},{id:"countrystrong",label:"Country strong shipping",amount:3,description:"The shipping method faster than superman"}],n=e.paymentRequest({target:document.getElementById("revolut-payment-request"),requestShipping:!0,shippingOptions:t,onShippingOptionChange:function(){var e=Object(u.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("amount frontend",t.label,E+t.amount),e.next=3,N(E+t.amount,L,T,P);case 3:return e.abrupt("return",Promise.resolve({status:"success",total:{amount:E+t.amount}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onShippingAddressChange:function(e){var n={id:"new-shipping",label:"The new ultra-fast method",amount:5,description:"The shipping method faster than lightening"};return Promise.resolve({status:"success",shippingOptions:[n].concat(t),total:{amount:E+n.amount}})},onSuccess:function(){i("Paid"),alert("Payment with Google/Apple pay was succesfull!")},onError:function(e){i("Error: ".concat(e.message)),alert(e)}});n.canMakePayment().then((function(e){e?n.render():(i("Not supported"),n.destroy())}))}()},children:"Pay with Apple/Google Pay"})]}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",borderRadius:"10px",padding:"6px"},id:"revolut-pay"}),Object(x.jsx)("div",{style:{width:"400px",margin:"10px auto",borderRadius:"10px",padding:"6px"},id:"revolut-payment-request"})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("pre",{children:[Object(x.jsx)("strong",{children:"Order"}),": ",JSON.stringify(A,void 0,2)]})})]})};var T=function(){return Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(O,{})}),Object(x.jsx)(l.a,{path:"/cardSandbox",children:Object(x.jsx)(S,{})}),Object(x.jsx)(l.a,{path:"/cardLive",children:Object(x.jsx)(k,{})}),Object(x.jsx)(l.a,{path:"/*",children:Object(x.jsx)("div",{children:" Path not found"})})]})};var E=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(T,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(v.a,{children:Object(x.jsx)(E,{})}),document.getElementById("react-app")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.de5d8ab0.chunk.js.map