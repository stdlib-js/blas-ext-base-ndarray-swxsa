"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=q(function(g,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-swxsa/dist').ndarray,l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function o(a){var r,e,i;return e=a[0],i=a[1],r=l(a[2]),c(d(e,0),r,s(e),t(e,0),u(e),s(i),t(i,0),u(i)),i}v.exports=o
});var x=n();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
