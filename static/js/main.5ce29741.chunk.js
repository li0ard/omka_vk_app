(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var j=c(23),n=c(27),s=c(30),r=c(0),i=c(19),b=c.n(i),d=c(4),l=(c(136),c(13)),x=c.n(l),h=c(138),O=c(139),a=c(140),o=c(141),u=c(142),g=c(143),p=c(1);x.a.send("VKWebAppInit");var m=function(){Object(d.u)().viewWidth;var e=Object(r.useState)("panel1"),t=Object(s.a)(e,2),c=t[0],i=t[1];function b(){return(b=Object(n.a)(Object(j.a)().mark((function e(){var t,c,n,s;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("ser").value,c=document.getElementById("num").value,e.next=4,fetch("https://api.allorigins.win/get?url=http%3A%2F%2F176.62.87.226%3A5400%2FFGW%2Fservice%2Fcheque%2F".concat(t).concat(c));case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,null==(n=JSON.parse(n.contents)).error&&(console.log(n.data.url),s=new URLSearchParams(n.data.url.split("?")[1]),document.getElementById("fn").textContent="\u0424\u041d: "+s.get("fn"),document.getElementById("fp").textContent="\u0424\u041f: "+s.get("fp"),document.getElementById("fd").textContent="\u0424\u0414: "+s.get("i"),document.getElementById("sum1").textContent=parseFloat(s.get("s"))/25+".00x25.00",document.getElementById("sum2").textContent="="+s.get("s"),document.getElementById("sum3").textContent=s.get("s"),document.getElementById("sum4").textContent="="+s.get("s"),document.getElementById("sum5").textContent="="+s.get("s"),document.getElementById("qr").setAttribute("src","https://proverkacheka.com/qrcode/generate?text="+encodeURIComponent(n.data.url.split("?")[1])),document.getElementById("result").style.visibility="visible");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)(d.b,{children:Object(p.jsxs)(d.t,{activePanel:c,children:[Object(p.jsxs)(d.p,{id:"panel1",children:[Object(p.jsx)(d.q,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(p.jsx)(d.k,{children:Object(p.jsx)(d.g,{align:"center",children:Object(p.jsx)(d.r,{activeMode:"background",hasActive:!0,children:Object(p.jsx)(d.s,{style:{padding:16},children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 Apple Pay, Google \u0420\u0430\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442."})})})}),Object(p.jsx)(d.k,{children:Object(p.jsxs)(d.g,{align:"center",children:[Object(p.jsxs)("h2",{children:["\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430",Object(p.jsx)("br",{}),"\u0433. \u041e\u043c\u0441\u043a\u0430"]}),Object(p.jsxs)(d.o,{children:[Object(p.jsx)(d.d,{onClick:function(){return i("fiscal")},expandable:!0,before:Object(p.jsx)(h.a,{}),children:" \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u043a "}),Object(p.jsx)(d.d,{onClick:function(){return window.open("https://securepayments.sberbank.ru/client/login")},expandable:!0,before:Object(p.jsx)(O.a,{}),children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})]}),Object(p.jsxs)(d.o,{children:[Object(p.jsx)(d.d,{onClick:function(){return i("refill")},expandable:!0,before:Object(p.jsx)(a.a,{}),children:" \u0413\u0434\u0435 \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c "}),Object(p.jsx)(d.d,{onClick:function(){return i("rules")},expandable:!0,before:Object(p.jsx)(o.a,{}),children:" \u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f "}),Object(p.jsx)(d.d,{onClick:function(){return i("faq")},expandable:!0,before:Object(p.jsx)(u.a,{}),children:" FAQ "})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(d.j,{slideWidth:"98%",bullets:"dark",showArrows:!0,children:[Object(p.jsx)("img",{style:{width:282,height:181},src:"https://habrastorage.org/webt/ke/6e/d5/ke6ed5apguvcbswun6onty8ks5e.png"}),Object(p.jsx)("img",{style:{width:282,height:181},src:"https://habrastorage.org/webt/mu/nf/mm/munfmm3eujyzwlm_tnwbe8vuzcs.png"}),Object(p.jsx)("img",{style:{width:282,height:181},src:"https://habrastorage.org/webt/ju/ew/a4/juewa4_v86btoxe5uml09u3rkas.png"}),Object(p.jsx)("img",{style:{width:282,height:181},src:"https://habrastorage.org/webt/81/hk/nb/81hknbktaadessnkny1xikjqwhw.png"})]})]})}),Object(p.jsxs)(d.h,{children:['\u041c\u0443\u043d\u0438\u0446\u0438\u043f\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0433. \u041e\u043c\u0441\u043a\u0430 "\u041f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u0435\u0440\u0432\u0438\u0441"',Object(p.jsx)("br",{}),"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0434\u0438\u0437\u0430\u0439\u043d by ",Object(p.jsx)(d.n,{href:"https://vk.com/li0ard",children:"@li0ard"})]})]}),Object(p.jsxs)(d.p,{id:"faq",children:[Object(p.jsx)(d.q,{children:"FAQ"}),Object(p.jsxs)(d.k,{children:[Object(p.jsx)(d.e,{onClick:function(){return i("panel1")},children:" \u041d\u0430\u0437\u0430\u0434 "}),Object(p.jsxs)(d.g,{children:[Object(p.jsx)("b",{children:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u043f\u043e\u043f\u0430\u043b\u0430 \u0432 \u0421\u0422\u041e\u041f-\u041b\u0418\u0421\u0422"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\u0415\u0441\u043b\u0438 \u043a\u0430\u0440\u0442\u0430 \u0431\u044b\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430, \u043d\u043e \u043f\u043e \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e, \u0442\u043e \u043f\u043e \u043a\u0430\u0440\u0442\u0435 \u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u0438 \u043a\u0430\u0440\u0442\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0441\u0442\u043e\u043f-\u043b\u0438\u0441\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u042f \u043f\u043e\u0442\u0435\u0440\u044f\u043b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c?"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u043d\u0435\u043f\u0435\u0440\u0441\u043e\u043d\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u044b (\u043d\u0435\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b) \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u0440\u0442\u044b \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c. \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u043d\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u044b\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f. \u0421 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0431\u0430\u043b\u0430\u043d\u0441 \u043d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f, \u043a\u0430\u0440\u0442\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0430 \u043f\u0440\u0435\u0434\u044a\u044f\u0432\u0438\u0442\u0435\u043b\u044f.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0441\u043b\u0438 \u043a\u0430\u0440\u0442\u0430 \u043d\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u043c \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435? "}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u0441\u0442\u0440\u043e\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u043d\u0435 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u043c \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u0437\u0434 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u043f\u043e \u0442\u0430\u0440\u0438\u0444\u0443 \u0440\u0430\u0437\u043e\u0432\u043e\u0439 \u043f\u043e\u0435\u0437\u0434\u043a\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430."]})]})]}),Object(p.jsxs)(d.p,{id:"rules",children:[Object(p.jsx)(d.q,{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(p.jsxs)(d.k,{children:[Object(p.jsx)(d.e,{onClick:function(){return i("panel1")},children:" \u041d\u0430\u0437\u0430\u0434 "}),Object(p.jsx)(d.g,{children:Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0438\u0442\u044c \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u043b\u044e\u0431\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u043e\u0439 \u043a \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u0435\u043b\u044e;"}),Object(p.jsx)("li",{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u043e\u043f\u043e\u0437\u043d\u0430\u043d\u0430, \u043a\u0430\u043a \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u0430\u044f \u043a \u043f\u0440\u043e\u0435\u0437\u0434\u0443;"}),Object(p.jsx)("li",{children:"\u0421 \u043a\u0430\u0440\u0442\u044b \u0441\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441 (\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b) \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430;"}),Object(p.jsx)("li",{children:"\u0415\u0441\u043b\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u043d\u0435 \u043e\u043f\u043e\u0437\u043d\u0430\u043d\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u0437\u0434."})]})})]})]}),Object(p.jsxs)(d.p,{id:"refill",children:[Object(p.jsx)(d.q,{children:"\u0413\u0434\u0435 \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}),Object(p.jsxs)(d.k,{children:[Object(p.jsx)(d.e,{onClick:function(){return i("panel1")},children:" \u041d\u0430\u0437\u0430\u0434 "}),Object(p.jsx)(d.l,{mode:"secondary",children:'\u0427\u0435\u0440\u0435\u0437 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 "\u041e\u041c\u041a\u0410"'}),Object(p.jsxs)(d.g,{children:['\u0422\u0435\u043f\u0435\u0440\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "\u041e\u041c\u041a\u0410" \u0441\u0442\u0430\u043b\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u043d\u0430 \u043a\u0430\u0440\u0442\u0443 \u041e\u043c\u043a\u0430.',Object(p.jsx)("br",{})]}),Object(p.jsx)(d.l,{mode:"secondary",children:"\u0427\u0435\u0440\u0435\u0437 \u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u041e\u043d\u043b\u0430\u0439\u043d"}),Object(p.jsxs)(d.g,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436 \u0431\u0435\u0437 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438.",Object(p.jsx)("br",{}),"\u0417\u0430\u043f\u0438\u0441\u044c \u0431\u0430\u043b\u0430\u043d\u0441\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3 \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u042d\u041f\u0411.",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."}),Object(p.jsx)("br",{})]}),Object(p.jsx)(d.l,{mode:"secondary",children:"\u0427\u0435\u0440\u0435\u0437 \u043f\u0443\u043d\u043a\u0442\u044b \u043f\u0440\u043e\u0434\u0430\u0436"}),Object(p.jsxs)(d.g,{children:["\u0417\u0430\u043f\u0438\u0441\u044c \u0431\u0430\u043b\u0430\u043d\u0441\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.",Object(p.jsx)("br",{}),"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442."]})]})]}),Object(p.jsxs)(d.p,{id:"fiscal",children:[Object(p.jsx)(d.q,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u043a"}),Object(p.jsxs)(d.k,{children:[Object(p.jsx)(d.e,{onClick:function(){return i("panel1")},children:" \u041d\u0430\u0437\u0430\u0434 "}),Object(p.jsx)(d.i,{top:"\u0421\u0435\u0440\u0438\u044f \u0431\u0438\u043b\u0435\u0442\u0430",children:Object(p.jsx)(d.m,{id:"ser",type:"text",placeholder:"000000-00000000-000"})}),Object(p.jsx)(d.i,{top:"\u041d\u043e\u043c\u0435\u0440 \u0431\u0438\u043b\u0435\u0442\u0430",children:Object(p.jsx)(d.m,{id:"num",type:"text",placeholder:"0000"})}),Object(p.jsx)(d.g,{children:Object(p.jsx)(d.c,{onClick:function(){return b.apply(this,arguments)},before:Object(p.jsx)(g.a,{}),size:"l",stretched:!0,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"})})]}),Object(p.jsx)(d.k,{id:"result",style:{visibility:"hidden"},children:Object(p.jsxs)(d.g,{align:"center",children:['\u041c\u0443\u043d\u0438\u0446\u0438\u043f\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 "\u041c\u041f \u0433. \u041e\u043c\u0441\u043a\u0430 "\u042d\u0422""',Object(p.jsx)("br",{}),"\u0418\u041d\u041d: 5507022628\xa0\xa0\xa0\u0421\u041d\u041e: \u041e\u0421\u041d",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u041f\u0440\u0438\u0445\u043e\u0434"}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{id:"date",children:"08.07.2022"})," / ",Object(p.jsx)("span",{id:"time",children:"13:49"})]}),Object(p.jsx)("p",{align:"right",children:"\u20bd"}),Object(p.jsx)("hr",{}),Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u043f\u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435"}),Object(p.jsx)("td",{id:"sum1",align:"right"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{id:"sum2",align:"right"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0423\u0441\u043b\u0443\u0433\u0430"}),Object(p.jsx)("td",{})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0451\u0442"}),Object(p.jsx)("td",{})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041d\u0414\u0421 0%"}),Object(p.jsx)("td",{align:"right",children:"0.00"})]})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("table",{style:{width:100},children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0421\u0423\u041c\u041c\u0410 \u0421 \u041d\u0414\u0421 0%"}),Object(p.jsx)("td",{id:"sum3",align:"right"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0418\u0422\u041e\u0413\u041e:"}),Object(p.jsx)("td",{id:"sum4",align:"right"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438:"}),Object(p.jsx)("td",{id:"sum5",align:"right"})]})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{id:"fn",align:"center",children:"\u0424\u041d: "}),Object(p.jsx)("p",{id:"fd",align:"center",children:"\u0424\u0414: "}),Object(p.jsx)("p",{id:"fp",align:"center",children:"\u0424\u041f: "}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"\u0421\u0430\u0439\u0442 \u0424\u041d\u0421: nalog.ru"}),Object(p.jsx)("img",{style:{width:100,height:100},id:"qr",src:"https://proverkacheka.com/qrcode/generate?text=21212"})]})})]})]})})};b.a.render(Object(p.jsx)(d.f,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(m,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.5ce29741.chunk.js.map