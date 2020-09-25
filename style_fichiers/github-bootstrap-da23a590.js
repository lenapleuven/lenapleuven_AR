System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var e,t,n,o,s,i,a,r,c,u,d,l,m,p,f,g,h,j,v,L,b,y,T,w,E,k,M,H,S,x,q,I,_,A,C,F,R;return{setters:[function(p){e=p.o,t=p.a,n=p.b,o=p.q,s=p.c,i=p.g,a=p.r,r=p.v,c=p._,u=p.w,d=p.x,l=p.y,m=p.f},function(e){p=e.E,f=e.g,g=e.l,h=e._,j=e.H,v=e.U,L=e.L,b=e.r,y=e.D,T=e.R,w=e.o,E=e.a,k=e.Q,M=e.$,H=e.k,S=e.V,x=e.T,q=e.b,I=e.d,_=e.u,A=e.a0,C=e.a1,F=e.a2,R=e.a3}],execute:function(){function D(){return o(document,".js-selected-repository-field",HTMLInputElement)}function B(){const e=n(document,"#repository-menu-list"),t=Array.from(D()).map(e=>e.value);let s=!1;for(const n of o(e,"[role=menuitem]",HTMLButtonElement)){const e=t.includes(n.value);s||e||(s=!0),n.hidden=e}const i=e.querySelector(".js-no-repository-found");i instanceof HTMLElement&&(i.hidden=s)}function $(){const e=!n(document,".js-select-repositories-radio",HTMLInputElement).checked||D().length>0,t=document.querySelector(".js-integrations-install-form-submit");t&&t instanceof HTMLButtonElement&&(t.disabled=!e)}function P(){const e=D().length,t=n(document,".js-integration-total-repos");t.hidden=0===e,t.textContent=`Selected ${e} ${1===e?"repository":"repositories"}.`}e(".js-apps-install-select-repositories-container remote-input",e=>{e.addEventListener("remote-input-success",B),e.addEventListener("remote-input-error",B)}),t("details-menu-selected",".js-apps-install-select-repositories-menu",(function(e){const t=e.detail.relatedTarget,o=n(document,".js-integrations-install-repo-picked"),s=n(t,"template",HTMLTemplateElement).content.cloneNode(!0);o.prepend(s),n(document,".js-min-repository-error").hidden=!0,n(document,".js-max-repository-warning").hidden=!function(){const e=document.querySelector(".js-integrations-install-form");if(e instanceof HTMLFormElement){const t=+(e.getAttribute("data-max-repos")||0);return t>0&&D().length>=t}}(),P(),$(),B()}),{capture:!0}),t("change",".js-integrations-install-form",$),t("click",".js-repository-picker-remove",(function(e){s(e.currentTarget,".js-repository-picker-result").remove(),n(document,".js-min-repository-error").hidden=D().length>0,P(),$(),B()})),t("change",".js-installation-repositories-radio",(function(){const e=n(document,".js-select-repositories-radio",HTMLInputElement);n(document,".js-integrations-install-repo-selection").classList.toggle("has-removed-contents",!e.checked)}));let W=null;async function N(e){const t=e.getAttribute("data-item-name")||"items",n=e.value,s=parseInt(e.getAttribute("data-item-minimum"))||0,a=parseInt(e.getAttribute("data-item-maximum"))||300,r=parseInt(e.getAttribute("data-item-count"))||0,c=Math.max(s,parseInt(n)||0),u=c>a,d=document.querySelector(".js-downgrade-button");d instanceof HTMLButtonElement&&(d.disabled=c===r);const l=new URL(i(e,"data-url"),window.location.origin),m=new URLSearchParams(l.search.slice(1));m.append(t,c.toString()),document.querySelector(".js-transform-user")&&m.append("transform_user","1"),l.search=m.toString(),null==W||W.abort();const{signal:p}=W=new AbortController;let f=null;try{const e=await fetch(l.toString(),{signal:p,headers:{Accept:"application/json"}});if(!e.ok)return;f=await e.json()}catch(M){}if(p.aborted)return;if(!f)return;const j=document.querySelector(".js-contact-us");j&&j.classList.toggle("d-none",!u);const v=document.querySelector(".js-payment-summary");v&&v.classList.toggle("d-none",u);const L=document.querySelector(".js-submit-billing");L instanceof HTMLElement&&(L.hidden=u);const b=document.querySelector(".js-billing-section");b&&b.classList.toggle("has-removed-contents",f.free||f.is_enterprise_cloud_trial);const y=document.querySelector(".js-upgrade-info");y&&y.classList.toggle("d-none",c<=0);const T=document.querySelector(".js-downgrade-info");T&&T.classList.toggle("d-none",c>=0);const w=document.querySelector(".js-extra-seats-line-item");w&&w.classList.toggle("d-none",f.no_additional_seats),document.querySelector(".js-seat-field")&&function(e){for(const t of o(document,".js-seat-field",HTMLInputElement))t.value=e}(n);const E=document.querySelector(".js-minimum-seats-disclaimer");E&&(E.classList.toggle("tooltipped",5===f.seats),E.classList.toggle("tooltipped-nw",5===f.seats));const k=f.selectors;for(const o in k)for(const e of document.querySelectorAll(o))e.innerHTML=k[o];g(h(),"",f.url)}async function z(e,t,o){const s=n(document,e),i=n(document,t);function a(e){i.hidden=e,i.open=!1,s.hidden=!e}let r;a(!0);try{r=await o.json()}catch(u){return a(!1),void j()}const c=r.json;try{await v(c.job_url)}catch(u){return a(!1),void j()}a(!1),window.location=c.export_url}function X(){return n(document,".js-business-saml-provider-settings-form",HTMLFormElement)}function O(){return X().querySelector(".js-business-saml-form-inputs")}function U(){return n(document,".js-business-saml-user-provisioning",HTMLElement)}function K(e){e&&e.classList.remove("d-none")}function V(e){e&&e.classList.add("d-none")}function J(){return"1"===n(document,".js-business-saml-currently-enabled",HTMLInputElement).value&&!n(document,".js-business-enable-saml",HTMLInputElement).checked}function Y(){return n(document,".is-submit-button-value",HTMLInputElement)}function G(){X().submit()}function Q(){const e=document.querySelector(".js-business-enable-saml");e&&e instanceof HTMLInputElement&&(e.checked=!0,K(O()),K(U()))}function Z(){n(document,"#business_saml_provider_saml_deprovisioning_enabled",HTMLInputElement).checked=!1}function ee(){const e="0"===n(document,".js-business-two-factor-currently-enabled",HTMLInputElement).value;return n(document,".js-business-enable-two-factor",HTMLInputElement).checked&&e}function te(){return{packageTypeCheckboxes:o(document,".js-package-type-checkbox",HTMLInputElement),packageTypeList:n(document,".js-package-types-list",HTMLElement),packageSettingsManagedWarning:n(document,".js-enterprise-package-settings-managed-warning",HTMLElement),updateSettingsButton:n(document,".js-update-enterprise-package-settings",HTMLButtonElement),packageSettingsDisabledWarning:n(document,".js-enterprise-package-settings-disabled-warning",HTMLElement)}}async function ne(e){await function(e){return new Promise((function(t){function n(){e.hasFocus()&&(t(),e.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n),window.removeEventListener("blur",n))}e.addEventListener("visibilitychange",n),window.addEventListener("focus",n),window.addEventListener("blur",n),n()}))}(document),await new Promise(e=>setTimeout(e,1e3)),e instanceof HTMLButtonElement&&(e.disabled=!1)}function oe(e){e.preventDefault()}function se(e,t){const n=e.value;e.value=t.textContent||"",t.textContent=n}t("click",".js-org-signup-duration-change",e=>{e.preventDefault();const t=e.currentTarget,n=i(t,"data-plan-duration");!function(e){const t="year"===e?"month":"year";for(const n of o(document,".js-plan-duration-text"))n.innerHTML=e;for(const n of o(document,".unstyled-available-plan-duration-adjective"))n.innerHTML=`${e}ly`;for(const n of o(document,".js-org-signup-duration-change"))n.setAttribute("data-plan-duration",t)}(n),function(e){for(const t of o(document,".js-seat-field",HTMLInputElement)){const n=new URL(i(t,"data-url"),window.location.origin),o=new URLSearchParams(n.search.slice(1));o.delete("plan_duration"),o.append("plan_duration",e),n.search=o.toString(),t.setAttribute("data-url",n.toString())}}(n);for(const s of o(document,".js-seat-field",HTMLInputElement))N(s);!function(){for(const e of o(document,".js-unit-price"))e.hidden=!e.hidden}()}),e(".js-addon-purchase-field",{constructor:HTMLInputElement,add(e){p(e)&&N(e),f(e,(function(){N(e)}))}}),e(".js-addon-downgrade-field",{constructor:HTMLSelectElement,add(e){p(e)&&N(e),e.addEventListener("change",(function(){N(e)}))}}),t("details-menu-selected",".js-organization-container",(function(e){const t=document.querySelector(".js-addon-purchase-field"),n=e.target.querySelector("input:checked");if(t instanceof HTMLInputElement&&n instanceof HTMLInputElement){const e=n.getAttribute("data-upgrade-url");e&&(t.setAttribute("data-url",e),t.value="0",N(t))}}),{capture:!0}),a(".js-audit-log-export-form",(async function(e,t){await z(".js-audit-log-exporting",".js-audit-log-export-menu",t)})),a(".js-audit-log-git-event-export-form",(async function(e,t){await z(".js-audit-log-git-event-exporting",".js-audit-log-git-event-export-menu",t)})),t("click",".js-preview-message",(function(e){const t=(document.querySelector("#custom_message_input_value")||document.querySelector("#custom_message_input_value")).value;n(document,"#custom_message_preview_value",HTMLInputElement).value=t,e.currentTarget.form.submit()})),t("click",".js-admin-settings-policy-input",(function(e){const t=e.currentTarget.form,o=n(t,'[aria-checked="true"]',HTMLButtonElement);b(t,o)})),async function(){await L;const e=document.querySelector(".js-sso-login-submit");e&&(e.disabled=!0)}(),t("click",".js-business-enable-saml",(function(e){e.currentTarget.checked?(K(O()),K(U())):(V(O()),V(U()))})),t("click",".js-business-saml-submit",(function(e){e.preventDefault();const t=e.currentTarget;b(X(),t)})),t("submit",".js-business-saml-provider-settings-form",(function(e){e.preventDefault(),"test_settings"===Y().name?G():"save_settings"===Y().name&&(J()?async function(){(await y({content:n(document,"#disable-saml-confirmation",HTMLTemplateElement).content.cloneNode(!0)})).addEventListener("dialog:remove",Q)}():G())})),t("submit",".js-enterprise-user-provisioning-form",(function(e){const t=n(e.currentTarget,'[name="business_saml_provider_saml_deprovisioning_enabled_previously"]',HTMLInputElement),o=n(e.currentTarget,"#business_saml_provider_saml_deprovisioning_enabled",HTMLInputElement);"0"===t.value&&o.checked&&(e.preventDefault(),async function(){(await y({content:n(document,"#enable-saml-deprovisioning-confirmation",HTMLTemplateElement).content.cloneNode(!0)})).addEventListener("dialog:remove",Z)}())})),t("click",".js-enable-enable-saml-provider-button",(function(){const e=n(document,".js-enable-saml-provider-button",HTMLButtonElement),t=n(document,".js-enable-saml-provider-instruction",HTMLElement);e.disabled=!1,t.hidden=!0})),t("click",".js-suggested-org",(function(e){const t=e.currentTarget;if("true"===t.getAttribute("aria-disabled"))return;const o=s(t,"form"),i=n(t,".js-suggested-org-details-source");n(o,".js-suggested-org-details-target").innerHTML=i.innerHTML})),t("change",".js-invite-business-org-auto-complete",(function(e){const t=e.currentTarget,o=s(t,"form"),i=n(o,".js-suggested-org-details-target");t.value||(i.innerHTML="")})),t("click",".js-business-two-factor-submit-button",(function(e){ee()||e.preventDefault()})),t("change",".js-repo-types-allowed-radio",()=>{const e=o(document,".js-repo-type-creation-checkbox",HTMLInputElement),t=o(document,".js-repo-type-creation-label",HTMLElement);for(const n of e)n.disabled=!1;for(const n of t)n.classList.remove("text-gray-light")}),t("change",".js-repo-types-disallowed-radio",()=>{const e=o(document,".js-repo-type-creation-checkbox",HTMLInputElement),t=o(document,".js-repo-type-creation-label",HTMLElement);for(const n of e)n.disabled=!0,n.checked=!1;for(const n of t)n.classList.add("text-gray-light")}),t("change",".js-provisioning-enabled-checkbox",()=>{if("0"===n(document,'[name="business_saml_provider_provisioning_enabled_previously"]',HTMLInputElement).value)return;const e=n(document,".js-provisioning-enabled-checkbox",HTMLInputElement),t=o(document,".js-disable-when-user-provisioning-disabled-checkbox",HTMLInputElement);if(e.checked)for(const o of t){const e=n(document,`[name='${o.id}_previously']`,HTMLInputElement);s(o,".js-deprovisioning-checkbox",HTMLElement).classList.remove("checkbox-disabled"),o.removeAttribute("disabled"),"1"===e.value?o.checked=!0:o.removeAttribute("checked")}else for(const n of t)n.setAttribute("disabled","disabled"),n.checked=!1,s(n,".js-deprovisioning-checkbox",HTMLElement).classList.add("checkbox-disabled")}),t("change",".js-enterprise-package-settings-radio",e=>{const t=te(),n=e.currentTarget;if(null==n)return;const o=n.getAttribute("data-package-setting-value");for(const s of t.packageTypeCheckboxes)s.hidden="managed"!==o;t.packageTypeList.hidden="disabled"===o,t.packageSettingsManagedWarning.hidden="managed"!==o,t.packageSettingsDisabledWarning.hidden="disabled"!==o,t.updateSettingsButton.disabled=!1}),t("change",".js-package-type-checkbox",()=>{te().updateSettingsButton.disabled=!1}),t("submit","form.js-post-recovery-token",(function(e){const t=e.currentTarget;t instanceof HTMLFormElement&&(e.preventDefault(),async function(e){const t=n(document,".js-delegated-account-recovery-submit",HTMLButtonElement),o=n(document,".js-create-recovery-token-form",HTMLFormElement);let s;e.classList.remove("failed"),e.classList.add("loading"),t.disabled=!0;try{const e=await fetch(o.action,{method:o.method,body:new FormData(o),headers:{"X-Requested-With":"XMLHttpRequest"}});e.ok&&(s=await e.json())}catch(i){}e.classList.remove("loading"),t.disabled=!1,s?(T(e,{token:s.token,state:s.state_url}),e.submit()):e.classList.add("failed")}(t))})),e("form.js-recovery-provider-auto-redirect",{constructor:HTMLFormElement,initialize:function(e){e.submit()}}),e("#js-oauth-authorize-btn",e=>{ne(e)}),e("#js-manual-authorize-redirect",e=>{!async function(e){e.addEventListener("click",oe),e.classList.add("text-gray"),await new Promise(e=>setTimeout(e,3e3)),e.classList.remove("text-gray"),e.removeEventListener("click",oe)}(e)}),t("click","#load-readme",(function(e){const t=n(document,"#gollum-editor-body",HTMLTextAreaElement),o=n(document,"#editor-body-buffer"),s=n(document,"#undo-load-readme"),a=o.textContent,r=i(e.currentTarget,"data-readme-name");se(t,o),e.currentTarget instanceof HTMLButtonElement&&(e.currentTarget.disabled=!0,e.currentTarget.textContent=`${r} loaded`,s.classList.remove("d-none"),t.addEventListener("input",(function e(){t.value!==a&&(s.classList.add("d-none"),t.removeEventListener("input",e))})))})),t("click","#undo-load-readme",(function(e){se(n(document,"#gollum-editor-body",HTMLTextAreaElement),n(document,"#editor-body-buffer"));const t=n(document,"#load-readme",HTMLButtonElement),o=i(t,"data-readme-name");t.disabled=!1,t.textContent=`Load ${o}`,e.currentTarget.classList.add("d-none")})),a(".js-toggler-container .js-set-approval-state",(async function(e,t){const n=s(e,".js-toggler-container");n.classList.add("loading");const o=await t.json();"approved"===o.json.approval_state?n.classList.add("on"):"denied"===o.json.approval_state&&(n.classList.add("revoked"),n.classList.remove("on")),n.classList.remove("loading")})),a(".js-request-access-approval-form",(async function(e,t){await t.text();const o=i(e,"data-container-id");n(document,`#${o}`).classList.add("on")})),t("details-menu-selected",".js-select-plan-menu",(function(e){const t=e.detail.relatedTarget,n=document.querySelectorAll(".js-plan-card-section");for(const a of n)a instanceof HTMLElement&&(a.hidden=!0);const o=e.currentTarget.querySelectorAll("[role^=menuitem]"),s=Array.from(o).indexOf(t),i=Array.from(n)[s];i instanceof HTMLElement&&(i.hidden=!1)}),{capture:!0}),e(".js-suggested-usernames-container",(function(e){const t=o(e,".js-suggested-username",HTMLInputElement),n=document.querySelector(".js-signup-form");if(n&&0!==t.length)for(const o of t)n.appendChild(o)})),w(".js-email-notice-trigger",(function(e){const t=o(document,".js-email-notice");for(const n of t)n.classList.add("notice-highlight");e.addEventListener("blur",(function(){for(const e of t)e.classList.remove("notice-highlight")}))})),e(".js-plan-choice:checked",{add(e){const t=e.closest(".plan-row");t&&t.classList.add("selected")},remove(e){const t=e.closest(".plan-row");t&&t.classList.remove("selected")}});const ie=new WeakMap;function ae(e){const t=e.target,o=s(t,"form");if(t.closest("input[type=text]")&&!ie.get(o)){const e=n(o,".js-signup-source",HTMLInputElement);let t=e.value;e.hasAttribute("data-ga-label")&&(t=`${t}${e.getAttribute("data-ga-label")}`),k({category:"Sign up",action:"Attempt",label:t}),ie.set(o,!0)}}function re(){const e=n(document,".js-password-with-confirmation",HTMLInputElement),t=n(document,".js-password-confirm",HTMLInputElement);t.value!==e.value?function(e){const t=s(e,".js-form-group");t.classList.add("errored");const n=e.getAttribute("data-validity-message");if(n){e.setCustomValidity(n);const t=s(e,"form",HTMLFormElement);S(t)}const o=t.querySelector(".error"),i=e.getAttribute("data-error-message");if(!o&&i){const e=document.createElement("dd");e.classList.add("error"),e.innerHTML=i,t.appendChild(e)}}(t):function(e){const t=s(e,".js-form-group");e.setCustomValidity(""),t.classList.remove("errored");const n=s(e,"form",HTMLFormElement);S(n);const o=t.querySelector(".error");o&&t.removeChild(o)}(t)}function ce(e,t,n){const o=e.getBoundingClientRect().height,s=t.getBoundingClientRect(),i=n.getBoundingClientRect();let a=i.top;a+s.height+10>=o&&(a=Math.max(o-s.height-10,0));let r=i.right;null!=n.closest(".js-build-status-to-the-left")&&(r=Math.max(i.left-s.width-10,0)),t.style.top=`${a}px`,t.style.left=`${r}px`,t.style.right="auto"}async function ue(e){const t=e.querySelector(".js-dropdown-details"),o=e.querySelector(".js-status-dropdown-menu")||e.closest(".js-status-dropdown-menu");if(!(o instanceof HTMLElement))return;const s=o.querySelector(".js-status-loader");if(!s)return;const a=n(o,".js-status-loading"),r=n(o,".js-status-error"),c=i(s,"data-contents-url");let u;a.classList.remove("d-none"),r.classList.add("d-none");try{await x(),u=await q(document,c)}catch(d){a.classList.add("d-none"),r.classList.remove("d-none")}u&&(s.replaceWith(u),n(o,".js-details-container").classList.add("open"),t&&o.classList.contains("js-append-menu-to-body")&&ce(document.body,o,t))}function de(e){ue(e.currentTarget)}e(".js-signup-form",{subscribe:e=>E(e,"input",ae)}),t("submit",".js-signup-form-submit",(function(e){const t=e.currentTarget,o=n(t,".js-signup-source",HTMLInputElement);let s=o.value;o.hasAttribute("data-ga-label")&&(s=`${s}${o.getAttribute("data-ga-label")}`),k({category:"Sign up",action:"Submit",label:s})})),t("submit",".js-org-survey",(function(e){const t=e.currentTarget,n=o(t,".js-other-text",HTMLInputElement);for(const o of n){const e=M(o,"js-other-hidden-input");e instanceof HTMLInputElement&&(e.checked=o.value.length>0)}})),e(".js-show-next-question-trigger:checked",{constructor:HTMLElement,add(e){const t=e.closest(".js-show-next-question");if(t instanceof HTMLElement){const e=M(t,"js-hidden-question");e&&(e.hidden=!1)}},remove(e){const t=e.closest(".js-show-next-question");if(t instanceof HTMLElement){const e=M(t,"js-hidden-question");e&&(e.hidden=!0)}}}),e(".js-octocaptcha-parent",(function(e){const t=n(e,".js-octocaptcha-spinner"),o=n(e,".js-octocaptcha-success"),s=n(e,".js-octocaptcha-token",HTMLInputElement),i=n(e,".js-octocaptcha-form-submit",HTMLButtonElement),a=n(e,".js-octocaptcha-frame-container"),r=n(e,".js-octocaptcha-frame",HTMLIFrameElement),c=s.getAttribute("data-octocaptcha-url"),u=s.getAttribute("data-octocaptcha-timeout"),d=u?parseInt(u):3e4;let l=!1;const m=()=>{l||(l=!0,t.classList.add("d-none"),o.classList.remove("d-none"),f())},p=()=>{if(l)return;const t=document.createElement("input");t.type="hidden",t.id="error_loading_captcha",t.name="error_loading_captcha",t.value="1",e.appendChild(t),s.required=!1,m()},f=()=>{e.checkValidity()&&(i.disabled=!1)};setTimeout(p,d),r.addEventListener("error",p),window.addEventListener("message",e=>{if(e.origin!==c)return;const n=e.data&&e.data.event;var o;"captcha-loaded"===n?l||(l=!0,t.classList.add("d-none"),a.classList.remove("v-hidden","zero-height"),null===(o=r.contentWindow)||void 0===o||o.postMessage({event:"captcha-loaded-ack"},c||"")):"captcha-complete"===n?(s.value=e.data.sessionToken,(()=>{const e=a.getAttribute("data-ga-event-category");e&&k({category:e,action:"success",label:"captcha verified"})})(),f()):"captcha-suppressed"===n&&m()})})),e(".js-survey-answer-choice:checked",{add(e){const t=e.closest(".js-answer");if(t){const e=t.querySelector(".js-answer-choice");e&&(e.classList.remove("border-black-fade","bg-white"),e.classList.add("border-blue","bg-blue-light"))}const n=document.querySelector(`.js-other-input-box[data-other-input-for=${e.getAttribute("data-question-short-text")}]`);n instanceof HTMLElement&&e.classList.contains("js-other-choice")&&(n.hidden=!1)},remove(e){const t=e.closest(".js-answer");if(t){const e=t.querySelector(".js-answer-choice");e&&(e.classList.remove("border-blue","bg-blue-light"),e.classList.add("border-black-fade","bg-white"))}const n=document.querySelector(`.js-other-input-box[data-other-input-for=${e.getAttribute("data-question-short-text")}]`);n instanceof HTMLElement&&e.classList.contains("js-other-choice")&&(n.hidden=!0)}}),e(".js-allow-multiple:checked",{constructor:HTMLInputElement,add(e){const t=parseInt(e.getAttribute("data-max-choices")||""),n=s(e,".js-question"),i=o(n,".js-allow-multiple",HTMLInputElement);if(i.filter(e=>!0===e.checked).length>=t)for(const o of i)!1===o.checked&&(o.disabled=!0)},remove(e){const t=s(e,".js-question");for(const n of o(t,".js-allow-multiple",HTMLInputElement))n.disabled=!1}}),H("keyup",".js-password-with-confirmation",()=>{""!==n(document,".js-password-confirm",HTMLInputElement).value&&re()}),H("keyup",".js-password-confirm",re),e(".js-site-status-template",{constructor:HTMLTemplateElement,initialize(e){!async function(e){var t,n;const o=null===(n=null===(t=document.head)||void 0===t?void 0:t.querySelector('meta[name="site-status-api-url"]'))||void 0===n?void 0:n.content;if(!o)return;const s=await(await window.fetch(o)).json(),i=s.status.indicator;"none"!==i&&e.before(new r(e,{time:s.page.updated_at,description:s.status.description,class:"minor"===i?"flash-warn":"flash-error"}))}(e)}}),e(".js-contact-javascript-flag",{constructor:HTMLInputElement,add(e){e.value="true"}}),t("toggle",".js-build-status .js-dropdown-details",(function(e){const t=e.currentTarget,o=t.querySelector(".js-status-dropdown-menu");function s(){t.hasAttribute("open")||a()}function i(e){o.contains(e.target)||a()}function a(){t.removeAttribute("open"),o.classList.add("d-none"),t.appendChild(o),t.removeEventListener("toggle",s),window.removeEventListener("scroll",i)}o&&(t.addEventListener("toggle",s),o.classList.contains("js-close-menu-on-scroll")&&window.addEventListener("scroll",i,{capture:!0}),o.classList.remove("d-none"),n(o,".js-details-container").classList.add("open"),o.classList.contains("js-append-menu-to-body")&&(document.body.appendChild(o),ce(document.body,o,t)))}),{capture:!0}),t("click",".js-status-retry",({currentTarget:e})=>{ue(e)}),e(".js-build-status",{add(e){e.addEventListener("mouseenter",de,{once:!0})},remove(e){e.removeEventListener("mouseenter",de)}});let le=class SubTasksElement extends HTMLElement{async addSubtask(e){e.preventDefault();const t=this.inputField.value;if(!t)return;const n=e.target;try{const e=await q(document,n.action,{method:n.method,body:new FormData(n)});this.container.insertBefore(e,this.errorRow),this.inputField.value="",this.updateIndices(),this.showHeader()}catch(o){const e=o.response;this.inputField.value=t,this.showError(await e.text())}}showError(e){this.error.hidden=!1,this.error.textContent=e||""}resetError(){this.error.hidden=!0,this.error.textContent=""}updateIndices(){for(const[e,t]of this.indexFields.entries())t.textContent=String(e+1)}showHeader(){this.header.hidden=!1}hideHeader(){this.header.hidden=!0}async removeSubtask(e){var t;e.preventDefault();const n=e.target;let o;try{o=await fetch(n.action,{method:n.method,body:new FormData(n),headers:{accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch(s){return void location.reload()}o.ok?(null===(t=n.closest(".js-subtask-row"))||void 0===t||t.remove(),this.updateIndices(),0===this.allSubtasks.length&&this.hideHeader()):this.showError(await o.text())}};function me(e){const t=s(e,".js-topic-save-notice-container"),o=n(t,".js-repo-topics-save-notice");o.classList.remove("d-none"),o.classList.add("d-inline-block","anim-fade-in"),setTimeout(()=>{o.classList.remove("d-inline-block"),o.classList.add("d-none")},1900)}function pe(e){const t=n(e,".js-topic-suggestions-box");t.querySelector(".js-topic-suggestion")||t.remove()}async function fe(e){const t=e.querySelector(".js-topic-suggestions-container");if(!t)return;const n=i(t,"data-url"),o=await q(document,n);t.innerHTML="",t.appendChild(o)}function ge(){return n(document,".js-use-security-key",HTMLButtonElement)}function he(e,t){for(const n of document.querySelectorAll(".js-u2f-message"))n instanceof HTMLElement&&(n.hidden=!0);if(n(document,e).hidden=!1,t){const e=ge();e.textContent=i(e,"data-retry-message")}}function je(){return n(document,".js-u2f-auth-form",HTMLFormElement)}async function ve(){try{he(".js-webauthn-auth-waiting",!1);const e=JSON.parse(i(je(),"data-webauthn-sign-request")),t=await R(e);he(".js-webauthn-auth-success",!1),ge().disabled=!0,function(e){const t=je();n(t,".js-u2f-auth-response",HTMLInputElement).value=JSON.stringify(e),b(t)}(t)}catch(e){throw he(".js-webauthn-auth-error",!0),e}}c([u],le.prototype,"inputField",void 0),c([u],le.prototype,"container",void 0),c([u],le.prototype,"errorRow",void 0),c([u],le.prototype,"header",void 0),c([u],le.prototype,"error",void 0),c([d],le.prototype,"allSubtasks",void 0),c([d],le.prototype,"indexFields",void 0),le=c([l],le),t("click",".js-tagsearch-nav-item",e=>{s(e.currentTarget,".js-tagsearch-popover-content").scrollTop=0}),e(".js-file-line-container, .js-code-block-container",{constructor:HTMLElement,subscribe(e){const t=document.querySelector(".js-tagsearch-popover");if(!(t instanceof HTMLElement))return{unsubscribe(){}};const o=n(t,".js-tagsearch-popover-content"),s=new WeakMap,a=new WeakMap;let r;async function c(n){const o=function(e,t,n){let o,s;if(document.caretPositionFromPoint){const e=document.caretPositionFromPoint(t,n);e&&(o=e.offsetNode,s=e.offset)}else if(document.caretRangeFromPoint){const e=document.caretRangeFromPoint(t,n);e&&(o=e.startContainer,s=e.startOffset)}if(!o||"number"!=typeof s||o.nodeType!==Node.TEXT_NODE)return;const i=o.textContent;if(!i)return null;const a=function(e,t,n){let o;for(;o=t.exec(e);){const e=o.index+o[0].length;if(o.index<=n&&n<e)return[o[0],o.index,e]}return null}(i,e,s);if(!a)return null;const r=document.createRange();return r.setStart(o,a[1]),r.setEnd(o,a[2]),r}(/\w+[!?]?/g,n.clientX,n.clientY);if(!o)return;const r=o.commonAncestorContainer.parentElement;for(const e of r.classList)if(["pl-token","pl-c","pl-s","pl-k"].includes(e))return;const c=o.toString();if(!c||c.match(/\n|\s|[();&.=",]/))return;let u=a.get(r);if(u||(u=new Set,a.set(r,u)),u.has(c))return;u.add(c);let l=i(t,"data-tagsearch-lang");if("HTML+ERB"===l){if(!r.closest(".pl-sre"))return;l="Ruby"}if(e.classList.contains("js-code-block-container")&&(l=function(e){const t=e.closest(".highlight");if(t)for(const n of t.classList)switch(n){case"highlight-source-go":return"Go";case"highlight-source-js":return"JavaScript";case"highlight-source-python":return"Python";case"highlight-source-ruby":return"Ruby";case"highlight-source-ts":return"TypeScript"}return null}(r),!l))return;const m=function(e){let t=e.startContainer,n=e.startOffset;for(;;){let e=t.previousSibling;for(;e;)n+=(e.textContent||"").length,e=e.previousSibling;const o=t.parentElement;if(!o)return[0,0];if(o.classList.contains("js-file-line")){const e=o.previousElementSibling;if(!e.classList.contains("js-line-number"))throw new Error("invariant");return[parseInt(e.getAttribute("data-line-number")||"1",10)-1,n]}t=o}}(o),p=await async function(e,t,n,o){const s=i(e,"data-tagsearch-url"),a=i(e,"data-tagsearch-path"),r=i(e,"data-tagsearch-ref"),c=new URL(s,window.location.origin),u=new URLSearchParams;u.set("q",t),u.set("blob_path",a),u.set("ref",r),u.set("language",n),u.set("row",o[0].toString()),u.set("col",o[1].toString()),c.search=u.toString();const d=await(await I(c.toString())).text();return/js-tagsearch-no-definitions/.test(d)?"":d}(t,c,l,m);if(!p)return;const f=document.createElement("span");f.classList.add("pl-token"),f.addEventListener("click",d),f.setAttribute("data-hydro-click",i(t,"data-hydro-click")),f.setAttribute("data-hydro-click-hmac",i(t,"data-hydro-click-hmac")),s.set(f,p),o.surroundContents(f)}function u(){o.scrollTop=0}function d(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const n=e.currentTarget;n===r?m():(function(e){r&&r.classList.remove("active");r=e,r.classList.add("active"),o.innerHTML=s.get(e)||"",l(e)}(n),function(){if(!t.hidden)return void u();t.hidden=!1,u(),document.addEventListener("click",f),document.addEventListener("keyup",g),window.addEventListener("resize",p)}()),e.preventDefault()}function l(e){const n=e.getClientRects()[0]||{bottom:0,left:0};t.style.position="absolute",t.style.top=`${window.scrollY+n.bottom+7}px`,t.style.left=`${window.scrollX+n.left}px`}function m(){t.hidden||(t.hidden=!0,r&&r.classList.remove("active"),r=void 0,document.removeEventListener("click",f),document.removeEventListener("keyup",g),window.removeEventListener("resize",p))}function p(){r instanceof HTMLElement&&l(r)}function f(e){const{target:n}=e;n instanceof Node&&(t.contains(n)||r.contains(n)||m())}function g(e){switch(e.key){case"Escape":m()}}return e.addEventListener("mousemove",c),{unsubscribe(){e.removeEventListener("mousemove",c)}}}}),t("details:toggled",".js-ssws-token",(function(e){const t=e.currentTarget,o=n(t,"input[type=password]",HTMLInputElement);t.classList.contains("open")&&o.focus()})),t("change",".js-template-repository-choice",(function(e){const t=e.target,a=t.checked&&""!==t.value,r=t.form;n(r,".js-repository-auto-init-options").classList.toggle("has-removed-contents",a);const c=o(r,".js-template-repository-setting"),u=o(r,".js-template-repository-name-display");if(a){const e=s(t,".js-template-repository-choice-container"),o=n(e,".js-template-repository-name"),a=i(t,"data-owner"),c=r.querySelector(`.js-repository-owner-choice[value="${a}"]`);if(c instanceof HTMLInputElement)c.checked=!0,m(c,"change");else{const e=n(r,".js-repository-owner-choice.js-repository-owner-is-viewer",HTMLInputElement);e.checked=!0,m(e,"change")}for(const t of u)t.textContent=o.textContent}else for(const n of u)n.textContent="";for(const n of c)n.hidden=!a})),t("click",".js-accept-topic-button",(function(e){const t=e.currentTarget,o=s(t,".js-topic-form-area"),a=s(t,".js-topic-suggestion"),r=n(o,".js-template"),c=n(o,".js-tag-input-selected-tags"),u=r.cloneNode(!0),d=i(t,"data-topic-name");n(u,"input",HTMLInputElement).value=d,n(u,".js-placeholder-tag-name").replaceWith(d),u.classList.remove("d-none","js-template"),c.appendChild(u),a.remove(),pe(o)})),a(".js-accept-topic-form",(async function(e,t){await t.html();const o=s(e,".js-topic-form-area"),i=s(e,".js-topic-suggestion"),a=n(o,".js-template"),r=n(o,".js-tag-input-selected-tags"),c=a.cloneNode(!0),u=n(i,'input[name="input[name]"]',HTMLInputElement).value;n(c,"input",HTMLInputElement).value=u,n(c,".js-placeholder-tag-name").replaceWith(u),c.classList.remove("d-none","js-template"),r.appendChild(c),i.remove(),fe(o),pe(o),me(e)})),t("click",".js-decline-topic-button",(function(e){const t=e.currentTarget,n=s(t,".js-topic-form-area"),o=s(t,".js-topic-suggestion");setTimeout(()=>{o.remove(),pe(n)},0)})),a(".js-decline-topic-form",(async function(e,t){await t.html(),me(e);const n=s(e,".js-topic-form-area");s(e,".js-topic-suggestion").remove(),fe(n),pe(n)})),a(".js-repo-topics-edit-form",(async function(e,t){const i=s(e,".js-topic-form-area");i.classList.remove("errored"),n(i,".js-topic-error").textContent="";for(const n of i.querySelectorAll(".js-tag-input-tag.invalid-topic"))n.classList.remove("invalid-topic");try{await t.json(),me(e),fe(i)}catch(a){const t=a.response.json;if(t.message&&(i.classList.add("errored"),n(i,".js-topic-error").textContent=t.message),t.invalidTopics){const n=o(e,".js-topic-input",HTMLInputElement);for(const e of t.invalidTopics)for(const t of n)if(t.value===e){s(t,".js-tag-input-tag").classList.add("invalid-topic")}}}})),t("tags:changed",".js-repo-topics-edit-form",(function(e){const t=e.target;b(t)})),t("click",".js-reveal-hidden-topics",(function(e){const t=e.target,n=s(t,".js-hidden-topics-container").querySelector(".js-hidden-topics");n&&(n.classList.remove("d-none"),t.remove())})),t("click",".js-hide-content-attachment",(function(e){e.preventDefault(),function(e){const t=s(e,".js-content-attachment"),o=s(e,"[data-unfurl-hide-url]"),a=i(o,"data-unfurl-hide-url"),r=n(o,".js-data-unfurl-hide-url-csrf",HTMLInputElement),c=i(e,"data-id"),u=new XMLHttpRequest;u.onload=function(){u.status>=200&&u.status<300&&t.remove()},u.open("POST",a);const d=new FormData;d.append("id",c),d.append("authenticity_token",r.value),u.send(d)}(e.currentTarget)})),e(".js-content-attachment .max--md",(function(e){const t=n(e,".markdown-body");var o;(t.clientHeight<188||""===((o=t).textContent||"").trim()&&1===(o.querySelectorAll("img")||[]).length)&&(e.classList.remove("max--md"),n(e,".Details-content--closed").hidden=!0,n(e,".Details-content--open").hidden=!0)})),e(".js-webauthn-support",{constructor:HTMLInputElement,add:function(e){_(e,A())}}),e(".js-webauthn-iuvpaa-support",{constructor:HTMLInputElement,add:function(e){!async function(){_(e,await C())}()}}),e(".js-u2f-auth-form-body",(function(e){if(!e)return;const t=F();if(e.classList.toggle("unavailable",!t),t){const e=ge();e.hidden=!1,e.classList.contains("js-webauthn-autofocus")&&e.focus()}})),t("click",".js-use-security-key",(function(e){!function(e){e&&e.preventDefault(),F()&&ve()}(e)})),t("upload:setup",".js-upload-enterprise-installation-user-accounts-upload",(function(e){const{form:t}=e.detail,n=e.currentTarget.getAttribute("data-business-id");n&&t.append("business_id",n);const o=e.currentTarget.getAttribute("data-enterprise-installation-id");o&&t.append("enterprise_installation_id",o)})),t("upload:complete",".js-upload-enterprise-installation-user-accounts-upload",(function(e){const{attachment:t}=e.detail,o=n(e.currentTarget,".js-enterprise-installation-user-accounts-upload-id",HTMLInputElement);o.value=t.id;const s=n(e.currentTarget,".js-enterprise-installation-id",HTMLInputElement),i=e.currentTarget.getAttribute("data-enterprise-installation-id");i&&(s.value=i);const a=o.form;a&&a.submit()}))}}}));
//# sourceMappingURL=github-bootstrap-c2866f57.js.map
