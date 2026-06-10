import{c as se,r as x,j as t,_ as B}from"./index-BMJ5ddYM.js";import{f as b,d as T,e as ae,g as re,J as be,s as le,h as ie,p as ye,v as je,i as we,j as Ae,k as Ne,n as oe,r as Ee,l as ke,u as C,b as ce,o as V,q as de,t as A,M as me,w as I,m as h,A as H,N as Ce,F as Se}from"./Footer-BaKsmMtn.js";import{a as Te,g as D}from"./weddings-CfGVzQsH.js";import{l as Re,t as Ie}from"./icon-2-DN7_f9QR.js";import{s as Oe,r as Le}from"./reserve-H2l_h2fv.js";import{s as We,b as Ve,P as De}from"./video-BawbIe-p.js";import{m as Pe}from"./menu-2-DFokeOeL.js";import{g as ue}from"./menu-3-TBW6RUYt.js";import{m as Me}from"./menu-4-CJrMKZ0t.js";import{s as Ye}from"./supabase-BXA3kcXj.js";const He=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ze=se("arrow-up-right",He);const Ue=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ge=se("eye",Ue);function fe(e,n){let a;const s=()=>{const{currentTime:r}=n,i=(r===null?0:r.value)/100;a!==i&&e(i),a=i};return b.preUpdate(s,!0),()=>T(s)}function Be(...e){const n=!Array.isArray(e[0]),a=n?0:-1,s=e[0+a],r=e[1+a],l=e[2+a],i=e[3+a],o=ae(r,l,i);return n?o(s):o}function Fe(e,n,a={}){const s=e.get();let r=null,l=s,i;const o=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,c=()=>{r&&(r.stop(),r=null),e.animation=void 0},m=()=>{const f=F(e.get()),d=F(l);if(f===d){c();return}const g=r?r.getGeneratorVelocity():e.getVelocity();c(),r=new be({keyframes:[f,d],velocity:g,type:"spring",restDelta:.001,restSpeed:.01,...a,onUpdate:i})},u=()=>{m(),e.animation=r??void 0,e.events.animationStart?.notify(),r?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((f,d)=>{l=f,i=g=>d(O(g,o)),b.postRender(u)},c),re(n)){let f=a.skipInitialAnimation===!0;const d=n.on("change",w=>{f?(f=!1,e.jump(O(w,o),!1)):e.set(O(w,o))}),g=e.on("destroy",d);return()=>{d(),g()}}return c}function O(e,n){return n?e+n:e}function F(e){return typeof e=="number"?e:parseFloat(e)}function R(e){return typeof window>"u"?!1:e?le():ie()}const Ze=50,Z=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),qe=()=>({time:0,x:Z(),y:Z()}),Xe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function q(e,n,a,s){const r=a[n],{length:l,position:i}=Xe[n],o=r.current,c=a.time;r.current=Math.abs(e[`scroll${i}`]),r.scrollLength=e[`scroll${l}`]-e[`client${l}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=ye(0,r.scrollLength,r.current);const m=s-c;r.velocity=m>Ze?0:je(r.current-o,m)}function Qe(e,n,a){q(e,"x",n,a),q(e,"y",n,a),n.time=a}function Je(e,n){const a={x:0,y:0};let s=e;for(;s&&s!==n;)if(we(s))a.x+=s.offsetLeft,a.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const r=s.getBoundingClientRect();s=s.parentElement;const l=s.getBoundingClientRect();a.x+=r.left-l.left,a.y+=r.top-l.top}else if(s instanceof SVGGraphicsElement){const{x:r,y:l}=s.getBBox();a.x+=r,a.y+=l;let i=null,o=s.parentNode;for(;!i;)o.tagName==="svg"&&(i=o),o=s.parentNode;s=i}else break;return a}const P={start:0,center:.5,end:1};function X(e,n,a=0){let s=0;if(e in P&&(e=P[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?s=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?s=r/100*document.documentElement.clientWidth:e.endsWith("vh")?s=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(s=n*e),a+s}const Ke=[0,0];function _e(e,n,a,s){let r=Array.isArray(e)?e:Ke,l=0,i=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,P[e]?e:"0"]),l=X(r[0],a,s),i=X(r[1],n),l-i}const N={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},$e={x:0,y:0};function et(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function tt(e,n,a){const{offset:s=N.All}=a,{target:r=e,axis:l="y"}=a,i=l==="y"?"height":"width",o=r!==e?Je(r,e):$e,c=r===e?{width:e.scrollWidth,height:e.scrollHeight}:et(r),m={width:e.clientWidth,height:e.clientHeight};n[l].offset.length=0;let u=!n[l].interpolate;const f=s.length;for(let d=0;d<f;d++){const g=_e(s[d],m[i],c[i],o[l]);!u&&g!==n[l].interpolatorOffsets[d]&&(u=!0),n[l].offset[d]=g}u&&(n[l].interpolate=ae(n[l].offset,Ae(s),{clamp:!1}),n[l].interpolatorOffsets=[...n[l].offset]),n[l].progress=Ne(0,1,n[l].interpolate(n[l].current))}function nt(e,n=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,n!==e){let s=n;for(;s&&s!==e;)a.x.targetOffset+=s.offsetLeft,a.y.targetOffset+=s.offsetTop,s=s.offsetParent}a.x.targetLength=n===e?n.scrollWidth:n.clientWidth,a.y.targetLength=n===e?n.scrollHeight:n.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function st(e,n,a,s={}){return{measure:r=>{nt(e,s.target,a),Qe(e,a,r),(s.offset||s.target)&&tt(e,a,s)},notify:()=>n(a)}}const y=new WeakMap,Q=new WeakMap,L=new WeakMap,J=new WeakMap,S=new WeakMap,K=e=>e===document.scrollingElement?window:e;function xe(e,{container:n=document.scrollingElement,trackContentSize:a=!1,...s}={}){if(!n)return oe;let r=L.get(n);r||(r=new Set,L.set(n,r));const l=qe(),i=st(n,e,l,s);if(r.add(i),!y.has(n)){const c=()=>{for(const d of r)d.measure(ke.timestamp);b.preUpdate(m)},m=()=>{for(const d of r)d.notify()},u=()=>b.read(c);y.set(n,u);const f=K(n);window.addEventListener("resize",u),n!==document.documentElement&&Q.set(n,Ee(n,u)),f.addEventListener("scroll",u),u()}if(a&&!S.has(n)){const c=y.get(n),m={width:n.scrollWidth,height:n.scrollHeight};J.set(n,m);const u=()=>{const d=n.scrollWidth,g=n.scrollHeight;(m.width!==d||m.height!==g)&&(c(),m.width=d,m.height=g)},f=b.read(u,!0);S.set(n,f)}const o=y.get(n);return b.read(o,!1,!0),()=>{T(o);const c=L.get(n);if(!c||(c.delete(i),c.size))return;const m=y.get(n);y.delete(n),m&&(K(n).removeEventListener("scroll",m),Q.get(n)?.(),window.removeEventListener("resize",m));const u=S.get(n);u&&(T(u),S.delete(n)),J.delete(n)}}const at=[[N.Enter,"entry"],[N.Exit,"exit"],[N.Any,"cover"],[N.All,"contain"]],_={start:0,end:1};function rt(e){const n=e.trim().split(/\s+/);if(n.length!==2)return;const a=_[n[0]],s=_[n[1]];if(!(a===void 0||s===void 0))return[a,s]}function lt(e){if(e.length!==2)return;const n=[];for(const a of e)if(Array.isArray(a))n.push(a);else if(typeof a=="string"){const s=rt(a);if(!s)return;n.push(s)}else return;return n}function it(e,n){const a=lt(e);if(!a)return!1;for(let s=0;s<2;s++){const r=a[s],l=n[s];if(r[0]!==l[0]||r[1]!==l[1])return!1}return!0}function z(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[n,a]of at)if(it(e,n))return{rangeStart:`${a} 0%`,rangeEnd:`${a} 100%`}}const $=new Map;function ee(e){const n={value:0},a=xe(s=>{n.value=s[e.axis].progress*100},e);return{currentTime:n,cancel:a}}function ge({source:e,container:n,...a}){const{axis:s}=a;e&&(n=e);let r=$.get(n);r||(r=new Map,$.set(n,r));const l=a.target??"self";let i=r.get(l);i||(i={},r.set(l,i));const o=s+(a.offset??[]).join(",");return i[o]||(a.target&&R(a.target)?z(a.offset)?i[o]=new ViewTimeline({subject:a.target,axis:s}):i[o]=ee({container:n,...a}):R()?i[o]=new ScrollTimeline({source:n,axis:s}):i[o]=ee({container:n,...a})),i[o]}function ot(e,n){const a=ge(n),s=n.target?z(n.offset):void 0,r=n.target?R(n.target)&&!!s:R();return e.attachTimeline({timeline:r?a:void 0,...s&&r&&{rangeStart:s.rangeStart,rangeEnd:s.rangeEnd},observe:l=>(l.pause(),fe(i=>{l.time=l.iterationDuration*i},a))})}function ct(e){return e&&(e.target||e.offset)}function dt(e){return e.length===2}function mt(e,n){return dt(e)||ct(n)?xe(a=>{e(a[n.axis].progress,a)},n):fe(e,ge(n))}function pe(e,{axis:n="y",container:a=document.scrollingElement,...s}={}){if(!a)return oe;const r={axis:n,container:a,...s};return typeof e=="function"?mt(e,r):ot(e,r)}const ut=()=>({scrollX:A(0),scrollY:A(0),scrollXProgress:A(0),scrollYProgress:A(0)}),j=e=>e?!e.current:!1;function te(e,n,a,s){return{factory:r=>{let l;const i=()=>{if(j(a)||j(s)){V.read(i);return}l=pe(r,{...n,axis:e,container:a?.current||void 0,target:s?.current||void 0})};return V.read(i),()=>{de(i),l?.()}},times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function ft(e,n){return typeof window>"u"?!1:e?le()&&!!z(n):ie()}function he({container:e,target:n,...a}={}){const s=C(ut);ft(n,a.offset)&&(s.scrollXProgress.accelerate=te("x",a,e,n),s.scrollYProgress.accelerate=te("y",a,e,n));const r=x.useRef(null),l=x.useRef(!1),i=x.useCallback(()=>(r.current=pe((o,{x:c,y:m})=>{s.scrollX.set(c.current),s.scrollXProgress.set(c.progress),s.scrollY.set(m.current),s.scrollYProgress.set(m.progress)},{...a,container:e?.current||void 0,target:n?.current||void 0}),()=>{r.current?.()}),[e,n,JSON.stringify(a.offset)]);return ce(()=>{if(l.current=!1,j(e)||j(n)){l.current=!0;return}else return i()},[i]),x.useEffect(()=>{if(!l.current)return;let o;const c=()=>{const m=j(e),u=j(n);!m&&!u&&(o=i())};return V.read(c),()=>{de(c),o?.()}},[i]),s}function U(e){const n=C(()=>A(e)),{isStatic:a}=x.useContext(me);if(a){const[,s]=x.useState(e);x.useEffect(()=>n.on("change",s),[])}return n}function ve(e,n){const a=U(n()),s=()=>a.set(n());return s(),ce(()=>{const r=()=>b.preRender(s,!1,!0),l=e.map(i=>i.on("change",r));return()=>{l.forEach(i=>i()),T(s)}}),a}function xt(e){I.current=[],e();const n=ve(I.current,e);return I.current=void 0,n}function E(e,n,a,s){if(typeof e=="function")return xt(e);if(a!==void 0&&!Array.isArray(a)&&typeof n!="function")return gt(e,n,a,s);const i=typeof n=="function"?n:Be(n,a,s),o=Array.isArray(e)?ne(e,i):ne([e],([m])=>i(m)),c=Array.isArray(e)?void 0:e.accelerate;return c&&!c.isTransformed&&typeof n!="function"&&Array.isArray(a)&&s?.clamp!==!1&&(o.accelerate={...c,times:n,keyframes:a,isTransformed:!0}),o}function ne(e,n){const a=C(()=>[]);return ve(e,()=>{a.length=0;const s=e.length;for(let r=0;r<s;r++)a[r]=e[r].get();return n(a)})}function gt(e,n,a,s){const r=C(()=>Object.keys(a)),l=C(()=>({}));for(const i of r)l[i]=E(e,n,a[i],s);return l}function pt(e,n={}){const{isStatic:a}=x.useContext(me),s=()=>re(e)?e.get():e;if(a)return E(s);const r=U(s());return x.useInsertionEffect(()=>Fe(r,e,n),[r,JSON.stringify(n)]),r}function k(e,n={}){return pt(e,{type:"spring",...n})}const ht="/assets/hero-bg-CCNWGWFn.jpeg",vt="/assets/icon-1-DZq-dIX7.png";function bt(){const e=x.useRef(null),{scrollY:n}=he(),a=U(0),s=k(a,{stiffness:45,damping:20,mass:1}),r=k(0,{stiffness:30,damping:20});return x.useEffect(()=>{let l=0;return n.on("change",i=>{const o=i-l;o>0&&a.set(a.get()+o*.12),o<0&&a.set(a.get()+o*.12),r.set(-i*.04),l=i})},[n,a,r]),t.jsx("section",{id:"home",children:t.jsxs("section",{ref:e,id:"home",className:"relative min-h-[105vh] flex items-center justify-center overflow-visible text-cream",children:[t.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 zoom-slow",children:t.jsx("img",{src:ht,alt:"",className:"w-full h-full object-cover"})}),t.jsx("div",{className:"absolute inset-0 bg-[#1a0e07]/72"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#1a0e07]/55 via-[#1a0e07]/65 to-[#1a0e07]/90"})]}),t.jsxs("div",{className:"relative z-10 text-center px-6 max-w-5xl pt-28",children:[t.jsxs(h.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.3,duration:1},className:"eyebrow text-white mb-7 flex items-center justify-center gap-2",children:[t.jsx("span",{className:"text-white text-[10px]",children:"✦"}),"THE BEST EVENTS START HERE"]}),t.jsx(h.h1,{initial:{opacity:0,y:36},animate:{opacity:1,y:0},transition:{delay:.45,duration:1.2,ease:[.22,1,.36,1]},className:"font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.98]",children:"CREATION OF MEMORABLE EVENTS"}),t.jsx(h.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:1.1,duration:.9},className:"mt-12",children:t.jsxs("a",{href:"#contact",className:"group inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-bright px-8 py-4 text-[11px] tracking-[0.28em] text-brown-deep font-semibold transition-all duration-500",children:["BOOK A NOW",t.jsx(H,{className:"w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45"})]})})]}),t.jsx(h.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1,duration:1.4,ease:[.22,1,.36,1]},style:{rotate:s,y:r},className:`absolute bottom-4 right-4 
        w-32 md:-bottom-20 md:right-8 
        md:w-48 lg:-bottom-24 lg:right-24 
        lg:w-64 z-30 will-change-transform`,children:t.jsx("img",{src:vt,alt:"",className:"w-full h-auto rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"})})]})})}function p({children:e,delay:n=0,y:a=30,className:s=""}){return t.jsx(h.div,{initial:{opacity:0,y:a},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.8,delay:n,ease:[.22,1,.36,1]},className:s,children:e})}const yt="/assets/about-tall-CST5F7h2.jpeg";function jt(){return t.jsx("section",{id:"about",className:`
        relative
        bg-cream
        pt-40
        pb-28
        lg:pt-48
        lg:pb-32
        overflow-hidden
      `,children:t.jsxs("div",{className:"max-w-[1280px] mx-auto px-6",children:[t.jsx(p,{children:t.jsxs("p",{className:"eyebrow text-center text-brown/70 mb-6 flex items-center justify-center gap-2",children:[t.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"WHO ARE WE"]})}),t.jsx(p,{delay:.1,children:t.jsxs("div",{className:"relative max-w-5xl mx-auto",children:[t.jsx(h.img,{src:Re,alt:"",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.1,duration:1},className:`
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
              `}),t.jsx(h.img,{src:Ie,alt:"",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1.3,duration:1},className:`
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
              `}),t.jsx("h2",{className:"relative font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown-deep max-w-5xl mx-auto leading-[1.02] tracking-[-0.01em] text-balance",children:"WE HAVE PROFESSIONAL CATERING TEAMS IN AL NAJAF"})]})}),t.jsxs("div",{className:"mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start",children:[t.jsxs(p,{className:"md:col-span-4 space-y-8",children:[t.jsx("div",{className:"overflow-hidden rounded-md group",children:t.jsx("img",{src:Te,alt:"Catering team",className:`
                  w-full
                  h-52
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                `})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-serif text-7xl text-brown-deep leading-none",children:"2011"}),t.jsx("p",{className:"text-[11px] tracking-[0.28em] text-brown/60 mt-3",children:"SINCE"})]})]}),t.jsxs(p,{delay:.2,className:"md:col-span-4",children:[t.jsx("h3",{className:"font-serif text-2xl lg:text-[1.65rem] text-brown-deep leading-snug",children:"EVERY EVENT IS A UNIQUE OPPORTUNITY TO CRAFT A CULINARY EXPERIENCE AS EXTRAORDINARY AS DELICIOUS."}),t.jsx("p",{className:"mt-7 text-sm leading-[1.85] text-brown/75",children:"A meeting or celebration is a unique and unforgettable event! In Al Najaf we have a team of event planners, we take care of the design, creative and innovative work, planning, coordination and organization of all kinds of social and corporate events."})]}),t.jsx(p,{delay:.3,className:"md:col-span-4",children:t.jsx("div",{className:"overflow-hidden rounded-md group",children:t.jsx("img",{src:yt,alt:"Elegant table setup",className:`
                  w-full
                  h-[460px]
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                `})})})]})]})})}const M="/assets/corporate-C9ONWnRY.jpeg",Y="/assets/parties-DGZHOdpG.jpeg",W=[{image:M,circleImage:M,title:"CORPORATE",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(243,238,232,0.38)"},{image:Oe,circleImage:We,title:"SOCIAL EVENTS",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(224,220,215,0.48)"},{image:D,circleImage:D,title:"WEDDINGS",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(208,204,200,0.58)"},{image:Y,circleImage:Y,title:"PARTIES",desc:"Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",panel:"rgba(190,188,185,0.70)"}];function wt(){const e=x.useRef(null),n=x.useRef([]),a=x.useRef([]);return x.useEffect(()=>{let s=()=>{};return Promise.all([B(()=>import("./index-D4-8ALNT.js"),[]),B(()=>import("./ScrollTrigger-BrDuEirF.js"),[])]).then(([{gsap:r},{ScrollTrigger:l}])=>{r.registerPlugin(l);const i=n.current.filter(Boolean),o=a.current.filter(Boolean);if(!i.length)return;r.set(i,{clipPath:"inset(100% 0% 0% 0%)",force3D:!0,willChange:"clip-path"}),r.set(i[0],{clipPath:"inset(0% 0% 0% 0%)"}),r.set(o,{opacity:0});const c=W.length-1,m=c*window.innerHeight*.95,u=r.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:`+=${m}`,scrub:1,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}});i.forEach((f,d)=>{if(d===0)return;const g=o[d-1];u.fromTo(f,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"none",force3D:!0}),u.to(g,{opacity:.32,duration:1,ease:"none"},"<")}),i.forEach((f,d)=>{const g=f.querySelectorAll(".parallax-img");if(!g.length)return;const w=d===0?0:d-1,G=(d===W.length-1?c:d)-w;G<=0||u.fromTo(g,{yPercent:2.5,scale:1.08},{yPercent:-2.5,scale:1.03,ease:"none",duration:G,force3D:!0},w)}),l.refresh(),setTimeout(()=>{l.refresh()},300),s=()=>{l.getAll().forEach(f=>f.kill())}}),()=>s()},[]),t.jsx("section",{id:"Parties",children:t.jsx("div",{ref:e,className:"relative bg-[#140B07] overflow-visible isolate",style:{height:"100vh"},children:W.map((s,r)=>t.jsx("div",{ref:l=>{l&&(n.current[r]=l)},className:"absolute inset-0 overflow-hidden isolate",style:{zIndex:r+1,willChange:"clip-path",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"translateZ(0)",overflow:"hidden",clipPath:"inset(100% 0% 0% 0%)"},children:t.jsxs("div",{className:"relative w-full h-screen overflow-visible",children:[t.jsx("div",{className:`
                absolute
                top-0
                left-0
                w-full
                pointer-events-none
                z-[999]
              `,style:{top:"-12px",height:"2px",boxShadow:"0 -60px 120px rgba(0, 0, 0, 0.94)"}}),t.jsxs("div",{className:"absolute inset-0 overflow-visible",children:[t.jsxs("div",{className:`
                  absolute
                  left-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                `,style:{transform:"translateZ(0)"},children:[t.jsx("img",{src:s.image,alt:"",draggable:!1,className:`
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  `,style:{objectPosition:"left center",filter:"blur(1px)"}}),t.jsx("div",{ref:l=>{l&&(a.current[r]=l)},className:"absolute inset-0 bg-black/50"})]}),t.jsxs("div",{className:`
                  absolute
                  right-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                `,style:{transform:"translateZ(0)"},children:[t.jsx("img",{src:s.image,alt:"",draggable:!1,className:`
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  `,style:{objectPosition:"right center",filter:"blur(1px)"}}),t.jsx("div",{className:"absolute inset-0 bg-black/50"})]}),t.jsxs("div",{className:`
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                
                    h-[65vh]
                   sm:h-[75vh]
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
                
                    w-[78%]
                    sm:w-[75%]
                    md:w-[60%]
                    lg:w-[40vw]
                
                    px-5
                    sm:px-8
                    lg:px-10
                
                    py-8
                  `,style:{maxWidth:"460px",zIndex:20,background:s.panel,borderLeft:"1px solid rgba(255,255,255,0.14)",borderRight:"1px solid rgba(255,255,255,0.14)",transform:"translateZ(0)",backfaceVisibility:"hidden",contain:"layout paint"},children:[t.jsx("div",{className:`
                    rounded-full
                    overflow-hidden
                    shrink-0
                  `,style:{width:"clamp(150px, 32vw, 360px)",height:"clamp(150px, 32vw, 360px)",boxShadow:"0 25px 80px rgba(0,0,0,0.18)"},children:t.jsx("img",{src:s.circleImage,alt:s.title,draggable:!1,className:`
                      w-full
                      h-full
                      object-cover
                      scale-[1.08]
                    `})}),t.jsxs("div",{className:"text-center mt-5 sm:mt-7 lg:mt-12 px-2",children:[t.jsx("h2",{className:`
                        font-serif
                        uppercase
                        tracking-[0.08em]
                        text-[clamp(1.5rem,4vw,4rem)]
                        break-words
                    `,style:{fontSize:"clamp(1.5rem, 4vw, 4rem)",lineHeight:1,color:"#f8f6f3",textShadow:"0 4px 25px rgba(0,0,0,0.15)"},children:s.title}),t.jsx("p",{className:`
                      mt-4
                      sm:mt-5
                      lg:mt-6
                      leading-relaxed
                      mx-auto
                      font-light
                    `,style:{maxWidth:"340px",fontSize:"clamp(0.72rem, 2.2vw, 1rem)",color:"rgba(255,255,255,0.72)"},children:s.desc})]})]})]})]})},r))})})}const At="data:image/png;base64,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",Nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACQZJREFUeAHdWktSHMkZ/jOzkCMmJqQaMX6taNkbx4SF4ARqBmkt2NkrwQmETtBwAsQJQCcArYVFzwloiYkJ79TsHLYYl8ILO0Zdmf6+zKqmX/VAdDMR8wdEd3VlVv2v/N8iv1BQMmV49Oe4KVovOScPlNJLIq6Bn+ORZQle3RXnuqLcd2Jt5/j7pC1ThKkQ5olR0RMguSEZEXhw1zrXFqU+KnGJcqrrlOO92ImKxcmCUiRaLWWPScCMI+XSl9Mg8lqEfXt/fkMr94zIOSCPz5fKqqNe1Ou0O0lS5xnNpTg2qQFjZA3SfahENciU1MnOm7OLA/lM+CzCKCGlzb4TaYDzbXFq5/j7D22ZAgwyK0hdnv/t7OJIrghXIqzZiOPotm5h2xa42xGrn0+LoFEggVDVFiUIFT1IP6U77b8n3br7axPW/CZemovMoZeSQELvPmzLDcCjxa+3wcQWpffpp3SlLnG1CFu9P7+mlOzzHKXarkdWN3s/2SO+hAQbYxq5ujxavLvV0/aAZ4z7+FuVKuWWVGhYnOqMrsc5bBirTyA93JfNOqqpqxasLs4/BVGH4FoXRC1LMNW7eg4HHmAivaWV7AYEv27yXtQTb+nAtWf8L3o2VRvEH4o2J9yH/xbf9Xhx/v3jb36dW0sBk/juFeLA+8RJrkOYl5TIAc8TpLBS19LVheh2dAIX0aRq93T61fG7CyVWrVhYJBfZk1HieoG4DnHKtaHw2UU3mn+KG1S/axOlZGn1/t19GgFeusD1c3y9g6slWNT147MPfdWiMYLqLUP1TlVkoSlyb4C4BPdWIqqlUvsgvPv6h391Jr1WFxE1d8uc8EyBqPXrSArPEK1UM78GUfB5VE+15ZQcTDovfJ+yepOGimd29B4Z7f0mCKcflLqEmTnT4kPTIKmuXAMQcXRev7u4d3x2seL/3/24DAPx3L9cpXtF+7wbCT7yyeg9Epf27DpxjNKoNWn/GGGr92NawA3weue6RBUB/BPPTvK6k3TK1iEEe0tVnnSv/QP3qh1wbstb1REYI0wrs8tzAM5uy4wAUnwAaXSq1mlIGx/xt8vxwqT7wZfCmCAKGts7eEFvT/FCVXakEjl3h2cRbL3Da/9dOf/dKtPw1zcBiH6IM3Ef/HmIMKOkRQ7UCT6VVi+iW+Y91HbN6zq+Q228IYBf28+um5P2QsXOsa9R9Q7no3+RN6fJedGa/CwapYb8Zd/c07lCBRvWqU0ph9xCfqccfVwZYnAXSj6O/g4/1AEzntKilVpcpx6CAV2pAmgYmHDCs5anPNHlPfeUnv3N2Y8HZc/QqVkjZvhb+GTSoyLEfJSOT0TnY+acIVdkzS78EU359qT9QbUFzA5hGs78CykASm118W6itaHTbns8+3eVA8KqLRWQq6tXPxudTDpLjAoYZjnPqHG19sygKRf1rOgsBpfDHM/R+rWK/NUAvKQW5BeeMKohA0yx8qpsZ25clLabCEbhR2zMs4QI/JT3GRA/Wpz/t48tYfVCfDcZeibdpPNmIDBIHONHSGiXLkeJ3qFxwM8xpLtRhhscOjUjzk1/kJi23lekJm2XbfYJIDhN/8OIIfURgLz0oRFgzpgsQpd1OuMyP+gD2571caFnTobQ3G1zmuV7TI1elDnqIUYhaw9I+iwhEAbz/pAiLzvIgatqyXpCLpFDPaM7utZF6anUADpZpkH8Thfh99LdiOwN+VHlXvG8lamjD8OQs8FgPegTlhVVzsuQgM57ThiTVjrWK8IYM5U/W5cAYxPcSGpKI3pIn5Z6QGI8N1JuVuuGQbMAagYNiSkIrwaAuWKDX4LEmJmOcGkUQklgXO1uCrSoxGaRTRGoIH2vroP5WClhiO8WqtbMEmCQusChUbYm1C7D974fQ8TxsyE9LcgKsh76hOksLivZVCu+mxkAaacrj8IwYTxf3kGXQ+LGa/A3Bt7AOTmvWEP8vOZlxgMV14qDWZUbzRIY0YTSmyq3yN4OBKnm5v4tEG+W7WHA6zekel1uGHSIaBgZlRI26I9zifmgtsqz1wltZgHaB7c+MuoWrQm4s3ODDo/kxsNqz4m80FkIWWgzqcYwK8jTF1jtvbJ1vmNDQK+NH54wBpregOjykIV5lHfkyrTkhiBLX7o1snpqUpInmoOlgaF8ZhJQHbFmhxysqsROA0LHRTbq1GA0k1J1mdT2CRvNZ4rgDTNZnDVWiWdZsOGzfVKLd1VJq58npmk/8+gTFvpcyFZrqFmWJCa+WhxCrakCn8lnM1fju6rWM0/0JcOBFu9Qlcof0BrGIUsS1/HiOBRXpwt8Jp9dpxIdym5oFY+o6xBhFDkpFx3tSgVkSeKym0HE70LLqlZ5neo6ybiMVYLZDGCqj7rDtlRAyKAvM+ppAZ/ZrpH3odbSCn3w0AsYhDHCgumXPVaGBvtTVwHdMwdUkccIhYrW0DiwrBal4+XpOhAMl9su6thM7I+lOt1Gf+qJCm2a5Su3kRCJIzHcd5EBV+fzYRX/DGYIWbAaZ2s7Vx1eyNtcliqr7ERXMLGNlLdpeIB97bC6pjcE1tg1dCjvsVoFru45Z/tqxaEWVrYQqW+yi9nLijm1ieLkwq3osMq4FHY0aRzghDfB0cOMuKKupv+NXHTKR9es/n7M1nbxfyRliGZMYz5Y5RfDOAbau1kntMy4lPagqbtA0huToqovK0j0ab4Jken8VVTXIxeqwi0+I+uiHkgJUbbG5EDtcQhIbp8FlUmzFhxXyCq1SVmNvQyyiZyYjBqVRD5jQvWDpGqNQ9QfYLmctWhQMiCgMn6bBsBychJoO/Nt6+2a5T8jNaH7j/8lC7//1Svl9FcgbuuPv/1io/GbLz6+/+d/Z1JnZPTzh999yamBv4D7e5DkX6/SOv6sIbFMNXeD9FQHlm7vOpNqgxBGBBGv+haS6zJg+Jx5rWuP9eWDXNmkWhs/v0r/k7bb3ZpjfTQKXyLBHZp3vD6zpjSIiW6oJlLuyWW1C4UXTpDSOSvLriaHMRPffnX6DltQnP8IFeZQKcvnHacxUTcVwgbBz1OhLeV8m9U1Ql9guLQXyn3ojKCHhkjkLUsTsxoP/MXB/wFiatx43RvVDAAAAABJRU5ErkJggg==",Et="/assets/icon-0-CdI-z-oU.png";function kt(){const e=x.useRef(null),{scrollYProgress:n}=he({target:e,offset:["start end","end start"]}),a=k(E(n,[0,1],[-6,10]),{stiffness:22,damping:30,mass:1.1}),s=k(E(n,[0,1],[-8,82]),{stiffness:24,damping:32,mass:1.05}),r=k(E(n,[0,1],[10,-14]),{stiffness:22,damping:30,mass:1.05});return t.jsx("section",{ref:e,id:"services",className:`
        relative
        bg-cream
        py-28
        lg:py-36
        overflow-hidden
      `,children:t.jsxs("div",{className:`
    max-w-[1450px]
    mx-auto
    px-6
    grid
    grid-cols-1
    lg:grid-cols-12
    gap-6
    lg:gap-8
    items-center
  `,children:[t.jsxs(p,{y:20,className:"lg:col-span-6",children:[t.jsxs("p",{className:"eyebrow text-brown/70 mb-5 flex items-center gap-2 uppercase tracking-[0.2em] text-[11px]",children:[t.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"SPECIALITY"]}),t.jsx("h2",{className:`
      font-serif
      text-[42px]
      sm:text-[54px]
      md:text-[64px]
      text-[#5b4636]
      leading-[0.98]
      tracking-[-0.03em]
      uppercase
    `,children:"UNFORGETTABLE CATERING FOR ANY OCCASION WITH OUR SPECIALITY!"}),t.jsxs("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("img",{src:At,alt:"",className:"w-10 h-10 object-contain opacity-80"}),t.jsx("div",{children:t.jsxs("p",{className:`
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      `,children:["Premium",t.jsx("br",{}),"Dining"]})})]}),t.jsx("p",{className:`
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        `,children:"Allow customers to book reservations with automated confirmations."})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("img",{src:Nt,alt:"",className:"w-10 h-10 object-contain opacity-80"}),t.jsx("div",{children:t.jsxs("p",{className:`
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      `,children:["Abundant",t.jsx("br",{}),"Flavors"]})})]}),t.jsx("p",{className:`
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        `,children:"Our experienced real estate experts guide you through every."})]})]}),t.jsx("div",{className:"mt-9 border-t border-[#ddd2bf]"}),t.jsx("p",{className:`
      mt-7
      text-[14px]
      text-[#7f7266]
      leading-[1.9]
      max-w-[620px]
    `,children:"At our restaurant, dining is more than just eating, it's an experience. We blend creativity, flavor, and passion to bring you dishes that delight the senses. From our carefully curated menu to our warm and inviting atmosphere."}),t.jsx(h.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:1.1,duration:.9},className:"mt-12",children:t.jsxs("a",{href:"#contact",className:"group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500",children:["Book Now",t.jsx(H,{className:"w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45"})]})})]}),t.jsxs(p,{delay:.2,y:20,className:"lg:col-span-6 relative",children:[t.jsx("div",{className:"overflow-hidden rounded-md luxe-shadow",children:t.jsx("img",{src:M,alt:"Luxury dining",className:`
                w-full
                h-[580px]
                object-cover
              `})}),t.jsx(h.img,{src:Et,alt:"",style:{rotate:a,x:s,y:r},className:`
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
            `})]})]})})}const Ct=[{img:Pe,title:`RELIGIOUS
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/religious-menu"},{img:ue,title:`PARTIES
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/parties-menu"},{img:Me,title:`WEDDING
MENU`,desc:"Crafted cocktails, wines, and soft pairings.",link:"/wedding-menu"}];function St(){return t.jsx("section",{id:"Dishes",children:t.jsx("section",{className:"relative bg-[#ECE5DA] py-24 lg:py-32 overflow-hidden",children:t.jsxs("div",{className:"max-w-[1420px] mx-auto px-5 sm:px-7",children:[t.jsx(p,{children:t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:`
                text-[11px]
                tracking-[0.32em]
                uppercase
                text-[#8A7B68]
                mb-5
              `,children:[t.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"CATERING MENUS"]}),t.jsxs("h2",{className:`
                font-serif
                text-[#3A3026]
                leading-[0.95]
                tracking-[-0.03em]

                text-5xl
                sm:text-6xl
                lg:text-7xl
              `,children:["MOST POPULAR",t.jsx("br",{}),"DISHES"]})]})}),t.jsx("div",{className:`
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          `,children:Ct.map((e,n)=>t.jsx(p,{delay:n*.1,children:t.jsx("a",{href:e.link,className:`
                  group
                  relative
                  block
                `,children:t.jsxs("div",{className:`
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
                  `,children:[t.jsxs("div",{className:`
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
                    `,children:[t.jsx("img",{src:e.img,alt:e.title,className:`
                          w-full
                          h-full
                          object-cover

                          transition-all
                          duration-[1400ms]
                          ease-[cubic-bezier(.22,1,.36,1)]
                         `}),t.jsx("div",{className:`
                        absolute
                        inset-0

                        bg-black/0

                        transition-all
                        duration-1000

                        group-hover:bg-black/28
                        group-active:bg-black/28

                      `}),t.jsx("div",{className:`
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
                         `,children:t.jsx("div",{className:`
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
                              `,children:t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:`
                                text-[11px]
                                tracking-[0.22em]
                              `,children:"VIEW"}),t.jsx(Ge,{className:"w-4 h-4"})]})})})]}),t.jsx("div",{className:"h-[120px] sm:h-[145px]"}),t.jsxs("div",{className:`
                      px-8
                      pb-12

                      text-center
                    `,children:[t.jsx("h3",{className:`
                        font-serif

                        text-[#44372A]

                        leading-[1.02]

                        tracking-[0.01em]

                        text-[2.2rem]
                        sm:text-[2.7rem]

                        whitespace-pre-line
                      `,children:e.title}),t.jsx("p",{className:`
                        mt-6

                        text-[#75685D]

                        text-[15px]

                        leading-[1.8]

                        max-w-[290px]
                        mx-auto
                      `,children:e.desc})]}),t.jsx("div",{className:`
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
                    `,children:t.jsx("div",{className:`
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
                      `,children:t.jsx(ze,{className:"w-5 h-5"})})})]})})},e.title))})]})})})}function Tt(){return t.jsx("section",{id:"Video",children:t.jsxs("section",{className:"relative h-[70vh] min-h-[480px] overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 zoom-slow",children:t.jsx("img",{src:Ve,alt:"",className:"w-full h-full object-cover"})}),t.jsx("div",{className:"absolute inset-0 bg-[#1a0e07]/65"}),t.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[t.jsx("h2",{className:"font-serif text-7xl sm:text-9xl lg:text-[12rem] text-cream/15 tracking-[0.18em] absolute top-10 lg:top-16 select-none pointer-events-none",children:"VIDEO"}),t.jsx("button",{className:"relative w-24 h-24 rounded-full bg-gold flex items-center justify-center text-brown-deep pulse-ring hover:bg-gold-bright transition-colors","aria-label":"Play video",children:t.jsx(De,{className:"w-8 h-8 ml-1",fill:"currentColor"})})]})]})})}const Rt="/assets/event-Db-gbXbA.jpeg",It=[D,ue,Y,Rt];function Ot(){return t.jsx("section",{id:"gallery",children:t.jsxs("section",{className:"relative bg-cream py-28 lg:py-36 overflow-hidden",children:[t.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 text-center relative",children:[t.jsx("h2",{className:`
              font-serif
              text-[clamp(2.5rem,10vw,11rem)]
              text-brown/10
              tracking-[0.12em]
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              select-none
              pointer-events-none
              whitespace-nowrap
            `,"aria-hidden":!0,children:"GALLERY"}),t.jsx(p,{children:t.jsxs("p",{className:`
              eyebrow
              text-brown/70
              mb-5

              flex
              items-center
              justify-center
              gap-2

              relative
            `,children:[t.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"}),"OUR GALLERY"]})}),t.jsx(p,{delay:.1,children:t.jsxs("h3",{className:`
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl

              text-brown-deep

              leading-[1.02]
              tracking-[-0.01em]

              relative
            `,children:["CATERING",t.jsx("br",{}),"THAT CREATES",t.jsx("br",{}),"MOMENTS!"]})})]}),t.jsx("div",{className:"mt-20",children:t.jsx("div",{className:`
            grid
            grid-cols-2
            md:grid-cols-4

            gap-0
          `,children:It.map((e,n)=>t.jsx(p,{delay:n*.1,children:t.jsxs("div",{className:`
                  group
                  relative
                  overflow-hidden

                  h-[170px]
                  sm:h-[270px]
                  md:h-[370px]
                  lg:h-[480px]
                `,children:[t.jsx("img",{src:e,alt:"",draggable:!1,className:`
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
                  `}),t.jsx("div",{className:`
                    absolute
                    inset-0

                    bg-[#1a0e07]/0

                    transition-all
                    duration-700

                    group-hover:bg-[#1a0e07]/35
                    group-active:bg-[#1a0e07]/35
                  `})]})},n))})})]})})}const v="w-full bg-cream/70 border border-brown/15 rounded-md px-4 py-3.5 text-sm text-brown-deep placeholder:text-brown/50 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all duration-500";function Lt(){const[e,n]=x.useState({name:"",phone:"",email:"",company:"",event_type:"",event_date:"",guests:"",message:""}),a=async s=>{s.preventDefault();const{error:r}=await Ye.from("submissions").insert({type:"reserve",name:e.name,phone:e.phone,email:e.email,company:e.company,event_type:e.event_type,event_date:e.event_date,guests:Number(e.guests),message:e.message});if(r){console.log(r),alert("Failed to submit");return}alert("Request submitted successfully ✅"),n({name:"",phone:"",email:"",company:"",event_type:"",event_date:"",guests:"",message:""})};return t.jsx("section",{id:"contact",className:"relative bg-cream-dark py-28 lg:py-36",children:t.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch",children:[t.jsx(p,{y:20,children:t.jsx("div",{className:"h-full overflow-hidden rounded-md luxe-shadow",children:t.jsx("img",{src:Le,alt:"Elegant table",className:"w-full h-full min-h-[560px] object-cover"})})}),t.jsxs(p,{delay:.2,y:20,children:[t.jsxs("p",{className:"eyebrow text-brown/70 mb-4 flex items-center gap-2",children:[t.jsx("span",{className:"text-brown-deep text-[10px]",children:"✧"})," CONTACT AND RESERVATIONS"]}),t.jsx("h2",{className:"font-serif text-4xl sm:text-5xl md:text-6xl text-brown-deep leading-[1.04] tracking-[-0.01em]",children:"RESERVE YOUR CATERING SERVICE TODAY!"}),t.jsxs("form",{className:"mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4",onSubmit:a,children:[t.jsx("input",{className:v,placeholder:"Your Name*",value:e.name,onChange:s=>n({...e,name:s.target.value})}),t.jsx("input",{className:v,placeholder:"Phone Number*",value:e.phone,onChange:s=>n({...e,phone:s.target.value})}),t.jsx("input",{className:v,placeholder:"Email",type:"email",value:e.email,onChange:s=>n({...e,email:s.target.value})}),t.jsx("input",{className:v,placeholder:"Company",value:e.company,onChange:s=>n({...e,company:s.target.value})}),t.jsxs("select",{className:v,value:e.event_type,onChange:s=>n({...e,event_type:s.target.value}),children:[t.jsx("option",{value:"",children:"Event Type"}),t.jsx("option",{value:"Wedding",children:"Wedding"}),t.jsx("option",{value:"Corporate",children:"Corporate"}),t.jsx("option",{value:"Religious",children:"Religious"}),t.jsx("option",{value:"Party",children:"Party"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm text-brown/70 mb-2",children:" Event Date (MM/DD/YYYY)"}),t.jsx("input",{type:"date",className:v,value:e.event_date,onChange:s=>n({...e,event_date:s.target.value})})]}),t.jsx("input",{className:v,placeholder:"Number of Guests*",type:"number",value:e.guests,onChange:s=>n({...e,guests:s.target.value})}),t.jsx("textarea",{className:`${v} sm:col-span-2 min-h-[120px] resize-none`,placeholder:"Wishes / questions / requests",value:e.message,onChange:s=>n({...e,message:s.target.value})}),t.jsx(h.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:1.1,duration:.9},className:"mt-12",children:t.jsxs("button",{type:"submit",className:"group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500",children:["SUBMIT REQUEST",t.jsx(H,{className:"w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45"})]})})]})]})]})})}function Ft(){return t.jsxs("main",{className:"bg-cream text-brown-deep overflow-x-hidden",children:[t.jsx(Ce,{}),t.jsx(bt,{}),t.jsx(jt,{}),t.jsx(wt,{}),t.jsx(kt,{}),t.jsx(St,{}),t.jsx(Tt,{}),t.jsx(Ot,{}),t.jsx(Lt,{}),t.jsx(Se,{})]})}export{Ft as component};
