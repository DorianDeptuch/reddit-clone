(this["webpackJsonpreddit-clone"]=this["webpackJsonpreddit-clone"]||[]).push([[0],{25:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(19),i=c.n(r),a=c(14),o=c(3),l=(c(25),c(7)),j=c.n(l),u=c(10),b=c(20),d=(c(27),c(31),c(32),b.a.initializeApp({apiKey:"AIzaSyBPbelrboOBLfy0_h_-Ry4QgJgeguqsce8",authDomain:"clonnit-1f909.firebaseapp.com",projectId:"clonnit-1f909",storageBucket:"clonnit-1f909.appspot.com",messagingSenderId:"136215037647",appId:"1:136215037647:web:bdb3e77dc1fd98ad4a99ba",measurementId:"G-98G6NQBZEX"})),h=d.auth(),O=d.firestore(),m=d.storage();O.settings({timeStampInSnapShots:!0});var x=Object(n.createContext)(null),p=c(1);var f=function(e){var t=e.setShowSignup,c=e.setShowLogin,s=e.user,r=e.setUser,i=e.setShowAccountDetails,a=Object(n.useState)(""),l=Object(o.a)(a,2),b=(l[0],l[1]);function d(){return(d=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(""),e.prev=2,e.next=5,h.signOut();case 5:r(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"console-account__container",children:[Object(p.jsx)("div",{className:"console"}),Object(p.jsx)("div",{className:"account",children:s?Object(p.jsxs)("div",{className:"logged-in__account",children:[Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:s})}),Object(p.jsx)("i",{className:"fas fa-cog",onClick:function(){i((function(e){return!e}))}}),Object(p.jsx)("p",{onClick:function(e){return d.apply(this,arguments)},children:"Logout"})]}):Object(p.jsxs)("div",{className:"logged-out__account",children:[Object(p.jsx)("p",{onClick:function(){t((function(e){return!e}))},children:"Sign Up"}),Object(p.jsx)("p",{onClick:function(){c((function(e){return!e}))},children:"Log In"})]})})]}),Object(p.jsxs)("div",{className:"home-sort__container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h1",{className:"home",children:"clonnit"})}),Object(p.jsxs)("div",{className:"sort",children:[Object(p.jsx)("div",{children:"Best"}),Object(p.jsx)("div",{children:"Hot"}),Object(p.jsx)("div",{children:"New"}),Object(p.jsx)("div",{children:"Rising"}),Object(p.jsx)("div",{children:"Top"}),Object(p.jsx)("div",{children:"Controversial"})]})]})]})};var v=function(e){var t=e.setShowSignup,c=e.handleShowNewPostPopup,s=(e.showActiveTab,e.setShowActiveTab),r=e.handleShowClonnitPremium,i=Object(n.useContext)(x),a=i.user;return i.setUser,Object(p.jsx)("div",{className:"sidebar",children:Object(p.jsxs)("div",{className:"search-create__container",children:[Object(p.jsx)("input",{type:"text",className:"searchbar",placeholder:"search"}),Object(p.jsx)("div",{className:"arrowBtn",children:a?Object(p.jsx)("button",{onClick:function(){s(!0),c()},children:"Submit a new link"}):Object(p.jsx)("button",{onClick:function(){return t((function(e){return!e}))},children:"Submit a new link"})}),Object(p.jsx)("div",{className:"arrowBtn",children:a?Object(p.jsx)("button",{onClick:function(){s(!1),c()},children:"Submit a new text post"}):Object(p.jsx)("button",{onClick:function(){return t((function(e){return!e}))},children:"Submit a new text post"})}),Object(p.jsx)("div",{className:"clonnit-premium__container",onClick:r,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["clonnit ",Object(p.jsx)("span",{children:"premium"})]}),Object(p.jsx)("p",{children:"Get an ad-free experience with special benefits and directly support Clonnit"}),Object(p.jsx)("button",{children:"Get Clonnit Premium"})]})})]})})};var S=function(){return Object(p.jsx)("div",{})};var g=function(e){e.showSignup,e.showLogin;var t=e.setShowSignup,c=e.setShowLogin,s=(e.user,e.setUser),r=Object(n.useState)(!1),i=Object(o.a)(r,2),a=i[0],l=i[1],b=Object(n.useRef)(),d=Object(n.useRef)(),O=Object(n.useRef)(),m=Object(n.useRef)(),x=Object(n.useRef)(),f=Object(n.useState)(""),v=Object(o.a)(f,2),S=v[0],g=v[1],w=Object(n.useState)(!1),y=Object(o.a)(w,2),N=y[0],C=y[1];function k(){return(k=Object(u.a)(j.a.mark((function e(c){var n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),O.current.value===m.current.value){e.next=3;break}return e.abrupt("return",g("Passwords do not match"));case 3:return n=b.current.value,r=O.current.value,i=d.current.value,e.prev=6,g(""),C(!0),e.next=11,h.createUserWithEmailAndPassword(n,r).then((function(e){return h.currentUser.updateProfile({displayName:i})})).catch((function(e){console.log(e)}));case 11:s(h.currentUser.displayName),x.current.reset(),t(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),g("Failed to create an account");case 19:C(!1);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"signup-form__container",children:[Object(p.jsx)("strong",{onClick:function(){t(!1)},children:"X"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Sign up to get your own personalized Clonnit experience!"}),Object(p.jsx)("p",{children:"By having a Clonnit account, you can join, vote, and comment on all your favorite Clonnit content. Sign up in just seconds."})]}),a?Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{style:{color:"red"},children:S}),Object(p.jsxs)("form",{ref:x,onSubmit:function(e){return k.apply(this,arguments)},children:[Object(p.jsx)("label",{children:"Enter Email"}),Object(p.jsx)("input",{ref:b,type:"email",placeholder:"Enter Email",required:!0}),Object(p.jsx)("label",{children:"Choose username"}),Object(p.jsx)("input",{ref:d,type:"text",placeholder:"username",required:!0}),Object(p.jsx)("label",{children:"set password"}),Object(p.jsx)("input",{ref:O,type:"password",placeholder:"password",required:!0}),Object(p.jsx)("label",{children:"confirm password"}),Object(p.jsx)("input",{ref:m,type:"password",placeholder:"confirm password",required:!0}),Object(p.jsxs)("div",{className:"modal-button__container",children:[Object(p.jsx)("button",{onClick:function(){l(!1)},children:"Back"}),Object(p.jsx)("button",{type:"submit",disabled:N,children:"Submit"})]})]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("form",{children:Object(p.jsx)("button",{onClick:function(){l(!0)},children:"Next"})}),Object(p.jsxs)("p",{children:["Already a User? ",Object(p.jsx)("span",{onClick:function(){t(!1),c(!0)},children:"Log In"})]})]})]})};var w=function(e){var t=e.setShowSignup,c=e.setShowLogin,s=e.setUser,r=Object(n.useRef)(),i=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),b=Object(o.a)(l,2),d=b[0],O=b[1],m=Object(n.useState)(!1),x=Object(o.a)(m,2),f=(x[0],x[1]);function v(){return(v=Object(u.a)(j.a.mark((function e(t){var n,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.current.value,o=i.current.value,e.prev=3,O(""),f(!0),e.next=8,h.signInWithEmailAndPassword(n,o);case 8:s(h.currentUser.displayName),a.current.reset(),c(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),O("Failed to log in");case 16:f(!1);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"login-form__container",children:[Object(p.jsx)("strong",{onClick:function(){c(!1)},children:"X"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Sign up to get your own personalized Clonnit experience!"}),Object(p.jsx)("p",{children:"By having a Clonnit account, you can join, vote, and comment on all your favorite Clonnit content. Sign up in just seconds."})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{ref:a,onSubmit:function(e){return v.apply(this,arguments)},children:[Object(p.jsx)("label",{children:"Log In"}),Object(p.jsx)("h2",{style:{color:"red"},children:d}),Object(p.jsx)("input",{ref:r,type:"email",placeholder:"email"}),Object(p.jsx)("input",{ref:i,type:"password",placeholder:"password"}),Object(p.jsx)("button",{type:"submit",className:"submit",children:"Log In"})]}),Object(p.jsxs)("p",{children:["Don't have an account?"," ",Object(p.jsx)("span",{onClick:function(){c(!1),t(!0)},children:"Sign up"})]})]})]})},y=c(12),N=c.n(y);var C=function(e){var t=e.user,c=e.dataID,s=e.commentAuthor,r=e.commentText,i=Object(n.useState)(""),l=Object(o.a)(i,2),b=l[0],d=l[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),x=(m[0],m[1]),f=Object(n.useState)([]),v=Object(o.a)(f,2),S=v[0],g=v[1],w=Object(n.useState)(""),y=Object(o.a)(w,2),C=(y[0],y[1]),k=Object(n.useRef)(),_=function(){var e=Object(u.a)(j.a.mark((function e(c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),x(!0),k.current.reset(),n=Object(p.jsxs)("div",{className:"comment",children:[Object(p.jsxs)("h6",{className:"comment-author",children:["Submitted by ",Object(p.jsx)("span",{children:t})]}),Object(p.jsx)("div",{className:"comment-value",children:b})]},N()()),A(t,b),g((function(e){return[n].concat(Object(a.a)(e))})),C(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e,t){O.collection("posts").doc(c).update({dataID:c,commentAuthor:e,commentText:t}).catch((function(e){console.error("Error adding document: ",e)}))};return Object(n.useEffect)((function(){if(s||r){var e=Object(p.jsxs)("div",{className:"comment",children:[Object(p.jsxs)("h6",{className:"comment-author",children:["Submitted by ",Object(p.jsx)("span",{children:s})]}),Object(p.jsx)("div",{className:"comment-value",children:r})]},N()());g((function(t){return[e].concat(Object(a.a)(t))}))}}),[]),Object(p.jsxs)("div",{className:"post-comment",children:[Object(p.jsxs)("h4",{children:["Commenting as: ",Object(p.jsx)("span",{children:t})]}),Object(p.jsxs)("form",{ref:k,onSubmit:_,children:[Object(p.jsx)("textarea",{onChange:function(e){d(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]}),Object(p.jsx)("hr",{}),S]})};var k=function(e){var t=e.imgSrc,c=e.titleAnchorURL,s=Object(n.useRef)(),r=Object(n.useState)(""),i=Object(o.a)(r,2),a=(i[0],i[1],Object(n.useState)(!1)),l=Object(o.a)(a,2),j=l[0],u=l[1];return Object(p.jsxs)("div",{className:"post-share",children:[Object(p.jsxs)("h4",{children:["Share to all your friends: ",j&&Object(p.jsx)("span",{children:"Text copied!"})]}),Object(p.jsx)("input",{ref:s,type:"text",value:t||(c||"Nothing to share :(")}),Object(p.jsx)("button",{onClick:function(){s.current.select(),document.execCommand("copy"),u(!0),setTimeout((function(){u(!1)}),2e3)},className:"copy-button",children:"Copy"})]})};var _=function(e){var t=e.title,c=e.author,s=e.imgSrc,r=e.urlSrc,i=e.textContent,a=e.timeStamp,l=e.dateStamp,j=e.titleAnchorURL,u=e.urlSrcThumbnail,b=e.setShowSignup,d=e.dataID,h=e.commentAuthor,O=e.commentText,m=Object(n.useState)(!1),f=Object(o.a)(m,2),v=f[0],S=f[1],g=Object(n.useState)(!1),w=Object(o.a)(g,2),y=w[0],N=w[1],_=Object(n.useState)(!1),A=Object(o.a)(_,2),U=A[0],T=A[1],P=Object(n.useState)(1),L=Object(o.a)(P,2),R=L[0],D=L[1],I=Object(n.useState)(!1),E=Object(o.a)(I,2),F=E[0],B=E[1],q=Object(n.useState)(!1),z=Object(o.a)(q,2),G=z[0],X=z[1],Y=Object(n.useState)(!1),H=Object(o.a)(Y,2),J=H[0],M=H[1],V=Object(n.useRef)(),Q=Object(n.useRef)(),W=Object(n.useContext)(x),$=W.user,K=(W.setUser,Object(n.useState)(d)),Z=Object(o.a)(K,2),ee=(Z[0],Z[1],function(){M((function(e){return!e})),B(!1),S(!1),X(!1)});return Object(p.jsxs)("div",{className:"post",children:[!J&&Object(p.jsxs)("div",{className:"post-karma__container",children:[Object(p.jsx)("div",{className:"upvote",children:Object(p.jsx)("i",{ref:V,onClick:$?function(){U&&!y?(N(!0),T(!1),D((function(e){return e+2}))):y?(N(!1),D((function(e){return e-1}))):(N(!0),T(!1),D((function(e){return e+1})))}:function(){return b(!0)},className:"fas fa-arrow-up",style:y?{color:"#ff4500"}:{color:"#cbccc4"}})}),Object(p.jsx)("div",{className:"karma-count",children:R}),Object(p.jsx)("div",{className:"downvote",children:Object(p.jsx)("i",{ref:Q,onClick:$?function(){y&&!U?(T(!0),N(!1),D((function(e){return e-2}))):U?(T(!1),D((function(e){return e+1}))):(T(!0),N(!1),D((function(e){return e-1})))}:function(){return b(!0)},className:"fas fa-arrow-down",style:U?{color:"#369"}:{color:"#cbccc4"}})})]}),!J&&Object(p.jsx)("div",{className:"post-image__container",children:s?Object(p.jsx)("img",{src:s,alt:t}):r?Object(p.jsx)("img",{src:u,alt:"thumbnail"}):Object(p.jsx)("i",{className:"fas fa-comment-dots fa-4x"})}),!J&&Object(p.jsxs)("div",{className:"post-text__container",children:[Object(p.jsx)("a",{href:j,children:Object(p.jsx)("h3",{className:"post-title",children:t})}),Object(p.jsxs)("div",{className:"post-preview-info__container",children:[Object(p.jsx)("div",{onClick:function(){S(!v)},className:"post-preview-btn",children:v?Object(p.jsx)("i",{className:"fas fa-times fa-2x"}):Object(p.jsx)("i",{className:"fas fa-plus fa-2x"})}),Object(p.jsxs)("div",{className:"post-info",children:[Object(p.jsxs)("p",{className:"author-info",children:["submitted by ",Object(p.jsx)("span",{children:c})," to c/all"," at"," ",a," on ",l]}),Object(p.jsxs)("ul",{className:"list-buttons",children:[Object(p.jsx)("li",{onClick:function(){B((function(e){return!e}))},children:"comments"}),Object(p.jsx)("li",{onClick:function(){X((function(e){return!e}))},children:"share"}),Object(p.jsx)("li",{children:"save"}),Object(p.jsx)("li",{onClick:ee,children:"hide"})]})]})]})]}),v?Object(p.jsxs)("div",{className:"post-preview",children:[s&&Object(p.jsx)("img",{src:s,alt:"preview popup",className:"preview-img"}),i&&Object(p.jsx)("div",{className:"text-preview",children:i}),r&&Object(p.jsx)("iframe",{width:"560",height:"315",src:r,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}):null,F&&Object(p.jsx)(C,{commentAuthor:h,commentText:O,dataID:d,user:$}),G&&Object(p.jsx)(k,{imgSrc:s,titleAnchorURL:j}),J&&Object(p.jsx)("div",{className:"hidden",children:Object(p.jsxs)("h2",{children:["Post Hidden. ",Object(p.jsx)("span",{onClick:ee,children:"UNDO?"})]})})]})};var A=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)("div",{className:"clonnit-premium",children:[Object(p.jsxs)("div",{className:"premium-heading",children:[Object(p.jsxs)("h3",{children:["clonnit ",Object(p.jsx)("span",{children:"premium"})]}),Object(p.jsx)("p",{children:"Get an ad-free experience with special benefits and directly support Clonnit"})]}),Object(p.jsxs)("div",{className:"premium-body",children:[Object(p.jsx)("h4",{children:"The benefits to purchasing Clonnit Premium are endless:"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Unlimited upvotes/downvotes per post!"," ",Object(p.jsx)("span",{children:"Is there a post that you just love? Upvote them as many times as you like! Got a post that you've just not vibin' with? Downvote them into oblivion!"})]}),Object(p.jsxs)("li",{children:["No Ads. Ever."," ",Object(p.jsx)("span",{children:"If we ever decide to incorporate ads onto the site, you can be sure you'll never be seeing them!"})]}),Object(p.jsxs)("li",{children:["You will recieve a custom, animated outline for your username so you can show off in front of everyone."," ",Object(p.jsx)("span",{children:"Look at Mr(s). Fancy Pants and his/her flashy username."})]})]}),Object(p.jsxs)("h4",{children:["Only ",Object(p.jsx)("span",{children:"$7999.95"})," $4999.95!"]})]}),c?Object(p.jsx)("div",{className:"billing-unavailable",children:Object(p.jsx)("h4",{children:"Sorry, our billing system is down for the moment, please try again later"})}):Object(p.jsxs)("div",{className:"premium-payment",onMouseEnter:function(){s(!0)},onClick:function(){s(!0)},children:[Object(p.jsx)("h4",{children:"Enter your Payment info below"}),Object(p.jsxs)("div",{className:"payment-container",children:[Object(p.jsxs)("div",{className:"payment-item",children:[Object(p.jsx)("label",{htmlFor:"holder",children:"Card holder"}),Object(p.jsx)("input",{type:"password",name:"",id:"holder",placeholder:"Enter name"})]}),Object(p.jsxs)("div",{className:"payment-item",children:[Object(p.jsx)("label",{htmlFor:"cc",children:"Card Info"}),Object(p.jsx)("input",{type:"password",name:"",id:"cc",placeholder:"xxxx-xxxx-xxxx-xxxx"})]}),Object(p.jsxs)("div",{className:"payment-item-hz",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"ex",children:"Expiration Date"}),Object(p.jsx)("input",{className:"third",type:"password",name:"",id:"ex",placeholder:"mm"}),Object(p.jsx)("input",{className:"third",type:"password",name:"",id:"ex",placeholder:"yy"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"cvv",children:"CVV"}),Object(p.jsx)("input",{className:"third",type:"password",name:"",id:"cc",placeholder:"cvv"})]})]}),Object(p.jsx)("button",{children:"PURCHASE"})]})]})]})};var U=function(e){var t=e.setShowNewPostPopup,c=(e.setPostArray,e.posts,e.title,e.author,e.imgSrc,e.urlSrc,e.textContent),s=(e.setPosts,e.setTitle),r=(e.setAuthor,e.setImgSrc),i=e.setUrlSrc,a=e.setTextContent,l=e.showActiveTab,b=e.setShowActiveTab,d=(e.setShowSignup,Object(n.useState)(!1)),h=Object(o.a)(d,2),f=h[0],v=h[1],S=Object(n.useState)(null),g=Object(o.a)(S,2),w=g[0],y=g[1],N=Object(n.useState)(""),C=Object(o.a)(N,2),k=C[0],_=C[1],A=Object(n.useState)(""),U=Object(o.a)(A,2),T=U[0],P=U[1],L=Object(n.useState)(""),R=Object(o.a)(L,2),D=R[0],I=R[1],E=Object(n.useState)(""),F=Object(o.a)(E,2),B=F[0],q=F[1],z=Object(n.useState)(""),G=Object(o.a)(z,2),X=G[0],Y=G[1],H=Object(n.useState)(0),J=Object(o.a)(H,2),M=J[0],V=J[1],Q=Object(n.useState)([]),W=Object(o.a)(Q,2),$=(W[0],W[1]),K=Object(n.useState)((new Date).toLocaleTimeString()),Z=Object(o.a)(K,2),ee=Z[0],te=(Z[1],Object(n.useState)((new Date).toLocaleDateString())),ce=Object(o.a)(te,2),ne=ce[0],se=(ce[1],Object(n.useState)("")),re=Object(o.a)(se,2),ie=re[0],ae=re[1],oe=Object(n.useContext)(x),le=oe.user,je=(oe.setUser,Object(n.useRef)()),ue=Object(n.useRef)(),be=Object(n.useRef)(),de=Object(n.useRef)(),he=function(){b(!l)},Oe=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.ref(),c=t.child(je.current.files[0].name),e.next=4,c.put(je.current.files[0]);case 4:return e.t0=_,e.next=7,c.getDownloadURL();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y(t.target.value),c=t.target.value.slice(-11),n="https://www.youtube.com/embed/".concat(c),s="https://img.youtube.com/vi/".concat(c,"/0.jpg"),I(n),q(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(u.a)(j.a.mark((function e(n){var o,l,u,b,d,h,O;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),b=ue.current.value,d=null!==(o=je.current)&&void 0!==o?o:"",h=null!==(l=be.current)&&void 0!==l?l:"",O=null!==(u=de.current)&&void 0!==u?u:"",b||d&&h&&O){e.next=10;break}return ae("You are missing a required field"),e.abrupt("return");case 10:s(b),r(d),i(h),a(O),v(!1),t(!1),$((function(e){return[b,le,d,h,O]})),pe(b,le,k,D,c,ee,ne,X,B);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(e,t,c,n,s,r,i,a,o){O.collection("posts").add({title:e,author:t,imgSrc:c,urlSrc:n,textContent:s,timeStamp:r,dateStamp:i,titleAnchorUrl:a,urlSrcThumbnail:o,commentAuthor:"",commentText:""}).catch((function(e){console.error("Error adding document: ",e)}))};return Object(p.jsxs)("div",{className:"new-post__container",children:[Object(p.jsx)("h3",{children:"submit to clonnit"}),Object(p.jsx)("strong",{className:"exit-btn",onClick:function(){t(!1)},children:"X"}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"link-text__container",children:[Object(p.jsx)("div",{onClick:he,style:l?{color:"#edf6ff",background:"#369",transform:"scale(1.2)"}:{color:"#369",background:"#edf6ff",transform:"scale(.9)"},children:"Link"}),Object(p.jsx)("div",{onClick:he,style:l?{color:"#369",background:"#edf6ff",transform:"scale(.9)"}:{color:"#edf6ff",background:"#369",transform:"scale(1.2)"},children:"Text"})]}),Object(p.jsx)("div",{className:"post-hint",children:l?Object(p.jsx)("p",{children:"You are submitting a link. The key to a successful submission is interesting content and a descriptive title."}):Object(p.jsx)("p",{children:'You are submitting a text-based post. Speak your mind. A title is required, but expanding further in the text field is not. Beginning your title with "vote up if" is violation of intergalactic law.'})}),Object(p.jsxs)("form",{action:"",className:"newPost__form",onSubmit:xe,children:[l&&!w&&Object(p.jsxs)("div",{className:"url__container",children:[Object(p.jsx)("label",{htmlFor:"url",children:"YouTube Video"}),Object(p.jsx)("input",{ref:be,id:"url",type:"url",onChange:me})]}),l&&!D&&Object(p.jsxs)("div",{className:"image-video__container",children:[Object(p.jsx)("label",{htmlFor:"fileUpload",children:"image"}),Object(p.jsxs)("div",{className:"drag-n-drop",children:[Object(p.jsx)("input",{id:"fileUpload",type:"file",ref:je,hidden:"hidden",accept:"image/*",onChange:function(e){if(e.target.files[0].size>2097152)ae("File is too big!"),e.target.files=[];else{var t=je.current.files[0].name;y(URL.createObjectURL(e.target.files[0])),P(t),v(!0),Oe()}}}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),je.current.click()},children:"CHOOSE FILE"}),f&&Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:T}),Object(p.jsx)("p",{onClick:function(){P(""),y(null),v(!1)},children:"X"})]}),Object(p.jsx)("img",{className:"imgPreview",src:w,alt:"Preview"})]})]})]}),Object(p.jsxs)("div",{className:"title__container",children:[Object(p.jsxs)("label",{className:"required",htmlFor:"title",children:["title"," ",Object(p.jsxs)("span",{style:300===M?{color:"red"}:{color:"#828473"},children:[M,"/300"]})]}),Object(p.jsx)("textarea",{ref:ue,id:"title",type:"text",maxLength:"300",onChange:function(e){s(e.target.value),V(e.target.value.length)}})]}),!l&&Object(p.jsxs)("div",{className:"text__container",children:[Object(p.jsxs)("label",{htmlFor:"text",children:["text ",Object(p.jsx)("span",{children:"(optional)"})]}),Object(p.jsx)("textarea",{ref:de,id:"text",type:"text",onChange:function(e){a(e.target.value)}})]}),Object(p.jsxs)("div",{className:"submit__container",children:[Object(p.jsx)("h2",{style:{color:"red"},children:ie}),Object(p.jsx)("button",{children:"submit"})]})]})]})]})};var T=function(e){var t=e.setShowAccountDetails;return Object(p.jsxs)("div",{className:"account-details",children:[Object(p.jsx)("strong",{onClick:function(){t(!1)},children:"X"}),Object(p.jsx)("h4",{children:"Account Details"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Username:"})," ",h.currentUser.displayName]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Email:"})," ",h.currentUser.email]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Account Created:"})," ",h.currentUser.metadata.creationTime]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Last Sign In:"})," ",h.currentUser.metadata.lastSignInTime]}),Object(p.jsx)("div",{})]})};var P=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),d=b[0],m=b[1],y=Object(n.useState)(!1),C=Object(o.a)(y,2),k=C[0],P=C[1],L=Object(n.useState)([]),R=Object(o.a)(L,2),D=R[0],I=R[1],E=Object(n.useState)([]),F=Object(o.a)(E,2),B=F[0],q=F[1],z=Object(n.useState)(""),G=Object(o.a)(z,2),X=G[0],Y=G[1],H=Object(n.useState)(""),J=Object(o.a)(H,2),M=J[0],V=J[1],Q=Object(n.useState)(""),W=Object(o.a)(Q,2),$=W[0],K=W[1],Z=Object(n.useState)(""),ee=Object(o.a)(Z,2),te=ee[0],ce=ee[1],ne=Object(n.useState)(""),se=Object(o.a)(ne,2),re=se[0],ie=se[1],ae=Object(n.useState)(!0),oe=Object(o.a)(ae,2),le=oe[0],je=oe[1],ue=Object(n.useState)(!1),be=Object(o.a)(ue,2),de=be[0],he=be[1],Oe=Object(n.useState)(!1),me=Object(o.a)(Oe,2),xe=me[0],pe=me[1];return Object(n.useEffect)((function(){O.collection("posts").get().then((function(t){e(t.docs)}));var e=function(e){e.forEach((function(e){var t=e.data(),c=t.title,n=t.author,s=t.imgSrc,r=t.urlSrc,i=t.textContent,o=t.timeStamp,l=t.dateStamp,u=t.titleAnchorUrl,b=t.urlSrcThumbnail,d=t.commentAuthor,h=t.commentText,O=Object(p.jsx)(_,{dataID:e.id,title:c,author:n,imgSrc:s,urlSrc:r,textContent:i,timeStamp:o,dateStamp:l,titleAnchorURL:u,urlSrcThumbnail:b,setShowSignup:j,commentAuthor:d,commentText:h},N()());I((function(e){return[O].concat(Object(a.a)(e))}))}))}}),[]),Object(n.useEffect)((function(){var e=h.onAuthStateChanged((function(e){e?(console.log("user logged in: ",e),s(e.displayName)):(console.log("user logged out"),s(null))}));return function(){return e}}),[]),Object(p.jsx)(x.Provider,{value:{user:c,setUser:s},children:Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{setShowSignup:j,setShowLogin:m,setShowAccountDetails:pe,user:c,setUser:s}),Object(p.jsx)(v,{setShowSignup:j,handleShowNewPostPopup:function(){P(!k)},showActiveTab:le,setShowActiveTab:je,handleShowClonnitPremium:function(){he((function(e){return!e}))}}),Object(p.jsx)(S,{}),D,l&&Object(p.jsx)(g,{setShowSignup:j,setShowLogin:m,user:c,setUser:s}),d&&Object(p.jsx)(w,{setShowSignup:j,setShowLogin:m,setUser:s}),k&&Object(p.jsx)(U,{setPostArray:I,setShowNewPostPopup:P,posts:B,title:X,author:M,imgSrc:$,urlSrc:te,textContent:re,setPosts:q,setTitle:Y,setAuthor:V,setImgSrc:K,setUrlSrc:ce,setTextContent:ie,showActiveTab:le,setShowActiveTab:je,setShowSignup:j}),xe&&Object(p.jsx)(T,{setShowAccountDetails:pe}),de&&Object(p.jsx)(A,{setShowClonnitPremium:he})]})})};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.12f9cfe0.chunk.js.map