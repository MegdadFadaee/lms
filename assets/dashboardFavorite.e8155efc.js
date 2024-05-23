import{f as m,g as y,j as w,c as a,a as i,d as s,F as n,r as l,h as x,o as c,w as _,t,Q as u}from"./index.2d1cdea9.js";import{_ as v}from"./star-main.c2122cd7.js";import{_ as h}from"./navbar.b8d9cee7.js";import{h as k}from"./handleApiRequests.befb824f.js";const q={key:0,class:"container row"},b={class:"width-80"},C={class:"dashboard-favorites"},F=s("div",{class:"title"},"\u0639\u0644\u0627\u0642\u0647\u200C\u0647\u0627\u06CC \u0645\u0646",-1),j={class:"my-course flex no-wrap",style:{"column-gap":"2rem"}},z=["src"],B={class:"leftcourse"},N={class:"course-name one-line"},Q={class:"course-desc two-line"},V={class:"course-info justify-between"},W={class:"column"},A=["src"],D={class:"q-my-auto q-mx-sm"},E=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),L={class:"name"},M={class:"data"},R={class:"data-sec"},S=s("span",null,"\u062C\u0644\u0633\u0647",-1),$={class:"data-sec"},G=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),H={class:"data-sec"},I=s("img",{src:v,alt:""},null,-1),J={key:1},K={class:"dashboard-favorites",style:{"margin-left":"-1rem","margin-right":"-1rem !important"}},O=s("div",{class:"title"},"\u0639\u0644\u0627\u0642\u0647\u200C\u0647\u0627\u06CC \u0645\u0646",-1),P={class:"my-course"},T=["src"],U={class:"course-name one-line"},X={class:"course-desc two-line"},Y={class:"course-info"},Z=["src"],ss={class:"q-my-auto q-mx-sm flex align-baseline",style:{"column-gap":"0.3rem"}},es=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),os={class:"name"},ts={class:"data",style:{"margin-right":"35px !important"}},as={class:"data-sec"},cs=s("span",null,"\u062C\u0644\u0633\u0647",-1),is={class:"data-sec"},ns=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),ls={class:"data-sec"},ds=s("img",{src:v,alt:""},null,-1),_s={key:2},rs={class:"dashboard-favorites"},us=s("div",{class:"title q-pr-lg"},"\u0639\u0644\u0627\u0642\u0647\u200C\u0647\u0627\u06CC \u0645\u0646",-1),hs={class:"my-course flex no-wrap",style:{"column-gap":"2rem"}},vs=["src"],ps={class:"leftcourse"},ms={class:"course-name one-line"},fs={class:"course-desc two-line"},gs={class:"course-info justify-between"},ys={class:"column"},ws=["src"],xs={class:"q-my-auto q-mx-sm"},ks=s("div",{class:"master"},"\u0627\u0633\u062A\u0627\u062F",-1),qs={class:"name"},bs={class:"data"},Cs={class:"data-sec"},Fs=s("span",null,"\u062C\u0644\u0633\u0647",-1),js={class:"data-sec"},zs=s("span",null,"\u062F\u0642\u06CC\u0642\u0647",-1),Bs={class:"data-sec"},Ns=s("img",{src:v,alt:""},null,-1),Ls={__name:"dashboardFavorite",setup(Qs){const r=m(window.innerWidth),d=m([]);y(async()=>{await f(),r.value=window.innerWidth});const f=async()=>{await k(w.dashboard.courses().then(p=>{d.value=p.data.data.favorite_courses}))};return(p,Vs)=>{const g=x("router-link");return r.value>=1024?(c(),a("div",q,[i(h,{class:"width-20"}),s("div",b,[s("div",C,[F,(c(!0),a(n,null,l(d.value,o=>(c(),a("div",{key:o.id},[i(g,{to:{name:"singleCourses",params:{id:o.id}}},{default:_(()=>[s("div",j,[s("img",{src:o.pic,class:"course-img",alt:""},null,8,z),s("div",B,[s("div",N,t(o.title),1),s("p",Q,t(o.desc),1),s("div",V,[s("div",W,[(c(!0),a(n,null,l([o.teachers[0]],e=>(c(),a("div",{class:"teacher q-pt-sm",key:e==null?void 0:e.id},[i(u,{size:"40px"},{default:_(()=>[s("img",{src:e==null?void 0:e.pic,alt:""},null,8,A)]),_:2},1024),s("div",D,[E,s("div",L,t(e==null?void 0:e.title),1)])]))),128))]),s("div",M,[s("div",R,[s("div",null,t(o.lesson_count),1),S]),s("div",$,[s("div",null,t(o.duration),1),G]),s("div",H,[I,s("span",null,t(o.rate.average),1)])])])])])]),_:2},1032,["to"])]))),128))])])])):768>r.value?(c(),a("div",J,[i(h),s("div",null,[s("div",K,[O,(c(!0),a(n,null,l(d.value,o=>(c(),a("div",{key:o.id},[s("div",P,[s("img",{src:o.pic,class:"course-img",alt:""},null,8,T),s("div",null,[s("div",U,t(o.title),1),s("p",X,t(o.desc),1),s("div",Y,[(c(!0),a(n,null,l([o.teachers[0]],e=>(c(),a("div",{class:"teacher q-pt-sm",key:e==null?void 0:e.id},[i(u,{size:"40px"},{default:_(()=>[s("img",{src:e==null?void 0:e.pic,alt:""},null,8,Z)]),_:2},1024),s("div",ss,[es,s("div",os,t(e==null?void 0:e.title),1)])]))),128)),s("div",ts,[s("div",as,[s("div",null,t(o.lesson_count),1),cs]),s("div",is,[s("div",null,t(o.duration),1),ns]),s("div",ls,[ds,s("span",null,t(o.rate.average),1)])])])])])]))),128))])])])):(c(),a("div",_s,[i(h),s("div",null,[s("div",rs,[us,(c(!0),a(n,null,l(d.value,o=>(c(),a("div",{key:o.id},[s("div",hs,[s("img",{src:o.pic,class:"course-img",alt:""},null,8,vs),s("div",ps,[s("div",ms,t(o.title),1),s("p",fs,t(o.desc),1),s("div",gs,[s("div",ys,[(c(!0),a(n,null,l([o.teachers[0]],e=>(c(),a("div",{class:"teacher q-pt-sm",key:e==null?void 0:e.id},[i(u,{size:"40px"},{default:_(()=>[s("img",{src:e==null?void 0:e.pic,alt:""},null,8,ws)]),_:2},1024),s("div",xs,[ks,s("div",qs,t(e==null?void 0:e.title),1)])]))),128))]),s("div",bs,[s("div",Cs,[s("div",null,t(o.lesson_count),1),Fs]),s("div",js,[s("div",null,t(o.duration),1),zs]),s("div",Bs,[Ns,s("span",null,t(o.rate.average),1)])])])])])]))),128))])])]))}}};export{Ls as default};
