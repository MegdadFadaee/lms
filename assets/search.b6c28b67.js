import{r as x,D as z,E as B,o as C,a as N,w as V,c as n,v as r,q as s,G as j,t as e,z as w,F as u,x as h,m as D,d as a,y as E,s as v,b as y,Q as q}from"./index.193d4fc4.js";import{_ as g}from"./star-main.c2122cd7.js";const F={class:"container search-page"},Q={key:0,class:"header-search"},R={class:"title"},A={class:"key"},G={class:"count"},L={key:1,class:"header-search"},M=s("div",{class:"title"}," \u0644\u0637\u0641\u0627 \u0645\u062A\u0646\u06CC \u0628\u0631\u0627\u06CC \u062C\u0633\u062A\u062C\u0648 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u06A9\u0646\u06CC\u062F. ",-1),S=[M],T={class:"custom-row q-mt-lg"},W={class:"content"},H=["src","alt"],I={class:"tab-margin"},J={class:"content-title one-line"},K={class:"desc-content two-line"},O={key:0,class:"content-info justify-between"},P=["src"],U={class:"q-my-auto q-mx-sm"},X=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),Y={class:"name"},Z={class:"data"},$={class:"data-sec"},ss=s("span",null,"\u062C\u0644\u0633\u0647",-1),ts={class:"data-sec"},es=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),as={class:"data-sec"},ns=s("img",{src:g,alt:""},null,-1),os={key:1,class:"content-info flex",style:{"column-gap":"0.5rem"}},cs=["src"],ls={class:"q-my-auto q-mx-sm flex align-baseline",style:{"column-gap":"0.2rem"}},is=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),ds={class:"name"},_s={class:"data"},rs={class:"data-sec"},us=s("span",null,"\u062C\u0644\u0633\u0647",-1),hs={class:"data-sec"},vs=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),ms={class:"data-sec"},ps=s("img",{src:g,alt:""},null,-1),ys={key:2,class:"content-info"},qs={class:"justify-between"},gs=["src"],fs={class:"q-my-auto q-mx-sm"},ks=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),xs={class:"name"},ws={class:"data"},bs={class:"data-sec"},zs=s("span",null,"\u062C\u0644\u0633\u0647",-1),Bs={class:"data-sec"},Cs=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),Ns={class:"data-sec"},Vs=s("img",{src:g,alt:""},null,-1),Fs={__name:"search",setup(js){const m=x(0);z();const c=B(),d=x([]);C(()=>{var i;m.value=window.innerWidth,!((i=c.query)!=null&&i.q)||c.query.q.length<2?d.value=[]:f()});const f=async i=>{const k={q:c.query.q,limit:20};N.course.search(k).then(p=>{var _;d.value=(_=p.data)==null?void 0:_.data})};return V(()=>c.query.q,async i=>{i.length<2?d.value=[]:f()}),(i,k)=>{var _;const p=D("router-link");return a(),n("div",F,[r(c).query.q&&r(c).query.q.length>1?(a(),n("div",Q,[s("div",R,[j(" \u0646\u062A\u06CC\u062C\u0647 \u062C\u0633\u062A\u062C\u0648 \u062F\u0631 "),s("span",A,e(r(c).query.q),1)]),s("div",G,e(d.value.length)+" \u062F\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634\u06CC ",1)])):w("",!0),!((_=r(c).query)!=null&&_.q)||r(c).query.q.length<2?(a(),n("div",L,S)):w("",!0),s("div",T,[(a(!0),n(u,null,h(d.value,(t,b)=>(a(),E(p,{key:b,class:"custom-col",to:{name:"singleCourses",params:{id:t.id}}},{default:v(()=>[s("div",W,[s("img",{src:t.pic,class:"main-pic",alt:t.title},null,8,H),s("div",I,[s("div",J,e(t.title),1),s("div",K,e(t.desc),1),m.value>=1024?(a(),n("div",O,[(a(!0),n(u,null,h([t.teachers[0]],(o,l)=>(a(),n("div",{class:"teacher",key:l},[y(q,{size:"45"},{default:v(()=>[s("img",{src:o.pic,alt:"item"},null,8,P)]),_:2},1024),s("div",U,[X,s("div",Y,e(o==null?void 0:o.title),1)])]))),128)),s("div",Z,[s("div",$,[s("div",null,e(t.lesson_count),1),ss]),s("div",ts,[s("div",null,e(t.duration),1),es]),s("div",as,[ns,s("span",null,e(t.rate.average),1)])])])):m.value<768?(a(),n("div",os,[(a(!0),n(u,null,h([t.teachers[0]],(o,l)=>(a(),n("div",{class:"teacher",key:l},[y(q,{size:"45"},{default:v(()=>[s("img",{src:o.pic,alt:"item"},null,8,cs)]),_:2},1024)]))),128)),s("div",null,[(a(!0),n(u,null,h([t.teachers[0]],(o,l)=>(a(),n("div",{class:"teacher",key:l},[s("div",ls,[is,s("div",ds,e(o.title),1)])]))),128)),s("div",_s,[s("div",rs,[s("div",null,e(t.lesson_count),1),us]),s("div",hs,[s("div",null,e(t.duration),1),vs]),s("div",ms,[ps,s("span",null,e(t.rate.average),1)])])])])):(a(),n("div",ys,[s("div",qs,[(a(!0),n(u,null,h([t.teachers[0]],(o,l)=>(a(),n("div",{class:"teacher flex",key:l},[y(q,{size:"45"},{default:v(()=>[s("img",{src:o.pic,alt:"item"},null,8,gs)]),_:2},1024),s("div",fs,[ks,s("div",xs,e(o.title),1)])]))),128)),s("div",ws,[s("div",bs,[s("div",null,e(t.lesson_count),1),zs]),s("div",Bs,[s("div",null,e(t.duration),1),Cs]),s("div",Ns,[Vs,s("span",null,e(t.rate.average),1)])])])]))])])]),_:2},1032,["to"]))),128))])])}}};export{Fs as default};
