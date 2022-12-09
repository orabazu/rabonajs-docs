"use strict";(self.webpackChunkrabonjs_docs=self.webpackChunkrabonjs_docs||[]).push([[160],{2093:(e,t,a)=>{a.r(t),a.d(t,{PitchComponentWithPasses:()=>u,assets:()=>h,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=a(7462),n=a(7294),r=a(3905),i=a(5543);const l={slug:"welcome",title:"Welcome",authors:["orabazu"],tags:["rabonajs","hello","soccer","football"]},s=void 0,c={permalink:"/rabonajs-docs/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-08-welcome/index.mdx",source:"@site/blog/2022-12-08-welcome/index.mdx",title:"Welcome",description:"Today, we are excited to announce the first alpha release of RabonaJS, a lightweight JavaScript library for plotting soccer events",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"rabonajs",permalink:"/rabonajs-docs/blog/tags/rabonajs"},{label:"hello",permalink:"/rabonajs-docs/blog/tags/hello"},{label:"soccer",permalink:"/rabonajs-docs/blog/tags/soccer"},{label:"football",permalink:"/rabonajs-docs/blog/tags/football"}],readingTime:1.8,hasTruncateMarker:!1,authors:[{name:"Orhun \xd6zer",title:"Maintainer of RabonaJS",url:"https://github.com/orabazu",imageURL:"https://avatars.githubusercontent.com/u/812622?v=4",key:"orabazu"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["orabazu"],tags:["rabonajs","hello","soccer","football"]}},h={authorsImageUrls:[void 0]},p=[],u=()=>{const[e,t]=(0,n.useState)(null),a={scaler:6,height:80,width:120,padding:100,linecolour:"#ffffff",fillcolour:"#7ec850"};return(0,n.useEffect)((()=>{if(!e){const e=i.Z.pitch("pitch2",a);t(e);const o=[];for(let t=0;t<10;t++)o.push({startX:Math.floor(120*Math.random()),startY:Math.floor(80*Math.random()),endX:Math.floor(120*Math.random()),endY:Math.floor(80*Math.random())});i.Z.layer({type:"ballMovement",data:o,options:{color:"yellow",width:1.5,showArrows:!0,radius:3}}).addTo(e)}}),[]),(0,r.kt)("div",{id:"pitch2",style:{width:"500px",margin:"auto"}})},d={toc:p,PitchComponentWithPasses:u};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today, we are excited to announce the first alpha release of RabonaJS, a lightweight JavaScript library for plotting soccer events"),(0,r.kt)("p",null,"RabonaJS provides a simple and intuitive syntax for plotting soccer/football events as layers on top of a soccer field. Powered by D3.js, it is designed to be easy to use and to integrate with js notebooks such as Observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import Rabona from "rabonajs";\n\nconst pitchOptions = {\n  scaler: 6, //constant to resize the pitch\n  height: 80, //px\n  width: 120, //px\n  padding: 100, //px\n  linecolour: "#ffffff",\n  fillcolour: "#7ec850",\n};\n\n// initialize the pitch on the "pitch" div with a given options\nconst pitch = Rabona.pitch("pitch", pitchOptions);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="pitch"></div>\n')),(0,r.kt)("p",null,"Simple as is."),(0,r.kt)("p",null,"In this first alpha release, we have implemented the core functionality of RabonaJS, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pitch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Layer")," methods."),(0,r.kt)("p",null,"We are excited to continue developing RabonaJS and adding new features and functionality in the future. We encourage you to try out the library and give us feedback on what you like and what you would like to see improved."),(0,r.kt)("p",null,"To get started with RabonaJS, you can visit the GitHub repository at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orabazu/rabonajs"},"https://github.com/orabazu/rabonajs"),". The documentation and examples will help you learn how to use the library in your own projects or notebooks."),(0,r.kt)("p",null,"We look forward to hearing your feedback and seeing what you build with RabonaJS!"),(0,r.kt)(u,{mdxType:"PitchComponentWithPasses"}))}b.isMDXComponent=!0}}]);