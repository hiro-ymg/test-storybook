import{T as ot,x as h,A as nt,s as et,i as W}from"./lit-element-721d4920.js";import{n as u,R as it,I as H}from"./iconFont-a66db732.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},at=e=>(...t)=>({_$litDirective$:e,values:t});let st=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,o){this._$Ct=t,this._$AM=n,this._$Ci=o}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=at(class extends st{constructor(e){var t;if(super(e),e.type!==rt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(t)}const i=e.element.classList;this.it.forEach(r=>{r in t||(i.remove(r),this.it.delete(r))});for(const r in t){const a=!!t[r];a===this.it.has(r)||!((o=this.nt)===null||o===void 0)&&o.has(r)||(a?(i.add(r),this.it.add(r)):(i.remove(r),this.it.delete(r)))}return ot}}),x=new WeakMap,_=new WeakMap,k=new WeakSet,$=new WeakMap;class ut{constructor(t,n){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),a=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="sl-button";!i&&!d&&typeof r=="string"&&r.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(b=>{o.formData.append(r,b.toString())}):o.formData.append(r,a.toString()))},this.handleFormSubmit=o=>{var a;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=x.get(this.form))==null||a.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!i&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),$.set(this.host,[])},this.handleInteraction=o=>{const i=$.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){const i=o.getRootNode(),r=o.getAttribute("form");if(r)return i.getElementById(r)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"],...n}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),$.set(this.host,[]),this.options.assumeInteractionOn.forEach(n=>{this.host.addEventListener(n,this.handleInteraction)})}hostDisconnected(){this.detachForm(),$.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,x.has(this.form)?x.get(this.form).add(this.host):x.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_.has(this.form)||(_.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=x.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_.has(this.form)&&(this.form.reportValidity=_.get(this.form),_.delete(this.form))),this.form=void 0}setUserInteracted(t,n){n?k.add(t):k.delete(t),t.requestUpdate()}doAction(t,n){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",n&&(o.name=n.name,o.value=n.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{n.hasAttribute(i)&&o.setAttribute(i,n.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const n=this.host,o=!!k.has(n),i=!!n.required;n.toggleAttribute("data-required",i),n.toggleAttribute("data-optional",!i),n.toggleAttribute("data-invalid",!t),n.toggleAttribute("data-valid",t),n.toggleAttribute("data-user-invalid",!t&&o),n.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const n=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||n.preventDefault(),this.host.dispatchEvent(n)||t==null||t.preventDefault()}}const T=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...T,valid:!1,valueMissing:!0});Object.freeze({...T,valid:!1,customError:!0});class dt{constructor(t,...n){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const n=t;if(n.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!n.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=Symbol.for(""),ct=e=>{if((e==null?void 0:e.r)===G)return e==null?void 0:e._$litStatic$},V=(e,...t)=>({_$litStatic$:t.reduce((n,o,i)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:G}),I=new Map,ht=e=>(t,...n)=>{const o=n.length;let i,r;const a=[],d=[];let b,c=0,g=!1;for(;c<o;){for(b=t[c];c<o&&(r=n[c],(i=ct(r))!==void 0);)b+=i+t[++c],g=!0;c!==o&&d.push(r),a.push(b),c++}if(c===o&&a.push(t[o]),g){const y=a.join("$$lit$$");(t=I.get(y))===void 0&&(a.raw=a,I.set(y,t=a)),n=d}return e(t,...n)},w=ht(h);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=e=>e??nt,A=new Set,bt=new MutationObserver(J),f=new Map;let K=document.documentElement.dir||"ltr",X=document.documentElement.lang||navigator.language,m;bt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Y(...e){e.map(t=>{const n=t.$code.toLowerCase();f.has(n)?f.set(n,Object.assign(Object.assign({},f.get(n)),t)):f.set(n,t),m||(m=t)}),J()}function J(){K=document.documentElement.dir||"ltr",X=document.documentElement.lang||navigator.language,[...A.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let pt=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){A.add(this.host)}hostDisconnected(){A.delete(this.host)}dir(){return`${this.host.dir||K}`.toLowerCase()}lang(){return`${this.host.lang||X}`.toLowerCase()}getTranslationData(t){var n,o;const i=new Intl.Locale(t.replace(/_/g,"-")),r=i==null?void 0:i.language.toLowerCase(),a=(o=(n=i==null?void 0:i.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"",d=f.get(`${r}-${a}`),b=f.get(r);return{locale:i,language:r,region:a,primary:d,secondary:b}}exists(t,n){var o;const{primary:i,secondary:r}=this.getTranslationData((o=n.lang)!==null&&o!==void 0?o:this.lang());return n=Object.assign({includeFallback:!1},n),!!(i&&i[t]||r&&r[t]||n.includeFallback&&m&&m[t])}term(t,...n){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(i&&i[t])r=i[t];else if(m&&m[t])r=m[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...n):r}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,n)}};const Q={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Y(Q);class mt extends pt{}Y(Q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e){return u({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=({finisher:e,descriptor:t})=>(n,o)=>{var i;if(o===void 0){const r=(i=n.originalKey)!==null&&i!==void 0?i:n.key,a=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return e!=null&&(a.finisher=function(d){e(d,r)}),a}{const r=n.constructor;t!==void 0&&Object.defineProperty(n,o,t(o)),e==null||e(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(e,t){return vt({descriptor:n=>{const o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const i=typeof n=="symbol"?Symbol():"__"+n;o.get=function(){var r,a;return this[i]===void 0&&(this[i]=(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&a!==void 0?a:null),this[i]}}return o}})}function gt(e,t){const n={waitUntilFirstUpdate:!1,...t};return(o,i)=>{const{update:r}=o,a=Array.isArray(e)?e:[e];o.update=function(d){a.forEach(b=>{const c=b;if(d.has(c)){const g=d.get(c),y=this[c];g!==y&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[i](g,y)}}),r.call(this,d)}}}var yt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,tt=(e,t,n,o)=>{for(var i=o>1?void 0:o?xt(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&yt(t,n,i),i};class z extends et{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,n])=>{this.constructor.define(t,n)})}emit(t,n){const o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...n});return this.dispatchEvent(o),o}static define(t,n=this,o={}){if(!customElements.get(t)){customElements.define(t,class extends n{},o);return}}}z.dependencies={};tt([u()],z.prototype,"dir",2);tt([u()],z.prototype,"lang",2);const _t=W`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wt=W`
    ${_t}

    :host {
        /*
         * component local design token
         */

        --rui-button-padding-nav: var(--rui-spacing-xxs);/** navアイコン用 padding */
        --rui-button-padding-nav-pill: var(--rui-spacing-xs);/** navアイコン用 padding */

        /** width 固定値の場合、labelに改行発生するため、上下方向のmarginが必要 */
        --rui-button-padding-v-xs: var(--rui-spacing-xxs);
        --rui-button-padding-v-s: var(--rui-spacing-xxs);
        --rui-button-padding-v-m: var(--rui-spacing-xs);
        --rui-button-padding-v-l: var(--rui-spacing-s);
        --rui-button-padding-v-xl: var(--rui-spacing-m);

        /** labelが無い場合 iconはテキストサイズを継承せず、独自のサイズを取る */
        --rui-button-icon-only-size-xs: var(--rui-size-graphic-s);
        --rui-button-icon-only-size-s: var(--rui-size-graphic-m);
        --rui-button-icon-only-size-m: var(--rui-size-graphic-l);
        --rui-button-icon-only-size-l: var(--rui-size-graphic-xl);
        --rui-button-icon-only-size-xl: var(--rui-size-graphic-xxl);

        display: inline-block;
        position: relative;
        width: auto;
        cursor: pointer;
    }
    .button {
        display: inline-flex;
        align-items: center; /* was stretch */
        justify-content: center;
        width: 100%;
        border-style: solid;
        border-width: var(--rui-border-width-m);
        font-family: var(--rui-font-regular);
        font-weight: var(--rui-font-weight-m);
        line-height: var(--rui-line-height-s);
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        /* white-space: nowrap; */
        vertical-align: middle;
        padding: 0;

        transition:
            var(--rui-duration-hover) background-color,
            var(--rui-duration-hover) color,
            var(--rui-duration-hover) border,
            var(--rui-duration-hover) box-shadow;
        cursor: inherit;
    }

    .button::-moz-focus-inner {
        border: 0;
    }

    .button:focus {
        outline: none;
    }

    .button:focus-visible {
        outline: var(--rui-focus-ring);
        outline-offset: var(--rui-focus-ring-offset);
    }

    .button--disabled {
        opacity: var(--rui-opacity-disabled);
        cursor: not-allowed;
    }

    /* When disabled, prevent mouse events from bubbling up from children */
    .button--disabled * {
        pointer-events: none;
    }

    .button__icon {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        pointer-events: none;
    }

    .button__label {
        display: inline-block;
        width: 100%;
    }

    /* TBD: working properly? */
    .button__label::slotted(rui-icon) {
        vertical-align: -2px;
    }

    /*
     * Variants
     */

    /* Normal */
    .button--normal {
        background-color: var(--rui-color-white);
        border-color: var(--rui-color-gray-200);
        color: var(--rui-color-text-primary);
    }
    .button--normal:hover:not(.button--disabled) {
        background-color: var(--rui-color-gray-50);
    }
    .button--normal:active:not(.button--disabled) {
        background-color: var(--rui-color-blue-100);
    }

    /* Primary */
    .button--primary {
        background-color: var(--rui-color-blue-500);
        border: none;
        color: var(--rui-color-text-inverse);
    }
    .button--primary:hover:not(.button--disabled) {
        background-color: var(--rui-color-blue-600);
    }
    .button--primary:active:not(.button--disabled) {
        background-color: var(--rui-color-blue-700);
    }

    /* Secondary */
    .button--secondary {
        background-color: var(--rui-color-white);
        border-color: var(--rui-color-blue);
        color: var(--rui-color-text-blue); 
    }
    .button--secondary:hover:not(.button--disabled) {
        background-color: var(--rui-color-gray-50);
    }
    .button--secondary:active:not(.button--disabled) {
        background-color: var(--rui-color-blue-100);
    }

    /* Borderless */
    .button--borderless {
        background-color: var(--rui-color-white);
        border: none;
        color: var(--rui-color-text-primary);
    }
    .button--borderless:hover:not(.button--disabled) {
        background-color: var(--rui-color-gray-50);
    }
    .button--borderless:active:not(.button--disabled) {
        background-color: var(--rui-color-blue-100);
    }
    
    /* Transparent */
    .button--transparent {
        background-color: transparent;
        border: none;
        color: var(--rui-color-text-primary);
    }
    .button--transparent:hover:not(.button--disabled) {
        background-color: var(--rui-color-gray-50);
    }
    .button--transparent:active:not(.button--disabled) {
        background-color: var(--rui-color-blue-100);
    }
    /* Link */
    .button--link {
        background-color: transparent;
        border-color: transparent;
        color: var(--rui-color-blue-500);
    }
    .button--link:hover:not(.button--disabled) {
        color: var(--rui-color-blue-600);
    }
    .button--link:focus-visible:not(.button--disabled) {
        color: var(--rui-color-blue-500); 
    }
    .button--link:active:not(.button--disabled) {
        color: var(--rui-color-blue-700);
    }
    .button--link .button__label {
        text-decoration: underline;
    }

    .button--fab {
        box-shadow: var(--rui-shadow-l);
    }

    /*
     * Size modifiers
     */

    .button--xs {
        height: auto;
        min-height: var(--rui-height-primary-xs);
        font-size: var(--rui-font-size-primary-xs);
    }
    .button--s {
        height: auto;
        min-height: var(--rui-height-primary-s);
        font-size: var(--rui-font-size-primary-s);
    }
    .button--m {
        height: auto;
        min-height: var(--rui-height-primary-m);
        font-size: var(--rui-font-size-primary-m);
    }
    .button--l {
        height: auto;
        min-height: var(--rui-height-primary-l);
        font-size: var(--rui-font-size-primary-l);
    }
    .button--xl {
        height: auto;
        min-height: var(--rui-height-primary-xl);
        font-size: var(--rui-font-size-primary-xl);
    }

    /*
     * Radius modifier
     */
    .button--radius-none {
        border-radius: var(--rui-radius-lower-zero);
    }
    .button--radius-s {
        border-radius: var(--rui-radius-lower-s);
    }
    .button--radius-m {
        border-radius: var(--rui-radius-lower-m);
    }
    .button--radius-l {
        border-radius: var(--rui-radius-lower-l);
    }

    /*
     * Pill modifier
     */
    .button--pill.button--xs {
        border-radius: var(--rui-height-primary-xs);
    }
    .button--pill.button--s {
        border-radius: var(--rui-height-primary-s);
    }
    .button--pill.button--m {
        border-radius: var(--rui-height-primary-m);
    }
    .button--pill.button--l {
        border-radius: var(--rui-height-primary-l);
    }
    .button--pill.button--xl {
        border-radius: var(--rui-height-primary-xl);
    }

    /*
     * Icon button
     * (labelがなくて iconがあるとき)
     */
    .button--no-label.button--has-icon {
        padding: 0;
    }
    .button--no-label.button--has-icon .button__label {
        display: none;
    }
    .button--no-label.button--has-icon.button--xs .button__icon {
        font-size: var(--rui-button-icon-only-size-xs);
    }
    .button--no-label.button--has-icon.button--s .button__icon {
        font-size: var(--rui-button-icon-only-size-s);
    }
    .button--no-label.button--has-icon.button--m .button__icon {
        font-size: var(--rui-button-icon-only-size-m);
    }
    .button--no-label.button--has-icon.button--l .button__icon {
        font-size: var(--rui-button-icon-only-size-l);
    }
    .button--no-label.button--has-icon.button--xl .button__icon {
        font-size: var(--rui-button-icon-only-size-xl);
    }
    .button--no-label.button--has-icon.button--xs {
        min-width: var(--rui-height-primary-xs);
    }
    .button--no-label.button--has-icon.button--s {
        min-width: var(--rui-height-primary-s);
    }
    .button--no-label.button--has-icon.button--m {
        min-width: var(--rui-height-primary-m);
    }
    .button--no-label.button--has-icon.button--l {
        min-width: var(--rui-height-primary-l);
    }
    .button--no-label.button--has-icon.button--xl {
        min-width: var(--rui-height-primary-xl);
    }

    /*
     * Circle modifier
     */
    .button--circle {
        padding-left: 0;
        padding-right: 0;
    }
    .button--circle.button--xs {
        width: var(--rui-height-primary-xs);
        border-radius: 50%;
    }
    .button--circle.button--s {
        width: var(--rui-height-primary-s);
        border-radius: 50%;
    }
    .button--circle.button--m {
        width: var(--rui-height-primary-m);
        border-radius: 50%;
    }
    .button--circle.button--l {
        width: var(--rui-height-primary-l);
        border-radius: 50%;
    }
    .button--circle.button--xl {
        width: var(--rui-height-primary-xl);
        border-radius: 50%;
    }
    .button--circle .button__nav {
        display: none;
    }

    /*
     * Navigation Icon modifier
     */

    /** next(...)アイコンの位置指定 →　その他のNavigation Iconの位置指定は下記"Button Spacing"にて */
    .button--nav .button__nav-next{
        position: absolute;
    }
    /** ボタンサイズに応じて下からの距離指定 */
    .button--nav.button--xs .button__nav-next{     
        bottom: var(--rui-1-px-rem);
    }
    .button--nav.button--s .button__nav-next{
        bottom: var(--rui-2-px-rem);
    }
    .button--nav.button--m .button__nav-next,
    .button--nav.button--l .button__nav-next,
    .button--nav.button--xl .button__nav-next{
        bottom: var(--rui-4-px-rem);
    }
    /** 角丸に応じて右方向位置調整 */
    .button--nav.button--radius-none .button__nav-next{
        right: var(--rui-4-px-rem);
    }
    .button--nav.button--radius-s .button__nav-next{
        right: max(var(--rui-radius-lower-s), var(--rui-4-px-rem));
    }
    .button--nav.button--radius-m .button__nav-next{
        right: max(var(--rui-radius-lower-m), var(--rui-4-px-rem));
    }
    .button--nav.button--radius-l .button__nav-next{
        right: max(var(--rui-radius-lower-l), var(--rui-4-px-rem));
    }

    /** Pill型の場合 labelの右に並べる*/
    .button--nav.button--pill .button__nav-next{
        position: relative;
    }
    .button--nav.button--pill .button__nav-next{
        right: initial;
        bottom: initial;
    }

    /*
     * Loading modifier
     */
    /*
    .button--loading {
        position: relative;
        cursor: wait;
    }
    .button--loading .button__icon,
    .button--loading .button__label,
    .button--loading .button__caret {
        visibility: hidden;
    }
    .button--loading sl-spinner {
        --indicator-color: currentColor;
        position: absolute;
        font-size: 1em;
        height: 1em;
        width: 1em;
        top: calc(50% - 0.5em);
        left: calc(50% - 0.5em);
    // }
    */

    /*
     * Badges
     */
    /*
    .button ::slotted(sl-badge) {
        position: absolute;
        top: 0;
        right: 0;
        translate: 50% -50%;
        pointer-events: none;
    }
    .button--rtl ::slotted(sl-badge) {
        right: auto;
        left: 0;
        translate: -50% -50%;
    }
    */

    /*
     * Button spacing
     */

    /** gapは各サイズ共通 */
    .button--xs,
    .button--s,
    .button--m,
    .button--l,
    .button--xl {
        gap: var(--rui-gap-intra-m)
    }

    /** padding */
    .button--has-label.button--xs {
        padding: var(--rui-button-padding-v-xs) var(--rui-padding-primary-xs);
    }
    .button--has-label.button--s {
        padding: var(--rui-button-padding-v-s) var(--rui-padding-primary-s);
    }
    .button--has-label.button--m {
        padding: var(--rui-button-padding-v-m) var(--rui-padding-primary-m);
    }
    .button--has-label.button--l {
        padding: var(--rui-button-padding-v-l) var(--rui-padding-primary-l);
    }
    .button--has-label.button--xl {
        padding: var(--rui-button-padding-v-xl) var(--rui-padding-primary-xl);
    }

    /** iconがなければ隠す (gapの重複を防ぐため) */
    .button:not(.button--has-icon) .button__icon {
        display: none;
    }
    /** iconがあればpaddingを詰める */
    .button--has-label.button--has-icon.button--xs {
        padding-inline-start: var(--rui-padding-primary-graphic-xs);
    }
    .button--has-label.button--has-icon.button--s {
        padding-inline-start: var(--rui-padding-primary-graphic-s);
    }
    .button--has-label.button--has-icon.button--m {
        padding-inline-start: var(--rui-padding-primary-graphic-m);
    }
    .button--has-label.button--has-icon.button--l {
        padding-inline-start: var(--rui-padding-primary-graphic-l);
    }
    .button--has-label.button--has-icon.button--xl {
        padding-inline-start: var(--rui-padding-primary-graphic-xl);
    }

    /** iconがあればlabelの位置を調整 (上下揃って見えるように) */
    .button--has-icon .button__label {
        /*
        position: relative;
        bottom: 0.06rem;
        */
    }

    /** navアイコンがrightかdownならもっとpaddingを詰める */
    .button--nav.button--nav-right,
    .button--nav.button--nav-down {
        padding-right: var(--rui-button-padding-nav);
    }
    .button--nav.button--nav-right.button--pill,
    .button--nav.button--nav-down.button--pill {
        padding-right: var(--rui-button-padding-nav-pill);
    }
    /** navアイコンがnextでpillのときのpadding　pillでないときはposition:absoluteなので不要 */
    .button--nav.button--nav-next.button--pill {
        padding-right: var(--rui-button-padding-nav-pill);
    }

`;var $t=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,l=(e,t,n,o)=>{for(var i=o>1?void 0:o?Ct(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&$t(t,n,i),i};class s extends z{constructor(){super(...arguments),this.formControlController=new ut(this,{form:t=>{if(t.hasAttribute("form")){const n=t.getRootNode(),o=t.getAttribute("form");return n.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new dt(this,"[default]","icon"),this.localize=new mt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="normal",this.fab=!1,this.size="m",this.navigation=void 0,this.disabled=!1,this.loading=!1,this.radius="m",this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:T}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),n=t?V`a`:V`button`;return w`
        <${n}
            part="base"
            class=${lt({button:!0,"button--normal":this.variant==="normal","button--primary":this.variant==="primary","button--secondary":this.variant==="secondary","button--borderless":this.variant==="borderless","button--transparent":this.variant==="transparent","button--link":this.variant==="link","button--fab":this.fab,"button--xs":this.size==="xs","button--s":this.size==="s","button--m":this.size==="m","button--l":this.size==="l","button--xl":this.size==="xl","button--radius-none":this.radius==="none","button--radius-s":this.radius==="s","button--radius-m":this.radius==="m","button--radius-l":this.radius==="l","button--nav":this.navigation!=="none","button--nav-next":this.navigation==="next","button--nav-right":this.navigation==="right","button--nav-down":this.navigation==="down","button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--no-label":!this.hasSlotController.test("[default]"),"button--has-icon":this.hasSlotController.test("icon")})}
            ?disabled=${p(t?void 0:this.disabled)}
            type=${p(t?void 0:this.type)}
            title=${this.title}
            name=${p(t?void 0:this.name)}
            value=${p(t?void 0:this.value)}
            href=${p(t?this.href:void 0)}
            target=${p(t?this.target:void 0)}
            download=${p(t?this.download:void 0)}
            rel=${p(t?this.rel:void 0)}
            role=${p(t?void 0:"button")}
            aria-disabled=${this.disabled?"true":"false"}
            tabindex=${this.disabled?"-1":"0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @invalid=${this.isButton()?this.handleInvalid:null}
            @click=${this.handleClick}
        >
            <slot name="icon" part="icon" class="button__icon"></slot>
            <slot part="label" class="button__label"></slot>
                   
            ${this.navigation==="next"?w`
                    <rui-icon part="nav-next" class="button__nav button__nav-next" library="system" name="ellipsis_bottom"></rui-icon>
                `:this.navigation==="right"?w`
                    <rui-icon part="nav-right" class="button__nav button__nav-right" library="system" name="chevron_right_l"></rui-icon>
                `:this.navigation==="down"?w`
                    <rui-icon part="nav-down" class="button__nav button__nav-down" library="system" name="chevron_down_l"></rui-icon>
                `:""}
            <!--
            ${this.loading?w`<sl-spinner part="spinner"></sl-spinner>`:""} -->
        </${n}>
    `}}s.styles=wt;s.dependencies={"rui-icon":it};l([ft(".button")],s.prototype,"button",2);l([Z()],s.prototype,"hasFocus",2);l([Z()],s.prototype,"invalid",2);l([u()],s.prototype,"title",2);l([u({reflect:!0})],s.prototype,"variant",2);l([u({type:Boolean,reflect:!0})],s.prototype,"fab",2);l([u({reflect:!0})],s.prototype,"size",2);l([u()],s.prototype,"navigation",2);l([u({type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],s.prototype,"loading",2);l([u({reflect:!0})],s.prototype,"radius",2);l([u({type:Boolean,reflect:!0})],s.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],s.prototype,"circle",2);l([u()],s.prototype,"type",2);l([u()],s.prototype,"name",2);l([u()],s.prototype,"value",2);l([u()],s.prototype,"href",2);l([u()],s.prototype,"target",2);l([u()],s.prototype,"rel",2);l([u()],s.prototype,"download",2);l([u()],s.prototype,"form",2);l([u({attribute:"formaction"})],s.prototype,"formAction",2);l([u({attribute:"formenctype"})],s.prototype,"formEnctype",2);l([u({attribute:"formmethod"})],s.prototype,"formMethod",2);l([u({attribute:"formnovalidate",type:Boolean})],s.prototype,"formNoValidate",2);l([u({attribute:"formtarget"})],s.prototype,"formTarget",2);l([gt("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);customElements.define("rui-button",s);const At={title:"Example/Button",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","s","m","l","xl"]},radius:{control:"select",options:["none","s","m","l"]},variant:{control:"select",options:["normal","primary","secondary","borderless","transparent","link"]},fab:{control:"boolean"},disabled:{control:"boolean"},pill:{control:"boolean"},circle:{control:"boolean"},icon:{control:"select",options:[void 0,...H]},navigation:{control:"select",options:["none","next","right","down"]}},render:e=>h`
        <rui-button
            size=${e.size||"m"}
            variant=${e.variant||"normal"}
            ?fab=${e.fab}
            radius=${e.radius||"m"}
            ?disabled=${e.disabled}
            ?pill=${e.pill}
            ?circle=${e.circle}
            navigation=${e.navigation}
            style=${e.style}
        >
        ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
        ${e.label}
        </rui-button>
    `},v={name:"Default",args:{label:"Button"}},C={name:"Appearances",argTypes:{},args:{...v.args},render:e=>h`
    <rui-button
        variant='normal'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Normal
    </rui-button>
    <rui-button
        variant='primary'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Primary
    </rui-button>
    <rui-button
        variant='secondary'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Secondary
    </rui-button>
    <rui-button
        variant='borderless'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Borderless
    </rui-button>
    <rui-button
        variant='transparent'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Transparent
    </rui-button>
    <rui-button
        variant='link'
    >
    ${e.icon&&h`<rui-icon name=${e.icon} slot='icon'></rui-icon>`}
    Link
    </rui-button>
    
`},S={name:"With Icon",argTypes:{},args:{...v.args,variant:"secondary",icon:"refresh_l",navigation:"none"}},E={name:"With width style",argTypes:{icon:{control:"select",options:[void 0,...H]}},args:{...v.args,style:"width: 200px;",variant:"secondary"}};var B,D,L;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Button'
  }
}`,...(L=(D=v.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,O,N;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Appearances',
  argTypes: {},
  args: {
    ...Default.args
  },
  render: args => html\`
    <rui-button
        variant='normal'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Normal
    </rui-button>
    <rui-button
        variant='primary'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Primary
    </rui-button>
    <rui-button
        variant='secondary'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Secondary
    </rui-button>
    <rui-button
        variant='borderless'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Borderless
    </rui-button>
    <rui-button
        variant='transparent'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Transparent
    </rui-button>
    <rui-button
        variant='link'
    >
    \${args.icon && html\`<rui-icon name=\${args.icon} slot='icon'></rui-icon>\`}
    Link
    </rui-button>
    
\`
}`,...(N=(O=C.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var U,R,P;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Icon',
  argTypes: {},
  args: {
    ...Default.args,
    variant: 'secondary',
    icon: 'refresh_l',
    navigation: 'none'
  }
}`,...(P=(R=S.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,j,q;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With width style',
  argTypes: {
    icon: {
      control: 'select',
      options: [undefined, ...IconTokens]
    }
  },
  args: {
    ...Default.args,
    style: "width: 200px;",
    variant: 'secondary'
  }
}`,...(q=(j=E.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Tt=["Default","Appearances","Icon","Styled"];export{C as Appearances,v as Default,S as Icon,E as Styled,Tt as __namedExportsOrder,At as default};
//# sourceMappingURL=button.stories-f0a63ed7.js.map
