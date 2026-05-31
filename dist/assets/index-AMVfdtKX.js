(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vc(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const gt={},Or=[],pn=()=>{},$d=()=>!1,ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xc=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kd=Object.prototype.hasOwnProperty,et=(n,e)=>Kd.call(n,e),Ge=Array.isArray,Br=n=>ua(n)==="[object Map]",af=n=>ua(n)==="[object Set]",$e=n=>typeof n=="function",bt=n=>typeof n=="string",Jr=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",lf=n=>(pt(n)||$e(n))&&$e(n.then)&&$e(n.catch),cf=Object.prototype.toString,ua=n=>cf.call(n),Zd=n=>ua(n).slice(8,-1),uf=n=>ua(n)==="[object Object]",yc=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Do=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jd=/-(\w)/g,Xr=ha(n=>n.replace(Jd,(e,t)=>t?t.toUpperCase():"")),Qd=/\B([A-Z])/g,sr=ha(n=>n.replace(Qd,"-$1").toLowerCase()),hf=ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ia=ha(n=>n?`on${hf(n)}`:""),Ai=(n,e)=>!Object.is(n,e),Da=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Wo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ep=n=>{const e=parseFloat(n);return isNaN(e)?n:e},tp=n=>{const e=bt(n)?Number(n):NaN;return isNaN(e)?n:e};let lu;const ff=()=>lu||(lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ji(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?sp(i):Ji(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||pt(n))return n}const np=/;(?![^(]*\))/g,ip=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function sp(n){const e={};return n.replace(rp,"").split(np).forEach(t=>{if(t){const i=t.split(ip);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zn(n){let e="";if(bt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=zn(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=vc(op);function df(n){return!!n||n===""}const St=n=>bt(n)?n:n==null?"":Ge(n)||pt(n)&&(n.toString===cf||!$e(n.toString))?JSON.stringify(n,pf,2):String(n),pf=(n,e)=>e&&e.__v_isRef?pf(n,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ua(i,s)+" =>"]=r,t),{})}:af(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ua(t))}:Jr(e)?Ua(e):pt(e)&&!Ge(e)&&!uf(e)?String(e):e,Ua=(n,e="")=>{var t;return Jr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bn;class lp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cp(n,e=bn){e&&e.active&&e.effects.push(n)}function up(){return bn}let Qi;class Sc{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cp(this,r)}get dirty(){if(this._dirtyLevel===1){or();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(hp(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),ar()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Si,t=Qi;try{return Si=!0,Qi=this,this._runnings++,cu(this),this.fn()}finally{uu(this),this._runnings--,Qi=t,Si=e}}stop(){var e;this.active&&(cu(this),uu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function hp(n){return n.value}function cu(n){n._trackId++,n._depsLength=0}function uu(n){if(n.deps&&n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)mf(n.deps[e],n);n.deps.length=n._depsLength}}function mf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Si=!0,yl=0;const gf=[];function or(){gf.push(Si),Si=!1}function ar(){const n=gf.pop();Si=n===void 0?!0:n}function bc(){yl++}function Ec(){for(yl--;!yl&&Sl.length;)Sl.shift()()}function _f(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&mf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Sl=[];function vf(n,e,t){bc();for(const i of n.keys())if(i._dirtyLevel<e&&n.get(i)===i._trackId){const r=i._dirtyLevel;i._dirtyLevel=e,r===0&&(i._shouldSchedule=!0,i.trigger())}xf(n),Ec()}function xf(n){for(const e of n.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&n.get(e)===e._trackId&&(e._shouldSchedule=!1,Sl.push(e.scheduler))}const Mf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Xo=new WeakMap,er=Symbol(""),bl=Symbol("");function tn(n,e,t){if(Si&&Qi){let i=Xo.get(n);i||Xo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Mf(()=>i.delete(t))),_f(Qi,r)}}function Jn(n,e,t,i,r,s){const o=Xo.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ge(n)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Jr(u)&&u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ge(n)?yc(t)&&a.push(o.get("length")):(a.push(o.get(er)),Br(n)&&a.push(o.get(bl)));break;case"delete":Ge(n)||(a.push(o.get(er)),Br(n)&&a.push(o.get(bl)));break;case"set":Br(n)&&a.push(o.get(er));break}bc();for(const c of a)c&&vf(c,2);Ec()}function fp(n,e){var t;return(t=Xo.get(n))==null?void 0:t.get(e)}const dp=vc("__proto__,__v_isRef,__isVue"),yf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jr)),hu=pp();function pp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let s=0,o=this.length;s<o;s++)tn(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){or(),bc();const i=tt(this)[e].apply(this,t);return Ec(),ar(),i}}),n}function mp(n){const e=tt(this);return tn(e,"has",n),e.hasOwnProperty(n)}class Sf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Cp:Tf:s?wf:Ef).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){if(o&&et(hu,t))return Reflect.get(hu,t,i);if(t==="hasOwnProperty")return mp}const a=Reflect.get(e,t,i);return(Jr(t)?yf.has(t):dp(t))||(r||tn(e,"get",t),s)?a:Jt(a)?o&&yc(t)?a:a.value:pt(a)?r?Af(a):As(a):a}}class bf extends Sf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._shallow){const c=jr(s);if(!jo(i)&&!jr(i)&&(s=tt(s),i=tt(i)),!Ge(e)&&Jt(s)&&!Jt(i))return c?!1:(s.value=i,!0)}const o=Ge(e)&&yc(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,r);return e===tt(r)&&(o?Ai(i,s)&&Jn(e,"set",t,i):Jn(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Jn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Jr(t)||!yf.has(t))&&tn(e,"has",t),i}ownKeys(e){return tn(e,"iterate",Ge(e)?"length":er),Reflect.ownKeys(e)}}class gp extends Sf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _p=new bf,vp=new gp,xp=new bf(!0),wc=n=>n,fa=n=>Reflect.getPrototypeOf(n);function Gs(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(Ai(e,s)&&tn(r,"get",e),tn(r,"get",s));const{has:o}=fa(r),a=i?wc:t?Cc:Cs;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ws(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(Ai(n,r)&&tn(i,"has",n),tn(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Xs(n,e=!1){return n=n.__v_raw,!e&&tn(tt(n),"iterate",er),Reflect.get(n,"size",n)}function fu(n){n=tt(n);const e=tt(this);return fa(e).has.call(e,n)||(e.add(n),Jn(e,"add",n,n)),this}function du(n,e){e=tt(e);const t=tt(this),{has:i,get:r}=fa(t);let s=i.call(t,n);s||(n=tt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Ai(e,o)&&Jn(t,"set",n,e):Jn(t,"add",n,e),this}function pu(n){const e=tt(this),{has:t,get:i}=fa(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Jn(e,"delete",n,void 0),s}function mu(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&Jn(n,"clear",void 0,void 0),t}function js(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),c=e?wc:n?Cc:Cs;return!n&&tn(a,"iterate",er),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function qs(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Br(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?wc:e?Cc:Cs;return!e&&tn(s,"iterate",c?bl:er),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function oi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mp(){const n={get(s){return Gs(this,s)},get size(){return Xs(this)},has:Ws,add:fu,set:du,delete:pu,clear:mu,forEach:js(!1,!1)},e={get(s){return Gs(this,s,!1,!0)},get size(){return Xs(this)},has:Ws,add:fu,set:du,delete:pu,clear:mu,forEach:js(!1,!0)},t={get(s){return Gs(this,s,!0)},get size(){return Xs(this,!0)},has(s){return Ws.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:js(!0,!1)},i={get(s){return Gs(this,s,!0,!0)},get size(){return Xs(this,!0)},has(s){return Ws.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qs(s,!1,!1),t[s]=qs(s,!0,!1),e[s]=qs(s,!1,!0),i[s]=qs(s,!0,!0)}),[n,t,e,i]}const[yp,Sp,bp,Ep]=Mp();function Tc(n,e){const t=e?n?Ep:bp:n?Sp:yp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const wp={get:Tc(!1,!1)},Tp={get:Tc(!1,!0)},Ap={get:Tc(!0,!1)},Ef=new WeakMap,wf=new WeakMap,Tf=new WeakMap,Cp=new WeakMap;function Rp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pp(n){return n.__v_skip||!Object.isExtensible(n)?0:Rp(Zd(n))}function As(n){return jr(n)?n:Ac(n,!1,_p,wp,Ef)}function Lp(n){return Ac(n,!1,xp,Tp,wf)}function Af(n){return Ac(n,!0,vp,Ap,Tf)}function Ac(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Pp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function zr(n){return jr(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function jr(n){return!!(n&&n.__v_isReadonly)}function jo(n){return!!(n&&n.__v_isShallow)}function Cf(n){return zr(n)||jr(n)}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Rf(n){return Wo(n,"__v_skip",!0),n}const Cs=n=>pt(n)?As(n):n,Cc=n=>pt(n)?Af(n):n;class Pf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Sc(()=>e(this._value),()=>Uo(this,1),()=>this.dep&&xf(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&Ai(e._value,e._value=e.effect.run())&&Uo(e,2),Lf(e),e.effect._dirtyLevel>=1&&Uo(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ip(n,e,t=!1){let i,r;const s=$e(n);return s?(i=n,r=pn):(i=n.get,r=n.set),new Pf(i,r,s||!r,t)}function Lf(n){Si&&Qi&&(n=tt(n),_f(Qi,n.dep||(n.dep=Mf(()=>n.dep=void 0,n instanceof Pf?n:void 0))))}function Uo(n,e=2,t){n=tt(n);const i=n.dep;i&&vf(i,e)}function Jt(n){return!!(n&&n.__v_isRef===!0)}function Ot(n){return Dp(n,!1)}function Dp(n,e){return Jt(n)?n:new Up(n,e)}class Up{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:Cs(e)}get value(){return Lf(this),this._value}set value(e){const t=this.__v_isShallow||jo(e)||jr(e);e=t?e:tt(e),Ai(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Cs(e),Uo(this,2))}}function qt(n){return Jt(n)?n.value:n}const Np={get:(n,e,t)=>qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Jt(r)&&!Jt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function If(n){return zr(n)?n:new Proxy(n,Np)}function Fp(n){const e=Ge(n)?new Array(n.length):{};for(const t in n)e[t]=Bp(n,t);return e}class Op{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fp(tt(this._object),this._key)}}function Bp(n,e,t){const i=n[e];return Jt(i)?i:new Op(n,e,t)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){da(s,e,t)}return r}function gn(n,e,t,i){if($e(n)){const s=bi(n,e,t,i);return s&&lf(s)&&s.catch(o=>{da(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(gn(n[s],e,t,i));return r}function da(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){bi(c,null,10,[n,o,a]);return}}zp(n,t,r,i)}function zp(n,e,t,i=!0){console.error(n)}let Rs=!1,El=!1;const Gt=[];let On=0;const kr=[];let gi=null,Wi=0;const Df=Promise.resolve();let Rc=null;function Pc(n){const e=Rc||Df;return n?e.then(this?n.bind(this):n):e}function kp(n){let e=On+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=Ps(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Lc(n){(!Gt.length||!Gt.includes(n,Rs&&n.allowRecurse?On+1:On))&&(n.id==null?Gt.push(n):Gt.splice(kp(n.id),0,n),Uf())}function Uf(){!Rs&&!El&&(El=!0,Rc=Df.then(Ff))}function Hp(n){const e=Gt.indexOf(n);e>On&&Gt.splice(e,1)}function Vp(n){Ge(n)?kr.push(...n):(!gi||!gi.includes(n,n.allowRecurse?Wi+1:Wi))&&kr.push(n),Uf()}function gu(n,e,t=Rs?On+1:0){for(;t<Gt.length;t++){const i=Gt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Gt.splice(t,1),t--,i()}}}function Nf(n){if(kr.length){const e=[...new Set(kr)].sort((t,i)=>Ps(t)-Ps(i));if(kr.length=0,gi){gi.push(...e);return}for(gi=e,Wi=0;Wi<gi.length;Wi++)gi[Wi]();gi=null,Wi=0}}const Ps=n=>n.id==null?1/0:n.id,Gp=(n,e)=>{const t=Ps(n)-Ps(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ff(n){El=!1,Rs=!0,Gt.sort(Gp);try{for(On=0;On<Gt.length;On++){const e=Gt[On];e&&e.active!==!1&&bi(e,null,14)}}finally{On=0,Gt.length=0,Nf(),Rs=!1,Rc=null,(Gt.length||kr.length)&&Ff()}}function Wp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||gt;h&&(r=t.map(p=>bt(p)?p.trim():p)),f&&(r=t.map(ep))}let a,c=i[a=Ia(e)]||i[a=Ia(Xr(e))];!c&&s&&(c=i[a=Ia(sr(e))]),c&&gn(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,gn(l,n,6,r)}}function Of(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!$e(n)){const c=l=>{const u=Of(l,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Ge(s)?s.forEach(c=>o[c]=null):Rt(o,s),pt(n)&&i.set(n,o),o)}function pa(n,e){return!n||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,sr(e))||et(n,e))}let Zt=null,ma=null;function qo(n){const e=Zt;return Zt=n,ma=n&&n.type.__scopeId||null,e}function Qr(n){ma=n}function es(){ma=null}function Tt(n,e=Zt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ru(-1);const s=qo(e);let o;try{o=n(...r)}finally{qo(s),i._d&&Ru(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Na(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n;let m,d;const w=qo(n);try{if(t.shapeFlag&4){const T=r||i,O=T;m=Nn(u.call(O,T,f,s,p,h,g)),d=c}else{const T=e;m=Nn(T.length>1?T(s,{attrs:c,slots:a,emit:l}):T(s,null)),d=e.props?c:Xp(c)}}catch(T){Es.length=0,da(T,n,1),m=ye(_n)}let y=m;if(d&&_!==!1){const T=Object.keys(d),{shapeFlag:O}=y;T.length&&O&7&&(o&&T.some(xc)&&(d=jp(d,o)),y=Ci(y,d))}return t.dirs&&(y=Ci(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,qo(w),m}const Xp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ca(t))&&((e||(e={}))[t]=n[t]);return e},jp=(n,e)=>{const t={};for(const i in n)(!xc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?_u(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!pa(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_u(i,o,l):!0:!!o;return!1}function _u(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!pa(t,s))return!0}return!1}function Yp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $p=Symbol.for("v-ndc"),Kp=n=>n.__isSuspense;function Zp(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):Vp(n)}const Jp=Symbol.for("v-scx"),Qp=()=>No(Jp),Ys={};function Ms(n,e,t){return Bf(n,e,t)}function Bf(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=gt){if(e&&s){const A=e;e=(...C)=>{A(...C),O()}}const c=Wt,l=A=>i===!0?A:Ur(A,i===!1?1:void 0);let u,f=!1,h=!1;if(Jt(n)?(u=()=>n.value,f=jo(n)):zr(n)?(u=()=>l(n),f=!0):Ge(n)?(h=!0,f=n.some(A=>zr(A)||jo(A)),u=()=>n.map(A=>{if(Jt(A))return A.value;if(zr(A))return l(A);if($e(A))return bi(A,c,2)})):$e(n)?e?u=()=>bi(n,c,2):u=()=>(p&&p(),gn(n,c,3,[g])):u=pn,e&&i){const A=u;u=()=>Ur(A())}let p,g=A=>{p=y.onStop=()=>{bi(A,c,4),p=y.onStop=void 0}},_;if(Ma)if(g=pn,e?t&&gn(e,c,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const A=Qp();_=A.__watcherHandles||(A.__watcherHandles=[])}else return pn;let m=h?new Array(n.length).fill(Ys):Ys;const d=()=>{if(!(!y.active||!y.dirty))if(e){const A=y.run();(i||f||(h?A.some((C,P)=>Ai(C,m[P])):Ai(A,m)))&&(p&&p(),gn(e,c,3,[A,m===Ys?void 0:h&&m[0]===Ys?[]:m,g]),m=A)}else y.run()};d.allowRecurse=!!e;let w;r==="sync"?w=d:r==="post"?w=()=>Qt(d,c&&c.suspense):(d.pre=!0,c&&(d.id=c.uid),w=()=>Lc(d));const y=new Sc(u,pn,w),T=up(),O=()=>{y.stop(),T&&Mc(T.effects,y)};return e?t?d():m=y.run():r==="post"?Qt(y.run.bind(y),c&&c.suspense):y.run(),_&&_.push(O),O}function em(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?zf(i,n):()=>i[n]:n.bind(i,i);let s;$e(e)?s=e:(s=e.handler,t=e);const o=zs(this),a=Bf(r,s.bind(i),t);return o(),a}function zf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ur(n,e,t=0,i){if(!pt(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Jt(n))Ur(n.value,e,t,i);else if(Ge(n))for(let r=0;r<n.length;r++)Ur(n[r],e,t,i);else if(af(n)||Br(n))n.forEach(r=>{Ur(r,e,t,i)});else if(uf(n))for(const r in n)Ur(n[r],e,t,i);return n}function Di(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(or(),gn(c,t,8,[n.el,a,n,e]),ar())}}const _i=Symbol("_leaveCb"),$s=Symbol("_enterCb");function tm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lr(()=>{n.isMounted=!0}),ts(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],kf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},nm={name:"BaseTransition",props:kf,setup(n,{slots:e}){const t=Hm(),i=tm();let r;return()=>{const s=e.default&&Vf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const _ of s)if(_.type!==_n){o=_;break}}const a=tt(n),{mode:c}=a;if(i.isLeaving)return Fa(o);const l=vu(o);if(!l)return Fa(o);const u=wl(l,a,i,t);Tl(l,u);const f=t.subTree,h=f&&vu(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const _=g();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(h&&h.type!==_n&&(!Xi(l,h)||p)){const _=wl(h,a,i,t);if(Tl(h,_),c==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Fa(o);c==="in-out"&&l.type!==_n&&(_.delayLeave=(m,d,w)=>{const y=Hf(i,h);y[String(h.key)]=h,m[_i]=()=>{d(),m[_i]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},im=nm;function Hf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wl(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:m,onAfterAppear:d,onAppearCancelled:w}=e,y=String(n.key),T=Hf(t,n),O=(P,b)=>{P&&gn(P,i,9,b)},A=(P,b)=>{const M=b[1];O(P,b),Ge(P)?P.every(R=>R.length<=1)&&M():P.length<=1&&M()},C={mode:s,persisted:o,beforeEnter(P){let b=a;if(!t.isMounted)if(r)b=_||a;else return;P[_i]&&P[_i](!0);const M=T[y];M&&Xi(n,M)&&M.el[_i]&&M.el[_i](),O(b,[P])},enter(P){let b=c,M=l,R=u;if(!t.isMounted)if(r)b=m||c,M=d||l,R=w||u;else return;let F=!1;const B=P[$s]=J=>{F||(F=!0,J?O(R,[P]):O(M,[P]),C.delayedLeave&&C.delayedLeave(),P[$s]=void 0)};b?A(b,[P,B]):B()},leave(P,b){const M=String(n.key);if(P[$s]&&P[$s](!0),t.isUnmounting)return b();O(f,[P]);let R=!1;const F=P[_i]=B=>{R||(R=!0,b(),B?O(g,[P]):O(p,[P]),P[_i]=void 0,T[M]===n&&delete T[M])};T[M]=n,h?A(h,[P,F]):F()},clone(P){return wl(P,e,t,i)}};return C}function Fa(n){if(ga(n))return n=Ci(n),n.children=null,n}function vu(n){return ga(n)?n.children?n.children[0]:void 0:n}function Tl(n,e){n.shapeFlag&6&&n.component?Tl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Vf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Nt?(o.patchFlag&128&&r++,i=i.concat(Vf(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Ci(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function kn(n,e){return $e(n)?Rt({name:n.name},e,{setup:n}):n}const ys=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function rm(n,e){Gf(n,"a",e)}function sm(n,e){Gf(n,"da",e)}function Gf(n,e,t=Wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_a(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&om(i,e,t,r),r=r.parent}}function om(n,e,t,i){const r=_a(e,n,i,!0);Xf(()=>{Mc(i[e],r)},t)}function _a(n,e,t=Wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;or();const a=zs(t),c=gn(e,t,n,o);return a(),ar(),c});return i?r.unshift(s):r.push(s),s}}const ti=n=>(e,t=Wt)=>(!Ma||n==="sp")&&_a(n,(...i)=>e(...i),t),am=ti("bm"),lr=ti("m"),lm=ti("bu"),Wf=ti("u"),ts=ti("bum"),Xf=ti("um"),cm=ti("sp"),um=ti("rtg"),hm=ti("rtc");function fm(n,e=Wt){_a("ec",n,e)}function Ls(n,e,t,i){let r;const s=t;if(Ge(n)||bt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(n[l],l,a,s)}}else r=[];return r}function jf(n,e,t={},i,r){if(Zt.isCE||Zt.parent&&ys(Zt.parent)&&Zt.parent.isCE)return ye("slot",t,i);let s=n[e];s&&s._c&&(s._d=!1),Qe();const o=s&&qf(s(t)),a=nr(Nt,{key:t.key||o&&o.key||`_${e}`},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),a}function qf(n){return n.some(e=>Ko(e)?!(e.type===_n||e.type===Nt&&!qf(e.children)):!0)?n:null}const Al=n=>n?ad(n)?Oc(n)||n.proxy:Al(n.parent):null,Ss=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Al(n.parent),$root:n=>Al(n.root),$emit:n=>n.emit,$options:n=>Ic(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Lc(n.update)}),$nextTick:n=>n.n||(n.n=Pc.bind(n.proxy)),$watch:n=>em.bind(n)}),Oa=(n,e)=>n!==gt&&!n.__isScriptSetup&&et(n,e),dm={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Oa(i,e))return o[e]=1,i[e];if(r!==gt&&et(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&et(l,e))return o[e]=3,s[e];if(t!==gt&&et(t,e))return o[e]=4,t[e];Cl&&(o[e]=0)}}const u=Ss[e];let f,h;if(u)return e==="$attrs"&&tn(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==gt&&et(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,et(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Oa(r,e)?(r[e]=t,!0):i!==gt&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==gt&&et(n,o)||Oa(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(Ss,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xu(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cl=!0;function pm(n){const e=Ic(n),t=n.proxy,i=n.ctx;Cl=!1,e.beforeCreate&&Mu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:y,unmounted:T,render:O,renderTracked:A,renderTriggered:C,errorCaptured:P,serverPrefetch:b,expose:M,inheritAttrs:R,components:F,directives:B,filters:J}=e;if(l&&mm(l,i,null),o)for(const te in o){const j=o[te];$e(j)&&(i[te]=j.bind(t))}if(r){const te=r.call(t,t);pt(te)&&(n.data=As(te))}if(Cl=!0,s)for(const te in s){const j=s[te],ge=$e(j)?j.bind(t,t):$e(j.get)?j.get.bind(t,t):pn,be=!$e(j)&&$e(j.set)?j.set.bind(t):pn,Se=fn({get:ge,set:be});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Pe=>Se.value=Pe})}if(a)for(const te in a)Yf(a[te],i,t,te);if(c){const te=$e(c)?c.call(t):c;Reflect.ownKeys(te).forEach(j=>{ym(j,te[j])})}u&&Mu(u,n,"c");function Z(te,j){Ge(j)?j.forEach(ge=>te(ge.bind(t))):j&&te(j.bind(t))}if(Z(am,f),Z(lr,h),Z(lm,p),Z(Wf,g),Z(rm,_),Z(sm,m),Z(fm,P),Z(hm,A),Z(um,C),Z(ts,w),Z(Xf,T),Z(cm,b),Ge(M))if(M.length){const te=n.exposed||(n.exposed={});M.forEach(j=>{Object.defineProperty(te,j,{get:()=>t[j],set:ge=>t[j]=ge})})}else n.exposed||(n.exposed={});O&&n.render===pn&&(n.render=O),R!=null&&(n.inheritAttrs=R),F&&(n.components=F),B&&(n.directives=B)}function mm(n,e,t=pn){Ge(n)&&(n=Rl(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=No(r.from||i,r.default,!0):s=No(r.from||i):s=No(r),Jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Mu(n,e,t){gn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yf(n,e,t,i){const r=i.includes(".")?zf(t,i):()=>t[i];if(bt(n)){const s=e[n];$e(s)&&Ms(r,s)}else if($e(n))Ms(r,n.bind(t));else if(pt(n))if(Ge(n))n.forEach(s=>Yf(s,e,t,i));else{const s=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(s)&&Ms(r,s,n)}}function Ic(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Yo(c,l,o,!0)),Yo(c,e,o)),pt(e)&&s.set(e,c),c}function Yo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Yo(n,s,t,!0),r&&r.forEach(o=>Yo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gm={data:yu,props:Su,emits:Su,methods:vs,computed:vs,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:vs,directives:vs,watch:vm,provide:yu,inject:_m};function yu(n,e){return e?n?function(){return Rt($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function _m(n,e){return vs(Rl(n),Rl(e))}function Rl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function vs(n,e){return n?Rt(Object.create(null),n,e):e}function Su(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Rt(Object.create(null),xu(n),xu(e??{})):e}function vm(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function $f(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xm=0;function Mm(n,e){return function(i,r=null){$e(i)||(i=Rt({},i)),r!=null&&!pt(r)&&(r=null);const s=$f(),o=new WeakSet;let a=!1;const c=s.app={_uid:xm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:qm,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&$e(l.install)?(o.add(l),l.install(c,...u)):$e(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=ye(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,l):n(h,l,f),a=!0,c._container=l,l.__vue_app__=c,Oc(h.component)||h.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){$o=c;try{return l()}finally{$o=null}}};return c}}let $o=null;function ym(n,e){if(Wt){let t=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===t&&(t=Wt.provides=Object.create(i)),t[n]=e}}function No(n,e,t=!1){const i=Wt||Zt;if(i||$o){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:$o._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}function Sm(n,e,t,i=!1){const r={},s={};Wo(s,xa,1),n.propsDefaults=Object.create(null),Kf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Lp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(pa(n.emitsOptions,h))continue;const p=e[h];if(c)if(et(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const g=Xr(h);r[g]=Pl(c,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{Kf(n,e,r,s)&&(l=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=sr(f))===f||!et(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Pl(c,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!et(e,f))&&(delete s[f],l=!0)}l&&Jn(n,"set","$attrs")}function Kf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Do(c))continue;const l=e[c];let u;r&&et(r,u=Xr(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:pa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=tt(t),l=a||gt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Pl(r,c,f,l[f],n,!et(l,f))}}return o}function Pl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$e(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=zs(r);i=l[t]=c.call(null,e),u()}}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===sr(t))&&(i=!0))}return i}function Zf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!$e(n)){const u=f=>{c=!0;const[h,p]=Zf(f,e,!0);Rt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return pt(n)&&i.set(n,Or),Or;if(Ge(s))for(let u=0;u<s.length;u++){const f=Xr(s[u]);bu(f)&&(o[f]=gt)}else if(s)for(const u in s){const f=Xr(u);if(bu(f)){const h=s[u],p=o[f]=Ge(h)||$e(h)?{type:h}:Rt({},h);if(p){const g=Tu(Boolean,p.type),_=Tu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||et(p,"default"))&&a.push(f)}}}const l=[o,a];return pt(n)&&i.set(n,l),l}function bu(n){return n[0]!=="$"}function Eu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function wu(n,e){return Eu(n)===Eu(e)}function Tu(n,e){return Ge(e)?e.findIndex(t=>wu(t,n)):$e(e)&&wu(e,n)?0:-1}const Jf=n=>n[0]==="_"||n==="$stable",Dc=n=>Ge(n)?n.map(Nn):[Nn(n)],Em=(n,e,t)=>{if(e._n)return e;const i=Tt((...r)=>Dc(e(...r)),t);return i._c=!1,i},Qf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Jf(r))continue;const s=n[r];if($e(s))e[r]=Em(r,s,i);else if(s!=null){const o=Dc(s);e[r]=()=>o}}},ed=(n,e)=>{const t=Dc(e);n.slots.default=()=>t},wm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=tt(e),Wo(e,"_",t)):Qf(e,n.slots={})}else n.slots={},e&&ed(n,e);Wo(n.slots,xa,1)},Tm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Rt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Qf(e,r)),o=e}else e&&(ed(n,e),o={default:1});if(s)for(const a in r)!Jf(a)&&o[a]==null&&delete r[a]};function Ll(n,e,t,i,r=!1){if(Ge(n)){n.forEach((h,p)=>Ll(h,e&&(Ge(e)?e[p]:e),t,i,r));return}if(ys(i)&&!r)return;const s=i.shapeFlag&4?Oc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(bt(l)?(u[l]=null,et(f,l)&&(f[l]=null)):Jt(l)&&(l.value=null)),$e(c))bi(c,a,12,[o,u]);else{const h=bt(c),p=Jt(c),g=n.f;if(h||p){const _=()=>{if(g){const m=h?et(f,c)?f[c]:u[c]:c.value;r?Ge(m)&&Mc(m,s):Ge(m)?m.includes(s)||m.push(s):h?(u[c]=[s],et(f,c)&&(f[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else h?(u[c]=o,et(f,c)&&(f[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};r||g?_():(_.id=-1,Qt(_,t))}}}const Qt=Zp;function Am(n){return Cm(n)}function Cm(n,e){const t=ff();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=pn,insertStaticContent:g}=n,_=(L,U,q,k=null,ie=null,ee=null,re=void 0,S=null,v=!!U.dynamicChildren)=>{if(L===U)return;L&&!Xi(L,U)&&(k=ve(L),Pe(L,ie,ee,!0),L=null),U.patchFlag===-2&&(v=!1,U.dynamicChildren=null);const{type:I,ref:G,shapeFlag:V}=U;switch(I){case va:m(L,U,q,k);break;case _n:d(L,U,q,k);break;case Fo:L==null&&w(U,q,k,re);break;case Nt:F(L,U,q,k,ie,ee,re,S,v);break;default:V&1?O(L,U,q,k,ie,ee,re,S,v):V&6?B(L,U,q,k,ie,ee,re,S,v):(V&64||V&128)&&I.process(L,U,q,k,ie,ee,re,S,v,ze)}G!=null&&ie&&Ll(G,L&&L.ref,ee,U||L,!U)},m=(L,U,q,k)=>{if(L==null)i(U.el=a(U.children),q,k);else{const ie=U.el=L.el;U.children!==L.children&&l(ie,U.children)}},d=(L,U,q,k)=>{L==null?i(U.el=c(U.children||""),q,k):U.el=L.el},w=(L,U,q,k)=>{[L.el,L.anchor]=g(L.children,U,q,k,L.el,L.anchor)},y=({el:L,anchor:U},q,k)=>{let ie;for(;L&&L!==U;)ie=h(L),i(L,q,k),L=ie;i(U,q,k)},T=({el:L,anchor:U})=>{let q;for(;L&&L!==U;)q=h(L),r(L),L=q;r(U)},O=(L,U,q,k,ie,ee,re,S,v)=>{U.type==="svg"?re="svg":U.type==="math"&&(re="mathml"),L==null?A(U,q,k,ie,ee,re,S,v):b(L,U,ie,ee,re,S,v)},A=(L,U,q,k,ie,ee,re,S)=>{let v,I;const{props:G,shapeFlag:V,transition:X,dirs:ce}=L;if(v=L.el=o(L.type,ee,G&&G.is,G),V&8?u(v,L.children):V&16&&P(L.children,v,null,k,ie,Ba(L,ee),re,S),ce&&Di(L,null,k,"created"),C(v,L,L.scopeId,re,k),G){for(const ue in G)ue!=="value"&&!Do(ue)&&s(v,ue,null,G[ue],ee,L.children,k,ie,pe);"value"in G&&s(v,"value",null,G.value,ee),(I=G.onVnodeBeforeMount)&&Dn(I,k,L)}ce&&Di(L,null,k,"beforeMount");const oe=Rm(ie,X);oe&&X.beforeEnter(v),i(v,U,q),((I=G&&G.onVnodeMounted)||oe||ce)&&Qt(()=>{I&&Dn(I,k,L),oe&&X.enter(v),ce&&Di(L,null,k,"mounted")},ie)},C=(L,U,q,k,ie)=>{if(q&&p(L,q),k)for(let ee=0;ee<k.length;ee++)p(L,k[ee]);if(ie){let ee=ie.subTree;if(U===ee){const re=ie.vnode;C(L,re,re.scopeId,re.slotScopeIds,ie.parent)}}},P=(L,U,q,k,ie,ee,re,S,v=0)=>{for(let I=v;I<L.length;I++){const G=L[I]=S?vi(L[I]):Nn(L[I]);_(null,G,U,q,k,ie,ee,re,S)}},b=(L,U,q,k,ie,ee,re)=>{const S=U.el=L.el;let{patchFlag:v,dynamicChildren:I,dirs:G}=U;v|=L.patchFlag&16;const V=L.props||gt,X=U.props||gt;let ce;if(q&&Ui(q,!1),(ce=X.onVnodeBeforeUpdate)&&Dn(ce,q,U,L),G&&Di(U,L,q,"beforeUpdate"),q&&Ui(q,!0),I?M(L.dynamicChildren,I,S,q,k,Ba(U,ie),ee):re||j(L,U,S,null,q,k,Ba(U,ie),ee,!1),v>0){if(v&16)R(S,U,V,X,q,k,ie);else if(v&2&&V.class!==X.class&&s(S,"class",null,X.class,ie),v&4&&s(S,"style",V.style,X.style,ie),v&8){const oe=U.dynamicProps;for(let ue=0;ue<oe.length;ue++){const Ee=oe[ue],ae=V[Ee],me=X[Ee];(me!==ae||Ee==="value")&&s(S,Ee,ae,me,ie,L.children,q,k,pe)}}v&1&&L.children!==U.children&&u(S,U.children)}else!re&&I==null&&R(S,U,V,X,q,k,ie);((ce=X.onVnodeUpdated)||G)&&Qt(()=>{ce&&Dn(ce,q,U,L),G&&Di(U,L,q,"updated")},k)},M=(L,U,q,k,ie,ee,re)=>{for(let S=0;S<U.length;S++){const v=L[S],I=U[S],G=v.el&&(v.type===Nt||!Xi(v,I)||v.shapeFlag&70)?f(v.el):q;_(v,I,G,null,k,ie,ee,re,!0)}},R=(L,U,q,k,ie,ee,re)=>{if(q!==k){if(q!==gt)for(const S in q)!Do(S)&&!(S in k)&&s(L,S,q[S],null,re,U.children,ie,ee,pe);for(const S in k){if(Do(S))continue;const v=k[S],I=q[S];v!==I&&S!=="value"&&s(L,S,I,v,re,U.children,ie,ee,pe)}"value"in k&&s(L,"value",q.value,k.value,re)}},F=(L,U,q,k,ie,ee,re,S,v)=>{const I=U.el=L?L.el:a(""),G=U.anchor=L?L.anchor:a("");let{patchFlag:V,dynamicChildren:X,slotScopeIds:ce}=U;ce&&(S=S?S.concat(ce):ce),L==null?(i(I,q,k),i(G,q,k),P(U.children||[],q,G,ie,ee,re,S,v)):V>0&&V&64&&X&&L.dynamicChildren?(M(L.dynamicChildren,X,q,ie,ee,re,S),(U.key!=null||ie&&U===ie.subTree)&&Uc(L,U,!0)):j(L,U,q,G,ie,ee,re,S,v)},B=(L,U,q,k,ie,ee,re,S,v)=>{U.slotScopeIds=S,L==null?U.shapeFlag&512?ie.ctx.activate(U,q,k,re,v):J(U,q,k,ie,ee,re,v):se(L,U,v)},J=(L,U,q,k,ie,ee,re)=>{const S=L.component=km(L,k,ie);if(ga(L)&&(S.ctx.renderer=ze),Vm(S),S.asyncDep){if(ie&&ie.registerDep(S,Z),!L.el){const v=S.subTree=ye(_n);d(null,v,U,q)}}else Z(S,L,U,q,ie,ee,re)},se=(L,U,q)=>{const k=U.component=L.component;if(qp(L,U,q))if(k.asyncDep&&!k.asyncResolved){te(k,U,q);return}else k.next=U,Hp(k.update),k.effect.dirty=!0,k.update();else U.el=L.el,k.vnode=U},Z=(L,U,q,k,ie,ee,re)=>{const S=()=>{if(L.isMounted){let{next:G,bu:V,u:X,parent:ce,vnode:oe}=L;{const Xe=td(L);if(Xe){G&&(G.el=oe.el,te(L,G,re)),Xe.asyncDep.then(()=>{L.isUnmounted||S()});return}}let ue=G,Ee;Ui(L,!1),G?(G.el=oe.el,te(L,G,re)):G=oe,V&&Da(V),(Ee=G.props&&G.props.onVnodeBeforeUpdate)&&Dn(Ee,ce,G,oe),Ui(L,!0);const ae=Na(L),me=L.subTree;L.subTree=ae,_(me,ae,f(me.el),ve(me),L,ie,ee),G.el=ae.el,ue===null&&Yp(L,ae.el),X&&Qt(X,ie),(Ee=G.props&&G.props.onVnodeUpdated)&&Qt(()=>Dn(Ee,ce,G,oe),ie)}else{let G;const{el:V,props:X}=U,{bm:ce,m:oe,parent:ue}=L,Ee=ys(U);if(Ui(L,!1),ce&&Da(ce),!Ee&&(G=X&&X.onVnodeBeforeMount)&&Dn(G,ue,U),Ui(L,!0),V&&D){const ae=()=>{L.subTree=Na(L),D(V,L.subTree,L,ie,null)};Ee?U.type.__asyncLoader().then(()=>!L.isUnmounted&&ae()):ae()}else{const ae=L.subTree=Na(L);_(null,ae,q,k,L,ie,ee),U.el=ae.el}if(oe&&Qt(oe,ie),!Ee&&(G=X&&X.onVnodeMounted)){const ae=U;Qt(()=>Dn(G,ue,ae),ie)}(U.shapeFlag&256||ue&&ys(ue.vnode)&&ue.vnode.shapeFlag&256)&&L.a&&Qt(L.a,ie),L.isMounted=!0,U=q=k=null}},v=L.effect=new Sc(S,pn,()=>Lc(I),L.scope),I=L.update=()=>{v.dirty&&v.run()};I.id=L.uid,Ui(L,!0),I()},te=(L,U,q)=>{U.component=L;const k=L.vnode.props;L.vnode=U,L.next=null,bm(L,U.props,k,q),Tm(L,U.children,q),or(),gu(L),ar()},j=(L,U,q,k,ie,ee,re,S,v=!1)=>{const I=L&&L.children,G=L?L.shapeFlag:0,V=U.children,{patchFlag:X,shapeFlag:ce}=U;if(X>0){if(X&128){be(I,V,q,k,ie,ee,re,S,v);return}else if(X&256){ge(I,V,q,k,ie,ee,re,S,v);return}}ce&8?(G&16&&pe(I,ie,ee),V!==I&&u(q,V)):G&16?ce&16?be(I,V,q,k,ie,ee,re,S,v):pe(I,ie,ee,!0):(G&8&&u(q,""),ce&16&&P(V,q,k,ie,ee,re,S,v))},ge=(L,U,q,k,ie,ee,re,S,v)=>{L=L||Or,U=U||Or;const I=L.length,G=U.length,V=Math.min(I,G);let X;for(X=0;X<V;X++){const ce=U[X]=v?vi(U[X]):Nn(U[X]);_(L[X],ce,q,null,ie,ee,re,S,v)}I>G?pe(L,ie,ee,!0,!1,V):P(U,q,k,ie,ee,re,S,v,V)},be=(L,U,q,k,ie,ee,re,S,v)=>{let I=0;const G=U.length;let V=L.length-1,X=G-1;for(;I<=V&&I<=X;){const ce=L[I],oe=U[I]=v?vi(U[I]):Nn(U[I]);if(Xi(ce,oe))_(ce,oe,q,null,ie,ee,re,S,v);else break;I++}for(;I<=V&&I<=X;){const ce=L[V],oe=U[X]=v?vi(U[X]):Nn(U[X]);if(Xi(ce,oe))_(ce,oe,q,null,ie,ee,re,S,v);else break;V--,X--}if(I>V){if(I<=X){const ce=X+1,oe=ce<G?U[ce].el:k;for(;I<=X;)_(null,U[I]=v?vi(U[I]):Nn(U[I]),q,oe,ie,ee,re,S,v),I++}}else if(I>X)for(;I<=V;)Pe(L[I],ie,ee,!0),I++;else{const ce=I,oe=I,ue=new Map;for(I=oe;I<=X;I++){const Ae=U[I]=v?vi(U[I]):Nn(U[I]);Ae.key!=null&&ue.set(Ae.key,I)}let Ee,ae=0;const me=X-oe+1;let Xe=!1,Ue=0;const xe=new Array(me);for(I=0;I<me;I++)xe[I]=0;for(I=ce;I<=V;I++){const Ae=L[I];if(ae>=me){Pe(Ae,ie,ee,!0);continue}let Ke;if(Ae.key!=null)Ke=ue.get(Ae.key);else for(Ee=oe;Ee<=X;Ee++)if(xe[Ee-oe]===0&&Xi(Ae,U[Ee])){Ke=Ee;break}Ke===void 0?Pe(Ae,ie,ee,!0):(xe[Ke-oe]=I+1,Ke>=Ue?Ue=Ke:Xe=!0,_(Ae,U[Ke],q,null,ie,ee,re,S,v),ae++)}const Ne=Xe?Pm(xe):Or;for(Ee=Ne.length-1,I=me-1;I>=0;I--){const Ae=oe+I,Ke=U[Ae],x=Ae+1<G?U[Ae+1].el:k;xe[I]===0?_(null,Ke,q,x,ie,ee,re,S,v):Xe&&(Ee<0||I!==Ne[Ee]?Se(Ke,q,x,2):Ee--)}}},Se=(L,U,q,k,ie=null)=>{const{el:ee,type:re,transition:S,children:v,shapeFlag:I}=L;if(I&6){Se(L.component.subTree,U,q,k);return}if(I&128){L.suspense.move(U,q,k);return}if(I&64){re.move(L,U,q,ze);return}if(re===Nt){i(ee,U,q);for(let V=0;V<v.length;V++)Se(v[V],U,q,k);i(L.anchor,U,q);return}if(re===Fo){y(L,U,q);return}if(k!==2&&I&1&&S)if(k===0)S.beforeEnter(ee),i(ee,U,q),Qt(()=>S.enter(ee),ie);else{const{leave:V,delayLeave:X,afterLeave:ce}=S,oe=()=>i(ee,U,q),ue=()=>{V(ee,()=>{oe(),ce&&ce()})};X?X(ee,oe,ue):ue()}else i(ee,U,q)},Pe=(L,U,q,k=!1,ie=!1)=>{const{type:ee,props:re,ref:S,children:v,dynamicChildren:I,shapeFlag:G,patchFlag:V,dirs:X}=L;if(S!=null&&Ll(S,null,q,L,!0),G&256){U.ctx.deactivate(L);return}const ce=G&1&&X,oe=!ys(L);let ue;if(oe&&(ue=re&&re.onVnodeBeforeUnmount)&&Dn(ue,U,L),G&6)fe(L.component,q,k);else{if(G&128){L.suspense.unmount(q,k);return}ce&&Di(L,null,U,"beforeUnmount"),G&64?L.type.remove(L,U,q,ie,ze,k):I&&(ee!==Nt||V>0&&V&64)?pe(I,U,q,!1,!0):(ee===Nt&&V&384||!ie&&G&16)&&pe(v,U,q),k&&Ze(L)}(oe&&(ue=re&&re.onVnodeUnmounted)||ce)&&Qt(()=>{ue&&Dn(ue,U,L),ce&&Di(L,null,U,"unmounted")},q)},Ze=L=>{const{type:U,el:q,anchor:k,transition:ie}=L;if(U===Nt){ne(q,k);return}if(U===Fo){T(L);return}const ee=()=>{r(q),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(L.shapeFlag&1&&ie&&!ie.persisted){const{leave:re,delayLeave:S}=ie,v=()=>re(q,ee);S?S(L.el,ee,v):v()}else ee()},ne=(L,U)=>{let q;for(;L!==U;)q=h(L),r(L),L=q;r(U)},fe=(L,U,q)=>{const{bum:k,scope:ie,update:ee,subTree:re,um:S}=L;k&&Da(k),ie.stop(),ee&&(ee.active=!1,Pe(re,L,U,q)),S&&Qt(S,U),Qt(()=>{L.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},pe=(L,U,q,k=!1,ie=!1,ee=0)=>{for(let re=ee;re<L.length;re++)Pe(L[re],U,q,k,ie)},ve=L=>L.shapeFlag&6?ve(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let Ie=!1;const Ve=(L,U,q)=>{L==null?U._vnode&&Pe(U._vnode,null,null,!0):_(U._vnode||null,L,U,null,null,null,q),Ie||(Ie=!0,gu(),Nf(),Ie=!1),U._vnode=L},ze={p:_,um:Pe,m:Se,r:Ze,mt:J,mc:P,pc:j,pbc:M,n:ve,o:n};let it,D;return{render:Ve,hydrate:it,createApp:Mm(Ve,it)}}function Ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uc(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vi(r[s]),a.el=o.el),t||Uc(o,a)),a.type===va&&(a.el=o.el)}}function Pm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function td(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:td(e)}const Lm=n=>n.__isTeleport,bs=n=>n&&(n.disabled||n.disabled===""),Au=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Cu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Il=(n,e)=>{const t=n&&n.to;return bt(t)?e?e(t):null:t},Im={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:g,createText:_,createComment:m}}=l,d=bs(e.props);let{shapeFlag:w,children:y,dynamicChildren:T}=e;if(n==null){const O=e.el=_(""),A=e.anchor=_("");p(O,t,i),p(A,t,i);const C=e.target=Il(e.props,g),P=e.targetAnchor=_("");C&&(p(P,C),o==="svg"||Au(C)?o="svg":(o==="mathml"||Cu(C))&&(o="mathml"));const b=(M,R)=>{w&16&&u(y,M,R,r,s,o,a,c)};d?b(t,A):C&&b(C,P)}else{e.el=n.el;const O=e.anchor=n.anchor,A=e.target=n.target,C=e.targetAnchor=n.targetAnchor,P=bs(n.props),b=P?t:A,M=P?O:C;if(o==="svg"||Au(A)?o="svg":(o==="mathml"||Cu(A))&&(o="mathml"),T?(h(n.dynamicChildren,T,b,r,s,o,a),Uc(n,e,!0)):c||f(n,e,b,M,r,s,o,a,!1),d)P?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ks(e,t,O,l,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const R=e.target=Il(e.props,g);R&&Ks(e,R,null,l,0)}else P&&Ks(e,A,C,l,1)}id(e)},remove(n,e,t,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=n;if(f&&s(u),o&&s(l),a&16){const p=o||!bs(h);for(let g=0;g<c.length;g++){const _=c[g];r(_,e,t,p,!!_.dynamicChildren)}}},move:Ks,hydrate:Dm};function Ks(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||bs(u))&&c&16)for(let h=0;h<l.length;h++)r(l[h],e,t,2);f&&i(a,e,t)}function Dm(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Il(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(bs(e.props))e.anchor=l(o(n),e,a(n),t,i,r,s),e.targetAnchor=f;else{e.anchor=o(n);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,t,i,r,s)}id(e)}return e.anchor&&o(e.anchor)}const nd=Im;function id(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const Nt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Es=[];let Tn=null;function Qe(n=!1){Es.push(Tn=n?null:[])}function Um(){Es.pop(),Tn=Es[Es.length-1]||null}let Is=1;function Ru(n){Is+=n}function rd(n){return n.dynamicChildren=Is>0?Tn||Or:null,Um(),Is>0&&Tn&&Tn.push(n),n}function ct(n,e,t,i,r,s){return rd(he(n,e,t,i,r,s,!0))}function nr(n,e,t,i,r){return rd(ye(n,e,t,i,r,!0))}function Ko(n){return n?n.__v_isVNode===!0:!1}function Xi(n,e){return n.type===e.type&&n.key===e.key}const xa="__vInternal",sd=({key:n})=>n??null,Oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Jt(n)||$e(n)?{i:Zt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sd(e),ref:e&&Oo(e),scopeId:ma,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zt};return a?(Fc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=bt(t)?8:16),Is>0&&!o&&Tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Tn.push(c),c}const ye=Nm;function Nm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$p)&&(n=_n),Ko(n)){const a=Ci(n,e,!0);return t&&Fc(a,t),Is>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(jm(n)&&(n=n.__vccOpts),e){e=Fm(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=zn(a)),pt(c)&&(Cf(c)&&!Ge(c)&&(c=Rt({},c)),e.style=Ji(c))}const o=bt(n)?1:Kp(n)?128:Lm(n)?64:pt(n)?4:$e(n)?2:0;return he(n,e,t,i,r,o,s,!0)}function Fm(n){return n?Cf(n)||xa in n?Rt({},n):n:null}function Ci(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Om(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&sd(a),ref:e&&e.ref?t&&r?Ge(r)?r.concat(Oo(e)):[r,Oo(e)]:Oo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ci(n.ssContent),ssFallback:n.ssFallback&&Ci(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Nc(n=" ",e=0){return ye(va,null,n,e)}function od(n,e){const t=ye(Fo,null,n);return t.staticCount=e,t}function An(n="",e=!1){return e?(Qe(),nr(_n,null,n)):ye(_n,null,n)}function Nn(n){return n==null||typeof n=="boolean"?ye(_n):Ge(n)?ye(Nt,null,n.slice()):typeof n=="object"?vi(n):ye(va,null,String(n))}function vi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ci(n)}function Fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Fc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(xa in e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),i&64?(t=16,e=[Nc(e)]):t=8);n.children=e,n.shapeFlag|=t}function Om(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zn([e.class,i.class]));else if(r==="style")e.style=Ji([e.style,i.style]);else if(ca(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(n,e,t,i=null){gn(n,e,7,[t,i])}const Bm=$f();let zm=0;function km(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bm,s={uid:zm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zf(i,r),emitsOptions:Of(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wp.bind(null,s),n.ce&&n.ce(s),s}let Wt=null;const Hm=()=>Wt||Zt;let Zo,Dl;{const n=ff(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Zo=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),Dl=e("__VUE_SSR_SETTERS__",t=>Ma=t)}const zs=n=>{const e=Wt;return Zo(n),n.scope.on(),()=>{n.scope.off(),Zo(e)}},Pu=()=>{Wt&&Wt.scope.off(),Zo(null)};function ad(n){return n.vnode.shapeFlag&4}let Ma=!1;function Vm(n,e=!1){e&&Dl(e);const{props:t,children:i}=n.vnode,r=ad(n);Sm(n,t,r,e),wm(n,i);const s=r?Gm(n,e):void 0;return e&&Dl(!1),s}function Gm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Rf(new Proxy(n.ctx,dm));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Xm(n):null,s=zs(n);or();const o=bi(i,n,0,[n.props,r]);if(ar(),s(),lf(o)){if(o.then(Pu,Pu),e)return o.then(a=>{Lu(n,a,e)}).catch(a=>{da(a,n,0)});n.asyncDep=o}else Lu(n,o,e)}else ld(n,e)}function Lu(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=If(e)),ld(n,t)}let Iu;function ld(n,e,t){const i=n.type;if(!n.render){if(!e&&Iu&&!i.render){const r=i.template||Ic(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Rt(Rt({isCustomElement:s,delimiters:a},o),c);i.render=Iu(r,l)}}n.render=i.render||pn}{const r=zs(n);or();try{pm(n)}finally{ar(),r()}}}function Wm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return tn(n,"get","$attrs"),e[t]}}))}function Xm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Wm(n)},slots:n.slots,emit:n.emit,expose:e}}function Oc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(If(Rf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ss)return Ss[t](n)},has(e,t){return t in e||t in Ss}}))}function jm(n){return $e(n)&&"__vccOpts"in n}const fn=(n,e)=>Ip(n,e,Ma);function tr(n,e,t){const i=arguments.length;return i===2?pt(e)&&!Ge(e)?Ko(e)?ye(n,null,[e]):ye(n,e):ye(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ko(t)&&(t=[t]),ye(n,e,t))}const qm="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ym="http://www.w3.org/2000/svg",$m="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,Du=xi&&xi.createElement("template"),Km={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?xi.createElementNS(Ym,n):e==="mathml"?xi.createElementNS($m,n):xi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>xi.createTextNode(n),createComment:n=>xi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Du.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Du.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ai="transition",as="animation",Ds=Symbol("_vtc"),Bc=(n,{slots:e})=>tr(im,Zm(n),e);Bc.displayName="Transition";const cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bc.props=Rt({},kf,cd);const Ni=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},Uu=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function Zm(n){const e={};for(const F in n)F in cd||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Jm(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:w,onEnterCancelled:y,onLeave:T,onLeaveCancelled:O,onBeforeAppear:A=d,onAppear:C=w,onAppearCancelled:P=y}=e,b=(F,B,J)=>{Fi(F,B?u:a),Fi(F,B?l:o),J&&J()},M=(F,B)=>{F._isLeaving=!1,Fi(F,f),Fi(F,p),Fi(F,h),B&&B()},R=F=>(B,J)=>{const se=F?C:w,Z=()=>b(B,F,J);Ni(se,[B,Z]),Nu(()=>{Fi(B,F?c:s),li(B,F?u:a),Uu(se)||Fu(B,i,_,Z)})};return Rt(e,{onBeforeEnter(F){Ni(d,[F]),li(F,s),li(F,o)},onBeforeAppear(F){Ni(A,[F]),li(F,c),li(F,l)},onEnter:R(!1),onAppear:R(!0),onLeave(F,B){F._isLeaving=!0;const J=()=>M(F,B);li(F,f),tg(),li(F,h),Nu(()=>{F._isLeaving&&(Fi(F,f),li(F,p),Uu(T)||Fu(F,i,m,J))}),Ni(T,[F,J])},onEnterCancelled(F){b(F,!1),Ni(y,[F])},onAppearCancelled(F){b(F,!0),Ni(P,[F])},onLeaveCancelled(F){M(F),Ni(O,[F])}})}function Jm(n){if(n==null)return null;if(pt(n))return[za(n.enter),za(n.leave)];{const e=za(n);return[e,e]}}function za(n){return tp(n)}function li(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ds]||(n[Ds]=new Set)).add(e)}function Fi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ds];t&&(t.delete(e),t.size||(n[Ds]=void 0))}function Nu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qm=0;function Fu(n,e,t,i){const r=n._endId=++Qm,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=eg(n,e);if(!o)return i();const l=o+"end";let u=0;const f=()=>{n.removeEventListener(l,h),s()},h=p=>{p.target===n&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),n.addEventListener(l,h)}function eg(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ai}Delay`),s=i(`${ai}Duration`),o=Ou(r,s),a=i(`${as}Delay`),c=i(`${as}Duration`),l=Ou(a,c);let u=null,f=0,h=0;e===ai?o>0&&(u=ai,f=o,h=s.length):e===as?l>0&&(u=as,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?ai:as:null,h=u?u===ai?s.length:c.length:0);const p=u===ai&&/\b(transform|all)(,|$)/.test(i(`${ai}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Ou(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Bu(t)+Bu(n[i])))}function Bu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function tg(){return document.body.offsetHeight}function ng(n,e,t){const i=n[Ds];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ig=Symbol("_vod"),rg=Symbol("");function sg(n,e,t){const i=n.style,r=i.display,s=bt(t);if(t&&!s){if(e&&!bt(e))for(const o in e)t[o]==null&&Ul(i,o,"");for(const o in t)Ul(i,o,t[o])}else if(s){if(e!==t){const o=i[rg];o&&(t+=";"+o),i.cssText=t}}else e&&n.removeAttribute("style");ig in n&&(i.display=r)}const zu=/\s*!important$/;function Ul(n,e,t){if(Ge(t))t.forEach(i=>Ul(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=og(n,e);zu.test(t)?n.setProperty(sr(i),t.replace(zu,""),"important"):n[i]=t}}const ku=["Webkit","Moz","ms"],ka={};function og(n,e){const t=ka[e];if(t)return t;let i=Xr(e);if(i!=="filter"&&i in n)return ka[e]=i;i=hf(i);for(let r=0;r<ku.length;r++){const s=ku[r]+i;if(s in n)return ka[e]=s}return e}const Hu="http://www.w3.org/1999/xlink";function ag(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Hu,e.slice(6,e.length)):n.setAttributeNS(Hu,e,t);else{const s=ap(e);t==null||s&&!df(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function lg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=df(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function cg(n,e,t,i){n.addEventListener(e,t,i)}function ug(n,e,t,i){n.removeEventListener(e,t,i)}const Vu=Symbol("_vei");function hg(n,e,t,i,r=null){const s=n[Vu]||(n[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=fg(e);if(i){const l=s[e]=mg(i,r);cg(n,a,l,c)}else o&&(ug(n,a,o,c),s[e]=void 0)}}const Gu=/(?:Once|Passive|Capture)$/;function fg(n){let e;if(Gu.test(n)){e={};let i;for(;i=n.match(Gu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):sr(n.slice(2)),e]}let Ha=0;const dg=Promise.resolve(),pg=()=>Ha||(dg.then(()=>Ha=0),Ha=Date.now());function mg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;gn(gg(i,t.value),e,5,[i])};return t.value=n,t.attached=pg(),t}function gg(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_g=(n,e,t,i,r,s,o,a,c)=>{const l=r==="svg";e==="class"?ng(n,i,l):e==="style"?sg(n,t,i):ca(e)?xc(e)||hg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vg(n,e,i,l))?lg(n,e,i,s,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ag(n,e,i,l))};function vg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wu(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wu(e)&&bt(t)?!1:e in n}const xg=["ctrl","shift","alt","meta"],Mg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>xg.some(t=>n[`${t}Key`]&&!e.includes(t))},yg=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Mg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Sg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=sr(r.key);if(e.some(o=>o===s||Sg[o]===s))return n(r)})},Eg=Rt({patchProp:_g},Km);let Xu;function wg(){return Xu||(Xu=Am(Eg))}const Tg=(...n)=>{const e=wg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Cg(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,Ag(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ag(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cg(n){return bt(n)?document.querySelector(n):n}const ud=n=>(Qr("data-v-946e509c"),n=n(),es(),n),Rg={tabindex:"0",class:"activity-card group relative flex md:flex-row flex-col md:gap-0 gap-4 rounded-lg px-4 py-5 transition-all duration-300 hover:!opacity-100 lg:group-hover/card:opacity-40"},Pg={class:"date-label text-xs pt-1 md:w-[105px] shrink-0 uppercase tracking-widest"},Lg={class:"flex-1 pl-1 pr-2"},Ig=["href","target"],Dg={class:"card-title text-base font-semibold tracking-tight leading-snug"},Ug={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"link-arrow h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5","aria-hidden":"true"},Ng=ud(()=>he("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),Fg=[Ng],Og={class:"role-label text-xs mb-3 tracking-wide font-mono"},Bg=["innerHTML"],zg={class:"flex flex-wrap gap-2 mt-4"},kg=ud(()=>he("span",{class:"accent-bar"},null,-1)),Hg=kn({__name:"ActivityCard",props:{title:{},description:{},date:{},role:{},last:{type:Boolean},link:{}},setup(n){return(e,t)=>(Qe(),ct("div",Rg,[he("p",Pg,St(e.date),1),he("div",Lg,[he("a",{href:e.link,target:e.link?"_blank":void 0,class:"inline-flex items-center gap-2 group/link mb-1"},[he("h2",Dg,St(e.title),1),e.link?(Qe(),ct("svg",Ug,Fg)):An("",!0)],8,Ig),he("p",Og,St(e.role),1),he("p",{class:"description-text text-sm leading-relaxed font-light",innerHTML:e.description},null,8,Bg),he("div",zg,[jf(e.$slots,"default",{},void 0)])]),kg]))}}),Hn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ci=Hn(Hg,[["__scopeId","data-v-946e509c"]]),Vg={class:"skill-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs font-medium tracking-wide"},Gg=kn({__name:"Skill",props:{skill:{}},setup(n){return(e,t)=>(Qe(),ct("span",Vg,[jf(e.$slots,"default",{},void 0),Nc(" "+St(e.skill),1)]))}}),lt=Hn(Gg,[["__scopeId","data-v-f6f97114"]]),Wg={},Xg={tabindex:"1",class:"lg:mt-32 mb-20 px-10 lg:pr-2 flex flex-col gap-4"},jg=od('<p class="text-base font-light leading-relaxed text-ash"> I&#39;m a <strong>Software Engineer and Master&#39;s student at the University of Minho</strong>, currently specializing in <strong>Distributed</strong> and <strong>Intelligent</strong> Systems. </p><p class="text-base font-light leading-relaxed text-ash"> With a passion for <strong>technology</strong>, <strong>innovation</strong> and learning, I&#39;m dedicated to creating solutions that drive progress and make an impact. </p><p class="text-base font-light leading-relaxed text-ash"> I am currently writing my thesis while actively expanding my knowledge of database engineering. My focus is on storage engines, distributed consistency and replication, guided by Alex Petrov&#39;s <strong>Database Internals</strong>. </p>',3),qg=[jg];function Yg(n,e){return Qe(),ct("article",Xg,qg)}const $g=Hn(Wg,[["render",Yg]]),zc=n=>(Qr("data-v-76557ec8"),n=n(),es(),n),Kg=["aria-label"],Zg={class:"flex items-start justify-between mb-3"},Jg={class:"date-label"},Qg=zc(()=>he("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),e_=[Qg],t_={class:"card-title mb-1"},n_={class:"role-label mb-3"},i_=["innerHTML"],r_={class:"flex flex-wrap gap-1.5 mt-auto"},s_={key:0,class:"skill-badge opacity-50"},o_={key:0,class:"explore-hint"},a_=zc(()=>he("span",{class:"explore-text"},"⬡ Explore Architecture",-1)),l_=[a_],c_=zc(()=>he("span",{class:"accent-bar"},null,-1)),u_=kn({__name:"ProjectCard",props:{project:{}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=Ot(null);function s(){var c;if(!t.project.detail){t.project.link&&window.open(t.project.link,"_blank");return}const a=(c=r.value)==null?void 0:c.getBoundingClientRect();a&&i("open",t.project,a)}function o(a){a.stopPropagation(),t.project.link&&window.open(t.project.link,"_blank")}return(a,c)=>(Qe(),ct("div",{ref_key:"cardRef",ref:r,tabindex:"0",class:zn(["project-card",{"has-detail":!!a.project.detail}]),onClick:s,onKeydown:bg(s,["enter"]),role:"button","aria-label":`Open ${a.project.title}`},[he("div",Zg,[he("span",Jg,St(a.project.date),1),a.project.link?(Qe(),ct("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"link-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5","aria-hidden":"true",onClick:o},e_)):An("",!0)]),he("h2",t_,St(a.project.title),1),he("p",n_,St(a.project.role),1),he("p",{class:"description-text line-clamp-3 mb-4",innerHTML:a.project.description},null,8,i_),he("div",r_,[(Qe(!0),ct(Nt,null,Ls(a.project.skills.slice(0,5),l=>(Qe(),ct("span",{key:l,class:"skill-badge"},St(l),1))),128)),a.project.skills.length>5?(Qe(),ct("span",s_,"+"+St(a.project.skills.length-5),1)):An("",!0)]),a.project.detail?(Qe(),ct("div",o_,l_)):An("",!0),c_],42,Kg))}}),h_=Hn(u_,[["__scopeId","data-v-76557ec8"]]),hd=n=>(Qr("data-v-db60db47"),n=n(),es(),n),f_=["href","target"],d_={class:"flex items-start justify-between gap-2"},p_={class:"flex-1 min-w-0"},m_={class:"cert-date font-mono text-xs tracking-widest uppercase mb-1"},g_={class:"cert-title text-sm font-semibold leading-snug"},__={class:"cert-issuer font-mono text-xs mt-1"},v_={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"cert-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5","aria-hidden":"true"},x_=hd(()=>he("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),M_=[x_],y_={class:"flex flex-wrap gap-1.5 mt-auto"},S_=hd(()=>he("span",{class:"cert-accent-bar"},null,-1)),b_=kn({__name:"CertCard",props:{title:{},issuer:{},date:{},link:{},skills:{}},setup(n){return(e,t)=>(Qe(),ct("a",{href:e.link,target:e.link?"_blank":void 0,class:"cert-card group flex flex-col gap-3 p-5 rounded-lg transition-all duration-300"},[he("div",d_,[he("div",p_,[he("p",m_,St(e.date),1),he("h3",g_,St(e.title),1),he("p",__,St(e.issuer),1)]),e.link?(Qe(),ct("svg",v_,M_)):An("",!0)]),he("div",y_,[(Qe(!0),ct(Nt,null,Ls(e.skills,i=>(Qe(),ct("span",{key:i,class:"skill-tag"},St(i),1))),128))]),S_],8,f_))}}),ls=Hn(b_,[["__scopeId","data-v-db60db47"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="166",hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E_=0,ju=1,w_=2,fd=1,T_=2,$n=3,Ri=0,en=1,Bn=2,Ei=0,Hr=1,Nl=2,qu=3,Yu=4,A_=5,ji=100,C_=101,R_=102,P_=103,L_=104,I_=200,D_=201,U_=202,N_=203,Fl=204,Ol=205,F_=206,O_=207,B_=208,z_=209,k_=210,H_=211,V_=212,G_=213,W_=214,X_=0,j_=1,q_=2,Jo=3,Y_=4,$_=5,K_=6,Z_=7,Hc=0,J_=1,Q_=2,wi=0,e0=1,t0=2,n0=3,i0=4,r0=5,s0=6,o0=7,dd=300,qr=301,Yr=302,Bl=303,zl=304,ya=306,kl=1e3,$i=1001,Hl=1002,mn=1003,a0=1004,Zs=1005,En=1006,Va=1007,Ki=1008,ei=1009,pd=1010,md=1011,Us=1012,Vc=1013,ir=1014,Kn=1015,ks=1016,Gc=1017,Wc=1018,$r=1020,gd=35902,_d=1021,vd=1022,Cn=1023,xd=1024,Md=1025,Vr=1026,Kr=1027,yd=1028,Xc=1029,Sd=1030,jc=1031,qc=1033,Bo=33776,zo=33777,ko=33778,Ho=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,jl=36196,ql=37492,Yl=37496,$l=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Vo=36492,cc=36494,uc=36495,bd=36283,hc=36284,fc=36285,dc=36286,l0=3200,c0=3201,Yc=0,u0=1,yi="",Un="srgb",Li="srgb-linear",$c="display-p3",Sa="display-p3-linear",Qo="linear",ht="srgb",ea="rec709",ta="p3",dr=7680,$u=519,h0=512,f0=513,d0=514,Ed=515,p0=516,m0=517,g0=518,_0=519,pc=35044,Ku="300 es",Zn=2e3,na=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zu=1234567;const Gr=Math.PI/180,Ns=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function Kc(n,e){return(n%e+e)%e}function v0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function x0(n,e,t){return n!==e?(t-n)/(e-n):0}function ws(n,e,t){return(1-t)*n+t*e}function M0(n,e,t,i){return ws(n,e,1-Math.exp(-t*i))}function y0(n,e=1){return e-Math.abs(Kc(n,e*2)-e)}function S0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function b0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function E0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function w0(n,e){return n+Math.random()*(e-n)}function T0(n){return n*(.5-Math.random())}function A0(n){n!==void 0&&(Zu=n);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(n){return n*Gr}function R0(n){return n*Ns}function P0(n){return(n&n-1)===0&&n!==0}function L0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fs={DEG2RAD:Gr,RAD2DEG:Ns,generateUUID:Qn,clamp:Vt,euclideanModulo:Kc,mapLinear:v0,inverseLerp:x0,lerp:ws,damp:M0,pingpong:y0,smoothstep:S0,smootherstep:b0,randInt:E0,randFloat:w0,randFloatSpread:T0,seededRandom:A0,degToRad:C0,radToDeg:R0,isPowerOfTwo:P0,ceilPowerOfTwo:L0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:D0,normalize:ot,denormalize:wn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],w=r[1],y=r[4],T=r[7],O=r[2],A=r[5],C=r[8];return s[0]=o*_+a*w+c*O,s[3]=o*m+a*y+c*A,s[6]=o*d+a*T+c*C,s[1]=l*_+u*w+f*O,s[4]=l*m+u*y+f*A,s[7]=l*d+u*T+f*C,s[2]=h*_+p*w+g*O,s[5]=h*m+p*y+g*A,s[8]=h*d+p*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Ye;function wd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=Os("canvas");return n.style.display="block",n}const Ju={};function Zc(n){n in Ju||(Ju[n]=!0,console.warn(n))}function N0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Qu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[Li]:{transfer:Qo,primaries:ea,toReference:n=>n,fromReference:n=>n},[Un]:{transfer:ht,primaries:ea,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Sa]:{transfer:Qo,primaries:ta,toReference:n=>n.applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Qu)},[$c]:{transfer:ht,primaries:ta,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Qu).convertLinearToSRGB()}},F0=new Set([Li,Sa]),at={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!F0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Js[e].toReference,r=Js[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Js[n].primaries},getTransfer:function(n){return n===yi?Qo:Js[n].transfer}};function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pr;class O0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=Os("canvas")),pr.width=e.width,pr.height=e.height;const i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xa(r[o].image)):s.push(Xa(r[o]))}else s=Xa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0;class Xt extends cr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=$i,r=$i,s=En,o=Ki,a=Cn,c=ei,l=Xt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Qn(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=dd;Xt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,T=(p+1)/2,O=(d+1)/2,A=(u+h)/4,C=(f+_)/4,P=(g+m)/4;return y>T&&y>O?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):T>O?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=A/r,s=P/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=C/s,r=P/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(h-u)/w,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k0 extends cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends k0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ad extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==p||u!==g){let m=1-a;const d=c*h+l*p+u*g+f*_,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const O=Math.sqrt(y),A=Math.atan2(O,d*w);m=Math.sin(m*A)/O,a=Math.sin(a*A)/O}const T=a*w;if(c=c*m+h*T,l=l*m+p*T,u=u*m+g*T,f=f*m+_*T,m===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=O,l*=O,u*=O,f*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new N,th=new Ht;class ns{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),eo.subVectors(this.max,cs),mr.subVectors(e.a,cs),gr.subVectors(e.b,cs),_r.subVectors(e.c,cs),ui.subVectors(gr,mr),hi.subVectors(_r,gr),Oi.subVectors(mr,_r);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Oi.z,Oi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Oi.z,0,-Oi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Oi.y,Oi.x,0];return!qa(t,mr,gr,_r,eo)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,mr,gr,_r,eo))?!1:(to.crossVectors(ui,hi),t=[to.x,to.y,to.z],qa(t,mr,gr,_r,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,Qs=new ns,mr=new N,gr=new N,_r=new N,ui=new N,hi=new N,Oi=new N,cs=new N,eo=new N,to=new N,Bi=new N;function qa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bi.fromArray(n,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const V0=new ns,us=new N,Ya=new N;class is{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Ya)),this.expandByPoint(us.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new N,$a=new N,no=new N,fi=new N,Ka=new N,io=new N,Za=new N;class ba{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$a.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),fi.copy(this.origin).sub($a);const s=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=fi.dot(this.direction),c=-fi.dot(no),l=fi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($a).addScaledVector(no,h),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){Ka.subVectors(t,e),io.subVectors(i,e),Za.crossVectors(Ka,io);let o=this.direction.dot(Za),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const c=a*this.direction.dot(io.crossVectors(fi,io));if(c<0)return null;const l=a*this.direction.dot(Ka.cross(fi));if(l<0||c+l>o)return null;const u=-a*fi.dot(Za);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G0,e,W0)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),di.crossVectors(i,sn),di.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),di.crossVectors(i,sn)),di.normalize(),ro.crossVectors(sn,di),r[0]=di.x,r[4]=ro.x,r[8]=sn.x,r[1]=di.y,r[5]=ro.y,r[9]=sn.y,r[2]=di.z,r[6]=ro.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],y=i[7],T=i[11],O=i[15],A=r[0],C=r[4],P=r[8],b=r[12],M=r[1],R=r[5],F=r[9],B=r[13],J=r[2],se=r[6],Z=r[10],te=r[14],j=r[3],ge=r[7],be=r[11],Se=r[15];return s[0]=o*A+a*M+c*J+l*j,s[4]=o*C+a*R+c*se+l*ge,s[8]=o*P+a*F+c*Z+l*be,s[12]=o*b+a*B+c*te+l*Se,s[1]=u*A+f*M+h*J+p*j,s[5]=u*C+f*R+h*se+p*ge,s[9]=u*P+f*F+h*Z+p*be,s[13]=u*b+f*B+h*te+p*Se,s[2]=g*A+_*M+m*J+d*j,s[6]=g*C+_*R+m*se+d*ge,s[10]=g*P+_*F+m*Z+d*be,s[14]=g*b+_*B+m*te+d*Se,s[3]=w*A+y*M+T*J+O*j,s[7]=w*C+y*R+T*se+O*ge,s[11]=w*P+y*F+T*Z+O*be,s[15]=w*b+y*B+T*te+O*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*p-i*c*p)+_*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-t*c*f+t*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],w=f*m*l-_*h*l+_*c*p-a*m*p-f*c*d+a*h*d,y=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,T=u*_*l-g*f*l+g*a*p-o*_*p-u*a*d+o*f*d,O=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,A=t*w+i*y+r*T+s*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*d+i*c*d)*C,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*p-i*c*p)*C,e[4]=y*C,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*C,e[8]=T*C,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*d-t*f*d)*C,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*C,e[12]=O*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,w=c*l,y=c*u,T=c*f,O=i.x,A=i.y,C=i.z;return r[0]=(1-(_+d))*O,r[1]=(p+T)*O,r[2]=(g-y)*O,r[3]=0,r[4]=(p-T)*A,r[5]=(1-(h+d))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+y)*C,r[9]=(m-w)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/o,f=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Zn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Zn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===na)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Zn){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*l,p=(i+r)*u;let g,_;if(a===Zn)g=(o+s)*f,_=-2*f;else if(a===na)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vr=new N,yn=new dt,G0=new N(0,0,0),W0=new N(1,1,1),di=new N,ro=new N,sn=new N,nh=new dt,ih=new Ht;class Pn{constructor(e=0,t=0,i=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X0=0;const rh=new N,xr=new Ht,Xn=new dt,so=new N,hs=new N,j0=new N,q0=new Ht,sh=new N(1,0,0),oh=new N(0,1,0),ah=new N(0,0,1),lh={type:"added"},Y0={type:"removed"},Mr={type:"childadded",child:null},Ja={type:"childremoved",child:null};class At extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new N,t=new Pn,i=new Ht,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(hs,so,this.up):Xn.lookAt(so,hs,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Xn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,j0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new N(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new N,jn=new N,Qa=new N,qn=new N,yr=new N,Sr=new N,ch=new N,el=new N,tl=new N,nl=new N;class dn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),jn.subVectors(i,t),Qa.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(jn),c=Sn.dot(Qa),l=jn.dot(jn),u=jn.dot(Qa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),jn.subVectors(e,t),Sn.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Sn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;yr.subVectors(r,i),Sr.subVectors(s,i),el.subVectors(e,i);const c=yr.dot(el),l=Sr.dot(el);if(c<=0&&l<=0)return t.copy(i);tl.subVectors(e,r);const u=yr.dot(tl),f=Sr.dot(tl);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(yr,o);nl.subVectors(e,s);const p=yr.dot(nl),g=Sr.dot(nl);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Sr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ch.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(ch,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(yr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Kc(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=il(o,s,e+1/3),this.g=il(o,s,e),this.b=il(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return at.fromWorkingColorSpace(kt.copy(this),e),Math.round(Vt(kt.r*255,0,255))*65536+Math.round(Vt(kt.g*255,0,255))*256+Math.round(Vt(kt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Un){at.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(oo);const i=ws(pi.h,oo.h,t),r=ws(pi.s,oo.s,t),s=ws(pi.l,oo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new je;je.NAMES=Rd;let $0=0;class Ln extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Hr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ea extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new N,ao=new De;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class Pd extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ld extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let K0=0;const un=new dt,rl=new At,br=new N,on=new ns,fs=new ns,Ut=new N;class Pt extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Ld:Pd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(on.min,fs.min),on.expandByPoint(Ut),Ut.addVectors(on.max,fs.max),on.expandByPoint(Ut)):(on.expandByPoint(fs.min),on.expandByPoint(fs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ut.fromBufferAttribute(a,l),c&&(br.fromBufferAttribute(e,l),Ut.add(br)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new N,c[P]=new N;const l=new N,u=new N,f=new N,h=new De,p=new De,g=new De,_=new N,m=new N;function d(P,b,M){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(l),f.sub(l),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[b].add(_),a[M].add(_),c[P].add(m),c[b].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,b=w.length;P<b;++P){const M=w[P],R=M.start,F=M.count;for(let B=R,J=R+F;B<J;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new N,T=new N,O=new N,A=new N;function C(P){O.fromBufferAttribute(r,P),A.copy(O);const b=a[P];y.copy(b),y.sub(O.multiplyScalar(O.dot(b))).normalize(),T.crossVectors(A,b);const R=T.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,b=w.length;P<b;++P){const M=w[P],R=M.start,F=M.count;for(let B=R,J=R+F;B<J;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new dt,zi=new ba,lo=new is,hh=new N,Er=new N,wr=new N,Tr=new N,sl=new N,co=new N,uo=new De,ho=new De,fo=new De,fh=new N,dh=new N,ph=new N,po=new N,mo=new N;class Bt extends At{constructor(e=new Pt,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){co.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(sl.fromBufferAttribute(f,e),o?co.addScaledVector(sl,u):co.addScaledVector(sl.sub(t),u))}t.add(co)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(lo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(lo,hh)===null||zi.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(uh.copy(s).invert(),zi.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,O=y;T<O;T+=3){const A=a.getX(T),C=a.getX(T+1),P=a.getX(T+2);r=go(this,d,e,i,l,u,f,A,C,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);r=go(this,o,e,i,l,u,f,w,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,O=y;T<O;T+=3){const A=T,C=T+1,P=T+2;r=go(this,d,e,i,l,u,f,A,C,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=m,y=m+1,T=m+2;r=go(this,o,e,i,l,u,f,w,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Z0(n,e,t,i,r,s,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ri,a),c===null)return null;mo.copy(a),mo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:n}}function go(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Er),n.getVertexPosition(c,wr),n.getVertexPosition(l,Tr);const u=Z0(n,e,t,i,Er,wr,Tr,po);if(u){r&&(uo.fromBufferAttribute(r,a),ho.fromBufferAttribute(r,c),fo.fromBufferAttribute(r,l),u.uv=dn.getInterpolation(po,Er,wr,Tr,uo,ho,fo,new De)),s&&(uo.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,c),fo.fromBufferAttribute(s,l),u.uv1=dn.getInterpolation(po,Er,wr,Tr,uo,ho,fo,new De)),o&&(fh.fromBufferAttribute(o,a),dh.fromBufferAttribute(o,c),ph.fromBufferAttribute(o,l),u.normal=dn.getInterpolation(po,Er,wr,Tr,fh,dh,ph,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};dn.getNormal(Er,wr,Tr,f.normal),u.face=f}return u}class rs extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function g(_,m,d,w,y,T,O,A,C,P,b){const M=T/C,R=O/P,F=T/2,B=O/2,J=A/2,se=C+1,Z=P+1;let te=0,j=0;const ge=new N;for(let be=0;be<Z;be++){const Se=be*R-B;for(let Pe=0;Pe<se;Pe++){const Ze=Pe*M-F;ge[_]=Ze*w,ge[m]=Se*y,ge[d]=J,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[d]=A>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Pe/C),f.push(1-be/P),te+=1}}for(let be=0;be<P;be++)for(let Se=0;Se<C;Se++){const Pe=h+Se+se*be,Ze=h+Se+se*(be+1),ne=h+(Se+1)+se*(be+1),fe=h+(Se+1)+se*be;c.push(Pe,Ze,fe),c.push(Ze,ne,fe),j+=6}a.addGroup(p,j,b),p+=j,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Zr(n[t]);for(const r in i)e[r]=i[r]}return e}function J0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Q0={clone:Zr,merge:$t};var ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new N,mh=new De,gh=new De;class Kt extends Dd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Cr=1;class nv extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(Ar,Cr,e,t);r.layers=this.layers,this.add(r);const s=new Kt(Ar,Cr,e,t);s.layers=this.layers,this.add(s);const o=new Kt(Ar,Cr,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Ar,Cr,e,t);a.layers=this.layers,this.add(a);const c=new Kt(Ar,Cr,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Ar,Cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ud extends Xt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ud(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rs(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ei});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=En),new nv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ol=new N,rv=new N,sv=new Ye;class Mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ol.subVectors(i,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sv.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new is,_o=new N;class Jc{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-s,h-l,m-p,T-d).normalize(),i[1].setComponents(c+s,h+l,m+p,T+d).normalize(),i[2].setComponents(c+o,h+u,m+g,T+w).normalize(),i[3].setComponents(c-o,h-u,m-g,T-w).normalize(),i[4].setComponents(c-a,h-f,m-_,T-y).normalize(),t===Zn)i[5].setComponents(c+a,h+f,m+_,T+y).normalize();else if(t===na)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_o.x=r.normal.x>0?e.max.x:e.min.x,_o.y=r.normal.y>0?e.max.y:e.min.y,_o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ov(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),f.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Hs extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let y=0;y<l;y++){const T=y*f-s;g.push(T,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<a;w++){const y=w+l*d,T=w+l*(d+1),O=w+1+l*(d+1),A=w+1+l*d;p.push(y,T,A),p.push(T,O,A)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:hv,alphatest_pars_fragment:fv,aomap_fragment:dv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:vv,bsdfs:xv,iridescence_fragment:Mv,bumpmap_pars_fragment:yv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:wv,color_fragment:Tv,color_pars_fragment:Av,color_pars_vertex:Cv,color_vertex:Rv,common:Pv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Dv,displacementmap_vertex:Uv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:jv,fog_pars_fragment:qv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:$v,lights_lambert_fragment:Kv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Jv,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:vx,morphinstance_vertex:xx,morphcolor_vertex:Mx,morphnormal_vertex:yx,morphtarget_pars_vertex:Sx,morphtarget_vertex:bx,normal_fragment_begin:Ex,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:Cx,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Dx,opaque_fragment:Ux,packing:Nx,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:zx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:jx,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:$x,specularmap_fragment:Kx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:gM,equirect_frag:_M,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:MM,meshbasic_frag:yM,meshlambert_vert:SM,meshlambert_frag:bM,meshmatcap_vert:EM,meshmatcap_frag:wM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:CM,meshphong_frag:RM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:IM,meshtoon_frag:DM,points_vert:UM,points_frag:NM,shadow_vert:FM,shadow_frag:OM,sprite_vert:BM,sprite_frag:zM},Me={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:$t([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:$t([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:$t([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:$t([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:$t([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:$t([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:$t([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:$t([Me.lights,Me.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const vo={r:0,b:0,g:0},Hi=new Pn,kM=new dt;function HM(n,e,t,i,r,s,o){const a=new je(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function _(w){let y=!1;const T=g(w);T===null?d(a,c):T&&T.isColor&&(d(T,1),y=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===ya)?(u===void 0&&(u=new Bt(new rs(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Zr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Hi)),u.material.toneMapped=at.getTransfer(T.colorSpace)!==ht,(f!==T||h!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Bt(new Hs(2,2),new Pi({name:"BackgroundMaterial",uniforms:Zr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=T,h=T.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,y){w.getRGB(vo,Id(n)),i.buffers.color.setClear(vo.r,vo.g,vo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:_,addToRenderList:m}}function VM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,R,F,B,J){let se=!1;const Z=f(B,F,R);s!==Z&&(s=Z,l(s.object)),se=p(M,B,F,J),se&&g(M,B,F,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,T(M,R,F,B),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,F){const B=F.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let se=J[R.id];se===void 0&&(se={},J[R.id]=se);let Z=se[B];return Z===void 0&&(Z=h(c()),se[B]=Z),Z}function h(M){const R=[],F=[],B=[];for(let J=0;J<t;J++)R[J]=0,F[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,R,F,B){const J=s.attributes,se=R.attributes;let Z=0;const te=F.getAttributes();for(const j in te)if(te[j].location>=0){const be=J[j];let Se=se[j];if(Se===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),be===void 0||be.attribute!==Se||Se&&be.data!==Se.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function g(M,R,F,B){const J={},se=R.attributes;let Z=0;const te=F.getAttributes();for(const j in te)if(te[j].location>=0){let be=se[j];be===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(be=M.instanceColor));const Se={};Se.attribute=be,be&&be.data&&(Se.data=be.data),J[j]=Se,Z++}s.attributes=J,s.attributesNum=Z,s.index=B}function _(){const M=s.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const F=s.newAttributes,B=s.enabledAttributes,J=s.attributeDivisors;F[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),J[M]!==R&&(n.vertexAttribDivisor(M,R),J[M]=R)}function w(){const M=s.newAttributes,R=s.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==M[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function y(M,R,F,B,J,se,Z){Z===!0?n.vertexAttribIPointer(M,R,F,J,se):n.vertexAttribPointer(M,R,F,B,J,se)}function T(M,R,F,B){_();const J=B.attributes,se=F.getAttributes(),Z=R.defaultAttributeValues;for(const te in se){const j=se[te];if(j.location>=0){let ge=J[te];if(ge===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const be=ge.normalized,Se=ge.itemSize,Pe=e.get(ge);if(Pe===void 0)continue;const Ze=Pe.buffer,ne=Pe.type,fe=Pe.bytesPerElement,pe=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Vc;if(ge.isInterleavedBufferAttribute){const ve=ge.data,Ie=ve.stride,Ve=ge.offset;if(ve.isInstancedInterleavedBuffer){for(let ze=0;ze<j.locationSize;ze++)d(j.location+ze,ve.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<j.locationSize;ze++)m(j.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ze=0;ze<j.locationSize;ze++)y(j.location+ze,Se/j.locationSize,ne,be,Ie*fe,(Ve+Se/j.locationSize*ze)*fe,pe)}else{if(ge.isInstancedBufferAttribute){for(let ve=0;ve<j.locationSize;ve++)d(j.location+ve,ge.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ve=0;ve<j.locationSize;ve++)m(j.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ve=0;ve<j.locationSize;ve++)y(j.location+ve,Se/j.locationSize,ne,be,Se*fe,Se/j.locationSize*ve*fe,pe)}}else if(Z!==void 0){const be=Z[te];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(j.location,be);break;case 3:n.vertexAttrib3fv(j.location,be);break;case 4:n.vertexAttrib4fv(j.location,be);break;default:n.vertexAttrib1fv(j.location,be)}}}}w()}function O(){P();for(const M in i){const R=i[M];for(const F in R){const B=R[F];for(const J in B)u(B[J].object),delete B[J];delete R[F]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const F in R){const B=R[F];for(const J in B)u(B[J].object),delete B[J];delete R[F]}delete i[M.id]}function C(M){for(const R in i){const F=i[R];if(F[M.id]===void 0)continue;const B=F[M.id];for(const J in B)u(B[J].object),delete B[J];delete F[M.id]}}function P(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function GM(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function WM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Cn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:T,maxSamples:O}}function XM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,y=w*4;let T=d.clippingState||null;c.value=T,T=u(g,h,y,p);for(let O=0;O!==y;++O)T[O]=t[O];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,T=p;y!==_;++y,T+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jM(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=qr:a===zl&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===zl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new iv(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fd extends Dd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,_h=[.125,.215,.35,.446,.526,.582],qi=20,al=new Fd,vh=new je;let ll=null,cl=0,ul=0,hl=!1;const Gi=(1+Math.sqrt(5))/2,Rr=1/Gi,xh=[new N(-Gi,Rr,0),new N(Gi,Rr,0),new N(-Rr,0,Gi),new N(Rr,0,Gi),new N(0,Gi,-Rr),new N(0,Gi,Rr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,ul),this._renderer.xr.enabled=hl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:ks,format:Cn,colorSpace:Li,depthBuffer:!1},r=yh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qM(s)),this._blurMaterial=YM(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,i,r){const a=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(vh),u.toneMapping=wi,u.autoClear=!1;const p=new Ea({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Bt(new rs,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(vh),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):w===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;xo(r,w*y,d>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qr||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;xo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,al)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xh[(r-s-1)%xh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bt(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let w=0;for(let C=0;C<qi;++C){const P=C/_,b=Math.exp(-P*P/2);d.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const T=this._sizeLods[r],O=3*T*(r>y-Nr?r-y+Nr:0),A=4*(this._cubeSize-T);xo(t,O,A,3*T,2*T),c.setRenderTarget(t),c.render(f,al)}}function qM(n){const e=[],t=[],i=[];let r=n;const s=n-Nr+1+_h.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Nr?c=_h[o-n+Nr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),y=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(b,_*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];T.set(M,d*g*A)}const O=new Pt;O.setAttribute("position",new Rn(w,_)),O.setAttribute("uv",new Rn(y,m)),O.setAttribute("faceIndex",new Rn(T,d)),e.push(O),r>Nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yh(n,e,t){const i=new rr(n,e,t);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YM(n,e,t){const i=new Float32Array(qi),r=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Sh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function bh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $M(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Bl||c===zl,u=c===qr||c===Yr;if(l||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Mh(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Mh(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function KM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let y=0,T=w.length;y<T;y+=3){const O=w[y+0],A=w[y+1],C=w[y+2];h.push(O,A,A,C,C,O)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,T=w.length/3-1;y<T;y+=3){const O=y+0,A=y+1,C=y+2;h.push(O,A,A,C,C,O)}}else return;const m=new(wd(h)?Ld:Pd)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function JM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w];for(let w=0;w<_.length;w++)t.update(d,i,_[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ey(n,e,t){const i=new WeakMap,r=new ft;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let O=a.attributes.position.count*T,A=1;O>e.maxTextureSize&&(A=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const C=new Float32Array(O*A*4*f),P=new Ad(C,O,A,f);P.type=Kn,P.needsUpdate=!0;const b=T*4;for(let R=0;R<f;R++){const F=d[R],B=w[R],J=y[R],se=O*A*4*R;for(let Z=0;Z<F.count;Z++){const te=Z*b;g===!0&&(r.fromBufferAttribute(F,Z),C[se+te+0]=r.x,C[se+te+1]=r.y,C[se+te+2]=r.z,C[se+te+3]=0),_===!0&&(r.fromBufferAttribute(B,Z),C[se+te+4]=r.x,C[se+te+5]=r.y,C[se+te+6]=r.z,C[se+te+7]=0),m===!0&&(r.fromBufferAttribute(J,Z),C[se+te+8]=r.x,C[se+te+9]=r.y,C[se+te+10]=r.z,C[se+te+11]=J.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new De(O,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ty(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Od extends Xt{constructor(e,t,i,r,s,o,a,c,l,u=Vr){if(u!==Vr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=ir),i===void 0&&u===Kr&&(i=$r),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bd=new Xt,Eh=new Od(1,1),zd=new Ad,kd=new H0,Hd=new Ud,wh=[],Th=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wh[r];if(s===void 0&&(s=new Float32Array(r),wh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),It(t,i)}}function ay(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),It(t,i)}}function ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ah.set(i),n.uniformMatrix4fv(this.addr,!1,Ah),It(t,i)}}function cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function _y(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=Ed,s=Eh):s=Bd,t.setTexture2D(e||s,r)}function vy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kd,r)}function xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hd,r)}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zd,r)}function yy(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return sy;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return My}}function Sy(n,e){n.uniform1fv(this.addr,e)}function by(n,e){const t=ss(e,this.size,2);n.uniform2fv(this.addr,t)}function Ey(n,e){const t=ss(e,this.size,3);n.uniform3fv(this.addr,t)}function wy(n,e){const t=ss(e,this.size,4);n.uniform4fv(this.addr,t)}function Ty(n,e){const t=ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ay(n,e){const t=ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cy(n,e){const t=ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ry(n,e){n.uniform1iv(this.addr,e)}function Py(n,e){n.uniform2iv(this.addr,e)}function Ly(n,e){n.uniform3iv(this.addr,e)}function Iy(n,e){n.uniform4iv(this.addr,e)}function Dy(n,e){n.uniform1uiv(this.addr,e)}function Uy(n,e){n.uniform2uiv(this.addr,e)}function Ny(n,e){n.uniform3uiv(this.addr,e)}function Fy(n,e){n.uniform4uiv(this.addr,e)}function Oy(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bd,s[o])}function By(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kd,s[o])}function zy(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hd,s[o])}function ky(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zd,s[o])}function Hy(n){switch(n){case 5126:return Sy;case 35664:return by;case 35665:return Ey;case 35666:return wy;case 35674:return Ty;case 35675:return Ay;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Py;case 35668:case 35672:return Ly;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Uy;case 36295:return Ny;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}class Vy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yy(t.type)}}class Gy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hy(t.type)}}class Wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function Ph(n,e){n.seq.push(e),n.map[e.id]=e}function Xy(n,e,t){const i=n.name,r=i.length;for(fl.lastIndex=0;;){const s=fl.exec(i),o=fl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ph(t,l===void 0?new Vy(a,n,e):new Gy(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Wy(a),Ph(t,f)),t=f}}}class Go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Xy(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jy=37297;let qy=0;function Yy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $y(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===ta&&t===ea?i="LinearDisplayP3ToLinearSRGB":e===ea&&t===ta&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case Sa:return[i,"LinearTransferOETF"];case Un:case $c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ih(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Yy(n.getShaderSource(e),o)}else return r}function Ky(n,e){const t=$y(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zy(n,e){let t;switch(e){case e0:t="Linear";break;case t0:t="Reinhard";break;case n0:t="OptimizedCineon";break;case i0:t="ACESFilmic";break;case s0:t="AgX";break;case o0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Qy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xs(n){return n!==""}function Dh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(tS,iS)}const nS=new Map;function iS(n,e){let t=qe[e];if(t===void 0){const i=nS.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(rS,sS)}function sS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function aS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function cS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case J_:e="ENVMAP_BLENDING_MIX";break;case Q_:e="ENVMAP_BLENDING_ADD";break}return e}function uS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=oS(t),l=aS(t),u=lS(t),f=cS(t),h=uS(t),p=Jy(t),g=Qy(s),_=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ky("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=mc(o),o=Dh(o,t),o=Uh(o,t),a=mc(a),a=Dh(a,t),a=Uh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=w+m+o,T=w+d+a,O=Lh(r,r.VERTEX_SHADER,y),A=Lh(r,r.FRAGMENT_SHADER,T);r.attachShader(_,O),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(O).trim(),J=r.getShaderInfoLog(A).trim();let se=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,A);else{const te=Ih(r,O,"vertex"),j=Ih(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+te+`
`+j)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||J==="")&&(Z=!1);Z&&(R.diagnostics={runnable:se,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(O),r.deleteShader(A),P=new Go(r,_),b=eS(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,jy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}let fS=0;class dS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pS(e),t.set(e,i)),i}}class pS{constructor(e){this.id=fS++,this.code=e,this.usedTimes=0}}function mS(n,e,t,i,r,s,o){const a=new Cd,c=new dS,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,F,B){const J=F.fog,se=B.geometry,Z=b.isMeshStandardMaterial?F.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),j=te&&te.mapping===ya?te.image.height:null,ge=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const be=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Se=be!==void 0?be.length:0;let Pe=0;se.morphAttributes.position!==void 0&&(Pe=1),se.morphAttributes.normal!==void 0&&(Pe=2),se.morphAttributes.color!==void 0&&(Pe=3);let Ze,ne,fe,pe;if(ge){const Je=Fn[ge];Ze=Je.vertexShader,ne=Je.fragmentShader}else Ze=b.vertexShader,ne=b.fragmentShader,c.update(b),fe=c.getVertexShaderID(b),pe=c.getFragmentShaderID(b);const ve=n.getRenderTarget(),Ie=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,ze=!!b.map,it=!!b.matcap,D=!!te,L=!!b.aoMap,U=!!b.lightMap,q=!!b.bumpMap,k=!!b.normalMap,ie=!!b.displacementMap,ee=!!b.emissiveMap,re=!!b.metalnessMap,S=!!b.roughnessMap,v=b.anisotropy>0,I=b.clearcoat>0,G=b.dispersion>0,V=b.iridescence>0,X=b.sheen>0,ce=b.transmission>0,oe=v&&!!b.anisotropyMap,ue=I&&!!b.clearcoatMap,Ee=I&&!!b.clearcoatNormalMap,ae=I&&!!b.clearcoatRoughnessMap,me=V&&!!b.iridescenceMap,Xe=V&&!!b.iridescenceThicknessMap,Ue=X&&!!b.sheenColorMap,xe=X&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ae=!!b.specularColorMap,Ke=!!b.specularIntensityMap,x=ce&&!!b.transmissionMap,W=ce&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,le=b.alphaTest>0,Re=!!b.alphaHash,Fe=!!b.extensions;let mt=wi;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(mt=n.toneMapping);const _t={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:ne,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Li,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:it,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:j,aoMap:L,lightMap:U,bumpMap:q,normalMap:k,displacementMap:h&&ie,emissiveMap:ee,normalMapObjectSpace:k&&b.normalMapType===u0,normalMapTangentSpace:k&&b.normalMapType===Yc,metalnessMap:re,roughnessMap:S,anisotropy:v,anisotropyMap:oe,clearcoat:I,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,dispersion:G,iridescence:V,iridescenceMap:me,iridescenceThicknessMap:Xe,sheen:X,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:Ne,specularColorMap:Ae,specularIntensityMap:Ke,transmission:ce,transmissionMap:x,thicknessMap:W,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:le,alphaHash:Re,combine:b.combine,mapUv:ze&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:U&&_(b.lightMap.channel),bumpMapUv:q&&_(b.bumpMap.channel),normalMapUv:k&&_(b.normalMap.channel),displacementMapUv:ie&&_(b.displacementMap.channel),emissiveMapUv:ee&&_(b.emissiveMap.channel),metalnessMapUv:re&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ne&&_(b.specularMap.channel),specularColorMapUv:Ae&&_(b.specularColorMap.channel),specularIntensityMapUv:Ke&&_(b.specularIntensityMap.channel),transmissionMapUv:x&&_(b.transmissionMap.channel),thicknessMapUv:W&&_(b.thicknessMap.channel),alphaMapUv:Q&&_(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(k||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!se.attributes.uv&&(ze||Q),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),b.push(a.mask)}function T(b){const M=g[b.type];let R;if(M){const F=Fn[M];R=Q0.clone(F.uniforms)}else R=b.uniforms;return R}function O(b,M){let R;for(let F=0,B=u.length;F<B;F++){const J=u[F];if(J.cacheKey===M){R=J,++R.usedTimes;break}}return R===void 0&&(R=new hS(n,M,b,s),u.push(R)),R}function A(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:O,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function gS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _S(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||_S),i.length>1&&i.sort(h||Oh),r.length>1&&r.sort(h||Oh)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function vS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bh,n.set(i,[o])):r>=s.length?(o=new Bh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new je};break;case"SpotLight":t={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function MS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yS=0;function SS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bS(n){const e=new xS,t=MS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new dt,o=new dt;function a(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,w=0,y=0,T=0,O=0,A=0,C=0;l.sort(SS);for(let b=0,M=l.length;b<M;b++){const R=l[b],F=R.color,B=R.intensity,J=R.distance,se=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*B,f+=F.g*B,h+=F.b*B;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],B);C++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,j=t.get(R);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=R.shadow.matrix,w++}i.directional[p]=Z,p++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(F).multiplyScalar(B),Z.distance=J,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[_]=Z;const te=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,te.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,R.castShadow){const j=t.get(R);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=se,T++}_++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy(F).multiplyScalar(B),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Z,m++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const te=R.shadow,j=t.get(R);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=Z,g++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(B),Z.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==w||P.numPointShadows!==y||P.numSpotShadows!==T||P.numSpotMaps!==O||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+O-A,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=w,P.numPointShadows=y,P.numSpotShadows=T,P.numSpotMaps=O,P.numLightProbes=C,i.version=yS++)}function c(l,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const y=l[d];if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(y.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function zh(n){const e=new bS(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ES(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zh(n),e.set(r,[a])):s>=o.length?(a=new zh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class wS extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TS extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RS(n,e,t){let i=new Jc;const r=new De,s=new De,o=new ft,a=new wS({depthPacking:c0}),c=new TS,l={},u=t.maxTextureSize,f={[Ri]:en,[en]:Ri,[Bn]:Bn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:AS,fragmentShader:CS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let d=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==$n&&this.type===$n,J=d===$n&&this.type!==$n;for(let se=0,Z=A.length;se<Z;se++){const te=A[se],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ge=j.getFrameExtents();if(r.multiply(ge),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,j.mapSize.y=s.y)),j.map===null||B===!0||J===!0){const Se=this.type!==$n?{minFilter:mn,magFilter:mn}:{};j.map!==null&&j.map.dispose(),j.map=new rr(r.x,r.y,Se),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const be=j.getViewportCount();for(let Se=0;Se<be;Se++){const Pe=j.getViewport(Se);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),F.viewport(o),j.updateMatrices(te,Se),i=j.getFrustum(),T(C,P,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===$n&&w(j,P),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,R)};function w(A,C){const P=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,p,_,null)}function y(A,C,P,b){let M=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=M.uuid,B=C.uuid;let J=l[F];J===void 0&&(J={},l[F]=J);let se=J[B];se===void 0&&(se=M.clone(),J[B]=se,C.addEventListener("dispose",O)),M=se}if(M.visible=C.visible,M.wireframe=C.wireframe,b===$n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=P}return M}function T(A,C,P,b,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===$n)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),J=A.material;if(Array.isArray(J)){const se=B.groups;for(let Z=0,te=se.length;Z<te;Z++){const j=se[Z],ge=J[j.materialIndex];if(ge&&ge.visible){const be=y(A,ge,b,M);A.onBeforeShadow(n,A,C,P,B,be,j),n.renderBufferDirect(P,null,B,be,A,j),A.onAfterShadow(n,A,C,P,B,be,j)}}}else if(J.visible){const se=y(A,J,b,M);A.onBeforeShadow(n,A,C,P,B,se,null),n.renderBufferDirect(P,null,B,se,A,null),A.onAfterShadow(n,A,C,P,B,se,null)}}const F=A.children;for(let B=0,J=F.length;B<J;B++)T(F[B],C,P,b,M)}function O(A){A.target.removeEventListener("dispose",O);for(const P in l){const b=l[P],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function PS(n){function e(){let x=!1;const W=new ft;let Y=null;const Q=new ft(0,0,0,0);return{setMask:function(le){Y!==le&&!x&&(n.colorMask(le,le,le,le),Y=le)},setLocked:function(le){x=le},setClear:function(le,Re,Fe,mt,_t){_t===!0&&(le*=mt,Re*=mt,Fe*=mt),W.set(le,Re,Fe,mt),Q.equals(W)===!1&&(n.clearColor(le,Re,Fe,mt),Q.copy(W))},reset:function(){x=!1,Y=null,Q.set(-1,0,0,0)}}}function t(){let x=!1,W=null,Y=null,Q=null;return{setTest:function(le){le?pe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(le){W!==le&&!x&&(n.depthMask(le),W=le)},setFunc:function(le){if(Y!==le){switch(le){case X_:n.depthFunc(n.NEVER);break;case j_:n.depthFunc(n.ALWAYS);break;case q_:n.depthFunc(n.LESS);break;case Jo:n.depthFunc(n.LEQUAL);break;case Y_:n.depthFunc(n.EQUAL);break;case $_:n.depthFunc(n.GEQUAL);break;case K_:n.depthFunc(n.GREATER);break;case Z_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=le}},setLocked:function(le){x=le},setClear:function(le){Q!==le&&(n.clearDepth(le),Q=le)},reset:function(){x=!1,W=null,Y=null,Q=null}}}function i(){let x=!1,W=null,Y=null,Q=null,le=null,Re=null,Fe=null,mt=null,_t=null;return{setTest:function(Je){x||(Je?pe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Je){W!==Je&&!x&&(n.stencilMask(Je),W=Je)},setFunc:function(Je,vt,xt){(Y!==Je||Q!==vt||le!==xt)&&(n.stencilFunc(Je,vt,xt),Y=Je,Q=vt,le=xt)},setOp:function(Je,vt,xt){(Re!==Je||Fe!==vt||mt!==xt)&&(n.stencilOp(Je,vt,xt),Re=Je,Fe=vt,mt=xt)},setLocked:function(Je){x=Je},setClear:function(Je){_t!==Je&&(n.clearStencil(Je),_t=Je)},reset:function(){x=!1,W=null,Y=null,Q=null,le=null,Re=null,Fe=null,mt=null,_t=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,w=null,y=null,T=null,O=null,A=new je(0,0,0),C=0,P=!1,b=null,M=null,R=null,F=null,B=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,Z=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),se=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),se=Z>=2);let j=null,ge={};const be=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Pe=new ft().fromArray(be),Ze=new ft().fromArray(Se);function ne(x,W,Y,Q){const le=new Uint8Array(4),Re=n.createTexture();n.bindTexture(x,Re),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Y;Fe++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(W+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return Re}const fe={};fe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(Jo),q(!1),k(ju),pe(n.CULL_FACE),L(Ei);function pe(x){l[x]!==!0&&(n.enable(x),l[x]=!0)}function ve(x){l[x]!==!1&&(n.disable(x),l[x]=!1)}function Ie(x,W){return u[x]!==W?(n.bindFramebuffer(x,W),u[x]=W,x===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=W),x===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=W),!0):!1}function Ve(x,W){let Y=h,Q=!1;if(x){Y=f.get(W),Y===void 0&&(Y=[],f.set(W,Y));const le=x.textures;if(Y.length!==le.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Fe=le.length;Re<Fe;Re++)Y[Re]=n.COLOR_ATTACHMENT0+Re;Y.length=le.length,Q=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Q=!0);Q&&n.drawBuffers(Y)}function ze(x){return p!==x?(n.useProgram(x),p=x,!0):!1}const it={[ji]:n.FUNC_ADD,[C_]:n.FUNC_SUBTRACT,[R_]:n.FUNC_REVERSE_SUBTRACT};it[P_]=n.MIN,it[L_]=n.MAX;const D={[I_]:n.ZERO,[D_]:n.ONE,[U_]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[k_]:n.SRC_ALPHA_SATURATE,[B_]:n.DST_COLOR,[F_]:n.DST_ALPHA,[N_]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[z_]:n.ONE_MINUS_DST_COLOR,[O_]:n.ONE_MINUS_DST_ALPHA,[H_]:n.CONSTANT_COLOR,[V_]:n.ONE_MINUS_CONSTANT_COLOR,[G_]:n.CONSTANT_ALPHA,[W_]:n.ONE_MINUS_CONSTANT_ALPHA};function L(x,W,Y,Q,le,Re,Fe,mt,_t,Je){if(x===Ei){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),x!==A_){if(x!==_||Je!==P){if((m!==ji||y!==ji)&&(n.blendEquation(n.FUNC_ADD),m=ji,y=ji),Je)switch(x){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}d=null,w=null,T=null,O=null,A.set(0,0,0),C=0,_=x,P=Je}return}le=le||W,Re=Re||Y,Fe=Fe||Q,(W!==m||le!==y)&&(n.blendEquationSeparate(it[W],it[le]),m=W,y=le),(Y!==d||Q!==w||Re!==T||Fe!==O)&&(n.blendFuncSeparate(D[Y],D[Q],D[Re],D[Fe]),d=Y,w=Q,T=Re,O=Fe),(mt.equals(A)===!1||_t!==C)&&(n.blendColor(mt.r,mt.g,mt.b,_t),A.copy(mt),C=_t),_=x,P=!1}function U(x,W){x.side===Bn?ve(n.CULL_FACE):pe(n.CULL_FACE);let Y=x.side===en;W&&(Y=!Y),q(Y),x.blending===Hr&&x.transparent===!1?L(Ei):L(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const Q=x.stencilWrite;o.setTest(Q),Q&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ee(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(x){b!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),b=x)}function k(x){x!==E_?(pe(n.CULL_FACE),x!==M&&(x===ju?n.cullFace(n.BACK):x===w_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),M=x}function ie(x){x!==R&&(se&&n.lineWidth(x),R=x)}function ee(x,W,Y){x?(pe(n.POLYGON_OFFSET_FILL),(F!==W||B!==Y)&&(n.polygonOffset(W,Y),F=W,B=Y)):ve(n.POLYGON_OFFSET_FILL)}function re(x){x?pe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function S(x){x===void 0&&(x=n.TEXTURE0+J-1),j!==x&&(n.activeTexture(x),j=x)}function v(x,W,Y){Y===void 0&&(j===null?Y=n.TEXTURE0+J-1:Y=j);let Q=ge[Y];Q===void 0&&(Q={type:void 0,texture:void 0},ge[Y]=Q),(Q.type!==x||Q.texture!==W)&&(j!==Y&&(n.activeTexture(Y),j=Y),n.bindTexture(x,W||fe[x]),Q.type=x,Q.texture=W)}function I(){const x=ge[j];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ue(x){Pe.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Pe.copy(x))}function xe(x){Ze.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Ze.copy(x))}function Ne(x,W){let Y=c.get(W);Y===void 0&&(Y=new WeakMap,c.set(W,Y));let Q=Y.get(x);Q===void 0&&(Q=n.getUniformBlockIndex(W,x.name),Y.set(x,Q))}function Ae(x,W){const Q=c.get(W).get(x);a.get(W)!==Q&&(n.uniformBlockBinding(W,Q,x.__bindingPointIndex),a.set(W,Q))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},j=null,ge={},u={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,w=null,y=null,T=null,O=null,A=new je(0,0,0),C=0,P=!1,b=null,M=null,R=null,F=null,B=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ve,bindFramebuffer:Ie,drawBuffers:Ve,useProgram:ze,setBlending:L,setMaterial:U,setFlipSided:q,setCullFace:k,setLineWidth:ie,setPolygonOffset:ee,setScissorTest:re,activeTexture:S,bindTexture:v,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:V,texImage2D:me,texImage3D:Xe,updateUBOMapping:Ne,uniformBlockBinding:Ae,texStorage2D:Ee,texStorage3D:ae,texSubImage2D:X,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ue,viewport:xe,reset:Ke}}function kh(n,e,t,i){const r=LS(i);switch(t){case _d:return n*e;case xd:return n*e;case Md:return n*e*2;case yd:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Sd:return n*e*2/r.components*r.byteLength;case jc:return n*e*2/r.components*r.byteLength;case vd:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case qc:return n*e*4/r.components*r.byteLength;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case jl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vo:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bd:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LS(n){switch(n){case ei:case pd:return{byteLength:1,components:1};case Us:case md:case ks:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case ir:case Vc:case Kn:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function IS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):Os("canvas")}function _(S,v,I){let G=1;const V=re(S);if((V.width>I||V.height>I)&&(G=I/Math.max(V.width,V.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const X=Math.floor(G*V.width),ce=Math.floor(G*V.height);f===void 0&&(f=g(X,ce));const oe=v?g(X,ce):f;return oe.width=X,oe.height=ce,oe.getContext("2d").drawImage(S,0,0,X,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+X+"x"+ce+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==mn&&S.minFilter!==En}function d(S){n.generateMipmap(S)}function w(S,v,I,G,V=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=v;if(v===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),v===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const ce=V?Qo:at.getTransfer(G);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=ce===ht?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(S,v){let I;return S?v===null||v===ir||v===$r?I=n.DEPTH24_STENCIL8:v===Kn?I=n.DEPTH32F_STENCIL8:v===Us&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ir||v===$r?I=n.DEPTH_COMPONENT24:v===Kn?I=n.DEPTH_COMPONENT32F:v===Us&&(I=n.DEPTH_COMPONENT16),I}function T(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==mn&&S.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function O(S){const v=S.target;v.removeEventListener("dispose",O),C(v),v.isVideoTexture&&u.delete(v)}function A(S){const v=S.target;v.removeEventListener("dispose",A),b(v)}function C(S){const v=i.get(S);if(v.__webglInit===void 0)return;const I=S.source,G=h.get(I);if(G){const V=G[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(S),Object.keys(G).length===0&&h.delete(I)}i.remove(S)}function P(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const I=S.source,G=h.get(I);delete G[v.__cacheKey],o.memory.textures--}function b(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let V=0;V<v.__webglFramebuffer[G].length;V++)n.deleteFramebuffer(v.__webglFramebuffer[G][V]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=S.textures;for(let G=0,V=I.length;G<V;G++){const X=i.get(I[G]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(S)}let M=0;function R(){M=0}function F(){const S=M;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),M+=1,S}function B(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function J(S,v){const I=i.get(S);if(S.isVideoTexture&&ie(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const G=S.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(I,S,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function se(S,v){const I=i.get(S);if(S.version>0&&I.__version!==S.version){Ze(I,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function Z(S,v){const I=i.get(S);if(S.version>0&&I.__version!==S.version){Ze(I,S,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function te(S,v){const I=i.get(S);if(S.version>0&&I.__version!==S.version){ne(I,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const j={[kl]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},ge={[mn]:n.NEAREST,[a0]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},be={[h0]:n.NEVER,[_0]:n.ALWAYS,[f0]:n.LESS,[Ed]:n.LEQUAL,[d0]:n.EQUAL,[g0]:n.GEQUAL,[p0]:n.GREATER,[m0]:n.NOTEQUAL};function Se(S,v){if(v.type===Kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Va||v.magFilter===Zs||v.magFilter===Ki||v.minFilter===En||v.minFilter===Va||v.minFilter===Zs||v.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,j[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,j[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,j[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===mn||v.minFilter!==Zs&&v.minFilter!==Ki||v.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(S,v){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const G=v.source;let V=h.get(G);V===void 0&&(V={},h.set(G,V));const X=B(v);if(X!==S.__cacheKey){V[X]===void 0&&(V[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),V[X].usedTimes++;const ce=V[S.__cacheKey];ce!==void 0&&(V[S.__cacheKey].usedTimes--,ce.usedTimes===0&&P(v)),S.__cacheKey=X,S.__webglTexture=V[X].texture}return I}function Ze(S,v,I){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const V=Pe(S,v),X=v.source;t.bindTexture(G,S.__webglTexture,n.TEXTURE0+I);const ce=i.get(X);if(X.version!==ce.__version||V===!0){t.activeTexture(n.TEXTURE0+I);const oe=at.getPrimaries(at.workingColorSpace),ue=v.colorSpace===yi?null:at.getPrimaries(v.colorSpace),Ee=v.colorSpace===yi||oe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ae=_(v.image,!1,r.maxTextureSize);ae=ee(v,ae);const me=s.convert(v.format,v.colorSpace),Xe=s.convert(v.type);let Ue=w(v.internalFormat,me,Xe,v.colorSpace,v.isVideoTexture);Se(G,v);let xe;const Ne=v.mipmaps,Ae=v.isVideoTexture!==!0,Ke=ce.__version===void 0||V===!0,x=X.dataReady,W=T(v,ae);if(v.isDepthTexture)Ue=y(v.format===Kr,v.type),Ke&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,me,Xe,null));else if(v.isDataTexture)if(Ne.length>0){Ae&&Ke&&t.texStorage2D(n.TEXTURE_2D,W,Ue,Ne[0].width,Ne[0].height);for(let Y=0,Q=Ne.length;Y<Q;Y++)xe=Ne[Y],Ae?x&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,Xe,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Ue,xe.width,xe.height,0,me,Xe,xe.data);v.generateMipmaps=!1}else Ae?(Ke&&t.texStorage2D(n.TEXTURE_2D,W,Ue,ae.width,ae.height),x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,me,Xe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,me,Xe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ae&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Ue,Ne[0].width,Ne[0].height,ae.depth);for(let Y=0,Q=Ne.length;Y<Q;Y++)if(xe=Ne[Y],v.format!==Cn)if(me!==null)if(Ae){if(x)if(v.layerUpdates.size>0){const le=kh(xe.width,xe.height,v.format,v.type);for(const Re of v.layerUpdates){const Fe=xe.data.subarray(Re*le/xe.data.BYTES_PER_ELEMENT,(Re+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Re,xe.width,xe.height,1,me,Fe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ae.depth,me,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ue,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?x&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ae.depth,me,Xe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ue,xe.width,xe.height,ae.depth,0,me,Xe,xe.data)}else{Ae&&Ke&&t.texStorage2D(n.TEXTURE_2D,W,Ue,Ne[0].width,Ne[0].height);for(let Y=0,Q=Ne.length;Y<Q;Y++)xe=Ne[Y],v.format!==Cn?me!==null?Ae?x&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?x&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,Xe,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Ue,xe.width,xe.height,0,me,Xe,xe.data)}else if(v.isDataArrayTexture)if(Ae){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Ue,ae.width,ae.height,ae.depth),x)if(v.layerUpdates.size>0){const Y=kh(ae.width,ae.height,v.format,v.type);for(const Q of v.layerUpdates){const le=ae.data.subarray(Q*Y/ae.data.BYTES_PER_ELEMENT,(Q+1)*Y/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,me,Xe,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Xe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,me,Xe,ae.data);else if(v.isData3DTexture)Ae?(Ke&&t.texStorage3D(n.TEXTURE_3D,W,Ue,ae.width,ae.height,ae.depth),x&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Xe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,me,Xe,ae.data);else if(v.isFramebufferTexture){if(Ke)if(Ae)t.texStorage2D(n.TEXTURE_2D,W,Ue,ae.width,ae.height);else{let Y=ae.width,Q=ae.height;for(let le=0;le<W;le++)t.texImage2D(n.TEXTURE_2D,le,Ue,Y,Q,0,me,Xe,null),Y>>=1,Q>>=1}}else if(Ne.length>0){if(Ae&&Ke){const Y=re(Ne[0]);t.texStorage2D(n.TEXTURE_2D,W,Ue,Y.width,Y.height)}for(let Y=0,Q=Ne.length;Y<Q;Y++)xe=Ne[Y],Ae?x&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me,Xe,xe):t.texImage2D(n.TEXTURE_2D,Y,Ue,me,Xe,xe);v.generateMipmaps=!1}else if(Ae){if(Ke){const Y=re(ae);t.texStorage2D(n.TEXTURE_2D,W,Ue,Y.width,Y.height)}x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Xe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ue,me,Xe,ae);m(v)&&d(G),ce.__version=X.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ne(S,v,I){if(v.image.length!==6)return;const G=Pe(S,v),V=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);const X=i.get(V);if(V.version!==X.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const ce=at.getPrimaries(at.workingColorSpace),oe=v.colorSpace===yi?null:at.getPrimaries(v.colorSpace),ue=v.colorSpace===yi||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ee&&!ae?me[Q]=_(v.image[Q],!0,r.maxCubemapSize):me[Q]=ae?v.image[Q].image:v.image[Q],me[Q]=ee(v,me[Q]);const Xe=me[0],Ue=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),Ne=w(v.internalFormat,Ue,xe,v.colorSpace),Ae=v.isVideoTexture!==!0,Ke=X.__version===void 0||G===!0,x=V.dataReady;let W=T(v,Xe);Se(n.TEXTURE_CUBE_MAP,v);let Y;if(Ee){Ae&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Ne,Xe.width,Xe.height);for(let Q=0;Q<6;Q++){Y=me[Q].mipmaps;for(let le=0;le<Y.length;le++){const Re=Y[le];v.format!==Cn?Ue!==null?Ae?x&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Ne,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Re.width,Re.height,Ue,xe,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Ne,Re.width,Re.height,0,Ue,xe,Re.data)}}}else{if(Y=v.mipmaps,Ae&&Ke){Y.length>0&&W++;const Q=re(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Ne,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Ae?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ue,xe,me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ne,me[Q].width,me[Q].height,0,Ue,xe,me[Q].data);for(let le=0;le<Y.length;le++){const Fe=Y[le].image[Q].image;Ae?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Fe.width,Fe.height,Ue,xe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Ne,Fe.width,Fe.height,0,Ue,xe,Fe.data)}}else{Ae?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,xe,me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ne,Ue,xe,me[Q]);for(let le=0;le<Y.length;le++){const Re=Y[le];Ae?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Ue,xe,Re.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Ne,Ue,xe,Re.image[Q])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),X.__version=V.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function fe(S,v,I,G,V,X){const ce=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),ue=w(I.internalFormat,ce,oe,I.colorSpace);if(!i.get(v).__hasExternalTextures){const ae=Math.max(1,v.width>>X),me=Math.max(1,v.height>>X);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,X,ue,ae,me,v.depth,0,ce,oe,null):t.texImage2D(V,X,ue,ae,me,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,V,i.get(I).__webglTexture,0,q(v)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,V,i.get(I).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(S,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const G=v.depthTexture,V=G&&G.isDepthTexture?G.type:null,X=y(v.stencilBuffer,V),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=q(v);k(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,X,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,S)}else{const G=v.textures;for(let V=0;V<G.length;V++){const X=G[V],ce=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),ue=w(X.internalFormat,ce,oe,X.colorSpace),Ee=q(v);I&&k(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,v.width,v.height):k(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const G=i.get(v.depthTexture).__webglTexture,V=q(v);if(v.depthTexture.format===Vr)k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===Kr)k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ie(S){const v=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ve(v.__webglFramebuffer,S)}else if(I){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]=n.createRenderbuffer(),pe(v.__webglDepthbuffer[G],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),pe(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,v,I){const G=i.get(S);v!==void 0&&fe(G.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ie(S)}function ze(S){const v=S.texture,I=i.get(S),G=i.get(v);S.addEventListener("dispose",A);const V=S.textures,X=S.isWebGLCubeRenderTarget===!0,ce=V.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)I.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else I.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)I.__webglFramebuffer[oe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,ue=V.length;oe<ue;oe++){const Ee=i.get(V[oe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&k(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<V.length;oe++){const ue=V[oe];I.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const Ee=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),me=w(ue.internalFormat,Ee,ae,ue.colorSpace,S.isXRRenderTarget===!0),Xe=q(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,me,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Se(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)fe(I.__webglFramebuffer[oe][ue],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else fe(I.__webglFramebuffer[oe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,ue=V.length;oe<ue;oe++){const Ee=V[oe],ae=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Se(n.TEXTURE_2D,Ee),fe(I.__webglFramebuffer,S,Ee,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ee)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,G.__webglTexture),Se(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)fe(I.__webglFramebuffer[ue],S,v,n.COLOR_ATTACHMENT0,oe,ue);else fe(I.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&d(oe),t.unbindTexture()}S.depthBuffer&&Ie(S)}function it(S){const v=S.textures;for(let I=0,G=v.length;I<G;I++){const V=v[I];if(m(V)){const X=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(V).__webglTexture;t.bindTexture(X,ce),d(X),t.unbindTexture()}}}const D=[],L=[];function U(S){if(S.samples>0){if(k(S)===!1){const v=S.textures,I=S.width,G=S.height;let V=n.COLOR_BUFFER_BIT;const X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(S),oe=v.length>1;if(oe)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ee=i.get(v[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,V,n.NEAREST),c===!0&&(D.length=0,L.length=0,D.push(n.COLOR_ATTACHMENT0+ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(D.push(X),L.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ee=i.get(v[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function q(S){return Math.min(r.maxSamples,S.samples)}function k(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function ee(S,v){const I=S.colorSpace,G=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Li&&I!==yi&&(at.getTransfer(I)===ht?(G!==Cn||V!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function re(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=Ve,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=k}function DS(n,e){function t(i,r=yi){let s;const o=at.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===ir)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===ks)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===Cn)return n.RGBA;if(i===xd)return n.LUMINANCE;if(i===Md)return n.LUMINANCE_ALPHA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===yd)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Sd)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===Bo||i===zo||i===ko||i===Ho)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jl||i===ql||i===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jl||i===ql)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$l)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vo)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bd||i===hc||i===fc||i===dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class US extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NS={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NS)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:FS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zS extends cr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const _=new BS,m=t.getContextAttributes();let d=null,w=null;const y=[],T=[],O=new De;let A=null;const C=new Kt;C.layers.enable(1),C.viewport=new ft;const P=new Kt;P.layers.enable(2),P.viewport=new ft;const b=[C,P],M=new US;M.layers.enable(1),M.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=y[ne];return fe===void 0&&(fe=new dl,y[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=y[ne];return fe===void 0&&(fe=new dl,y[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=y[ne];return fe===void 0&&(fe=new dl,y[ne]=fe),fe.getHandSpace()};function B(ne){const fe=T.indexOf(ne.inputSource);if(fe===-1)return;const pe=y[fe];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,l||o),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",se);for(let ne=0;ne<y.length;ne++){const fe=T[ne];fe!==null&&(T[ne]=null,y[ne].disconnect(fe))}R=null,F=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,w=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",J),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new rr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,pe=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Kr:Vr,pe=m.stencil?$r:ir);const Ie={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new rr(h.textureWidth,h.textureHeight,{format:Cn,type:ei,depthTexture:new Od(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(ne){for(let fe=0;fe<ne.removed.length;fe++){const pe=ne.removed[fe],ve=T.indexOf(pe);ve>=0&&(T[ve]=null,y[ve].disconnect(pe))}for(let fe=0;fe<ne.added.length;fe++){const pe=ne.added[fe];let ve=T.indexOf(pe);if(ve===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=T.length){T.push(pe),ve=Ve;break}else if(T[Ve]===null){T[Ve]=pe,ve=Ve;break}if(ve===-1)break}const Ie=y[ve];Ie&&Ie.connect(pe)}}const Z=new N,te=new N;function j(ne,fe,pe){Z.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(pe.matrixWorld);const ve=Z.distanceTo(te),Ie=fe.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,ze=Ie[14]/(Ie[10]-1),it=Ie[14]/(Ie[10]+1),D=(Ie[9]+1)/Ie[5],L=(Ie[9]-1)/Ie[5],U=(Ie[8]-1)/Ie[0],q=(Ve[8]+1)/Ve[0],k=ze*U,ie=ze*q,ee=ve/(-U+q),re=ee*-U;fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const S=ze+ee,v=it+ee,I=k-re,G=ie+(ve-re),V=D*it/v*S,X=L*it/v*S;ne.projectionMatrix.makePerspective(I,G,V,X,S,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ge(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;_.texture!==null&&(ne.near=_.depthNear,ne.far=_.depthFar),M.near=P.near=C.near=ne.near,M.far=P.far=C.far=ne.far,(R!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,F=M.far,C.near=R,C.far=F,P.near=R,P.far=F,C.updateProjectionMatrix(),P.updateProjectionMatrix(),ne.updateProjectionMatrix());const fe=ne.parent,pe=M.cameras;ge(M,fe);for(let ve=0;ve<pe.length;ve++)ge(pe[ve],fe);pe.length===2?j(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),be(ne,M,fe)};function be(ne,fe,pe){pe===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ns*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(ne){c=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Se=null;function Pe(ne,fe){if(u=fe.getViewerPose(l||o),g=fe,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ve=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let Ve=0;Ve<pe.length;Ve++){const ze=pe[Ve];let it=null;if(p!==null)it=p.getViewport(ze);else{const L=f.getViewSubImage(h,ze);it=L.viewport,Ve===0&&(e.setRenderTargetTextures(w,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(w))}let D=b[Ve];D===void 0&&(D=new Kt,D.layers.enable(Ve),D.viewport=new ft,b[Ve]=D),D.matrix.fromArray(ze.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ze.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(it.x,it.y,it.width,it.height),Ve===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(D)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ve=f.getDepthInformation(pe[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(e,Ve,r.renderState)}}for(let pe=0;pe<y.length;pe++){const ve=T[pe],Ie=y[pe];ve!==null&&Ie!==void 0&&Ie.update(ve,fe,l||o)}Se&&Se(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ze=new Nd;Ze.setAnimationLoop(Pe),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const Vi=new Pn,kS=new dt;function HS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Id(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,y,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,w,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),y=w.envMap,T=w.envMapRotation;y&&(m.envMap.value=y,Vi.copy(T),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const T=y.program;i.uniformBlockBinding(w,T)}function l(w,y){let T=r[w.id];T===void 0&&(g(w),T=u(w),r[w.id]=T,w.addEventListener("dispose",m));const O=y.program;i.updateUBOMapping(w,O);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function u(w){const y=f();w.__bindingPointIndex=y;const T=n.createBuffer(),O=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,O,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=r[w.id],T=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=T.length;A<C;A++){const P=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,M=P.length;b<M;b++){const R=P[b];if(p(R,A,b,O)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let se=0;se<B.length;se++){const Z=B[se],te=_(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,F+J,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,J),J+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,T,O){const A=w.value,C=y+"_"+T;if(O[C]===void 0)return typeof A=="number"||typeof A=="boolean"?O[C]=A:O[C]=A.clone(),!0;{const P=O[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return O[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){const y=w.uniforms;let T=0;const O=16;for(let C=0,P=y.length;C<P;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,R=b.length;M<R;M++){const F=b[M],B=Array.isArray(F.value)?F.value:[F.value];for(let J=0,se=B.length;J<se;J++){const Z=B[J],te=_(Z),j=T%O;j!==0&&O-j<te.boundary&&(T+=O-j),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=te.storage}}}const A=T%O;return A>0&&(T+=O-A),w.__size=T,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class eu{constructor(e={}){const{canvas:t=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=wi,this.toneMappingExposure=1;const y=this;let T=!1,O=0,A=0,C=null,P=-1,b=null;const M=new ft,R=new ft;let F=null;const B=new je(0);let J=0,se=t.width,Z=t.height,te=1,j=null,ge=null;const be=new ft(0,0,se,Z),Se=new ft(0,0,se,Z);let Pe=!1;const Ze=new Jc;let ne=!1,fe=!1;const pe=new dt,ve=new N,Ie=new ft,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function it(){return C===null?te:1}let D=i;function L(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const z="webgl2";if(D=L(z,E),D===null)throw L(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let U,q,k,ie,ee,re,S,v,I,G,V,X,ce,oe,ue,Ee,ae,me,Xe,Ue,xe,Ne,Ae,Ke;function x(){U=new KM(D),U.init(),Ne=new DS(D,U),q=new WM(D,U,e,Ne),k=new PS(D),ie=new QM(D),ee=new gS,re=new IS(D,U,k,ee,q,Ne,ie),S=new jM(y),v=new $M(y),I=new ov(D),Ae=new VM(D,I),G=new ZM(D,I,ie,Ae),V=new ty(D,G,I,ie),Xe=new ey(D,q,re),Ee=new XM(ee),X=new mS(y,S,v,U,q,Ae,Ee),ce=new HS(y,ee),oe=new vS,ue=new ES(U),me=new HM(y,S,v,k,V,h,c),ae=new RS(y,V,q),Ke=new VS(D,ie,q,k),Ue=new GM(D,U,ie),xe=new JM(D,U,ie),ie.programs=X.programs,y.capabilities=q,y.extensions=U,y.properties=ee,y.renderLists=oe,y.shadowMap=ae,y.state=k,y.info=ie}x();const W=new zS(y,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=U.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=U.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(se,Z,!1))},this.getSize=function(E){return E.set(se,Z)},this.setSize=function(E,z,$=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=E,Z=z,t.width=Math.floor(E*te),t.height=Math.floor(z*te),$===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(se*te,Z*te).floor()},this.setDrawingBufferSize=function(E,z,$){se=E,Z=z,te=$,t.width=Math.floor(E*$),t.height=Math.floor(z*$),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,z,$,K){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,z,$,K),k.viewport(M.copy(be).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,z,$,K){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,z,$,K),k.scissor(R.copy(Se).multiplyScalar(te).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){k.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E=!0,z=!0,$=!0){let K=0;if(E){let H=!1;if(C!==null){const de=C.texture.format;H=de===qc||de===jc||de===Xc}if(H){const de=C.texture.type,we=de===ei||de===ir||de===Us||de===$r||de===Gc||de===Wc,Ce=me.getClearColor(),Te=me.getClearAlpha(),He=Ce.r,ke=Ce.g,Be=Ce.b;we?(p[0]=He,p[1]=ke,p[2]=Be,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=He,g[1]=ke,g[2]=Be,g[3]=Te,D.clearBufferiv(D.COLOR,0,g))}else K|=D.COLOR_BUFFER_BIT}z&&(K|=D.DEPTH_BUFFER_BIT),$&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",le,!1),oe.dispose(),ue.dispose(),ee.dispose(),S.dispose(),v.dispose(),V.dispose(),Ae.dispose(),Ke.dispose(),X.dispose(),W.dispose(),W.removeEventListener("sessionstart",xt),W.removeEventListener("sessionend",vn),_e.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ie.autoReset,z=ae.enabled,$=ae.autoUpdate,K=ae.needsUpdate,H=ae.type;x(),ie.autoReset=E,ae.enabled=z,ae.autoUpdate=$,ae.needsUpdate=K,ae.type=H}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const z=E.target;z.removeEventListener("dispose",Re),Fe(z)}function Fe(E){mt(E),ee.remove(E)}function mt(E){const z=ee.get(E).programs;z!==void 0&&(z.forEach(function($){X.releaseProgram($)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,$,K,H,de){z===null&&(z=Ve);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ce=Aa(E,z,$,K,H);k.setMaterial(K,we);let Te=$.index,He=1;if(K.wireframe===!0){if(Te=G.getWireframeAttribute($),Te===void 0)return;He=2}const ke=$.drawRange,Be=$.attributes.position;let nt=ke.start*He,Mt=(ke.start+ke.count)*He;de!==null&&(nt=Math.max(nt,de.start*He),Mt=Math.min(Mt,(de.start+de.count)*He)),Te!==null?(nt=Math.max(nt,0),Mt=Math.min(Mt,Te.count)):Be!=null&&(nt=Math.max(nt,0),Mt=Math.min(Mt,Be.count));const yt=Mt-nt;if(yt<0||yt===1/0)return;Ae.setup(H,K,Ce,$,Te);let nn,rt=Ue;if(Te!==null&&(nn=I.get(Te),rt=xe,rt.setIndex(nn)),H.isMesh)K.wireframe===!0?(k.setLineWidth(K.wireframeLinewidth*it()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(H.isLine){let Le=K.linewidth;Le===void 0&&(Le=1),k.setLineWidth(Le*it()),H.isLineSegments?rt.setMode(D.LINES):H.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else H.isPoints?rt.setMode(D.POINTS):H.isSprite&&rt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Ft=H._multiDrawCounts,st=H._multiDrawCount,xn=Te?I.get(Te).bytesPerElement:1,ur=ee.get(K).currentProgram.getUniforms();for(let rn=0;rn<st;rn++)ur.setValue(D,"_gl_DrawID",rn),rt.render(Le[rn]/xn,Ft[rn])}else if(H.isInstancedMesh)rt.renderInstances(nt,yt,H.count);else if($.isInstancedBufferGeometry){const Le=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ft=Math.min($.instanceCount,Le);rt.renderInstances(nt,yt,Ft)}else rt.render(nt,yt)};function _t(E,z,$){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Vn(E,z,$),E.side=Ri,E.needsUpdate=!0,Vn(E,z,$),E.side=Bn):Vn(E,z,$)}this.compile=function(E,z,$=null){$===null&&($=E),m=ue.get($),m.init(z),w.push(m),$.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==$&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const K=new Set;return E.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){const Ce=de[we];_t(Ce,$,H),K.add(Ce)}else _t(de,$,H),K.add(de)}),w.pop(),m=null,K},this.compileAsync=function(E,z,$=null){const K=this.compile(E,z,$);return new Promise(H=>{function de(){if(K.forEach(function(we){ee.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){H(E);return}setTimeout(de,10)}U.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Je=null;function vt(E){Je&&Je(E)}function xt(){_e.stop()}function vn(){_e.start()}const _e=new Nd;_e.setAnimationLoop(vt),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(E){Je=E,W.setAnimationLoop(E),E===null?_e.stop():_e.start()},W.addEventListener("sessionstart",xt),W.addEventListener("sessionend",vn),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(z),z=W.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,C),m=ue.get(E,w.length),m.init(z),w.push(m),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ze.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,ne=Ee.init(this.clippingPlanes,fe),_=oe.get(E,d.length),_.init(),d.push(_),W.enabled===!0&&W.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&We(de,z,-1/0,y.sortObjects)}We(E,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(j,ge),ze=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ze&&me.addToRenderList(_,E),this.info.render.frame++,ne===!0&&Ee.beginShadows();const $=m.state.shadowsArray;ae.render($,E,z),ne===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,H=_.transmissive;if(m.setupLights(),z.isArrayCamera){const de=z.cameras;if(H.length>0)for(let we=0,Ce=de.length;we<Ce;we++){const Te=de[we];Dt(K,H,E,Te)}ze&&me.render(E);for(let we=0,Ce=de.length;we<Ce;we++){const Te=de[we];Oe(_,E,Te,Te.viewport)}}else H.length>0&&Dt(K,H,E,z),ze&&me.render(E),Oe(_,E,z);C!==null&&(re.updateMultisampleRenderTarget(C),re.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,z),Ae.resetDefaultState(),P=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],ne===!0&&Ee.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function We(E,z,$,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ze.intersectsSprite(E)){K&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const we=V.update(E),Ce=E.material;Ce.visible&&_.push(E,we,Ce,$,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ze.intersectsObject(E))){const we=V.update(E),Ce=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(Ce)){const Te=we.groups;for(let He=0,ke=Te.length;He<ke;He++){const Be=Te[He],nt=Ce[Be.materialIndex];nt&&nt.visible&&_.push(E,we,nt,$,Ie.z,Be)}}else Ce.visible&&_.push(E,we,Ce,$,Ie.z,null)}}const de=E.children;for(let we=0,Ce=de.length;we<Ce;we++)We(de[we],z,$,K)}function Oe(E,z,$,K){const H=E.opaque,de=E.transmissive,we=E.transparent;m.setupLightsView($),ne===!0&&Ee.setGlobalState(y.clippingPlanes,$),K&&k.viewport(M.copy(K)),H.length>0&&Ct(H,z,$),de.length>0&&Ct(de,z,$),we.length>0&&Ct(we,z,$),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Dt(E,z,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new rr(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?ks:ei,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const de=m.state.transmissionRenderTarget[K.id],we=K.viewport||M;de.setSize(we.z,we.w);const Ce=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(B),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),ze?me.render($):y.clear();const Te=y.toneMapping;y.toneMapping=wi;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ne===!0&&Ee.setGlobalState(y.clippingPlanes,K),Ct(E,$,K),re.updateMultisampleRenderTarget(de),re.updateRenderTargetMipmap(de),U.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Be=0,nt=z.length;Be<nt;Be++){const Mt=z[Be],yt=Mt.object,nn=Mt.geometry,rt=Mt.material,Le=Mt.group;if(rt.side===Bn&&yt.layers.test(K.layers)){const Ft=rt.side;rt.side=en,rt.needsUpdate=!0,In(yt,$,K,nn,rt,Le),rt.side=Ft,rt.needsUpdate=!0,ke=!0}}ke===!0&&(re.updateMultisampleRenderTarget(de),re.updateRenderTargetMipmap(de))}y.setRenderTarget(Ce),y.setClearColor(B,J),He!==void 0&&(K.viewport=He),y.toneMapping=Te}function Ct(E,z,$){const K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,de=E.length;H<de;H++){const we=E[H],Ce=we.object,Te=we.geometry,He=K===null?we.material:K,ke=we.group;Ce.layers.test($.layers)&&In(Ce,z,$,Te,He,ke)}}function In(E,z,$,K,H,de){E.onBeforeRender(y,z,$,K,H,de),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,y.renderBufferDirect($,z,K,H,E,de),H.side=Ri,H.needsUpdate=!0,y.renderBufferDirect($,z,K,H,E,de),H.side=Bn):y.renderBufferDirect($,z,K,H,E,de),E.onAfterRender(y,z,$,K,H,de)}function Vn(E,z,$){z.isScene!==!0&&(z=Ve);const K=ee.get(E),H=m.state.lights,de=m.state.shadowsArray,we=H.state.version,Ce=X.getParameters(E,H.state,de,z,$),Te=X.getProgramCacheKey(Ce);let He=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?v:S).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Re),He=new Map,K.programs=He);let ke=He.get(Te);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===we)return ri(E,Ce),ke}else Ce.uniforms=X.getUniforms(E),E.onBeforeCompile(Ce,y),ke=X.acquireProgram(Ce,Te),He.set(Te,ke),K.uniforms=Ce.uniforms;const Be=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),ri(E,Ce),K.needsLights=Ca(E),K.lightsStateVersion=we,K.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=ke,K.uniformsList=null,ke}function ii(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Go.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ri(E,z){const $=ee.get(E);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Aa(E,z,$,K,H){z.isScene!==!0&&(z=Ve),re.resetTextureUnits();const de=z.fog,we=K.isMeshStandardMaterial?z.environment:null,Ce=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Li,Te=(K.isMeshStandardMaterial?v:S).get(K.envMap||we),He=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!$.morphAttributes.position,nt=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color;let yt=wi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=y.toneMapping);const nn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=nn!==void 0?nn.length:0,Le=ee.get(K),Ft=m.state.lights;if(ne===!0&&(fe===!0||E!==b)){const ln=E===b&&K.id===P;Ee.setState(K,E,ln)}let st=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ft.state.version||Le.outputColorSpace!==Ce||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==Te||K.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ee.numPlanes||Le.numIntersection!==Ee.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==ke||Le.morphTargets!==Be||Le.morphNormals!==nt||Le.morphColors!==Mt||Le.toneMapping!==yt||Le.morphTargetsCount!==rt)&&(st=!0):(st=!0,Le.__version=K.version);let xn=Le.currentProgram;st===!0&&(xn=Vn(K,z,H));let ur=!1,rn=!1,Ra=!1;const Et=xn.getUniforms(),si=Le.uniforms;if(k.useProgram(xn.program)&&(ur=!0,rn=!0,Ra=!0),K.id!==P&&(P=K.id,rn=!0),ur||b!==E){Et.setValue(D,"projectionMatrix",E.projectionMatrix),Et.setValue(D,"viewMatrix",E.matrixWorldInverse);const ln=Et.map.cameraPosition;ln!==void 0&&ln.setValue(D,ve.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Et.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,rn=!0,Ra=!0)}if(H.isSkinnedMesh){Et.setOptional(D,H,"bindMatrix"),Et.setOptional(D,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Et.setValue(D,"boneTexture",ln.boneTexture,re))}H.isBatchedMesh&&(Et.setOptional(D,H,"batchingTexture"),Et.setValue(D,"batchingTexture",H._matricesTexture,re),Et.setOptional(D,H,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",H._indirectTexture,re),Et.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",H._colorsTexture,re));const Pa=$.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&Xe.update(H,$,xn),(rn||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,Et.setValue(D,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(si.envMap.value=Te,si.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(si.envMapIntensity.value=z.environmentIntensity),rn&&(Et.setValue(D,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&os(si,Ra),de&&K.fog===!0&&ce.refreshFogUniforms(si,de),ce.refreshMaterialUniforms(si,K,te,Z,m.state.transmissionRenderTarget[E.id]),Go.upload(D,ii(Le),si,re)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Go.upload(D,ii(Le),si,re),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Et.setValue(D,"center",H.center),Et.setValue(D,"modelViewMatrix",H.modelViewMatrix),Et.setValue(D,"normalMatrix",H.normalMatrix),Et.setValue(D,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let La=0,Yd=ln.length;La<Yd;La++){const au=ln[La];Ke.update(au,xn),Ke.bind(au,xn)}}return xn}function os(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ca(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,$){ee.get(E.texture).__webglTexture=z,ee.get(E.depthTexture).__webglTexture=$;const K=ee.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const $=ee.get(E);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,$=0){C=E,O=z,A=$;let K=!0,H=null,de=!1,we=!1;if(E){const Te=ee.get(E);Te.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(D.FRAMEBUFFER,null),K=!1):Te.__webglFramebuffer===void 0?re.setupRenderTarget(E):Te.__hasExternalTextures&&re.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const ke=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?H=ke[z][$]:H=ke[z],de=!0):E.samples>0&&re.useMultisampledRTT(E)===!1?H=ee.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[$]:H=ke,M.copy(E.viewport),R.copy(E.scissor),F=E.scissorTest}else M.copy(be).multiplyScalar(te).floor(),R.copy(Se).multiplyScalar(te).floor(),F=Pe;if(k.bindFramebuffer(D.FRAMEBUFFER,H)&&K&&k.drawBuffers(E,H),k.viewport(M),k.scissor(R),k.setScissorTest(F),de){const Te=ee.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,$)}else if(we){const Te=ee.get(E.texture),He=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,$||0,He)}P=-1},this.readRenderTargetPixels=function(E,z,$,K,H,de,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){k.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Te=E.texture,He=Te.format,ke=Te.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&$>=0&&$<=E.height-H&&D.readPixels(z,$,K,H,Ne.convert(He),Ne.convert(ke),de)}finally{const Te=C!==null?ee.get(C).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,z,$,K,H,de,we){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){k.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Te=E.texture,He=Te.format,ke=Te.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&$>=0&&$<=E.height-H){const Be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(z,$,K,H,Ne.convert(He),Ne.convert(ke),0),D.flush();const nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await N0(D,nt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de)}finally{D.deleteBuffer(Be),D.deleteSync(nt)}return de}}finally{const Te=C!==null?ee.get(C).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,z=null,$=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-$),H=Math.floor(E.image.width*K),de=Math.floor(E.image.height*K),we=z!==null?z.x:0,Ce=z!==null?z.y:0;re.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,we,Ce,H,de),k.unbindTexture()},this.copyTextureToTexture=function(E,z,$=null,K=null,H=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],H=arguments[3]||0,$=null);let de,we,Ce,Te,He,ke;$!==null?(de=$.max.x-$.min.x,we=$.max.y-$.min.y,Ce=$.min.x,Te=$.min.y):(de=E.image.width,we=E.image.height,Ce=0,Te=0),K!==null?(He=K.x,ke=K.y):(He=0,ke=0);const Be=Ne.convert(z.format),nt=Ne.convert(z.type);re.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Mt=D.getParameter(D.UNPACK_ROW_LENGTH),yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),rt=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[H]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,He,ke,de,we,Be,nt,Ft.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,He,ke,Ft.width,Ft.height,Be,Ft.data):D.texSubImage2D(D.TEXTURE_2D,H,He,ke,de,we,Be,nt,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),H===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(E,z,$=null,K=null,H=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],H=arguments[4]||0);let de,we,Ce,Te,He,ke,Be,nt,Mt;const yt=E.isCompressedTexture?E.mipmaps[H]:E.image;$!==null?(de=$.max.x-$.min.x,we=$.max.y-$.min.y,Ce=$.max.z-$.min.z,Te=$.min.x,He=$.min.y,ke=$.min.z):(de=yt.width,we=yt.height,Ce=yt.depth,Te=0,He=0,ke=0),K!==null?(Be=K.x,nt=K.y,Mt=K.z):(Be=0,nt=0,Mt=0);const nn=Ne.convert(z.format),rt=Ne.convert(z.type);let Le;if(z.isData3DTexture)re.setTexture3D(z,0),Le=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)re.setTexture2DArray(z,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xn=D.getParameter(D.UNPACK_SKIP_PIXELS),ur=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Le,H,Be,nt,Mt,de,we,Ce,nn,rt,yt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,H,Be,nt,Mt,de,we,Ce,nn,yt.data):D.texSubImage3D(Le,H,Be,nt,Mt,de,we,Ce,nn,rt,yt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ur),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),H===0&&z.generateMipmaps&&D.generateMipmap(Le),k.unbindTexture()},this.initRenderTarget=function(E){ee.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){O=0,A=0,C=null,k.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Sa?"display-p3":"srgb"}}class tu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new tu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nu extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class GS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new N;class ia{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vd extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pr;const ds=new N,Lr=new N,Ir=new N,Dr=new De,ps=new De,Gd=new dt,Mo=new N,ms=new N,yo=new N,Hh=new De,pl=new De,Vh=new De;class WS extends At{constructor(e=new Vd){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new GS(t,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new ia(i,3,0,!1)),Pr.setAttribute("uv",new ia(i,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),Gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Ir.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;So(Mo.set(-.5,-.5,0),Ir,o,Lr,r,s),So(ms.set(.5,-.5,0),Ir,o,Lr,r,s),So(yo.set(.5,.5,0),Ir,o,Lr,r,s),Hh.set(0,0),pl.set(1,0),Vh.set(1,1);let a=e.ray.intersectTriangle(Mo,ms,yo,!1,ds);if(a===null&&(So(ms.set(-.5,.5,0),Ir,o,Lr,r,s),pl.set(0,1),a=e.ray.intersectTriangle(Mo,yo,ms,!1,ds),a===null))return;const c=e.ray.origin.distanceTo(ds);c<e.near||c>e.far||t.push({distance:c,point:ds.clone(),uv:dn.getInterpolation(ds,Mo,ms,yo,Hh,pl,Vh,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(n,e,t,i,r,s){Dr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ps.x=s*Dr.x-r*Dr.y,ps.y=r*Dr.x+s*Dr.y):ps.copy(Dr),n.copy(e),n.x+=ps.x,n.y+=ps.y,n.applyMatrix4(Gd)}class Ti extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new N,sa=new N,Gh=new dt,gs=new ba,bo=new is,ml=new N,Wh=new N;class gc extends At{constructor(e=new Pt,t=new Ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ra.fromBufferAttribute(t,r-1),sa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ra.distanceTo(sa);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),bo.radius+=s,e.ray.intersectsSphere(bo)===!1)return;Gh.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),w=u.getX(_+1),y=Eo(this,e,gs,c,d,w);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Eo(this,e,gs,c,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Eo(this,e,gs,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Eo(this,e,gs,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eo(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ra.fromBufferAttribute(o,r),sa.fromBufferAttribute(o,s),t.distanceSqToSegment(ra,sa,ml,Wh)>i)return;ml.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ml);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Xh=new N,jh=new N;class oa extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Xh.fromBufferAttribute(t,r),jh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xh.distanceTo(jh);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zi extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new dt,_c=new ba,wo=new is,To=new N;class Ts extends At{constructor(e=new Pt,t=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;qh.copy(r).invert(),_c.copy(e.ray).applyMatrix4(qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=l.getX(g);To.fromBufferAttribute(f,m),Yh(To,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)To.fromBufferAttribute(f,g),Yh(To,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yh(n,e,t,i,r,s,o){const a=_c.distanceSqToPoint(n);if(a<t){const c=new N;_c.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class XS extends Xt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ao=new N,Co=new N,gl=new N,Ro=new dn;class jS extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Gr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:d}=Ro;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),Ro.getNormal(gl),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const y=(w+1)%3,T=f[w],O=f[y],A=Ro[u[w]],C=Ro[u[y]],P=`${T}_${O}`,b=`${O}_${T}`;b in h&&h[b]?(gl.dot(h[b].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(C.x,C.y,C.z)),h[b]=null):P in h||(h[P]={index0:l[w],index1:l[y],normal:gl.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];Ao.fromBufferAttribute(a,_),Co.fromBufferAttribute(a,m),p.push(Ao.x,Ao.y,Ao.z),p.push(Co.x,Co.y,Co.z)}this.setAttribute("position",new ut(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class iu extends Pt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=e;const h=(t-e)/r,p=new N,g=new De;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const w=d+m,y=w,T=w+i+1,O=w+i+2,A=w+1;a.push(y,T,A),a.push(T,O,A)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class aa extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends Ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YS extends Ti{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const la={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class $S{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const KS=new $S;class Vs{constructor(e){this.manager=e!==void 0?e:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class ZS extends Error{constructor(e,t){super(e),this.response=t}}class JS extends Vs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=la.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:i,onError:r});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Yn[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){w();function w(){f.read().then(({done:y,value:T})=>{if(y)d.close();else{_+=T.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,C=u.length;A<C;A++){const P=u[A];P.onProgress&&P.onProgress(O)}d.enqueue(T),w()}},y=>{d.error(y)})}}});return new Response(m)}else throw new ZS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{la.add(e,l);const u=Yn[e];delete Yn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class QS extends Vs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=la.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Os("img");function c(){u(),la.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Wd extends Vs{constructor(e){super(e)}load(e,t,i,r){const s=new Xt,o=new QS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ru extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _l=new dt,$h=new N,Kh=new N;class Xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zh=new dt,_s=new N,vl=new N;class eb extends Xd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),i.position.copy(_s),vl.copy(i.position),vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vl),i.updateMatrixWorld(),r.makeTranslation(-_s.x,-_s.y,-_s.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class tb extends ru{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nb extends Xd{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bs extends ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class su extends ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ib extends oa{constructor(e=10,t=10,i=4473924,r=8947848){i=new je(i),r=new je(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let h=0,p=0,g=-a;h<=t;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=h===s?i:r;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new Pt;u.setAttribute("position",new ut(c,3)),u.setAttribute("color",new ut(l,3));const f=new Ti({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);const Qh={type:"change"},xl={type:"start"},ef={type:"end"},Po=new ba,tf=new Mi,rb=Math.cos(70*Fs.DEG2RAD);class sb extends cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hr.ROTATE,MIDDLE:hr.DOLLY,RIGHT:hr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ue),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qh),i.update(),s=r.NONE},this.update=function(){const x=new N,W=new Ht().setFromUnitVectors(e.up,new N(0,1,0)),Y=W.clone().invert(),Q=new N,le=new Ht,Re=new N,Fe=2*Math.PI;return function(_t=null){const Je=i.object.position;x.copy(Je).sub(i.target),x.applyQuaternion(W),a.setFromVector3(x),i.autoRotate&&s===r.NONE&&F(M(_t)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let vt=i.minAzimuthAngle,xt=i.maxAzimuthAngle;isFinite(vt)&&isFinite(xt)&&(vt<-Math.PI?vt+=Fe:vt>Math.PI&&(vt-=Fe),xt<-Math.PI?xt+=Fe:xt>Math.PI&&(xt-=Fe),vt<=xt?a.theta=Math.max(vt,Math.min(xt,a.theta)):a.theta=a.theta>(vt+xt)/2?Math.max(vt,a.theta):Math.min(xt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let vn=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=be(a.radius);else{const _e=a.radius;a.radius=be(a.radius*l),vn=_e!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(Y),Je.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let _e=null;if(i.object.isPerspectiveCamera){const We=x.length();_e=be(We*l);const Oe=We-_e;i.object.position.addScaledVector(T,Oe),i.object.updateMatrixWorld(),vn=!!Oe}else if(i.object.isOrthographicCamera){const We=new N(O.x,O.y,0);We.unproject(i.object);const Oe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),vn=Oe!==i.object.zoom;const Dt=new N(O.x,O.y,0);Dt.unproject(i.object),i.object.position.sub(Dt).add(We),i.object.updateMatrixWorld(),_e=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;_e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(_e).add(i.object.position):(Po.origin.copy(i.object.position),Po.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Po.direction))<rb?e.lookAt(i.target):(tf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Po.intersectPlane(tf,i.target))))}else if(i.object.isOrthographicCamera){const _e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),_e!==i.object.zoom&&(i.object.updateProjectionMatrix(),vn=!0)}return l=1,A=!1,vn||Q.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(Qh),Q.copy(i.object.position),le.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",re),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Jh,c=new Jh;let l=1;const u=new N,f=new De,h=new De,p=new De,g=new De,_=new De,m=new De,d=new De,w=new De,y=new De,T=new N,O=new De;let A=!1;const C=[],P={};let b=!1;function M(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function R(x){const W=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*W)}function F(x){c.theta-=x}function B(x){c.phi-=x}const J=function(){const x=new N;return function(Y,Q){x.setFromMatrixColumn(Q,0),x.multiplyScalar(-Y),u.add(x)}}(),se=function(){const x=new N;return function(Y,Q){i.screenSpacePanning===!0?x.setFromMatrixColumn(Q,1):(x.setFromMatrixColumn(Q,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(Y),u.add(x)}}(),Z=function(){const x=new N;return function(Y,Q){const le=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;x.copy(Re).sub(i.target);let Fe=x.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),J(2*Y*Fe/le.clientHeight,i.object.matrix),se(2*Q*Fe/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(Y*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),se(Q*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ge(x,W){if(!i.zoomToCursor)return;A=!0;const Y=i.domElement.getBoundingClientRect(),Q=x-Y.left,le=W-Y.top,Re=Y.width,Fe=Y.height;O.x=Q/Re*2-1,O.y=-(le/Fe)*2+1,T.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function be(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function Se(x){f.set(x.clientX,x.clientY)}function Pe(x){ge(x.clientX,x.clientX),d.set(x.clientX,x.clientY)}function Ze(x){g.set(x.clientX,x.clientY)}function ne(x){h.set(x.clientX,x.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;F(2*Math.PI*p.x/W.clientHeight),B(2*Math.PI*p.y/W.clientHeight),f.copy(h),i.update()}function fe(x){w.set(x.clientX,x.clientY),y.subVectors(w,d),y.y>0?te(R(y.y)):y.y<0&&j(R(y.y)),d.copy(w),i.update()}function pe(x){_.set(x.clientX,x.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(_),i.update()}function ve(x){ge(x.clientX,x.clientY),x.deltaY<0?j(R(x.deltaY)):x.deltaY>0&&te(R(x.deltaY)),i.update()}function Ie(x){let W=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),W=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),W=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),W=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),W=!0;break}W&&(x.preventDefault(),i.update())}function Ve(x){if(C.length===1)f.set(x.pageX,x.pageY);else{const W=Ae(x),Y=.5*(x.pageX+W.x),Q=.5*(x.pageY+W.y);f.set(Y,Q)}}function ze(x){if(C.length===1)g.set(x.pageX,x.pageY);else{const W=Ae(x),Y=.5*(x.pageX+W.x),Q=.5*(x.pageY+W.y);g.set(Y,Q)}}function it(x){const W=Ae(x),Y=x.pageX-W.x,Q=x.pageY-W.y,le=Math.sqrt(Y*Y+Q*Q);d.set(0,le)}function D(x){i.enableZoom&&it(x),i.enablePan&&ze(x)}function L(x){i.enableZoom&&it(x),i.enableRotate&&Ve(x)}function U(x){if(C.length==1)h.set(x.pageX,x.pageY);else{const Y=Ae(x),Q=.5*(x.pageX+Y.x),le=.5*(x.pageY+Y.y);h.set(Q,le)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;F(2*Math.PI*p.x/W.clientHeight),B(2*Math.PI*p.y/W.clientHeight),f.copy(h)}function q(x){if(C.length===1)_.set(x.pageX,x.pageY);else{const W=Ae(x),Y=.5*(x.pageX+W.x),Q=.5*(x.pageY+W.y);_.set(Y,Q)}m.subVectors(_,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(_)}function k(x){const W=Ae(x),Y=x.pageX-W.x,Q=x.pageY-W.y,le=Math.sqrt(Y*Y+Q*Q);w.set(0,le),y.set(0,Math.pow(w.y/d.y,i.zoomSpeed)),te(y.y),d.copy(w);const Re=(x.pageX+W.x)*.5,Fe=(x.pageY+W.y)*.5;ge(Re,Fe)}function ie(x){i.enableZoom&&k(x),i.enablePan&&q(x)}function ee(x){i.enableZoom&&k(x),i.enableRotate&&U(x)}function re(x){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",v)),!xe(x)&&(Xe(x),x.pointerType==="touch"?Ee(x):I(x)))}function S(x){i.enabled!==!1&&(x.pointerType==="touch"?ae(x):G(x))}function v(x){switch(Ue(x),C.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(ef),s=r.NONE;break;case 1:const W=C[0],Y=P[W];Ee({pointerId:W,pageX:Y.x,pageY:Y.y});break}}function I(x){let W;switch(x.button){case 0:W=i.mouseButtons.LEFT;break;case 1:W=i.mouseButtons.MIDDLE;break;case 2:W=i.mouseButtons.RIGHT;break;default:W=-1}switch(W){case hr.DOLLY:if(i.enableZoom===!1)return;Pe(x),s=r.DOLLY;break;case hr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Ze(x),s=r.PAN}else{if(i.enableRotate===!1)return;Se(x),s=r.ROTATE}break;case hr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;Se(x),s=r.ROTATE}else{if(i.enablePan===!1)return;Ze(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xl)}function G(x){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ne(x);break;case r.DOLLY:if(i.enableZoom===!1)return;fe(x);break;case r.PAN:if(i.enablePan===!1)return;pe(x);break}}function V(x){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(x.preventDefault(),i.dispatchEvent(xl),ve(X(x)),i.dispatchEvent(ef))}function X(x){const W=x.deltaMode,Y={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(W){case 1:Y.deltaY*=16;break;case 2:Y.deltaY*=100;break}return x.ctrlKey&&!b&&(Y.deltaY*=10),Y}function ce(x){x.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(x){x.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function ue(x){i.enabled===!1||i.enablePan===!1||Ie(x)}function Ee(x){switch(Ne(x),C.length){case 1:switch(i.touches.ONE){case fr.ROTATE:if(i.enableRotate===!1)return;Ve(x),s=r.TOUCH_ROTATE;break;case fr.PAN:if(i.enablePan===!1)return;ze(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case fr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(x),s=r.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xl)}function ae(x){switch(Ne(x),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;U(x),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;q(x),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ie(x),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(x),i.update();break;default:s=r.NONE}}function me(x){i.enabled!==!1&&x.preventDefault()}function Xe(x){C.push(x.pointerId)}function Ue(x){delete P[x.pointerId];for(let W=0;W<C.length;W++)if(C[W]==x.pointerId){C.splice(W,1);return}}function xe(x){for(let W=0;W<C.length;W++)if(C[W]==x.pointerId)return!0;return!1}function Ne(x){let W=P[x.pointerId];W===void 0&&(W=new De,P[x.pointerId]=W),W.set(x.pageX,x.pageY)}function Ae(x){const W=x.pointerId===C[0]?C[1]:C[0];return P[W]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",re),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",V,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}const ob=kn({__name:"ThreeDDiagram",props:{nodes:{},edges:{},title:{}},setup(n){const e=n,t=Ot(null),i={client:14807014,gateway:15715176,service:2759236,storage:854048,infra:3816768},r={client:10528932,gateway:15715176,service:11450291,storage:15715176,infra:6975600};function s(h,p,g){const m=p?128:80,d=document.createElement("canvas");d.width=512,d.height=m;const w=d.getContext("2d"),y=g==="gateway"?"#EFCB68":g==="client"?"#E1EFE6":"#AEB7B3";w.clearRect(0,0,512,m),w.fillStyle=y,w.font='bold 36px "JetBrains Mono", monospace',w.textAlign="center",w.textBaseline="middle",w.fillText(h,512/2,p?m*.38:m/2),p&&(w.fillStyle="rgba(174,183,179,0.75)",w.font='22px "JetBrains Mono", monospace',w.fillText(p.split(`
`)[0],512/2,m*.68),p.includes(`
`)&&w.fillText(p.split(`
`)[1],512/2,m*.85));const T=new XS(d);T.needsUpdate=!0;const O=new Vd({map:T,transparent:!0,depthTest:!1}),A=new WS(O),C=512/m;return A.scale.set(C*.55,.55,1),A}function o(h){const p=new Fr;p.position.set(h.x,h.y,h.z);const g=new rs(1.1,.52,.18),_=new aa({color:i[h.type]??2759236,transparent:!0,opacity:h.type==="storage"?.85:.9,roughness:.6,metalness:.2}),m=new Bt(g,_);p.add(m);const d=new jS(g),w=new Ti({color:r[h.type]??11450291,transparent:!0,opacity:.7}),y=new oa(d,w);p.add(y);const T=s(h.label,h.sublabel,h.type);return T.position.set(0,.55,0),p.add(T),p}function a(h,p){const g=[h,p],_=new Pt().setFromPoints(g),m=new YS({color:11450291,dashSize:.12,gapSize:.08,transparent:!0,opacity:.4}),d=new gc(_,m);return d.computeLineDistances(),d}function c(h,p){const g=[h,p],_=new Pt().setFromPoints(g),m=new Ti({color:15715176,transparent:!0,opacity:.35});return new gc(_,m)}let l=null,u;function f(){const h=t.value;if(!h)return;const p=h.clientWidth,g=h.clientHeight,_=new nu,m=new Kt(50,p/g,.01,100);l=new eu({alpha:!0,antialias:!0}),l.setSize(p,g),l.setPixelRatio(window.devicePixelRatio),h.appendChild(l.domElement),_.add(new su(16777215,.6));const d=new Bs(15715176,.8);d.position.set(3,5,3),_.add(d);const w=new Bs(14807014,.3);w.position.set(-3,-2,-2),_.add(w);const y=new sb(m,l.domElement);y.enableDamping=!0,y.dampingFactor=.06,y.enablePan=!1,y.minDistance=2,y.maxDistance=14,y.autoRotate=!0,y.autoRotateSpeed=.4;const T=new Map;for(const R of e.nodes){const F=o(R);_.add(F),T.set(R.id,{group:F,data:R})}for(const R of e.edges){const F=T.get(R.from),B=T.get(R.to);if(!F||!B)continue;const J=new N(F.data.x,F.data.y,F.data.z),se=new N(B.data.x,B.data.y,B.data.z),Z=R.dashed?a(J,se):c(J,se);_.add(Z)}const O=e.nodes.map(R=>new N(R.x,R.y,R.z)),A=new ns;O.forEach(R=>A.expandByPoint(R));const C=new N;A.getCenter(C);const P=new is;A.getBoundingSphere(P),m.position.set(C.x,C.y,C.z+P.radius*2.2),y.target.copy(C),y.update();const b=()=>{if(!h||!l)return;const R=h.clientWidth,F=h.clientHeight;m.aspect=R/F,m.updateProjectionMatrix(),l.setSize(R,F)};window.addEventListener("resize",b),l.domElement.addEventListener("pointerdown",()=>{y.autoRotate=!1});const M=()=>{u=requestAnimationFrame(M),y.update(),l.render(_,m)};M(),h.__cleanup=()=>{cancelAnimationFrame(u),window.removeEventListener("resize",b),y.dispose(),l==null||l.dispose(),l==null||l.domElement.remove(),l=null,_.clear()}}return lr(()=>f()),ts(()=>{var p;const h=t.value;(p=h==null?void 0:h.__cleanup)==null||p.call(h)}),Ms([()=>e.nodes,()=>e.edges],()=>{var p;const h=t.value;(p=h==null?void 0:h.__cleanup)==null||p.call(h),l=null,f()},{deep:!0}),(h,p)=>(Qe(),ct("div",{ref_key:"containerRef",ref:t,class:"diagram-3d-container"},null,512))}}),ab=Hn(ob,[["__scopeId","data-v-38e9357d"]]),lb={title:"InesDB Architecture",nodes:[{id:"client",label:"Client",type:"client",x:0,y:2.5,z:0,sublabel:"psql / CLI / bench"},{id:"pgserver",label:"pg server",type:"gateway",x:0,y:1.4,z:0,sublabel:"PostgreSQL wire protocol"},{id:"sqlparser",label:"SQL Parser",type:"service",x:-1.4,y:.3,z:0,sublabel:"query interpretation"},{id:"txn",label:"Txn Manager",type:"service",x:0,y:.3,z:0,sublabel:"ACID, isolation levels"},{id:"concurrency",label:"Concurrency",type:"service",x:1.4,y:.3,z:0,sublabel:"MVCC · OCC · 2PL"},{id:"lsm",label:"LSM Tree",type:"storage",x:-1,y:-.9,z:0,sublabel:"MemTable + SSTable"},{id:"btree",label:"B+ Tree",type:"storage",x:.8,y:-.9,z:0,sublabel:"pluggable backend"},{id:"wal",label:"WAL",type:"storage",x:2.2,y:-.9,z:0,sublabel:"durability log"},{id:"bench",label:"Maelstrom",type:"infra",x:-2.5,y:1.4,z:0,sublabel:"distributed test"}],edges:[{from:"client",to:"pgserver"},{from:"bench",to:"pgserver",label:"inject faults",dashed:!0},{from:"pgserver",to:"sqlparser"},{from:"pgserver",to:"txn"},{from:"sqlparser",to:"txn"},{from:"txn",to:"concurrency"},{from:"txn",to:"lsm"},{from:"txn",to:"btree"},{from:"concurrency",to:"lsm"},{from:"lsm",to:"wal"},{from:"btree",to:"wal"}]},cb={title:"P2P Video Streaming",nodes:[{id:"client1",label:"Client A",type:"client",x:-2.5,y:1.2,z:.5,sublabel:"jitter buffer"},{id:"client2",label:"Client B",type:"client",x:-2.5,y:-.4,z:.5,sublabel:"jitter buffer"},{id:"bs",label:"Bootstrapper",type:"gateway",x:0,y:2,z:0,sublabel:"peer discovery"},{id:"pn1",label:"Presence N1",type:"service",x:-1.2,y:.4,z:-.5,sublabel:"routing table"},{id:"pn2",label:"Presence N2",type:"service",x:.4,y:.4,z:-.5,sublabel:"routing table"},{id:"pn3",label:"Presence N3",type:"service",x:1.8,y:.4,z:-.5,sublabel:"routing table"},{id:"router",label:"Dist. Vector",type:"service",x:.4,y:-.8,z:-.5,sublabel:"Bellman-Ford"},{id:"server",label:"Video Server",type:"storage",x:.4,y:-2,z:0,sublabel:"stream source"}],edges:[{from:"client1",to:"bs",label:"join",dashed:!0},{from:"client2",to:"bs",label:"join",dashed:!0},{from:"bs",to:"pn1",label:"assign node"},{from:"bs",to:"pn2"},{from:"bs",to:"pn3"},{from:"pn1",to:"pn2",label:"QUIC"},{from:"pn2",to:"pn3",label:"QUIC"},{from:"pn1",to:"router"},{from:"pn2",to:"router"},{from:"pn3",to:"router"},{from:"router",to:"server",label:"RTP/UDP"},{from:"client1",to:"pn1",label:"stream",dashed:!0},{from:"client2",to:"pn2",label:"stream",dashed:!0}]},ub={title:"Raft Consensus",nodes:[{id:"maelstrom",label:"Maelstrom",type:"infra",x:-2.8,y:0,z:0,sublabel:"fault injection"},{id:"main",label:"main.go",type:"gateway",x:-1.2,y:0,z:0,sublabel:"msg dispatcher"},{id:"follower",label:"Follower",type:"service",x:.6,y:1.4,z:.6,sublabel:"heartbeat + vote"},{id:"candidate",label:"Candidate",type:"service",x:.6,y:0,z:.6,sublabel:"RequestVote RPCs"},{id:"leader",label:"Leader",type:"gateway",x:.6,y:-1.4,z:.6,sublabel:"AppendEntries"},{id:"node",label:"node.go",type:"service",x:2.2,y:0,z:0,sublabel:"persistent state"},{id:"kvstore",label:"KV Store",type:"storage",x:3.5,y:.8,z:0,sublabel:"read/write/CAS"},{id:"log",label:"Raft Log",type:"storage",x:3.5,y:-.8,z:0,sublabel:"append-only"}],edges:[{from:"maelstrom",to:"main",label:"STDIN"},{from:"main",to:"follower",label:"dispatch"},{from:"main",to:"candidate",label:"dispatch"},{from:"main",to:"leader",label:"dispatch"},{from:"follower",to:"candidate",label:"timeout",dashed:!0},{from:"candidate",to:"leader",label:"majority",dashed:!0},{from:"candidate",to:"follower",label:"split",dashed:!0},{from:"leader",to:"follower",label:"crash",dashed:!0},{from:"follower",to:"node"},{from:"candidate",to:"node"},{from:"leader",to:"node"},{from:"node",to:"kvstore"},{from:"node",to:"log"},{from:"leader",to:"log",label:"append"}]},hb={title:"Picturas Microservices",nodes:[{id:"web",label:"React SPA",type:"client",x:0,y:3,z:0,sublabel:"picturas_web"},{id:"apigw",label:"API Gateway",type:"gateway",x:-.8,y:1.8,z:0,sublabel:"REST HTTP"},{id:"wsgw",label:"WS Gateway",type:"gateway",x:.8,y:1.8,z:0,sublabel:"real-time events"},{id:"orch",label:"Orchestrator",type:"gateway",x:0,y:.6,z:0,sublabel:"workflow coord."},{id:"users",label:"users-ms",type:"service",x:-2.4,y:-.6,z:0,sublabel:"auth + users"},{id:"projects",label:"projects-ms",type:"service",x:-.8,y:-.6,z:0,sublabel:"project lifecycle"},{id:"subs",label:"subscriptions",type:"service",x:.8,y:-.6,z:0,sublabel:"billing tiers"},{id:"filters",label:"Filter Workers",type:"service",x:2.4,y:-.6,z:-.8,sublabel:`brightness·resize·ocr
remove-bg·watermark+9`},{id:"mongo",label:"MongoDB",type:"storage",x:-1.2,y:-1.8,z:0,sublabel:"documents + jobs"},{id:"redis",label:"Redis",type:"storage",x:.4,y:-1.8,z:0,sublabel:"pub/sub + cache"},{id:"k8s",label:"K8s / Helm",type:"infra",x:2.2,y:-1.8,z:0,sublabel:"HPA auto-scaling"},{id:"tf",label:"Terraform",type:"infra",x:3.2,y:-1.8,z:0,sublabel:"IaC provisioning"}],edges:[{from:"web",to:"apigw"},{from:"web",to:"wsgw"},{from:"apigw",to:"orch"},{from:"wsgw",to:"orch",dashed:!0},{from:"orch",to:"users"},{from:"orch",to:"projects"},{from:"orch",to:"subs"},{from:"orch",to:"filters",label:"RabbitMQ queue"},{from:"users",to:"mongo"},{from:"projects",to:"mongo"},{from:"filters",to:"mongo"},{from:"filters",to:"redis",label:"job done"},{from:"redis",to:"wsgw",label:"pub/sub",dashed:!0},{from:"k8s",to:"filters",label:"scales",dashed:!0},{from:"tf",to:"k8s",label:"provisions",dashed:!0}]},fb={inesdb:lb,videostream:cb,raft:ub,picturas:hb},Ii=n=>(Qr("data-v-ffae2e51"),n=n(),es(),n),db={class:"modal-header"},pb={class:"min-w-0 flex-1"},mb={class:"modal-title"},gb={class:"modal-meta"},_b={class:"flex items-center gap-4 flex-shrink-0"},vb=["href"],xb=Ii(()=>he("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-3 w-3"},[he("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"})],-1)),Mb=Ii(()=>he("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"h-5 w-5"},[he("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),yb=[Mb],Sb=Ii(()=>he("div",{class:"modal-divider"},null,-1)),bb={class:"modal-body"},Eb={class:"modal-left"},wb=["innerHTML"],Tb={key:0,class:"mt-6"},Ab=Ii(()=>he("p",{class:"section-label mb-3"},"Architecture Notes",-1)),Cb={class:"key-points"},Rb=Ii(()=>he("span",{class:"key-point-marker"},"▸",-1)),Pb={class:"mt-6"},Lb=Ii(()=>he("p",{class:"section-label mb-3"},"Tech Stack",-1)),Ib={class:"flex flex-wrap gap-2"},Db={class:"modal-right"},Ub={class:"diagram-header"},Nb={class:"section-label"},Fb=Ii(()=>he("p",{class:"diagram-hint"},"drag to rotate · scroll to zoom",-1)),Ob={class:"diagram-wrapper"},Bb={key:1,class:"no-diagram"},zb=Ii(()=>he("p",{class:"text-ash font-mono text-sm"},"No diagram available.",-1)),kb=[zb],Hb=kn({__name:"ProjectModal",props:{project:{},sourceRect:{}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=Ot(!1),s=Ot(!1),o=fn(()=>{var u,f;const l=(f=(u=t.project)==null?void 0:u.detail)==null?void 0:f.diagramId;return l?fb[l]??null:null});Ms(()=>t.project,async l=>{l&&t.sourceRect&&(r.value=!1,s.value=!1,await Pc(),requestAnimationFrame(()=>{r.value=!0,setTimeout(()=>{s.value=!0},320)}))});function a(){s.value=!1,r.value=!1,setTimeout(()=>i("close"),460)}function c(l){l.key==="Escape"&&a()}return lr(()=>window.addEventListener("keydown",c)),ts(()=>window.removeEventListener("keydown",c)),(l,u)=>{var f,h,p;return Qe(),nr(nd,{to:"body"},[l.project?(Qe(),ct("div",{key:0,class:zn(["modal-overlay",{expanded:r.value}]),style:Ji(!r.value&&l.sourceRect?{top:l.sourceRect.top+"px",left:l.sourceRect.left+"px",width:l.sourceRect.width+"px",height:l.sourceRect.height+"px",borderRadius:"8px"}:{})},[he("div",{class:zn(["modal-content",{visible:s.value}])},[he("div",db,[he("div",pb,[he("h2",mb,St(l.project.title),1),he("p",gb,St(l.project.role)+" · "+St(l.project.date),1)]),he("div",_b,[l.project.link?(Qe(),ct("a",{key:0,href:l.project.link,target:"_blank",class:"modal-link",onClick:u[0]||(u[0]=yg(()=>{},["stop"]))},[Nc(" GitHub "),xb],8,vb)):An("",!0),he("button",{class:"close-btn",onClick:a,"aria-label":"Close"},yb)])]),Sb,he("div",bb,[he("div",Eb,[he("p",{class:"modal-description",innerHTML:l.project.description},null,8,wb),(h=(f=l.project.detail)==null?void 0:f.keyPoints)!=null&&h.length?(Qe(),ct("div",Tb,[Ab,he("ul",Cb,[(Qe(!0),ct(Nt,null,Ls(l.project.detail.keyPoints.slice(0,4),(g,_)=>(Qe(),ct("li",{key:_,class:"key-point"},[Rb,he("span",null,St(g),1)]))),128))])])):An("",!0),he("div",Pb,[Lb,he("div",Ib,[(Qe(!0),ct(Nt,null,Ls(l.project.skills,g=>(Qe(),ct("span",{key:g,class:"skill-badge"},St(g),1))),128))])])]),he("div",Db,[he("div",Ub,[he("p",Nb,St(((p=o.value)==null?void 0:p.title)??"Architecture"),1),Fb]),he("div",Ob,[o.value&&s.value?(Qe(),nr(ab,{key:0,nodes:o.value.nodes,edges:o.value.edges,title:o.value.title},null,8,["nodes","edges","title"])):o.value?An("",!0):(Qe(),ct("div",Bb,kb))])])])],2)],6)):An("",!0)])}}}),Vb=Hn(Hb,[["__scopeId","data-v-ffae2e51"]]),Gb=/^[og]\s*(.+)?/,Wb=/^mtllib /,Xb=/^usemtl /,jb=/^usemap /,nf=/\s+/,rf=new N,Ml=new N,sf=new N,of=new N,hn=new N,Lo=new je;function qb(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;rf.fromArray(r,e),Ml.fromArray(r,t),sf.fromArray(r,i),hn.subVectors(sf,Ml),of.subVectors(rf,Ml),hn.cross(of),hn.normalize(),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,c,l){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),p=this.parseVertexIndex(i,u);if(this.addVertex(f,h,p),this.addColor(f,h,p),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(f,h,p)}else this.addFaceNormal(f,h,p);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),p=this.parseUVIndex(o,g),this.addUV(f,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class jd extends Vs{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new JS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new qb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,c=i.length;a<c;a++){const l=i[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const f=l.split(nf);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Lo.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Lo.r,Lo.g,Lo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(nf),p=[];for(let _=0,m=h.length;_<m;_++){const d=h[_];if(d.length>0){const w=d.split("/");p.push(w)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const d=p[_],w=p[_+1];t.addFace(g[0],d[0],w[0],g[1],d[1],w[1],g[2],d[2],w[2])}}else if(u==="l"){const f=l.substring(1).trim().split(" ");let h=[];const p=[];if(l.indexOf("/")===-1)h=f;else for(let g=0,_=f.length;g<_;g++){const m=f[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(h,p)}else if(u==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((r=Gb.exec(l))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(Xb.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Wb.test(l))t.materialLibraries.push(l.substring(7).trim());else if(jb.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){const h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new Fr;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,f=l.materials,h=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new Pt;_.setAttribute("position",new ut(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new ut(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new ut(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new ut(u.uvs,2));const m=[];for(let w=0,y=f.length;w<y;w++){const T=f[w],O=T.name+"_"+T.smooth+"_"+g;let A=t.materials[O];if(this.materials!==null){if(A=this.materials.create(T.name),h&&A&&!(A instanceof Ti)){const C=new Ti;Ln.prototype.copy.call(C,A),C.color.copy(A.color),A=C}else if(p&&A&&!(A instanceof Zi)){const C=new Zi({size:10,sizeAttenuation:!1});Ln.prototype.copy.call(C,A),C.color.copy(A.color),C.map=A.map,A=C}}A===void 0&&(h?A=new Ti:p?A=new Zi({size:1,sizeAttenuation:!1}):A=new qS,A.name=T.name,A.flatShading=!T.smooth,A.vertexColors=g,t.materials[O]=A),m.push(A)}let d;if(m.length>1){for(let w=0,y=f.length;w<y;w++){const T=f[w];_.addGroup(T.groupStart,T.groupCount,w)}h?d=new oa(_,m):p?d=new Ts(_,m):d=new Bt(_,m)}else h?d=new oa(_,m[0]):p?d=new Ts(_,m[0]):d=new Bt(_,m[0]);d.name=l.name,s.add(d)}else if(t.vertices.length>0){const a=new Zi({size:1,sizeAttenuation:!1}),c=new Pt;c.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ut(t.colors,3)),a.vertexColors=!0);const l=new Ts(c,a);s.add(l)}return s}}const Yb=kn({__name:"PlaneWorld",props:{paused:{type:Boolean}},emits:["enterGame"],setup(n,{emit:e}){const t=n,i=e,r=Ot(null);return lr(()=>{const s=r.value;let o,a=null,c=null;const l=new nu,u=new Kt(60,s.clientWidth/s.clientHeight,.1,1e3);u.position.z=3,a=new eu({alpha:!0,antialias:!0}),a.setClearAlpha(0),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(s.clientWidth,s.clientHeight),s.appendChild(a.domElement);const f=()=>{u.aspect=s.clientWidth/s.clientHeight,u.updateProjectionMatrix(),a.setSize(s.clientWidth,s.clientHeight)};window.addEventListener("resize",f);const h=new Bs(16777215,1);h.position.set(5,5,5),l.add(h),l.add(new su(16777215,.4));const p=new tb(15715176,.7,8);p.position.set(-2,1,2),l.add(p);const g=new ib(4,10,15715176,15715176);g.material.opacity=.08,g.material.transparent=!0,g.position.y=-.8,l.add(g);const _=[],m=[];for(let R=0;R<3;R++){const F=new Ea({color:15715176,transparent:!0,opacity:0,side:Bn}),B=new Bt(new iu(.01,.04,64),F);B.rotation.x=-Math.PI/2,B.position.y=-.79,l.add(B),_.push(B),m.push(R*1.5)}const d=new Wd().load("f22.png");new jd().load("f22.obj",R=>{R.traverse(F=>{F instanceof Bt&&(F.material=new aa({map:d}))}),R.scale.set(.4,.4,.4),l.add(R),c=R});let w=0,y=0,T=0,O=0;const A=R=>{w=R.clientX/window.innerWidth*2-1,y=-(R.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",A);const C=R=>{var F;if((R.key==="w"||R.key==="W")&&!t.paused){const B=(F=r.value)==null?void 0:F.getBoundingClientRect();B&&i("enterGame",B)}};window.addEventListener("keydown",C);let P=0,b=performance.now();const M=()=>{o=requestAnimationFrame(M);const R=performance.now(),F=Math.min((R-b)/1e3,.05);b=R;for(let B=0;B<_.length;B++){m[B]+=F;const J=m[B]%2.5/2.5;_[B].scale.set(.5+J*5,.5+J*5,1),_[B].material.opacity=J<.3?J/.3*.3:(1-J)/.7*.3}if(c){P++,P>=100&&(P=0,T+=(Math.random()-.5)*.05,O+=(Math.random()-.5)*.05);const B=1.2;T+=(y*B-T)*.05,O+=(w*B-O)*.05;const J=Math.PI/8;T=Fs.clamp(T,-J,J),O=Fs.clamp(O,-J,J),c.rotation.x+=(T-c.rotation.x)*.05,c.rotation.y+=(O-c.rotation.y)*.05;const se=new N(0,1.5,1.5);u.position.lerp(c.position.clone().add(se),.1),u.lookAt(c.position)}a.render(l,u)};M(),s.__cleanup=()=>{cancelAnimationFrame(o),window.removeEventListener("resize",f),window.removeEventListener("mousemove",A),window.removeEventListener("keydown",C),a==null||a.dispose(),a==null||a.domElement.remove(),a=null,l.clear()}}),ts(()=>{var s,o;(o=(s=r.value)==null?void 0:s.__cleanup)==null||o.call(s)}),(s,o)=>(Qe(),ct("div",{ref_key:"containerRef",ref:r,class:"showcase-canvas"},null,512))}}),$b=Hn(Yb,[["__scopeId","data-v-158a8047"]]),Ta=n=>(Qr("data-v-4778c510"),n=n(),es(),n),Kb={key:0,class:"hud"},Zb={class:"hud-row"},Jb=Ta(()=>he("span",{class:"hud-label"},"SPD",-1)),Qb=Ta(()=>he("span",{class:"hud-unit"},"kn",-1)),eE={class:"hud-bar-wrap mt-1"},tE=Ta(()=>he("span",{class:"hud-label"},"THR",-1)),nE={class:"hud-bar"},iE={class:"hud-label"},rE={class:"hud-bar-wrap mt-1"},sE={class:"hud-bar"},oE=Ta(()=>he("div",{class:"hud-controls"},"↑↓ PITCH · ←→ ROLL · A/D YAW · W/S THR · SPC BOOST · DRAG CAM · ESC EXIT",-1)),aE=kn({__name:"GameWorld",props:{sourceRect:{}},emits:["exit"],setup(n,{emit:e}){const t=n,i=e,r=Ot(null),s=Ot(!1),o=Ot(!1),a=Ot(0),c=Ot(0),l=Ot(0),u=Ot(!0);function f(P,b,M){return P+(b-P)*M}function h(P,b,M){return Math.max(b,Math.min(M,P))}function p(P,b){let M=0;return M+=Math.sin(P*.055)*Math.cos(b*.07)*5.5,M+=Math.sin(P*.18+1.7)*Math.sin(b*.15+.9)*3,M+=Math.sin(P*.4+.3)*Math.cos(b*.36+1.5)*1.4,M+=Math.abs(Math.sin(P*.11+b*.09))*2.2,M+=Math.sin(P*.85)*Math.sin(b*.72)*.5,Math.max(-.6,M*.85)}function g(P,b,M){return M=h(M,0,1),[P[0]+(b[0]-P[0])*M,P[1]+(b[1]-P[1])*M,P[2]+(b[2]-P[2])*M]}const _=[0,.016,.067],m=[.086,.047,.157],d=[.3,.26,.38],w=[.682,.718,.702],y=[.882,.937,.902],T=[.96,.97,.97];function O(P){return P>5.2?T:P>4?g(y,T,(P-4)/1.2):P>2.4?g(w,y,(P-2.4)/1.6):P>.8?g(d,w,(P-.8)/1.6):P>-.1?g(m,d,(P+.1)/.9):_}let A=null;function C(P){let b;const M=new nu;M.fog=new tu(1041,.01);const R=new Kt(58,P.clientWidth/P.clientHeight,.1,600),F=new eu({antialias:!0});F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setClearColor(1041),F.setSize(P.clientWidth,P.clientHeight),P.appendChild(F.domElement);const B=()=>{R.aspect=P.clientWidth/P.clientHeight,R.updateProjectionMatrix(),F.setSize(P.clientWidth,P.clientHeight)};window.addEventListener("resize",B),M.add(new su(14807014,.3));const J=new Bs(16775376,1.1);J.position.set(50,70,30),M.add(J);const se=new Bs(8425648,.22);se.position.set(-30,5,-40),M.add(se);{const We=new Float32Array(2100),Oe=new Float32Array(700*3);for(let Ct=0;Ct<700;Ct++){const In=180+Math.random()*120,Vn=Math.random()*Math.PI*2,ii=Math.random()*Math.PI*.45;We[Ct*3]=In*Math.sin(ii)*Math.cos(Vn),We[Ct*3+1]=In*Math.cos(ii)+10,We[Ct*3+2]=In*Math.sin(ii)*Math.sin(Vn);const ri=.5+Math.random()*.5;Oe[Ct*3]=ri,Oe[Ct*3+1]=ri,Oe[Ct*3+2]=ri*.85+.15}const Dt=new Pt;Dt.setAttribute("position",new ut(We,3)),Dt.setAttribute("color",new ut(Oe,3)),M.add(new Ts(Dt,new Zi({vertexColors:!0,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.85})))}const Z=180,te=110,j=new Hs(Z,Z,te,te);j.rotateX(-Math.PI/2);const ge=j.attributes.position,be=[];for(let _e=0;_e<ge.count;_e++){const We=p(ge.getX(_e),ge.getZ(_e));ge.setY(_e,We);const Oe=O(We);be.push(Oe[0],Oe[1],Oe[2])}ge.needsUpdate=!0,j.setAttribute("color",new ut(be,3)),j.computeVertexNormals(),M.add(new Bt(j,new aa({vertexColors:!0,roughness:.88,metalness:.04}))),M.add(new Bt(j,new Ea({color:15715176,wireframe:!0,transparent:!0,opacity:.022})));const Se=new At;M.add(Se);let Pe=null;const Ze=new Wd().load("f22.png");new jd().load("f22.obj",_e=>{_e.traverse(We=>{We instanceof Bt&&(We.material=new aa({map:Ze,roughness:.45,metalness:.5}))}),_e.scale.set(.4,.4,.4),_e.rotation.y=Math.PI,Se.add(_e),Pe=Se});const ne=150,fe=new Float32Array(ne*3),pe=new Float32Array(ne*3),ve=new Float32Array(ne*3),Ie=new Float32Array(ne),Ve=new Float32Array(ne);for(let _e=0;_e<ne;_e++)pe[_e*3]=.95,pe[_e*3+1]=.65,pe[_e*3+2]=.05,Ve[_e]=.4+Math.random()*.7,Ie[_e]=0;const ze=new Pt;ze.setAttribute("position",new ut(fe,3)),ze.setAttribute("color",new ut(pe,3));const it=new Zi({vertexColors:!0,size:.1,transparent:!0,opacity:.95,depthWrite:!1,blending:Nl}),D=new Ts(ze,it);D.visible=!1,M.add(D);function L(_e,We){if(!Pe)return;const Oe=new N(_e%2===0?-.13:.13,-.02,-.3).applyQuaternion(Pe.quaternion).add(Pe.position);fe[_e*3]=Oe.x,fe[_e*3+1]=Oe.y,fe[_e*3+2]=Oe.z;const Dt=2+Math.random()*2.5+We*1.5,Ct=new N((Math.random()-.5)*.18,(Math.random()-.5)*.14,-Dt).applyQuaternion(Pe.quaternion);ve[_e*3]=Ct.x,ve[_e*3+1]=Ct.y,ve[_e*3+2]=Ct.z,Ie[_e]=Ve[_e]*(.7+We*.3),pe[_e*3]=.97,pe[_e*3+1]=.75+Math.random()*.15,pe[_e*3+2]=.04}function U(){for(let _e=0;_e<ne;_e++)Ie[_e]=0}function q(_e,We){for(let Oe=0;Oe<ne;Oe++){if(Ie[Oe]-=_e,Ie[Oe]<=0){L(Oe,We);continue}fe[Oe*3]+=ve[Oe*3]*_e,fe[Oe*3+1]+=ve[Oe*3+1]*_e,fe[Oe*3+2]+=ve[Oe*3+2]*_e;const Dt=Ie[Oe]/Ve[Oe];pe[Oe*3+1]=Dt*.6,pe[Oe*3+2]=Dt*.06}ze.attributes.position.needsUpdate=!0,ze.attributes.color.needsUpdate=!0}const k={},ie={};let ee=!1,re=0,S=0,v=0,I=0;const G=.2,V={throttle:0,pitch:0,roll:0,yaw:0,boost:!1,isDragging:!1,cameraYaw:0,cameraPitch:0},X=_e=>{const We=_e.key.toLowerCase();if(k[We]=!0,We==="escape"){i("exit");return}We===" "&&!le&&Fe<=0&&(le=!0,Re=0,mt=V.roll>=0?1:-1,U())},ce=_e=>{k[_e.key.toLowerCase()]=!1},oe=_e=>{_e.button===0&&(ee=!0,v=_e.clientX,I=_e.clientY)},ue=_e=>{ee&&(re+=_e.clientX-v,S+=_e.clientY-I,v=_e.clientX,I=_e.clientY)},Ee=_e=>{_e.button===0&&(ee=!1)};window.addEventListener("keydown",X),window.addEventListener("keyup",ce),window.addEventListener("mousedown",oe),window.addEventListener("mousemove",ue),window.addEventListener("mouseup",Ee);function ae(){V.boost=!!k[" "],V.isDragging=ee;const _e=.5;k.w?V.throttle=Math.min(1,V.throttle+_e*.016):k.s&&(V.throttle=Math.max(0,V.throttle-_e*.016));const We=k.arrowup?-1:k.arrowdown?1:0,Oe=k.arrowleft?-1:k.arrowright?1:0,Dt=k.a?-1:k.d?1:0;return V.pitch=f(V.pitch,We,.1),V.roll=f(V.roll,Oe,.1),V.yaw=f(V.yaw,Dt,.1),ee?(V.cameraYaw+=re*G,V.cameraPitch-=S*G,V.cameraPitch=h(V.cameraPitch,-85,85),re=0,S=0):(V.cameraYaw=f(V.cameraYaw,0,.1),V.cameraPitch=f(V.cameraPitch,0,.1)),Object.assign(ie,k),V}const me=1.2,Xe=2.5,Ue=.55,xe=3,Ne=12,Ae=2.5,Ke=2.5,x=new Ht,W=new N(0,8,0);let Y=xe,Q=xe,le=!1,Re=0,Fe=0,mt=1;const _t=new N(1,0,0),Je=new N(0,1,0),vt=new N(0,0,1);R.position.set(0,12,-8);let xt=performance.now();const vn=()=>{b=requestAnimationFrame(vn);const _e=performance.now(),We=h((_e-xt)/1e3,0,.05);xt=_e;const Oe=ae();if(!Pe){F.render(M,R);return}const Dt=le?Ne*1.5:xe+Oe.throttle*(Ne-xe);Q=Y,Y=f(Y,Dt,We*(le?5:2));const Ct=We>0?(Y-Q)/We:0,In=h(Y/xe,0,1),Vn=new Ht().setFromAxisAngle(_t,Oe.pitch*me*We*In),ii=new Ht().setFromAxisAngle(vt,Oe.roll*Xe*We*In),ri=new Ht().setFromAxisAngle(Je,Oe.yaw*Ue*We*In);if(x.multiply(ri).multiply(Vn).multiply(ii),le){Re+=We,Re>=Ae&&(le=!1,Fe=Ke);const ke=new Ht().setFromAxisAngle(vt,Math.PI*4/Ae*We*mt);x.multiply(ke)}Fe>0&&(Fe-=We),x.normalize();const Aa=Math.abs(Oe.pitch)+Math.abs(Oe.roll)+Math.abs(Oe.yaw),os=h(1-Aa*2.5,0,1);if(os>.01){const ke=_e*.001,Be=new Ht().setFromAxisAngle(_t,Math.sin(ke*.5)*.005*os*We*60),nt=new Ht().setFromAxisAngle(vt,Math.sin(ke*.72)*.008*os*We*60);x.multiply(Be).multiply(nt).normalize()}const Ca=new N(0,0,1).applyQuaternion(x);W.addScaledVector(Ca,Y*We);const E=Z*.47;W.x=h(W.x,-E,E),W.z=h(W.z,-E,E),W.y=Math.max(W.y,p(W.x,W.z)+.5),Pe.position.copy(W),Pe.quaternion.copy(x);const z=Oe.throttle>.12||le;z&&!D.visible&&U(),D.visible=z,it.size=.07+Oe.throttle*.06+(le?.05:0),z&&q(We,le?1:Oe.throttle);const $=h(-Ct*.06,-2,.5),K=new N(0,2.5,-(6.5+$)),H=Fs.degToRad(Oe.cameraYaw),de=Fs.degToRad(Oe.cameraPitch),we=new Ht().setFromAxisAngle(Je,H).multiply(new Ht().setFromAxisAngle(_t,de)),Ce=K.applyQuaternion(x.clone().multiply(we)),Te=W.clone().add(Ce);Te.y=Math.max(Te.y,p(Te.x,Te.z)+2),R.position.lerp(Te,h(We*7,0,1));const He=new N(0,.5,3).applyQuaternion(x).add(W);R.lookAt(He),a.value=Math.round(Y*22),c.value=Math.round(Oe.throttle*100),l.value=le?Re/Ae:0,u.value=!le&&Fe<=0,F.render(M,R)};vn(),A=()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",X),window.removeEventListener("keyup",ce),window.removeEventListener("mousedown",oe),window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",Ee),window.removeEventListener("resize",B),F.dispose(),F.domElement.remove(),M.clear(),A=null}}return lr(async()=>{await Pc(),requestAnimationFrame(()=>{s.value=!0,setTimeout(()=>{o.value=!0,C(r.value)},420)})}),ts(()=>{A==null||A()}),(P,b)=>(Qe(),nr(nd,{to:"body"},[he("div",{ref_key:"overlayRef",ref:r,class:zn(["game-overlay",{expanded:s.value}]),style:Ji(s.value?{}:{top:t.sourceRect.top+"px",left:t.sourceRect.left+"px",width:t.sourceRect.width+"px",height:t.sourceRect.height+"px",borderRadius:"12px"})},[ye(Bc,{name:"hud"},{default:Tt(()=>[o.value?(Qe(),ct("div",Kb,[he("div",Zb,[Jb,he("span",{class:zn(["hud-value",{boosting:l.value>0}])},St(a.value),3),Qb]),he("div",eE,[tE,he("div",nE,[he("div",{class:"hud-bar-fill",style:Ji({width:c.value+"%"})},null,4)]),he("span",iE,St(c.value)+"%",1)]),he("div",rE,[he("span",{class:zn(["hud-label",{ready:u.value}])},"BST",2),he("div",sE,[he("div",{class:zn(["hud-bar-fill",{boost:l.value>0,cooling:!u.value&&l.value===0}]),style:Ji({width:l.value>0?l.value*100+"%":u.value?"100%":"0%"})},null,6)])]),oE])):An("",!0)]),_:1})],6)]))}}),lE=Hn(aE,[["__scopeId","data-v-4778c510"]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Io={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:r,name:s,class:o,...a},{slots:c})=>tr("svg",{...Io,width:n||Io.width,height:n||Io.height,stroke:i||Io.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${cE(s??"icon")}`],...a},[...r.map(l=>tr(...l)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=(n,e)=>(t,{slots:i})=>tr(uE,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=an("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=an("AwardIcon",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=an("CirclePlayIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=an("ContactIcon",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=an("ContainerIcon",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=an("DatabaseZapIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=an("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=an("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=an("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=an("MailCheckIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=an("MessageCircleMoreIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=an("SquareKanbanIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=an("WorkflowIcon",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]),EE=[{id:"inesdb",title:"InesDB — Indexed Node Engine Storage",role:"Lead Developer",date:"MAR 2026",description:"InesDB is a high-performance database engine built in <strong>Go</strong> using a composable component-based architecture. Designed for efficient data writes and retrieval using <strong>LSM Trees</strong> with the Autumn strategy for improved read performance. Supports replication via <strong>Raft consensus</strong> and a SQL-like query language. Active development.",link:"https://github.com/rodrigo0345/inesdb",skills:["Go","Distributed Systems","LSM Trees","Raft","SQL"],detail:{diagramId:"inesdb",keyPoints:["LSM Tree with MemTable + SSTable hierarchy enables high-throughput sequential writes while the Autumn read strategy reduces read amplification via bloom filters and compaction hints.","Raft consensus across three replicas ensures strong consistency and fault tolerance — a majority quorum survives any single node failure.","Composable component architecture allows swapping the storage engine (LSM vs B-Tree) without touching the query layer.","WAL (Write-Ahead Log) guarantees durability: every write is flushed to disk before the MemTable is updated.","A custom SQL subset parser translates queries to execution plans over the storage engine without a full relational algebra layer."]}},{id:"picturas",title:"Picturas — Microservice SaaS Platform",role:"Backend Engineer",date:"SEP 2024 — JAN 2025",description:"Scalable SaaS for image manipulation using a <strong>microservices architecture</strong>. Implemented an asynchronous processing pipeline with <strong>RabbitMQ</strong> for orchestration and <strong>Redis</strong> for real-time WebSocket scaling. Engineered the infrastructure using <strong>Docker</strong>, <strong>Kubernetes (Helm)</strong>, and <strong>Terraform</strong>.",link:"https://github.com/rafapeixoto16/RAS",skills:["Node.js","RabbitMQ","Redis","Kubernetes","Terraform","MongoDB"],detail:{diagramId:"picturas",keyPoints:["Event-driven architecture with RabbitMQ decouples the API gateway from worker microservices — each image operation (filter, resize, watermark) is an independent consumer.","Redis Pub/Sub broadcasts job completion events to the WebSocket gateway, enabling real-time progress updates without polling.","Kubernetes Helm charts with Horizontal Pod Autoscaling allow worker replicas to scale independently based on queue depth.","Terraform provisions cloud infrastructure declaratively, making the entire stack reproducible and version-controlled.","MongoDB stores image metadata and job history; no relational constraints needed — document model fits naturally."]}},{id:"videostream",title:"Video Streaming Platform",role:"Systems Engineer",date:"JAN 2025",description:"Designed and implemented a video streaming platform using <strong>Go</strong>. The system handles concurrent streams and optimizes data packet transfer for real-time playback performance.",link:"https://github.com/rodrigo0345/esr-tp2",skills:["Go","Networking","Streaming Protocols","RTP/UDP"],detail:{diagramId:"videostream",keyPoints:["RTP over UDP for low-latency packet delivery — TCP retransmits would stall real-time video; dropped frames are preferable to stalls.","A rendezvous server handles peer discovery and stream negotiation; actual media flows peer-to-peer to minimize server load.","Goroutine-per-stream concurrency model in Go keeps the server simple — each client gets its own lightweight coroutine.","Sequence numbers and timestamps in RTP headers allow the receiver to reorder packets and calculate jitter for adaptive buffering."]}},{id:"raft",title:"Raft Consensus — Fault Tolerance",role:"Systems Engineer",date:"APR — MAY 2025",description:"Developed an implementation of the <strong>Raft consensus algorithm</strong> using the Maelstrom testing framework and <strong>Go</strong>. Analyzed resilience to Byzantine faults.",link:"https://github.com/rodrigo0345/RaftSimple",skills:["Go","Distributed Systems","Maelstrom","Consensus"],detail:{diagramId:"raft",keyPoints:["Three-state machine per node: Follower → Candidate → Leader. Nodes are followers by default and only become candidates when they stop hearing from a leader.","Leader election uses randomized timeouts to avoid split votes — a node waits a random 150–300ms before starting an election.","Log replication is append-only: the leader sends AppendEntries RPCs; a log entry is committed only after a majority acknowledges it.","Maelstrom injects network partitions and node failures to validate correctness — all linearizability tests passed."]}},{id:"vscode-db",title:"VS Code DB Manager",role:"Contributor",date:"Open Source",description:"Contributed to the <strong>vscode-db-manager</strong> extension by implementing the <strong>SQLite</strong> driver. Allows users to connect to, query, and manage SQLite databases directly within VS Code.",link:"https://github.com/martimmpr/vscode-db-manager",skills:["TypeScript","SQLite","VS Code API"]},{id:"smart-clinic",title:"Smart Clinic",role:"Fullstack Developer",date:"NOV 2024 — MAY 2025",description:"Developed a virtual consultation platform using <strong>Strapi</strong> and <strong>Jitsi</strong>. Integrated seamless payments with IfThenPay to improve clinic accessibility.",skills:["Strapi","Jitsi","React","IfThenPay"]},{id:"keybelle",title:"KeyBelle",role:"Backend Developer",date:"OCT 2024 — APR 2025",description:"Built a property key management system using <strong>.NET 8</strong> and <strong>PostgreSQL</strong> for a real estate agency. Improved operational efficiency and reduced key misplacement.",skills:[".NET 8","C#","PostgreSQL"]},{id:"startpoint",title:"START POINT's Website",role:"Wordpress Developer",date:"SEP — DEC 2023",description:"Project Manager of this initiative. Required custom plugins for student verification and a custom theme to match branding.",link:"https://startpoint.pt/",skills:["PHP","Management","Wordpress"]},{id:"volleyball",title:"Volleyball Management App",role:"Fullstack Developer",date:"MAY — JUN 2023",description:"Developed a MVC system using Java and MySQL to manage players and matches. Achieved the highest grade in the class (18/20).",link:"https://github.com/rodrigo0345/DAI-Projeto-Volley",skills:["Java","TypeScript","React"]}],ni=n=>(Qr("data-v-a52fc2f2"),n=n(),es(),n),wE={id:"top-zone"},TE={class:"pr-16 flex w-full md:justify-end pl-10 md:pl-0 relative h-full"},AE={class:"sticky w-3/4 flex flex-col justify-between py-24 h-svh top-0"},CE=od('<div class="flex flex-col gap-3" data-v-a52fc2f2><p class="text-xs font-mono tracking-[0.22em] uppercase text-gold opacity-70" data-v-a52fc2f2>Software Engineer</p><h1 class="text-5xl font-grotesk font-bold text-frost leading-tight tracking-tight" data-v-a52fc2f2> Rodrigo<br data-v-a52fc2f2>Casanova </h1><p class="font-mono text-sm text-gold tracking-wide mt-1" data-v-a52fc2f2>MSc Distributed Systems</p><p class="text-sm text-ash font-light leading-relaxed mt-2 max-w-[280px]" data-v-a52fc2f2> Building distributed systems, database engines, and embedded software. </p></div>',1),RE={class:"flex-1 w-full min-h-0 my-4 relative"},PE=ni(()=>he("div",{class:"world-hint"},[he("span",{class:"font-mono text-xs tracking-widest uppercase"},"Press W to fly")],-1)),LE={class:"flex flex-col gap-4"},IE={class:"flex gap-5"},DE={href:"https://www.linkedin.com/in/casanovarodrigo/",target:"_blank",class:"social-link","aria-label":"LinkedIn"},UE={href:"https://github.com/rodrigo0345/",target:"_blank",class:"social-link","aria-label":"GitHub"},NE={href:"mailto:rodrigocralha@gmail.com",target:"_blank",class:"social-link","aria-label":"Email"},FE={class:"group/card relative flex flex-col max-w-[620px] flex-grow pb-16 pt-10"},OE=ni(()=>he("div",{class:"section-heading-wrap ml-4 mt-10 mb-1"},[he("h2",{class:"section-heading"},"Education")],-1)),BE=ni(()=>he("div",{class:"section-divider ml-4 mb-2"},null,-1)),zE=ni(()=>he("div",{class:"section-heading-wrap ml-4 mt-12 mb-1"},[he("h2",{class:"section-heading"},"Experience")],-1)),kE=ni(()=>he("div",{class:"section-divider ml-4 mb-2"},null,-1)),HE={id:"bottom-zone"},VE=ni(()=>he("div",{class:"section-heading-wrap mb-2"},[he("h2",{class:"section-heading"},"Selected Projects")],-1)),GE=ni(()=>he("div",{class:"section-divider mb-6"},null,-1)),WE={class:"grid-section"},XE=ni(()=>he("div",{class:"section-heading-wrap mt-16 mb-2"},[he("h2",{class:"section-heading"},"Certifications")],-1)),jE=ni(()=>he("div",{class:"section-divider mb-6"},null,-1)),qE={class:"grid-section"},YE=kn({__name:"App",setup(n){const e=Ot(null),t=Ot(null);function i(l,u){e.value=l,t.value=u}function r(){e.value=null,t.value=null}const s=Ot(!1),o=Ot(null);function a(l){o.value=l,s.value=!0}function c(){s.value=!1,o.value=null}return(l,u)=>(Qe(),ct(Nt,null,[he("div",wE,[he("header",TE,[he("div",AE,[CE,he("div",RE,[ye($b,{paused:s.value,onEnterGame:a},null,8,["paused"]),PE]),he("div",LE,[he("div",IE,[he("a",DE,[ye(qt(xE),{"stroke-width":"1.5",class:"h-5 w-5"})]),he("a",UE,[ye(qt(vE),{"stroke-width":"1.5",class:"h-5 w-5"})]),he("a",NE,[ye(qt(ME),{"stroke-width":"1.5",class:"h-5 w-5"})])])])])]),he("main",FE,[ye($g),OE,BE,ye(ci,{title:"Master's Degree in Software Engineering",date:"2024 — 2026",description:"Studying at the <strong>University of Minho</strong>. Specializing in <strong>Distributed Systems</strong> and <strong>Intelligent Systems</strong>.",last:!1,role:"University of Minho"},{default:Tt(()=>[ye(lt,{skill:"Distributed Systems"}),ye(lt,{skill:"Edge Computing"}),ye(lt,{skill:"Go"}),ye(lt,{skill:"Python"}),ye(lt,{skill:"Kubernetes"})]),_:1}),ye(ci,{title:"Bachelor's Degree in Information Systems",date:"2021 — 2024",description:"<strong>Engineering and Management of Information Systems</strong>, University of Minho. <ul class='mt-2'><li>Final Grade: <strong>16/20</strong></li></ul>",last:!1,role:"University of Minho"},{default:Tt(()=>[ye(lt,{skill:"Java"}),ye(lt,{skill:"Javascript"}),ye(lt,{skill:"Algorithms"}),ye(lt,{skill:"Software Engineering"})]),_:1}),zE,kE,ye(ci,{title:"SMARTEX.ai",date:"2025 — Present",description:"Applied R&D in the embedded engineering team. Developed a PoC for <strong>on-device model compilation</strong> and engineered a custom backend for the <strong>NVIDIA Triton Inference Server</strong>.",last:!1,role:"Embedded Software Developer Intern",link:"https://smartex.ai/"},{default:Tt(()=>[ye(lt,{skill:"Modern C++ (C++23)"}),ye(lt,{skill:"NVIDIA Jetson"}),ye(lt,{skill:"TensorRT"}),ye(lt,{skill:"ONNX Runtime"})]),_:1}),ye(ci,{title:"INESC TEC",date:"JUN — SEP 2025",description:"Investigated a <strong>blind spot detection system</strong> for motorcycles using Camera-Radar sensor fusion. Engineered a synthetic data generation pipeline using the <strong>CARLA Simulator</strong>.",last:!1,role:"Summer Internship",link:"https://www.inesctec.pt/"},{default:Tt(()=>[ye(lt,{skill:"Python"}),ye(lt,{skill:"Computer Vision"}),ye(lt,{skill:"Sensor Fusion"}),ye(lt,{skill:"CARLA"})]),_:1}),ye(ci,{title:"EPIC Júnior",date:"2024 — Present",description:"Leading planning and budgeting of innovative projects, <strong>managing a team of 31 people</strong>. Overseeing <strong>CI/CD pipelines</strong> and Git best practices.",last:!1,role:"Director of Innovation of Projects Dept.",link:"https://epicje.pt/"},{default:Tt(()=>[ye(lt,{skill:"DevOps"},{default:Tt(()=>[ye(qt(bE),{size:13})]),_:1}),ye(lt,{skill:"Docker"},{default:Tt(()=>[ye(qt(mE),{size:13})]),_:1}),ye(lt,{skill:"Team Management"},{default:Tt(()=>[ye(qt(SE),{size:13})]),_:1}),ye(lt,{skill:"Leadership"},{default:Tt(()=>[ye(qt(fE),{size:13})]),_:1})]),_:1}),ye(ci,{title:"EPIC Júnior",date:"2022 — 2024",description:"Member of the Projects Department, working with real <strong>clients</strong> on logistics management, appointment scheduling, and event gamification.",last:!1,role:"Member of Projects Dept.",link:"https://epicje.pt/"},{default:Tt(()=>[ye(lt,{skill:"Node.js"},{default:Tt(()=>[ye(qt(dE),{size:13})]),_:1}),ye(lt,{skill:"Redis"},{default:Tt(()=>[ye(qt(gE),{size:13})]),_:1}),ye(lt,{skill:"PostgreSQL"},{default:Tt(()=>[ye(qt(_E),{size:13})]),_:1})]),_:1}),ye(ci,{title:"AIS.SC UMINHO",date:"OCT 2023 — 2024",description:"Enhanced the website using WordPress and PHP to develop custom plugins.",last:!1,role:"Member of Technological Dept.",link:"https://aissc.dsi.uminho.pt/"},{default:Tt(()=>[ye(lt,{skill:"Wordpress"},{default:Tt(()=>[ye(qt(hE),{size:13})]),_:1}),ye(lt,{skill:"PHP"})]),_:1}),ye(ci,{title:"NTT DATA Europe & Latam",date:"2023 — 2024",description:"Ambassador role broadening my network and deepening understanding of community outreach.",last:!1,role:"Ambassador",link:"https://pt.nttdata.com/"},{default:Tt(()=>[ye(lt,{skill:"Communication"},{default:Tt(()=>[ye(qt(yE),{size:13})]),_:1}),ye(lt,{skill:"Network"},{default:Tt(()=>[ye(qt(pE),{size:13})]),_:1})]),_:1})])]),he("div",HE,[VE,GE,he("div",WE,[(Qe(!0),ct(Nt,null,Ls(qt(EE),f=>(Qe(),nr(h_,{key:f.id,project:f,onOpen:i},null,8,["project"]))),128))]),XE,jE,he("div",qE,[ye(ls,{title:"C++ Essentials 1",issuer:"Cisco Networking Academy",date:"DEC 2025",link:"https://www.credly.com/badges/1c36ab10-d486-4f9d-b455-9d0668ea622f/linked_in_profile",skills:["C++","Memory Management","OOP"]}),ye(ls,{title:"3D Graphics Programming from Scratch",issuer:"pikuma.com",date:"JUL 2024",link:"https://courses.pikuma.com/certificates/4gjmahqcda",skills:["C++","Graphics","Math"]}),ye(ls,{title:"Foundational C#",issuer:"FreeCodeCamp",date:"JAN 2024",link:"https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/foundational-c-sharp-with-microsoft",skills:["C#","ASP.NET Core"]},null,8,["skills"]),ye(ls,{title:"Cypher Fundamentals",issuer:"Neo4J Graph Academy",date:"MAY 2023",link:"https://graphacademy.neo4j.com/c/3aa65d3e-b8b8-4c9e-af48-63ed4b38c2bd/",skills:["Cypher","Neo4J"]}),ye(ls,{title:"Javascript Algorithms & Data Structures",issuer:"FreeCodeCamp",date:"JUN 2023",link:"https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures",skills:["Javascript","Problem Solving"]})])]),ye(Vb,{project:e.value,"source-rect":t.value,onClose:r},null,8,["project","source-rect"]),s.value&&o.value?(Qe(),nr(lE,{key:0,"source-rect":o.value,onExit:c},null,8,["source-rect"])):An("",!0)],64))}}),$E=Hn(YE,[["__scopeId","data-v-a52fc2f2"]]),KE={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let ZE=0;var JE=n=>n.replace(/[<>"&]/g,e=>KE[e]||e),QE=n=>n+ZE++;const Yi={},ew=n=>{const{name:e,paths:t=[],d:i,polygons:r=[],points:s}=n;i&&t.push({d:i}),s&&r.push({points:s}),Yi[e]=Object.assign({},n,{paths:t,polygons:r}),Yi[e].minX||(Yi[e].minX=0),Yi[e].minY||(Yi[e].minY=0)},tw=(...n)=>{for(const e of n)ew(e)},nw=kn({name:"OhVueIcon",props:{name:{type:String,validator:n=>!n||n in Yi||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:n=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(n)},hover:Boolean,flip:{validator:n=>["horizontal","vertical","both"].includes(n)},speed:{validator:n=>n==="fast"||n==="slow"},label:String,inverse:Boolean},setup(n){const e=Ot([]),t=As({outerScale:1.2,x:null,y:null}),i=As({width:0,height:0}),r=fn(()=>{const _=Number(n.scale);return isNaN(_)||_<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),t.outerScale):_*t.outerScale}),s=fn(()=>({"ov-icon":!0,"ov-inverse":n.inverse,"ov-flip-horizontal":n.flip==="horizontal","ov-flip-vertical":n.flip==="vertical","ov-flip-both":n.flip==="both","ov-spin":n.animation==="spin","ov-spin-pulse":n.animation==="spin-pulse","ov-wrench":n.animation==="wrench","ov-ring":n.animation==="ring","ov-pulse":n.animation==="pulse","ov-flash":n.animation==="flash","ov-float":n.animation==="float","ov-hover":n.hover,"ov-fast":n.speed==="fast","ov-slow":n.speed==="slow"})),o=fn(()=>n.name?Yi[n.name]:null),a=fn(()=>o.value?`${o.value.minX} ${o.value.minY} ${o.value.width} ${o.value.height}`:`0 0 ${l.value} ${u.value}`),c=fn(()=>{if(!o.value)return 1;const{width:_,height:m}=o.value;return Math.max(_,m)/16}),l=fn(()=>i.width||o.value&&o.value.width/c.value*r.value||0),u=fn(()=>i.height||o.value&&o.value.height/c.value*r.value||0),f=fn(()=>r.value!==1&&{fontSize:r.value+"em"}),h=fn(()=>{if(!o.value||!o.value.raw)return null;const _={};let m=o.value.raw;return m=m.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(d,w,y)=>{const T=QE("vat-");return _[y]=T,` id="${T}"`}),m=m.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,w,y,T)=>{const O=w||T;return O&&_[O]?`#${_[O]}`:d}),m}),p=fn(()=>o.value&&o.value.attr?o.value.attr:{}),g=()=>{if(!n.name&&n.name!==null&&e.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(o.value)return;let _=0,m=0;e.value.forEach(d=>{d.outerScale=r.value,_=Math.max(_,d.width),m=Math.max(m,d.height)}),i.width=_,i.height=m,e.value.forEach(d=>{d.x=(_-d.width)/2,d.y=(m-d.height)/2})};return lr(()=>{g()}),Wf(()=>{g()}),{...Fp(t),children:e,icon:o,klass:s,style:f,width:l,height:u,box:a,attribs:p,raw:h}},created(){const n=this.$parent;n&&n.children&&n.children.push(this)},render(){const n=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?n.stroke=this.fill?this.fill:"currentColor":n.fill=this.fill?this.fill:"currentColor",this.x&&(n.x=this.x.toString()),this.y&&(n.y=this.y.toString());let e={class:this.klass,style:this.style};if(e=Object.assign(e,n),this.raw){const r=this.title?`<title>${JE(this.title)}</title>${this.raw}`:this.raw;e.innerHTML=r}const t=this.title?[tr("title",this.title)]:[],i=(r,s,o)=>tr(r,{...s,key:`${r}-${o}`});return tr("svg",e,this.raw?void 0:t.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((r,s)=>i("path",r,s)),...this.icon.polygons.map((r,s)=>i("polygon",r,s))]:[]]))}});function ou(n,e){e===void 0&&(e={});var t=e.insertAt;if(n&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}ou(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);ou(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);ou(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const iw={name:"bi-github",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"/>'},rw={name:"bi-linkedin",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>'},sw={name:"bi-mailbox",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M4 4a3 3 0 00-3 3v6h6V7a3 3 0 00-3-3zm0-1h8a4 4 0 014 4v6a1 1 0 01-1 1H1a1 1 0 01-1-1V7a4 4 0 014-4zm2.646 1A3.99 3.99 0 018 7v6h7V7a3 3 0 00-3-3H6.646z"/><path d="M11.793 8.5H9v-1h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 012 0z"/>'},qd=Tg($E);tw(rw,iw,sw);qd.component("v-icon",nw);qd.mount("#app");
