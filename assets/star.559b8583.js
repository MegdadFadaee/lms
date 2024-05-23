import{s as r,C as Q,f as s,cZ as q,c_ as z,g as M,y as n,a7 as N,$ as P,cV as U,v as L,cT as h,S as j}from"./index.2d1cdea9.js";const J={ratio:[String,Number]};function W(e,o){return r(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const x=1.7778;var X=Q({name:"QImg",props:{...J,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:x},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const A=s(e.initialRatio),y=W(e,A),m=j(),{registerTimeout:w,removeTimeout:v}=q(),{registerTimeout:B,removeTimeout:T}=q(),f=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),C=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),t=[s(null),s(f.value)],a=s(0),c=s(!1),g=s(!1),R=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=r(()=>({width:e.width,height:e.height})),F=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),O=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function V(){if(T(),e.loadingShowDelay===0){c.value=!0;return}B(()=>{c.value=!0},e.loadingShowDelay)}function S(){T(),c.value=!1}function D({target:i}){h(m)===!1&&(v(),A.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,b(i,1))}function b(i,l){l===1e3||h(m)===!0||(i.complete===!0?H(i):w(()=>{b(i,l+1)},50))}function H(i){h(m)!==!0&&(a.value=a.value^1,t[a.value].value=null,S(),i.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",i.currentSrc||i.src))}function E(i){v(),S(),g.value=!0,t[a.value].value=C.value,t[a.value^1].value=f.value,u("error",i)}function k(i){const l=t[i].value,d={key:"img_"+i,class:F.value,style:O.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return a.value===i?Object.assign(d,{class:d.class+"current",onLoad:D,onError:E}):d.class+="loaded",n("div",{class:"q-img__container absolute-full",key:"img"+i},n("img",d))}function I(){return c.value===!1?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},P(o[g.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[n(U,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){L(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{v(),g.value=!1,l===null?(S(),t[a.value^1].value=f.value):V(),t[a.value].value=l},{immediate:!0})};z.value===!0?M(i):i()}return()=>{const i=[];return y.value!==null&&i.push(n("div",{key:"filler",style:y.value})),t[0].value!==null&&i.push(k(0)),t[1].value!==null&&i.push(k(1)),i.push(n(N,{name:"q-transition--fade"},I)),n("div",{key:"main",class:R.value,style:_.value,role:"img","aria-label":e.alt},i)}}}),Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAABHNCSVQICAgIfAhkiAAAAeBJREFUOE+VUlsyA0EUvbc7iPIzPlT5m6SU4EusQOyAHViCHWAnlmAHWIHxpQpVSaqoeFVl+BAS09e53WYkJB96aqrncc+5p8+5TBOWdClyfT7JMqGpD9riKqWTannSj0GHDkRoXxxKMjmciengXySqYvBGTRGOBEpIOO2JVOcnqBmr5OMOXR1DBfB6g4eFD2eX3Fg1nkQ6VPkkilFcl4widN5zTvdAwmxBop7YI5S3rOPks0Tt2ep7S/GcPVACwDqkh65DN34DbLQMl1E14Rm7vpOYZKr2usH9DrUgPRYnkM3kMi/dH8Hg0m+GFZAD890rbJeW0wr3b6nuhI/JUQxFoTgHfHdVOoX+InqxRA2upUnwpElRT/gUPdfVhyAVMFWAiP3uvwMWFF6YjLZ5LQ2e5Nl3QVR2FqwmLjqO8QQq22aa6lxNi+Ebifj9ZuYUpJtBCToiFTVaPfHeqEeOzkqr3cbw4P0m8aUhheDDTzo/npiV5xFc8dJrlis2M5jSkMpfT4ZSMbTBtackV1OQDK7LDSF7ElKACjZtHAkTask47GzifE4gb4dXHo//kPSv5uoAnkPBC460V6qlOp3FksuFXWILUlHjt3jtXv3za+RschlV8tiGCUbJFlFz76PN1xe7rd0RxWKv2gAAAABJRU5ErkJggg==";export{X as Q,Y as _};
