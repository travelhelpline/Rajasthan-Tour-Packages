(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3794,663,9097,1980,4440,1473,4786],{9348:function(e,t,s){Promise.resolve().then(s.bind(s,3013)),Promise.resolve().then(s.bind(s,8503)),Promise.resolve().then(s.bind(s,5253)),Promise.resolve().then(s.bind(s,2368)),Promise.resolve().then(s.bind(s,6241)),Promise.resolve().then(s.t.bind(s,2972,23)),Promise.resolve().then(s.bind(s,4273))},3013:function(e,t,s){"use strict";var n=s(7437),l=s(3378),a=s(9089);t.default=e=>{let{faqs:t}=e;return(0,n.jsx)("div",{className:"container faq py-2",children:(0,n.jsx)("div",{className:"row mt-4 d-flex justify-content-center",children:(0,n.jsx)("div",{className:"col-12 col-lg-9 col-sm-12 d-flex justify-content-center align-items-center",children:(0,n.jsx)(l.Z,{className:"w-100",children:t.map((e,t)=>(0,n.jsxs)(l.Z.Item,{className:"w-100 d-flex justify-content-between align-items-center flex-column",eventKey:t.toString(),children:[(0,n.jsxs)(l.Z.Header,{className:"d-flex w-100 justify-content-between",children:[(0,n.jsx)(a.iih,{className:"me-2 accordion-question-icon"}),(0,n.jsx)("p",{className:"mb-0 accordion-question fw-normal",children:e.question})]}),(0,n.jsx)(l.Z.Body,{children:(0,n.jsx)("p",{className:"accordion-answer",dangerouslySetInnerHTML:{__html:e.answer}})})]},t))})})})})}},8503:function(e,t,s){"use strict";var n=s(7437),l=s(3378),a=s(9089);t.default=e=>{let{tourItinerary:t,style:s,stylePara:c,showIcon:r=!1,more:i=!1}=e;return(0,n.jsx)(l.Z,{className:"w-100",children:t.content.map((e,t)=>(0,n.jsxs)(l.Z.Item,{className:"w-100 d-flex flex-column accord-item mb-3",eventKey:t.toString(),children:[(0,n.jsxs)(l.Z.Header,{className:"d-flex w-100 justify-content-between align-items-center accord-head bg-white",children:[r&&(0,n.jsx)("span",{className:"me-3 bg-tertary-down d-flex p-2 rounded-5 ",children:(0,n.jsx)(a.Iyg,{className:"icon color-tertary"})}),(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h3",{className:"mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title  ".concat(s),children:e.day}),(0,n.jsx)("p",{className:"d-block w-100 fw-normal mb-0 ".concat(c),children:e.title})]})]}),(0,n.jsxs)(l.Z.Body,{className:"w-100 p-2",children:[(0,n.jsx)("p",{className:"w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0 accordion-answer",dangerouslySetInnerHTML:{__html:e.content}}),i&&(0,n.jsxs)("div",{className:"key-highlights w-100 mb-2 px-3",children:[(0,n.jsx)("p",{className:"mb-0 fw-bold text-capitalize",children:"Key Highlights:"}),(0,n.jsx)("ul",{className:"list-group list-group-flush ",children:e.highlights.points.map((e,t)=>(0,n.jsx)("li",{className:"list-group-item mb-0",children:e},t))})]})]})]},t))})}},5253:function(e,t,s){"use strict";var n=s(7437),l=s(3378),a=s(9089);let c={FaCheckCircle:a.FJM,FaTimesCircle:a.G5m,FaFileContract:a.UCj};t.default=e=>{let{packageData:t}=e;return(0,n.jsx)(l.Z,{className:"w-100 px-2",children:t.map((e,t)=>{let s=c[e.icon];return(0,n.jsxs)(l.Z.Item,{className:"w-100 d-flex flex-column accord-item mb-3",eventKey:t.toString(),children:[(0,n.jsxs)(l.Z.Header,{className:"d-flex w-100 justify-content-between bg-white",children:[s&&(0,n.jsx)(s,{className:"icon"})," ",(0,n.jsx)("div",{className:"d-flex flex-column",children:(0,n.jsx)("h3",{className:"mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title",children:e.title})})]}),(0,n.jsx)(l.Z.Body,{className:"w-100 p-2",children:(0,n.jsx)("p",{className:"w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0 accordion-answer",dangerouslySetInnerHTML:{__html:e.content}})})]},t)})})}},2368:function(e,t,s){"use strict";s.d(t,{default:function(){return a}});var n=s(7437),l=s(2265);function a(e){let{contentArray:t,tag:s="div",className:a=""}=e,[c,r]=(0,l.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[c&&l.createElement(s,{className:a},t.map((e,t)=>(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t))),(0,n.jsx)("button",{className:"read-more-btn d-flex position-absolute bottom-0",onClick:()=>{r(!c)},children:c?(0,n.jsx)(n.Fragment,{children:"Less"}):(0,n.jsx)(n.Fragment,{children:"More"})})]})}},6241:function(e,t,s){"use strict";var n=s(7437),l=s(3145);s(2265);var a=s(9277);t.default=e=>{let{images:t,content:s}=e;return(0,n.jsx)(a.Z,{fade:!0,pause:!1,controls:!1,children:t.map((e,t)=>(0,n.jsxs)(a.Z.Item,{children:[(0,n.jsx)(l.default,{src:e.src,alt:e.alt,title:e.title,width:3e3,height:2e3}),(0,n.jsx)(a.Z.Caption,{children:(0,n.jsxs)("div",{className:"days-banner-content",children:[(0,n.jsx)("h3",{className:"text-center color-tertary px-0 w-auto text-uppercase",children:s[t].duration}),(0,n.jsxs)("h1",{className:"mb-4 text-capitalize w-100 fw-bold text-center text-white",children:[s[t].title," ",(0,n.jsx)("hr",{style:{borderColor:"white"}})," ",(0,n.jsx)("span",{className:"color-tertary d-block text-capitalize fw-normal",children:s[t].subhead})]})]})})]},t))})}}},function(e){e.O(0,[7699,6779,5878,5438,7513,2512,2971,2117,1744],function(){return e(e.s=9348)}),_N_E=e.O()}]);