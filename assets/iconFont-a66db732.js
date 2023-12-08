import{i as p,s as d,x as h}from"./lit-element-721d4920.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,o)}},f=(o,e,r)=>{e.constructor.createProperty(r,o)};function a(o){return(e,r)=>r!==void 0?f(o,e,r):m(o,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;((l=window.HTMLSlotElement)===null||l===void 0?void 0:l.prototype.assignedElements)!=null;function u(o,e){return getComputedStyle(document.documentElement).getPropertyValue(`--rui-${o}-${e}`)?`var(--rui-${o}-${e})`:e}var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,_=(o,e,r,s)=>{for(var i=s>1?void 0:s?v(e,r):e,t=o.length-1,c;t>=0;t--)(c=o[t])&&(i=(s?c(e,r,i):c(i))||i);return s&&i&&y(e,r,i),i};class n extends d{constructor(){super(...arguments),this.name="home",this.size="inherit",this.color="inherit"}render(){return h`
            <div class='container' style="
                color: ${u("color",this.color)};
                font-size: ${u("size",this.size)};
            ">
                ${this.name}
            </div>
        `}}n.styles=p`
        .container {
            display: flex;
            align-items: center;
            height: 100%;
            font-family: 'RICOH-Icon-Font';
            line-height: 100%;
            user-select: none;
        }
    `;_([a()],n.prototype,"name",2);_([a()],n.prototype,"size",2);_([a()],n.prototype,"color",2);customElements.define("rui-icon",n);const g=["arrow_down","arrow_down_left","arrow_left","arrow_left_up","arrow_right","arrow_up","arrow_uturn_left","asterisk","asterisk_broken","balloon","barcode","barcode_qr","book","book_plus","bookmark","calendar","camera","change","check","checkbox_off","checkbox_on","chevron_down","chevron_down_circle","chevron_left","chevron_left_circle","chevron_left2","chevron_right","chevron_right_circle","chevron_right2","chevron_up","chevron_up_circle","clock","cloud","coin","copy","credit_card","cross","cross_circle","cross_square","display_column1","display_column2","display_grid2","display_grid3","display_list","download","ellipsis","ellipsis_bottom","ellipsis_vertical","eraser","exclamation","exclamation_circle","exclamation_square","exclamation_triangle","eye","eye_close","folder","folder_open","folder_plus","globe","group","heart","home","hyphen","id_card","info","info_circle","info_square","keyboard","lock","lock_keyhole","lock_open","login","logout","mail","menu","mic","mic_mute","minus","minus_circle","minus_square","moon","no_sign","paper","pause","pencil","photo","play","plus","plus_circle","plus_square","printer","question","question_circle","question_square","radio_off","radio_on","refresh","scanner","search","send","settings","settings_slider","settings_spanner","share","skip_next","skip_prev","star","stop","sun","trash","upload","user","user_circle","user_plus","video_camera","volme_0","volme_1","volme_2","volme_3","volume_mute","voucher","zoom_in","zoom_out"],k=()=>{const o=[];return g.forEach(e=>{o.push(e),o.push(`${e}_l`),o.push(`${e}_b`)}),o},b=k();export{b as I,n as R,a as n};
//# sourceMappingURL=iconFont-a66db732.js.map
