import"./assets/styles-6d58abb9.js";import{i as s}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");n.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements.delay.value,i=e.currentTarget.elements.state.value;new Promise((t,r)=>{setTimeout(()=>{i==="fulfilled"?(t(o),console.log(`✅ Fulfilled promise in ${o}ms`)):(r(o),console.log(`❌ Rejected promise in ${o}ms`))},o)}).then(t=>{m(`✅ Fulfilled promise in ${o}ms`)}).catch(t=>{l(`❌ Rejected promise in ${o}ms`)})});function l(e){s.error({title:"Error",message:e,position:"topRight"})}function m(e){s.show({title:"Ok",backgroundColor:"green",message:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map
