!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("1WSnx");const a=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u="feedback-form-state",d={email:l.value,message:i.value};a.addEventListener("input",(0,o.throttle)((e=>{localStorage.setItem(u,JSON.stringify(d))}),500)),a.addEventListener("submit",(e=>{if(e.preventDefault(),""===l.value||""===i.value)return alert("Заповни всі поля!");console.log({email:l.value,message:i.value}),a.reset(),localStorage.removeItem(u)}))}();
//# sourceMappingURL=03-feedback.eca2e9b0.js.map
