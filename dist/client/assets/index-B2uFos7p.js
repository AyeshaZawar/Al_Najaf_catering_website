import{r as p,j as n,_ as G}from"./index-DA3wnzfz.js";import{h as v,c as C,j as re,l as ae,J as je,u as le,t as ie,q as we,y as Ae,k as Ne,g as Ee,d as ke,p as oe,r as Se,i as Te,v as S,w as ce,m as W,b as de,o as A,M as me,e as O,f as ue,n as b,A as D,s as Ce,N as Ie,F as Oe}from"./social_event-DrxBVPgu.js";import{l as Re,t as Ve}from"./icon-2-DN7_f9QR.js";import{s as Le,r as Y,P as We}from"./reserve-CNLTSUqh.js";import{s as B,d as Pe}from"./weddings-kyk5rIuQ.js";import{g as fe}from"./menu-4-CssCIogA.js";function xe(e,t){let s;const r=()=>{const{currentTime:a}=t,i=(a===null?0:a.value)/100;s!==i&&e(i),s=i};return v.preUpdate(r,!0),()=>C(r)}function Me(...e){const t=!Array.isArray(e[0]),s=t?0:-1,r=e[0+s],a=e[1+s],l=e[2+s],i=e[3+s],o=re(a,l,i);return t?o(r):o}function De(e,t,s={}){const r=e.get();let a=null,l=r,i;const o=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,c=()=>{a&&(a.stop(),a=null),e.animation=void 0},m=()=>{const f=Z(e.get()),d=Z(l);if(f===d){c();return}const x=a?a.getGeneratorVelocity():e.getVelocity();c(),a=new je({keyframes:[f,d],velocity:x,type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:i})},u=()=>{m(),e.animation=a??void 0,e.events.animationStart?.notify(),a?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((f,d)=>{l=f,i=x=>d(R(x,o)),v.postRender(u)},c),ae(t)){let f=s.skipInitialAnimation===!0;const d=t.on("change",w=>{f?(f=!1,e.jump(R(w,o),!1)):e.set(R(w,o))}),x=e.on("destroy",d);return()=>{d(),x()}}return c}function R(e,t){return t?e+t:e}function Z(e){return typeof e=="number"?e:parseFloat(e)}function I(e){return typeof window>"u"?!1:e?le():ie()}const Ye=50,q=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ze=()=>({time:0,x:q(),y:q()}),He={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Q(e,t,s,r){const a=s[t],{length:l,position:i}=He[t],o=a.current,c=s.time;a.current=Math.abs(e[`scroll${i}`]),a.scrollLength=e[`scroll${l}`]-e[`client${l}`],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=we(0,a.scrollLength,a.current);const m=r-c;a.velocity=m>Ye?0:Ae(a.current-o,m)}function Ue(e,t,s){Q(e,"x",t,s),Q(e,"y",t,s),t.time=s}function Ge(e,t){const s={x:0,y:0};let r=e;for(;r&&r!==t;)if(Ne(r))s.x+=r.offsetLeft,s.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const a=r.getBoundingClientRect();r=r.parentElement;const l=r.getBoundingClientRect();s.x+=a.left-l.left,s.y+=a.top-l.top}else if(r instanceof SVGGraphicsElement){const{x:a,y:l}=r.getBBox();s.x+=a,s.y+=l;let i=null,o=r.parentNode;for(;!i;)o.tagName==="svg"&&(i=o),o=r.parentNode;r=i}else break;return s}const P={start:0,center:.5,end:1};function X(e,t,s=0){let r=0;if(e in P&&(e=P[e]),typeof e=="string"){const a=parseFloat(e);e.endsWith("px")?r=a:e.endsWith("%")?e=a/100:e.endsWith("vw")?r=a/100*document.documentElement.clientWidth:e.endsWith("vh")?r=a/100*document.documentElement.clientHeight:e=a}return typeof e=="number"&&(r=t*e),s+r}const Be=[0,0];function Ze(e,t,s,r){let a=Array.isArray(e)?e:Be,l=0,i=0;return typeof e=="number"?a=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?a=e.split(" "):a=[e,P[e]?e:"0"]),l=X(a[0],s,r),i=X(a[1],t),l-i}const N={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},qe={x:0,y:0};function Qe(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Xe(e,t,s){const{offset:r=N.All}=s,{target:a=e,axis:l="y"}=s,i=l==="y"?"height":"width",o=a!==e?Ge(a,e):qe,c=a===e?{width:e.scrollWidth,height:e.scrollHeight}:Qe(a),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let u=!t[l].interpolate;const f=r.length;for(let d=0;d<f;d++){const x=Ze(r[d],m[i],c[i],o[l]);!u&&x!==t[l].interpolatorOffsets[d]&&(u=!0),t[l].offset[d]=x}u&&(t[l].interpolate=re(t[l].offset,Ee(r),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ke(0,1,t[l].interpolate(t[l].current))}function Fe(e,t=e,s){if(s.x.targetOffset=0,s.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)s.x.targetOffset+=r.offsetLeft,s.y.targetOffset+=r.offsetTop,r=r.offsetParent}s.x.targetLength=t===e?t.scrollWidth:t.clientWidth,s.y.targetLength=t===e?t.scrollHeight:t.clientHeight,s.x.containerLength=e.clientWidth,s.y.containerLength=e.clientHeight}function Je(e,t,s,r={}){return{measure:a=>{Fe(e,r.target,s),Ue(e,s,a),(r.offset||r.target)&&Xe(e,s,r)},notify:()=>t(s)}}const y=new WeakMap,F=new WeakMap,V=new WeakMap,J=new WeakMap,T=new WeakMap,K=e=>e===document.scrollingElement?window:e;function pe(e,{container:t=document.scrollingElement,trackContentSize:s=!1,...r}={}){if(!t)return oe;let a=V.get(t);a||(a=new Set,V.set(t,a));const l=ze(),i=Je(t,e,l,r);if(a.add(i),!y.has(t)){const c=()=>{for(const d of a)d.measure(Te.timestamp);v.preUpdate(m)},m=()=>{for(const d of a)d.notify()},u=()=>v.read(c);y.set(t,u);const f=K(t);window.addEventListener("resize",u),t!==document.documentElement&&F.set(t,Se(t,u)),f.addEventListener("scroll",u),u()}if(s&&!T.has(t)){const c=y.get(t),m={width:t.scrollWidth,height:t.scrollHeight};J.set(t,m);const u=()=>{const d=t.scrollWidth,x=t.scrollHeight;(m.width!==d||m.height!==x)&&(c(),m.width=d,m.height=x)},f=v.read(u,!0);T.set(t,f)}const o=y.get(t);return v.read(o,!1,!0),()=>{C(o);const c=V.get(t);if(!c||(c.delete(i),c.size))return;const m=y.get(t);y.delete(t),m&&(K(t).removeEventListener("scroll",m),F.get(t)?.(),window.removeEventListener("resize",m));const u=T.get(t);u&&(C(u),T.delete(t)),J.delete(t)}}const Ke=[[N.Enter,"entry"],[N.Exit,"exit"],[N.Any,"cover"],[N.All,"contain"]],_={start:0,end:1};function _e(e){const t=e.trim().split(/\s+/);if(t.length!==2)return;const s=_[t[0]],r=_[t[1]];if(!(s===void 0||r===void 0))return[s,r]}function $e(e){if(e.length!==2)return;const t=[];for(const s of e)if(Array.isArray(s))t.push(s);else if(typeof s=="string"){const r=_e(s);if(!r)return;t.push(r)}else return;return t}function en(e,t){const s=$e(e);if(!s)return!1;for(let r=0;r<2;r++){const a=s[r],l=t[r];if(a[0]!==l[0]||a[1]!==l[1])return!1}return!0}function z(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[t,s]of Ke)if(en(e,t))return{rangeStart:`${s} 0%`,rangeEnd:`${s} 100%`}}const $=new Map;function ee(e){const t={value:0},s=pe(r=>{t.value=r[e.axis].progress*100},e);return{currentTime:t,cancel:s}}function ge({source:e,container:t,...s}){const{axis:r}=s;e&&(t=e);let a=$.get(t);a||(a=new Map,$.set(t,a));const l=s.target??"self";let i=a.get(l);i||(i={},a.set(l,i));const o=r+(s.offset??[]).join(",");return i[o]||(s.target&&I(s.target)?z(s.offset)?i[o]=new ViewTimeline({subject:s.target,axis:r}):i[o]=ee({container:t,...s}):I()?i[o]=new ScrollTimeline({source:t,axis:r}):i[o]=ee({container:t,...s})),i[o]}function nn(e,t){const s=ge(t),r=t.target?z(t.offset):void 0,a=t.target?I(t.target)&&!!r:I();return e.attachTimeline({timeline:a?s:void 0,...r&&a&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:l=>(l.pause(),xe(i=>{l.time=l.iterationDuration*i},s))})}function tn(e){return e&&(e.target||e.offset)}function sn(e){return e.length===2}function rn(e,t){return sn(e)||tn(t)?pe(s=>{e(s[t.axis].progress,s)},t):xe(e,ge(t))}function he(e,{axis:t="y",container:s=document.scrollingElement,...r}={}){if(!s)return oe;const a={axis:t,container:s,...r};return typeof e=="function"?rn(e,a):nn(e,a)}const an=()=>({scrollX:A(0),scrollY:A(0),scrollXProgress:A(0),scrollYProgress:A(0)}),j=e=>e?!e.current:!1;function ne(e,t,s,r){return{factory:a=>{let l;const i=()=>{if(j(s)||j(r)){W.read(i);return}l=he(a,{...t,axis:e,container:s?.current||void 0,target:r?.current||void 0})};return W.read(i),()=>{de(i),l?.()}},times:[0,1],keyframes:[0,1],ease:a=>a,duration:1}}function ln(e,t){return typeof window>"u"?!1:e?le()&&!!z(t):ie()}function be({container:e,target:t,...s}={}){const r=S(an);ln(t,s.offset)&&(r.scrollXProgress.accelerate=ne("x",s,e,t),r.scrollYProgress.accelerate=ne("y",s,e,t));const a=p.useRef(null),l=p.useRef(!1),i=p.useCallback(()=>(a.current=he((o,{x:c,y:m})=>{r.scrollX.set(c.current),r.scrollXProgress.set(c.progress),r.scrollY.set(m.current),r.scrollYProgress.set(m.progress)},{...s,container:e?.current||void 0,target:t?.current||void 0}),()=>{a.current?.()}),[e,t,JSON.stringify(s.offset)]);return ce(()=>{if(l.current=!1,j(e)||j(t)){l.current=!0;return}else return i()},[i]),p.useEffect(()=>{if(!l.current)return;let o;const c=()=>{const m=j(e),u=j(t);!m&&!u&&(o=i())};return W.read(c),()=>{de(c),o?.()}},[i]),r}function H(e){const t=S(()=>A(e)),{isStatic:s}=p.useContext(me);if(s){const[,r]=p.useState(e);p.useEffect(()=>t.on("change",r),[])}return t}function ve(e,t){const s=H(t()),r=()=>s.set(t());return r(),ce(()=>{const a=()=>v.preRender(r,!1,!0),l=e.map(i=>i.on("change",a));return()=>{l.forEach(i=>i()),C(r)}}),s}function on(e){O.current=[],e();const t=ve(O.current,e);return O.current=void 0,t}function E(e,t,s,r){if(typeof e=="function")return on(e);if(s!==void 0&&!Array.isArray(s)&&typeof t!="function")return cn(e,t,s,r);const i=typeof t=="function"?t:Me(t,s,r),o=Array.isArray(e)?te(e,i):te([e],([m])=>i(m)),c=Array.isArray(e)?void 0:e.accelerate;return c&&!c.isTransformed&&typeof t!="function"&&Array.isArray(s)&&r?.clamp!==!1&&(o.accelerate={...c,times:t,keyframes:s,isTransformed:!0}),o}function te(e,t){const s=S(()=>[]);return ve(e,()=>{s.length=0;const r=e.length;for(let a=0;a<r;a++)s[a]=e[a].get();return t(s)})}function cn(e,t,s,r){const a=S(()=>Object.keys(s)),l=S(()=>({}));for(const i of a)l[i]=E(e,t,s[i],r);return l}function dn(e,t={}){const{isStatic:s}=p.useContext(me),r=()=>ae(e)?e.get():e;if(s)return E(r);const a=H(r());return p.useInsertionEffect(()=>De(a,e,t),[a,JSON.stringify(t)]),a}function k(e,t={}){return dn(e,{type:"spring",...t})}const mn=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],un=ue("arrow-up-right",mn);const fn=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xn=ue("eye",fn),pn="/assets/hero-bg-BoEWfl8i.jpg",gn="/assets/icon-1-DZq-dIX7.png";function hn(){const e=p.useRef(null),{scrollY:t}=be(),s=H(0),r=k(s,{stiffness:45,damping:20,mass:1}),a=k(0,{stiffness:30,damping:20});return p.useEffect(()=>{let l=0;return t.on("change",i=>{const o=i-l;o>0&&s.set(s.get()+o*.12),o<0&&s.set(s.get()+o*.12),a.set(-i*.04),l=i})},[t,s,a]),n.jsx("section",{id:"home",children:n.jsxs("section",{ref:e,id:"home",className:"relative min-h-[105vh] flex items-center justify-center overflow-visible text-cream",children:[n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 zoom-slow",children:n.jsx("img",{src:pn,alt:"",className:"w-full h-full object-cover"})}),n.jsx("div",{className:"absolute inset-0 bg-[#1a0e07]/72"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#1a0e07]/55 via-[#1a0e07]/65 to-[#1a0e07]/90"})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 max-w-5xl pt-28",children:[n.jsxs(b.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.3,duration:1},className:"eyebrow text-white mb-7 flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-white text-[10px]",children:"✦"}),"THE BEST EVENTS START HERE"]}),n.jsxs(b.h1,{initial:{opacity:0,y:36},animate:{opacity:1,y:0},transition:{delay:.45,duration:1.2,ease:[.22,1,.36,1]},className:"font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.98]",children:["CREATION OF",n.jsx("br",{}),"MEMORABLE",n.jsx("br",{}),"EVENTS"]}),n.jsx(b.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:1.1,duration:.9},className:"mt-12",children:n.jsxs("a",{href:"#contact",className:"group inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-bright px-8 py-4 text-[11px] tracking-[0.28em] text-brown-deep font-semibold transition-all duration-500",children:["BOOK A NOW",n.jsx(D,{className:"w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45"})]})})]}),n.jsx(b.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1,duration:1.4,ease:[.22,1,.36,1]},style:{rotate:r,y:a},className:`absolute bottom-4 right-4 
        w-32 md:-bottom-20 md:right-8 
        md:w-48 lg:-bottom-24 lg:right-24 
        lg:w-64 z-30 will-change-transform`,children:n.jsx("img",{src:gn,alt:"",className:"w-full h-auto rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"})})]})})}function g({children:e,delay:t=0,y:s=30,className:r=""}){return n.jsx(b.div,{initial:{opacity:0,y:s},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.8,delay:t,ease:[.22,1,.36,1]},className:r,children:e})}const bn="/assets/about-small-BSCGxgPY.jpg",vn="/assets/about-tall-CYF1-pGe.jpg";function yn(){return n.jsx("section",{id:"about",className:`
        relative
        bg-cream
        pt-40
        pb-28
        lg:pt-48
        lg:pb-32
        overflow-hidden
      `,children:n.jsxs("div",{className:"max-w-[1280px] mx-auto px-6",children:[n.jsx(g,{children:n.jsxs("p",{className:"eyebrow text-center text-brown/70 mb-6 flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"WHO ARE WE"]})}),n.jsx(g,{delay:.1,children:n.jsxs("div",{className:"relative max-w-5xl mx-auto",children:[n.jsx(b.img,{src:Re,alt:"",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.1,duration:1},className:`
                hidden
                md:block
                absolute
                left-10
                lg:-left-26
                -top-30
                lg:-top-38
                w-20
                lg:w-32
                z-20
                float-leaf
                rotate-[-18deg]
              `}),n.jsx(b.img,{src:Ve,alt:"",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1.3,duration:1},className:`
                hidden
                md:block
                absolute
                left-4
                lg:-left-46
                -top-6
                lg:-top-10
                w-16
                lg:w-24
                z-20
                rotate-[8deg]
              `}),n.jsxs("h2",{className:`
                relative
                font-serif
                text-center
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                text-brown-deep
                max-w-5xl
                mx-auto
                leading-[1.02]
                tracking-[-0.01em]
                text-balance
              `,children:["PROFESSIONAL",n.jsx("br",{className:"hidden sm:block"}),"CATERING TEAMS IN ANIKA"]})]})}),n.jsxs("div",{className:"mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start",children:[n.jsxs(g,{className:"md:col-span-4 space-y-8",children:[n.jsx("div",{className:"overflow-hidden rounded-md group",children:n.jsx("img",{src:bn,alt:"Catering team",className:`
                  w-full
                  h-52
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                `})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-serif text-7xl text-brown-deep leading-none",children:"2011"}),n.jsx("p",{className:"text-[11px] tracking-[0.28em] text-brown/60 mt-3",children:"SINCE"})]})]}),n.jsxs(g,{delay:.2,className:"md:col-span-4",children:[n.jsx("h3",{className:"font-serif text-2xl lg:text-[1.65rem] text-brown-deep leading-snug",children:"EVERY EVENT IS A UNIQUE OPPORTUNITY TO CRAFT A CULINARY EXPERIENCE AS EXTRAORDINARY AS DELICIOUS."}),n.jsx("p",{className:"mt-7 text-sm leading-[1.85] text-brown/75",children:"A meeting or celebration is a unique and unforgettable event! In Al Najaf we have a team of event planners, we take care of the design, creative and innovative work, planning, coordination and organization of all kinds of social and corporate events."})]}),n.jsx(g,{delay:.3,className:"md:col-span-4",children:n.jsx("div",{className:"overflow-hidden rounded-md group",children:n.jsx("img",{src:vn,alt:"Elegant table setup",className:`
                  w-full
                  h-[460px]
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                `})})})]})]})})}const M="/assets/corporate-IZWrgjev.jpg",se="/assets/parties-DN30KZ0J.jpg",L=[{image:M,circleImage:M,title:"CORPORATE",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(243,238,232,0.38)"},{image:Ce,circleImage:Le,title:"SOCIAL EVENTS",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(224,220,215,0.48)"},{image:B,circleImage:B,title:"WEDDINGS",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(208,204,200,0.58)"},{image:se,circleImage:se,title:"PARTIES",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(190,188,185,0.70)"}];function jn(){const e=p.useRef(null),t=p.useRef([]),s=p.useRef([]);return p.useEffect(()=>{let r=()=>{};return Promise.all([G(()=>import("./index-D4-8ALNT.js"),[]),G(()=>import("./ScrollTrigger-BrDuEirF.js"),[])]).then(([{gsap:a},{ScrollTrigger:l}])=>{a.registerPlugin(l);const i=t.current.filter(Boolean),o=s.current.filter(Boolean);if(!i.length)return;a.set(i,{clipPath:"inset(100% 0% 0% 0%)",force3D:!0,willChange:"clip-path"}),a.set(i[0],{clipPath:"inset(0% 0% 0% 0%)"}),a.set(o,{opacity:0});const c=L.length-1,m=c*window.innerHeight*.95,u=a.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:`+=${m}`,scrub:1,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}});i.forEach((f,d)=>{if(d===0)return;const x=o[d-1];u.fromTo(f,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"none",force3D:!0}),u.to(x,{opacity:.32,duration:1,ease:"none"},"<")}),i.forEach((f,d)=>{const x=f.querySelectorAll(".parallax-img");if(!x.length)return;const w=d===0?0:d-1,U=(d===L.length-1?c:d)-w;U<=0||u.fromTo(x,{yPercent:2.5,scale:1.08},{yPercent:-2.5,scale:1.03,ease:"none",duration:U,force3D:!0},w)}),l.refresh(),r=()=>{l.getAll().forEach(f=>f.kill())}}),()=>r()},[]),n.jsx("section",{id:"Parties",children:n.jsx("div",{ref:e,className:"relative bg-[#140B07] overflow-visible isolate",style:{height:"100vh"},children:L.map((r,a)=>n.jsx("div",{ref:l=>{l&&(t.current[a]=l)},className:"absolute inset-0 overflow-hidden isolate",style:{zIndex:a+1,willChange:"clip-path",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"translateZ(0)",overflow:"hidden",clipPath:"inset(100% 0% 0% 0%)"},children:n.jsxs("div",{className:"relative w-full h-screen overflow-visible",children:[n.jsx("div",{className:`
                absolute
                top-0
                left-0
                w-full
                pointer-events-none
                z-[999]
              `,style:{top:"-12px",height:"2px",boxShadow:"0 -60px 120px rgba(0, 0, 0, 0.94)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-visible",children:[n.jsxs("div",{className:`
                  absolute
                  left-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                `,style:{transform:"translateZ(0)"},children:[n.jsx("img",{src:r.image,alt:"",draggable:!1,className:`
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  `,style:{objectPosition:"left center",filter:"blur(1px)"}}),n.jsx("div",{ref:l=>{l&&(s.current[a]=l)},className:"absolute inset-0 bg-black/50"})]}),n.jsxs("div",{className:`
                  absolute
                  right-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                `,style:{transform:"translateZ(0)"},children:[n.jsx("img",{src:r.image,alt:"",draggable:!1,className:`
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  `,style:{objectPosition:"right center",filter:"blur(1px)"}}),n.jsx("div",{className:"absolute inset-0 bg-black/50"})]}),n.jsxs("div",{className:`
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                
                    h-[80vh]
                    sm:h-[85vh]
                    lg:h-full
                
                    flex
                    flex-col
                    overflow-hidden
                    items-center
                    justify-center
                
                    backdrop-blur-[8px]
                
                    rounded-[30px]
                    sm:rounded-[36px]
                    lg:rounded-none
                
                    w-[88%]
                    sm:w-[82%]
                    md:w-[68%]
                    lg:w-[40vw]
                
                    px-5
                    sm:px-8
                    lg:px-10
                
                    py-8
                  `,style:{maxWidth:"560px",zIndex:20,background:r.panel,borderLeft:"1px solid rgba(255,255,255,0.14)",borderRight:"1px solid rgba(255,255,255,0.14)",transform:"translateZ(0)",backfaceVisibility:"hidden",contain:"layout paint"},children:[n.jsx("div",{className:`
                    rounded-full
                    overflow-hidden
                    shrink-0
                  `,style:{width:"clamp(150px, 32vw, 360px)",height:"clamp(150px, 32vw, 360px)",boxShadow:"0 25px 80px rgba(0,0,0,0.18)"},children:n.jsx("img",{src:r.circleImage,alt:r.title,draggable:!1,className:`
                      w-full
                      h-full
                      object-cover
                      scale-[1.08]
                    `})}),n.jsxs("div",{className:"text-center mt-5 sm:mt-7 lg:mt-12 px-2",children:[n.jsx("h2",{className:`
                      font-serif
                      uppercase
                      tracking-[0.08em]
                    `,style:{fontSize:"clamp(1.5rem, 5vw, 5.5rem)",lineHeight:1,color:"#f8f6f3",textShadow:"0 4px 25px rgba(0,0,0,0.15)"},children:r.title}),n.jsx("p",{className:`
                      mt-4
                      sm:mt-5
                      lg:mt-6
                      leading-relaxed
                      mx-auto
                      font-light
                    `,style:{maxWidth:"340px",fontSize:"clamp(0.72rem, 2.2vw, 1rem)",color:"rgba(255,255,255,0.72)"},children:r.desc})]})]})]})]})},a))})})}const wn="data:image/png;base64,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",An="data:image/png;base64,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",Nn="/assets/icon-0-CdI-z-oU.png";function En(){const e=p.useRef(null),{scrollYProgress:t}=be({target:e,offset:["start end","end start"]}),s=k(E(t,[0,1],[-6,10]),{stiffness:22,damping:30,mass:1.1}),r=k(E(t,[0,1],[-8,82]),{stiffness:24,damping:32,mass:1.05}),a=k(E(t,[0,1],[10,-14]),{stiffness:22,damping:30,mass:1.05});return n.jsx("section",{ref:e,id:"services",className:`
        relative
        bg-cream
        py-28
        lg:py-36
        overflow-hidden
      `,children:n.jsxs("div",{className:`
    max-w-[1450px]
    mx-auto
    px-6
    grid
    grid-cols-1
    lg:grid-cols-12
    gap-6
    lg:gap-8
    items-center
  `,children:[n.jsxs(g,{y:20,className:"lg:col-span-6",children:[n.jsxs("p",{className:"eyebrow text-brown/70 mb-5 flex items-center gap-2 uppercase tracking-[0.2em] text-[11px]",children:[n.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"SPECIALITY"]}),n.jsxs("h2",{className:`
      font-serif
      text-[42px]
      sm:text-[54px]
      md:text-[64px]
      text-[#5b4636]
      leading-[0.98]
      tracking-[-0.03em]
      uppercase
    `,children:["UNFORGETTABLE",n.jsx("br",{}),"CATERING FOR ANY",n.jsx("br",{}),"OCCASION WITH OUR",n.jsx("br",{}),"SPECIALITY!"]}),n.jsxs("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("img",{src:wn,alt:"",className:"w-10 h-10 object-contain opacity-80"}),n.jsx("div",{children:n.jsxs("p",{className:`
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      `,children:["Premium",n.jsx("br",{}),"Dining"]})})]}),n.jsx("p",{className:`
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        `,children:"Allow customers to book reservations with automated confirmations."})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("img",{src:An,alt:"",className:"w-10 h-10 object-contain opacity-80"}),n.jsx("div",{children:n.jsxs("p",{className:`
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      `,children:["Abundant",n.jsx("br",{}),"Flavors"]})})]}),n.jsx("p",{className:`
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        `,children:"Our experienced real estate experts guide you through every."})]})]}),n.jsx("div",{className:"mt-9 border-t border-[#ddd2bf]"}),n.jsx("p",{className:`
      mt-7
      text-[14px]
      text-[#7f7266]
      leading-[1.9]
      max-w-[620px]
    `,children:"At our restaurant, dining is more than just eating, it's an experience. We blend creativity, flavor, and passion to bring you dishes that delight the senses. From our carefully curated menu to our warm and inviting atmosphere."}),n.jsxs("a",{href:"#contact",className:`
      group
      mt-10
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-[#4b321d]
      hover:bg-gold
      hover:text-brown-deep
      px-7
      py-3.5
      text-[11px]
      font-medium
      tracking-[0.18em]
      text-cream
      transition-all
      duration-500
      uppercase
    `,children:["BOOK A NOW",n.jsx(D,{className:`
        w-4
        h-4
        transition-transform
        duration-500
        group-hover:translate-x-1.5
      `,strokeWidth:2})]})]}),n.jsxs(g,{delay:.2,y:20,className:"lg:col-span-6 relative",children:[n.jsx("div",{className:"overflow-hidden rounded-md luxe-shadow",children:n.jsx("img",{src:Pe,alt:"Luxury dining",className:`
                w-full
                h-[580px]
                object-cover
              `})}),n.jsx(b.img,{src:Nn,alt:"",style:{rotate:s,x:r,y:a},className:`
              absolute

              bottom-[-65px]
              left-[-20px]

              sm:bottom-[-70px]
              sm:left-[-25px]

              lg:bottom-[-85px]
              lg:left-[-95px]

              w-44
              sm:w-52
              lg:w-85

              rounded-full

              plate-breathe
              will-change-transform
              pointer-events-none
              select-none

              drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]

              z-20
            `})]})]})})}const ye="/assets/menu-1-pV-uTG8e.jpg",kn=[{img:ye,title:`RELIGIOUS
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/religious-menu"},{img:M,title:`PARTIES
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/parties-menu"},{img:fe,title:`WEDDING
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/wedding-menu"}];function Sn(){return n.jsx("section",{id:"Dishes",children:n.jsx("section",{className:"relative bg-[#ECE5DA] py-24 lg:py-32 overflow-hidden",children:n.jsxs("div",{className:"max-w-[1420px] mx-auto px-5 sm:px-7",children:[n.jsx(g,{children:n.jsxs("div",{className:"text-center",children:[n.jsxs("p",{className:`
                text-[11px]
                tracking-[0.32em]
                uppercase
                text-[#8A7B68]
                mb-5
              `,children:[n.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"CATERING MENUS"]}),n.jsxs("h2",{className:`
                font-serif
                text-[#3A3026]
                leading-[0.95]
                tracking-[-0.03em]

                text-5xl
                sm:text-6xl
                lg:text-7xl
              `,children:["MOST POPULAR",n.jsx("br",{}),"DISHES"]})]})}),n.jsx("div",{className:`
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          `,children:kn.map((e,t)=>n.jsx(g,{delay:t*.1,children:n.jsx("a",{href:e.link,className:`
                  group
                  relative
                  block
                `,children:n.jsxs("div",{className:`
                    relative

                    rounded-[28px]

                    border
                    border-[#F6F1E8]

                    bg-[rgba(255,255,255,0.12)]

                    backdrop-blur-[2px]

                    overflow-hidden

                    min-h-[640px]

                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    hover:bg-[#F7F3EC]
                    hover:shadow-[0_35px_80px_-30px_rgba(0,0,0,0.18)]
                  `,children:[n.jsxs("div",{className:`
                      relative
                      overflow-hidden
                  
                      mx-4
                      mt-4
                  
                      rounded-[20px]
                  
                      h-[240px]
                      sm:h-[270px]
                  
                      group-hover:h-[240px]
                      group-active:h-[240px]

                      sm:group-hover:h-[330px]
                      sm:group-active:h-[330px]
                  
                      transition-all
                      duration-[1200ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                  
                      isolate
                    `,children:[n.jsx("img",{src:e.img,alt:e.title,className:`
                          w-full
                          h-full
                          object-cover

                          transition-all
                          duration-[1400ms]
                          ease-[cubic-bezier(.22,1,.36,1)]
                         `}),n.jsx("div",{className:`
                        absolute
                        inset-0

                        bg-black/0

                        transition-all
                        duration-1000

                        group-hover:bg-black/28
                        group-active:bg-black/28

                      `}),n.jsx("div",{className:`
                          absolute
                          inset-0
                    
                          flex
                          items-center
                          justify-center
                    
                          opacity-0
                          scale-75
                    
                          transition-all
                          duration-700
                     
                           group-hover:opacity-100
                           group-hover:scale-100
                           group-active:opacity-100
                           group-active:scale-100
                         `,children:n.jsx("div",{className:`
                                w-[92px]
                                h-[92px]
                        
                                rounded-full
                        
                                bg-[#2E2A25]/90
                                text-white
                        
                                flex
                                items-center
                               justify-center
                       
                                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                        
                                backdrop-blur-md
                              `,children:n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("span",{className:`
                                text-[11px]
                                tracking-[0.22em]
                              `,children:"VIEW"}),n.jsx(xn,{className:"w-4 h-4"})]})})})]}),n.jsx("div",{className:"h-[120px] sm:h-[145px]"}),n.jsxs("div",{className:`
                      px-8
                      pb-12

                      text-center
                    `,children:[n.jsx("h3",{className:`
                        font-serif

                        text-[#44372A]

                        leading-[1.02]

                        tracking-[0.01em]

                        text-[2.2rem]
                        sm:text-[2.7rem]

                        whitespace-pre-line
                      `,children:e.title}),n.jsx("p",{className:`
                        mt-6

                        text-[#75685D]

                        text-[15px]

                        leading-[1.8]

                        max-w-[290px]
                        mx-auto
                      `,children:e.desc})]}),n.jsx("div",{className:`
                      absolute
                      bottom-5
                      right-5

                      opacity-0
                      translate-y-3

                      transition-all
                      duration-700

                      group-hover:opacity-100
                      group-hover:translate-y-0
                      group-active:opacity-100
                      group-active:translate-y-0
                    `,children:n.jsx("div",{className:`
                        w-[54px]
                        h-[54px]

                        rounded-full

                        bg-white

                        border
                        border-[#DDD4C7]

                        flex
                        items-center
                        justify-center

                        shadow-[0_8px_20px_rgba(0,0,0,0.08)]

                        text-[#2E251D]
                      `,children:n.jsx(un,{className:"w-5 h-5"})})})]})})},e.title))})]})})})}function Tn(){return n.jsx("section",{id:"Video",children:n.jsxs("section",{className:"relative h-[70vh] min-h-[480px] overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 zoom-slow",children:n.jsx("img",{src:Y,alt:"",className:"w-full h-full object-cover"})}),n.jsx("div",{className:"absolute inset-0 bg-[#1a0e07]/65"}),n.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[n.jsx("h2",{className:"font-serif text-7xl sm:text-9xl lg:text-[12rem] text-cream/15 tracking-[0.18em] absolute top-10 lg:top-16 select-none pointer-events-none",children:"VIDEO"}),n.jsx("button",{className:"relative w-24 h-24 rounded-full bg-gold flex items-center justify-center text-brown-deep pulse-ring hover:bg-gold-bright transition-colors","aria-label":"Play video",children:n.jsx(We,{className:"w-8 h-8 ml-1",fill:"currentColor"})})]})]})})}const Cn="/assets/menu-3-BT0ni9P_.jpg",In=[Y,ye,Cn,fe];function On(){return n.jsx("section",{id:"gallery",children:n.jsxs("section",{className:"relative bg-cream py-28 lg:py-36 overflow-hidden",children:[n.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 text-center relative",children:[n.jsx("h2",{className:`
            font-serif
            text-8xl
            sm:text-9xl
            lg:text-[11rem]

            text-brown/10

            tracking-[0.18em]

            absolute
            -top-4
            left-1/2
            -translate-x-1/2

            select-none
            pointer-events-none
            whitespace-nowrap
          `,"aria-hidden":!0,children:"GALLERY"}),n.jsx(g,{children:n.jsxs("p",{className:`
              eyebrow
              text-brown/70
              mb-5

              flex
              items-center
              justify-center
              gap-2

              relative
            `,children:[n.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"OUR GALLERY"]})}),n.jsx(g,{delay:.1,children:n.jsxs("h3",{className:`
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl

              text-brown-deep

              leading-[1.02]
              tracking-[-0.01em]

              relative
            `,children:["CATERING",n.jsx("br",{}),"THAT CREATES",n.jsx("br",{}),"MOMENTS!"]})})]}),n.jsx("div",{className:"mt-20",children:n.jsx("div",{className:`
            grid
            grid-cols-2
            md:grid-cols-4

            gap-0
          `,children:In.map((e,t)=>n.jsx(g,{delay:t*.1,children:n.jsxs("div",{className:`
                  group
                  relative
                  overflow-hidden

                  h-[170px]
                  sm:h-[270px]
                  md:h-[370px]
                  lg:h-[480px]
                `,children:[n.jsx("img",{src:e,alt:"",draggable:!1,className:`
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover

                    transition-transform
                    duration-[1800ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:scale-[1.06]
                    group-active:scale-[1.06]
                  `}),n.jsx("div",{className:`
                    absolute
                    inset-0

                    bg-[#1a0e07]/0

                    transition-all
                    duration-700

                    group-hover:bg-[#1a0e07]/35
                    group-active:bg-[#1a0e07]/35
                  `})]})},t))})})]})})}const h="w-full bg-cream/70 border border-brown/15 rounded-md px-4 py-3.5 text-sm text-brown-deep placeholder:text-brown/50 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all duration-500";function Rn(){return n.jsx("section",{id:"contact",className:"relative bg-cream-dark py-28 lg:py-36",children:n.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch",children:[n.jsx(g,{y:20,children:n.jsx("div",{className:"h-full overflow-hidden rounded-md luxe-shadow",children:n.jsx("img",{src:Y,alt:"Elegant table",className:"w-full h-full min-h-[560px] object-cover"})})}),n.jsxs(g,{delay:.2,y:20,children:[n.jsxs("p",{className:"eyebrow text-brown/70 mb-4 flex items-center gap-2",children:[n.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"})," CONTACT AND RESERVATIONS"]}),n.jsx("h2",{className:"font-serif text-4xl sm:text-5xl md:text-6xl text-brown-deep leading-[1.04] tracking-[-0.01em]",children:"RESERVE YOUR CATERING SERVICE TODAY!"}),n.jsxs("form",{className:"mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4",onSubmit:e=>e.preventDefault(),children:[n.jsx("input",{className:`${h} sm:col-span-2`,placeholder:"Your Name*"}),n.jsx("input",{className:h,placeholder:"Phone Number*"}),n.jsx("input",{className:h,placeholder:"Email",type:"email"}),n.jsx("input",{className:h,placeholder:"Company"}),n.jsxs("select",{className:h,defaultValue:"",children:[n.jsx("option",{value:"",disabled:!0,children:"Event Type"}),n.jsx("option",{children:"Wedding"}),n.jsx("option",{children:"Corporate"}),n.jsx("option",{children:"Religious"}),n.jsx("option",{children:"Party"})]}),n.jsx("input",{className:h,placeholder:"mm/dd/yyyy",type:"date"}),n.jsx("input",{className:h,placeholder:"Number of Guests*",type:"number"}),n.jsx("textarea",{className:`${h} sm:col-span-2 min-h-[120px] resize-none`,placeholder:"Wishes / questions / requests"}),n.jsxs("button",{className:"group sm:col-span-2 justify-self-start inline-flex items-center gap-3 rounded-full bg-brown-deep hover:bg-gold hover:text-brown-deep transition-all duration-500 px-8 py-4 text-[11px] tracking-[0.28em] text-cream",children:["SUBMIT REQUEST ",n.jsx(D,{className:"w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5"})]})]})]})]})})}function zn(){return n.jsxs("main",{className:"bg-cream text-brown-deep overflow-x-hidden",children:[n.jsx(Ie,{}),n.jsx(hn,{}),n.jsx(yn,{}),n.jsx(jn,{}),n.jsx(En,{}),n.jsx(Sn,{}),n.jsx(Tn,{}),n.jsx(On,{}),n.jsx(Rn,{}),n.jsx(Oe,{})]})}export{zn as component};
