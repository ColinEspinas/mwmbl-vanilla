var e,t,s,n,i={componentPrefix:"mwmbl",publicApiURL:"https://api.search.mwmbl.org/",searchQueryParam:"q",footerLinks:[{name:"Github",icon:"ph-github-logo-bold",href:"https://github.com/mwmbl/mwmbl"},{name:"Wiki",icon:"ph-info-bold",href:"https://github.com/mwmbl/mwmbl/wiki"}]},a=(e,t,s)=>{const n=`${i.componentPrefix}-${e}`;return customElements.get(n)||customElements.define(n,t,s),n},r={};e=r,t="default",s=()=>l,n=e=>l=e,Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0});var l=(e,t=100)=>{let s;return(...n)=>{clearTimeout(s),s=setTimeout((()=>{e.apply(void 0,n)}),t)}};const c=new class{constructor(){this.element=document.createElement("div")}on(e,t){this.element.addEventListener(e,t)}dispatch(e){this.element.dispatchEvent(e)}};a("search-bar",class extends HTMLElement{constructor(){super(),this.searchInput=null,this.__setup()}__setup(){this.innerHTML="\n  <div class=\"search-bar\">\n    <i class=\"ph-magnifying-glass-bold\"></i>\n    <input type='search' class='search-bar-input' placeholder='Search on mwmbl...' title='Use \"CTRL+K\" or \"/\" to focus.'>\n  </div>\n",this.searchInput=this.querySelector("input"),this.__events()}__events(){this.searchInput.addEventListener("input",r.default((async e=>{document.title=`MWMBL - ${this.searchInput.value||"Search"}`;const t=new URLSearchParams(document.location.search);this.searchInput.value?t.set(i.searchQueryParam,this.searchInput.value):t.delete(i.searchQueryParam);const s=document.location.protocol+"//"+document.location.host+document.location.pathname+(this.searchInput.value?"?":"")+t.toString();window.history.replaceState({path:s},"",s),this.searchInput.value?document.body.style.paddingTop="25px":document.body.style.paddingTop="30vh";const n=await(await fetch(`${i.publicApiURL}search?s=${this.searchInput.value}`)).json(),a=new CustomEvent("search",{detail:this.searchInput.value?n:null});c.dispatch(a)}))),document.addEventListener("keydown",(e=>{("k"===e.key&&e.ctrlKey||"/"===e.key||"Escape"===e.key)&&(e.preventDefault(),this.searchInput.focus())})),this.addEventListener("keydown",(e=>{if("ArrowDown"===e.key&&this.searchInput.value){e.preventDefault();const t=new CustomEvent("focus-result");c.dispatch(t)}})),c.on("focus-search",(e=>{this.searchInput.focus()}))}connectedCallback(){this.searchInput.focus();const e=new URLSearchParams(document.location.search).get(i.searchQueryParam);this.searchInput.value=e,this.searchInput.dispatchEvent(new Event("input"))}});var o=a("result",class extends HTMLLIElement{constructor(){super(),this.classList.add("result"),this.__setup()}__setup(){this.innerHTML=(({data:e})=>`\n  <a href='${e.url}'>\n    <p class='link'>${e.url}</p>\n    <p class='title'>${e.title}</p>\n    <p class='extract'>${e.extract}</p>\n  </a>\n`)({data:this.dataset}),this.__events()}__events(){this.addEventListener("keydown",(e=>{if(this.firstElementChild===document.activeElement&&("ArrowDown"===e.key&&(e.preventDefault(),this?.nextElementSibling?.firstElementChild.focus()),"ArrowUp"===e.key))if(e.preventDefault(),this.previousElementSibling)this.previousElementSibling?.firstElementChild.focus();else{const e=new CustomEvent("focus-search");c.dispatch(e)}}))}},{extends:"li"});var u=a("empty-result",class extends HTMLLIElement{constructor(){super(),this.classList.add("empty-result"),this.__setup()}__setup(){this.innerHTML="\n  <p>We could not find anything for your search...</p>\n"}},{extends:"li"});var h=a("home",class extends HTMLLIElement{constructor(){super(),this.classList.add("home"),this.__setup()}__setup(){this.innerHTML="\n  <p>\n    Welcome to mwmbl, the free, open-source and non-profit search engine.\n  </p>\n  <p>\n    You can start searching by using the search bar above!\n  </p>\n"}},{extends:"li"});a("results",class extends HTMLElement{constructor(){super(),this.results=null,this.__setup()}__setup(){this.innerHTML=`\n  <ul class='results'>\n    <li is='${h}'></li>\n  </ul>\n`,this.results=this.querySelector(".results"),this.__events()}__events(){c.on("search",(e=>{if(this.results.innerHTML="",e.detail)if(e.detail.length>0)for(const t of e.detail)this.results.innerHTML+=`\n            <li\n              is='${o}' \n              data-url='${this.__escapeString(t.url)}'\n              data-title='${this.__escapeString(this.__handleBold(t.title))}'\n              data-extract='${this.__escapeString(this.__handleBold(t.extract))}'\n            ></li>\n          `;else this.results.innerHTML=`\n          <li is='${u}'></li>\n        `;else this.results.innerHTML=`\n          <li is='${h}'></li>\n        `})),c.on("focus-result",(()=>{this.results.firstElementChild.firstElementChild.focus()}))}__handleBold(e){let t="";for(const s of e)s.is_bold?t+=`<strong>${s.value}</strong>`:t+=s.value;return t}__escapeString(e){return e.replace(/\"/g,"&#34;").replace(/\'/g,"&#39;")}});a("footer",class extends HTMLElement{constructor(){super(),this.__setup()}__setup(){this.innerHTML=(({data:e})=>`\n  <p class="footer-text">Find more on</p>\n  <ul class="footer-list">\n    ${e.links.map((e=>`\n      <li class="footer-item">\n        <a href="${e.href}" class="footer-link" target="__blank">\n          <i class="${e.icon}"></i>\n          <span>${e.name}</span>\n        </a>\n      </li>\n    `)).join("")}\n  </ul>\n`)({data:{links:i.footerLinks}}),this.__events()}__events(){}},{extends:"footer"});
//# sourceMappingURL=index.aac1c161.js.map
