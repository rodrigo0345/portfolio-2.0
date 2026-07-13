(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nu(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const At={},cr=[],Rn=()=>{},Yp=()=>!1,$a=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),iu=n=>n.startsWith("onUpdate:"),kt=Object.assign,su=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kp=Object.prototype.hasOwnProperty,lt=(n,e)=>Kp.call(n,e),$e=Array.isArray,ur=n=>Ya(n)==="[object Map]",rf=n=>Ya(n)==="[object Set]",tt=n=>typeof n=="function",Dt=n=>typeof n=="string",Tr=n=>typeof n=="symbol",Et=n=>n!==null&&typeof n=="object",of=n=>(Et(n)||tt(n))&&tt(n.then)&&tt(n.catch),af=Object.prototype.toString,Ya=n=>af.call(n),Zp=n=>Ya(n).slice(8,-1),lf=n=>Ya(n)==="[object Object]",ru=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ga=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jp=/-(\w)/g,_r=Ka(n=>n.replace(Jp,(e,t)=>t?t.toUpperCase():"")),Qp=/\B([A-Z])/g,Rs=Ka(n=>n.replace(Qp,"-$1").toLowerCase()),cf=Ka(n=>n.charAt(0).toUpperCase()+n.slice(1)),ml=Ka(n=>n?`on${cf(n)}`:""),$i=(n,e)=>!Object.is(n,e),gl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Aa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},em=n=>{const e=parseFloat(n);return isNaN(e)?n:e},tm=n=>{const e=Dt(n)?Number(n):NaN;return isNaN(e)?n:e};let th;const uf=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vi(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?rm(i):vi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||Et(n))return n}const nm=/;(?![^(]*\))/g,im=/:([^]+)/,sm=/\/\*[^]*?\*\//g;function rm(n){const e={};return n.replace(sm,"").split(nm).forEach(t=>{if(t){const i=t.split(im);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ii(n){let e="";if(Dt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=ii(n[t]);i&&(e+=i+" ")}else if(Et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",am=nu(om);function hf(n){return!!n||n===""}const Ft=n=>Dt(n)?n:n==null?"":$e(n)||Et(n)&&(n.toString===af||!tt(n.toString))?JSON.stringify(n,df,2):String(n),df=(n,e)=>e&&e.__v_isRef?df(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[_l(i,r)+" =>"]=s,t),{})}:rf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_l(t))}:Tr(e)?_l(e):Et(e)&&!$e(e)&&!lf(e)?String(e):e,_l=(n,e="")=>{var t;return Tr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kn;class lm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!e&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kn;try{return kn=this,e()}finally{kn=t}}}on(){kn=this}off(){kn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cm(n,e=kn){e&&e.active&&e.effects.push(n)}function um(){return kn}let bs;class ou{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cm(this,s)}get dirty(){if(this._dirtyLevel===1){Ps();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(hm(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ls()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Gi,t=bs;try{return Gi=!0,bs=this,this._runnings++,nh(this),this.fn()}finally{ih(this),this._runnings--,bs=t,Gi=e}}stop(){var e;this.active&&(nh(this),ih(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function hm(n){return n.value}function nh(n){n._trackId++,n._depsLength=0}function ih(n){if(n.deps&&n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)ff(n.deps[e],n);n.deps.length=n._depsLength}}function ff(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Gi=!0,sc=0;const pf=[];function Ps(){pf.push(Gi),Gi=!1}function Ls(){const n=pf.pop();Gi=n===void 0?!0:n}function au(){sc++}function lu(){for(sc--;!sc&&rc.length;)rc.shift()()}function mf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&ff(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const rc=[];function gf(n,e,t){au();for(const i of n.keys())if(i._dirtyLevel<e&&n.get(i)===i._trackId){const s=i._dirtyLevel;i._dirtyLevel=e,s===0&&(i._shouldSchedule=!0,i.trigger())}_f(n),lu()}function _f(n){for(const e of n.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&n.get(e)===e._trackId&&(e._shouldSchedule=!1,rc.push(e.scheduler))}const vf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ca=new WeakMap,Es=Symbol(""),oc=Symbol("");function vn(n,e,t){if(Gi&&bs){let i=Ca.get(n);i||Ca.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=vf(()=>i.delete(t))),mf(bs,s)}}function yi(n,e,t,i,s,r){const o=Ca.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&$e(n)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Tr(u)&&u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":$e(n)?ru(t)&&a.push(o.get("length")):(a.push(o.get(Es)),ur(n)&&a.push(o.get(oc)));break;case"delete":$e(n)||(a.push(o.get(Es)),ur(n)&&a.push(o.get(oc)));break;case"set":ur(n)&&a.push(o.get(Es));break}au();for(const c of a)c&&gf(c,2);lu()}function dm(n,e){var t;return(t=Ca.get(n))==null?void 0:t.get(e)}const fm=nu("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tr)),sh=pm();function pm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=ct(this);for(let r=0,o=this.length;r<o;r++)vn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(ct)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ps(),au();const i=ct(this)[e].apply(this,t);return lu(),Ls(),i}}),n}function mm(n){const e=ct(this);return vn(e,"has",n),e.hasOwnProperty(n)}class yf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Cm:Ef:r?bf:Sf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){if(o&&lt(sh,t))return Reflect.get(sh,t,i);if(t==="hasOwnProperty")return mm}const a=Reflect.get(e,t,i);return(Tr(t)?xf.has(t):fm(t))||(s||vn(e,"get",t),r)?a:dn(a)?o&&ru(t)?a:a.value:Et(a)?s?wf(a):ao(a):a}}class Mf extends yf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._shallow){const c=vr(r);if(!Ra(i)&&!vr(i)&&(r=ct(r),i=ct(i)),!$e(e)&&dn(r)&&!dn(i))return c?!1:(r.value=i,!0)}const o=$e(e)&&ru(t)?Number(t)<e.length:lt(e,t),a=Reflect.set(e,t,i,s);return e===ct(s)&&(o?$i(i,r)&&yi(e,"set",t,i):yi(e,"add",t,i)),a}deleteProperty(e,t){const i=lt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&yi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Tr(t)||!xf.has(t))&&vn(e,"has",t),i}ownKeys(e){return vn(e,"iterate",$e(e)?"length":Es),Reflect.ownKeys(e)}}class gm extends yf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _m=new Mf,vm=new gm,xm=new Mf(!0),cu=n=>n,Za=n=>Reflect.getPrototypeOf(n);function wo(n,e,t=!1,i=!1){n=n.__v_raw;const s=ct(n),r=ct(e);t||($i(e,r)&&vn(s,"get",e),vn(s,"get",r));const{has:o}=Za(s),a=i?cu:t?du:lo;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function To(n,e=!1){const t=this.__v_raw,i=ct(t),s=ct(n);return e||($i(n,s)&&vn(i,"has",n),vn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ao(n,e=!1){return n=n.__v_raw,!e&&vn(ct(n),"iterate",Es),Reflect.get(n,"size",n)}function rh(n){n=ct(n);const e=ct(this);return Za(e).has.call(e,n)||(e.add(n),yi(e,"add",n,n)),this}function oh(n,e){e=ct(e);const t=ct(this),{has:i,get:s}=Za(t);let r=i.call(t,n);r||(n=ct(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?$i(e,o)&&yi(t,"set",n,e):yi(t,"add",n,e),this}function ah(n){const e=ct(this),{has:t,get:i}=Za(e);let s=t.call(e,n);s||(n=ct(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&yi(e,"delete",n,void 0),r}function lh(){const n=ct(this),e=n.size!==0,t=n.clear();return e&&yi(n,"clear",void 0,void 0),t}function Co(n,e){return function(i,s){const r=this,o=r.__v_raw,a=ct(o),c=e?cu:n?du:lo;return!n&&vn(a,"iterate",Es),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function Ro(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=ur(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),u=t?cu:e?du:lo;return!e&&vn(r,"iterate",c?oc:Es),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ai(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ym(){const n={get(r){return wo(this,r)},get size(){return Ao(this)},has:To,add:rh,set:oh,delete:ah,clear:lh,forEach:Co(!1,!1)},e={get(r){return wo(this,r,!1,!0)},get size(){return Ao(this)},has:To,add:rh,set:oh,delete:ah,clear:lh,forEach:Co(!1,!0)},t={get(r){return wo(this,r,!0)},get size(){return Ao(this,!0)},has(r){return To.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:Co(!0,!1)},i={get(r){return wo(this,r,!0,!0)},get size(){return Ao(this,!0)},has(r){return To.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ro(r,!1,!1),t[r]=Ro(r,!0,!1),e[r]=Ro(r,!1,!0),i[r]=Ro(r,!0,!0)}),[n,t,e,i]}const[Mm,Sm,bm,Em]=ym();function uu(n,e){const t=e?n?Em:bm:n?Sm:Mm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(lt(t,s)&&s in i?t:i,s,r)}const wm={get:uu(!1,!1)},Tm={get:uu(!1,!0)},Am={get:uu(!0,!1)},Sf=new WeakMap,bf=new WeakMap,Ef=new WeakMap,Cm=new WeakMap;function Rm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pm(n){return n.__v_skip||!Object.isExtensible(n)?0:Rm(Zp(n))}function ao(n){return vr(n)?n:hu(n,!1,_m,wm,Sf)}function Lm(n){return hu(n,!1,xm,Tm,bf)}function wf(n){return hu(n,!0,vm,Am,Ef)}function hu(n,e,t,i,s){if(!Et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Pm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function hr(n){return vr(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function vr(n){return!!(n&&n.__v_isReadonly)}function Ra(n){return!!(n&&n.__v_isShallow)}function Tf(n){return hr(n)||vr(n)}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Af(n){return Aa(n,"__v_skip",!0),n}const lo=n=>Et(n)?ao(n):n,du=n=>Et(n)?wf(n):n;class Cf{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ou(()=>e(this._value),()=>_a(this,1),()=>this.dep&&_f(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ct(this);return(!e._cacheable||e.effect.dirty)&&$i(e._value,e._value=e.effect.run())&&_a(e,2),Rf(e),e.effect._dirtyLevel>=1&&_a(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Im(n,e,t=!1){let i,s;const r=tt(n);return r?(i=n,s=Rn):(i=n.get,s=n.set),new Cf(i,s,r||!s,t)}function Rf(n){Gi&&bs&&(n=ct(n),mf(bs,n.dep||(n.dep=vf(()=>n.dep=void 0,n instanceof Cf?n:void 0))))}function _a(n,e=2,t){n=ct(n);const i=n.dep;i&&gf(i,e)}function dn(n){return!!(n&&n.__v_isRef===!0)}function Bt(n){return Dm(n,!1)}function Dm(n,e){return dn(n)?n:new Um(n,e)}class Um{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ct(e),this._value=t?e:lo(e)}get value(){return Rf(this),this._value}set value(e){const t=this.__v_isShallow||Ra(e)||vr(e);e=t?e:ct(e),$i(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:lo(e),_a(this,2))}}function an(n){return dn(n)?n.value:n}const Nm={get:(n,e,t)=>an(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return dn(s)&&!dn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Pf(n){return hr(n)?n:new Proxy(n,Nm)}function Fm(n){const e=$e(n)?new Array(n.length):{};for(const t in n)e[t]=Bm(n,t);return e}class Om{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dm(ct(this._object),this._key)}}function Bm(n,e,t){const i=n[e];return dn(i)?i:new Om(n,e,t)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){Ja(r,e,t)}return s}function Ln(n,e,t,i){if(tt(n)){const r=Wi(n,e,t,i);return r&&of(r)&&r.catch(o=>{Ja(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}function Ja(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Wi(c,null,10,[n,o,a]);return}}zm(n,t,s,i)}function zm(n,e,t,i=!0){console.error(n)}let co=!1,ac=!1;const sn=[];let ti=0;const dr=[];let Oi=null,ps=0;const Lf=Promise.resolve();let fu=null;function pu(n){const e=fu||Lf;return n?e.then(this?n.bind(this):n):e}function km(n){let e=ti+1,t=sn.length;for(;e<t;){const i=e+t>>>1,s=sn[i],r=uo(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function mu(n){(!sn.length||!sn.includes(n,co&&n.allowRecurse?ti+1:ti))&&(n.id==null?sn.push(n):sn.splice(km(n.id),0,n),If())}function If(){!co&&!ac&&(ac=!0,fu=Lf.then(Uf))}function Hm(n){const e=sn.indexOf(n);e>ti&&sn.splice(e,1)}function Vm(n){$e(n)?dr.push(...n):(!Oi||!Oi.includes(n,n.allowRecurse?ps+1:ps))&&dr.push(n),If()}function ch(n,e,t=co?ti+1:0){for(;t<sn.length;t++){const i=sn[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i()}}}function Df(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>uo(t)-uo(i));if(dr.length=0,Oi){Oi.push(...e);return}for(Oi=e,ps=0;ps<Oi.length;ps++)Oi[ps]();Oi=null,ps=0}}const uo=n=>n.id==null?1/0:n.id,Gm=(n,e)=>{const t=uo(n)-uo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Uf(n){ac=!1,co=!0,sn.sort(Gm);try{for(ti=0;ti<sn.length;ti++){const e=sn[ti];e&&e.active!==!1&&Wi(e,null,14)}}finally{ti=0,sn.length=0,Df(),co=!1,fu=null,(sn.length||dr.length)&&Uf()}}function Wm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||At;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||At;h&&(s=t.map(p=>Dt(p)?p.trim():p)),d&&(s=t.map(em))}let a,c=i[a=ml(e)]||i[a=ml(_r(e))];!c&&r&&(c=i[a=ml(Rs(e))]),c&&Ln(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(l,n,6,s)}}function Nf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!tt(n)){const c=l=>{const u=Nf(l,e,!0);u&&(a=!0,kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(Et(n)&&i.set(n,null),null):($e(r)?r.forEach(c=>o[c]=null):kt(o,r),Et(n)&&i.set(n,o),o)}function Qa(n,e){return!n||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,Rs(e))||lt(n,e))}let hn=null,el=null;function Pa(n){const e=hn;return hn=n,el=n&&n.type.__scopeId||null,e}function Ar(n){el=n}function Cr(){el=null}function It(n,e=hn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Sh(-1);const r=Pa(e);let o;try{o=n(...s)}finally{Pa(r),i._d&&Sh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vl(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:p,ctx:_,inheritAttrs:g}=n;let m,f;const b=Pa(n);try{if(t.shapeFlag&4){const E=s||i,F=E;m=Qn(u.call(F,E,d,r,p,h,_)),f=c}else{const E=e;m=Qn(E.length>1?E(r,{attrs:c,slots:a,emit:l}):E(r,null)),f=e.props?c:Xm(c)}}catch(E){so.length=0,Ja(E,n,1),m=we(In)}let M=m;if(f&&g!==!1){const E=Object.keys(f),{shapeFlag:F}=M;E.length&&F&7&&(o&&E.some(iu)&&(f=jm(f,o)),M=Yi(M,f))}return t.dirs&&(M=Yi(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,Pa(b),m}const Xm=n=>{let e;for(const t in n)(t==="class"||t==="style"||$a(t))&&((e||(e={}))[t]=n[t]);return e},jm=(n,e)=>{const t={};for(const i in n)(!iu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?uh(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!Qa(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uh(i,o,l):!0:!!o;return!1}function uh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Qa(t,r))return!0}return!1}function $m({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ym=Symbol.for("v-ndc"),Km=n=>n.__isSuspense;function Zm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Vm(n)}const Jm=Symbol.for("v-scx"),Qm=()=>va(Jm),Po={};function eo(n,e,t){return Ff(n,e,t)}function Ff(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=At){if(e&&r){const A=e;e=(...C)=>{A(...C),F()}}const c=rn,l=A=>i===!0?A:ar(A,i===!1?1:void 0);let u,d=!1,h=!1;if(dn(n)?(u=()=>n.value,d=Ra(n)):hr(n)?(u=()=>l(n),d=!0):$e(n)?(h=!0,d=n.some(A=>hr(A)||Ra(A)),u=()=>n.map(A=>{if(dn(A))return A.value;if(hr(A))return l(A);if(tt(A))return Wi(A,c,2)})):tt(n)?e?u=()=>Wi(n,c,2):u=()=>(p&&p(),Ln(n,c,3,[_])):u=Rn,e&&i){const A=u;u=()=>ar(A())}let p,_=A=>{p=M.onStop=()=>{Wi(A,c,4),p=M.onStop=void 0}},g;if(rl)if(_=Rn,e?t&&Ln(e,c,3,[u(),h?[]:void 0,_]):u(),s==="sync"){const A=Qm();g=A.__watcherHandles||(A.__watcherHandles=[])}else return Rn;let m=h?new Array(n.length).fill(Po):Po;const f=()=>{if(!(!M.active||!M.dirty))if(e){const A=M.run();(i||d||(h?A.some((C,R)=>$i(C,m[R])):$i(A,m)))&&(p&&p(),Ln(e,c,3,[A,m===Po?void 0:h&&m[0]===Po?[]:m,_]),m=A)}else M.run()};f.allowRecurse=!!e;let b;s==="sync"?b=f:s==="post"?b=()=>mn(f,c&&c.suspense):(f.pre=!0,c&&(f.id=c.uid),b=()=>mu(f));const M=new ou(u,Rn,b),E=um(),F=()=>{M.stop(),E&&su(E.effects,M)};return e?t?f():m=M.run():s==="post"?mn(M.run.bind(M),c&&c.suspense):M.run(),g&&g.push(F),F}function eg(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?Of(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const o=vo(this),a=Ff(s,r.bind(i),t);return o(),a}function Of(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ar(n,e,t=0,i){if(!Et(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),dn(n))ar(n.value,e,t,i);else if($e(n))for(let s=0;s<n.length;s++)ar(n[s],e,t,i);else if(rf(n)||ur(n))n.forEach(s=>{ar(s,e,t,i)});else if(lf(n))for(const s in n)ar(n[s],e,t,i);return n}function is(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Ps(),Ln(c,t,8,[n.el,a,n,e]),Ls())}}const Bi=Symbol("_leaveCb"),Lo=Symbol("_enterCb");function tg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Is(()=>{n.isMounted=!0}),Rr(()=>{n.isUnmounting=!0}),n}const En=[Function,Array],Bf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},ng={name:"BaseTransition",props:Bf,setup(n,{slots:e}){const t=Hg(),i=tg();let s;return()=>{const r=e.default&&kf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==In){o=g;break}}const a=ct(n),{mode:c}=a;if(i.isLeaving)return xl(o);const l=hh(o);if(!l)return xl(o);const u=lc(l,a,i,t);cc(l,u);const d=t.subTree,h=d&&hh(d);let p=!1;const{getTransitionKey:_}=l.type;if(_){const g=_();s===void 0?s=g:g!==s&&(s=g,p=!0)}if(h&&h.type!==In&&(!ms(l,h)||p)){const g=lc(h,a,i,t);if(cc(h,g),c==="out-in")return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},xl(o);c==="in-out"&&l.type!==In&&(g.delayLeave=(m,f,b)=>{const M=zf(i,h);M[String(h.key)]=h,m[Bi]=()=>{f(),m[Bi]=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},ig=ng;function zf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function lc(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:f,onAppearCancelled:b}=e,M=String(n.key),E=zf(t,n),F=(R,S)=>{R&&Ln(R,i,9,S)},A=(R,S)=>{const x=S[1];F(R,S),$e(R)?R.every(P=>P.length<=1)&&x():R.length<=1&&x()},C={mode:r,persisted:o,beforeEnter(R){let S=a;if(!t.isMounted)if(s)S=g||a;else return;R[Bi]&&R[Bi](!0);const x=E[M];x&&ms(n,x)&&x.el[Bi]&&x.el[Bi](),F(S,[R])},enter(R){let S=c,x=l,P=u;if(!t.isMounted)if(s)S=m||c,x=f||l,P=b||u;else return;let L=!1;const B=R[Lo]=$=>{L||(L=!0,$?F(P,[R]):F(x,[R]),C.delayedLeave&&C.delayedLeave(),R[Lo]=void 0)};S?A(S,[R,B]):B()},leave(R,S){const x=String(n.key);if(R[Lo]&&R[Lo](!0),t.isUnmounting)return S();F(d,[R]);let P=!1;const L=R[Bi]=B=>{P||(P=!0,S(),B?F(_,[R]):F(p,[R]),R[Bi]=void 0,E[x]===n&&delete E[x])};E[x]=n,h?A(h,[R,L]):L()},clone(R){return lc(R,e,t,i)}};return C}function xl(n){if(tl(n))return n=Yi(n),n.children=null,n}function hh(n){return tl(n)?n.children?n.children[0]:void 0:n}function cc(n,e){n.shapeFlag&6&&n.component?cc(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function kf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===zt?(o.patchFlag&128&&s++,i=i.concat(kf(o.children,e,a))):(e||o.type!==In)&&i.push(a!=null?Yi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ri(n,e){return tt(n)?kt({name:n.name},e,{setup:n}):n}const to=n=>!!n.type.__asyncLoader,tl=n=>n.type.__isKeepAlive;function sg(n,e){Hf(n,"a",e)}function rg(n,e){Hf(n,"da",e)}function Hf(n,e,t=rn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(nl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)tl(s.parent.vnode)&&og(i,e,t,s),s=s.parent}}function og(n,e,t,i){const s=nl(e,n,i,!0);Gf(()=>{su(i[e],s)},t)}function nl(n,e,t=rn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ps();const a=vo(t),c=Ln(e,t,n,o);return a(),Ls(),c});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=rn)=>(!rl||n==="sp")&&nl(n,(...i)=>e(...i),t),ag=bi("bm"),Is=bi("m"),lg=bi("bu"),Vf=bi("u"),Rr=bi("bum"),Gf=bi("um"),cg=bi("sp"),ug=bi("rtg"),hg=bi("rtc");function dg(n,e=rn){nl("ec",n,e)}function xr(n,e,t,i){let s;const r=t;if($e(n)||Dt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Et(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(n[l],l,a,r)}}else s=[];return s}function Wf(n,e,t={},i,s){if(hn.isCE||hn.parent&&to(hn.parent)&&hn.parent.isCE)return we("slot",t,i);let r=n[e];r&&r._c&&(r._d=!1),it();const o=r&&Xf(r(t)),a=Ts(zt,{key:t.key||o&&o.key||`_${e}`},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),a}function Xf(n){return n.some(e=>Da(e)?!(e.type===In||e.type===zt&&!Xf(e.children)):!0)?n:null}const uc=n=>n?rp(n)?Mu(n)||n.proxy:uc(n.parent):null,no=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>uc(n.parent),$root:n=>uc(n.root),$emit:n=>n.emit,$options:n=>gu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,mu(n.update)}),$nextTick:n=>n.n||(n.n=pu.bind(n.proxy)),$watch:n=>eg.bind(n)}),yl=(n,e)=>n!==At&&!n.__isScriptSetup&&lt(n,e),fg={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(yl(i,e))return o[e]=1,i[e];if(s!==At&&lt(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&lt(l,e))return o[e]=3,r[e];if(t!==At&&lt(t,e))return o[e]=4,t[e];hc&&(o[e]=0)}}const u=no[e];let d,h;if(u)return e==="$attrs"&&vn(n,"get",e),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==At&&lt(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,lt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return yl(s,e)?(s[e]=t,!0):i!==At&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==At&&lt(n,o)||yl(e,o)||(a=r[0])&&lt(a,o)||lt(i,o)||lt(no,o)||lt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dh(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let hc=!0;function pg(n){const e=gu(n),t=n.proxy,i=n.ctx;hc=!1,e.beforeCreate&&fh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:f,beforeUnmount:b,destroyed:M,unmounted:E,render:F,renderTracked:A,renderTriggered:C,errorCaptured:R,serverPrefetch:S,expose:x,inheritAttrs:P,components:L,directives:B,filters:$}=e;if(l&&mg(l,i,null),o)for(const Q in o){const K=o[Q];tt(K)&&(i[Q]=K.bind(t))}if(s){const Q=s.call(t,t);Et(Q)&&(n.data=ao(Q))}if(hc=!0,r)for(const Q in r){const K=r[Q],ve=tt(K)?K.bind(t,t):tt(K.get)?K.get.bind(t,t):Rn,xe=!tt(K)&&tt(K.set)?K.set.bind(t):Rn,_e=An({get:ve,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>_e.value,set:ke=>_e.value=ke})}if(a)for(const Q in a)jf(a[Q],i,t,Q);if(c){const Q=tt(c)?c.call(t):c;Reflect.ownKeys(Q).forEach(K=>{Mg(K,Q[K])})}u&&fh(u,n,"c");function Y(Q,K){$e(K)?K.forEach(ve=>Q(ve.bind(t))):K&&Q(K.bind(t))}if(Y(ag,d),Y(Is,h),Y(lg,p),Y(Vf,_),Y(sg,g),Y(rg,m),Y(dg,R),Y(hg,A),Y(ug,C),Y(Rr,b),Y(Gf,E),Y(cg,S),$e(x))if(x.length){const Q=n.exposed||(n.exposed={});x.forEach(K=>{Object.defineProperty(Q,K,{get:()=>t[K],set:ve=>t[K]=ve})})}else n.exposed||(n.exposed={});F&&n.render===Rn&&(n.render=F),P!=null&&(n.inheritAttrs=P),L&&(n.components=L),B&&(n.directives=B)}function mg(n,e,t=Rn){$e(n)&&(n=dc(n));for(const i in n){const s=n[i];let r;Et(s)?"default"in s?r=va(s.from||i,s.default,!0):r=va(s.from||i):r=va(s),dn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function fh(n,e,t){Ln($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function jf(n,e,t,i){const s=i.includes(".")?Of(t,i):()=>t[i];if(Dt(n)){const r=e[n];tt(r)&&eo(s,r)}else if(tt(n))eo(s,n.bind(t));else if(Et(n))if($e(n))n.forEach(r=>jf(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&eo(s,r,n)}}function gu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>La(c,l,o,!0)),La(c,e,o)),Et(e)&&r.set(e,c),c}function La(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&La(n,r,t,!0),s&&s.forEach(o=>La(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gg={data:ph,props:mh,emits:mh,methods:Jr,computed:Jr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Jr,directives:Jr,watch:vg,provide:ph,inject:_g};function ph(n,e){return e?n?function(){return kt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function _g(n,e){return Jr(dc(n),dc(e))}function dc(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ln(n,e){return n?[...new Set([].concat(n,e))]:e}function Jr(n,e){return n?kt(Object.create(null),n,e):e}function mh(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:kt(Object.create(null),dh(n),dh(e??{})):e}function vg(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=ln(n[i],e[i]);return t}function qf(){return{app:null,config:{isNativeTag:Yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xg=0;function yg(n,e){return function(i,s=null){tt(i)||(i=kt({},i)),s!=null&&!Et(s)&&(s=null);const r=qf(),o=new WeakSet;let a=!1;const c=r.app={_uid:xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qg,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&tt(l.install)?(o.add(l),l.install(c,...u)):tt(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,d){if(!a){const h=we(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,l):n(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Mu(h.component)||h.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Ia=c;try{return l()}finally{Ia=null}}};return c}}let Ia=null;function Mg(n,e){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[n]=e}}function va(n,e,t=!1){const i=rn||hn;if(i||Ia){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ia._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}function Sg(n,e,t,i=!1){const s={},r={};Aa(r,sl,1),n.propsDefaults=Object.create(null),$f(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Lm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Qa(n.emitsOptions,h))continue;const p=e[h];if(c)if(lt(r,h))p!==r[h]&&(r[h]=p,l=!0);else{const _=_r(h);s[_]=fc(c,a,_,p,n,!1)}else p!==r[h]&&(r[h]=p,l=!0)}}}else{$f(n,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!lt(e,d)&&((u=Rs(d))===d||!lt(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=fc(c,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!lt(e,d))&&(delete r[d],l=!0)}l&&yi(n,"set","$attrs")}function $f(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(ga(c))continue;const l=e[c];let u;s&&lt(s,u=_r(c))?!r||!r.includes(u)?t[u]=l:(a||(a={}))[u]=l:Qa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=ct(t),l=a||At;for(let u=0;u<r.length;u++){const d=r[u];t[d]=fc(s,c,d,l[d],n,!lt(l,d))}}return o}function fc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&tt(c)){const{propsDefaults:l}=s;if(t in l)i=l[t];else{const u=vo(s);i=l[t]=c.call(null,e),u()}}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Rs(t))&&(i=!0))}return i}function Yf(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!tt(n)){const u=d=>{c=!0;const[h,p]=Yf(d,e,!0);kt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return Et(n)&&i.set(n,cr),cr;if($e(r))for(let u=0;u<r.length;u++){const d=_r(r[u]);gh(d)&&(o[d]=At)}else if(r)for(const u in r){const d=_r(u);if(gh(d)){const h=r[u],p=o[d]=$e(h)||tt(h)?{type:h}:kt({},h);if(p){const _=xh(Boolean,p.type),g=xh(String,p.type);p[0]=_>-1,p[1]=g<0||_<g,(_>-1||lt(p,"default"))&&a.push(d)}}}const l=[o,a];return Et(n)&&i.set(n,l),l}function gh(n){return n[0]!=="$"}function _h(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function vh(n,e){return _h(n)===_h(e)}function xh(n,e){return $e(e)?e.findIndex(t=>vh(t,n)):tt(e)&&vh(e,n)?0:-1}const Kf=n=>n[0]==="_"||n==="$stable",_u=n=>$e(n)?n.map(Qn):[Qn(n)],Eg=(n,e,t)=>{if(e._n)return e;const i=It((...s)=>_u(e(...s)),t);return i._c=!1,i},Zf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Kf(s))continue;const r=n[s];if(tt(r))e[s]=Eg(s,r,i);else if(r!=null){const o=_u(r);e[s]=()=>o}}},Jf=(n,e)=>{const t=_u(e);n.slots.default=()=>t},wg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=ct(e),Aa(e,"_",t)):Zf(e,n.slots={})}else n.slots={},e&&Jf(n,e);Aa(n.slots,sl,1)},Tg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=At;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(kt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Zf(e,s)),o=e}else e&&(Jf(n,e),o={default:1});if(r)for(const a in s)!Kf(a)&&o[a]==null&&delete s[a]};function pc(n,e,t,i,s=!1){if($e(n)){n.forEach((h,p)=>pc(h,e&&($e(e)?e[p]:e),t,i,s));return}if(to(i)&&!s)return;const r=i.shapeFlag&4?Mu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,u=a.refs===At?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(Dt(l)?(u[l]=null,lt(d,l)&&(d[l]=null)):dn(l)&&(l.value=null)),tt(c))Wi(c,a,12,[o,u]);else{const h=Dt(c),p=dn(c),_=n.f;if(h||p){const g=()=>{if(_){const m=h?lt(d,c)?d[c]:u[c]:c.value;s?$e(m)&&su(m,r):$e(m)?m.includes(r)||m.push(r):h?(u[c]=[r],lt(d,c)&&(d[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else h?(u[c]=o,lt(d,c)&&(d[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};s||_?g():(g.id=-1,mn(g,t))}}}const mn=Zm;function Ag(n){return Cg(n)}function Cg(n,e){const t=uf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Rn,insertStaticContent:_}=n,g=(I,O,X,W=null,ie=null,ne=null,se=void 0,w=null,v=!!O.dynamicChildren)=>{if(I===O)return;I&&!ms(I,O)&&(W=Se(I),ke(I,ie,ne,!0),I=null),O.patchFlag===-2&&(v=!1,O.dynamicChildren=null);const{type:D,ref:V,shapeFlag:Z}=O;switch(D){case il:m(I,O,X,W);break;case In:f(I,O,X,W);break;case xa:I==null&&b(O,X,W,se);break;case zt:L(I,O,X,W,ie,ne,se,w,v);break;default:Z&1?F(I,O,X,W,ie,ne,se,w,v):Z&6?B(I,O,X,W,ie,ne,se,w,v):(Z&64||Z&128)&&D.process(I,O,X,W,ie,ne,se,w,v,Ge)}V!=null&&ie&&pc(V,I&&I.ref,ne,O||I,!O)},m=(I,O,X,W)=>{if(I==null)i(O.el=a(O.children),X,W);else{const ie=O.el=I.el;O.children!==I.children&&l(ie,O.children)}},f=(I,O,X,W)=>{I==null?i(O.el=c(O.children||""),X,W):O.el=I.el},b=(I,O,X,W)=>{[I.el,I.anchor]=_(I.children,O,X,W,I.el,I.anchor)},M=({el:I,anchor:O},X,W)=>{let ie;for(;I&&I!==O;)ie=h(I),i(I,X,W),I=ie;i(O,X,W)},E=({el:I,anchor:O})=>{let X;for(;I&&I!==O;)X=h(I),s(I),I=X;s(O)},F=(I,O,X,W,ie,ne,se,w,v)=>{O.type==="svg"?se="svg":O.type==="math"&&(se="mathml"),I==null?A(O,X,W,ie,ne,se,w,v):S(I,O,ie,ne,se,w,v)},A=(I,O,X,W,ie,ne,se,w)=>{let v,D;const{props:V,shapeFlag:Z,transition:z,dirs:ce}=I;if(v=I.el=o(I.type,ne,V&&V.is,V),Z&8?u(v,I.children):Z&16&&R(I.children,v,null,W,ie,Ml(I,ne),se,w),ce&&is(I,null,W,"created"),C(v,I,I.scopeId,se,W),V){for(const he in V)he!=="value"&&!ga(he)&&r(v,he,null,V[he],ne,I.children,W,ie,ye);"value"in V&&r(v,"value",null,V.value,ne),(D=V.onVnodeBeforeMount)&&Zn(D,W,I)}ce&&is(I,null,W,"beforeMount");const oe=Rg(ie,z);oe&&z.beforeEnter(v),i(v,O,X),((D=V&&V.onVnodeMounted)||oe||ce)&&mn(()=>{D&&Zn(D,W,I),oe&&z.enter(v),ce&&is(I,null,W,"mounted")},ie)},C=(I,O,X,W,ie)=>{if(X&&p(I,X),W)for(let ne=0;ne<W.length;ne++)p(I,W[ne]);if(ie){let ne=ie.subTree;if(O===ne){const se=ie.vnode;C(I,se,se.scopeId,se.slotScopeIds,ie.parent)}}},R=(I,O,X,W,ie,ne,se,w,v=0)=>{for(let D=v;D<I.length;D++){const V=I[D]=w?zi(I[D]):Qn(I[D]);g(null,V,O,X,W,ie,ne,se,w)}},S=(I,O,X,W,ie,ne,se)=>{const w=O.el=I.el;let{patchFlag:v,dynamicChildren:D,dirs:V}=O;v|=I.patchFlag&16;const Z=I.props||At,z=O.props||At;let ce;if(X&&ss(X,!1),(ce=z.onVnodeBeforeUpdate)&&Zn(ce,X,O,I),V&&is(O,I,X,"beforeUpdate"),X&&ss(X,!0),D?x(I.dynamicChildren,D,w,X,W,Ml(O,ie),ne):se||K(I,O,w,null,X,W,Ml(O,ie),ne,!1),v>0){if(v&16)P(w,O,Z,z,X,W,ie);else if(v&2&&Z.class!==z.class&&r(w,"class",null,z.class,ie),v&4&&r(w,"style",Z.style,z.style,ie),v&8){const oe=O.dynamicProps;for(let he=0;he<oe.length;he++){const Ae=oe[he],ae=Z[Ae],ge=z[Ae];(ge!==ae||Ae==="value")&&r(w,Ae,ae,ge,ie,I.children,X,W,ye)}}v&1&&I.children!==O.children&&u(w,O.children)}else!se&&D==null&&P(w,O,Z,z,X,W,ie);((ce=z.onVnodeUpdated)||V)&&mn(()=>{ce&&Zn(ce,X,O,I),V&&is(O,I,X,"updated")},W)},x=(I,O,X,W,ie,ne,se)=>{for(let w=0;w<O.length;w++){const v=I[w],D=O[w],V=v.el&&(v.type===zt||!ms(v,D)||v.shapeFlag&70)?d(v.el):X;g(v,D,V,null,W,ie,ne,se,!0)}},P=(I,O,X,W,ie,ne,se)=>{if(X!==W){if(X!==At)for(const w in X)!ga(w)&&!(w in W)&&r(I,w,X[w],null,se,O.children,ie,ne,ye);for(const w in W){if(ga(w))continue;const v=W[w],D=X[w];v!==D&&w!=="value"&&r(I,w,D,v,se,O.children,ie,ne,ye)}"value"in W&&r(I,"value",X.value,W.value,se)}},L=(I,O,X,W,ie,ne,se,w,v)=>{const D=O.el=I?I.el:a(""),V=O.anchor=I?I.anchor:a("");let{patchFlag:Z,dynamicChildren:z,slotScopeIds:ce}=O;ce&&(w=w?w.concat(ce):ce),I==null?(i(D,X,W),i(V,X,W),R(O.children||[],X,V,ie,ne,se,w,v)):Z>0&&Z&64&&z&&I.dynamicChildren?(x(I.dynamicChildren,z,X,ie,ne,se,w),(O.key!=null||ie&&O===ie.subTree)&&vu(I,O,!0)):K(I,O,X,V,ie,ne,se,w,v)},B=(I,O,X,W,ie,ne,se,w,v)=>{O.slotScopeIds=w,I==null?O.shapeFlag&512?ie.ctx.activate(O,X,W,se,v):$(O,X,W,ie,ne,se,v):ee(I,O,v)},$=(I,O,X,W,ie,ne,se)=>{const w=I.component=kg(I,W,ie);if(tl(I)&&(w.ctx.renderer=Ge),Vg(w),w.asyncDep){if(ie&&ie.registerDep(w,Y),!I.el){const v=w.subTree=we(In);f(null,v,O,X)}}else Y(w,I,O,X,ie,ne,se)},ee=(I,O,X)=>{const W=O.component=I.component;if(qm(I,O,X))if(W.asyncDep&&!W.asyncResolved){Q(W,O,X);return}else W.next=O,Hm(W.update),W.effect.dirty=!0,W.update();else O.el=I.el,W.vnode=O},Y=(I,O,X,W,ie,ne,se)=>{const w=()=>{if(I.isMounted){let{next:V,bu:Z,u:z,parent:ce,vnode:oe}=I;{const We=Qf(I);if(We){V&&(V.el=oe.el,Q(I,V,se)),We.asyncDep.then(()=>{I.isUnmounted||w()});return}}let he=V,Ae;ss(I,!1),V?(V.el=oe.el,Q(I,V,se)):V=oe,Z&&gl(Z),(Ae=V.props&&V.props.onVnodeBeforeUpdate)&&Zn(Ae,ce,V,oe),ss(I,!0);const ae=vl(I),ge=I.subTree;I.subTree=ae,g(ge,ae,d(ge.el),Se(ge),I,ie,ne),V.el=ae.el,he===null&&$m(I,ae.el),z&&mn(z,ie),(Ae=V.props&&V.props.onVnodeUpdated)&&mn(()=>Zn(Ae,ce,V,oe),ie)}else{let V;const{el:Z,props:z}=O,{bm:ce,m:oe,parent:he}=I,Ae=to(O);if(ss(I,!1),ce&&gl(ce),!Ae&&(V=z&&z.onVnodeBeforeMount)&&Zn(V,he,O),ss(I,!0),Z&&N){const ae=()=>{I.subTree=vl(I),N(Z,I.subTree,I,ie,null)};Ae?O.type.__asyncLoader().then(()=>!I.isUnmounted&&ae()):ae()}else{const ae=I.subTree=vl(I);g(null,ae,X,W,I,ie,ne),O.el=ae.el}if(oe&&mn(oe,ie),!Ae&&(V=z&&z.onVnodeMounted)){const ae=O;mn(()=>Zn(V,he,ae),ie)}(O.shapeFlag&256||he&&to(he.vnode)&&he.vnode.shapeFlag&256)&&I.a&&mn(I.a,ie),I.isMounted=!0,O=X=W=null}},v=I.effect=new ou(w,Rn,()=>mu(D),I.scope),D=I.update=()=>{v.dirty&&v.run()};D.id=I.uid,ss(I,!0),D()},Q=(I,O,X)=>{O.component=I;const W=I.vnode.props;I.vnode=O,I.next=null,bg(I,O.props,W,X),Tg(I,O.children,X),Ps(),ch(I),Ls()},K=(I,O,X,W,ie,ne,se,w,v=!1)=>{const D=I&&I.children,V=I?I.shapeFlag:0,Z=O.children,{patchFlag:z,shapeFlag:ce}=O;if(z>0){if(z&128){xe(D,Z,X,W,ie,ne,se,w,v);return}else if(z&256){ve(D,Z,X,W,ie,ne,se,w,v);return}}ce&8?(V&16&&ye(D,ie,ne),Z!==D&&u(X,Z)):V&16?ce&16?xe(D,Z,X,W,ie,ne,se,w,v):ye(D,ie,ne,!0):(V&8&&u(X,""),ce&16&&R(Z,X,W,ie,ne,se,w,v))},ve=(I,O,X,W,ie,ne,se,w,v)=>{I=I||cr,O=O||cr;const D=I.length,V=O.length,Z=Math.min(D,V);let z;for(z=0;z<Z;z++){const ce=O[z]=v?zi(O[z]):Qn(O[z]);g(I[z],ce,X,null,ie,ne,se,w,v)}D>V?ye(I,ie,ne,!0,!1,Z):R(O,X,W,ie,ne,se,w,v,Z)},xe=(I,O,X,W,ie,ne,se,w,v)=>{let D=0;const V=O.length;let Z=I.length-1,z=V-1;for(;D<=Z&&D<=z;){const ce=I[D],oe=O[D]=v?zi(O[D]):Qn(O[D]);if(ms(ce,oe))g(ce,oe,X,null,ie,ne,se,w,v);else break;D++}for(;D<=Z&&D<=z;){const ce=I[Z],oe=O[z]=v?zi(O[z]):Qn(O[z]);if(ms(ce,oe))g(ce,oe,X,null,ie,ne,se,w,v);else break;Z--,z--}if(D>Z){if(D<=z){const ce=z+1,oe=ce<V?O[ce].el:W;for(;D<=z;)g(null,O[D]=v?zi(O[D]):Qn(O[D]),X,oe,ie,ne,se,w,v),D++}}else if(D>z)for(;D<=Z;)ke(I[D],ie,ne,!0),D++;else{const ce=D,oe=D,he=new Map;for(D=oe;D<=z;D++){const Ce=O[D]=v?zi(O[D]):Qn(O[D]);Ce.key!=null&&he.set(Ce.key,D)}let Ae,ae=0;const ge=z-oe+1;let We=!1,Be=0;const be=new Array(ge);for(D=0;D<ge;D++)be[D]=0;for(D=ce;D<=Z;D++){const Ce=I[D];if(ae>=ge){ke(Ce,ie,ne,!0);continue}let Ye;if(Ce.key!=null)Ye=he.get(Ce.key);else for(Ae=oe;Ae<=z;Ae++)if(be[Ae-oe]===0&&ms(Ce,O[Ae])){Ye=Ae;break}Ye===void 0?ke(Ce,ie,ne,!0):(be[Ye-oe]=D+1,Ye>=Be?Be=Ye:We=!0,g(Ce,O[Ye],X,null,ie,ne,se,w,v),ae++)}const He=We?Pg(be):cr;for(Ae=He.length-1,D=ge-1;D>=0;D--){const Ce=oe+D,Ye=O[Ce],y=Ce+1<V?O[Ce+1].el:W;be[D]===0?g(null,Ye,X,y,ie,ne,se,w,v):We&&(Ae<0||D!==He[Ae]?_e(Ye,X,y,2):Ae--)}}},_e=(I,O,X,W,ie=null)=>{const{el:ne,type:se,transition:w,children:v,shapeFlag:D}=I;if(D&6){_e(I.component.subTree,O,X,W);return}if(D&128){I.suspense.move(O,X,W);return}if(D&64){se.move(I,O,X,Ge);return}if(se===zt){i(ne,O,X);for(let Z=0;Z<v.length;Z++)_e(v[Z],O,X,W);i(I.anchor,O,X);return}if(se===xa){M(I,O,X);return}if(W!==2&&D&1&&w)if(W===0)w.beforeEnter(ne),i(ne,O,X),mn(()=>w.enter(ne),ie);else{const{leave:Z,delayLeave:z,afterLeave:ce}=w,oe=()=>i(ne,O,X),he=()=>{Z(ne,()=>{oe(),ce&&ce()})};z?z(ne,oe,he):he()}else i(ne,O,X)},ke=(I,O,X,W=!1,ie=!1)=>{const{type:ne,props:se,ref:w,children:v,dynamicChildren:D,shapeFlag:V,patchFlag:Z,dirs:z}=I;if(w!=null&&pc(w,null,X,I,!0),V&256){O.ctx.deactivate(I);return}const ce=V&1&&z,oe=!to(I);let he;if(oe&&(he=se&&se.onVnodeBeforeUnmount)&&Zn(he,O,I),V&6)ue(I.component,X,W);else{if(V&128){I.suspense.unmount(X,W);return}ce&&is(I,null,O,"beforeUnmount"),V&64?I.type.remove(I,O,X,ie,Ge,W):D&&(ne!==zt||Z>0&&Z&64)?ye(D,O,X,!1,!0):(ne===zt&&Z&384||!ie&&V&16)&&ye(v,O,X),W&&nt(I)}(oe&&(he=se&&se.onVnodeUnmounted)||ce)&&mn(()=>{he&&Zn(he,O,I),ce&&is(I,null,O,"unmounted")},X)},nt=I=>{const{type:O,el:X,anchor:W,transition:ie}=I;if(O===zt){re(X,W);return}if(O===xa){E(I);return}const ne=()=>{s(X),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(I.shapeFlag&1&&ie&&!ie.persisted){const{leave:se,delayLeave:w}=ie,v=()=>se(X,ne);w?w(I.el,ne,v):v()}else ne()},re=(I,O)=>{let X;for(;I!==O;)X=h(I),s(I),I=X;s(O)},ue=(I,O,X)=>{const{bum:W,scope:ie,update:ne,subTree:se,um:w}=I;W&&gl(W),ie.stop(),ne&&(ne.active=!1,ke(se,I,O,X)),w&&mn(w,O),mn(()=>{I.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},ye=(I,O,X,W=!1,ie=!1,ne=0)=>{for(let se=ne;se<I.length;se++)ke(I[se],O,X,W,ie)},Se=I=>I.shapeFlag&6?Se(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el);let Fe=!1;const Ve=(I,O,X)=>{I==null?O._vnode&&ke(O._vnode,null,null,!0):g(O._vnode||null,I,O,null,null,null,X),Fe||(Fe=!0,ch(),Df(),Fe=!1),O._vnode=I},Ge={p:g,um:ke,m:_e,r:nt,mt:$,mc:R,pc:K,pbc:x,n:Se,o:n};let ut,N;return{render:Ve,hydrate:ut,createApp:yg(Ve,ut)}}function Ml({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ss({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vu(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=zi(s[r]),a.el=o.el),t||vu(o,a)),a.type===il&&(a.el=o.el)}}function Pg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Qf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qf(e)}const Lg=n=>n.__isTeleport,io=n=>n&&(n.disabled||n.disabled===""),yh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Mh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,mc=(n,e)=>{const t=n&&n.to;return Dt(t)?e?e(t):null:t},Ig={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:p,querySelector:_,createText:g,createComment:m}}=l,f=io(e.props);let{shapeFlag:b,children:M,dynamicChildren:E}=e;if(n==null){const F=e.el=g(""),A=e.anchor=g("");p(F,t,i),p(A,t,i);const C=e.target=mc(e.props,_),R=e.targetAnchor=g("");C&&(p(R,C),o==="svg"||yh(C)?o="svg":(o==="mathml"||Mh(C))&&(o="mathml"));const S=(x,P)=>{b&16&&u(M,x,P,s,r,o,a,c)};f?S(t,A):C&&S(C,R)}else{e.el=n.el;const F=e.anchor=n.anchor,A=e.target=n.target,C=e.targetAnchor=n.targetAnchor,R=io(n.props),S=R?t:A,x=R?F:C;if(o==="svg"||yh(A)?o="svg":(o==="mathml"||Mh(A))&&(o="mathml"),E?(h(n.dynamicChildren,E,S,s,r,o,a),vu(n,e,!0)):c||d(n,e,S,x,s,r,o,a,!1),f)R?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Io(e,t,F,l,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const P=e.target=mc(e.props,_);P&&Io(e,P,null,l,0)}else R&&Io(e,A,C,l,1)}tp(e)},remove(n,e,t,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=n;if(d&&r(u),o&&r(l),a&16){const p=o||!io(h);for(let _=0;_<c.length;_++){const g=c[_];s(g,e,t,p,!!g.dynamicChildren)}}},move:Io,hydrate:Dg};function Io(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=n,d=r===2;if(d&&i(o,e,t),(!d||io(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,t,2);d&&i(a,e,t)}function Dg(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=mc(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(io(e.props))e.anchor=l(o(n),e,a(n),t,i,s,r),e.targetAnchor=d;else{e.anchor=o(n);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,t,i,s,r)}tp(e)}return e.anchor&&o(e.anchor)}const ep=Ig;function tp(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const zt=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),so=[];let Gn=null;function it(n=!1){so.push(Gn=n?null:[])}function Ug(){so.pop(),Gn=so[so.length-1]||null}let ho=1;function Sh(n){ho+=n}function np(n){return n.dynamicChildren=ho>0?Gn||cr:null,Ug(),ho>0&&Gn&&Gn.push(n),n}function ht(n,e,t,i,s,r){return np(le(n,e,t,i,s,r,!0))}function Ts(n,e,t,i,s){return np(we(n,e,t,i,s,!0))}function Da(n){return n?n.__v_isVNode===!0:!1}function ms(n,e){return n.type===e.type&&n.key===e.key}const sl="__vInternal",ip=({key:n})=>n??null,ya=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||dn(n)||tt(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function le(n,e=null,t=null,i=0,s=null,r=n===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ip(e),ref:e&&ya(e),scopeId:el,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(yu(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Dt(t)?8:16),ho>0&&!o&&Gn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Gn.push(c),c}const we=Ng;function Ng(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ym)&&(n=In),Da(n)){const a=Yi(n,e,!0);return t&&yu(a,t),ho>0&&!r&&Gn&&(a.shapeFlag&6?Gn[Gn.indexOf(n)]=a:Gn.push(a)),a.patchFlag|=-2,a}if(jg(n)&&(n=n.__vccOpts),e){e=Fg(e);let{class:a,style:c}=e;a&&!Dt(a)&&(e.class=ii(a)),Et(c)&&(Tf(c)&&!$e(c)&&(c=kt({},c)),e.style=vi(c))}const o=Dt(n)?1:Km(n)?128:Lg(n)?64:Et(n)?4:tt(n)?2:0;return le(n,e,t,i,s,o,r,!0)}function Fg(n){return n?Tf(n)||sl in n?kt({},n):n:null}function Yi(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?Og(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&ip(a),ref:e&&e.ref?t&&s?$e(s)?s.concat(ya(e)):[s,ya(e)]:ya(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Yi(n.ssContent),ssFallback:n.ssFallback&&Yi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function xu(n=" ",e=0){return we(il,null,n,e)}function sp(n,e){const t=we(xa,null,n);return t.staticCount=e,t}function Pn(n="",e=!1){return e?(it(),Ts(In,null,n)):we(In,null,n)}function Qn(n){return n==null||typeof n=="boolean"?we(In):$e(n)?we(zt,null,n.slice()):typeof n=="object"?zi(n):we(il,null,String(n))}function zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Yi(n)}function yu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(sl in e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[xu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Og(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ii([e.class,i.class]));else if(s==="style")e.style=vi([e.style,i.style]);else if($a(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Zn(n,e,t,i=null){Ln(n,e,7,[t,i])}const Bg=qf();let zg=0;function kg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Bg,r={uid:zg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(i,s),emitsOptions:Nf(i,s),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wm.bind(null,r),n.ce&&n.ce(r),r}let rn=null;const Hg=()=>rn||hn;let Ua,gc;{const n=uf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ua=e("__VUE_INSTANCE_SETTERS__",t=>rn=t),gc=e("__VUE_SSR_SETTERS__",t=>rl=t)}const vo=n=>{const e=rn;return Ua(n),n.scope.on(),()=>{n.scope.off(),Ua(e)}},bh=()=>{rn&&rn.scope.off(),Ua(null)};function rp(n){return n.vnode.shapeFlag&4}let rl=!1;function Vg(n,e=!1){e&&gc(e);const{props:t,children:i}=n.vnode,s=rp(n);Sg(n,t,s,e),wg(n,i);const r=s?Gg(n,e):void 0;return e&&gc(!1),r}function Gg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Af(new Proxy(n.ctx,fg));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Xg(n):null,r=vo(n);Ps();const o=Wi(i,n,0,[n.props,s]);if(Ls(),r(),of(o)){if(o.then(bh,bh),e)return o.then(a=>{Eh(n,a,e)}).catch(a=>{Ja(a,n,0)});n.asyncDep=o}else Eh(n,o,e)}else op(n,e)}function Eh(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Et(e)&&(n.setupState=Pf(e)),op(n,t)}let wh;function op(n,e,t){const i=n.type;if(!n.render){if(!e&&wh&&!i.render){const s=i.template||gu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=kt(kt({isCustomElement:r,delimiters:a},o),c);i.render=wh(s,l)}}n.render=i.render||Rn}{const s=vo(n);Ps();try{pg(n)}finally{Ls(),s()}}}function Wg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return vn(n,"get","$attrs"),e[t]}}))}function Xg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Wg(n)},slots:n.slots,emit:n.emit,expose:e}}function Mu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Pf(Af(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in no)return no[t](n)},has(e,t){return t in e||t in no}}))}function jg(n){return tt(n)&&"__vccOpts"in n}const An=(n,e)=>Im(n,e,rl);function ws(n,e,t){const i=arguments.length;return i===2?Et(e)&&!$e(e)?Da(e)?we(n,null,[e]):we(n,e):we(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Da(t)&&(t=[t]),we(n,e,t))}const qg="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $g="http://www.w3.org/2000/svg",Yg="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Th=ki&&ki.createElement("template"),Kg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ki.createElementNS($g,n):e==="mathml"?ki.createElementNS(Yg,n):ki.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ki.createTextNode(n),createComment:n=>ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Th.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Th.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ci="transition",zr="animation",fo=Symbol("_vtc"),Na=(n,{slots:e})=>ws(ig,Zg(n),e);Na.displayName="Transition";const ap={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Na.props=kt({},Bf,ap);const rs=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ah=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Zg(n){const e={};for(const L in n)L in ap||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=Jg(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:f,onEnter:b,onEnterCancelled:M,onLeave:E,onLeaveCancelled:F,onBeforeAppear:A=f,onAppear:C=b,onAppearCancelled:R=M}=e,S=(L,B,$)=>{os(L,B?u:a),os(L,B?l:o),$&&$()},x=(L,B)=>{L._isLeaving=!1,os(L,d),os(L,p),os(L,h),B&&B()},P=L=>(B,$)=>{const ee=L?C:b,Y=()=>S(B,L,$);rs(ee,[B,Y]),Ch(()=>{os(B,L?c:r),Ri(B,L?u:a),Ah(ee)||Rh(B,i,g,Y)})};return kt(e,{onBeforeEnter(L){rs(f,[L]),Ri(L,r),Ri(L,o)},onBeforeAppear(L){rs(A,[L]),Ri(L,c),Ri(L,l)},onEnter:P(!1),onAppear:P(!0),onLeave(L,B){L._isLeaving=!0;const $=()=>x(L,B);Ri(L,d),t_(),Ri(L,h),Ch(()=>{L._isLeaving&&(os(L,d),Ri(L,p),Ah(E)||Rh(L,i,m,$))}),rs(E,[L,$])},onEnterCancelled(L){S(L,!1),rs(M,[L])},onAppearCancelled(L){S(L,!0),rs(R,[L])},onLeaveCancelled(L){x(L),rs(F,[L])}})}function Jg(n){if(n==null)return null;if(Et(n))return[Sl(n.enter),Sl(n.leave)];{const e=Sl(n);return[e,e]}}function Sl(n){return tm(n)}function Ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[fo]||(n[fo]=new Set)).add(e)}function os(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[fo];t&&(t.delete(e),t.size||(n[fo]=void 0))}function Ch(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qg=0;function Rh(n,e,t,i){const s=n._endId=++Qg,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:c}=e_(n,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{n.removeEventListener(l,h),r()},h=p=>{p.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,h)}function e_(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${Ci}Delay`),r=i(`${Ci}Duration`),o=Ph(s,r),a=i(`${zr}Delay`),c=i(`${zr}Duration`),l=Ph(a,c);let u=null,d=0,h=0;e===Ci?o>0&&(u=Ci,d=o,h=r.length):e===zr?l>0&&(u=zr,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?Ci:zr:null,h=u?u===Ci?r.length:c.length:0);const p=u===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function Ph(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Lh(t)+Lh(n[i])))}function Lh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function t_(){return document.body.offsetHeight}function n_(n,e,t){const i=n[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const i_=Symbol("_vod"),s_=Symbol("");function r_(n,e,t){const i=n.style,s=i.display,r=Dt(t);if(t&&!r){if(e&&!Dt(e))for(const o in e)t[o]==null&&_c(i,o,"");for(const o in t)_c(i,o,t[o])}else if(r){if(e!==t){const o=i[s_];o&&(t+=";"+o),i.cssText=t}}else e&&n.removeAttribute("style");i_ in n&&(i.display=s)}const Ih=/\s*!important$/;function _c(n,e,t){if($e(t))t.forEach(i=>_c(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=o_(n,e);Ih.test(t)?n.setProperty(Rs(i),t.replace(Ih,""),"important"):n[i]=t}}const Dh=["Webkit","Moz","ms"],bl={};function o_(n,e){const t=bl[e];if(t)return t;let i=_r(e);if(i!=="filter"&&i in n)return bl[e]=i;i=cf(i);for(let s=0;s<Dh.length;s++){const r=Dh[s]+i;if(r in n)return bl[e]=r}return e}const Uh="http://www.w3.org/1999/xlink";function a_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Uh,e.slice(6,e.length)):n.setAttributeNS(Uh,e,t);else{const r=am(e);t==null||r&&!hf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function l_(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=hf(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function c_(n,e,t,i){n.addEventListener(e,t,i)}function u_(n,e,t,i){n.removeEventListener(e,t,i)}const Nh=Symbol("_vei");function h_(n,e,t,i,s=null){const r=n[Nh]||(n[Nh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=d_(e);if(i){const l=r[e]=m_(i,s);c_(n,a,l,c)}else o&&(u_(n,a,o,c),r[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function d_(n){let e;if(Fh.test(n)){e={};let i;for(;i=n.match(Fh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Rs(n.slice(2)),e]}let El=0;const f_=Promise.resolve(),p_=()=>El||(f_.then(()=>El=0),El=Date.now());function m_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(g_(i,t.value),e,5,[i])};return t.value=n,t.attached=p_(),t}function g_(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Oh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,__=(n,e,t,i,s,r,o,a,c)=>{const l=s==="svg";e==="class"?n_(n,i,l):e==="style"?r_(n,t,i):$a(e)?iu(e)||h_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v_(n,e,i,l))?l_(n,e,i,r,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),a_(n,e,i,l))};function v_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Oh(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Oh(e)&&Dt(t)?!1:e in n}const x_=["ctrl","shift","alt","meta"],y_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>x_.some(t=>n[`${t}Key`]&&!e.includes(t))},M_=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=y_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},S_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},b_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Rs(s.key);if(e.some(o=>o===r||S_[o]===r))return n(s)})},E_=kt({patchProp:__},Kg);let Bh;function w_(){return Bh||(Bh=Ag(E_))}const T_=(...n)=>{const e=w_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=C_(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,A_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function A_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function C_(n){return Dt(n)?document.querySelector(n):n}const lp=n=>(Ar("data-v-946e509c"),n=n(),Cr(),n),R_={tabindex:"0",class:"activity-card group relative flex md:flex-row flex-col md:gap-0 gap-4 rounded-lg px-4 py-5 transition-all duration-300 hover:!opacity-100 lg:group-hover/card:opacity-40"},P_={class:"date-label text-xs pt-1 md:w-[105px] shrink-0 uppercase tracking-widest"},L_={class:"flex-1 pl-1 pr-2"},I_=["href","target"],D_={class:"card-title text-base font-semibold tracking-tight leading-snug"},U_={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"link-arrow h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5","aria-hidden":"true"},N_=lp(()=>le("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),F_=[N_],O_={class:"role-label text-xs mb-3 tracking-wide font-mono"},B_=["innerHTML"],z_={class:"flex flex-wrap gap-2 mt-4"},k_=lp(()=>le("span",{class:"accent-bar"},null,-1)),H_=ri({__name:"ActivityCard",props:{title:{},description:{},date:{},role:{},last:{type:Boolean},link:{}},setup(n){return(e,t)=>(it(),ht("div",R_,[le("p",P_,Ft(e.date),1),le("div",L_,[le("a",{href:e.link,target:e.link?"_blank":void 0,class:"inline-flex items-center gap-2 group/link mb-1"},[le("h2",D_,Ft(e.title),1),e.link?(it(),ht("svg",U_,F_)):Pn("",!0)],8,I_),le("p",O_,Ft(e.role),1),le("p",{class:"description-text text-sm leading-relaxed font-light",innerHTML:e.description},null,8,B_),le("div",z_,[Wf(e.$slots,"default",{},void 0)])]),k_]))}}),oi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Pi=oi(H_,[["__scopeId","data-v-946e509c"]]),V_={class:"skill-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs font-medium tracking-wide"},G_=ri({__name:"Skill",props:{skill:{}},setup(n){return(e,t)=>(it(),ht("span",V_,[Wf(e.$slots,"default",{},void 0),xu(" "+Ft(e.skill),1)]))}}),xt=oi(G_,[["__scopeId","data-v-f6f97114"]]),W_={},X_={tabindex:"1",class:"lg:mt-32 mb-20 px-10 lg:pr-2 flex flex-col gap-4"},j_=sp('<p class="text-base font-light leading-relaxed text-ash"> I&#39;m a <strong>Software Engineer and Master&#39;s student at the University of Minho</strong>, currently specializing in <strong>Distributed</strong> and <strong>Intelligent</strong> Systems. </p><p class="text-base font-light leading-relaxed text-ash"> With a passion for <strong>technology</strong>, <strong>innovation</strong> and learning, I&#39;m dedicated to creating solutions that drive progress and make an impact. </p><p class="text-base font-light leading-relaxed text-ash"> I am currently writing my thesis on <strong>edge ML inference</strong>, migrating production computer-vision models to <strong>NVIDIA Triton</strong> on Jetson hardware. In parallel, I keep sharpening my distributed systems fundamentals, including storage engines, consistency and replication, guided by Alex Petrov&#39;s <strong>Database Internals</strong>. </p>',3),q_=[j_];function $_(n,e){return it(),ht("article",X_,q_)}const Y_=oi(W_,[["render",$_]]),Su=n=>(Ar("data-v-76557ec8"),n=n(),Cr(),n),K_=["aria-label"],Z_={class:"flex items-start justify-between mb-3"},J_={class:"date-label"},Q_=Su(()=>le("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),e0=[Q_],t0={class:"card-title mb-1"},n0={class:"role-label mb-3"},i0=["innerHTML"],s0={class:"flex flex-wrap gap-1.5 mt-auto"},r0={key:0,class:"skill-badge opacity-50"},o0={key:0,class:"explore-hint"},a0=Su(()=>le("span",{class:"explore-text"},"⬡ Explore Architecture",-1)),l0=[a0],c0=Su(()=>le("span",{class:"accent-bar"},null,-1)),u0=ri({__name:"ProjectCard",props:{project:{}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,s=Bt(null);function r(){var c;if(!t.project.detail){t.project.link&&window.open(t.project.link,"_blank");return}const a=(c=s.value)==null?void 0:c.getBoundingClientRect();a&&i("open",t.project,a)}function o(a){a.stopPropagation(),t.project.link&&window.open(t.project.link,"_blank")}return(a,c)=>(it(),ht("div",{ref_key:"cardRef",ref:s,tabindex:"0",class:ii(["project-card",{"has-detail":!!a.project.detail}]),onClick:r,onKeydown:b_(r,["enter"]),role:"button","aria-label":`Open ${a.project.title}`},[le("div",Z_,[le("span",J_,Ft(a.project.date),1),a.project.link?(it(),ht("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"link-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5","aria-hidden":"true",onClick:o},e0)):Pn("",!0)]),le("h2",t0,Ft(a.project.title),1),le("p",n0,Ft(a.project.role),1),le("p",{class:"description-text line-clamp-3 mb-4",innerHTML:a.project.description},null,8,i0),le("div",s0,[(it(!0),ht(zt,null,xr(a.project.skills.slice(0,5),l=>(it(),ht("span",{key:l,class:"skill-badge"},Ft(l),1))),128)),a.project.skills.length>5?(it(),ht("span",r0,"+"+Ft(a.project.skills.length-5),1)):Pn("",!0)]),a.project.detail?(it(),ht("div",o0,l0)):Pn("",!0),c0],42,K_))}}),h0=oi(u0,[["__scopeId","data-v-76557ec8"]]),cp=n=>(Ar("data-v-db60db47"),n=n(),Cr(),n),d0=["href","target"],f0={class:"flex items-start justify-between gap-2"},p0={class:"flex-1 min-w-0"},m0={class:"cert-date font-mono text-xs tracking-widest uppercase mb-1"},g0={class:"cert-title text-sm font-semibold leading-snug"},_0={class:"cert-issuer font-mono text-xs mt-1"},v0={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"cert-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5","aria-hidden":"true"},x0=cp(()=>le("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"},null,-1)),y0=[x0],M0={class:"flex flex-wrap gap-1.5 mt-auto"},S0=cp(()=>le("span",{class:"cert-accent-bar"},null,-1)),b0=ri({__name:"CertCard",props:{title:{},issuer:{},date:{},link:{},skills:{}},setup(n){return(e,t)=>(it(),ht("a",{href:e.link,target:e.link?"_blank":void 0,class:"cert-card group flex flex-col gap-3 p-5 rounded-lg transition-all duration-300"},[le("div",f0,[le("div",p0,[le("p",m0,Ft(e.date),1),le("h3",g0,Ft(e.title),1),le("p",_0,Ft(e.issuer),1)]),e.link?(it(),ht("svg",v0,y0)):Pn("",!0)]),le("div",M0,[(it(!0),ht(zt,null,xr(e.skills,i=>(it(),ht("span",{key:i,class:"skill-tag"},Ft(i),1))),128))]),S0],8,d0))}}),kr=oi(b0,[["__scopeId","data-v-db60db47"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="166",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E0=0,zh=1,w0=2,up=1,T0=2,gi=3,Ki=0,_n=1,ni=2,Xi=0,fr=1,Fa=2,kh=3,Hh=4,A0=5,gs=100,C0=101,R0=102,P0=103,L0=104,I0=200,D0=201,U0=202,N0=203,vc=204,xc=205,F0=206,O0=207,B0=208,z0=209,k0=210,H0=211,V0=212,G0=213,W0=214,X0=0,j0=1,q0=2,Oa=3,$0=4,Y0=5,K0=6,Z0=7,Eu=0,J0=1,Q0=2,ji=0,ev=1,tv=2,nv=3,iv=4,sv=5,rv=6,ov=7,hp=300,yr=301,Mr=302,yc=303,Mc=304,ol=306,Sc=1e3,xs=1001,bc=1002,gn=1003,av=1004,Do=1005,Hn=1006,wl=1007,ys=1008,Si=1009,dp=1010,fp=1011,po=1012,wu=1013,As=1014,si=1015,xo=1016,Tu=1017,Au=1018,Sr=1020,pp=35902,mp=1021,gp=1022,Wn=1023,_p=1024,vp=1025,pr=1026,br=1027,Cu=1028,Ru=1029,xp=1030,Pu=1031,Lu=1033,Ma=33776,Sa=33777,ba=33778,Ea=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Cc=36196,Rc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,kc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,wa=36492,Xc=36494,jc=36495,yp=36283,qc=36284,$c=36285,Yc=36286,lv=3200,cv=3201,Iu=0,uv=1,Vi="",Jn="srgb",Ji="srgb-linear",Du="display-p3",al="display-p3-linear",Ba="linear",St="srgb",za="rec709",ka="p3",zs=7680,Vh=519,hv=512,dv=513,fv=514,Mp=515,pv=516,mv=517,gv=518,_v=519,Kc=35044,Gh="300 es",xi=2e3,Ha=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const mr=Math.PI/180,mo=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Uu(n,e){return(n%e+e)%e}function vv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function xv(n,e,t){return n!==e?(t-n)/(e-n):0}function ro(n,e,t){return(1-t)*n+t*e}function yv(n,e,t,i){return ro(n,e,1-Math.exp(-t*i))}function Mv(n,e=1){return e-Math.abs(Uu(n,e*2)-e)}function Sv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ev(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wv(n,e){return n+Math.random()*(e-n)}function Tv(n){return n*(.5-Math.random())}function Av(n){n!==void 0&&(Wh=n);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cv(n){return n*mr}function Rv(n){return n*mo}function Pv(n){return(n&n-1)===0&&n!==0}function Lv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Iv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dv(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:mr,RAD2DEG:mo,generateUUID:Mi,clamp:nn,euclideanModulo:Uu,mapLinear:vv,inverseLerp:xv,lerp:ro,damp:yv,pingpong:Mv,smoothstep:Sv,smootherstep:bv,randInt:Ev,randFloat:wv,randFloatSpread:Tv,seededRandom:Av,degToRad:Cv,radToDeg:Rv,isPowerOfTwo:Pv,ceilPowerOfTwo:Lv,floorPowerOfTwo:Iv,setQuaternionFromProperEuler:Dv,normalize:pt,denormalize:Vn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],g=s[0],m=s[3],f=s[6],b=s[1],M=s[4],E=s[7],F=s[2],A=s[5],C=s[8];return r[0]=o*g+a*b+c*F,r[3]=o*m+a*M+c*A,r[6]=o*f+a*E+c*C,r[1]=l*g+u*b+d*F,r[4]=l*m+u*M+d*A,r[7]=l*f+u*E+d*C,r[2]=h*g+p*b+_*F,r[5]=h*m+p*M+_*A,r[8]=h*f+p*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,_=t*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new et;function Sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uv(){const n=go("canvas");return n.style.display="block",n}const Xh={};function Nu(n){n in Xh||(Xh[n]=!0,console.warn(n))}function Nv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const jh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[Ji]:{transfer:Ba,primaries:za,toReference:n=>n,fromReference:n=>n},[Jn]:{transfer:St,primaries:za,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[al]:{transfer:Ba,primaries:ka,toReference:n=>n.applyMatrix3(qh),fromReference:n=>n.applyMatrix3(jh)},[Du]:{transfer:St,primaries:ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qh),fromReference:n=>n.applyMatrix3(jh).convertLinearToSRGB()}},Fv=new Set([Ji,al]),mt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Uo[e].toReference,s=Uo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Uo[n].primaries},getTransfer:function(n){return n===Vi?Ba:Uo[n].transfer}};function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Al(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ks;class Ov{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=go("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bv=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class $t extends Ds{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=xs,s=xs,r=Hn,o=ys,a=Wn,c=Si,l=$t.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Mi(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=hp;$t.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,E=(p+1)/2,F=(f+1)/2,A=(u+h)/4,C=(d+g)/4,R=(_+m)/4;return M>E&&M>F?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):E>F?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=R/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=C/r,s=R/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-g)/b,this.z=(h-u)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kv extends Ds{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends kv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ep extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hv extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==h||l!==p||u!==_){let m=1-a;const f=c*h+l*p+u*_+d*g,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const F=Math.sqrt(M),A=Math.atan2(F,f*b);m=Math.sin(m*A)/F,a=Math.sin(a*A)/F}const E=a*b;if(c=c*m+h*E,l=l*m+p*E,u=u*m+_*E,d=d*m+g*E,m===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=F,l*=F,u*=F,d*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*d+c*p-l*h,e[t+1]=c*_+u*h+l*d-a*p,e[t+2]=l*_+u*p+a*h-c*d,e[t+3]=u*_-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"YZX":this._x=h*u*d+l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d-h*p*_;break;case"XZY":this._x=h*u*d-l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new U,$h=new jt;class Qi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Fo.subVectors(this.max,Hr),Hs.subVectors(e.a,Hr),Vs.subVectors(e.b,Hr),Gs.subVectors(e.c,Hr),Li.subVectors(Vs,Hs),Ii.subVectors(Gs,Vs),as.subVectors(Hs,Gs);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-as.z,as.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,as.z,0,-as.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-as.y,as.x,0];return!Pl(t,Hs,Vs,Gs,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Hs,Vs,Gs,Fo))?!1:(Oo.crossVectors(Li,Ii),t=[Oo.x,Oo.y,Oo.z],Pl(t,Hs,Vs,Gs,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,No=new Qi,Hs=new U,Vs=new U,Gs=new U,Li=new U,Ii=new U,as=new U,Hr=new U,Fo=new U,Oo=new U,ls=new U;function Pl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vv=new Qi,Vr=new U,Ll=new U;class es{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Ll)),this.expandByPoint(Vr.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new U,Il=new U,Bo=new U,Di=new U,Dl=new U,zo=new U,Ul=new U;class yo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Il.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bo),a=Di.dot(this.direction),c=-Di.dot(Bo),l=Di.lengthSq(),u=Math.abs(1-o*o);let d,h,p,_;if(u>0)if(d=o*c-a,h=o*a-c,_=r*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Il).addScaledVector(Bo,h),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),zo.subVectors(i,e),Ul.crossVectors(Dl,zo);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const c=a*this.direction.dot(zo.crossVectors(Di,zo));if(c<0)return null;const l=a*this.direction.dot(Dl.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(Ul);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,s,r,o,a,c,l,u,d,h,p,_,g,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,p,_,g,m)}set(e,t,i,s,r,o,a,c,l,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=_*l-p,t[8]=h*l+g,t[1]=c*d,t[5]=g*l+h,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+g,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gv,e,Wv)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ui.crossVectors(i,yn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ui.crossVectors(i,yn)),Ui.normalize(),ko.crossVectors(yn,Ui),s[0]=Ui.x,s[4]=ko.x,s[8]=yn.x,s[1]=Ui.y,s[5]=ko.y,s[9]=yn.y,s[2]=Ui.z,s[6]=ko.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],b=i[3],M=i[7],E=i[11],F=i[15],A=s[0],C=s[4],R=s[8],S=s[12],x=s[1],P=s[5],L=s[9],B=s[13],$=s[2],ee=s[6],Y=s[10],Q=s[14],K=s[3],ve=s[7],xe=s[11],_e=s[15];return r[0]=o*A+a*x+c*$+l*K,r[4]=o*C+a*P+c*ee+l*ve,r[8]=o*R+a*L+c*Y+l*xe,r[12]=o*S+a*B+c*Q+l*_e,r[1]=u*A+d*x+h*$+p*K,r[5]=u*C+d*P+h*ee+p*ve,r[9]=u*R+d*L+h*Y+p*xe,r[13]=u*S+d*B+h*Q+p*_e,r[2]=_*A+g*x+m*$+f*K,r[6]=_*C+g*P+m*ee+f*ve,r[10]=_*R+g*L+m*Y+f*xe,r[14]=_*S+g*B+m*Q+f*_e,r[3]=b*A+M*x+E*$+F*K,r[7]=b*C+M*P+E*ee+F*ve,r[11]=b*R+M*L+E*Y+F*xe,r[15]=b*S+M*B+E*Q+F*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*d-s*l*d-r*a*h+i*l*h+s*a*p-i*c*p)+g*(+t*c*p-t*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+t*l*d-t*a*p-r*o*d+i*o*p+r*a*u-i*l*u)+f*(-s*a*u-t*c*d+t*a*h+s*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],b=d*m*l-g*h*l+g*c*p-a*m*p-d*c*f+a*h*f,M=_*h*l-u*m*l-_*c*p+o*m*p+u*c*f-o*h*f,E=u*g*l-_*d*l+_*a*p-o*g*p-u*a*f+o*d*f,F=_*d*c-u*g*c-_*a*h+o*g*h+u*a*m-o*d*m,A=t*b+i*M+s*E+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=b*C,e[1]=(g*h*r-d*m*r-g*s*p+i*m*p+d*s*f-i*h*f)*C,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*f+i*c*f)*C,e[3]=(d*c*r-a*h*r-d*s*l+i*h*l+a*s*p-i*c*p)*C,e[4]=M*C,e[5]=(u*m*r-_*h*r+_*s*p-t*m*p-u*s*f+t*h*f)*C,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*f-t*c*f)*C,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*p+t*c*p)*C,e[8]=E*C,e[9]=(_*d*r-u*g*r-_*i*p+t*g*p+u*i*f-t*d*f)*C,e[10]=(o*g*r-_*a*r+_*i*l-t*g*l-o*i*f+t*a*f)*C,e[11]=(u*a*r-o*d*r-u*i*l+t*d*l+o*i*p-t*a*p)*C,e[12]=F*C,e[13]=(u*g*s-_*d*s+_*i*h-t*g*h-u*i*m+t*d*m)*C,e[14]=(_*a*s-o*g*s-_*i*c+t*g*c+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,_=r*d,g=o*u,m=o*d,f=a*d,b=c*l,M=c*u,E=c*d,F=i.x,A=i.y,C=i.z;return s[0]=(1-(g+f))*F,s[1]=(p+E)*F,s[2]=(_-M)*F,s[3]=0,s[4]=(p-E)*A,s[5]=(1-(h+f))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(_+M)*C,s[9]=(m-b)*C,s[10]=(1-(h+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const l=1/r,u=1/o,d=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xi){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let p,_;if(a===xi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ha)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xi){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*l,p=(i+s)*u;let _,g;if(a===xi)_=(o+r)*d,g=-2*d;else if(a===Ha)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new U,Bn=new gt,Gv=new U(0,0,0),Wv=new U(1,1,1),Ui=new U,ko=new U,yn=new U,Yh=new gt,Kh=new jt;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xv=0;const Zh=new U,Xs=new jt,di=new gt,Ho=new U,Gr=new U,jv=new U,qv=new jt,Jh=new U(1,0,0),Qh=new U(0,1,0),ed=new U(0,0,1),td={type:"added"},$v={type:"removed"},js={type:"childadded",child:null},Nl={type:"childremoved",child:null};class Ct extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new U,t=new Xn,i=new jt,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new et}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Gr,Ho,this.up):di.lookAt(Ho,Gr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(di),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($v),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new U,fi=new U,Fl=new U,pi=new U,qs=new U,$s=new U,nd=new U,Ol=new U,Bl=new U,zl=new U;class Cn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),fi.subVectors(i,t),Fl.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(fi),c=zn.dot(Fl),l=fi.dot(fi),u=fi.dot(Fl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),fi.subVectors(e,t),zn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;qs.subVectors(s,i),$s.subVectors(r,i),Ol.subVectors(e,i);const c=qs.dot(Ol),l=$s.dot(Ol);if(c<=0&&l<=0)return t.copy(i);Bl.subVectors(e,s);const u=qs.dot(Bl),d=$s.dot(Bl);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(qs,o);zl.subVectors(e,r);const p=qs.dot(zl),_=$s.dot(zl);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector($s,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return nd.subVectors(r,s),a=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(nd,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(qs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Uu(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=kl(o,r,e+1/3),this.g=kl(o,r,e),this.b=kl(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Al(e.r),this.g=Al(e.g),this.b=Al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return mt.fromWorkingColorSpace(tn.copy(this),e),Math.round(nn(tn.r*255,0,255))*65536+Math.round(nn(tn.g*255,0,255))*256+Math.round(nn(tn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Jn){mt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Vo);const i=ro(Ni.h,Vo.h,t),s=ro(Ni.s,Vo.s,t),r=ro(Ni.l,Vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ze;Ze.NAMES=wp;let Yv=0;class jn extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=fr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ll extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new U,Go=new De;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class Tp extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ap extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kv=0;const wn=new gt,Hl=new Ct,Ys=new U,Mn=new Qi,Wr=new Qi,Wt=new U;class Ut extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Ap:Tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Wr.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Wr.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Wr.min),Mn.expandByPoint(Wr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Wt.add(Ys)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new U,c[R]=new U;const l=new U,u=new U,d=new U,h=new De,p=new De,_=new De,g=new U,m=new U;function f(R,S,x){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,x),u.sub(l),d.sub(l),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[R].add(g),a[S].add(g),a[x].add(g),c[R].add(m),c[S].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,S=b.length;R<S;++R){const x=b[R],P=x.start,L=x.count;for(let B=P,$=P+L;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new U,E=new U,F=new U,A=new U;function C(R){F.fromBufferAttribute(s,R),A.copy(F);const S=a[R];M.copy(S),M.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(A,S);const P=E.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,S=b.length;R<S;++R){const x=b[R],P=x.start,L=x.count;for(let B=P,$=P+L;B<$;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)h[_++]=l[p++]}return new qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new gt,cs=new yo,Wo=new es,sd=new U,Ks=new U,Zs=new U,Js=new U,Vl=new U,Xo=new U,jo=new De,qo=new De,$o=new De,rd=new U,od=new U,ad=new U,Yo=new U,Ko=new U;class Ot extends Ct{constructor(e=new Ut,t=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Vl.fromBufferAttribute(d,e),o?Xo.addScaledVector(Vl,u):Xo.addScaledVector(Vl.sub(t),u))}t.add(Xo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Wo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Wo,sd)===null||cs.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),cs.copy(e.ray).applyMatrix4(id),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,F=M;E<F;E+=3){const A=a.getX(E),C=a.getX(E+1),R=a.getX(E+2);s=Zo(this,f,e,i,l,u,d,A,C,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=Zo(this,o,e,i,l,u,d,b,M,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,F=M;E<F;E+=3){const A=E,C=E+1,R=E+2;s=Zo(this,f,e,i,l,u,d,A,C,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=m,M=m+1,E=m+2;s=Zo(this,o,e,i,l,u,d,b,M,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Zv(n,e,t,i,s,r,o,a){let c;if(e.side===_n?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ki,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:n}}function Zo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ks),n.getVertexPosition(c,Zs),n.getVertexPosition(l,Js);const u=Zv(n,e,t,i,Ks,Zs,Js,Yo);if(u){s&&(jo.fromBufferAttribute(s,a),qo.fromBufferAttribute(s,c),$o.fromBufferAttribute(s,l),u.uv=Cn.getInterpolation(Yo,Ks,Zs,Js,jo,qo,$o,new De)),r&&(jo.fromBufferAttribute(r,a),qo.fromBufferAttribute(r,c),$o.fromBufferAttribute(r,l),u.uv1=Cn.getInterpolation(Yo,Ks,Zs,Js,jo,qo,$o,new De)),o&&(rd.fromBufferAttribute(o,a),od.fromBufferAttribute(o,c),ad.fromBufferAttribute(o,l),u.normal=Cn.getInterpolation(Yo,Ks,Zs,Js,rd,od,ad,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Cn.getNormal(Ks,Zs,Js,d.normal),u.face=d}return u}class Pr extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function _(g,m,f,b,M,E,F,A,C,R,S){const x=E/C,P=F/R,L=E/2,B=F/2,$=A/2,ee=C+1,Y=R+1;let Q=0,K=0;const ve=new U;for(let xe=0;xe<Y;xe++){const _e=xe*P-B;for(let ke=0;ke<ee;ke++){const nt=ke*x-L;ve[g]=nt*b,ve[m]=_e*M,ve[f]=$,l.push(ve.x,ve.y,ve.z),ve[g]=0,ve[m]=0,ve[f]=A>0?1:-1,u.push(ve.x,ve.y,ve.z),d.push(ke/C),d.push(1-xe/R),Q+=1}}for(let xe=0;xe<R;xe++)for(let _e=0;_e<C;_e++){const ke=h+_e+ee*xe,nt=h+_e+ee*(xe+1),re=h+(_e+1)+ee*(xe+1),ue=h+(_e+1)+ee*xe;c.push(ke,nt,ue),c.push(nt,re,ue),K+=6}a.addGroup(p,K,S),p+=K,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const s in i)e[s]=i[s]}return e}function Jv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Qv={clone:Er,merge:cn};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rp extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new U,ld=new De,cd=new De;class un extends Rp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class nx extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new un(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new un(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new un(Qs,er,e,t);a.layers=this.layers,this.add(a);const c=new un(Qs,er,e,t);c.layers=this.layers,this.add(c);const l=new un(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Pp extends $t{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ix extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pr(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Xi});r.uniforms.tEquirect.value=t;const o=new Ot(s,r),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Hn),new nx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Gl=new U,sx=new U,rx=new et;class Hi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Gl.subVectors(i,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rx.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new es,Jo=new U;class Ou{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],b=s[13],M=s[14],E=s[15];if(i[0].setComponents(c-r,h-l,m-p,E-f).normalize(),i[1].setComponents(c+r,h+l,m+p,E+f).normalize(),i[2].setComponents(c+o,h+u,m+_,E+b).normalize(),i[3].setComponents(c-o,h-u,m-_,E-b).normalize(),i[4].setComponents(c-a,h-d,m-g,E-M).normalize(),t===xi)i[5].setComponents(c+a,h+d,m+g,E+M).normalize();else if(t===Ha)i[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Jo.x=s.normal.x>0?e.max.x:e.min.x,Jo.y=s.normal.y>0?e.max.y:e.min.y,Jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ox(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let p=0,_=h.length;p<_;p++){const g=h[p];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class wr extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const b=f*h-o;for(let M=0;M<l;M++){const E=M*d-r;_.push(E,-b,0),g.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const M=b+l*f,E=b+l*(f+1),F=b+1+l*(f+1),A=b+1+l*f;p.push(M,E,A),p.push(E,F,A)}this.setIndex(p),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`
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
}`,zx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
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
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
}`,oy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ry=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,dM=`#include <common>
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
}`,fM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:ax,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:ux,alphatest_fragment:hx,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:_x,beginnormal_vertex:vx,bsdfs:xx,iridescence_fragment:yx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:bx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:wx,color_fragment:Tx,color_pars_fragment:Ax,color_pars_vertex:Cx,color_vertex:Rx,common:Px,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:Nx,emissivemap_pars_fragment:Fx,colorspace_fragment:Ox,colorspace_pars_fragment:Bx,envmap_fragment:zx,envmap_common_pars_fragment:kx,envmap_pars_fragment:Hx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Qx,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:jx,fog_pars_fragment:qx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Yx,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Zx,lights_pars_begin:Jx,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:vy,morphinstance_vertex:xy,morphcolor_vertex:yy,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:by,normal_fragment_begin:Ey,normal_fragment_maps:wy,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Cy,normalmap_pars_fragment:Ry,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Dy,opaque_fragment:Uy,packing:Ny,premultiplied_alpha_fragment:Fy,project_vertex:Oy,dithering_fragment:By,dithering_pars_fragment:zy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:jy,skinning_pars_vertex:qy,skinning_vertex:$y,skinnormal_vertex:Yy,specularmap_fragment:Ky,specularmap_pars_fragment:Zy,tonemapping_fragment:Jy,tonemapping_pars_fragment:Qy,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:dM,depth_frag:fM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:gM,equirect_frag:_M,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:MM,meshlambert_vert:SM,meshlambert_frag:bM,meshmatcap_vert:EM,meshmatcap_frag:wM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:CM,meshphong_frag:RM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:IM,meshtoon_frag:DM,points_vert:UM,points_frag:NM,shadow_vert:FM,shadow_frag:OM,sprite_vert:BM,sprite_frag:zM},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ei={basic:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:cn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:cn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:cn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:cn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:cn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:cn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:cn([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:cn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ei.physical={uniforms:cn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Qo={r:0,b:0,g:0},hs=new Xn,kM=new gt;function HM(n,e,t,i,s,r,o){const a=new Ze(0);let c=r===!0?0:1,l,u,d=null,h=0,p=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const E=_(b);E===null?f(a,c):E&&E.isColor&&(f(E,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===ol)?(u===void 0&&(u=new Ot(new Pr(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Er(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(M.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(hs)),u.material.toneMapped=mt.getTransfer(E.colorSpace)!==St,(d!==E||h!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ot(new wr(2,2),new Zi({name:"BackgroundMaterial",uniforms:Er(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=mt.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(Qo,Cp(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:g,addToRenderList:m}}function VM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(x,P,L,B,$){let ee=!1;const Y=d(B,L,P);r!==Y&&(r=Y,l(r.object)),ee=p(x,B,L,$),ee&&_(x,B,L,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(x,P,L,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,P,L){const B=L.wireframe===!0;let $=i[x.id];$===void 0&&($={},i[x.id]=$);let ee=$[P.id];ee===void 0&&(ee={},$[P.id]=ee);let Y=ee[B];return Y===void 0&&(Y=h(c()),ee[B]=Y),Y}function h(x){const P=[],L=[],B=[];for(let $=0;$<t;$++)P[$]=0,L[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,P,L,B){const $=r.attributes,ee=P.attributes;let Y=0;const Q=L.getAttributes();for(const K in Q)if(Q[K].location>=0){const xe=$[K];let _e=ee[K];if(_e===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),xe===void 0||xe.attribute!==_e||_e&&xe.data!==_e.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function _(x,P,L,B){const $={},ee=P.attributes;let Y=0;const Q=L.getAttributes();for(const K in Q)if(Q[K].location>=0){let xe=ee[K];xe===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor));const _e={};_e.attribute=xe,xe&&xe.data&&(_e.data=xe.data),$[K]=_e,Y++}r.attributes=$,r.attributesNum=Y,r.index=B}function g(){const x=r.newAttributes;for(let P=0,L=x.length;P<L;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const L=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;L[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),$[x]!==P&&(n.vertexAttribDivisor(x,P),$[x]=P)}function b(){const x=r.newAttributes,P=r.enabledAttributes;for(let L=0,B=P.length;L<B;L++)P[L]!==x[L]&&(n.disableVertexAttribArray(L),P[L]=0)}function M(x,P,L,B,$,ee,Y){Y===!0?n.vertexAttribIPointer(x,P,L,$,ee):n.vertexAttribPointer(x,P,L,B,$,ee)}function E(x,P,L,B){g();const $=B.attributes,ee=L.getAttributes(),Y=P.defaultAttributeValues;for(const Q in ee){const K=ee[Q];if(K.location>=0){let ve=$[Q];if(ve===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),ve!==void 0){const xe=ve.normalized,_e=ve.itemSize,ke=e.get(ve);if(ke===void 0)continue;const nt=ke.buffer,re=ke.type,ue=ke.bytesPerElement,ye=re===n.INT||re===n.UNSIGNED_INT||ve.gpuType===wu;if(ve.isInterleavedBufferAttribute){const Se=ve.data,Fe=Se.stride,Ve=ve.offset;if(Se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<K.locationSize;Ge++)f(K.location+Ge,Se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<K.locationSize;Ge++)m(K.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ge=0;Ge<K.locationSize;Ge++)M(K.location+Ge,_e/K.locationSize,re,xe,Fe*ue,(Ve+_e/K.locationSize*Ge)*ue,ye)}else{if(ve.isInstancedBufferAttribute){for(let Se=0;Se<K.locationSize;Se++)f(K.location+Se,ve.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Se=0;Se<K.locationSize;Se++)m(K.location+Se);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Se=0;Se<K.locationSize;Se++)M(K.location+Se,_e/K.locationSize,re,xe,_e*ue,_e/K.locationSize*Se*ue,ye)}}else if(Y!==void 0){const xe=Y[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(K.location,xe);break;case 3:n.vertexAttrib3fv(K.location,xe);break;case 4:n.vertexAttrib4fv(K.location,xe);break;default:n.vertexAttrib1fv(K.location,xe)}}}}b()}function F(){R();for(const x in i){const P=i[x];for(const L in P){const B=P[L];for(const $ in B)u(B[$].object),delete B[$];delete P[L]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const L in P){const B=P[L];for(const $ in B)u(B[$].object),delete B[$];delete P[L]}delete i[x.id]}function C(x){for(const P in i){const L=i[P];if(L[x.id]===void 0)continue;const B=L[x.id];for(const $ in B)u(B[$].object),delete B[$];delete L[x.id]}}function R(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function GM(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];for(let g=0;g<h.length;g++)t.update(_,i,h[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function WM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==si&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:E,maxSamples:F}}function XM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Hi,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,M=b*4;let E=f.clippingState||null;c.value=E,E=u(_,h,M,p);for(let F=0;F!==M;++F)E[F]=t[F];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,E=p;M!==g;++M,E+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function jM(n){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=yr:a===Mc&&(o.mapping=Mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yc||a===Mc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ix(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ip extends Rp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,ud=[.125,.215,.35,.446,.526,.582],_s=20,Wl=new Ip,hd=new Ze;let Xl=null,jl=0,ql=0,$l=!1;const fs=(1+Math.sqrt(5))/2,tr=1/fs,dd=[new U(-fs,tr,0),new U(fs,tr,0),new U(-tr,0,fs),new U(tr,0,fs),new U(0,fs,-tr),new U(0,fs,tr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Xl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,jl,ql),this._renderer.xr.enabled=$l,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:xo,format:Wn,colorSpace:Ji,depthBuffer:!1},s=pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qM(r)),this._blurMaterial=$M(r,e,t)}return s}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,i,s){const a=new un(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hd),u.toneMapping=ji,u.autoClear=!1;const p=new ll({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new Ot(new Pr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(hd),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;ea(s,b*M,f>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===yr||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ea(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Wl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dd[(s-r-1)%dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ot(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_s-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);const f=[];let b=0;for(let C=0;C<_s;++C){const R=C/g,S=Math.exp(-R*R/2);f.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-i;const E=this._sizeLods[s],F=3*E*(s>M-lr?s-M+lr:0),A=4*(this._cubeSize-E);ea(t,F,A,3*E,2*E),c.setRenderTarget(t),c.render(d,Wl)}}function qM(n){const e=[],t=[],i=[];let s=n;const r=n-lr+1+ud.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-lr?c=ud[o-n+lr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*p),M=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,R=A>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];b.set(S,g*_*A),M.set(h,m*_*A);const x=[A,A,A,A,A,A];E.set(x,f*_*A)}const F=new Ut;F.setAttribute("position",new qt(b,g)),F.setAttribute("uv",new qt(M,m)),F.setAttribute("faceIndex",new qt(E,f)),e.push(F),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pd(n,e,t){const i=new Cs(n,e,t);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $M(n,e,t){const i=new Float32Array(_s),s=new U(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function md(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gd(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Bu(){return`

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
	`}function YM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===yc||c===Mc,u=c===yr||c===Mr;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new fd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new fd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function KM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Nu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ZM(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let M=0,E=b.length;M<E;M+=3){const F=b[M+0],A=b[M+1],C=b[M+2];h.push(F,A,A,C,C,F)}}else if(_!==void 0){const b=_.array;g=_.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const F=M+0,A=M+1,C=M+2;h.push(F,A,A,C,C,F)}}else return;const m=new(Sp(h)?Ap:Tp)(h,1);m.version=g;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function JM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function l(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function d(h,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b];for(let b=0;b<g.length;b++)t.update(f,i,g[b])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function QM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function eS(n,e,t){const i=new WeakMap,s=new bt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let F=a.attributes.position.count*E,A=1;F>e.maxTextureSize&&(A=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const C=new Float32Array(F*A*4*d),R=new Ep(C,F,A,d);R.type=si,R.needsUpdate=!0;const S=E*4;for(let P=0;P<d;P++){const L=f[P],B=b[P],$=M[P],ee=F*A*4*P;for(let Y=0;Y<L.count;Y++){const Q=Y*S;_===!0&&(s.fromBufferAttribute(L,Y),C[ee+Q+0]=s.x,C[ee+Q+1]=s.y,C[ee+Q+2]=s.z,C[ee+Q+3]=0),g===!0&&(s.fromBufferAttribute(B,Y),C[ee+Q+4]=s.x,C[ee+Q+5]=s.y,C[ee+Q+6]=s.z,C[ee+Q+7]=0),m===!0&&(s.fromBufferAttribute($,Y),C[ee+Q+8]=s.x,C[ee+Q+9]=s.y,C[ee+Q+10]=s.z,C[ee+Q+11]=$.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new De(F,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function tS(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Dp extends $t{constructor(e,t,i,s,r,o,a,c,l,u=pr){if(u!==pr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===pr&&(i=As),i===void 0&&u===br&&(i=Sr),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Up=new $t,_d=new Dp(1,1),Np=new Ep,Fp=new Hv,Op=new Pp,vd=[],xd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cl(n,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function oS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),Vt(t,i)}}function aS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Md.set(i),n.uniformMatrix3fv(this.addr,!1,Md),Vt(t,i)}}function lS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;yd.set(i),n.uniformMatrix4fv(this.addr,!1,yd),Vt(t,i)}}function cS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function fS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function _S(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_d.compareFunction=Mp,r=_d):r=Up,t.setTexture2D(e||r,s)}function vS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fp,s)}function xS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Op,s)}function yS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Np,s)}function MS(n){switch(n){case 5126:return nS;case 35664:return iS;case 35665:return sS;case 35666:return rS;case 35674:return oS;case 35675:return aS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return uS;case 35668:case 35672:return hS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return yS}}function SS(n,e){n.uniform1fv(this.addr,e)}function bS(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function ES(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function wS(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function TS(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AS(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CS(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RS(n,e){n.uniform1iv(this.addr,e)}function PS(n,e){n.uniform2iv(this.addr,e)}function LS(n,e){n.uniform3iv(this.addr,e)}function IS(n,e){n.uniform4iv(this.addr,e)}function DS(n,e){n.uniform1uiv(this.addr,e)}function US(n,e){n.uniform2uiv(this.addr,e)}function NS(n,e){n.uniform3uiv(this.addr,e)}function FS(n,e){n.uniform4uiv(this.addr,e)}function OS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Up,r[o])}function BS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function zS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Op,r[o])}function kS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Np,r[o])}function HS(n){switch(n){case 5126:return SS;case 35664:return bS;case 35665:return ES;case 35666:return wS;case 35674:return TS;case 35675:return AS;case 35676:return CS;case 5124:case 35670:return RS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return US;case 36295:return NS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return kS}}class VS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MS(t.type)}}class GS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HS(t.type)}}class WS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function bd(n,e){n.seq.push(e),n.map[e.id]=e}function XS(n,e,t){const i=n.name,s=i.length;for(Yl.lastIndex=0;;){const r=Yl.exec(i),o=Yl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bd(t,l===void 0?new VS(a,n,e):new GS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new WS(a),bd(t,d)),t=d}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);XS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jS=37297;let qS=0;function $S(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function YS(n){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n);let i;switch(e===t?i="":e===ka&&t===za?i="LinearDisplayP3ToLinearSRGB":e===za&&t===ka&&(i="LinearSRGBToLinearDisplayP3"),n){case Ji:case al:return[i,"LinearTransferOETF"];case Jn:case Du:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$S(n.getShaderSource(e),o)}else return s}function KS(n,e){const t=YS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ZS(n,e){let t;switch(e){case ev:t="Linear";break;case tv:t="Reinhard";break;case nv:t="OptimizedCineon";break;case iv:t="ACESFilmic";break;case rv:t="AgX";break;case ov:t="Neutral";break;case sv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function QS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function Td(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(tb,ib)}const nb=new Map;function ib(n,e){let t=Qe[e];if(t===void 0){const i=nb.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(n){return n.replace(sb,rb)}function rb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ob(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function ab(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function cb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function ub(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ob(t),l=ab(t),u=lb(t),d=cb(t),h=ub(t),p=JS(t),_=QS(r),g=s.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ji?ZS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,KS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Jc(o),o=Td(o,t),o=Ad(o,t),a=Jc(a),a=Td(a,t),a=Ad(a,t),o=Cd(o),a=Cd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=b+m+o,E=b+f+a,F=Ed(s,s.VERTEX_SHADER,M),A=Ed(s,s.FRAGMENT_SHADER,E);s.attachShader(g,F),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(F).trim(),$=s.getShaderInfoLog(A).trim();let ee=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,F,A);else{const Q=wd(s,F,"vertex"),K=wd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Q+`
`+K)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||$==="")&&(Y=!1);Y&&(P.diagnostics={runnable:ee,programLog:L,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(F),s.deleteShader(A),R=new Ta(s,g),S=eb(s,g)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,jS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=A,this}let db=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pb(e),t.set(e,i)),i}}class pb{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function mb(n,e,t,i,s,r,o){const a=new Fu,c=new fb,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,L,B){const $=L.fog,ee=B.geometry,Y=S.isMeshStandardMaterial?L.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),K=Q&&Q.mapping===ol?Q.image.height:null,ve=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const xe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_e=xe!==void 0?xe.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let nt,re,ue,ye;if(ve){const Je=ei[ve];nt=Je.vertexShader,re=Je.fragmentShader}else nt=S.vertexShader,re=S.fragmentShader,c.update(S),ue=c.getVertexShaderID(S),ye=c.getFragmentShaderID(S);const Se=n.getRenderTarget(),Fe=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,Ge=!!S.map,ut=!!S.matcap,N=!!Q,I=!!S.aoMap,O=!!S.lightMap,X=!!S.bumpMap,W=!!S.normalMap,ie=!!S.displacementMap,ne=!!S.emissiveMap,se=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,D=S.clearcoat>0,V=S.dispersion>0,Z=S.iridescence>0,z=S.sheen>0,ce=S.transmission>0,oe=v&&!!S.anisotropyMap,he=D&&!!S.clearcoatMap,Ae=D&&!!S.clearcoatNormalMap,ae=D&&!!S.clearcoatRoughnessMap,ge=Z&&!!S.iridescenceMap,We=Z&&!!S.iridescenceThicknessMap,Be=z&&!!S.sheenColorMap,be=z&&!!S.sheenRoughnessMap,He=!!S.specularMap,Ce=!!S.specularColorMap,Ye=!!S.specularIntensityMap,y=ce&&!!S.transmissionMap,G=ce&&!!S.thicknessMap,q=!!S.gradientMap,te=!!S.alphaMap,fe=S.alphaTest>0,Pe=!!S.alphaHash,qe=!!S.extensions;let wt=ji;S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(wt=n.toneMapping);const Rt={shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:re,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ji,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:ut,envMap:N,envMapMode:N&&Q.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:O,bumpMap:X,normalMap:W,displacementMap:h&&ie,emissiveMap:ne,normalMapObjectSpace:W&&S.normalMapType===uv,normalMapTangentSpace:W&&S.normalMapType===Iu,metalnessMap:se,roughnessMap:w,anisotropy:v,anisotropyMap:oe,clearcoat:D,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ae,dispersion:V,iridescence:Z,iridescenceMap:ge,iridescenceThicknessMap:We,sheen:z,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:He,specularColorMap:Ce,specularIntensityMap:Ye,transmission:ce,transmissionMap:y,thicknessMap:G,gradientMap:q,opaque:S.transparent===!1&&S.blending===fr&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:Pe,combine:S.combine,mapUv:Ge&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:O&&g(S.lightMap.channel),bumpMapUv:X&&g(S.bumpMap.channel),normalMapUv:W&&g(S.normalMap.channel),displacementMapUv:ie&&g(S.displacementMap.channel),emissiveMapUv:ne&&g(S.emissiveMap.channel),metalnessMapUv:se&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:he&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(S.sheenRoughnessMap.channel),specularMapUv:He&&g(S.specularMap.channel),specularColorMapUv:Ce&&g(S.specularColorMap.channel),specularIntensityMapUv:Ye&&g(S.specularIntensityMap.channel),transmissionMapUv:y&&g(S.transmissionMap.channel),thicknessMapUv:G&&g(S.thicknessMap.channel),alphaMapUv:te&&g(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(W||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(Ge||te),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(x,S),M(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),S.push(a.mask)}function E(S){const x=_[S.type];let P;if(x){const L=ei[x];P=Qv.clone(L.uniforms)}else P=S.uniforms;return P}function F(S,x){let P;for(let L=0,B=u.length;L<B;L++){const $=u[L];if($.cacheKey===x){P=$,++P.usedTimes;break}}return P===void 0&&(P=new hb(n,x,S,r),u.push(P)),P}function A(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:F,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:R}}function gb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function _b(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ld(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,p,_,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||_b),i.length>1&&i.sort(h||Pd),s.length>1&&s.sort(h||Pd)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function vb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ld,n.set(i,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ze};break;case"SpotLight":t={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function yb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mb=0;function Sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bb(n){const e=new xb,t=yb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new gt,o=new gt;function a(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,b=0,M=0,E=0,F=0,A=0,C=0;l.sort(Sb);for(let S=0,x=l.length;S<x;S++){const P=l[S],L=P.color,B=P.intensity,$=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*B,d+=L.g*B,h+=L.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],B);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,K=t.get(P);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(L).multiplyScalar(B),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[g]=Y;const Q=P.shadow;if(P.map&&(i.spotLightMap[F]=P.map,F++,Q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[g]=Q.matrix,P.castShadow){const K=t.get(P);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=ee,E++}g++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(L).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const Q=P.shadow,K=t.get(P);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=P.shadow.matrix,M++}i.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==F||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=F,R.numLightProbes=C,i.version=Mb++)}function c(l,u){let d=0,h=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const M=l[f];if(M.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function Id(n){const e=new bb(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Eb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Id(n),e.set(s,[a])):r>=o.length?(a=new Id(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class wb extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`;function Rb(n,e,t){let i=new Ou;const s=new De,r=new De,o=new bt,a=new wb({depthPacking:cv}),c=new Tb,l={},u=t.maxTextureSize,d={[Ki]:_n,[_n]:Ki,[ni]:ni},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Ab,fragmentShader:Cb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let f=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Xi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=f!==gi&&this.type===gi,$=f===gi&&this.type!==gi;for(let ee=0,Y=A.length;ee<Y;ee++){const Q=A[ee],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ve=K.getFrameExtents();if(s.multiply(ve),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,K.mapSize.y=r.y)),K.map===null||B===!0||$===!0){const _e=this.type!==gi?{minFilter:gn,magFilter:gn}:{};K.map!==null&&K.map.dispose(),K.map=new Cs(s.x,s.y,_e),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const xe=K.getViewportCount();for(let _e=0;_e<xe;_e++){const ke=K.getViewport(_e);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),L.viewport(o),K.updateMatrices(Q,_e),i=K.getFrustum(),E(C,R,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===gi&&b(K,R),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,P)};function b(A,C){const R=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cs(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,R,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,R,p,g,null)}function M(A,C,R,S){let x=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const L=x.uuid,B=C.uuid;let $=l[L];$===void 0&&($={},l[L]=$);let ee=$[B];ee===void 0&&(ee=x.clone(),$[B]=ee,C.addEventListener("dispose",F)),x=ee}if(x.visible=C.visible,x.wireframe=C.wireframe,S===gi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=R}return x}function E(A,C,R,S,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=e.update(A),$=A.material;if(Array.isArray($)){const ee=B.groups;for(let Y=0,Q=ee.length;Y<Q;Y++){const K=ee[Y],ve=$[K.materialIndex];if(ve&&ve.visible){const xe=M(A,ve,S,x);A.onBeforeShadow(n,A,C,R,B,xe,K),n.renderBufferDirect(R,null,B,xe,A,K),A.onAfterShadow(n,A,C,R,B,xe,K)}}}else if($.visible){const ee=M(A,$,S,x);A.onBeforeShadow(n,A,C,R,B,ee,null),n.renderBufferDirect(R,null,B,ee,A,null),A.onAfterShadow(n,A,C,R,B,ee,null)}}const L=A.children;for(let B=0,$=L.length;B<$;B++)E(L[B],C,R,S,x)}function F(A){A.target.removeEventListener("dispose",F);for(const R in l){const S=l[R],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function Pb(n){function e(){let y=!1;const G=new bt;let q=null;const te=new bt(0,0,0,0);return{setMask:function(fe){q!==fe&&!y&&(n.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){y=fe},setClear:function(fe,Pe,qe,wt,Rt){Rt===!0&&(fe*=wt,Pe*=wt,qe*=wt),G.set(fe,Pe,qe,wt),te.equals(G)===!1&&(n.clearColor(fe,Pe,qe,wt),te.copy(G))},reset:function(){y=!1,q=null,te.set(-1,0,0,0)}}}function t(){let y=!1,G=null,q=null,te=null;return{setTest:function(fe){fe?ye(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(fe){G!==fe&&!y&&(n.depthMask(fe),G=fe)},setFunc:function(fe){if(q!==fe){switch(fe){case X0:n.depthFunc(n.NEVER);break;case j0:n.depthFunc(n.ALWAYS);break;case q0:n.depthFunc(n.LESS);break;case Oa:n.depthFunc(n.LEQUAL);break;case $0:n.depthFunc(n.EQUAL);break;case Y0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case Z0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=fe}},setLocked:function(fe){y=fe},setClear:function(fe){te!==fe&&(n.clearDepth(fe),te=fe)},reset:function(){y=!1,G=null,q=null,te=null}}}function i(){let y=!1,G=null,q=null,te=null,fe=null,Pe=null,qe=null,wt=null,Rt=null;return{setTest:function(Je){y||(Je?ye(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Je){G!==Je&&!y&&(n.stencilMask(Je),G=Je)},setFunc:function(Je,Lt,_t){(q!==Je||te!==Lt||fe!==_t)&&(n.stencilFunc(Je,Lt,_t),q=Je,te=Lt,fe=_t)},setOp:function(Je,Lt,_t){(Pe!==Je||qe!==Lt||wt!==_t)&&(n.stencilOp(Je,Lt,_t),Pe=Je,qe=Lt,wt=_t)},setLocked:function(Je){y=Je},setClear:function(Je){Rt!==Je&&(n.clearStencil(Je),Rt=Je)},reset:function(){y=!1,G=null,q=null,te=null,fe=null,Pe=null,qe=null,wt=null,Rt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,f=null,b=null,M=null,E=null,F=null,A=new Ze(0,0,0),C=0,R=!1,S=null,x=null,P=null,L=null,B=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ee=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ee=Y>=2);let K=null,ve={};const xe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ke=new bt().fromArray(xe),nt=new bt().fromArray(_e);function re(y,G,q,te){const fe=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(y,Pe),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<q;qe++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(G,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(G+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Pe}const ue={};ue[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(n.DEPTH_TEST),r.setFunc(Oa),X(!1),W(zh),ye(n.CULL_FACE),I(Xi);function ye(y){l[y]!==!0&&(n.enable(y),l[y]=!0)}function Se(y){l[y]!==!1&&(n.disable(y),l[y]=!1)}function Fe(y,G){return u[y]!==G?(n.bindFramebuffer(y,G),u[y]=G,y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=G),y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=G),!0):!1}function Ve(y,G){let q=h,te=!1;if(y){q=d.get(G),q===void 0&&(q=[],d.set(G,q));const fe=y.textures;if(q.length!==fe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,qe=fe.length;Pe<qe;Pe++)q[Pe]=n.COLOR_ATTACHMENT0+Pe;q.length=fe.length,te=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,te=!0);te&&n.drawBuffers(q)}function Ge(y){return p!==y?(n.useProgram(y),p=y,!0):!1}const ut={[gs]:n.FUNC_ADD,[C0]:n.FUNC_SUBTRACT,[R0]:n.FUNC_REVERSE_SUBTRACT};ut[P0]=n.MIN,ut[L0]=n.MAX;const N={[I0]:n.ZERO,[D0]:n.ONE,[U0]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[k0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[z0]:n.ONE_MINUS_DST_COLOR,[O0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[V0]:n.ONE_MINUS_CONSTANT_COLOR,[G0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function I(y,G,q,te,fe,Pe,qe,wt,Rt,Je){if(y===Xi){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(ye(n.BLEND),_=!0),y!==A0){if(y!==g||Je!==R){if((m!==gs||M!==gs)&&(n.blendEquation(n.FUNC_ADD),m=gs,M=gs),Je)switch(y){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}f=null,b=null,E=null,F=null,A.set(0,0,0),C=0,g=y,R=Je}return}fe=fe||G,Pe=Pe||q,qe=qe||te,(G!==m||fe!==M)&&(n.blendEquationSeparate(ut[G],ut[fe]),m=G,M=fe),(q!==f||te!==b||Pe!==E||qe!==F)&&(n.blendFuncSeparate(N[q],N[te],N[Pe],N[qe]),f=q,b=te,E=Pe,F=qe),(wt.equals(A)===!1||Rt!==C)&&(n.blendColor(wt.r,wt.g,wt.b,Rt),A.copy(wt),C=Rt),g=y,R=!1}function O(y,G){y.side===ni?Se(n.CULL_FACE):ye(n.CULL_FACE);let q=y.side===_n;G&&(q=!q),X(q),y.blending===fr&&y.transparent===!1?I(Xi):I(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),r.setFunc(y.depthFunc),r.setTest(y.depthTest),r.setMask(y.depthWrite),s.setMask(y.colorWrite);const te=y.stencilWrite;o.setTest(te),te&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ne(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(y){S!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),S=y)}function W(y){y!==E0?(ye(n.CULL_FACE),y!==x&&(y===zh?n.cullFace(n.BACK):y===w0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),x=y}function ie(y){y!==P&&(ee&&n.lineWidth(y),P=y)}function ne(y,G,q){y?(ye(n.POLYGON_OFFSET_FILL),(L!==G||B!==q)&&(n.polygonOffset(G,q),L=G,B=q)):Se(n.POLYGON_OFFSET_FILL)}function se(y){y?ye(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function w(y){y===void 0&&(y=n.TEXTURE0+$-1),K!==y&&(n.activeTexture(y),K=y)}function v(y,G,q){q===void 0&&(K===null?q=n.TEXTURE0+$-1:q=K);let te=ve[q];te===void 0&&(te={type:void 0,texture:void 0},ve[q]=te),(te.type!==y||te.texture!==G)&&(K!==q&&(n.activeTexture(q),K=q),n.bindTexture(y,G||ue[y]),te.type=y,te.texture=G)}function D(){const y=ve[K];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Be(y){ke.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),ke.copy(y))}function be(y){nt.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),nt.copy(y))}function He(y,G){let q=c.get(G);q===void 0&&(q=new WeakMap,c.set(G,q));let te=q.get(y);te===void 0&&(te=n.getUniformBlockIndex(G,y.name),q.set(y,te))}function Ce(y,G){const te=c.get(G).get(y);a.get(G)!==te&&(n.uniformBlockBinding(G,te,y.__bindingPointIndex),a.set(G,te))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},K=null,ve={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,f=null,b=null,M=null,E=null,F=null,A=new Ze(0,0,0),C=0,R=!1,S=null,x=null,P=null,L=null,B=null,ke.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ye,disable:Se,bindFramebuffer:Fe,drawBuffers:Ve,useProgram:Ge,setBlending:I,setMaterial:O,setFlipSided:X,setCullFace:W,setLineWidth:ie,setPolygonOffset:ne,setScissorTest:se,activeTexture:w,bindTexture:v,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:Z,texImage2D:ge,texImage3D:We,updateUBOMapping:He,uniformBlockBinding:Ce,texStorage2D:Ae,texStorage3D:ae,texSubImage2D:z,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Be,viewport:be,reset:Ye}}function Dd(n,e,t,i){const s=Lb(i);switch(t){case mp:return n*e;case _p:return n*e;case vp:return n*e*2;case Cu:return n*e/s.components*s.byteLength;case Ru:return n*e/s.components*s.byteLength;case xp:return n*e*2/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case gp:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Lu:return n*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(n,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(n,8)*Math.max(e,8)/2;case Cc:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wa:case Xc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yp:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $c:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lb(n){switch(n){case Si:case dp:return{byteLength:1,components:1};case po:case fp:case xo:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case As:case wu:case si:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ib(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return p?new OffscreenCanvas(w,v):go("canvas")}function g(w,v,D){let V=1;const Z=se(w);if((Z.width>D||Z.height>D)&&(V=D/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const z=Math.floor(V*Z.width),ce=Math.floor(V*Z.height);d===void 0&&(d=_(z,ce));const oe=v?_(z,ce):d;return oe.width=z,oe.height=ce,oe.getContext("2d").drawImage(w,0,0,z,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ce+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==gn&&w.minFilter!==Hn}function f(w){n.generateMipmap(w)}function b(w,v,D,V,Z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let z=v;if(v===n.RED&&(D===n.FLOAT&&(z=n.R32F),D===n.HALF_FLOAT&&(z=n.R16F),D===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.R8UI),D===n.UNSIGNED_SHORT&&(z=n.R16UI),D===n.UNSIGNED_INT&&(z=n.R32UI),D===n.BYTE&&(z=n.R8I),D===n.SHORT&&(z=n.R16I),D===n.INT&&(z=n.R32I)),v===n.RG&&(D===n.FLOAT&&(z=n.RG32F),D===n.HALF_FLOAT&&(z=n.RG16F),D===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.RG8UI),D===n.UNSIGNED_SHORT&&(z=n.RG16UI),D===n.UNSIGNED_INT&&(z=n.RG32UI),D===n.BYTE&&(z=n.RG8I),D===n.SHORT&&(z=n.RG16I),D===n.INT&&(z=n.RG32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){const ce=Z?Ba:mt.getTransfer(V);D===n.FLOAT&&(z=n.RGBA32F),D===n.HALF_FLOAT&&(z=n.RGBA16F),D===n.UNSIGNED_BYTE&&(z=ce===St?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(w,v){let D;return w?v===null||v===As||v===Sr?D=n.DEPTH24_STENCIL8:v===si?D=n.DEPTH32F_STENCIL8:v===po&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===As||v===Sr?D=n.DEPTH_COMPONENT24:v===si?D=n.DEPTH_COMPONENT32F:v===po&&(D=n.DEPTH_COMPONENT16),D}function E(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==gn&&w.minFilter!==Hn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function F(w){const v=w.target;v.removeEventListener("dispose",F),C(v),v.isVideoTexture&&u.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),S(v)}function C(w){const v=i.get(w);if(v.__webglInit===void 0)return;const D=w.source,V=h.get(D);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(w),Object.keys(V).length===0&&h.delete(D)}i.remove(w)}function R(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const D=w.source,V=h.get(D);delete V[v.__cacheKey],o.memory.textures--}function S(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=w.textures;for(let V=0,Z=D.length;V<Z;V++){const z=i.get(D[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(D[V])}i.remove(w)}let x=0;function P(){x=0}function L(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){const D=i.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(D,w,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function ee(w,v){const D=i.get(w);if(w.version>0&&D.__version!==w.version){nt(D,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function Y(w,v){const D=i.get(w);if(w.version>0&&D.__version!==w.version){nt(D,w,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function Q(w,v){const D=i.get(w);if(w.version>0&&D.__version!==w.version){re(D,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const K={[Sc]:n.REPEAT,[xs]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},ve={[gn]:n.NEAREST,[av]:n.NEAREST_MIPMAP_NEAREST,[Do]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[wl]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},xe={[hv]:n.NEVER,[_v]:n.ALWAYS,[dv]:n.LESS,[Mp]:n.LEQUAL,[fv]:n.EQUAL,[gv]:n.GEQUAL,[pv]:n.GREATER,[mv]:n.NOTEQUAL};function _e(w,v){if(v.type===si&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Hn||v.magFilter===wl||v.magFilter===Do||v.magFilter===ys||v.minFilter===Hn||v.minFilter===wl||v.minFilter===Do||v.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,K[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===gn||v.minFilter!==Do&&v.minFilter!==ys||v.type===si&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ke(w,v){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",F));const V=v.source;let Z=h.get(V);Z===void 0&&(Z={},h.set(V,Z));const z=B(v);if(z!==w.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[z].usedTimes++;const ce=Z[w.__cacheKey];ce!==void 0&&(Z[w.__cacheKey].usedTimes--,ce.usedTimes===0&&R(v)),w.__cacheKey=z,w.__webglTexture=Z[z].texture}return D}function nt(w,v,D){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const Z=ke(w,v),z=v.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+D);const ce=i.get(z);if(z.version!==ce.__version||Z===!0){t.activeTexture(n.TEXTURE0+D);const oe=mt.getPrimaries(mt.workingColorSpace),he=v.colorSpace===Vi?null:mt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Vi||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=g(v.image,!1,s.maxTextureSize);ae=ne(v,ae);const ge=r.convert(v.format,v.colorSpace),We=r.convert(v.type);let Be=b(v.internalFormat,ge,We,v.colorSpace,v.isVideoTexture);_e(V,v);let be;const He=v.mipmaps,Ce=v.isVideoTexture!==!0,Ye=ce.__version===void 0||Z===!0,y=z.dataReady,G=E(v,ae);if(v.isDepthTexture)Be=M(v.format===br,v.type),Ye&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,Be,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Be,ae.width,ae.height,0,ge,We,null));else if(v.isDataTexture)if(He.length>0){Ce&&Ye&&t.texStorage2D(n.TEXTURE_2D,G,Be,He[0].width,He[0].height);for(let q=0,te=He.length;q<te;q++)be=He[q],Ce?y&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ge,We,be.data):t.texImage2D(n.TEXTURE_2D,q,Be,be.width,be.height,0,ge,We,be.data);v.generateMipmaps=!1}else Ce?(Ye&&t.texStorage2D(n.TEXTURE_2D,G,Be,ae.width,ae.height),y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,We,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ae.width,ae.height,0,ge,We,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ce&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Be,He[0].width,He[0].height,ae.depth);for(let q=0,te=He.length;q<te;q++)if(be=He[q],v.format!==Wn)if(ge!==null)if(Ce){if(y)if(v.layerUpdates.size>0){const fe=Dd(be.width,be.height,v.format,v.type);for(const Pe of v.layerUpdates){const qe=be.data.subarray(Pe*fe/be.data.BYTES_PER_ELEMENT,(Pe+1)*fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Pe,be.width,be.height,1,ge,qe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,ae.depth,ge,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Be,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,ae.depth,ge,We,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Be,be.width,be.height,ae.depth,0,ge,We,be.data)}else{Ce&&Ye&&t.texStorage2D(n.TEXTURE_2D,G,Be,He[0].width,He[0].height);for(let q=0,te=He.length;q<te;q++)be=He[q],v.format!==Wn?ge!==null?Ce?y&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?y&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ge,We,be.data):t.texImage2D(n.TEXTURE_2D,q,Be,be.width,be.height,0,ge,We,be.data)}else if(v.isDataArrayTexture)if(Ce){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Be,ae.width,ae.height,ae.depth),y)if(v.layerUpdates.size>0){const q=Dd(ae.width,ae.height,v.format,v.type);for(const te of v.layerUpdates){const fe=ae.data.subarray(te*q/ae.data.BYTES_PER_ELEMENT,(te+1)*q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,ge,We,fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,We,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ae.width,ae.height,ae.depth,0,ge,We,ae.data);else if(v.isData3DTexture)Ce?(Ye&&t.texStorage3D(n.TEXTURE_3D,G,Be,ae.width,ae.height,ae.depth),y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,We,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ae.width,ae.height,ae.depth,0,ge,We,ae.data);else if(v.isFramebufferTexture){if(Ye)if(Ce)t.texStorage2D(n.TEXTURE_2D,G,Be,ae.width,ae.height);else{let q=ae.width,te=ae.height;for(let fe=0;fe<G;fe++)t.texImage2D(n.TEXTURE_2D,fe,Be,q,te,0,ge,We,null),q>>=1,te>>=1}}else if(He.length>0){if(Ce&&Ye){const q=se(He[0]);t.texStorage2D(n.TEXTURE_2D,G,Be,q.width,q.height)}for(let q=0,te=He.length;q<te;q++)be=He[q],Ce?y&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ge,We,be):t.texImage2D(n.TEXTURE_2D,q,Be,ge,We,be);v.generateMipmaps=!1}else if(Ce){if(Ye){const q=se(ae);t.texStorage2D(n.TEXTURE_2D,G,Be,q.width,q.height)}y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,We,ae)}else t.texImage2D(n.TEXTURE_2D,0,Be,ge,We,ae);m(v)&&f(V),ce.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function re(w,v,D){if(v.image.length!==6)return;const V=ke(w,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+D);const z=i.get(Z);if(Z.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+D);const ce=mt.getPrimaries(mt.workingColorSpace),oe=v.colorSpace===Vi?null:mt.getPrimaries(v.colorSpace),he=v.colorSpace===Vi||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ae&&!ae?ge[te]=g(v.image[te],!0,s.maxCubemapSize):ge[te]=ae?v.image[te].image:v.image[te],ge[te]=ne(v,ge[te]);const We=ge[0],Be=r.convert(v.format,v.colorSpace),be=r.convert(v.type),He=b(v.internalFormat,Be,be,v.colorSpace),Ce=v.isVideoTexture!==!0,Ye=z.__version===void 0||V===!0,y=Z.dataReady;let G=E(v,We);_e(n.TEXTURE_CUBE_MAP,v);let q;if(Ae){Ce&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,G,He,We.width,We.height);for(let te=0;te<6;te++){q=ge[te].mipmaps;for(let fe=0;fe<q.length;fe++){const Pe=q[fe];v.format!==Wn?Be!==null?Ce?y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,He,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,Pe.width,Pe.height,Be,be,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,He,Pe.width,Pe.height,0,Be,be,Pe.data)}}}else{if(q=v.mipmaps,Ce&&Ye){q.length>0&&G++;const te=se(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,G,He,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ce?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Be,be,ge[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ge[te].width,ge[te].height,0,Be,be,ge[te].data);for(let fe=0;fe<q.length;fe++){const qe=q[fe].image[te].image;Ce?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,qe.width,qe.height,Be,be,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,He,qe.width,qe.height,0,Be,be,qe.data)}}else{Ce?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,be,ge[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Be,be,ge[te]);for(let fe=0;fe<q.length;fe++){const Pe=q[fe];Ce?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Be,be,Pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,He,Be,be,Pe.image[te])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ue(w,v,D,V,Z,z){const ce=r.convert(D.format,D.colorSpace),oe=r.convert(D.type),he=b(D.internalFormat,ce,oe,D.colorSpace);if(!i.get(v).__hasExternalTextures){const ae=Math.max(1,v.width>>z),ge=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,he,ae,ge,v.depth,0,ce,oe,null):t.texImage2D(Z,z,he,ae,ge,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,i.get(D).__webglTexture,0,X(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,i.get(D).__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(w,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,z=M(v.stencilBuffer,Z),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=X(v);W(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,z,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,w)}else{const V=v.textures;for(let Z=0;Z<V.length;Z++){const z=V[Z],ce=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),he=b(z.internalFormat,ce,oe,z.colorSpace),Ae=X(v);D&&W(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,he,v.width,v.height):W(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,Z=X(v);if(v.depthTexture.format===pr)W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===br)W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const v=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,w)}else if(D){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]=n.createRenderbuffer(),ye(v.__webglDepthbuffer[V],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ye(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(w,v,D){const V=i.get(w);v!==void 0&&ue(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Fe(w)}function Ge(w){const v=w.texture,D=i.get(w),V=i.get(v);w.addEventListener("dispose",A);const Z=w.textures,z=w.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),z){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[oe][he]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,he=Z.length;oe<he;oe++){const Ae=i.get(Z[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&W(w)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const he=Z[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const Ae=r.convert(he.format,he.colorSpace),ae=r.convert(he.type),ge=b(he.internalFormat,Ae,ae,he.colorSpace,w.isXRRenderTarget===!0),We=X(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ge,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(D.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ue(D.__webglFramebuffer[oe][he],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else ue(D.__webglFramebuffer[oe],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,he=Z.length;oe<he;oe++){const Ae=Z[oe],ae=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),_e(n.TEXTURE_2D,Ae),ue(D.__webglFramebuffer,w,Ae,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ae)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,V.__webglTexture),_e(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ue(D.__webglFramebuffer[he],w,v,n.COLOR_ATTACHMENT0,oe,he);else ue(D.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&f(oe),t.unbindTexture()}w.depthBuffer&&Fe(w)}function ut(w){const v=w.textures;for(let D=0,V=v.length;D<V;D++){const Z=v[D];if(m(Z)){const z=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(Z).__webglTexture;t.bindTexture(z,ce),f(z),t.unbindTexture()}}}const N=[],I=[];function O(w){if(w.samples>0){if(W(w)===!1){const v=w.textures,D=w.width,V=w.height;let Z=n.COLOR_BUFFER_BIT;const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(w),oe=v.length>1;if(oe)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ae=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,Z,n.NEAREST),c===!0&&(N.length=0,I.length=0,N.push(n.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(N.push(z),I.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ae=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function X(w){return Math.min(s.maxSamples,w.samples)}function W(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(w){const v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function ne(w,v){const D=w.colorSpace,V=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Ji&&D!==Vi&&(mt.getTransfer(D)===St?(V!==Wn||Z!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Ve,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=W}function Db(n,e){function t(i,s=Vi){let r;const o=mt.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dp)return n.BYTE;if(i===fp)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===As)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===xo)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===Wn)return n.RGBA;if(i===_p)return n.LUMINANCE;if(i===vp)return n.LUMINANCE_ALPHA;if(i===pr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===Cu)return n.RED;if(i===Ru)return n.RED_INTEGER;if(i===xp)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Lu)return n.RGBA_INTEGER;if(i===Ma||i===Sa||i===ba||i===Ea)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===wc||i===Tc||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Rc||i===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Rc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wa||i===Xc||i===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yp||i===qc||i===$c||i===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ub extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zi({vertexShader:Fb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends Ds{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,_=null;const g=new Bb,m=t.getContextAttributes();let f=null,b=null;const M=[],E=[],F=new De;let A=null;const C=new un;C.layers.enable(1),C.viewport=new bt;const R=new un;R.layers.enable(2),R.viewport=new bt;const S=[C,R],x=new Ub;x.layers.enable(1),x.layers.enable(2);let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=M[re];return ue===void 0&&(ue=new Kl,M[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=M[re];return ue===void 0&&(ue=new Kl,M[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=M[re];return ue===void 0&&(ue=new Kl,M[re]=ue),ue.getHandSpace()};function B(re){const ue=E.indexOf(re.inputSource);if(ue===-1)return;const ye=M[ue];ye!==void 0&&(ye.update(re.inputSource,re.frame,l||o),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ee);for(let re=0;re<M.length;re++){const ue=E[re];ue!==null&&(E[re]=null,M[re].disconnect(ue))}P=null,L=null,g.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,b=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Cs(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,ye=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?br:pr,ye=m.stencil?Sr:As);const Fe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Cs(h.textureWidth,h.textureHeight,{format:Wn,type:Si,depthTexture:new Dp(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(re){for(let ue=0;ue<re.removed.length;ue++){const ye=re.removed[ue],Se=E.indexOf(ye);Se>=0&&(E[Se]=null,M[Se].disconnect(ye))}for(let ue=0;ue<re.added.length;ue++){const ye=re.added[ue];let Se=E.indexOf(ye);if(Se===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=E.length){E.push(ye),Se=Ve;break}else if(E[Ve]===null){E[Ve]=ye,Se=Ve;break}if(Se===-1)break}const Fe=M[Se];Fe&&Fe.connect(ye)}}const Y=new U,Q=new U;function K(re,ue,ye){Y.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const Se=Y.distanceTo(Q),Fe=ue.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Ge=Fe[14]/(Fe[10]-1),ut=Fe[14]/(Fe[10]+1),N=(Fe[9]+1)/Fe[5],I=(Fe[9]-1)/Fe[5],O=(Fe[8]-1)/Fe[0],X=(Ve[8]+1)/Ve[0],W=Ge*O,ie=Ge*X,ne=Se/(-O+X),se=ne*-O;ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(ne),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const w=Ge+ne,v=ut+ne,D=W-se,V=ie+(Se-se),Z=N*ut/v*w,z=I*ut/v*w;re.projectionMatrix.makePerspective(D,V,Z,z,w,v),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function ve(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;g.texture!==null&&(re.near=g.depthNear,re.far=g.depthFar),x.near=R.near=C.near=re.near,x.far=R.far=C.far=re.far,(P!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,L=x.far,C.near=P,C.far=L,R.near=P,R.far=L,C.updateProjectionMatrix(),R.updateProjectionMatrix(),re.updateProjectionMatrix());const ue=re.parent,ye=x.cameras;ve(x,ue);for(let Se=0;Se<ye.length;Se++)ve(ye[Se],ue);ye.length===2?K(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),xe(re,x,ue)};function xe(re,ue,ye){ye===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(ye.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=mo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(re){c=re,h!==null&&(h.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let _e=null;function ke(re,ue){if(u=ue.getViewerPose(l||o),_=ue,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Se=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,Se=!0);for(let Ve=0;Ve<ye.length;Ve++){const Ge=ye[Ve];let ut=null;if(p!==null)ut=p.getViewport(Ge);else{const I=d.getViewSubImage(h,Ge);ut=I.viewport,Ve===0&&(e.setRenderTargetTextures(b,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(b))}let N=S[Ve];N===void 0&&(N=new un,N.layers.enable(Ve),N.viewport=new bt,S[Ve]=N),N.matrix.fromArray(Ge.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ge.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(ut.x,ut.y,ut.width,ut.height),Ve===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Se===!0&&x.cameras.push(N)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ve=d.getDepthInformation(ye[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(e,Ve,s.renderState)}}for(let ye=0;ye<M.length;ye++){const Se=E[ye],Fe=M[ye];Se!==null&&Fe!==void 0&&Fe.update(Se,ue,l||o)}_e&&_e(re,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const nt=new Lp;nt.setAnimationLoop(ke),this.setAnimationLoop=function(re){_e=re},this.dispose=function(){}}}const ds=new Xn,kb=new gt;function Hb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,ds.copy(E),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(ds)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=s[b.id];E===void 0&&(_(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const F=M.program;i.updateUBOMapping(b,F);const A=e.render.frame;r[b.id]!==A&&(h(b),r[b.id]=A)}function u(b){const M=d();b.__bindingPointIndex=M;const E=n.createBuffer(),F=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const M=s[b.id],E=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=E.length;A<C;A++){const R=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,x=R.length;S<x;S++){const P=R[S];if(p(P,A,S,F)===!0){const L=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ee=0;ee<B.length;ee++){const Y=B[ee],Q=g(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,L+$,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,E,F){const A=b.value,C=M+"_"+E;if(F[C]===void 0)return typeof A=="number"||typeof A=="boolean"?F[C]=A:F[C]=A.clone(),!0;{const R=F[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return F[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(b){const M=b.uniforms;let E=0;const F=16;for(let C=0,R=M.length;C<R;C++){const S=Array.isArray(M[C])?M[C]:[M[C]];for(let x=0,P=S.length;x<P;x++){const L=S[x],B=Array.isArray(L.value)?L.value:[L.value];for(let $=0,ee=B.length;$<ee;$++){const Y=B[$],Q=g(Y),K=E%F;K!==0&&F-K<Q.boundary&&(E+=F-K),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Q.storage}}}const A=E%F;return A>0&&(E+=F-A),b.__size=E,b.__cache={},this}function g(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class zu{constructor(e={}){const{canvas:t=Uv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=ji,this.toneMappingExposure=1;const M=this;let E=!1,F=0,A=0,C=null,R=-1,S=null;const x=new bt,P=new bt;let L=null;const B=new Ze(0);let $=0,ee=t.width,Y=t.height,Q=1,K=null,ve=null;const xe=new bt(0,0,ee,Y),_e=new bt(0,0,ee,Y);let ke=!1;const nt=new Ou;let re=!1,ue=!1;const ye=new gt,Se=new U,Fe=new bt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ut(){return C===null?Q:1}let N=i;function I(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){const k="webgl2";if(N=I(k,T),N===null)throw I(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,X,W,ie,ne,se,w,v,D,V,Z,z,ce,oe,he,Ae,ae,ge,We,Be,be,He,Ce,Ye;function y(){O=new KM(N),O.init(),He=new Db(N,O),X=new WM(N,O,e,He),W=new Pb(N),ie=new QM(N),ne=new gb,se=new Ib(N,O,W,ne,X,He,ie),w=new jM(M),v=new YM(M),D=new ox(N),Ce=new VM(N,D),V=new ZM(N,D,ie,Ce),Z=new tS(N,V,D,ie),We=new eS(N,X,se),Ae=new XM(ne),z=new mb(M,w,v,O,X,Ce,Ae),ce=new Hb(M,ne),oe=new vb,he=new Eb(O),ge=new HM(M,w,v,W,Z,h,c),ae=new Rb(M,Z,X),Ye=new Vb(N,ie,X,W),Be=new GM(N,O,ie),be=new JM(N,O,ie),ie.programs=z.programs,M.capabilities=X,M.extensions=O,M.properties=ne,M.renderLists=oe,M.shadowMap=ae,M.state=W,M.info=ie}y();const G=new zb(M,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(ee,Y,!1))},this.getSize=function(T){return T.set(ee,Y)},this.setSize=function(T,k,j=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,Y=k,t.width=Math.floor(T*Q),t.height=Math.floor(k*Q),j===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(ee*Q,Y*Q).floor()},this.setDrawingBufferSize=function(T,k,j){ee=T,Y=k,Q=j,t.width=Math.floor(T*j),t.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,k,j,J){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,k,j,J),W.viewport(x.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(_e)},this.setScissor=function(T,k,j,J){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,k,j,J),W.scissor(P.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){W.setScissorTest(ke=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(T=!0,k=!0,j=!0){let J=0;if(T){let H=!1;if(C!==null){const me=C.texture.format;H=me===Lu||me===Pu||me===Ru}if(H){const me=C.texture.type,Te=me===Si||me===As||me===po||me===Sr||me===Tu||me===Au,Re=ge.getClearColor(),Le=ge.getClearAlpha(),Xe=Re.r,je=Re.g,ze=Re.b;Te?(p[0]=Xe,p[1]=je,p[2]=ze,p[3]=Le,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Xe,_[1]=je,_[2]=ze,_[3]=Le,N.clearBufferiv(N.COLOR,0,_))}else J|=N.COLOR_BUFFER_BIT}k&&(J|=N.DEPTH_BUFFER_BIT),j&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),oe.dispose(),he.dispose(),ne.dispose(),w.dispose(),v.dispose(),Z.dispose(),Ce.dispose(),Ye.dispose(),z.dispose(),G.dispose(),G.removeEventListener("sessionstart",_t),G.removeEventListener("sessionend",Yt),Tt.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ie.autoReset,k=ae.enabled,j=ae.autoUpdate,J=ae.needsUpdate,H=ae.type;y(),ie.autoReset=T,ae.enabled=k,ae.autoUpdate=j,ae.needsUpdate=J,ae.type=H}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const k=T.target;k.removeEventListener("dispose",Pe),qe(k)}function qe(T){wt(T),ne.remove(T)}function wt(T){const k=ne.get(T).programs;k!==void 0&&(k.forEach(function(j){z.releaseProgram(j)}),T.isShaderMaterial&&z.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,J,H,me){k===null&&(k=Ve);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Re=Us(T,k,j,J,H);W.setMaterial(J,Te);let Le=j.index,Xe=1;if(J.wireframe===!0){if(Le=V.getWireframeAttribute(j),Le===void 0)return;Xe=2}const je=j.drawRange,ze=j.attributes.position;let Ke=je.start*Xe,dt=(je.start+je.count)*Xe;me!==null&&(Ke=Math.max(Ke,me.start*Xe),dt=Math.min(dt,(me.start+me.count)*Xe)),Le!==null?(Ke=Math.max(Ke,0),dt=Math.min(dt,Le.count)):ze!=null&&(Ke=Math.max(Ke,0),dt=Math.min(dt,ze.count));const ft=dt-Ke;if(ft<0||ft===1/0)return;Ce.setup(H,J,Re,j,Le);let Gt,st=Be;if(Le!==null&&(Gt=D.get(Le),st=be,st.setIndex(Gt)),H.isMesh)J.wireframe===!0?(W.setLineWidth(J.wireframeLinewidth*ut()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(H.isLine){let Ie=J.linewidth;Ie===void 0&&(Ie=1),W.setLineWidth(Ie*ut()),H.isLineSegments?st.setMode(N.LINES):H.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else H.isPoints?st.setMode(N.POINTS):H.isSprite&&st.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)st.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,Mt=H._multiDrawCounts,at=H._multiDrawCount,fn=Le?D.get(Le).bytesPerElement:1,ai=ne.get(J).currentProgram.getUniforms();for(let Zt=0;Zt<at;Zt++)ai.setValue(N,"_gl_DrawID",Zt),st.render(Ie[Zt]/fn,Mt[Zt])}else if(H.isInstancedMesh)st.renderInstances(Ke,ft,H.count);else if(j.isInstancedBufferGeometry){const Ie=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Mt=Math.min(j.instanceCount,Ie);st.renderInstances(Ke,ft,Mt)}else st.render(Ke,ft)};function Rt(T,k,j){T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,wi(T,k,j),T.side=Ki,T.needsUpdate=!0,wi(T,k,j),T.side=ni):wi(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),m=he.get(j),m.init(k),b.push(m),j.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const J=new Set;return T.traverse(function(H){const me=H.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Re=me[Te];Rt(Re,j,H),J.add(Re)}else Rt(me,j,H),J.add(me)}),b.pop(),m=null,J},this.compileAsync=function(T,k,j=null){const J=this.compile(T,k,j);return new Promise(H=>{function me(){if(J.forEach(function(Te){ne.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){H(T);return}setTimeout(me,10)}O.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function Lt(T){Je&&Je(T)}function _t(){Tt.stop()}function Yt(){Tt.start()}const Tt=new Lp;Tt.setAnimationLoop(Lt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(T){Je=T,G.setAnimationLoop(T),T===null?Tt.stop():Tt.start()},G.addEventListener("sessionstart",_t),G.addEventListener("sessionend",Yt),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(k),k=G.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,k,C),m=he.get(T,b.length),m.init(k),b.push(m),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,ue),g=oe.get(T,f.length),g.init(),f.push(g),G.enabled===!0&&G.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&Kt(me,k,-1/0,M.sortObjects)}Kt(T,k,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(K,ve),Ge=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ge&&ge.addToRenderList(g,T),this.info.render.frame++,re===!0&&Ae.beginShadows();const j=m.state.shadowsArray;ae.render(j,T,k),re===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,H=g.transmissive;if(m.setupLights(),k.isArrayCamera){const me=k.cameras;if(H.length>0)for(let Te=0,Re=me.length;Te<Re;Te++){const Le=me[Te];qn(J,H,T,Le)}Ge&&ge.render(T);for(let Te=0,Re=me.length;Te<Re;Te++){const Le=me[Te];xn(g,T,Le,Le.viewport)}}else H.length>0&&qn(J,H,T,k),Ge&&ge.render(T),xn(g,T,k);C!==null&&(se.updateMultisampleRenderTarget(C),se.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(M,T,k),Ce.resetDefaultState(),R=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],re===!0&&Ae.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Kt(T,k,j,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){J&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const Te=Z.update(T),Re=T.material;Re.visible&&g.push(T,Te,Re,j,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const Te=Z.update(T),Re=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Fe.copy(Te.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(Re)){const Le=Te.groups;for(let Xe=0,je=Le.length;Xe<je;Xe++){const ze=Le[Xe],Ke=Re[ze.materialIndex];Ke&&Ke.visible&&g.push(T,Te,Ke,j,Fe.z,ze)}}else Re.visible&&g.push(T,Te,Re,j,Fe.z,null)}}const me=T.children;for(let Te=0,Re=me.length;Te<Re;Te++)Kt(me[Te],k,j,J)}function xn(T,k,j,J){const H=T.opaque,me=T.transmissive,Te=T.transparent;m.setupLightsView(j),re===!0&&Ae.setGlobalState(M.clippingPlanes,j),J&&W.viewport(x.copy(J)),H.length>0&&$n(H,k,j),me.length>0&&$n(me,k,j),Te.length>0&&$n(Te,k,j),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function qn(T,k,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Cs(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?xo:Si,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const me=m.state.transmissionRenderTarget[J.id],Te=J.viewport||x;me.setSize(Te.z,Te.w);const Re=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(B),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),Ge?ge.render(j):M.clear();const Le=M.toneMapping;M.toneMapping=ji;const Xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),re===!0&&Ae.setGlobalState(M.clippingPlanes,J),$n(T,j,J),se.updateMultisampleRenderTarget(me),se.updateRenderTargetMipmap(me),O.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ze=0,Ke=k.length;ze<Ke;ze++){const dt=k[ze],ft=dt.object,Gt=dt.geometry,st=dt.material,Ie=dt.group;if(st.side===ni&&ft.layers.test(J.layers)){const Mt=st.side;st.side=_n,st.needsUpdate=!0,Ir(ft,j,J,Gt,st,Ie),st.side=Mt,st.needsUpdate=!0,je=!0}}je===!0&&(se.updateMultisampleRenderTarget(me),se.updateRenderTargetMipmap(me))}M.setRenderTarget(Re),M.setClearColor(B,$),Xe!==void 0&&(J.viewport=Xe),M.toneMapping=Le}function $n(T,k,j){const J=k.isScene===!0?k.overrideMaterial:null;for(let H=0,me=T.length;H<me;H++){const Te=T[H],Re=Te.object,Le=Te.geometry,Xe=J===null?Te.material:J,je=Te.group;Re.layers.test(j.layers)&&Ir(Re,k,j,Le,Xe,je)}}function Ir(T,k,j,J,H,me){T.onBeforeRender(M,k,j,J,H,me),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.transparent===!0&&H.side===ni&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,M.renderBufferDirect(j,k,J,H,T,me),H.side=Ki,H.needsUpdate=!0,M.renderBufferDirect(j,k,J,H,T,me),H.side=ni):M.renderBufferDirect(j,k,J,H,T,me),T.onAfterRender(M,k,j,J,H,me)}function wi(T,k,j){k.isScene!==!0&&(k=Ve);const J=ne.get(T),H=m.state.lights,me=m.state.shadowsArray,Te=H.state.version,Re=z.getParameters(T,H.state,me,k,j),Le=z.getProgramCacheKey(Re);let Xe=J.programs;J.environment=T.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(T.isMeshStandardMaterial?v:w).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Pe),Xe=new Map,J.programs=Xe);let je=Xe.get(Le);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Te)return So(T,Re),je}else Re.uniforms=z.getUniforms(T),T.onBeforeCompile(Re,M),je=z.acquireProgram(Re,Le),Xe.set(Le,je),J.uniforms=Re.uniforms;const ze=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),So(T,Re),J.needsLights=ul(T),J.lightsStateVersion=Te,J.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function Dr(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ta.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function So(T,k){const j=ne.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Us(T,k,j,J,H){k.isScene!==!0&&(k=Ve),se.resetTextureUnits();const me=k.fog,Te=J.isMeshStandardMaterial?k.environment:null,Re=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ji,Le=(J.isMeshStandardMaterial?v:w).get(J.envMap||Te),Xe=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,dt=!!j.morphAttributes.color;let ft=ji;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=M.toneMapping);const Gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=Gt!==void 0?Gt.length:0,Ie=ne.get(J),Mt=m.state.lights;if(re===!0&&(ue===!0||T!==S)){const Jt=T===S&&J.id===R;Ae.setState(J,T,Jt)}let at=!1;J.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Mt.state.version||Ie.outputColorSpace!==Re||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Le||J.fog===!0&&Ie.fog!==me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ae.numPlanes||Ie.numIntersection!==Ae.numIntersection)||Ie.vertexAlphas!==Xe||Ie.vertexTangents!==je||Ie.morphTargets!==ze||Ie.morphNormals!==Ke||Ie.morphColors!==dt||Ie.toneMapping!==ft||Ie.morphTargetsCount!==st)&&(at=!0):(at=!0,Ie.__version=J.version);let fn=Ie.currentProgram;at===!0&&(fn=wi(J,k,H));let ai=!1,Zt=!1,Ns=!1;const Pt=fn.getUniforms(),Dn=Ie.uniforms;if(W.useProgram(fn.program)&&(ai=!0,Zt=!0,Ns=!0),J.id!==R&&(R=J.id,Zt=!0),ai||S!==T){Pt.setValue(N,"projectionMatrix",T.projectionMatrix),Pt.setValue(N,"viewMatrix",T.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(N,Se.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&Pt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Zt=!0,Ns=!0)}if(H.isSkinnedMesh){Pt.setOptional(N,H,"bindMatrix"),Pt.setOptional(N,H,"bindMatrixInverse");const Jt=H.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Pt.setValue(N,"boneTexture",Jt.boneTexture,se))}H.isBatchedMesh&&(Pt.setOptional(N,H,"batchingTexture"),Pt.setValue(N,"batchingTexture",H._matricesTexture,se),Pt.setOptional(N,H,"batchingIdTexture"),Pt.setValue(N,"batchingIdTexture",H._indirectTexture,se),Pt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Pt.setValue(N,"batchingColorTexture",H._colorsTexture,se));const Un=j.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&We.update(H,j,fn),(Zt||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,Pt.setValue(N,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dn.envMap.value=Le,Dn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Dn.envMapIntensity.value=k.environmentIntensity),Zt&&(Pt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&bo(Dn,Ns),me&&J.fog===!0&&ce.refreshFogUniforms(Dn,me),ce.refreshMaterialUniforms(Dn,J,Q,Y,m.state.transmissionRenderTarget[T.id]),Ta.upload(N,Dr(Ie),Dn,se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ta.upload(N,Dr(Ie),Dn,se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(N,"center",H.center),Pt.setValue(N,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(N,"normalMatrix",H.normalMatrix),Pt.setValue(N,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Jt=J.uniformsGroups;for(let Ur=0,hl=Jt.length;Ur<hl;Ur++){const Eo=Jt[Ur];Ye.update(Eo,fn),Ye.bind(Eo,fn)}}return fn}function bo(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ul(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,k,j){ne.get(T.texture).__webglTexture=k,ne.get(T.depthTexture).__webglTexture=j;const J=ne.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const j=ne.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){C=T,F=k,A=j;let J=!0,H=null,me=!1,Te=!1;if(T){const Le=ne.get(T);Le.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(N.FRAMEBUFFER,null),J=!1):Le.__webglFramebuffer===void 0?se.setupRenderTarget(T):Le.__hasExternalTextures&&se.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const je=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[k])?H=je[k][j]:H=je[k],me=!0):T.samples>0&&se.useMultisampledRTT(T)===!1?H=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[j]:H=je,x.copy(T.viewport),P.copy(T.scissor),L=T.scissorTest}else x.copy(xe).multiplyScalar(Q).floor(),P.copy(_e).multiplyScalar(Q).floor(),L=ke;if(W.bindFramebuffer(N.FRAMEBUFFER,H)&&J&&W.drawBuffers(T,H),W.viewport(x),W.scissor(P),W.setScissorTest(L),me){const Le=ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,j)}else if(Te){const Le=ne.get(T.texture),Xe=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,Xe)}R=-1},this.readRenderTargetPixels=function(T,k,j,J,H,me,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){W.bindFramebuffer(N.FRAMEBUFFER,Re);try{const Le=T.texture,Xe=Le.format,je=Le.type;if(!X.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&j>=0&&j<=T.height-H&&N.readPixels(k,j,J,H,He.convert(Xe),He.convert(je),me)}finally{const Le=C!==null?ne.get(C).__webglFramebuffer:null;W.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,k,j,J,H,me,Te){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){W.bindFramebuffer(N.FRAMEBUFFER,Re);try{const Le=T.texture,Xe=Le.format,je=Le.type;if(!X.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-J&&j>=0&&j<=T.height-H){const ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(k,j,J,H,He.convert(Xe),He.convert(je),0),N.flush();const Ke=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Nv(N,Ke,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me)}finally{N.deleteBuffer(ze),N.deleteSync(Ke)}return me}}finally{const Le=C!==null?ne.get(C).__webglFramebuffer:null;W.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(T,k=null,j=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-j),H=Math.floor(T.image.width*J),me=Math.floor(T.image.height*J),Te=k!==null?k.x:0,Re=k!==null?k.y:0;se.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Te,Re,H,me),W.unbindTexture()},this.copyTextureToTexture=function(T,k,j=null,J=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,j=null);let me,Te,Re,Le,Xe,je;j!==null?(me=j.max.x-j.min.x,Te=j.max.y-j.min.y,Re=j.min.x,Le=j.min.y):(me=T.image.width,Te=T.image.height,Re=0,Le=0),J!==null?(Xe=J.x,je=J.y):(Xe=0,je=0);const ze=He.convert(k.format),Ke=He.convert(k.type);se.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const dt=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gt=N.getParameter(N.UNPACK_SKIP_PIXELS),st=N.getParameter(N.UNPACK_SKIP_ROWS),Ie=N.getParameter(N.UNPACK_SKIP_IMAGES),Mt=T.isCompressedTexture?T.mipmaps[H]:T.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,Xe,je,me,Te,ze,Ke,Mt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,Xe,je,Mt.width,Mt.height,ze,Mt.data):N.texSubImage2D(N.TEXTURE_2D,H,Xe,je,me,Te,ze,Ke,Mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,dt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,st),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j=null,J=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0);let me,Te,Re,Le,Xe,je,ze,Ke,dt;const ft=T.isCompressedTexture?T.mipmaps[H]:T.image;j!==null?(me=j.max.x-j.min.x,Te=j.max.y-j.min.y,Re=j.max.z-j.min.z,Le=j.min.x,Xe=j.min.y,je=j.min.z):(me=ft.width,Te=ft.height,Re=ft.depth,Le=0,Xe=0,je=0),J!==null?(ze=J.x,Ke=J.y,dt=J.z):(ze=0,Ke=0,dt=0);const Gt=He.convert(k.format),st=He.convert(k.type);let Ie;if(k.isData3DTexture)se.setTexture3D(k,0),Ie=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)se.setTexture2DArray(k,0),Ie=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Mt=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),Zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ie,H,ze,Ke,dt,me,Te,Re,Gt,st,ft.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ie,H,ze,Ke,dt,me,Te,Re,Gt,ft.data):N.texSubImage3D(Ie,H,ze,Ke,dt,me,Te,Re,Gt,st,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt),H===0&&k.generateMipmaps&&N.generateMipmap(Ie),W.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&se.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?se.setTextureCube(T,0):T.isData3DTexture?se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?se.setTexture2DArray(T,0):se.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){F=0,A=0,C=null,W.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Du?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===al?"display-p3":"srgb"}}class ku{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=i}clone(){return new ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hu extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new U;class Va{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Va(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bp extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Xr=new U,ir=new U,sr=new U,rr=new De,jr=new De,zp=new gt,ta=new U,qr=new U,na=new U,Ud=new De,Zl=new De,Nd=new De;class Wb extends Ct{constructor(e=new Bp){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gb(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Va(i,3,0,!1)),nr.setAttribute("uv",new Va(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ia(ta.set(-.5,-.5,0),sr,o,ir,s,r),ia(qr.set(.5,-.5,0),sr,o,ir,s,r),ia(na.set(.5,.5,0),sr,o,ir,s,r),Ud.set(0,0),Zl.set(1,0),Nd.set(1,1);let a=e.ray.intersectTriangle(ta,qr,na,!1,Xr);if(a===null&&(ia(qr.set(-.5,.5,0),sr,o,ir,s,r),Zl.set(0,1),a=e.ray.intersectTriangle(ta,na,qr,!1,Xr),a===null))return;const c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:Cn.getInterpolation(Xr,ta,qr,na,Ud,Zl,Nd,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(jr.x=r*rr.x-s*rr.y,jr.y=s*rr.x+r*rr.y):jr.copy(rr),n.copy(e),n.x+=jr.x,n.y+=jr.y,n.applyMatrix4(zp)}class Xb extends $t{constructor(e=null,t=1,i=1,s,r,o,a,c,l=gn,u=gn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fd extends qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new gt,Od=new gt,sa=[],Bd=new Qi,jb=new gt,$r=new Ot,Yr=new es;class ra extends Ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Bd.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Yr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Od.multiplyMatrices(i,or),$r.matrixWorld=Od,$r.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){const c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xb(new Float32Array(s*this.count),s,this.count,Cu,si));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qi extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new U,Wa=new U,zd=new gt,Kr=new yo,oa=new es,Jl=new U,kd=new U;class Qc extends Ct{constructor(e=new Ut,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;zd.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(zd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=u.getX(g),b=u.getX(g+1),M=aa(this,e,Kr,c,f,b);M&&t.push(M)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=aa(this,e,Kr,c,g,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=aa(this,e,Kr,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=aa(this,e,Kr,c,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function aa(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ga,Wa,Jl,kd)>i)return;Jl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:kd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const Hd=new U,Vd=new U;class Xa extends Qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hd.fromBufferAttribute(t,s),Vd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hd.distanceTo(Vd);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ss extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gd=new gt,eu=new yo,la=new es,ca=new U;class oo extends Ct{constructor(e=new Ut,t=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Gd.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=h,g=p;_<g;_++){const m=l.getX(_);ca.fromBufferAttribute(d,m),Wd(ca,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,g=p;_<g;_++)ca.fromBufferAttribute(d,_),Wd(ca,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wd(n,e,t,i,s,r,o){const a=eu.distanceSqToPoint(n);if(a<t){const c=new U;eu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class kp extends $t{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let _=0;const g=[],m=i/2;let f=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function b(){const E=new U,F=new U;let A=0;const C=(t-e)/i;for(let R=0;R<=r;R++){const S=[],x=R/r,P=x*(t-e)+e;for(let L=0;L<=s;L++){const B=L/s,$=B*c+a,ee=Math.sin($),Y=Math.cos($);F.x=P*ee,F.y=-x*i+m,F.z=P*Y,d.push(F.x,F.y,F.z),E.set(ee,C,Y).normalize(),h.push(E.x,E.y,E.z),p.push(B,1-x),S.push(_++)}g.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const x=g[S][R],P=g[S+1][R],L=g[S+1][R+1],B=g[S][R+1];u.push(x,P,B),u.push(P,L,B),A+=6}l.addGroup(f,A,0),f+=A}function M(E){const F=_,A=new De,C=new U;let R=0;const S=E===!0?e:t,x=E===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),_++;const P=_;for(let L=0;L<=s;L++){const $=L/s*c+a,ee=Math.cos($),Y=Math.sin($);C.x=S*Y,C.y=m*x,C.z=S*ee,d.push(C.x,C.y,C.z),h.push(0,x,0),A.x=ee*.5+.5,A.y=Y*.5*x+.5,p.push(A.x,A.y),_++}for(let L=0;L<s;L++){const B=F+L,$=P+L;E===!0?u.push($,$+1,B):u.push($+1,$,B),R+=3}l.addGroup(f,R,E===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vu extends _o{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gu extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new U,E=new U,F=new U;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],E),p(t[A+2],F),c(M,E,F,b)}function c(b,M,E,F){const A=F+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const S=b.clone().lerp(E,R/A),x=M.clone().lerp(E,R/A),P=A-R;for(let L=0;L<=P;L++)L===0&&R===A?C[R][L]=S:C[R][L]=S.clone().lerp(x,L/P)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const x=Math.floor(S/2);S%2===0?(h(C[R][x+1]),h(C[R+1][x]),h(C[R][x])):(h(C[R][x+1]),h(C[R+1][x+1]),h(C[R+1][x]))}}function l(b){const M=new U;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(b),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function u(){const b=new U;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const E=m(b)/2/Math.PI+.5,F=f(b)/Math.PI+.5;o.push(E,1-F)}_(),d()}function d(){for(let b=0;b<o.length;b+=6){const M=o[b+0],E=o[b+2],F=o[b+4],A=Math.max(M,E,F),C=Math.min(M,E,F);A>.9&&C<.1&&(M<.2&&(o[b+0]+=1),E<.2&&(o[b+2]+=1),F<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,M){const E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function _(){const b=new U,M=new U,E=new U,F=new U,A=new De,C=new De,R=new De;for(let S=0,x=0;S<r.length;S+=9,x+=6){b.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),E.set(r[S+6],r[S+7],r[S+8]),A.set(o[x+0],o[x+1]),C.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),F.copy(b).add(M).add(E).divideScalar(3);const P=m(F);g(A,x+0,b,P),g(C,x+2,M,P),g(R,x+4,E,P)}}function g(b,M,E,F){F<0&&b.x===1&&(o[M]=b.x-1),E.x===0&&E.z===0&&(o[M]=F/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.vertices,e.indices,e.radius,e.details)}}class Wu extends Gu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wu(e.radius,e.detail)}}const ua=new U,ha=new U,Ql=new U,da=new Cn;class qb extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(mr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:f}=da;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),da.getNormal(Ql),d[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const M=(b+1)%3,E=d[b],F=d[M],A=da[u[b]],C=da[u[M]],R=`${E}_${F}`,S=`${F}_${E}`;S in h&&h[S]?(Ql.dot(h[S].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(C.x,C.y,C.z)),h[S]=null):R in h||(h[R]={index0:l[b],index1:l[M],normal:Ql.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];ua.fromBufferAttribute(a,g),ha.fromBufferAttribute(a,m),p.push(ua.x,ua.y,ua.z),p.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new yt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xu extends Ut{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,p=new U,_=new De;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let g=0;g<s;g++){const m=g*(i+1);for(let f=0;f<i;f++){const b=f+m,M=b,E=b+i+1,F=b+i+2,A=b+1;a.push(M,E,A),a.push(E,F,A)}}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _i extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $b extends jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yb extends qi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const ja={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],_=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Zb=new Kb;class Mo{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class Jb extends Error{constructor(e,t){super(e),this.response=t}}class Qb extends Mo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ja.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:i,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mi[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){b();function b(){d.read().then(({done:M,value:E})=>{if(M)f.close();else{g+=E.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let A=0,C=u.length;A<C;A++){const R=u[A];R.onProgress&&R.onProgress(F)}f.enqueue(E),b()}},M=>{f.error(M)})}}});return new Response(m)}else throw new Jb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{ja.add(e,l);const u=mi[e];delete mi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eE extends Mo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ja.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=go("img");function c(){u(),ja.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Hp extends Mo{constructor(e){super(e)}load(e,t,i,s){const r=new $t,o=new eE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ju extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ec=new gt,Xd=new U,jd=new U;class Vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qd=new gt,Zr=new U,tc=new U;class tE extends Vp{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zr),tc.copy(i.position),tc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(tc),i.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd)}}class nE extends ju{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iE extends Vp{constructor(){super(new Ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qa extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qu extends ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $d=new gt;class sE{constructor(e,t,i=0,s=1/0){this.ray=new yo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(e,t=!0,i=[]){return tu(e,this,i,t),i.sort(Yd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)tu(e[s],this,i,t);return i.sort(Yd),i}}function Yd(n,e){return n.distance-e.distance}function tu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)tu(r[o],e,t,!0)}}class Kd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rE extends Xa{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ze(i),s=new Ze(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let h=0,p=0,_=-a;h<=t;h++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=h===r?i:s;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}const u=new Ut;u.setAttribute("position",new yt(c,3)),u.setAttribute("color",new yt(l,3));const d=new qi({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);const Zd={type:"change"},nc={type:"start"},Jd={type:"end"},fa=new yo,Qd=new Hi,oE=Math.cos(70*Zc.DEG2RAD);class aE extends Ds{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",he),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zd),i.update(),r=s.NONE},this.update=function(){const y=new U,G=new jt().setFromUnitVectors(e.up,new U(0,1,0)),q=G.clone().invert(),te=new U,fe=new jt,Pe=new U,qe=2*Math.PI;return function(Rt=null){const Je=i.object.position;y.copy(Je).sub(i.target),y.applyQuaternion(G),a.setFromVector3(y),i.autoRotate&&r===s.NONE&&L(x(Rt)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Lt=i.minAzimuthAngle,_t=i.maxAzimuthAngle;isFinite(Lt)&&isFinite(_t)&&(Lt<-Math.PI?Lt+=qe:Lt>Math.PI&&(Lt-=qe),_t<-Math.PI?_t+=qe:_t>Math.PI&&(_t-=qe),Lt<=_t?a.theta=Math.max(Lt,Math.min(_t,a.theta)):a.theta=a.theta>(Lt+_t)/2?Math.max(Lt,a.theta):Math.min(_t,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Yt=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=xe(a.radius);else{const Tt=a.radius;a.radius=xe(a.radius*l),Yt=Tt!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(q),Je.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let Tt=null;if(i.object.isPerspectiveCamera){const Kt=y.length();Tt=xe(Kt*l);const xn=Kt-Tt;i.object.position.addScaledVector(E,xn),i.object.updateMatrixWorld(),Yt=!!xn}else if(i.object.isOrthographicCamera){const Kt=new U(F.x,F.y,0);Kt.unproject(i.object);const xn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Yt=xn!==i.object.zoom;const qn=new U(F.x,F.y,0);qn.unproject(i.object),i.object.position.sub(qn).add(Kt),i.object.updateMatrixWorld(),Tt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Tt).add(i.object.position):(fa.origin.copy(i.object.position),fa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(fa.direction))<oE?e.lookAt(i.target):(Qd.setFromNormalAndCoplanarPoint(i.object.up,i.target),fa.intersectPlane(Qd,i.target))))}else if(i.object.isOrthographicCamera){const Tt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),Tt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Yt=!0)}return l=1,A=!1,Yt||te.distanceToSquared(i.object.position)>o||8*(1-fe.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>o?(i.dispatchEvent(Zd),te.copy(i.object.position),fe.copy(i.object.quaternion),Pe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ge),i.domElement.removeEventListener("pointerdown",se),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Kd,c=new Kd;let l=1;const u=new U,d=new De,h=new De,p=new De,_=new De,g=new De,m=new De,f=new De,b=new De,M=new De,E=new U,F=new De;let A=!1;const C=[],R={};let S=!1;function x(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function P(y){const G=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*G)}function L(y){c.theta-=y}function B(y){c.phi-=y}const $=function(){const y=new U;return function(q,te){y.setFromMatrixColumn(te,0),y.multiplyScalar(-q),u.add(y)}}(),ee=function(){const y=new U;return function(q,te){i.screenSpacePanning===!0?y.setFromMatrixColumn(te,1):(y.setFromMatrixColumn(te,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(q),u.add(y)}}(),Y=function(){const y=new U;return function(q,te){const fe=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;y.copy(Pe).sub(i.target);let qe=y.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*q*qe/fe.clientHeight,i.object.matrix),ee(2*te*qe/fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(q*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),ee(te*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ve(y,G){if(!i.zoomToCursor)return;A=!0;const q=i.domElement.getBoundingClientRect(),te=y-q.left,fe=G-q.top,Pe=q.width,qe=q.height;F.x=te/Pe*2-1,F.y=-(fe/qe)*2+1,E.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function xe(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function _e(y){d.set(y.clientX,y.clientY)}function ke(y){ve(y.clientX,y.clientX),f.set(y.clientX,y.clientY)}function nt(y){_.set(y.clientX,y.clientY)}function re(y){h.set(y.clientX,y.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;L(2*Math.PI*p.x/G.clientHeight),B(2*Math.PI*p.y/G.clientHeight),d.copy(h),i.update()}function ue(y){b.set(y.clientX,y.clientY),M.subVectors(b,f),M.y>0?Q(P(M.y)):M.y<0&&K(P(M.y)),f.copy(b),i.update()}function ye(y){g.set(y.clientX,y.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(g),i.update()}function Se(y){ve(y.clientX,y.clientY),y.deltaY<0?K(P(y.deltaY)):y.deltaY>0&&Q(P(y.deltaY)),i.update()}function Fe(y){let G=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),G=!0;break}G&&(y.preventDefault(),i.update())}function Ve(y){if(C.length===1)d.set(y.pageX,y.pageY);else{const G=Ce(y),q=.5*(y.pageX+G.x),te=.5*(y.pageY+G.y);d.set(q,te)}}function Ge(y){if(C.length===1)_.set(y.pageX,y.pageY);else{const G=Ce(y),q=.5*(y.pageX+G.x),te=.5*(y.pageY+G.y);_.set(q,te)}}function ut(y){const G=Ce(y),q=y.pageX-G.x,te=y.pageY-G.y,fe=Math.sqrt(q*q+te*te);f.set(0,fe)}function N(y){i.enableZoom&&ut(y),i.enablePan&&Ge(y)}function I(y){i.enableZoom&&ut(y),i.enableRotate&&Ve(y)}function O(y){if(C.length==1)h.set(y.pageX,y.pageY);else{const q=Ce(y),te=.5*(y.pageX+q.x),fe=.5*(y.pageY+q.y);h.set(te,fe)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;L(2*Math.PI*p.x/G.clientHeight),B(2*Math.PI*p.y/G.clientHeight),d.copy(h)}function X(y){if(C.length===1)g.set(y.pageX,y.pageY);else{const G=Ce(y),q=.5*(y.pageX+G.x),te=.5*(y.pageY+G.y);g.set(q,te)}m.subVectors(g,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(g)}function W(y){const G=Ce(y),q=y.pageX-G.x,te=y.pageY-G.y,fe=Math.sqrt(q*q+te*te);b.set(0,fe),M.set(0,Math.pow(b.y/f.y,i.zoomSpeed)),Q(M.y),f.copy(b);const Pe=(y.pageX+G.x)*.5,qe=(y.pageY+G.y)*.5;ve(Pe,qe)}function ie(y){i.enableZoom&&W(y),i.enablePan&&X(y)}function ne(y){i.enableZoom&&W(y),i.enableRotate&&O(y)}function se(y){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",v)),!be(y)&&(We(y),y.pointerType==="touch"?Ae(y):D(y)))}function w(y){i.enabled!==!1&&(y.pointerType==="touch"?ae(y):V(y))}function v(y){switch(Be(y),C.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(Jd),r=s.NONE;break;case 1:const G=C[0],q=R[G];Ae({pointerId:G,pageX:q.x,pageY:q.y});break}}function D(y){let G;switch(y.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Os.DOLLY:if(i.enableZoom===!1)return;ke(y),r=s.DOLLY;break;case Os.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;nt(y),r=s.PAN}else{if(i.enableRotate===!1)return;_e(y),r=s.ROTATE}break;case Os.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;_e(y),r=s.ROTATE}else{if(i.enablePan===!1)return;nt(y),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(nc)}function V(y){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;re(y);break;case s.DOLLY:if(i.enableZoom===!1)return;ue(y);break;case s.PAN:if(i.enablePan===!1)return;ye(y);break}}function Z(y){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(y.preventDefault(),i.dispatchEvent(nc),Se(z(y)),i.dispatchEvent(Jd))}function z(y){const G=y.deltaMode,q={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(G){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return y.ctrlKey&&!S&&(q.deltaY*=10),q}function ce(y){y.key==="Control"&&(S=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(y){y.key==="Control"&&(S=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function he(y){i.enabled===!1||i.enablePan===!1||Fe(y)}function Ae(y){switch(He(y),C.length){case 1:switch(i.touches.ONE){case Bs.ROTATE:if(i.enableRotate===!1)return;Ve(y),r=s.TOUCH_ROTATE;break;case Bs.PAN:if(i.enablePan===!1)return;Ge(y),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Bs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(y),r=s.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(y),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(nc)}function ae(y){switch(He(y),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;O(y),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;X(y),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ie(y),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ne(y),i.update();break;default:r=s.NONE}}function ge(y){i.enabled!==!1&&y.preventDefault()}function We(y){C.push(y.pointerId)}function Be(y){delete R[y.pointerId];for(let G=0;G<C.length;G++)if(C[G]==y.pointerId){C.splice(G,1);return}}function be(y){for(let G=0;G<C.length;G++)if(C[G]==y.pointerId)return!0;return!1}function He(y){let G=R[y.pointerId];G===void 0&&(G=new De,R[y.pointerId]=G),G.set(y.pageX,y.pageY)}function Ce(y){const G=y.pointerId===C[0]?C[1]:C[0];return R[G]}i.domElement.addEventListener("contextmenu",ge),i.domElement.addEventListener("pointerdown",se),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",Z,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}const lE=ri({__name:"ThreeDDiagram",props:{nodes:{},edges:{},title:{}},setup(n){const e=n,t=Bt(null),i={client:14807014,gateway:15715176,service:2759236,storage:854048,infra:3816768},s={client:10528932,gateway:15715176,service:11450291,storage:15715176,infra:6975600};function r(h,p,_){const m=p?128:80,f=document.createElement("canvas");f.width=512,f.height=m;const b=f.getContext("2d"),M=_==="gateway"?"#EFCB68":_==="client"?"#E1EFE6":"#AEB7B3";b.clearRect(0,0,512,m),b.fillStyle=M,b.font='bold 36px "JetBrains Mono", monospace',b.textAlign="center",b.textBaseline="middle",b.fillText(h,512/2,p?m*.38:m/2),p&&(b.fillStyle="rgba(174,183,179,0.75)",b.font='22px "JetBrains Mono", monospace',b.fillText(p.split(`
`)[0],512/2,m*.68),p.includes(`
`)&&b.fillText(p.split(`
`)[1],512/2,m*.85));const E=new kp(f);E.needsUpdate=!0;const F=new Bp({map:E,transparent:!0,depthTest:!1}),A=new Wb(F),C=512/m;return A.scale.set(C*.55,.55,1),A}function o(h){const p=new Ms;p.position.set(h.x,h.y,h.z);const _=new Pr(1.1,.52,.18),g=new _i({color:i[h.type]??2759236,transparent:!0,opacity:h.type==="storage"?.85:.9,roughness:.6,metalness:.2}),m=new Ot(_,g);p.add(m);const f=new qb(_),b=new qi({color:s[h.type]??11450291,transparent:!0,opacity:.7}),M=new Xa(f,b);p.add(M);const E=r(h.label,h.sublabel,h.type);return E.position.set(0,.55,0),p.add(E),p}function a(h,p){const _=[h,p],g=new Ut().setFromPoints(_),m=new Yb({color:11450291,dashSize:.12,gapSize:.08,transparent:!0,opacity:.4}),f=new Qc(g,m);return f.computeLineDistances(),f}function c(h,p){const _=[h,p],g=new Ut().setFromPoints(_),m=new qi({color:15715176,transparent:!0,opacity:.35});return new Qc(g,m)}let l=null,u;function d(){const h=t.value;if(!h)return;const p=h.clientWidth,_=h.clientHeight,g=new Hu,m=new un(50,p/_,.01,100);l=new zu({alpha:!0,antialias:!0}),l.setSize(p,_),l.setPixelRatio(window.devicePixelRatio),h.appendChild(l.domElement),g.add(new qu(16777215,.6));const f=new qa(15715176,.8);f.position.set(3,5,3),g.add(f);const b=new qa(14807014,.3);b.position.set(-3,-2,-2),g.add(b);const M=new aE(m,l.domElement);M.enableDamping=!0,M.dampingFactor=.06,M.enablePan=!1,M.minDistance=2,M.maxDistance=14,M.autoRotate=!0,M.autoRotateSpeed=.4;const E=new Map;for(const P of e.nodes){const L=o(P);g.add(L),E.set(P.id,{group:L,data:P})}for(const P of e.edges){const L=E.get(P.from),B=E.get(P.to);if(!L||!B)continue;const $=new U(L.data.x,L.data.y,L.data.z),ee=new U(B.data.x,B.data.y,B.data.z),Y=P.dashed?a($,ee):c($,ee);g.add(Y)}const F=e.nodes.map(P=>new U(P.x,P.y,P.z)),A=new Qi;F.forEach(P=>A.expandByPoint(P));const C=new U;A.getCenter(C);const R=new es;A.getBoundingSphere(R),m.position.set(C.x,C.y,C.z+R.radius*2.2),M.target.copy(C),M.update();const S=()=>{if(!h||!l)return;const P=h.clientWidth,L=h.clientHeight;m.aspect=P/L,m.updateProjectionMatrix(),l.setSize(P,L)};window.addEventListener("resize",S),l.domElement.addEventListener("pointerdown",()=>{M.autoRotate=!1});const x=()=>{u=requestAnimationFrame(x),M.update(),l.render(g,m)};x(),h.__cleanup=()=>{cancelAnimationFrame(u),window.removeEventListener("resize",S),M.dispose(),l==null||l.dispose(),l==null||l.domElement.remove(),l=null,g.clear()}}return Is(()=>d()),Rr(()=>{var p;const h=t.value;(p=h==null?void 0:h.__cleanup)==null||p.call(h)}),eo([()=>e.nodes,()=>e.edges],()=>{var p;const h=t.value;(p=h==null?void 0:h.__cleanup)==null||p.call(h),l=null,d()},{deep:!0}),(h,p)=>(it(),ht("div",{ref_key:"containerRef",ref:t,class:"diagram-3d-container"},null,512))}}),cE=oi(lE,[["__scopeId","data-v-38e9357d"]]),uE={title:"Multigraft Architecture",nodes:[{id:"client",label:"Client",type:"client",x:0,y:2.6,z:0,sublabel:"psql / pg driver"},{id:"pgserver",label:"PSQL Server",type:"gateway",x:0,y:1.5,z:0,sublabel:"Postgres wire protocol · :5433"},{id:"sqlparser",label:"SQL Parser",type:"service",x:-1.6,y:.4,z:0,sublabel:"lex · parse · AST"},{id:"engine",label:"Engine",type:"service",x:0,y:.4,z:0,sublabel:"open/read/write/scan facade"},{id:"mvcc",label:"MVCC Manager",type:"service",x:1.6,y:.4,z:0,sublabel:"txn lifecycle · isolation"},{id:"lsm",label:"LSM Engine",type:"storage",x:-2.2,y:-.9,z:0,sublabel:"MemTable + SSTable"},{id:"btree",label:"B+Tree Engine",type:"storage",x:-.6,y:-1,z:-.3,sublabel:"buffer pool + pages"},{id:"vector",label:"Vector Engine",type:"storage",x:.9,y:-1,z:-.3,sublabel:"HNSW k-NN index"},{id:"wal",label:"WAL",type:"storage",x:2.4,y:-.9,z:0,sublabel:"durability log"},{id:"raftcore",label:"Raft Core",type:"gateway",x:-1.6,y:-2.4,z:.6,sublabel:"election · log replication"},{id:"shards",label:"Shard Registry",type:"infra",x:0,y:-2.4,z:.9,sublabel:"region-aware consensus groups"},{id:"peer",label:"Peer Nodes",type:"infra",x:1.8,y:-2.4,z:.6,sublabel:"raft wire · separate port"}],edges:[{from:"client",to:"pgserver"},{from:"pgserver",to:"sqlparser"},{from:"pgserver",to:"engine"},{from:"sqlparser",to:"engine"},{from:"engine",to:"mvcc"},{from:"mvcc",to:"lsm"},{from:"mvcc",to:"btree"},{from:"mvcc",to:"vector"},{from:"mvcc",to:"wal",label:"write-ahead"},{from:"engine",to:"raftcore",label:"propose DML",dashed:!0},{from:"raftcore",to:"shards"},{from:"shards",to:"peer",label:"region placement",dashed:!0},{from:"peer",to:"raftcore",label:"quorum ack",dashed:!0}]},hE={title:"P2P Video Streaming",nodes:[{id:"client1",label:"Client A",type:"client",x:-2.5,y:1.2,z:.5,sublabel:"jitter buffer"},{id:"client2",label:"Client B",type:"client",x:-2.5,y:-.4,z:.5,sublabel:"jitter buffer"},{id:"bs",label:"Bootstrapper",type:"gateway",x:0,y:2,z:0,sublabel:"peer discovery"},{id:"pn1",label:"Presence N1",type:"service",x:-1.2,y:.4,z:-.5,sublabel:"routing table"},{id:"pn2",label:"Presence N2",type:"service",x:.4,y:.4,z:-.5,sublabel:"routing table"},{id:"pn3",label:"Presence N3",type:"service",x:1.8,y:.4,z:-.5,sublabel:"routing table"},{id:"router",label:"Dist. Vector",type:"service",x:.4,y:-.8,z:-.5,sublabel:"Bellman-Ford"},{id:"server",label:"Video Server",type:"storage",x:.4,y:-2,z:0,sublabel:"stream source"}],edges:[{from:"client1",to:"bs",label:"join",dashed:!0},{from:"client2",to:"bs",label:"join",dashed:!0},{from:"bs",to:"pn1",label:"assign node"},{from:"bs",to:"pn2"},{from:"bs",to:"pn3"},{from:"pn1",to:"pn2",label:"QUIC"},{from:"pn2",to:"pn3",label:"QUIC"},{from:"pn1",to:"router"},{from:"pn2",to:"router"},{from:"pn3",to:"router"},{from:"router",to:"server",label:"RTP/UDP"},{from:"client1",to:"pn1",label:"stream",dashed:!0},{from:"client2",to:"pn2",label:"stream",dashed:!0}]},dE={title:"Raft Consensus",nodes:[{id:"maelstrom",label:"Maelstrom",type:"infra",x:-2.8,y:0,z:0,sublabel:"fault injection"},{id:"main",label:"main.go",type:"gateway",x:-1.2,y:0,z:0,sublabel:"msg dispatcher"},{id:"follower",label:"Follower",type:"service",x:.6,y:1.4,z:.6,sublabel:"heartbeat + vote"},{id:"candidate",label:"Candidate",type:"service",x:.6,y:0,z:.6,sublabel:"RequestVote RPCs"},{id:"leader",label:"Leader",type:"gateway",x:.6,y:-1.4,z:.6,sublabel:"AppendEntries"},{id:"node",label:"node.go",type:"service",x:2.2,y:0,z:0,sublabel:"persistent state"},{id:"kvstore",label:"KV Store",type:"storage",x:3.5,y:.8,z:0,sublabel:"read/write/CAS"},{id:"log",label:"Raft Log",type:"storage",x:3.5,y:-.8,z:0,sublabel:"append-only"}],edges:[{from:"maelstrom",to:"main",label:"STDIN"},{from:"main",to:"follower",label:"dispatch"},{from:"main",to:"candidate",label:"dispatch"},{from:"main",to:"leader",label:"dispatch"},{from:"follower",to:"candidate",label:"timeout",dashed:!0},{from:"candidate",to:"leader",label:"majority",dashed:!0},{from:"candidate",to:"follower",label:"split",dashed:!0},{from:"leader",to:"follower",label:"crash",dashed:!0},{from:"follower",to:"node"},{from:"candidate",to:"node"},{from:"leader",to:"node"},{from:"node",to:"kvstore"},{from:"node",to:"log"},{from:"leader",to:"log",label:"append"}]},fE={title:"Picturas Microservices",nodes:[{id:"web",label:"Vue 3 SPA",type:"client",x:0,y:3.2,z:0,sublabel:"picturas_web · Vite + Pinia"},{id:"apigw",label:"API Gateway",type:"gateway",x:-.9,y:2,z:0,sublabel:"REST · JWT · rate limit"},{id:"wsgw",label:"WS Gateway",type:"gateway",x:.9,y:2,z:0,sublabel:"Socket.IO push"},{id:"users",label:"users-ms",type:"service",x:-2.6,y:.7,z:0,sublabel:"auth + profile"},{id:"projects",label:"projects-ms",type:"service",x:-.9,y:.7,z:0,sublabel:"pipeline CRUD"},{id:"subs",label:"subscriptions-ms",type:"service",x:.6,y:.7,z:0,sublabel:"Stripe billing"},{id:"orch",label:"orchestrator-ms",type:"service",x:2.6,y:.7,z:-.3,sublabel:"pipeline coordinator"},{id:"rabbitmq",label:"RabbitMQ",type:"infra",x:3.4,y:-.7,z:.6,sublabel:"per-filter queues + filters-exchange"},{id:"filters",label:"Filter Workers",type:"service",x:1.9,y:-1.4,z:-1,sublabel:"16+ services · sharp/OCR/etc."},{id:"nfs",label:"NFS (Filestore)",type:"storage",x:.6,y:-2.6,z:-.5,sublabel:"shared scratch mount"},{id:"minio",label:"MinIO / S3",type:"storage",x:-.9,y:-2.6,z:0,sublabel:"durable originals + results"},{id:"mongo",label:"MongoDB",type:"storage",x:-2.6,y:-2.6,z:0,sublabel:"per-service databases"},{id:"redis",label:"Redis",type:"infra",x:-2.8,y:3,z:-.5,sublabel:"rate limit · ws adapter · pipeline state"}],edges:[{from:"web",to:"apigw"},{from:"web",to:"wsgw",label:"socket.io",dashed:!0},{from:"apigw",to:"users"},{from:"apigw",to:"projects"},{from:"apigw",to:"subs"},{from:"apigw",to:"redis",label:"rate limit"},{from:"wsgw",to:"redis",label:"socket adapter",dashed:!0},{from:"users",to:"mongo"},{from:"projects",to:"mongo"},{from:"subs",to:"mongo"},{from:"projects",to:"minio",label:"store original"},{from:"projects",to:"nfs",label:"stage image"},{from:"projects",to:"rabbitmq",label:"first filter msg"},{from:"rabbitmq",to:"filters",label:"per-filter queue"},{from:"filters",to:"nfs",label:"read/write file"},{from:"filters",to:"rabbitmq",label:"filters-exchange",dashed:!0},{from:"rabbitmq",to:"orch",label:"completion event"},{from:"orch",to:"redis",label:"pipeline state"},{from:"orch",to:"rabbitmq",label:"next stage",dashed:!0},{from:"orch",to:"minio",label:"zipped result",dashed:!0},{from:"rabbitmq",to:"wsgw",label:"notification_queue",dashed:!0}]},pE={multigraft:uE,videostream:hE,raft:dE,picturas:fE},ts=n=>(Ar("data-v-ffae2e51"),n=n(),Cr(),n),mE={class:"modal-header"},gE={class:"min-w-0 flex-1"},_E={class:"modal-title"},vE={class:"modal-meta"},xE={class:"flex items-center gap-4 flex-shrink-0"},yE=["href"],ME=ts(()=>le("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-3 w-3"},[le("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"})],-1)),SE=ts(()=>le("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"h-5 w-5"},[le("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),bE=[SE],EE=ts(()=>le("div",{class:"modal-divider"},null,-1)),wE={class:"modal-body"},TE={class:"modal-left"},AE=["innerHTML"],CE={key:0,class:"mt-6"},RE=ts(()=>le("p",{class:"section-label mb-3"},"Architecture Notes",-1)),PE={class:"key-points"},LE=ts(()=>le("span",{class:"key-point-marker"},"▸",-1)),IE={class:"mt-6"},DE=ts(()=>le("p",{class:"section-label mb-3"},"Tech Stack",-1)),UE={class:"flex flex-wrap gap-2"},NE={class:"modal-right"},FE={class:"diagram-header"},OE={class:"section-label"},BE=ts(()=>le("p",{class:"diagram-hint"},"drag to rotate · scroll to zoom",-1)),zE={class:"diagram-wrapper"},kE={key:1,class:"no-diagram"},HE=ts(()=>le("p",{class:"text-ash font-mono text-sm"},"No diagram available.",-1)),VE=[HE],GE=ri({__name:"ProjectModal",props:{project:{},sourceRect:{}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=Bt(!1),r=Bt(!1),o=An(()=>{var u,d;const l=(d=(u=t.project)==null?void 0:u.detail)==null?void 0:d.diagramId;return l?pE[l]??null:null});eo(()=>t.project,async l=>{l&&t.sourceRect&&(s.value=!1,r.value=!1,await pu(),requestAnimationFrame(()=>{s.value=!0,setTimeout(()=>{r.value=!0},320)}))});function a(){r.value=!1,s.value=!1,setTimeout(()=>i("close"),460)}function c(l){l.key==="Escape"&&a()}return Is(()=>window.addEventListener("keydown",c)),Rr(()=>window.removeEventListener("keydown",c)),(l,u)=>{var d,h,p;return it(),Ts(ep,{to:"body"},[l.project?(it(),ht("div",{key:0,class:ii(["modal-overlay",{expanded:s.value}]),style:vi(!s.value&&l.sourceRect?{top:l.sourceRect.top+"px",left:l.sourceRect.left+"px",width:l.sourceRect.width+"px",height:l.sourceRect.height+"px",borderRadius:"8px"}:{})},[le("div",{class:ii(["modal-content",{visible:r.value}])},[le("div",mE,[le("div",gE,[le("h2",_E,Ft(l.project.title),1),le("p",vE,Ft(l.project.role)+" · "+Ft(l.project.date),1)]),le("div",xE,[l.project.link?(it(),ht("a",{key:0,href:l.project.link,target:"_blank",class:"modal-link",onClick:u[0]||(u[0]=M_(()=>{},["stop"]))},[xu(" GitHub "),ME],8,yE)):Pn("",!0),le("button",{class:"close-btn",onClick:a,"aria-label":"Close"},bE)])]),EE,le("div",wE,[le("div",TE,[le("p",{class:"modal-description",innerHTML:l.project.description},null,8,AE),(h=(d=l.project.detail)==null?void 0:d.keyPoints)!=null&&h.length?(it(),ht("div",CE,[RE,le("ul",PE,[(it(!0),ht(zt,null,xr(l.project.detail.keyPoints.slice(0,4),(_,g)=>(it(),ht("li",{key:g,class:"key-point"},[LE,le("span",null,Ft(_),1)]))),128))])])):Pn("",!0),le("div",IE,[DE,le("div",UE,[(it(!0),ht(zt,null,xr(l.project.skills,_=>(it(),ht("span",{key:_,class:"skill-badge"},Ft(_),1))),128))])])]),le("div",NE,[le("div",FE,[le("p",OE,Ft(((p=o.value)==null?void 0:p.title)??"Architecture"),1),BE]),le("div",zE,[o.value&&r.value?(it(),Ts(cE,{key:0,nodes:o.value.nodes,edges:o.value.edges,title:o.value.title},null,8,["nodes","edges","title"])):o.value?Pn("",!0):(it(),ht("div",kE,VE))])])])],2)],6)):Pn("",!0)])}}}),WE=oi(GE,[["__scopeId","data-v-ffae2e51"]]),XE=/^[og]\s*(.+)?/,jE=/^mtllib /,qE=/^usemtl /,$E=/^usemap /,ef=/\s+/,tf=new U,ic=new U,nf=new U,sf=new U,Tn=new U,pa=new Ze;function YE(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;tf.fromArray(s,e),ic.fromArray(s,t),nf.fromArray(s,i),Tn.subVectors(nf,ic),sf.subVectors(tf,ic),Tn.cross(sf),Tn.normalize(),r.push(Tn.x,Tn.y,Tn.z),r.push(Tn.x,Tn.y,Tn.z),r.push(Tn.x,Tn.y,Tn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,c,l){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),p=this.parseVertexIndex(i,u);if(this.addVertex(d,h,p),this.addColor(d,h,p),a!==void 0&&a!==""){const _=this.normals.length;d=this.parseNormalIndex(a,_),h=this.parseNormalIndex(c,_),p=this.parseNormalIndex(l,_),this.addNormal(d,h,p)}else this.addFaceNormal(d,h,p);if(s!==void 0&&s!==""){const _=this.uvs.length;d=this.parseUVIndex(s,_),h=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(d,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class Gp extends Mo{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new Qb(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new YE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,c=i.length;a<c;a++){const l=i[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const d=l.split(ef);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(pa.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(pa.r,pa.g,pa.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(ef),p=[];for(let g=0,m=h.length;g<m;g++){const f=h[g];if(f.length>0){const b=f.split("/");p.push(b)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const f=p[g],b=p[g+1];t.addFace(_[0],f[0],b[0],_[1],f[1],b[1],_[2],f[2],b[2])}}else if(u==="l"){const d=l.substring(1).trim().split(" ");let h=[];const p=[];if(l.indexOf("/")===-1)h=d;else for(let _=0,g=d.length;_<g;_++){const m=d[_].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(h,p)}else if(u==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((s=XE.exec(l))!==null){const d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(qE.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(jE.test(l))t.materialLibraries.push(l.substring(7).trim());else if($E.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=l.split(" "),s.length>1){const h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Ms;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,d=l.materials,h=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new Ut;g.setAttribute("position",new yt(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new yt(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new yt(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new yt(u.uvs,2));const m=[];for(let b=0,M=d.length;b<M;b++){const E=d[b],F=E.name+"_"+E.smooth+"_"+_;let A=t.materials[F];if(this.materials!==null){if(A=this.materials.create(E.name),h&&A&&!(A instanceof qi)){const C=new qi;jn.prototype.copy.call(C,A),C.color.copy(A.color),A=C}else if(p&&A&&!(A instanceof Ss)){const C=new Ss({size:10,sizeAttenuation:!1});jn.prototype.copy.call(C,A),C.color.copy(A.color),C.map=A.map,A=C}}A===void 0&&(h?A=new qi:p?A=new Ss({size:1,sizeAttenuation:!1}):A=new $b,A.name=E.name,A.flatShading=!E.smooth,A.vertexColors=_,t.materials[F]=A),m.push(A)}let f;if(m.length>1){for(let b=0,M=d.length;b<M;b++){const E=d[b];g.addGroup(E.groupStart,E.groupCount,b)}h?f=new Xa(g,m):p?f=new oo(g,m):f=new Ot(g,m)}else h?f=new Xa(g,m[0]):p?f=new oo(g,m[0]):f=new Ot(g,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const a=new Ss({size:1,sizeAttenuation:!1}),c=new Ut;c.setAttribute("position",new yt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new yt(t.colors,3)),a.vertexColors=!0);const l=new oo(c,a);r.add(l)}return r}}const KE=ri({__name:"PlaneWorld",props:{paused:{type:Boolean}},emits:["enterGame"],setup(n,{emit:e}){const t=n,i=e,s=Bt(null);return Is(()=>{const r=s.value;let o,a=null,c=null;const l=new Hu,u=new un(60,r.clientWidth/r.clientHeight,.1,1e3);u.position.z=3,a=new zu({alpha:!0,antialias:!0}),a.setClearAlpha(0),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(r.clientWidth,r.clientHeight),r.appendChild(a.domElement);const d=()=>{u.aspect=r.clientWidth/r.clientHeight,u.updateProjectionMatrix(),a.setSize(r.clientWidth,r.clientHeight)};window.addEventListener("resize",d);const h=new qa(16777215,.4);h.position.set(5,5,5),l.add(h),l.add(new qu(16777215,.2));const p=new nE(15715176,.4,8);p.position.set(-2,1,2),l.add(p);const _=new rE(4,6,15715176,15715176);_.material.opacity=.02,_.material.transparent=!0,_.position.y=-.8,l.add(_);const g=[],m=[],f=6,b=4;for(let L=0;L<2;L++){const B=new ll({color:15715176,transparent:!0,opacity:0,side:ni,depthWrite:!1}),$=new Ot(new Xu(.98,1,64),B);$.rotation.x=-Math.PI/2,$.position.y=-.79,l.add($),g.push($),m.push(L*(f/2))}const M=new Hp().load("f22.png");new Gp().load("f22.obj",L=>{L.traverse(B=>{B instanceof Ot&&(B.material=new _i({map:M}))}),L.scale.set(.4,.4,.4),l.add(L),c=L});let E=0,F=0,A=0,C=0;const R=L=>{E=L.clientX/window.innerWidth*2-1,F=-(L.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",R);const S=L=>{var B;if((L.key==="w"||L.key==="W")&&!t.paused){const $=(B=s.value)==null?void 0:B.getBoundingClientRect();$&&i("enterGame",$)}};window.addEventListener("keydown",S);let x=performance.now();const P=()=>{o=requestAnimationFrame(P);const L=performance.now(),B=Math.min((L-x)/1e3,.05);x=L;for(let $=0;$<g.length;$++){m[$]+=B;const ee=m[$]%f/f,Y=Math.max(.001,ee*b);g[$].scale.set(Y,Y,1);const Q=.2;g[$].material.opacity=ee<.1?ee/.1*Q:(1-ee)/.9*Q}if(c){A+=(F*.8-A)*.02,C+=(E*.8-C)*.02;const ee=Math.PI/12;A=Zc.clamp(A,-ee,ee),C=Zc.clamp(C,-ee,ee),c.rotation.x+=(A-c.rotation.x)*.02,c.rotation.y+=(C-c.rotation.y)*.02;const Y=new U(0,1.5,1.5);u.position.lerp(c.position.clone().add(Y),.03),u.lookAt(c.position)}a.render(l,u)};P(),r.__cleanup=()=>{cancelAnimationFrame(o),window.removeEventListener("resize",d),window.removeEventListener("mousemove",R),window.removeEventListener("keydown",S),a==null||a.dispose(),a==null||a.domElement.remove(),a=null,l.clear()}}),Rr(()=>{var r,o;(o=(r=s.value)==null?void 0:r.__cleanup)==null||o.call(r)}),(r,o)=>(it(),ht("div",{ref_key:"containerRef",ref:s,class:"showcase-canvas"},null,512))}}),ZE=oi(KE,[["__scopeId","data-v-da247cea"]]),ns=n=>(Ar("data-v-3a9e12cb"),n=n(),Cr(),n),JE={key:0,class:"loading-screen"},QE=ns(()=>le("div",{class:"radar"},null,-1)),e1=ns(()=>le("span",{class:"loading-text"},"INITIALIZING AVIONICS",-1)),t1=[QE,e1],n1={key:0,class:"hud-container"},i1=ns(()=>le("div",{class:"crosshair"},[le("div",{class:"crosshair-center"})],-1)),s1={class:"hud"},r1={class:"hud-spd"},o1=ns(()=>le("span",{class:"lbl"},"SPD",-1)),a1=ns(()=>le("span",{class:"unit"},"kn",-1)),l1={class:"hud-bar-row"},c1=ns(()=>le("span",{class:"lbl"},"HP",-1)),u1={class:"bar"},h1={class:"hud-bar-row"},d1=ns(()=>le("span",{class:"lbl"},"THR",-1)),f1={class:"bar"},p1={class:"hud-bar-row"},m1={class:"bar"},g1=ns(()=>le("p",{class:"keys"}," L-CLICK SHOOT · MOUSE STEER · A/D YAW · C REAR VIEW · W/S THR · SPC BOOST · ESC EXIT ",-1)),_1=50,v1=ri({__name:"GameWorld",props:{sourceRect:{}},emits:["exit"],setup(n,{emit:e}){const t=n,i=e,s=Bt(null),r=Bt(!1),o=Bt(!1),a=Bt(!0),c=Bt(0),l=Bt(0),u=Bt(!0),d=Bt(100),h=Bt([]),p=(R,S,x)=>R+(S-R)*x,_=(R,S,x)=>Math.max(S,Math.min(x,R)),g={sand:[.82,.75,.53],grass:[.35,.58,.25],forest:[.18,.43,.18],rock:[.45,.42,.4],snow:[.95,.95,.95],scorch:[.15,.12,.1]};function m(R,S,x){return x=_(x,0,1),[R[0]+(S[0]-R[0])*x,R[1]+(S[1]-R[1])*x,R[2]+(S[2]-R[2])*x]}const f=[];function b(R,S){return Math.max(-.6,(Math.sin(R*.055)*Math.cos(S*.07)*5.5+Math.sin(R*.18+1.7)*Math.sin(S*.15+.9)*3+Math.sin(R*.4+.3)*Math.cos(S*.36+1.5)*1.4+Math.abs(Math.sin(R*.11+S*.09))*2.2+Math.sin(R*.85)*Math.sin(S*.72)*.5)*.85)}function M(R,S){let x=b(R,S);for(let P=0;P<f.length;P++){const L=f[P],B=(R-L.x)*(R-L.x)+(S-L.z)*(S-L.z);if(B<L.r*L.r){const $=Math.sqrt(B),ee=Math.cos($/L.r*(Math.PI/2));x-=L.d*ee*ee}}return x}function E(R,S,x){for(let P=0;P<f.length;P++){const L=f[P];if((S-L.x)*(S-L.x)+(x-L.z)*(x-L.z)<L.r*.65*(L.r*.65))return g.scorch}return R>5?g.snow:R>3.5?m(g.rock,g.snow,(R-3.5)/1.5):R>1.8?m(g.forest,g.rock,(R-1.8)/1.7):R>.8?m(g.grass,g.forest,(R-.8)/1):R>.4?m(g.sand,g.grass,(R-.4)/.4):g.sand}function F(){const R=document.createElement("canvas");R.width=64,R.height=64;const S=R.getContext("2d");if(S){const x=S.createRadialGradient(32,32,0,32,32,32);x.addColorStop(0,"rgba(255,255,255,1)"),x.addColorStop(.3,"rgba(255,255,255,0.8)"),x.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=x,S.fillRect(0,0,64,64)}return new kp(R)}let A=null;function C(R){let S;f.length=0;const x=new zu({antialias:!0});x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setClearColor(6992639),x.setSize(R.clientWidth,R.clientHeight),R.appendChild(x.domElement);const P=new un(60,R.clientWidth/R.clientHeight,.1,200),L=()=>{P.aspect=R.clientWidth/R.clientHeight,P.updateProjectionMatrix(),x.setSize(R.clientWidth,R.clientHeight)};window.addEventListener("resize",L);const B=new Hu;B.fog=new ku(6992639,60,150),B.add(new qu(16777215,.55));const $=new qa(16773341,1.5);$.position.set(100,150,50),B.add($);const ee=320,Y=80,Q=.35,K=new wr(ee,ee);K.rotateX(-Math.PI/2);const ve=new Ot(K,new _i({color:1144746,transparent:!0,opacity:.8,roughness:.1,metalness:.8}));B.add(ve);const xe=new wr(ee,ee,Y,Y);xe.rotateX(-Math.PI/2);const _e=xe.attributes.position;xe.setAttribute("color",new qt(new Float32Array(_e.count*3),3));const ke=new Ot(xe,new _i({vertexColors:!0,roughness:.9,metalness:.05}));B.add(ke);const nt=40,re=nt*nt,ue=new Ct,ye=new _o(.3,.5,1.5,5);ye.translate(0,.75,0);const Se=new Vu(1.6,4,6);Se.translate(0,2.5,0);const Fe=new ra(ye,new _i({color:6045747,roughness:.9}),re),Ve=new ra(Se,new _i({color:3050327,roughness:.8}),re);Fe.frustumCulled=!1,Ve.frustumCulled=!1,B.add(Fe),B.add(Ve);let Ge=-9999,ut=-9999;const N=ee/Y;function I(de,pe){let Oe=0;const Ue=nt/2,Ne=ee/nt,Ee=Math.round(de/Ne)*Ne,ot=Math.round(pe/Ne)*Ne;for(let vt=-Ue;vt<Ue;vt++)for(let rt=-Ue;rt<Ue;rt++){const pn=Ee+vt*Ne,Fn=ot+rt*Ne,Fr=Math.sin(pn*12.9898+Fn*78.233)*3.5,Or=Math.cos(pn*39.346+Fn*11.135)*3.5,Yn=pn+Fr,Kn=Fn+Or,Qt=M(Yn,Kn),Fs=Math.abs(Math.sin(Yn*123.456+Kn*321.654));let ci=!1;for(let Xt=0;Xt<f.length;Xt++)if(Math.hypot(Yn-f[Xt].x,Kn-f[Xt].z)<f[Xt].r){ci=!0;break}if(Qt>Q+.15&&Qt<3.2&&Fs>.4&&!ci){const Xt=.6+Fs*.6;ue.position.set(Yn,Qt,Kn),ue.scale.set(Xt,Xt,Xt),ue.rotation.y=Fs*Math.PI*2,ue.updateMatrix(),Fe.setMatrixAt(Oe,ue.matrix),Ve.setMatrixAt(Oe,ue.matrix)}else ue.position.set(0,-10,0),ue.scale.set(0,0,0),ue.updateMatrix(),Fe.setMatrixAt(Oe,ue.matrix),Ve.setMatrixAt(Oe,ue.matrix);Oe++}Fe.instanceMatrix.needsUpdate=!0,Ve.instanceMatrix.needsUpdate=!0}function O(de,pe){const Oe=Math.round(de/N)*N,Ue=Math.round(pe/N)*N;if(Oe===Ge&&Ue===ut)return;Ge=Oe,ut=Ue,ke.position.set(Oe,0,Ue),ve.position.set(Oe,Q,Ue);const Ne=xe.attributes.color;for(let Ee=0;Ee<_e.count;Ee++){const ot=_e.getX(Ee)+Oe,vt=_e.getZ(Ee)+Ue,rt=M(ot,vt);_e.setY(Ee,rt);const pn=E(rt,ot,vt);Ne.setXYZ(Ee,pn[0],pn[1],pn[2])}_e.needsUpdate=!0,Ne.needsUpdate=!0,xe.computeVertexNormals(),I(de,pe)}function X(de,pe,Oe,Ue){f.push({x:de,z:pe,r:Oe,d:Ue}),f.length>_1&&f.shift();const Ne=xe.attributes.color;let Ee=!1;for(let ot=0;ot<_e.count;ot++){const vt=_e.getX(ot)+Ge,rt=_e.getZ(ot)+ut;if(Math.abs(vt-de)<Oe+1.5&&Math.abs(rt-pe)<Oe+1.5){const pn=M(vt,rt);_e.setY(ot,pn);const Fn=E(pn,vt,rt);Ne.setXYZ(ot,Fn[0],Fn[1],Fn[2]),Ee=!0}}Ee&&(_e.needsUpdate=!0,Ne.needsUpdate=!0,xe.computeVertexNormals(),I(z.position.x,z.position.z))}const W=150,ie=new Wu(8,0),ne=new _i({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.85}),se=new ra(ie,ne,W);se.frustumCulled=!1,B.add(se);const w=[],v=400;for(let de=0;de<W;de++)w.push({x:(Math.random()-.5)*v,y:45+Math.random()*40,z:(Math.random()-.5)*v,s:1+Math.random()*2.5});const D=new Ct;function V(de,pe){const Oe=v/2;for(let Ue=0;Ue<W;Ue++){const Ne=w[Ue];let Ee=(de-Ne.x)%v,ot=(pe-Ne.z)%v;Ee>Oe&&(Ee-=v),Ee<-Oe&&(Ee+=v),ot>Oe&&(ot-=v),ot<-Oe&&(ot+=v),D.position.set(de-Ee,Ne.y,pe-ot),D.scale.set(Ne.s,Ne.s*.5,Ne.s),D.updateMatrix(),se.setMatrixAt(Ue,D.matrix)}se.instanceMatrix.needsUpdate=!0}const Z=F(),z=new Ct;z.position.set(0,15,0);let ce=100;B.add(z);let oe=!1,he=null;const Ae=new Hp().load("f22.png");new Gp().load("f22.obj",de=>{de.traverse(pe=>{pe instanceof Ot&&(pe.material=new _i({map:Ae,roughness:.4,metalness:.55}))}),de.scale.set(.7,.7,.7),de.rotation.y=-Math.PI/2,z.add(de),he=de,oe=!0,a.value=!1,Be()});const ae=3,ge=new Ms;B.add(ge);const We=[];function Be(){if(!he)return;const de=new _i({color:13382451,roughness:.4,metalness:.55});for(let pe=0;pe<ae;pe++){const Oe=new Ct,Ue=he.clone();Ue.traverse(Ne=>{Ne instanceof Ot&&(Ne.material=de)}),Oe.add(Ue),ge.add(Oe),We.push({obj:Oe,hp:40,speed:6,active:!1,q:new jt,bank:0,fireTimer:0}),be(We[pe])}}function be(de){de.hp=40,de.active=!0,de.obj.visible=!0,de.speed=Un+Math.random()*(Jt*.7-Un),de.fireTimer=0;const pe=Math.random()*Math.PI*2,Oe=70+Math.random()*50;de.obj.position.set(z.position.x+Math.cos(pe)*Oe,30+Math.random()*20,z.position.z+Math.sin(pe)*Oe),de.q.setFromAxisAngle(new U(0,1,0),pe+Math.PI)}function He(de){if(!oe)return;const pe=new U(0,0,1),Oe=.6,Ue=[];for(let Ne=0;Ne<We.length;Ne++){const Ee=We[Ne];if(!Ee.active)continue;let ot=z.position.clone();const vt=Ee.obj.position.distanceTo(z.position);if(vt<40){const Xt=Ee.obj.position.clone().sub(z.position).normalize();ot.copy(Ee.obj.position).add(Xt.multiplyScalar(60)),ot.y+=20}const rt=M(Ee.obj.position.x,Ee.obj.position.z);Ee.obj.position.y<rt+15&&(ot.y=Ee.obj.position.y+40);const pn=ot.clone().sub(Ee.obj.position).normalize(),Fn=new jt().setFromUnitVectors(pe,pn);Ee.q.slerp(Fn,de*Oe);const Fr=new U(1,0,0).applyQuaternion(Ee.q),Yn=pn.dot(Fr)*-Math.PI*.45;Ee.bank=p(Ee.bank,Yn,de*4),Ee.obj.quaternion.copy(Ee.q).multiply(new jt().setFromAxisAngle(pe,Ee.bank));const Kn=new U(0,0,1).applyQuaternion(Ee.q);Ee.obj.position.addScaledVector(Kn,Ee.speed*de),Ee.obj.position.y<Math.max(rt,Q)+1&&(Ee.obj.position.y=Math.max(rt,Q)+1);const Qt=z.position.clone().sub(Ee.obj.position).normalize(),Fs=Kn.dot(Qt);if(vt>30&&vt<120&&Fs>.98&&Ee.fireTimer<=0){const Xt=z.position.clone().add(new U((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15));je(!0,Ee.obj.position,Xt,Ee.speed,Ee.q),Ee.fireTimer=1.5+Math.random()*1.5}Ee.fireTimer>0&&(Ee.fireTimer-=de);const ci=Ee.obj.position.clone();if(ci.y+=3,ci.project(P),ci.z<1){const Xt=(ci.x*.5+.5)*R.clientWidth,bn=(-(ci.y*.5)+.5)*R.clientHeight,Br=Math.max(0,Ee.hp/40*100);Ue.push({id:Ne,x:Xt,y:bn,hp:Br,visible:!0})}}h.value=Ue}const Ce=400,Ye=new Float32Array(Ce*3),y=new Float32Array(Ce*3),G=new Float32Array(Ce*3),q=new Float32Array(Ce*3),te=new Float32Array(Ce),fe=new Float32Array(Ce);for(let de=0;de<Ce*3;de++)Ye[de]=-999999;const Pe=new Ut;Pe.setAttribute("position",new qt(Ye,3)),Pe.setAttribute("color",new qt(y,3));const qe=new Ss({vertexColors:!0,size:.6,transparent:!0,opacity:1,depthWrite:!1,blending:Fa,sizeAttenuation:!0,fog:!0,map:Z}),wt=new oo(Pe,qe);wt.frustumCulled=!1,B.add(wt);let Rt=0;function Je(de,pe){for(let Ue=0;Ue<25;Ue++){const Ne=Rt;Rt=(Rt+1)%Ce,Ye[Ne*3]=de.x,Ye[Ne*3+1]=de.y,Ye[Ne*3+2]=de.z;let Ee=2+Math.random()*5;const ot=Math.random()*Math.PI*2;let vt=Math.random()*Math.PI*.5;pe==="water"?(Ee=2+Math.random()*4,vt=Math.PI*.3+Math.random()*Math.PI*.2,G[Ne*3]=.2+Math.random()*.3,G[Ne*3+1]=.7+Math.random()*.3,G[Ne*3+2]=1):pe==="dirt"?(G[Ne*3]=1,G[Ne*3+1]=.6+Math.random()*.4,G[Ne*3+2]=.1):(Ee=3+Math.random()*7,vt=(Math.random()-.5)*Math.PI,G[Ne*3]=1,G[Ne*3+1]=.2+Math.random()*.6,G[Ne*3+2]=0),q[Ne*3]=Math.cos(ot)*Math.cos(vt)*Ee,q[Ne*3+1]=Math.sin(vt)*Ee,q[Ne*3+2]=Math.sin(ot)*Math.cos(vt)*Ee,fe[Ne]=.4+Math.random()*.5,te[Ne]=fe[Ne]}}function Lt(de){for(let pe=0;pe<Ce;pe++)if(te[pe]>0)if(te[pe]-=de,te[pe]<=0)Ye[pe*3]=-999999,Ye[pe*3+1]=-999999,Ye[pe*3+2]=-999999;else{Ye[pe*3]+=q[pe*3]*de,Ye[pe*3+1]+=q[pe*3+1]*de,Ye[pe*3+2]+=q[pe*3+2]*de,q[pe*3+1]-=15*de;const Oe=te[pe]/fe[pe];y[pe*3]=G[pe*3]*Oe,y[pe*3+1]=G[pe*3+1]*Oe,y[pe*3+2]=G[pe*3+2]*Oe}Pe.attributes.position.needsUpdate=!0,Pe.attributes.color.needsUpdate=!0}const _t=160,Yt=new Float32Array(_t*3),Tt=new Float32Array(_t*3),Kt=new Float32Array(_t*3),xn=new Float32Array(_t),qn=new Float32Array(_t),$n=new Ut;$n.setAttribute("position",new qt(Yt,3)),$n.setAttribute("color",new qt(Tt,3));const Ir=new Ss({vertexColors:!0,size:.5,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1,blending:Fa,map:Z}),wi=new oo($n,Ir);wi.frustumCulled=!1,wi.renderOrder=999,B.add(wi);function Dr(de){const pe=de%2===0?-.08:.08,Ue=new U(pe,.02,-1).applyQuaternion(z.quaternion).add(z.position);Yt[de*3]=Ue.x,Yt[de*3+1]=Ue.y,Yt[de*3+2]=Ue.z;const Ne=.6+Math.random()*.8,Ee=new U((Math.random()-.5)*.15,(Math.random()-.5)*.12,-Ne).applyQuaternion(z.quaternion);Kt[de*3]=Ee.x,Kt[de*3+1]=Ee.y,Kt[de*3+2]=Ee.z,qn[de]=.04+Math.random()*.06,xn[de]=qn[de],Tt[de*3]=.97,Tt[de*3+1]=.7+Math.random()*.2,Tt[de*3+2]=.03+Math.random()*.06}for(let de=0;de<_t;de++)Dr(de),xn[de]=Math.random()*qn[de];function So(de){for(let pe=0;pe<_t;pe++){if(xn[pe]-=de,xn[pe]<=0){Dr(pe);continue}Yt[pe*3]+=Kt[pe*3]*de,Yt[pe*3+1]+=Kt[pe*3+1]*de,Yt[pe*3+2]+=Kt[pe*3+2]*de;const Oe=xn[pe]/qn[pe];Tt[pe*3+1]=Oe*.65,Tt[pe*3+2]=Oe*.05}$n.attributes.position.needsUpdate=!0,$n.attributes.color.needsUpdate=!0}const Us=100,bo=new _o(.04,.04,2,6);bo.rotateX(Math.PI/2);const ul=new ll({color:16750848}),T=new ra(bo,ul,Us);T.frustumCulled=!1,B.add(T);const k=Array.from({length:Us},()=>({active:!1,pos:new U,vel:new U,life:0,isEnemy:!1})),j=new Ct;j.position.set(0,-999999,0),j.updateMatrix();for(let de=0;de<Us;de++)T.setMatrixAt(de,j.matrix);T.instanceMatrix.needsUpdate=!0;let J=!1,H=0;const me=.08;let Te=1;const Re=new sE,Le=new De(0,0);function Xe(){Re.setFromCamera(Le,P);const de=Re.intersectObject(ke);return de.length>0?de[0].point:Re.ray.at(500,new U)}function je(de,pe,Oe,Ue,Ne){const Ee=k.find(vt=>!vt.active);if(!Ee)return;Ee.active=!0,Ee.life=2,Ee.isEnemy=de;const ot=new U(Te*.35,.05,.5);Te*=-1,Ee.pos.copy(ot).applyQuaternion(Ne).add(pe),Ee.vel.subVectors(Oe,Ee.pos).normalize().multiplyScalar(Ue+200)}function ze(de){const pe=new U(0,0,1);for(let Oe=0;Oe<Us;Oe++){const Ue=k[Oe];if(Ue.active){Ue.life-=de;let Ne=!1;if(Ue.isEnemy){if(Ue.pos.distanceTo(z.position)<4&&(ce-=10,d.value=Math.max(0,ce),Ne=!0,Je(Ue.pos.clone(),"air"),ce<=0)){Je(z.position.clone(),"air"),setTimeout(()=>i("exit"),500),Ue.active=!1;continue}}else for(const rt of We)if(rt.active&&Ue.pos.distanceTo(rt.obj.position)<5){rt.hp-=20,Ne=!0,Je(Ue.pos.clone(),"air"),rt.hp<=0&&(rt.active=!1,rt.obj.visible=!1,Je(rt.obj.position.clone(),"air"),Je(rt.obj.position.clone(),"air"),setTimeout(()=>be(rt),3e3));break}const Ee=M(Ue.pos.x,Ue.pos.z),ot=Ee<Q&&Ue.pos.y<=Q,vt=Ee>=Q&&Ue.pos.y<=Ee;if(Ue.life<=0||ot||vt||Ne){if(Ue.active=!1,j.position.set(0,-999999,0),j.updateMatrix(),T.setMatrixAt(Oe,j.matrix),ot||vt){const rt=Ue.pos.clone();ot&&(rt.y=Q),vt&&(rt.y=Ee),Je(rt,ot?"water":"dirt"),ot||X(rt.x,rt.z,4,1.5)}}else{Ue.pos.addScaledVector(Ue.vel,de),j.position.copy(Ue.pos);const rt=Ue.vel.clone().normalize();j.quaternion.setFromUnitVectors(pe,rt),j.updateMatrix(),T.setMatrixAt(Oe,j.matrix)}}}T.instanceMatrix.needsUpdate=!0}const Ke={};let dt=0,ft=0;const Gt={val:0},st={val:0},Ie={val:0};let Mt=.4;const at=de=>{var Oe,Ue;const pe=de.key.toLowerCase();Ke[pe]=!0,pe==="escape"&&!document.pointerLockElement&&i("exit"),pe===" "&&!li&&Nr<=0&&(li=!0,dl=0,Zu=st.val>=0?1:-1),pe==="w"&&document.pointerLockElement!==x.domElement&&((Ue=(Oe=x.domElement.requestPointerLock())==null?void 0:Oe.catch)==null||Ue.call(Oe,()=>{}))},fn=de=>{Ke[de.key.toLowerCase()]=!1},ai=()=>{document.pointerLockElement!==x.domElement&&x.domElement.requestPointerLock()},Zt=de=>{de.button===0&&document.pointerLockElement===x.domElement&&(J=!0)},Ns=de=>{de.button===0&&(J=!1)},Pt=de=>{document.pointerLockElement===x.domElement&&(ft+=de.movementX*.003,dt+=de.movementY*.003)},Dn=()=>{document.pointerLockElement!==x.domElement&&(J=!1,Ke.c=!1,i("exit"))};window.addEventListener("keydown",at),window.addEventListener("keyup",fn),window.addEventListener("click",ai),window.addEventListener("mousedown",Zt),window.addEventListener("mouseup",Ns),window.addEventListener("mousemove",Pt),window.addEventListener("resize",L),document.addEventListener("pointerlockchange",Dn);const Un=3,Jt=12,Ur=1.2,hl=2.5,Eo=.55,Yu=2.5,Xp=2.5,Nn=new jt;let Ti=Un,Ku=Un,li=!1,dl=0,Nr=0,Zu=1,fl=!1;const Ju=new U(1,0,0),jp=new U(0,1,0),pl=new U(0,0,1);P.position.set(0,15,-6);let Qu=performance.now();const eh=()=>{S=requestAnimationFrame(eh);const de=performance.now(),pe=_((de-Qu)/1e3,0,.05);Qu=de;const Oe=Ke.w,Ue=Ke.s;Oe?Mt=Math.min(1,Mt+.5*.016):Ue&&(Mt=Math.max(0,Mt-.5*.016)),ft=p(ft,0,.04),dt=p(dt,0,.04),ft=_(ft,-1,1),dt=_(dt,-1,1);const Ne=Ke.arrowup?-1:Ke.arrowdown?1:0,Ee=Ke.arrowleft?-1:Ke.arrowright?1:0;if(Gt.val=p(Gt.val,_(Ne+dt,-1,1),.1),st.val=p(st.val,_(Ee+ft,-1,1),.1),Ie.val=p(Ie.val,Ke.a?1:Ke.d?-1:0,.1),!oe){x.render(B,P);return}const ot=li?Jt*1.5:Un+Mt*(Jt-Un);Ku=Ti,Ti=p(Ti,ot,pe*(li?5:2));const vt=pe>0?(Ti-Ku)/pe:0,rt=_(Ti/Un,0,1);if(Nn.multiply(new jt().setFromAxisAngle(jp,Ie.val*Eo*pe*rt)).multiply(new jt().setFromAxisAngle(Ju,Gt.val*Ur*pe*rt)).multiply(new jt().setFromAxisAngle(pl,st.val*hl*pe*rt)).normalize(),li&&(dl+=pe,dl>=Yu&&(li=!1,Nr=Xp),Nn.multiply(new jt().setFromAxisAngle(pl,Math.PI*4/Yu*pe*Zu))),Nr>0&&(Nr-=pe),Math.abs(Gt.val)+Math.abs(st.val)+Math.abs(Ie.val)<.05){const bn=de*.001;Nn.multiply(new jt().setFromAxisAngle(Ju,Math.sin(bn*.5)*.004*pe*60)).multiply(new jt().setFromAxisAngle(pl,Math.sin(bn*.7)*.006*pe*60)).normalize()}const Fn=new U(0,0,1).applyQuaternion(Nn);z.position.addScaledVector(Fn,Ti*pe);const Fr=M(z.position.x,z.position.z),Or=Math.max(Fr,Q);if(z.position.y<Or+.2){i("exit");return}z.position.y=Math.max(z.position.y,Or+.5),z.quaternion.copy(Nn),O(z.position.x,z.position.z),V(z.position.x,z.position.z),He(pe),Lt(pe),So(pe);const Yn=Ke.c;if(J&&H<=0){let bn;Yn?bn=z.position.clone().add(new U(0,0,500).applyQuaternion(Nn)):bn=Xe(),je(!1,z.position,bn,Ti,Nn),H=me}H>0&&(H-=pe),ze(pe);const Kn=_(-vt*.055,-1.8,.4);let Qt=z.position.clone();if(Yn){const bn=new U(0,1.6,6-Kn);Qt.add(bn.applyQuaternion(Nn)),fl?P.position.lerp(Qt,_(pe*15,0,1)):P.position.copy(Qt);const Br=z.position.clone().add(new U(0,.2,-100).applyQuaternion(Nn));P.lookAt(Br)}else{const bn=new U(0,1.6,-(4+Kn));Qt.add(bn.applyQuaternion(Nn));const Br=M(Qt.x,Qt.z),qp=Math.max(Br,Q);Qt.y=Math.max(Qt.y,qp+1.2),fl?P.position.copy(Qt):P.position.lerp(Qt,_(pe*7,0,1));const $p=z.position.clone().add(new U(0,.2,4).applyQuaternion(Nn));P.lookAt($p)}fl=Yn;const Xt=li?75:45+Mt*15;P.fov=p(P.fov,Xt,pe*4),P.updateProjectionMatrix(),Ir.size=.2+(li?.2:Mt*.1),c.value=Math.round(Ti*22),l.value=Math.round(Mt*100),u.value=!li&&Nr<=0,x.render(B,P)};eh(),A=()=>{cancelAnimationFrame(S),window.removeEventListener("keydown",at),window.removeEventListener("keyup",fn),window.removeEventListener("click",ai),window.removeEventListener("mousedown",Zt),window.removeEventListener("mouseup",Ns),window.removeEventListener("mousemove",Pt),window.removeEventListener("resize",L),document.removeEventListener("pointerlockchange",Dn),document.exitPointerLock(),x.dispose(),x.domElement.remove(),B.clear(),A=null}}return Is(async()=>{await pu(),requestAnimationFrame(()=>{r.value=!0,setTimeout(()=>{o.value=!0,C(s.value)},430)})}),Rr(()=>{A==null||A()}),(R,S)=>(it(),Ts(ep,{to:"body"},[le("div",{ref_key:"overlayRef",ref:s,class:ii(["game-overlay",{expanded:r.value}]),style:vi(r.value?{}:{top:t.sourceRect.top+"px",left:t.sourceRect.left+"px",width:t.sourceRect.width+"px",height:t.sourceRect.height+"px",borderRadius:"12px"})},[we(Na,{name:"fade"},{default:It(()=>[a.value?(it(),ht("div",JE,t1)):Pn("",!0)]),_:1}),we(Na,{name:"hud"},{default:It(()=>[o.value&&!a.value?(it(),ht("div",n1,[i1,(it(!0),ht(zt,null,xr(h.value,x=>(it(),ht("div",{key:x.id,class:"enemy-hp-bar",style:vi({left:x.x+"px",top:x.y+"px"})},[le("div",{class:"fill",style:vi({width:x.hp+"%"})},null,4)],4))),128)),le("div",s1,[le("div",r1,[o1,le("span",{class:ii(["val",{hot:l.value>75}])},Ft(c.value),3),a1]),le("div",l1,[c1,le("div",u1,[le("div",{class:"fill hp",style:vi({width:d.value+"%"})},null,4)])]),le("div",h1,[d1,le("div",f1,[le("div",{class:"fill",style:vi({width:l.value+"%"})},null,4)])]),le("div",p1,[le("span",{class:ii(["lbl",{ready:u.value}])},"BST",2),le("div",m1,[le("div",{class:ii(["fill boost",{ready:u.value}])},null,2)])]),g1])])):Pn("",!0)]),_:1})],6)]))}}),x1=oi(v1,[["__scopeId","data-v-3a9e12cb"]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ma={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:o,...a},{slots:c})=>ws("svg",{...ma,width:n||ma.width,height:n||ma.height,stroke:i||ma.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${y1(r??"icon")}`],...a},[...s.map(l=>ws(...l)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=(n,e)=>(t,{slots:i})=>ws(M1,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Sn("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Sn("AwardIcon",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Sn("CirclePlayIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Sn("ContactIcon",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Sn("ContainerIcon",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Sn("DatabaseZapIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Sn("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Sn("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Sn("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Sn("MailCheckIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Sn("MessageCircleMoreIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Sn("SquareKanbanIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Sn("WorkflowIcon",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]),N1=[{id:"edge-ml-inference",title:"Edge ML Inference: NVIDIA Triton on Jetson",role:"Embedded Software Developer Intern",date:"SEP 2025 — Present",description:"Migrated a production computer-vision inference engine to <strong>NVIDIA Triton Inference Server</strong> on Jetson Orin Nano edge devices, cutting end-to-end latency by <strong>34%</strong> and raising defect-detection throughput by <strong>13.5%</strong>. Built a custom <strong>C++ Triton Repository Agent</strong> that decouples TensorRT engine compilation from the inference loop, enabling zero-downtime deployment of <strong>ONNX</strong> models directly to devices in the field.",link:"https://smartex.ai/",skills:["C++","NVIDIA Triton","TensorRT","ONNX","NVIDIA Jetson"]},{id:"blind-spot-detection",title:"Motorcycle Blind-Spot Detection",role:"Machine Learning Research Intern",date:"JUN — SEP 2025",description:"Designed a <strong>camera-radar sensor fusion</strong> system for motorcycle blind-spot detection at INESC TEC. Built a synthetic-data pipeline from scratch with the <strong>CARLA Simulator</strong>, then trained and evaluated a <strong>PyTorch</strong> deep learning perception model on it.",link:"https://www.inesctec.pt/",skills:["PyTorch","Computer Vision","Sensor Fusion","CARLA"]},{id:"keep-rag-chatbot",title:"KEEP: Specialized RAG Chatbot",role:"ML Engineer",date:"OCT 2024 — JAN 2025",description:"Built a <strong>RAG</strong> support chatbot for a Braga-based software company: <strong>Pinecone</strong> vector search over product docs, with specialized LLM agents integrated with Redmine (issue history) and Koha so answers were grounded in real tickets and live data.",link:"https://github.com/rodrigo0345/rag-chatbot",skills:["Python","RAG","Pinecone","LLM Agents"]},{id:"multigraft",title:"Multigraft: Distributed Database with Vector Search",role:"Lead Developer",date:"FEB 2026 — Present",description:"Multigraft is a from-scratch, on-disk OLTP database engine written entirely in <strong>Zig</strong>, with a hand-built <strong>Raft</strong> replication layer, exposed through a real <strong>PostgreSQL wire-protocol</strong> interface. Tables can pick between <strong>LSM Tree</strong>, <strong>B+Tree</strong>, or <strong>HNSW-indexed vector</strong> storage backends, with <strong>MVCC</strong> and a <strong>WAL</strong> guaranteeing ACID transactions. Currently extending Raft with geo-partitioned, multi-shard consensus groups for horizontal scaling. Active development.",link:"https://codeberg.org/Multigraft/core",skills:["Zig","Distributed Systems","Raft","MVCC","Vector Search","SQL"],detail:{diagramId:"multigraft",keyPoints:["Tables choose their storage backend at creation time: LSM Tree for write-heavy workloads, B+Tree for read-heavy range scans, or an HNSW-indexed vector store for approximate k-NN similarity search.","A hand-written Raft implementation runs as named shards via a Shard Registry, each an independent consensus group with region-aware placement of voting and non-voting learner nodes.","MVCC and a write-ahead log sit beneath every backend, giving SERIALIZABLE and READ COMMITTED transactions with standard SQLSTATE error codes, matching real Postgres semantics.","The SQL and Raft wire protocols listen on separate ports; writes routed to a follower fail with a normal SQL error, so the client or connection pooler is responsible for retrying against the current leader.","A live web dashboard visualizes elections, log replication, and geo-placement across shards independently of the SQL layer."]}},{id:"picturas",title:"Picturas: Microservice SaaS Platform",role:"Backend Engineer",date:"SEP 2024 — JAN 2025",description:"Scalable SaaS for image manipulation, with a <strong>Vue 3</strong> frontend and a <strong>microservices</strong> backend. Built an asynchronous filter pipeline where <strong>RabbitMQ</strong> passes lightweight messages between 16+ filter workers that read and write images on a shared <strong>NFS</strong> mount, with <strong>MinIO</strong> for durable storage and a Socket.IO gateway for real-time progress. Engineered the infrastructure using <strong>Docker</strong>, <strong>Kubernetes (Helm)</strong>, and <strong>Terraform</strong>.",link:"https://github.com/rafapeixoto16/RAS",skills:["Node.js","Vue","RabbitMQ","NFS","MinIO","Kubernetes","Terraform","MongoDB"],detail:{diagramId:"picturas",keyPoints:["Event-driven filter pipeline: RabbitMQ messages carry file paths, not image bytes, pointing filter workers to files staged on a shared NFS (GCP Filestore) mount, so each filter reads, processes, and writes back to the same location.","A dedicated orchestrator-ms service consumes filter completion events off a RabbitMQ exchange, chains the next stage, and tracks per-project pipeline state in Redis.","MinIO provides durable object storage for uploaded originals and finished results, decoupled from the NFS scratch space used only while a pipeline is running.","A separate WS Gateway bridges RabbitMQ notification events to Socket.IO, pushing real-time progress updates to the Vue frontend without polling.","Kubernetes Helm charts with Horizontal Pod Autoscaling allow the 16+ filter workers to scale independently based on queue depth; Terraform provisions the underlying GKE cluster and NFS instance."]}},{id:"videostream",title:"Video Streaming Platform",role:"Systems Engineer",date:"JAN 2025",description:"Designed and implemented a video streaming platform using <strong>Go</strong>. The system handles concurrent streams and optimizes data packet transfer for real-time playback performance.",link:"https://github.com/rodrigo0345/esr-tp2",skills:["Go","Networking","Streaming Protocols","RTP/UDP"],detail:{diagramId:"videostream",keyPoints:["RTP over UDP for low-latency packet delivery: TCP retransmits would stall real-time video, and dropped frames are preferable to stalls.","A rendezvous server handles peer discovery and stream negotiation; actual media flows peer-to-peer to minimize server load.","Goroutine-per-stream concurrency model in Go keeps the server simple: each client gets its own lightweight coroutine.","Sequence numbers and timestamps in RTP headers allow the receiver to reorder packets and calculate jitter for adaptive buffering."]}},{id:"raft",title:"Raft Consensus: Fault Tolerance",role:"Systems Engineer",date:"APR — MAY 2025",description:"Developed an implementation of the <strong>Raft consensus algorithm</strong> using the Maelstrom testing framework and <strong>Go</strong>. Analyzed resilience to Byzantine faults.",link:"https://github.com/rodrigo0345/RaftSimple",skills:["Go","Distributed Systems","Maelstrom","Consensus"],detail:{diagramId:"raft",keyPoints:["Three-state machine per node: Follower → Candidate → Leader. Nodes are followers by default and only become candidates when they stop hearing from a leader.","Leader election uses randomized timeouts to avoid split votes: a node waits a random 150 to 300ms before starting an election.","Log replication is append-only: the leader sends AppendEntries RPCs; a log entry is committed only after a majority acknowledges it.","Maelstrom injects network partitions and node failures to validate correctness, and all linearizability tests passed."]}},{id:"vscode-db",title:"VS Code DB Manager",role:"Contributor",date:"Open Source",description:"Contributed to the <strong>vscode-db-manager</strong> extension by implementing the <strong>SQLite</strong> driver. Allows users to connect to, query, and manage SQLite databases directly within VS Code.",link:"https://github.com/martimmpr/vscode-db-manager",skills:["TypeScript","SQLite","VS Code API"]},{id:"smart-clinic",title:"Smart Clinic",role:"Fullstack Developer",date:"NOV 2024 — MAY 2025",description:"Developed a virtual consultation platform using <strong>Strapi</strong> and <strong>Jitsi</strong>. Integrated seamless payments with IfThenPay to improve clinic accessibility.",skills:["Strapi","Jitsi","React","IfThenPay"]},{id:"keybelle",title:"KeyBelle",role:"Backend Developer",date:"OCT 2024 — APR 2025",description:"Built a property key management system using <strong>.NET 8</strong> and <strong>PostgreSQL</strong> for a real estate agency. Improved operational efficiency and reduced key misplacement.",skills:[".NET 8","C#","PostgreSQL"]},{id:"startpoint",title:"START POINT's Website",role:"Wordpress Developer",date:"SEP — DEC 2023",description:"Project Manager of this initiative. Required custom plugins for student verification and a custom theme to match branding.",link:"https://startpoint.pt/",skills:["PHP","Management","Wordpress"]},{id:"volleyball",title:"Volleyball Management App",role:"Fullstack Developer",date:"MAY — JUN 2023",description:"Developed a MVC system using Java and MySQL to manage players and matches. Achieved the highest grade in the class (18/20).",link:"https://github.com/rodrigo0345/DAI-Projeto-Volley",skills:["Java","TypeScript","React"]}],Ei=n=>(Ar("data-v-2b381392"),n=n(),Cr(),n),F1={id:"top-zone"},O1={class:"pr-16 flex w-full md:justify-end pl-10 md:pl-0 relative h-full"},B1={class:"sticky w-3/4 flex flex-col justify-between py-24 h-svh top-0"},z1=sp('<div class="flex flex-col gap-3" data-v-2b381392><p class="text-xs font-mono tracking-[0.22em] uppercase text-gold opacity-70" data-v-2b381392> Software Engineer </p><h1 class="text-5xl font-grotesk font-bold text-frost leading-tight tracking-tight" data-v-2b381392> Rodrigo Casanova </h1><p class="font-mono text-sm text-gold tracking-wide mt-1" data-v-2b381392> MSc Distributed &amp; Intelligent Systems </p><p class="text-sm text-ash font-light leading-relaxed mt-2 max-w-[280px]" data-v-2b381392> Building distributed systems and ML inference pipelines, from database engines to the edge. </p></div>',1),k1={class:"flex-1 w-full min-h-0 my-4 relative"},H1=Ei(()=>le("div",{class:"world-hint"},[le("span",{class:"font-mono text-xs tracking-widest uppercase"},"Press W to fly")],-1)),V1={class:"flex flex-col gap-4"},G1={class:"flex gap-5"},W1={href:"https://www.linkedin.com/in/casanovarodrigo/",target:"_blank",class:"social-link","aria-label":"LinkedIn"},X1={href:"https://github.com/rodrigo0345/",target:"_blank",class:"social-link","aria-label":"GitHub"},j1={href:"mailto:rodrigocralha@gmail.com",target:"_blank",class:"social-link","aria-label":"Email"},q1={class:"group/card relative flex flex-col max-w-[620px] flex-grow pb-16 pt-0"},$1=Ei(()=>le("div",{class:"section-heading-wrap ml-4 mt-10 mb-1"},[le("h2",{class:"section-heading"},"Education")],-1)),Y1=Ei(()=>le("div",{class:"section-divider ml-4 mb-2"},null,-1)),K1=Ei(()=>le("div",{class:"section-heading-wrap ml-4 mt-12 mb-1"},[le("h2",{class:"section-heading"},"Experience")],-1)),Z1=Ei(()=>le("div",{class:"section-divider ml-4 mb-2"},null,-1)),J1={id:"bottom-zone"},Q1=Ei(()=>le("div",{class:"section-heading-wrap mb-2"},[le("h2",{class:"section-heading"},"Selected Projects")],-1)),ew=Ei(()=>le("div",{class:"section-divider mb-6"},null,-1)),tw={class:"grid-section"},nw=Ei(()=>le("div",{class:"section-heading-wrap mt-16 mb-2"},[le("h2",{class:"section-heading"},"Certifications")],-1)),iw=Ei(()=>le("div",{class:"section-divider mb-6"},null,-1)),sw={class:"grid-section"},rw=ri({__name:"App",setup(n){const e=Bt(null),t=Bt(null);function i(l,u){e.value=l,t.value=u}function s(){e.value=null,t.value=null}const r=Bt(!1),o=Bt(null);function a(l){o.value=l,r.value=!0}function c(){r.value=!1,o.value=null}return(l,u)=>(it(),ht(zt,null,[le("div",F1,[le("header",O1,[le("div",B1,[z1,le("div",k1,[we(ZE,{paused:r.value,onEnterGame:a},null,8,["paused"]),H1]),le("div",V1,[le("div",G1,[le("a",W1,[we(an(P1),{"stroke-width":"1.5",class:"h-5 w-5"})]),le("a",X1,[we(an(R1),{"stroke-width":"1.5",class:"h-5 w-5"})]),le("a",j1,[we(an(L1),{"stroke-width":"1.5",class:"h-5 w-5"})])])])])]),le("main",q1,[we(Y_),$1,Y1,we(Pi,{title:"Master's Degree in Software Engineering",date:"2024 — 2026",description:"Studying at the <strong>University of Minho</strong>. Specializing in <strong>Distributed Systems</strong> and <strong>Intelligent Systems</strong>.",last:!1,role:"University of Minho"},{default:It(()=>[we(xt,{skill:"Distributed Systems"}),we(xt,{skill:"Edge Computing"}),we(xt,{skill:"Go"}),we(xt,{skill:"Python"}),we(xt,{skill:"Kubernetes"})]),_:1}),we(Pi,{title:"Bachelor's Degree in Information Systems",date:"2021 — 2024",description:"<strong>Engineering and Management of Information Systems</strong>, University of Minho. <ul class='mt-2'><li>Final Grade: <strong>16/20</strong></li></ul>",last:!1,role:"University of Minho"},{default:It(()=>[we(xt,{skill:"Java"}),we(xt,{skill:"Javascript"}),we(xt,{skill:"Algorithms"}),we(xt,{skill:"Software Engineering"})]),_:1}),K1,Z1,we(Pi,{title:"SMARTEX.ai",date:"2025 — Present",description:"Migrated production computer-vision inference to <strong>NVIDIA Triton</strong> on Jetson Orin edge devices, cutting latency by <strong>34%</strong> and raising defect-detection throughput by <strong>13.5%</strong>. Built a custom C++ Triton Repository Agent enabling zero-downtime <strong>ONNX</strong> model deployment to devices in the field.",last:!1,role:"Embedded Software Developer Intern",link:"https://smartex.ai/"},{default:It(()=>[we(xt,{skill:"Modern C++ (C++23)"}),we(xt,{skill:"NVIDIA Jetson"}),we(xt,{skill:"TensorRT"}),we(xt,{skill:"ONNX Runtime"})]),_:1}),we(Pi,{title:"INESC TEC",date:"JUN — SEP 2025",description:"Investigated a <strong>blind spot detection system</strong> for motorcycles using Camera-Radar sensor fusion. Engineered a synthetic data generation pipeline using the <strong>CARLA Simulator</strong>.",last:!1,role:"Summer Internship",link:"https://www.inesctec.pt/"},{default:It(()=>[we(xt,{skill:"Python"}),we(xt,{skill:"Computer Vision"}),we(xt,{skill:"Sensor Fusion"}),we(xt,{skill:"CARLA"})]),_:1}),we(Pi,{title:"EPIC Júnior",date:"2024 — Present",description:"Leading planning and budgeting of innovative projects, <strong>managing a team of 31 people</strong>. Overseeing <strong>CI/CD pipelines</strong> and Git best practices.",last:!1,role:"Director of Innovation of Projects Dept.",link:"https://epicje.pt/"},{default:It(()=>[we(xt,{skill:"DevOps"},{default:It(()=>[we(an(U1),{size:13})]),_:1}),we(xt,{skill:"Docker"},{default:It(()=>[we(an(T1),{size:13})]),_:1}),we(xt,{skill:"Team Management"},{default:It(()=>[we(an(D1),{size:13})]),_:1}),we(xt,{skill:"Leadership"},{default:It(()=>[we(an(b1),{size:13})]),_:1})]),_:1}),we(Pi,{title:"EPIC Júnior",date:"2022 — 2024",description:"Member of the Projects Department, working with real <strong>clients</strong> on logistics management, appointment scheduling, and event gamification.",last:!1,role:"Member of Projects Dept.",link:"https://epicje.pt/"},{default:It(()=>[we(xt,{skill:"Node.js"},{default:It(()=>[we(an(E1),{size:13})]),_:1}),we(xt,{skill:"Redis"},{default:It(()=>[we(an(A1),{size:13})]),_:1}),we(xt,{skill:"PostgreSQL"},{default:It(()=>[we(an(C1),{size:13})]),_:1})]),_:1}),we(Pi,{title:"AIS.SC UMINHO",date:"OCT 2023 — 2024",description:"Enhanced the website using WordPress and PHP to develop custom plugins.",last:!1,role:"Member of Technological Dept.",link:"https://aissc.dsi.uminho.pt/"},{default:It(()=>[we(xt,{skill:"Wordpress"},{default:It(()=>[we(an(S1),{size:13})]),_:1}),we(xt,{skill:"PHP"})]),_:1}),we(Pi,{title:"NTT DATA Europe & Latam",date:"2023 — 2024",description:"Ambassador role broadening my network and deepening understanding of community outreach.",last:!1,role:"Ambassador",link:"https://pt.nttdata.com/"},{default:It(()=>[we(xt,{skill:"Communication"},{default:It(()=>[we(an(I1),{size:13})]),_:1}),we(xt,{skill:"Network"},{default:It(()=>[we(an(w1),{size:13})]),_:1})]),_:1})])]),le("div",J1,[Q1,ew,le("div",tw,[(it(!0),ht(zt,null,xr(an(N1),d=>(it(),Ts(h0,{key:d.id,project:d,onOpen:i},null,8,["project"]))),128))]),nw,iw,le("div",sw,[we(kr,{title:"C++ Essentials 1",issuer:"Cisco Networking Academy",date:"DEC 2025",link:"https://www.credly.com/badges/1c36ab10-d486-4f9d-b455-9d0668ea622f/linked_in_profile",skills:["C++","Memory Management","OOP"]}),we(kr,{title:"3D Graphics Programming from Scratch",issuer:"pikuma.com",date:"JUL 2024",link:"https://courses.pikuma.com/certificates/4gjmahqcda",skills:["C++","Graphics","Math"]}),we(kr,{title:"Foundational C#",issuer:"FreeCodeCamp",date:"JAN 2024",link:"https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/foundational-c-sharp-with-microsoft",skills:["C#","ASP.NET Core"]},null,8,["skills"]),we(kr,{title:"Cypher Fundamentals",issuer:"Neo4J Graph Academy",date:"MAY 2023",link:"https://graphacademy.neo4j.com/c/3aa65d3e-b8b8-4c9e-af48-63ed4b38c2bd/",skills:["Cypher","Neo4J"]}),we(kr,{title:"Javascript Algorithms & Data Structures",issuer:"FreeCodeCamp",date:"JUN 2023",link:"https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures",skills:["Javascript","Problem Solving"]})])]),we(WE,{project:e.value,"source-rect":t.value,onClose:s},null,8,["project","source-rect"]),r.value&&o.value?(it(),Ts(x1,{key:0,"source-rect":o.value,onExit:c},null,8,["source-rect"])):Pn("",!0)],64))}}),ow=oi(rw,[["__scopeId","data-v-2b381392"]]),aw={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let lw=0;var cw=n=>n.replace(/[<>"&]/g,e=>aw[e]||e),uw=n=>n+lw++;const vs={},hw=n=>{const{name:e,paths:t=[],d:i,polygons:s=[],points:r}=n;i&&t.push({d:i}),r&&s.push({points:r}),vs[e]=Object.assign({},n,{paths:t,polygons:s}),vs[e].minX||(vs[e].minX=0),vs[e].minY||(vs[e].minY=0)},dw=(...n)=>{for(const e of n)hw(e)},fw=ri({name:"OhVueIcon",props:{name:{type:String,validator:n=>!n||n in vs||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:n=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(n)},hover:Boolean,flip:{validator:n=>["horizontal","vertical","both"].includes(n)},speed:{validator:n=>n==="fast"||n==="slow"},label:String,inverse:Boolean},setup(n){const e=Bt([]),t=ao({outerScale:1.2,x:null,y:null}),i=ao({width:0,height:0}),s=An(()=>{const g=Number(n.scale);return isNaN(g)||g<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),t.outerScale):g*t.outerScale}),r=An(()=>({"ov-icon":!0,"ov-inverse":n.inverse,"ov-flip-horizontal":n.flip==="horizontal","ov-flip-vertical":n.flip==="vertical","ov-flip-both":n.flip==="both","ov-spin":n.animation==="spin","ov-spin-pulse":n.animation==="spin-pulse","ov-wrench":n.animation==="wrench","ov-ring":n.animation==="ring","ov-pulse":n.animation==="pulse","ov-flash":n.animation==="flash","ov-float":n.animation==="float","ov-hover":n.hover,"ov-fast":n.speed==="fast","ov-slow":n.speed==="slow"})),o=An(()=>n.name?vs[n.name]:null),a=An(()=>o.value?`${o.value.minX} ${o.value.minY} ${o.value.width} ${o.value.height}`:`0 0 ${l.value} ${u.value}`),c=An(()=>{if(!o.value)return 1;const{width:g,height:m}=o.value;return Math.max(g,m)/16}),l=An(()=>i.width||o.value&&o.value.width/c.value*s.value||0),u=An(()=>i.height||o.value&&o.value.height/c.value*s.value||0),d=An(()=>s.value!==1&&{fontSize:s.value+"em"}),h=An(()=>{if(!o.value||!o.value.raw)return null;const g={};let m=o.value.raw;return m=m.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(f,b,M)=>{const E=uw("vat-");return g[M]=E,` id="${E}"`}),m=m.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(f,b,M,E)=>{const F=b||E;return F&&g[F]?`#${g[F]}`:f}),m}),p=An(()=>o.value&&o.value.attr?o.value.attr:{}),_=()=>{if(!n.name&&n.name!==null&&e.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(o.value)return;let g=0,m=0;e.value.forEach(f=>{f.outerScale=s.value,g=Math.max(g,f.width),m=Math.max(m,f.height)}),i.width=g,i.height=m,e.value.forEach(f=>{f.x=(g-f.width)/2,f.y=(m-f.height)/2})};return Is(()=>{_()}),Vf(()=>{_()}),{...Fm(t),children:e,icon:o,klass:r,style:d,width:l,height:u,box:a,attribs:p,raw:h}},created(){const n=this.$parent;n&&n.children&&n.children.push(this)},render(){const n=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?n.stroke=this.fill?this.fill:"currentColor":n.fill=this.fill?this.fill:"currentColor",this.x&&(n.x=this.x.toString()),this.y&&(n.y=this.y.toString());let e={class:this.klass,style:this.style};if(e=Object.assign(e,n),this.raw){const s=this.title?`<title>${cw(this.title)}</title>${this.raw}`:this.raw;e.innerHTML=s}const t=this.title?[ws("title",this.title)]:[],i=(s,r,o)=>ws(s,{...r,key:`${s}-${o}`});return ws("svg",e,this.raw?void 0:t.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((s,r)=>i("path",s,r)),...this.icon.polygons.map((s,r)=>i("polygon",s,r))]:[]]))}});function $u(n,e){e===void 0&&(e={});var t=e.insertAt;if(n&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}}$u(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);$u(`/* ---------------- spin ---------------- */
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
`);$u(`.ov-flip-horizontal {
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
`);const pw={name:"bi-github",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"/>'},mw={name:"bi-linkedin",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>'},gw={name:"bi-mailbox",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M4 4a3 3 0 00-3 3v6h6V7a3 3 0 00-3-3zm0-1h8a4 4 0 014 4v6a1 1 0 01-1 1H1a1 1 0 01-1-1V7a4 4 0 014-4zm2.646 1A3.99 3.99 0 018 7v6h7V7a3 3 0 00-3-3H6.646z"/><path d="M11.793 8.5H9v-1h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 012 0z"/>'},Wp=T_(ow);dw(mw,pw,gw);Wp.component("v-icon",fw);Wp.mount("#app");
