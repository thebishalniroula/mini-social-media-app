(this["webpackJsonploading-stuck-in-false-forever"]=this["webpackJsonploading-stuck-in-false-forever"]||[]).push([[0],{25:function(e,s,t){},27:function(e,s,t){},28:function(e,s,t){},29:function(e,s,t){},36:function(e,s,t){},37:function(e,s,t){},38:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t(18),a=t.n(n),r=t(4),i=(t(25),t(2)),l=t(13),o=t.n(l),j=t(19),u=function(e){var s=Object(c.useState)(!0),t=Object(r.a)(s,2),n=t[0],a=t[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){(function(){var s=Object(j.a)(o.a.mark((function s(){var t,c;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(e);case 2:return t=s.sent,s.next=5,t.json();case 5:c=s.sent,b(c),a(!1);case 8:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[]),[u,n]},b=(t(27),t(16)),d=(t(28),t(29),t(8)),h=t(0),O=function(e){return Object(h.jsx)("div",{className:"userWrapper",children:Object(h.jsxs)(d.b,{className:"user",to:"/simple-fetch-users-app/"+e.login,children:[Object(h.jsx)("img",{src:e.avatar_url,className:"userImage",alt:e.login}),Object(h.jsx)("h6",{className:"userName",children:e.login}),Object(h.jsx)("span",{className:"profile",children:"Profile"})]})})},p=function(e){var s=e.url,t=e.title,c=e.input,n=u(s),a=Object(r.a)(n,2),i=a[0],l=a[1],o=function(e){if(e)return i.filter((function(s){return s.login.includes(e)}))}(c);return Object(h.jsxs)("div",{className:"users",children:[Object(h.jsx)("h3",{className:"DisplayUsers_title",children:t}),l&&Object(h.jsx)("span",{className:"loading",children:"Loading..."}),o?o.map((function(e){return Object(h.jsx)(O,Object(b.a)({},e),e.id)})):i.map((function(e){return Object(h.jsx)(O,Object(b.a)({},e),e.id)})),"\\"]})},f=(t(36),function(){return Object(h.jsx)("div",{className:"displayFollowing",children:"The user has set this section to private."})}),m=function(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(!1),l=Object(r.a)(a,2),o=l[0],j=l[1],b=Object(i.f)().id,d=u("https://api.github.com/users/".concat(b)),O=Object(r.a)(d,2),m=O[0];return O[1]?Object(h.jsx)("span",{className:"loading",children:"loading..."}):Object(h.jsxs)("div",{className:"userDetails",children:[Object(h.jsx)("div",{className:"blank"}),Object(h.jsx)("img",{src:m.avatar_url,alt:m.name,className:"userProfilePic"}),Object(h.jsx)("h2",{children:m.name}),Object(h.jsxs)("span",{className:"login",children:["@",m.login]}),Object(h.jsxs)("div",{className:"follow-section",children:[Object(h.jsxs)("div",{className:"followers",onClick:function(){o&&j(!1),n(!t)},style:t?{background:"rgb(180, 180, 180)",borderBottom:"5px solid rgb(47, 47, 255)"}:{},children:[Object(h.jsx)("div",{className:"follow",children:"Followers"}),Object(h.jsx)("div",{className:"count",children:m.followers})]}),Object(h.jsxs)("div",{className:"following",onClick:function(){t&&n(!1),j(!o)},style:o?{background:"rgb(180, 180, 180)",borderBottom:"5px solid rgb(47, 47, 255)"}:{},children:[Object(h.jsx)("div",{className:"follow",children:"Following"}),Object(h.jsx)("div",{className:"count",children:m.following})]})]}),Object(h.jsxs)("div",{className:"pageContent",children:[t&&Object(h.jsx)(p,{url:m.followers_url,title:"Who follows "+m.name.split(" ")[0]+" ?"}),o&&Object(h.jsx)(f,{})]})]})},x=(t(37),function(e){var s=e.setInput,t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(h.jsxs)("div",{className:"Navbar",children:[Object(h.jsx)(d.b,{to:"/simple-fetch-users-app",className:"logo",children:Object(h.jsx)("h3",{className:"logo",children:"GithubUsers"})}),Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/search--v1.png",className:"searchicon"}),Object(h.jsx)("input",{type:"text",className:"navsearch",placeholder:"Search users",onChange:function(e){i(e.target.value),s(e.target.value.toString())},value:a})]})]})}),g=function(e){var s=e.input;return Object(h.jsx)(p,{url:"https://api.github.com/users",title:"GitHub Users",input:s})};function v(){var e=Object(c.useState)(null),s=Object(r.a)(e,2),t=s[0],n=s[1];return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(x,{setInput:n}),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/simple-fetch-users-app",children:Object(h.jsx)(g,{input:t})}),Object(h.jsx)(i.a,{path:"/simple-fetch-users-app/:id",children:Object(h.jsx)(m,{})})]})})]})}var N=document.getElementById("root");a.a.render(Object(h.jsx)(c.StrictMode,{children:Object(h.jsx)(v,{})}),N)}},[[38,1,2]]]);
//# sourceMappingURL=main.d8c7f182.chunk.js.map