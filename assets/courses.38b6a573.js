import{_ as t}from"./homeContent.ce706687.js";import{u as c,r,o as n,a as u,c as i,b as m,d as _}from"./index.193d4fc4.js";import{h as l}from"./handleApiRequests.88918c8c.js";import"./star-main.c2122cd7.js";/* empty css                 */const p={class:"container"},x={__name:"courses",setup(d){c();const e=r({});n(async()=>{await o()});const o=async()=>{await l(u.course.courses().then(a=>{var s;e.value=(s=a.data)==null?void 0:s.data}))};return(a,s)=>(_(),i("div",p,[m(t,{content:e.value,class:"courses"},null,8,["content"])]))}};export{x as default};
