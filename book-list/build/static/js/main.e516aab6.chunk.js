(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),i=r.n(n),s=r(8),c=r.n(s),o=(r(16),r(7)),j=r(2),p=r(3),u=r(5),l=r(4),b=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"book-header",children:Object(a.jsx)("h2",{children:this.props.title})})}}]),r}(i.a.Component),O=r(9),h=r(10),m=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("span",{className:"book-index",children:["#",this.props.index]})})}}]),r}(i.a.Component),d=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"book-image-wrapper",children:[Object(a.jsx)(m,{index:this.props.index}),Object(a.jsx)("img",{src:this.props.src,alt:"Here must be Book image"})]})})}}]),r}(i.a.Component),v=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"book-title",children:Object(a.jsx)("p",{children:this.props.title})})}}]),r}(i.a.Component),g=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"book-author",children:Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"Author: "})," ",this.props.author]})})}}]),r}(i.a.Component),k=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.reviews;return Object(a.jsx)("div",{className:"book-reviews",children:Object(a.jsxs)("p",{children:[e," reviews"]})})}}]),r}(i.a.Component),x=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.price;return Object(a.jsx)("div",{className:"book-price",children:Object(a.jsxs)("p",{children:["Price: $",e]})})}}]),r}(i.a.Component),y=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.author,n=e.reviews,i=e.price;return Object(a.jsxs)("div",{className:"book-info-container",children:[Object(a.jsx)(v,{title:t}),Object(a.jsx)(g,{author:r}),Object(a.jsx)(k,{reviews:n}),Object(a.jsx)(x,{price:i})]})}}]),r}(i.a.Component),f=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.book,t=e.src,r=e.id,n=Object(h.a)(e,["src","id"]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"book-item",children:[Object(a.jsx)(d,{src:t,index:r}),Object(a.jsx)(y,Object(O.a)({},n))]})})}}]),r}(i.a.Component),C=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.books;return Object(a.jsx)("div",{className:"book-content",children:e.map((function(e){return Object(a.jsx)(f,{book:e},e.id)}))})}}]),r}(i.a.Component),_=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.books;return Object(a.jsxs)("div",{className:"book-container",children:[Object(a.jsx)(b,{title:t}),Object(a.jsx)(C,{books:r})]})}}]),r}(i.a.Component);function B(){var e=i.a.useState([{id:1,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:2,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:3,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:4,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:5,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:6,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:7,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"},{id:8,title:"Keep Sharp: Build a Better Brain at Any Age",author:"Glennon Doyle",price:20,reviews:"35000",market:"HardCover",src:"https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg"}]),t=Object(o.a)(e,2),r=t[0],n=(t[1],i.a.useState("Best Sellers in Books")),s=Object(o.a)(n,1)[0];return Object(a.jsx)(_,{books:r,title:s})}c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e516aab6.chunk.js.map