import{r as o,j as s,a as c,u as d}from"./index-DJIbHZap.js";import{S as m,G as g}from"./Goods-Bauvc6qg.js";import{S as u}from"./SectionName-w7_9VQTy.js";import{t as f}from"./translations-BGC0Tg8W.js";import"./MenuButton-DBon64Cf.js";const x="/assets/left-arrow-DtCia-vG.png",h="/assets/right-arrow-D2Qi0uuI.png";function p({sliderImages:e}){const[t,a]=o.useState(0);o.useEffect(()=>{const r=setInterval(()=>{i()},3e3);return()=>{clearInterval(r)}},[t]);function i(){t<e.length-1?a(r=>r+1):a(0)}function n(){t>0?a(r=>r-1):a(e.length-1)}return s.jsxs("div",{className:"slider",children:[s.jsx("div",{className:"slider__images",children:e.map((r,l)=>s.jsx("img",{src:e[l].image,className:"slider__img",style:{translate:`${-100*t}%`}},r.id))}),s.jsx("img",{src:x,alt:"",className:"slider__button-left",onClick:n}),s.jsx("img",{src:h,alt:"",className:"slider__button-right",onClick:i})]})}const j="/assets/slider-5-9t-tfrEQ.webp",I="/assets/slider-6-DLWPy7-N.avif",v="/assets/slider-3-CDSHdKJw.jpg",N="/assets/slider-4-DagIgG27.jpg",S=[{image:j,id:1},{image:I,id:2},{image:v,id:3},{image:N,id:4}];function G(){const e=c("root"),t=_(e),a=d(i=>i.lang.language);return s.jsxs("div",{className:"main-page",children:[s.jsx(p,{sliderImages:S}),s.jsxs(m,{children:[s.jsx(u,{text:f[a].bestChoices}),s.jsx(g,{goods:t,isProduct:!0})]})]})}function _(e){const t=[];return Object.keys(e).forEach((a,i)=>{if(a!=="matching"){const n=e[a],r=Math.floor(Math.random()*n.length);t.push(n[r])}}),t}export{G as default};
