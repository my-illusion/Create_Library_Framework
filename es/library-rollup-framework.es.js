var t=function(t,r,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}},r=function(t){try{return!!t()}catch(t){return!0}},n={}.toString,e=function(t){return n.call(t).slice(8,-1)},o="".split,i=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==e(t)?o.call(t,""):Object(t)}:Object,u=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},c=Math.ceil,f=Math.floor,a=function(t){return isNaN(t=+t)?0:(t>0?f:c)(t)},l=Math.min,s=function(t){return t>0?l(a(t),9007199254740991):0},p=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=Array.isArray||function(t){return"Array"==e(t)};function h(t,r){return t(r={exports:{}},r.exports),r.exports}var v,g,m,b,d="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")(),w=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),S=d.document,O=p(S)&&p(S.createElement),j=!w&&!r((function(){return 7!=Object.defineProperty((t="div",O?S.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),A=function(t){if(!p(t))throw TypeError(String(t)+" is not an object");return t},E=function(t,r){if(!p(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!p(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!p(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!p(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},M=Object.defineProperty,P={f:w?M:function(t,r,n){if(A(t),r=E(r,!0),A(n),j)try{return M(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},_=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},T=w?function(t,r,n){return P.f(t,r,_(1,n))}:function(t,r,n){return t[r]=n,t},I=function(t,r){try{T(d,t,r)}catch(n){d[t]=r}return r},x=h((function(t){var r=d["__core-js_shared__"]||I("__core-js_shared__",{});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.0.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=0,F=Math.random(),L=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++k+F).toString(36))},N=!r((function(){String(Symbol())})),C=x("wks"),z=d.Symbol,D=function(t){return C[t]||(C[t]=N&&z[t]||(N?z:L)("Symbol."+t))},G=D("species"),W=function(t,r){var n;return y(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!y(n.prototype)?p(n)&&null===(n=n[G])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)},q=D("species"),B={}.propertyIsEnumerable,K=Object.getOwnPropertyDescriptor,R={f:K&&!B.call({1:2},1)?function(t){var r=K(this,t);return!!r&&r.enumerable}:B},U=function(t){return i(u(t))},V={}.hasOwnProperty,Y=function(t,r){return V.call(t,r)},$=Object.getOwnPropertyDescriptor,H={f:w?$:function(t,r){if(t=U(t),r=E(r,!0),j)try{return $(t,r)}catch(t){}if(Y(t,r))return _(!R.f.call(t,r),t[r])}},J=x("native-function-to-string",Function.toString),Q=d.WeakMap,X="function"==typeof Q&&/native code/.test(J.call(Q)),Z=x("keys"),tt={},rt=d.WeakMap;if(X){var nt=new rt,et=nt.get,ot=nt.has,it=nt.set;v=function(t,r){return it.call(nt,t,r),r},g=function(t){return et.call(nt,t)||{}},m=function(t){return ot.call(nt,t)}}else{var ut=Z[b="state"]||(Z[b]=L(b));tt[ut]=!0,v=function(t,r){return T(t,ut,r),r},g=function(t){return Y(t,ut)?t[ut]:{}},m=function(t){return Y(t,ut)}}var ct,ft,at,lt,st,pt,yt,ht,vt,gt,mt,bt={set:v,get:g,has:m,enforce:function(t){return m(t)?g(t):v(t,{})},getterFor:function(t){return function(r){var n;if(!p(r)||(n=g(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},dt=h((function(t){var r=bt.get,n=bt.enforce,e=String(J).split("toString");x("inspectSource",(function(t){return J.call(t)})),(t.exports=function(t,r,o,i){var u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof r||Y(o,"name")||T(o,"name",r),n(o).source=e.join("string"==typeof r?r:"")),t!==d?(u?!f&&t[r]&&(c=!0):delete t[r],c?t[r]=o:T(t,r,o)):c?t[r]=o:I(r,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&r(this).source||J.call(this)}))})),wt=Math.max,St=Math.min,Ot=(ct=!1,function(t,r,n){var e,o=U(t),i=s(o.length),u=function(t,r){var n=a(t);return n<0?wt(n+r,0):St(n,r)}(n,i);if(ct&&r!=r){for(;i>u;)if((e=o[u++])!=e)return!0}else for(;i>u;u++)if((ct||u in o)&&o[u]===r)return ct||u||0;return!ct&&-1}),jt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),At={f:Object.getOwnPropertyNames||function(t){return function(t,r){var n,e=U(t),o=0,i=[];for(n in e)!Y(tt,n)&&Y(e,n)&&i.push(n);for(;r.length>o;)Y(e,n=r[o++])&&(~Ot(i,n)||i.push(n));return i}(t,jt)}},Et={f:Object.getOwnPropertySymbols},Mt=d.Reflect,Pt=Mt&&Mt.ownKeys||function(t){var r=At.f(A(t)),n=Et.f;return n?r.concat(n(t)):r},_t=function(t,r){for(var n=Pt(r),e=P.f,o=H.f,i=0;i<n.length;i++){var u=n[i];Y(t,u)||e(t,u,o(r,u))}},Tt=/#|\.prototype\./,It=function(t,n){var e=kt[xt(t)];return e==Lt||e!=Ft&&("function"==typeof n?r(n):!!n)},xt=It.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},kt=It.data={},Ft=It.NATIVE="N",Lt=It.POLYFILL="P",Nt=It,Ct=H.f,zt=(lt=1==(ft=1),st=2==ft,pt=3==ft,yt=4==ft,ht=6==ft,vt=5==ft||ht,gt=at||W,function(r,n,e){for(var o,c,f=Object(u(r)),a=i(f),l=t(n,e,3),p=s(a.length),y=0,h=lt?gt(r,p):st?gt(r,0):void 0;p>y;y++)if((vt||y in a)&&(c=l(o=a[y],y,f),ft))if(lt)h[y]=c;else if(c)switch(ft){case 3:return!0;case 5:return o;case 6:return y;case 2:h.push(o)}else if(yt)return!1;return ht?-1:pt||yt?yt:h});function Dt(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}!function(t,r){var n,e,o,i,u,c=t.target,f=t.global,a=t.stat;if(n=f?d:a?d[c]||I(c,{}):(d[c]||{}).prototype)for(e in r){if(i=r[e],o=t.noTargetGet?(u=Ct(n,e))&&u.value:n[e],!Nt(f?e:c+(a?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_t(i,o)}(t.sham||o&&o.sham)&&T(i,"sham",!0),dt(n,e,i,t)}}({target:"Array",proto:!0,forced:!(mt="map",!r((function(){var t=[];return(t.constructor={})[q]=function(){return{foo:1}},1!==t[mt](Boolean).foo})))},{map:function(t){return zt(this,t,arguments[1])}});var Gt,Wt=function(t,r){return t+r},qt=function(t){if(Array.isArray(t))return Dt(t)}(Gt=[1,2,3].map((function(t){return t+1})))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(Gt)||function(t,r){if(t){if("string"==typeof t)return Dt(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dt(t,r):void 0}}(Gt)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();console.log(qt);export default 1;export{Wt as add};
