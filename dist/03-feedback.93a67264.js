function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function y(t,e,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function j(t){return c=t,f=setTimeout(w,e),l?b(t):u}function h(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function w(){var t=p();if(h(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-a);return d?v(n,o-(t-c)):n}(t))}function T(t){return f=void 0,y&&i?b(t):(i=r=void 0,u)}function x(){var t=p(),n=h(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(d)return f=setTimeout(w,e),b(a)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(m(n.maxWait)||0,e):o,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:T(p())},x}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(t,e,{leading:i,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),h=document.querySelector("textarea"),w={};b.addEventListener("input",t(e)((function(t){t.target.name;w[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),b.addEventListener("submit",(function(t){t.preventDefault(),console.log(w),localStorage.clear(),j.value=" ",h.value=" "}));
//# sourceMappingURL=03-feedback.93a67264.js.map