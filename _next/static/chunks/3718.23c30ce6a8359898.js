(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3718],{4195:(e,t,n)=>{"use strict";function r(){return function(e){function t(e,t){for(var n,r,i,o,a,s=/([MLQCZ])([^MLQCZ]*)/g;n=s.exec(e);){var l=n[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(e){return parseFloat(e)});switch(n[1]){case"M":o=r=l[0],a=i=l[1];break;case"L":(l[0]!==o||l[1]!==a)&&t("L",o,a,o=l[0],a=l[1]);break;case"Q":t("Q",o,a,o=l[2],a=l[3],l[0],l[1]);break;case"C":t("C",o,a,o=l[4],a=l[5],l[0],l[1],l[2],l[3]);break;case"Z":(o!==r||a!==i)&&t("L",o,a,r,i)}}}function n(e,n,r){void 0===r&&(r=16);var i={x:0,y:0};t(e,function(e,t,o,a,s,l,c,u,f){switch(e){case"L":n(t,o,a,s);break;case"Q":for(var d=t,h=o,p=1;p<r;p++)!function(e,t,n,r,i,o,a,s){var l=1-a;s.x=l*l*e+2*l*a*n+a*a*i,s.y=l*l*t+2*l*a*r+a*a*o}(t,o,l,c,a,s,p/(r-1),i),n(d,h,i.x,i.y),d=i.x,h=i.y;break;case"C":for(var v=t,m=o,g=1;g<r;g++)!function(e,t,n,r,i,o,a,s,l,c){var u=1-l;c.x=u*u*u*e+3*u*u*l*n+3*u*l*l*i+l*l*l*a,c.y=u*u*u*t+3*u*u*l*r+3*u*l*l*o+l*l*l*s}(t,o,l,c,u,f,a,s,g/(r-1),i),n(v,m,i.x,i.y),v=i.x,m=i.y}})}var r="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",i=new WeakMap,o={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function a(e,t){var n=e.getContext?e.getContext("webgl",o):e,r=i.get(n);if(!r){var a="undefined"!=typeof WebGL2RenderingContext&&n instanceof WebGL2RenderingContext,s={},l={},c={},u=-1,f=[];function d(e){var t=s[e];if(!t&&!(t=s[e]=n.getExtension(e)))throw Error(e+" not supported");return t}function h(e,t){var r=n.createShader(t);return n.shaderSource(r,e),n.compileShader(r),r}function p(){s={},l={},c={},u=-1,f.length=0}n.canvas.addEventListener("webglcontextlost",function(e){p(),e.preventDefault()},!1),i.set(n,r={gl:n,isWebGL2:a,getExtension:d,withProgram:function(e,t,r,i){if(!l[e]){var o={},s={},c=n.createProgram();n.attachShader(c,h(t,n.VERTEX_SHADER)),n.attachShader(c,h(r,n.FRAGMENT_SHADER)),n.linkProgram(c),l[e]={program:c,transaction:function(e){n.useProgram(c),e({setUniform:function(e,t){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];var o=s[t]||(s[t]=n.getUniformLocation(c,t));n["uniform"+e].apply(n,[o].concat(r))},setAttribute:function(e,t,r,i,s){var l=o[e];l||(l=o[e]={buf:n.createBuffer(),loc:n.getAttribLocation(c,e),data:null}),n.bindBuffer(n.ARRAY_BUFFER,l.buf),n.vertexAttribPointer(l.loc,t,n.FLOAT,!1,0,0),n.enableVertexAttribArray(l.loc),a?n.vertexAttribDivisor(l.loc,i):d("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.loc,i),s!==l.data&&(n.bufferData(n.ARRAY_BUFFER,s,r),l.data=s)}})}}}l[e].transaction(i)},withTexture:function(e,t){u++;try{n.activeTexture(n.TEXTURE0+u);var r=c[e];r||(r=c[e]=n.createTexture(),n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST)),n.bindTexture(n.TEXTURE_2D,r),t(r,u)}finally{u--}},withTextureFramebuffer:function(e,t,r){var i=n.createFramebuffer();f.push(i),n.bindFramebuffer(n.FRAMEBUFFER,i),n.activeTexture(n.TEXTURE0+t),n.bindTexture(n.TEXTURE_2D,e),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);try{r(i)}finally{n.deleteFramebuffer(i),n.bindFramebuffer(n.FRAMEBUFFER,f[--f.length-1]||null)}},handleContextLoss:p})}t(r)}function s(e,t,n,i,o,s,l,c){void 0===l&&(l=15),void 0===c&&(c=null),a(e,function(e){var a=e.gl,u=e.withProgram;(0,e.withTexture)("copy",function(e,f){a.texImage2D(a.TEXTURE_2D,0,a.RGBA,o,s,0,a.RGBA,a.UNSIGNED_BYTE,t),u("copy",r,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",function(e){var t=e.setUniform;(0,e.setAttribute)("aUV",2,a.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),t("1i","image",f),a.bindFramebuffer(a.FRAMEBUFFER,c||null),a.disable(a.BLEND),a.colorMask(8&l,4&l,2&l,1&l),a.viewport(n,i,o,s),a.scissor(n,i,o,s),a.drawArrays(a.TRIANGLES,0,3)})})})}var l=Object.freeze({__proto__:null,withWebGLContext:a,renderImageData:s,resizeWebGLCanvasWithoutClearing:function(e,t,n){var r=e.width,i=e.height;a(e,function(o){var a=o.gl,l=new Uint8Array(r*i*4);a.readPixels(0,0,r,i,a.RGBA,a.UNSIGNED_BYTE,l),e.width=t,e.height=n,s(a,l,0,0,r,i)})}});function c(e,t,r,i,o,a){void 0===a&&(a=1);var s=new Uint8Array(e*t),l=i[2]-i[0],c=i[3]-i[1],u=[];n(r,function(e,t,n,r){u.push({x1:e,y1:t,x2:n,y2:r,minX:Math.min(e,n),minY:Math.min(t,r),maxX:Math.max(e,n),maxY:Math.max(t,r)})}),u.sort(function(e,t){return e.maxX-t.maxX});for(var f=0;f<e;f++)for(var d=0;d<t;d++){var h=function(e,t){for(var n=1/0,r=1/0,i=u.length;i--;){var o=u[i];if(o.maxX+r<=e)break;if(e+r>o.minX&&t-r<o.maxY&&t+r>o.minY){var a=function(e,t,n,r,i,o){var a=i-n,s=o-r,l=a*a+s*s,c=l?Math.max(0,Math.min(1,((e-n)*a+(t-r)*s)/l)):0,u=e-(n+c*a),f=t-(r+c*s);return u*u+f*f}(e,t,o.x1,o.y1,o.x2,o.y2);a<n&&(r=Math.sqrt(n=a))}}return function(e,t){for(var n=0,r=u.length;r--;){var i=u[r];if(i.maxX<=e)break;i.y1>t!=i.y2>t&&e<(i.x2-i.x1)*(t-i.y1)/(i.y2-i.y1)+i.x1&&(n+=i.y1<i.y2?1:-1)}return 0!==n}(e,t)&&(r=-r),r}(i[0]+l*(f+.5)/e,i[1]+c*(d+.5)/t),p=Math.pow(1-Math.abs(h)/o,a)/2;h<0&&(p=1-p),p=Math.max(0,Math.min(255,Math.round(255*p))),s[d*e+f]=p}return s}function u(e,t,n,r,i,o,a,s,l,c){void 0===o&&(o=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===c&&(c=0),f(e,t,n,r,i,o,a,null,s,l,c)}function f(e,t,n,r,i,o,a,l,u,f,d){void 0===o&&(o=1),void 0===u&&(u=0),void 0===f&&(f=0),void 0===d&&(d=0);for(var h=c(e,t,n,r,i,o),p=new Uint8Array(4*h.length),v=0;v<h.length;v++)p[4*v+d]=h[v];s(a,p,u,f,e,t,1<<3-d,l)}var d=Object.freeze({__proto__:null,generate:c,generateIntoCanvas:u,generateIntoFramebuffer:f}),h=new Float32Array([0,0,2,0,0,2]),p=null,v=!1,m={},g=new WeakMap;function b(e){if(!v&&!E(e))throw Error("WebGL generation not supported")}function y(e,t,n,r,i,o,s){if(void 0===o&&(o=1),void 0===s&&(s=null),!s&&!(s=p)){var l="function"==typeof OffscreenCanvas?new OffscreenCanvas(1,1):"undefined"!=typeof document?document.createElement("canvas"):null;if(!l)throw Error("OffscreenCanvas or DOM canvas not supported");s=p=l.getContext("webgl",{depth:!1})}b(s);var c=new Uint8Array(e*t*4);a(s,function(a){var s=a.gl,l=a.withTexture,u=a.withTextureFramebuffer;l("readable",function(a,l){s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null),u(a,l,function(a){x(e,t,n,r,i,o,s,a,0,0,0),s.readPixels(0,0,e,t,s.RGBA,s.UNSIGNED_BYTE,c)})})});for(var u=new Uint8Array(e*t),f=0,d=0;f<c.length;f+=4)u[d++]=c[f];return u}function w(e,t,n,r,i,o,a,s,l,c){void 0===o&&(o=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===c&&(c=0),x(e,t,n,r,i,o,a,null,s,l,c)}function x(e,t,i,o,s,l,c,u,f,d,p){void 0===l&&(l=1),void 0===f&&(f=0),void 0===d&&(d=0),void 0===p&&(p=0),b(c);var v=[];n(i,function(e,t,n,r){v.push(e,t,n,r)}),v=new Float32Array(v),a(c,function(n){var i=n.gl,a=n.isWebGL2,c=n.getExtension,m=n.withProgram,g=n.withTexture,b=n.withTextureFramebuffer,y=n.handleContextLoss;if(g("rawDistances",function(n,g){(e!==n._lastWidth||t!==n._lastHeight)&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,n._lastWidth=e,n._lastHeight=t,0,i.RGBA,i.UNSIGNED_BYTE,null),m("main","precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}","precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",function(r){var u=r.setAttribute,f=r.setUniform,d=!a&&c("ANGLE_instanced_arrays"),p=!a&&c("EXT_blend_minmax");u("aUV",2,i.STATIC_DRAW,0,h),u("aLineSegment",4,i.DYNAMIC_DRAW,1,v),f.apply(void 0,["4f","uGlyphBounds"].concat(o)),f("1f","uMaxDistance",s),f("1f","uExponent",l),b(n,g,function(n){i.enable(i.BLEND),i.colorMask(!0,!0,!0,!0),i.viewport(0,0,e,t),i.scissor(0,0,e,t),i.blendFunc(i.ONE,i.ONE),i.blendEquationSeparate(i.FUNC_ADD,a?i.MAX:p.MAX_EXT),i.clear(i.COLOR_BUFFER_BIT),a?i.drawArraysInstanced(i.TRIANGLES,0,3,v.length/4):d.drawArraysInstancedANGLE(i.TRIANGLES,0,3,v.length/4)})}),m("post",r,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",function(n){n.setAttribute("aUV",2,i.STATIC_DRAW,0,h),n.setUniform("1i","tex",g),i.bindFramebuffer(i.FRAMEBUFFER,u),i.disable(i.BLEND),i.colorMask(0===p,1===p,2===p,3===p),i.viewport(f,d,e,t),i.scissor(f,d,e,t),i.drawArrays(i.TRIANGLES,0,3)})}),i.isContextLost())throw y(),Error("webgl context lost")})}function E(e){var t=e&&e!==p?e.canvas||e:m,n=g.get(t);if(void 0===n){v=!0;var r=null;try{var i=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],o=y(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,e);(n=o&&i.length===o.length&&o.every(function(e,t){return e===i[t]}))||(r="bad trial run results",console.info(i,o))}catch(e){n=!1,r=e.message}r&&console.warn("WebGL SDF generation not supported:",r),v=!1,g.set(t,n)}return n}var S=Object.freeze({__proto__:null,generate:y,generateIntoCanvas:w,generateIntoFramebuffer:x,isSupported:E});return e.forEachPathCommand=t,e.generate=function(e,t,n,r,i,o){void 0===i&&(i=Math.max(r[2]-r[0],r[3]-r[1])/2),void 0===o&&(o=1);try{return y.apply(S,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),c.apply(d,arguments)}},e.generateIntoCanvas=function(e,t,n,r,i,o,a,s,l,c){void 0===i&&(i=Math.max(r[2]-r[0],r[3]-r[1])/2),void 0===o&&(o=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===c&&(c=0);try{return w.apply(S,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),u.apply(d,arguments)}},e.javascript=d,e.pathToLineSegments=n,e.webgl=S,e.webglUtils=l,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}n.d(t,{A:()=>r})},8828:(e,t,n)=>{"use strict";e.exports=n(83654)},9364:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(12115);function i(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}function o({debounce:e,scroll:t,polyfill:n,offsetSize:a}={debounce:0,scroll:!1,offsetSize:!1}){var l,c,u;let f=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!f)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[d,h]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),p=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d,orientationHandler:null}),v=e?"number"==typeof e?e:e.scroll:null,m=e?"number"==typeof e?e:e.resize:null,g=(0,r.useRef)(!1);(0,r.useEffect)(()=>(g.current=!0,()=>void(g.current=!1)));let[b,y,w]=(0,r.useMemo)(()=>{let e=()=>{if(!p.current.element)return;let{left:e,top:t,width:n,height:r,bottom:i,right:o,x:l,y:c}=p.current.element.getBoundingClientRect(),u={left:e,top:t,width:n,height:r,bottom:i,right:o,x:l,y:c};p.current.element instanceof HTMLElement&&a&&(u.height=p.current.element.offsetHeight,u.width=p.current.element.offsetWidth),Object.freeze(u),g.current&&!s(p.current.lastBounds,u)&&h(p.current.lastBounds=u)};return[e,m?i(e,m):e,v?i(e,v):e]},[h,a,v,m]);function x(){p.current.scrollContainers&&(p.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",w,!0)),p.current.scrollContainers=null),p.current.resizeObserver&&(p.current.resizeObserver.disconnect(),p.current.resizeObserver=null),p.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",p.current.orientationHandler))}function E(){p.current.element&&(p.current.resizeObserver=new f(w),p.current.resizeObserver.observe(p.current.element),t&&p.current.scrollContainers&&p.current.scrollContainers.forEach(e=>e.addEventListener("scroll",w,{capture:!0,passive:!0})),p.current.orientationHandler=()=>{w()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",p.current.orientationHandler))}return l=w,c=!!t,(0,r.useEffect)(()=>{if(c)return window.addEventListener("scroll",l,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",l,!0)},[l,c]),u=y,(0,r.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,r.useEffect)(()=>{x(),E()},[t,w,y]),(0,r.useEffect)(()=>x,[]),[e=>{e&&e!==p.current.element&&(x(),p.current.element=e,p.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[r,i,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),E())},d,b]}let a=["x","y","top","bottom","left","right","width","height"],s=(e,t)=>a.every(n=>e[n]===t[n])},12932:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("skip-back",[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]])},14806:(e,t,n)=>{"use strict";e.exports=n(30125)},14814:(e,t,n)=>{"use strict";n.d(t,{r:()=>r});let r=parseInt(n(87548).REVISION.replace(/\D+/g,""))},17509:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=function(){return function(e){var t,n,r,i,o={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},a={},s={};a.L=1,s[1]="L",Object.keys(o).forEach(function(e,t){a[e]=1<<t+1,s[a[e]]=e}),Object.freeze(a);var l=a.LRI|a.RLI|a.FSI,c=a.L|a.R|a.AL,u=a.B|a.S|a.WS|a.ON|a.FSI|a.LRI|a.RLI|a.PDI,f=a.BN|a.RLE|a.LRE|a.RLO|a.LRO|a.PDF,d=a.S|a.WS|a.B|l|a.PDI|f,h=null;function p(e){if(!h){h=new Map;var t=function(e){if(o.hasOwnProperty(e)){var t=0;o[e].split(",").forEach(function(n){var r=n.split("+"),i=r[0],o=r[1];i=parseInt(i,36),o=o?parseInt(o,36):0,h.set(t+=i,a[e]);for(var s=0;s<o;s++)h.set(++t,a[e])})}};for(var n in o)t(n)}return h.get(e.codePointAt(0))||a.L}function v(e,t){var n,r=0,i=new Map,o=t&&new Map;return e.split(",").forEach(function e(a){if(-1!==a.indexOf("+"))for(var s=+a;s--;)e(n);else{n=a;var l=a.split(">"),c=l[0],u=l[1];c=String.fromCodePoint(r+=parseInt(c,36)),u=String.fromCodePoint(r+=parseInt(u,36)),i.set(c,u),t&&o.set(u,c)}}),{map:i,reverseMap:o}}function m(){if(!t){var e=v("14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",!0),i=e.map,o=e.reverseMap;t=i,n=o,r=v("6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye",!1).map}}function g(e){return m(),t.get(e)||null}function b(e){return m(),n.get(e)||null}function y(e){return m(),r.get(e)||null}var w=a.L,x=a.R,E=a.EN,S=a.ES,_=a.ET,M=a.AN,A=a.CS,T=a.B,L=a.S,k=a.ON,O=a.BN,D=a.NSM,P=a.AL,R=a.LRO,I=a.RLO,j=a.LRE,C=a.RLE,z=a.PDF,U=a.LRI,B=a.RLI,N=a.FSI,V=a.PDI;function F(e){if(!i){var t=v("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",!0),n=t.map;t.reverseMap.forEach(function(e,t){n.set(t,e)}),i=n}return i.get(e)||null}function H(e,t,n,r){var i=e.length;n=Math.max(0,null==n?0:+n),r=Math.min(i-1,null==r?i-1:+r);var o=[];return t.paragraphs.forEach(function(i){var a=Math.max(n,i.start),s=Math.min(r,i.end);if(a<s){for(var l=t.levels.slice(a,s+1),c=s;c>=a&&p(e[c])&d;c--)l[c]=i.level;for(var u=i.level,f=1/0,h=0;h<l.length;h++){var v=l[h];v>u&&(u=v),v<f&&(f=1|v)}for(var m=u;m>=f;m--)for(var g=0;g<l.length;g++)if(l[g]>=m){for(var b=g;g+1<l.length&&l[g+1]>=m;)g++;g>b&&o.push([b+a,g+a])}}}),o}function G(e,t,n,r){for(var i=H(e,t,n,r),o=[],a=0;a<e.length;a++)o[a]=a;return i.forEach(function(e){for(var t=e[0],n=e[1],r=o.slice(t,n+1),i=r.length;i--;)o[n-i]=r[i]}),o}return e.closingToOpeningBracket=b,e.getBidiCharType=p,e.getBidiCharTypeName=function(e){return s[p(e)]},e.getCanonicalBracket=y,e.getEmbeddingLevels=function(e,t){for(var n=new Uint32Array(e.length),r=0;r<e.length;r++)n[r]=p(e[r]);var i=new Map;function o(e,t){var r=n[e];n[e]=t,i.set(r,i.get(r)-1),r&u&&i.set(u,i.get(u)-1),i.set(t,(i.get(t)||0)+1),t&u&&i.set(u,(i.get(u)||0)+1)}for(var a=new Uint8Array(e.length),s=new Map,h=[],v=null,m=0;m<e.length;m++)v||h.push(v={start:m,end:e.length-1,level:"rtl"===t?1:"ltr"===t?0:tO(m,!1)}),n[m]&T&&(v.end=m,v=null);for(var F=C|j|I|R|l|V|z|T,H=function(e){return e+(1&e?1:2)},G=function(e){return e+(1&e?2:1)},W=0;W<h.length;W++){var q=[{_level:(v=h[W]).level,_override:0,_isolate:0}],Y=void 0,X=0,K=0,$=0;i.clear();for(var Z=v.start;Z<=v.end;Z++){var Q=n[Z];if(Y=q[q.length-1],i.set(Q,(i.get(Q)||0)+1),Q&u&&i.set(u,(i.get(u)||0)+1),Q&F)if(Q&(C|j)){a[Z]=Y._level;var J=(Q===C?G:H)(Y._level);!(J<=125)||X||K?!X&&K++:q.push({_level:J,_override:0,_isolate:0})}else if(Q&(I|R)){a[Z]=Y._level;var ee=(Q===I?G:H)(Y._level);!(ee<=125)||X||K?!X&&K++:q.push({_level:ee,_override:Q&I?x:w,_isolate:0})}else if(Q&l){Q&N&&(Q=1===tO(Z+1,!0)?B:U),a[Z]=Y._level,Y._override&&o(Z,Y._override);var et=(Q===B?G:H)(Y._level);et<=125&&0===X&&0===K?($++,q.push({_level:et,_override:0,_isolate:1,_isolInitIndex:Z})):X++}else if(Q&V){if(X>0)X--;else if($>0){for(K=0;!q[q.length-1]._isolate;)q.pop();var en=q[q.length-1]._isolInitIndex;null!=en&&(s.set(en,Z),s.set(Z,en)),q.pop(),$--}Y=q[q.length-1],a[Z]=Y._level,Y._override&&o(Z,Y._override)}else Q&z?(0===X&&(K>0?K--:!Y._isolate&&q.length>1&&(q.pop(),Y=q[q.length-1])),a[Z]=Y._level):Q&T&&(a[Z]=v.level);else a[Z]=Y._level,Y._override&&Q!==O&&o(Z,Y._override)}for(var er=[],ei=null,eo=v.start;eo<=v.end;eo++){var ea=n[eo];if(!(ea&f)){var es=a[eo],el=ea&l,ec=ea===V;ei&&es===ei._level?(ei._end=eo,ei._endsWithIsolInit=el):er.push(ei={_start:eo,_end:eo,_level:es,_startsWithPDI:ec,_endsWithIsolInit:el})}}for(var eu=[],ef=0;ef<er.length;ef++){var ed=er[ef];if(!ed._startsWithPDI||ed._startsWithPDI&&!s.has(ed._start)){for(var eh=[ei=ed],ep=void 0;ei&&ei._endsWithIsolInit&&null!=(ep=s.get(ei._end));)for(var ev=ef+1;ev<er.length;ev++)if(er[ev]._start===ep){eh.push(ei=er[ev]);break}for(var em=[],eg=0;eg<eh.length;eg++)for(var eb=eh[eg],ey=eb._start;ey<=eb._end;ey++)em.push(ey);for(var ew=a[em[0]],ex=v.level,eE=em[0]-1;eE>=0;eE--)if(!(n[eE]&f)){ex=a[eE];break}var eS=em[em.length-1],e_=a[eS],eM=v.level;if(!(n[eS]&l)){for(var eA=eS+1;eA<=v.end;eA++)if(!(n[eA]&f)){eM=a[eA];break}}eu.push({_seqIndices:em,_sosType:Math.max(ex,ew)%2?x:w,_eosType:Math.max(eM,e_)%2?x:w})}}for(var eT=0;eT<eu.length;eT++){var eL=eu[eT],ek=eL._seqIndices,eO=eL._sosType,eD=eL._eosType,eP=1&a[ek[0]]?x:w;if(i.get(D))for(var eR=0;eR<ek.length;eR++){var eI=ek[eR];if(n[eI]&D){for(var ej=eO,eC=eR-1;eC>=0;eC--)if(!(n[ek[eC]]&f)){ej=n[ek[eC]];break}o(eI,ej&(l|V)?k:ej)}}if(i.get(E))for(var ez=0;ez<ek.length;ez++){var eU=ek[ez];if(n[eU]&E)for(var eB=ez-1;eB>=-1;eB--){var eN=-1===eB?eO:n[ek[eB]];if(eN&c){eN===P&&o(eU,M);break}}}if(i.get(P))for(var eV=0;eV<ek.length;eV++){var eF=ek[eV];n[eF]&P&&o(eF,x)}if(i.get(S)||i.get(A))for(var eH=1;eH<ek.length-1;eH++){var eG=ek[eH];if(n[eG]&(S|A)){for(var eW=0,eq=0,eY=eH-1;eY>=0&&(eW=n[ek[eY]])&f;eY--);for(var eX=eH+1;eX<ek.length&&(eq=n[ek[eX]])&f;eX++);eW===eq&&(n[eG]===S?eW===E:eW&(E|M))&&o(eG,eW)}}if(i.get(E)){for(var eK=0;eK<ek.length;eK++)if(n[ek[eK]]&E){for(var e$=eK-1;e$>=0&&n[ek[e$]]&(_|f);e$--)o(ek[e$],E);for(eK++;eK<ek.length&&n[ek[eK]]&(_|f|E);eK++)n[ek[eK]]!==E&&o(ek[eK],E)}}if(i.get(_)||i.get(S)||i.get(A))for(var eZ=0;eZ<ek.length;eZ++){var eQ=ek[eZ];if(n[eQ]&(_|S|A)){o(eQ,k);for(var eJ=eZ-1;eJ>=0&&n[ek[eJ]]&f;eJ--)o(ek[eJ],k);for(var e1=eZ+1;e1<ek.length&&n[ek[e1]]&f;e1++)o(ek[e1],k)}}if(i.get(E))for(var e0=0,e2=eO;e0<ek.length;e0++){var e3=ek[e0],e4=n[e3];e4&E?e2===w&&o(e3,w):e4&c&&(e2=e4)}if(i.get(u)){for(var e5=x|E|M,e6=e5|w,e8=[],e7=[],e9=0;e9<ek.length;e9++)if(n[ek[e9]]&u){var te=e[ek[e9]],tt=void 0;if(null!==g(te))if(e7.length<63)e7.push({char:te,seqIndex:e9});else break;else if(null!==(tt=b(te)))for(var tn=e7.length-1;tn>=0;tn--){var tr=e7[tn].char;if(tr===tt||tr===b(y(te))||g(y(tr))===te){e8.push([e7[tn].seqIndex,e9]),e7.length=tn;break}}}e8.sort(function(e,t){return e[0]-t[0]});for(var ti=0;ti<e8.length;ti++){for(var to=e8[ti],ta=to[0],ts=to[1],tl=!1,tc=0,tu=ta+1;tu<ts;tu++){var tf=ek[tu];if(n[tf]&e6){tl=!0;var td=n[tf]&e5?x:w;if(td===eP){tc=td;break}}}if(tl&&!tc){tc=eO;for(var th=ta-1;th>=0;th--){var tp=ek[th];if(n[tp]&e6){var tv=n[tp]&e5?x:w;tc=tv!==eP?tv:eP;break}}}if(tc){if(n[ek[ta]]=n[ek[ts]]=tc,tc!==eP){for(var tm=ta+1;tm<ek.length;tm++)if(!(n[ek[tm]]&f)){p(e[ek[tm]])&D&&(n[ek[tm]]=tc);break}}if(tc!==eP){for(var tg=ts+1;tg<ek.length;tg++)if(!(n[ek[tg]]&f)){p(e[ek[tg]])&D&&(n[ek[tg]]=tc);break}}}}for(var tb=0;tb<ek.length;tb++)if(n[ek[tb]]&u){for(var ty=tb,tw=tb,tx=eO,tE=tb-1;tE>=0;tE--)if(n[ek[tE]]&f)ty=tE;else{tx=n[ek[tE]]&e5?x:w;break}for(var tS=eD,t_=tb+1;t_<ek.length;t_++)if(n[ek[t_]]&(u|f))tw=t_;else{tS=n[ek[t_]]&e5?x:w;break}for(var tM=ty;tM<=tw;tM++)n[ek[tM]]=tx===tS?tx:eP;tb=tw}}}for(var tA=v.start;tA<=v.end;tA++){var tT=a[tA],tL=n[tA];if(1&tT?tL&(w|E|M)&&a[tA]++:tL&x?a[tA]++:tL&(M|E)&&(a[tA]+=2),tL&f&&(a[tA]=0===tA?v.level:a[tA-1]),tA===v.end||p(e[tA])&(L|T))for(var tk=tA;tk>=0&&p(e[tk])&d;tk--)a[tk]=v.level}}return{levels:a,paragraphs:h};function tO(t,r){for(var i=t;i<e.length;i++){var o=n[i];if(o&(x|P))return 1;if(o&(T|w)||r&&o===V)break;if(o&l){var a=function(t){for(var r=1,i=t+1;i<e.length;i++){var o=n[i];if(o&T)break;if(o&V){if(0==--r)return i}else o&l&&r++}return -1}(i);i=-1===a?e.length:a}}return 0}},e.getMirroredCharacter=F,e.getMirroredCharactersMap=function(e,t,n,r){var i=e.length;n=Math.max(0,null==n?0:+n),r=Math.min(i-1,null==r?i-1:+r);for(var o=new Map,a=n;a<=r;a++)if(1&t[a]){var s=F(e[a]);null!==s&&o.set(a,s)}return o},e.getReorderSegments=H,e.getReorderedIndices=G,e.getReorderedString=function(e,t,n,r){var i=G(e,t,n,r),o=[].concat(e);return i.forEach(function(n,r){o[r]=(1&t.levels[n]?F(e[n]):null)||e[n]}),o.join("")},e.openingToClosingBracket=g,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}},21397:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]])},23327:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},23689:(e,t,n)=>{"use strict";n.d(t,{DY:()=>a,IU:()=>l,uv:()=>s});let r=[];function i(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function o(e,t=null,n=!1,a={}){for(let o of(null===t&&(t=[e]),r))if(i(t,o.keys,o.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return a.lifespan&&a.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,a.lifespan)),o.response;if(!n)throw o.promise}let s={keys:t,equal:a.equal,remove:()=>{let e=r.indexOf(s);-1!==e&&r.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{s.response=e,a.lifespan&&a.lifespan>0&&(s.timeout=setTimeout(s.remove,a.lifespan))}).catch(e=>s.error=e)};if(r.push(s),!n)throw s.promise}let a=(e,t,n)=>o(e,t,!1,n),s=(e,t,n)=>void o(e,t,!0,n),l=e=>{if(void 0===e||0===e.length)r.splice(0,r.length);else{let t=r.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},30125:(e,t,n)=>{"use strict";var r=n(12115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})},[e,n,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},34212:(e,t,n)=>{"use strict";function r(e,[t,n]){return Math.min(n,Math.max(t,e))}n.d(t,{q:()=>r}),(0,Object.defineProperty)(r,"name",{value:"clamp",configurable:!0})},37771:(e,t,n)=>{"use strict";n.d(t,{Do:()=>i,Fh:()=>d});var r=n(87548);let i=/\bvoid\s+main\s*\(\s*\)\s*{/g;function o(e){return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(e,t){let n=r.ShaderChunk[t];return n?o(n):e})}let a=[];for(let e=0;e<256;e++)a[e]=(e<16?"0":"")+e.toString(16);let s=Object.assign||function(){let e=arguments[0];for(let t=1,n=arguments.length;t<n;t++){let n=arguments[t];if(n)for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l=Date.now(),c=new WeakMap,u=new Map,f=1e10;function d(e,t){let n=function(e){let t=JSON.stringify(e,p),n=m.get(t);return null==n&&m.set(t,n=++v),n}(t),i=c.get(e);if(i||c.set(e,i=Object.create(null)),i[n])return new i[n];let g=`_onBeforeCompile${n}`,b=function(r,i){e.onBeforeCompile.call(this,r,i);let a=this.customProgramCacheKey()+"|"+r.vertexShader+"|"+r.fragmentShader,c=u[a];if(!c){let e=function(e,{vertexShader:t,fragmentShader:n},r,i){let{vertexDefs:a,vertexMainIntro:s,vertexMainOutro:l,vertexTransform:c,fragmentDefs:u,fragmentMainIntro:f,fragmentMainOutro:d,fragmentColorTransform:p,customRewriter:v,timeUniform:m}=r;if(a=a||"",s=s||"",l=l||"",u=u||"",f=f||"",d=d||"",(c||v)&&(t=o(t)),(p||v)&&(n=o(n=n.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,"\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"))),v){let e=v({vertexShader:t,fragmentShader:n});t=e.vertexShader,n=e.fragmentShader}if(p){let e=[];n=n.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,t=>(e.push(t),"")),d=`${p}
${e.join("\n")}
${d}`}if(m){let e=`
uniform float ${m};
`;a=e+a,u=e+u}return c&&(t=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`,a=`${a}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,t=t.replace(/\b(position|normal|uv)\b/g,(e,t,n,r)=>/\battribute\s+vec[23]\s+$/.test(r.substr(0,n))?t:`troika_${t}_${i}`),e.map&&e.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),{vertexShader:t=h(t,i,a,s,l),fragmentShader:n=h(n,i,u,f,d)}}(this,r,t,n);c=u[a]=e}r.vertexShader=c.vertexShader,r.fragmentShader=c.fragmentShader,s(r.uniforms,this.uniforms),t.timeUniform&&(r.uniforms[t.timeUniform]={get value(){return Date.now()-l}}),this[g]&&this[g](r)},y=function(){return w(t.chained?e:e.clone())},w=function(r){let i=Object.create(r,x);return Object.defineProperty(i,"baseMaterial",{value:e}),Object.defineProperty(i,"id",{value:f++}),i.uuid=function(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,n=0xffffffff*Math.random()|0,r=0xffffffff*Math.random()|0;return(a[255&e]+a[e>>8&255]+a[e>>16&255]+a[e>>24&255]+"-"+a[255&t]+a[t>>8&255]+"-"+a[t>>16&15|64]+a[t>>24&255]+"-"+a[63&n|128]+a[n>>8&255]+"-"+a[n>>16&255]+a[n>>24&255]+a[255&r]+a[r>>8&255]+a[r>>16&255]+a[r>>24&255]).toUpperCase()}(),i.uniforms=s({},r.uniforms,t.uniforms),i.defines=s({},r.defines,t.defines),i.defines[`TROIKA_DERIVED_MATERIAL_${n}`]="",i.extensions=s({},r.extensions,t.extensions),i._listeners=void 0,i},x={constructor:{value:y},isDerivedMaterial:{value:!0},type:{get:()=>e.type,set:t=>{e.type=t}},isDerivedFrom:{writable:!0,configurable:!0,value:function(e){let t=this.baseMaterial;return e===t||t.isDerivedMaterial&&t.isDerivedFrom(e)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return e.customProgramCacheKey()+"|"+n}},onBeforeCompile:{get:()=>b,set(e){this[g]=e}},copy:{writable:!0,configurable:!0,value:function(t){return e.copy.call(this,t),e.isShaderMaterial||e.isDerivedMaterial||(s(this.extensions,t.extensions),s(this.defines,t.defines),s(this.uniforms,r.UniformsUtils.clone(t.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){return w(new e.constructor).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let n=this._depthMaterial;return n||((n=this._depthMaterial=d(e.isDerivedMaterial?e.getDepthMaterial():new r.MeshDepthMaterial({depthPacking:r.RGBADepthPacking}),t)).defines.IS_DEPTH_MATERIAL="",n.uniforms=this.uniforms),n}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let n=this._distanceMaterial;return n||((n=this._distanceMaterial=d(e.isDerivedMaterial?e.getDistanceMaterial():new r.MeshDistanceMaterial,t)).defines.IS_DISTANCE_MATERIAL="",n.uniforms=this.uniforms),n}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:t,_distanceMaterial:n}=this;t&&t.dispose(),n&&n.dispose(),e.dispose.call(this)}}};return i[n]=y,new y}function h(e,t,n,r,o){return(r||o||n)&&(e=e.replace(i,`
${n}
void troikaOrigMain${t}() {`)+`
void main() {
  ${r}
  troikaOrigMain${t}();
  ${o}
}`),e}function p(e,t){return"uniforms"===e?void 0:"function"==typeof t?t.toString():t}let v=0,m=new Map,g=`
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,b=`
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,y=`
uniform vec3 dashing;
varying float bezierT;
`,w=`
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`,x=null,E=new r.MeshStandardMaterial({color:0xffffff,side:r.DoubleSide});class S extends r.Mesh{static getGeometry(){return x||(x=new r.CylinderGeometry(1,1,1,6,64).translate(0,.5,0))}constructor(){super(S.getGeometry(),E),this.pointA=new r.Vector3,this.controlA=new r.Vector3,this.controlB=new r.Vector3,this.pointB=new r.Vector3,this.radius=.01,this.dashArray=new r.Vector2,this.dashOffset=0,this.frustumCulled=!1}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=E.clone());return e&&e.baseMaterial===t||(e=this._derivedMaterial=d(t,{chained:!0,uniforms:{pointA:{value:new r.Vector3},controlA:{value:new r.Vector3},controlB:{value:new r.Vector3},pointB:{value:new r.Vector3},radius:{value:.01},dashing:{value:new r.Vector3}},vertexDefs:g,vertexTransform:b,fragmentDefs:y,fragmentMainIntro:w}),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),e}set material(e){this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return this.material.getDistanceMaterial()}set customDistanceMaterial(e){}onBeforeRender(){let{uniforms:e}=this.material,{pointA:t,controlA:n,controlB:r,pointB:i,radius:o,dashArray:a,dashOffset:s}=this;e.pointA.value.copy(t),e.controlA.value.copy(n),e.controlB.value.copy(r),e.pointB.value.copy(i),e.radius.value=o,e.dashing.value.set(a.x,a.y,s||0)}raycast(){}}},38884:(e,t,n)=>{"use strict";let r,i;n.d(t,{b:()=>S});var o=n(87548),a=n(94854),s=n(44733);let l=n(14814).r>=125?"uv1":"uv2",c=new o.Vector4,u=new o.Vector3,f=new o.Vector3,d=new o.Vector4,h=new o.Vector4,p=new o.Vector4,v=new o.Vector3,m=new o.Matrix4,g=new o.Line3,b=new o.Vector3,y=new o.Box3,w=new o.Sphere,x=new o.Vector4;function E(e,t,n){return x.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),x.multiplyScalar(1/x.w),x.x=i/n.width,x.y=i/n.height,x.applyMatrix4(e.projectionMatrixInverse),x.multiplyScalar(1/x.w),Math.abs(Math.max(x.x,x.y))}class S extends o.Mesh{constructor(e=new a.n,t=new s.G({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)u.fromBufferAttribute(t,e),f.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+u.distanceTo(f);let i=new o.InstancedInterleavedBuffer(r,2,1);return e.setAttribute("instanceDistanceStart",new o.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new o.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let n,a,s=this.material.worldUnits,c=e.camera;null!==c||s||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let f=this.matrixWorld,x=this.geometry,S=this.material;if(i=S.linewidth+u,null===x.boundingSphere&&x.computeBoundingSphere(),w.copy(x.boundingSphere).applyMatrix4(f),s)n=.5*i;else{let e=Math.max(c.near,w.distanceToPoint(r.origin));n=E(c,e,S.resolution)}if(w.radius+=n,!1!==r.intersectsSphere(w)){if(null===x.boundingBox&&x.computeBoundingBox(),y.copy(x.boundingBox).applyMatrix4(f),s)a=.5*i;else{let e=Math.max(c.near,y.distanceToPoint(r.origin));a=E(c,e,S.resolution)}y.expandByScalar(a),!1!==r.intersectsBox(y)&&(s?function(e,t){let n=e.matrixWorld,a=e.geometry,s=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,s.count);for(let a=0;a<u;a++){g.start.fromBufferAttribute(s,a),g.end.fromBufferAttribute(c,a),g.applyMatrix4(n);let u=new o.Vector3,f=new o.Vector3;r.distanceSqToSegment(g.start,g.end,f,u),f.distanceTo(u)<.5*i&&t.push({point:f,pointOnLine:u,distance:r.origin.distanceTo(f),object:e,face:null,faceIndex:a,uv:null,[l]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,s=e.material.resolution,c=e.matrixWorld,u=e.geometry,f=u.attributes.instanceStart,y=u.attributes.instanceEnd,w=Math.min(u.instanceCount,f.count),x=-t.near;r.at(1,p),p.w=1,p.applyMatrix4(t.matrixWorldInverse),p.applyMatrix4(a),p.multiplyScalar(1/p.w),p.x*=s.x/2,p.y*=s.y/2,p.z=0,v.copy(p),m.multiplyMatrices(t.matrixWorldInverse,c);for(let t=0;t<w;t++){if(d.fromBufferAttribute(f,t),h.fromBufferAttribute(y,t),d.w=1,h.w=1,d.applyMatrix4(m),h.applyMatrix4(m),d.z>x&&h.z>x)continue;if(d.z>x){let e=d.z-h.z,t=(d.z-x)/e;d.lerp(h,t)}else if(h.z>x){let e=h.z-d.z,t=(h.z-x)/e;h.lerp(d,t)}d.applyMatrix4(a),h.applyMatrix4(a),d.multiplyScalar(1/d.w),h.multiplyScalar(1/h.w),d.x*=s.x/2,d.y*=s.y/2,h.x*=s.x/2,h.y*=s.y/2,g.start.copy(d),g.start.z=0,g.end.copy(h),g.end.z=0;let u=g.closestPointToPointParameter(v,!0);g.at(u,b);let p=o.MathUtils.lerp(d.z,h.z,u),w=p>=-1&&p<=1,E=v.distanceTo(b)<.5*i;if(w&&E){g.start.fromBufferAttribute(f,t),g.end.fromBufferAttribute(y,t),g.start.applyMatrix4(c),g.end.applyMatrix4(c);let i=new o.Vector3,a=new o.Vector3;r.distanceSqToSegment(g.start,g.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[l]:null})}}}(this,c,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(c),this.material.uniforms.resolution.value.set(c.z,c.w))}}},39867:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]])},44733:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var r=n(87548),i=n(14814);class o extends r.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:r.UniformsUtils.clone(r.UniformsUtils.merge([r.UniformsLib.common,r.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new r.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${i.r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}},48314:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},49736:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var r=n(94854);class i extends r.n{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}},49914:(e,t,n)=>{"use strict";e.exports=n(66451)},53511:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]])},54735:(e,t,n)=>{"use strict";n.d(t,{Af:()=>s,Nz:()=>i,u5:()=>l,y3:()=>f});var r=n(12115);function i(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=i(r,t,n);if(e)return e;r=t?null:r.sibling}}function o(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?r.useLayoutEffect:r.useEffect;let a=o(r.createContext(null));class s extends r.Component{render(){return r.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=r.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=r.useId();return r.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=i(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let c=Symbol.for("react.context"),u=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===c;function f(){let e=function(){let e=l(),[t]=r.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;u(e)&&e!==a&&!t.has(e)&&t.set(e,r.use(o(e))),n=n.return}return t}();return r.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>i=>r.createElement(t,null,r.createElement(n.Provider,{...i,value:e.get(n)})),e=>r.createElement(s,{...e})),[e])}},57254:(e,t,n)=>{"use strict";n.d(t,{X:()=>a});var r=n(38884),i=n(49736),o=n(44733);class a extends r.b{constructor(e=new i.v,t=new o.G({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}},59e3:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]])},60641:(e,t,n)=>{"use strict";n.d(t,{N:()=>d});var r=n(87548),i=Object.defineProperty;class o{constructor(){((e,t,n)=>((e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n))(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}}var a=Object.defineProperty,s=(e,t,n)=>(((e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),n);let l=new r.Ray,c=new r.Plane,u=Math.cos(Math.PI/180*70),f=(e,t)=>(e%t+t)%t;class d extends o{constructor(e,t){super(),s(this,"object"),s(this,"domElement"),s(this,"enabled",!0),s(this,"target",new r.Vector3),s(this,"minDistance",0),s(this,"maxDistance",1/0),s(this,"minZoom",0),s(this,"maxZoom",1/0),s(this,"minPolarAngle",0),s(this,"maxPolarAngle",Math.PI),s(this,"minAzimuthAngle",-1/0),s(this,"maxAzimuthAngle",1/0),s(this,"enableDamping",!1),s(this,"dampingFactor",.05),s(this,"enableZoom",!0),s(this,"zoomSpeed",1),s(this,"enableRotate",!0),s(this,"rotateSpeed",1),s(this,"enablePan",!0),s(this,"panSpeed",1),s(this,"screenSpacePanning",!0),s(this,"keyPanSpeed",7),s(this,"zoomToCursor",!1),s(this,"autoRotate",!1),s(this,"autoRotateSpeed",2),s(this,"reverseOrbit",!1),s(this,"reverseHorizontalOrbit",!1),s(this,"reverseVerticalOrbit",!1),s(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),s(this,"mouseButtons",{LEFT:r.MOUSE.ROTATE,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.PAN}),s(this,"touches",{ONE:r.TOUCH.ROTATE,TWO:r.TOUCH.DOLLY_PAN}),s(this,"target0"),s(this,"position0"),s(this,"zoom0"),s(this,"_domElementKeyEvents",null),s(this,"getPolarAngle"),s(this,"getAzimuthalAngle"),s(this,"setPolarAngle"),s(this,"setAzimuthalAngle"),s(this,"getDistance"),s(this,"getZoomScale"),s(this,"listenToKeyEvents"),s(this,"stopListenToKeyEvents"),s(this,"saveState"),s(this,"reset"),s(this,"update"),s(this,"connect"),s(this,"dispose"),s(this,"dollyIn"),s(this,"dollyOut"),s(this,"getScale"),s(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>v.phi,this.getAzimuthalAngle=()=>v.theta,this.setPolarAngle=e=>{let t=f(e,2*Math.PI),r=v.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),m.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=f(e,2*Math.PI),r=v.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),m.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),h=d.NONE},this.update=(()=>{let t=new r.Vector3,o=new r.Vector3(0,1,0),a=new r.Quaternion().setFromUnitVectors(e.up,o),s=a.clone().invert(),f=new r.Vector3,y=new r.Quaternion,w=2*Math.PI;return function(){let x=n.object.position;a.setFromUnitVectors(e.up,o),s.copy(a).invert(),t.copy(x).sub(n.target),t.applyQuaternion(a),v.setFromVector3(t),n.autoRotate&&h===d.NONE&&I(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(v.theta+=m.theta*n.dampingFactor,v.phi+=m.phi*n.dampingFactor):(v.theta+=m.theta,v.phi+=m.phi);let E=n.minAzimuthAngle,S=n.maxAzimuthAngle;isFinite(E)&&isFinite(S)&&(E<-Math.PI?E+=w:E>Math.PI&&(E-=w),S<-Math.PI?S+=w:S>Math.PI&&(S-=w),E<=S?v.theta=Math.max(E,Math.min(S,v.theta)):v.theta=v.theta>(E+S)/2?Math.max(E,v.theta):Math.min(S,v.theta)),v.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,v.phi)),v.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),n.zoomToCursor&&O||n.object.isOrthographicCamera?v.radius=V(v.radius):v.radius=V(v.radius*g),t.setFromSpherical(v),t.applyQuaternion(s),x.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(m.theta*=1-n.dampingFactor,m.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(m.set(0,0,0),b.set(0,0,0));let _=!1;if(n.zoomToCursor&&O){let i=null;if(n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera){let e=t.length();i=V(e*g);let r=e-i;n.object.position.addScaledVector(L,r),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new r.Vector3(k.x,k.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/g)),n.object.updateProjectionMatrix(),_=!0;let o=new r.Vector3(k.x,k.y,0);o.unproject(n.object),n.object.position.sub(o).add(e),n.object.updateMatrixWorld(),i=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==i&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(i).add(n.object.position):(l.origin.copy(n.object.position),l.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(l.direction))<u?e.lookAt(n.target):(c.setFromNormalAndCoplanarPoint(n.object.up,n.target),l.intersectPlane(c,n.target))))}else n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera&&(_=1!==g)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/g)),n.object.updateProjectionMatrix());return g=1,O=!1,!!(_||f.distanceToSquared(n.object.position)>p||8*(1-y.dot(n.object.quaternion))>p)&&(n.dispatchEvent(i),f.copy(n.object.position),y.copy(n.object.quaternion),_=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,r,i,o,a;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",$),null==(r=n.domElement)||r.removeEventListener("pointercancel",Q),null==(i=n.domElement)||i.removeEventListener("wheel",J),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",Z),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",Q),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};let n=this,i={type:"change"},o={type:"start"},a={type:"end"},d={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},h=d.NONE,p=1e-6,v=new r.Spherical,m=new r.Spherical,g=1,b=new r.Vector3,y=new r.Vector2,w=new r.Vector2,x=new r.Vector2,E=new r.Vector2,S=new r.Vector2,_=new r.Vector2,M=new r.Vector2,A=new r.Vector2,T=new r.Vector2,L=new r.Vector3,k=new r.Vector2,O=!1,D=[],P={};function R(){return Math.pow(.95,n.zoomSpeed)}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?m.theta+=e:m.theta-=e}function j(e){n.reverseOrbit||n.reverseVerticalOrbit?m.phi+=e:m.phi-=e}let C=(()=>{let e=new r.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),z=(()=>{let e=new r.Vector3;return function(t,r){!0===n.screenSpacePanning?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),U=(()=>{let e=new r.Vector3;return function(t,i){let o=n.domElement;if(o&&n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera){let r=n.object.position;e.copy(r).sub(n.target);let a=e.length();C(2*t*(a*=Math.tan(n.object.fov/2*Math.PI/180))/o.clientHeight,n.object.matrix),z(2*i*a/o.clientHeight,n.object.matrix)}else o&&n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera?(C(t*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),z(i*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function B(e){n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera?g=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){if(!n.zoomToCursor||!n.domElement)return;O=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,o=t.width,a=t.height;k.x=r/o*2-1,k.y=-(i/a*2)+1,L.set(k.x,k.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function F(e){y.set(e.clientX,e.clientY)}function H(e){E.set(e.clientX,e.clientY)}function G(){if(1==D.length)y.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);y.set(e,t)}}function W(){if(1==D.length)E.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);E.set(e,t)}}function q(){let e=D[0].pageX-D[1].pageX,t=D[0].pageY-D[1].pageY,n=Math.sqrt(e*e+t*t);M.set(0,n)}function Y(e){if(1==D.length)w.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);w.set(n,r)}x.subVectors(w,y).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*x.x/t.clientHeight),j(2*Math.PI*x.y/t.clientHeight)),y.copy(w)}function X(e){if(1==D.length)S.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);S.set(n,r)}_.subVectors(S,E).multiplyScalar(n.panSpeed),U(_.x,_.y),E.copy(S)}function K(e){var t;let r=er(e),i=e.pageX-r.x,o=e.pageY-r.y,a=Math.sqrt(i*i+o*o);A.set(0,a),T.set(0,Math.pow(A.y/M.y,n.zoomSpeed)),t=T.y,B(g/t),M.copy(A)}function $(e){var t,i,a;!1!==n.enabled&&(0===D.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",Z),null==(i=n.domElement)||i.ownerDocument.addEventListener("pointerup",Q)),a=e,D.push(a),"touch"===e.pointerType?function(e){switch(en(e),D.length){case 1:switch(n.touches.ONE){case r.TOUCH.ROTATE:if(!1===n.enableRotate)return;G(),h=d.TOUCH_ROTATE;break;case r.TOUCH.PAN:if(!1===n.enablePan)return;W(),h=d.TOUCH_PAN;break;default:h=d.NONE}break;case 2:switch(n.touches.TWO){case r.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&q(),n.enablePan&&W(),h=d.TOUCH_DOLLY_PAN;break;case r.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&q(),n.enableRotate&&G(),h=d.TOUCH_DOLLY_ROTATE;break;default:h=d.NONE}break;default:h=d.NONE}h!==d.NONE&&n.dispatchEvent(o)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.MOUSE.DOLLY:if(!1===n.enableZoom)return;N(e),M.set(e.clientX,e.clientY),h=d.DOLLY;break;case r.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;H(e),h=d.PAN}else{if(!1===n.enableRotate)return;F(e),h=d.ROTATE}break;case r.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;F(e),h=d.ROTATE}else{if(!1===n.enablePan)return;H(e),h=d.PAN}break;default:h=d.NONE}h!==d.NONE&&n.dispatchEvent(o)}(e))}function Z(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),h){case d.TOUCH_ROTATE:if(!1===n.enableRotate)return;Y(e),n.update();break;case d.TOUCH_PAN:if(!1===n.enablePan)return;X(e),n.update();break;case d.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&K(e),n.enablePan&&X(e),n.update();break;case d.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&K(e),n.enableRotate&&Y(e),n.update();break;default:h=d.NONE}}(e):function(e){if(!1!==n.enabled)switch(h){case d.ROTATE:if(!1===n.enableRotate)return;w.set(e.clientX,e.clientY),x.subVectors(w,y).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*x.x/t.clientHeight),j(2*Math.PI*x.y/t.clientHeight)),y.copy(w),n.update();break;case d.DOLLY:var r,i;if(!1===n.enableZoom)return;(A.set(e.clientX,e.clientY),T.subVectors(A,M),T.y>0)?(r=R(),B(g/r)):T.y<0&&(i=R(),B(g*i)),M.copy(A),n.update();break;case d.PAN:if(!1===n.enablePan)return;S.set(e.clientX,e.clientY),_.subVectors(S,E).multiplyScalar(n.panSpeed),U(_.x,_.y),E.copy(S),n.update()}}(e))}function Q(e){var t,r,i;(function(e){delete P[e.pointerId];for(let t=0;t<D.length;t++)if(D[t].pointerId==e.pointerId)return void D.splice(t,1)})(e),0===D.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointermove",Z),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointerup",Q)),n.dispatchEvent(a),h=d.NONE}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(h===d.NONE||h===d.ROTATE)){var t,r;e.preventDefault(),n.dispatchEvent(o),(N(e),e.deltaY<0)?(t=R(),B(g*t)):e.deltaY>0&&(r=R(),B(g/r)),n.update(),n.dispatchEvent(a)}}function ee(e){if(!1!==n.enabled&&!1!==n.enablePan){let t=!1;switch(e.code){case n.keys.UP:U(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=P[e.pointerId];void 0===t&&(t=new r.Vector2,P[e.pointerId]=t),t.set(e.pageX,e.pageY)}function er(e){return P[(e.pointerId===D[0].pointerId?D[1]:D[0]).pointerId]}this.dollyIn=(e=R())=>{B(g*e),n.update()},this.dollyOut=(e=R())=>{B(g/e),n.update()},this.getScale=()=>g,this.setScale=e=>{B(e),n.update()},this.getZoomScale=()=>R(),void 0!==t&&this.connect(t),this.update()}}},60890:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},62332:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("skip-forward",[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]])},64065:function(e){var t;(t=function(){function e(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";r=e}var r=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(e){e.preventDefault(),n(++r%i.children.length)},!1);var o=(performance||Date).now(),a=o,s=0,l=e(new t.Panel("FPS","#0ff","#002")),c=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:i,addPanel:e,showPanel:n,begin:function(){o=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(c.update(e-o,200),e>a+1e3&&(l.update(1e3*s/(e-a),100),a=e,s=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){o=this.end()},domElement:i,setMode:n}}).Panel=function(e,t,n){var r=1/0,i=0,o=Math.round,a=o(window.devicePixelRatio||1),s=80*a,l=48*a,c=3*a,u=2*a,f=3*a,d=15*a,h=74*a,p=30*a,v=document.createElement("canvas");v.width=s,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=n,m.fillRect(0,0,s,l),m.fillStyle=t,m.fillText(e,c,u),m.fillRect(f,d,h,p),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(f,d,h,p),{dom:v,update:function(l,g){r=Math.min(r,l),i=Math.max(i,l),m.fillStyle=n,m.globalAlpha=1,m.fillRect(0,0,s,d),m.fillStyle=t,m.fillText(o(l)+" "+e+" ("+o(r)+"-"+o(i)+")",c,u),m.drawImage(v,f+a,d,h-a,p,f,d,h-a,p),m.fillRect(f+h-a,d,a,p),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(f+h-a,d,a,o((1-l/g)*p))}}},e.exports=t},65229:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},66451:(e,t)=>{"use strict";function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else if(c<i&&0>o(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var u=[],f=[],d=1,h=null,p=3,v=!1,m=!1,g=!1,b=!1,y="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,x="undefined"!=typeof setImmediate?setImmediate:null;function E(e){for(var t=r(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(f)}}function S(e){if(g=!1,E(e),!m)if(null!==r(u))m=!0,_||(_=!0,a());else{var t=r(f);null!==t&&P(S,t.startTime-e)}}var _=!1,M=-1,A=5,T=-1;function L(){return!!b||!(t.unstable_now()-T<A)}function k(){if(b=!1,_){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,w(M),M=-1),v=!0;var o=p;try{t:{for(E(e),h=r(u);null!==h&&!(h.expirationTime>e&&L());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var l=s(h.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){h.callback=l,E(e),n=!0;break t}h===r(u)&&i(u),E(e)}else i(u);h=r(u)}if(null!==h)n=!0;else{var c=r(f);null!==c&&P(S,c.startTime-e),n=!1}}break e}finally{h=null,p=o,v=!1}}}finally{n?a():_=!1}}}if("function"==typeof x)a=function(){x(k)};else if("undefined"!=typeof MessageChannel){var O=new MessageChannel,D=O.port2;O.port1.onmessage=k,a=function(){D.postMessage(null)}}else a=function(){y(k,0)};function P(e,n){M=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){b=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var s=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?s+o:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>s?(e.sortIndex=o,n(f,e),null===r(u)&&e===r(f)&&(g?(w(M),M=-1):g=!0,P(S,o-s))):(e.sortIndex=l,n(u,e),m||v||(m=!0,_||(_=!0,a()))),e},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},66630:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("sliders-horizontal",[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]])},78108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(12115);function i(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(0,Object.defineProperty)(i,"name",{value:"usePrevious",configurable:!0})},79905:(e,t,n)=>{"use strict";function r(){var e=Object.create(null);function t(e,t){var n=void 0;self.troikaDefine=function(e){return n=e};var r=URL.createObjectURL(new Blob(["/** "+e.replace(/\*/g,"")+" **/\n\ntroikaDefine(\n"+t+"\n)"],{type:"application/javascript"}));try{importScripts(r)}catch(e){console.error(e)}return URL.revokeObjectURL(r),delete self.troikaDefine,n}self.addEventListener("message",function(n){var r=n.data,i=r.messageId,o=r.action,a=r.data;try{"registerModule"===o&&function n(r,i){var o=r.id,a=r.name,s=r.dependencies;void 0===s&&(s=[]);var l=r.init;void 0===l&&(l=function(){});var c=r.getTransferables;if(void 0===c&&(c=null),!e[o])try{s=s.map(function(t){return t&&t.isWorkerModule&&(n(t,function(e){if(e instanceof Error)throw e}),t=e[t.id].value),t}),l=t("<"+a+">.init",l),c&&(c=t("<"+a+">.getTransferables",c));var u=null;"function"==typeof l?u=l.apply(void 0,s):console.error("worker module init function failed to rehydrate"),e[o]={id:o,value:u,getTransferables:c},i(u)}catch(e){e&&e.noLog||console.error(e),i(e)}}(a,function(e){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:{isCallable:"function"==typeof e}})}),"callModule"===o&&function(t,n){var r,i=t.id,o=t.args;e[i]&&"function"==typeof e[i].value||n(Error("Worker module "+i+": not found or its 'init' did not return a function"));try{var a=(r=e[i]).value.apply(r,o);a&&"function"==typeof a.then?a.then(s,function(e){return n(e instanceof Error?e:Error(""+e))}):s(a)}catch(e){n(e)}function s(t){try{var r=e[i].getTransferables&&e[i].getTransferables(t);r&&Array.isArray(r)&&r.length||(r=void 0),n(t,r)}catch(e){console.error(e),n(e)}}}(a,function(e,t){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:e},t||void 0)})}catch(e){postMessage({messageId:i,success:!1,error:e.stack})}})}n.d(t,{Qw:()=>f,kl:()=>function e(t){if((!t||"function"!=typeof t.init)&&!s)throw Error("requires `options.init` function");var n,r=t.dependencies,a=t.init,l=t.getTransferables,u=t.workerId,f=((n=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n._getInitResult().then(function(t){if("function"==typeof t)return t.apply(void 0,e);throw Error("Worker module function was called but `init` did not return a callable function")})})._getInitResult=function(){var e=t.dependencies,r=t.init,i=Promise.all(e=Array.isArray(e)?e.map(function(e){return e&&(e=e.onMainThread||e)._getInitResult&&(e=e._getInitResult()),e}):[]).then(function(e){return r.apply(null,e)});return n._getInitResult=function(){return i},i},n);null==u&&(u="#default");var p="workerModule"+ ++o,v=t.name||p,m=null;function g(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(!i())return f.apply(void 0,e);if(!m){m=h(u,"registerModule",g.workerModuleData);var n=function(){m=null,c[u].delete(n)};(c[u]||(c[u]=new Set)).add(n)}return m.then(function(t){if(t.isCallable)return h(u,"callModule",{id:p,args:e});throw Error("Worker module function was called but `init` did not return a callable function")})}return r=r&&r.map(function(t){return"function"!=typeof t||t.workerModuleData||(s=!0,t=e({workerId:u,name:"<"+v+"> function dependency: "+t.name,init:"function(){return (\n"+d(t)+"\n)}"}),s=!1),t&&t.workerModuleData&&(t=t.workerModuleData),t}),g.workerModuleData={isWorkerModule:!0,id:p,name:v,dependencies:r,init:d(a),getTransferables:l&&d(l)},g.onMainThread=f,g}}),n(95704);var i=function(){var e=!1;if("undefined"!=typeof window&&void 0!==window.document)try{new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"}))).terminate(),e=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return i=function(){return e},e},o=0,a=0,s=!1,l=Object.create(null),c=Object.create(null),u=Object.create(null);function f(e){c[e]&&c[e].forEach(function(e){e()}),l[e]&&(l[e].terminate(),delete l[e])}function d(e){var t=e.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t="function "+t),t}function h(e,t,n){return new Promise(function(i,o){var s=++a;u[s]=function(e){e.success?i(e.result):o(Error("Error in worker "+t+" call: "+e.error))},(function(e){var t=l[e];if(!t){var n=d(r);(t=l[e]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+e.replace(/\*/g,"")+" **/\n\n;("+n+")()"],{type:"application/javascript"})))).onmessage=function(e){var t=e.data,n=t.messageId,r=u[n];if(!r)throw Error("WorkerModule response with empty or unknown messageId");delete u[n],r(t)}}return t})(e).postMessage({messageId:s,action:t,data:n})})}},83026:(e,t,n)=>{"use strict";n.d(t,{CC:()=>C,Q6:()=>U,bL:()=>O,zi:()=>G});var r=n(12115),i=n(34212),o=n(92556),a=n(94446),s=n(3468),l=n(59478),c=n(66218),u=n(78108),f=n(84288),d=n(97602),h=n(49972),p=n(95155),v=Object.defineProperty,m=(e,t)=>v(e,"name",{value:t,configurable:!0}),g={Horizontal:"horizontal"},b={LTR:"ltr"},y=["PageUp","PageDown"],w=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],x={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},E="Slider",[S,_,M]=(0,h.N)(E),[A,T]=(0,s.A)(E,[M]),[L,k]=A(E),O=r.forwardRef(m(function(e,t){let{name:n,min:s=0,max:c=100,step:u=1,orientation:f=g.Horizontal,disabled:d=!1,minStepsBetweenThumbs:h=0,preserveThumbOrder:v=!1,defaultValue:b=[s],value:x,onValueChange:E=m(()=>{},"onValueChange"),onValueCommit:_=m(()=>{},"onValueCommit"),inverted:M=!1,form:A,...T}=e,k=r.useRef(new Set),O=r.useRef(0),D=r.useRef(!1),P=f===g.Horizontal,[j,C]=r.useState(null),z=(0,a.s)(t,C),[U=[],B]=(0,l.i)({prop:x,defaultProp:b,onChange:m(e=>{var t;null==(t=[...k.current][O.current])||t.focus({preventScroll:!0,focusVisible:D.current}),D.current=!1,E(e)},"onChange")}),N=r.useRef(U),V=r.useRef(U);function F(e){let t=K(U,e);W(e,t)}function H(e){W(e,O.current)}function G(){String(U)!==String(N.current)&&_(U)}function W(e,t){let{commit:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit:!1},r=ee(u),o=et(Math.round((e-s)/u)*u+s,r),a=(0,i.q)(o,[s,c]);B(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=h*u,o=v?(0,i.q)(a,[void 0===e[t-1]?s:e[t-1]+r,void 0===e[t+1]?c:e[t+1]-r]):a,l=q(e,o,t);if(!Q(l,r))return e;{O.current=v?t:l.indexOf(o);let r=String(l)!==String(e);return r&&n&&_(l),r?l:e}})}return r.useEffect(()=>{let e=A?null==j?void 0:j.ownerDocument.getElementById(A):null==j?void 0:j.closest("form");if(e instanceof HTMLFormElement){let t=m(()=>B(V.current),"reset");return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[j,A,B]),m(F,"handleSlideStart"),m(H,"handleSlideMove"),m(G,"handleSlideEnd"),m(W,"updateValues"),(0,p.jsx)(L,{scope:e.__scopeSlider,name:n,disabled:d,min:s,max:c,valueIndexToChangeRef:O,thumbs:k.current,values:U,orientation:f,form:A,children:(0,p.jsx)(S.Provider,{scope:e.__scopeSlider,children:(0,p.jsx)(S.Slot,{scope:e.__scopeSlider,children:(0,p.jsx)(P?R:I,{"aria-disabled":d,"data-disabled":d?"":void 0,...T,ref:z,onPointerDown:(0,o.mK)(T.onPointerDown,()=>{d||(N.current=U,D.current=!1)}),min:s,max:c,inverted:M,onSlideStart:d?void 0:F,onSlideMove:d?void 0:H,onSlideEnd:d?void 0:G,onHomeKeyDown:()=>{d||(D.current=!0,W(s,0,{commit:!0}))},onEndKeyDown:()=>{d||(D.current=!0,W(c,U.length-1,{commit:!0}))},onStepKeyDown:e=>{let{event:t,direction:n}=e;if(!d){D.current=!0;let e=y.includes(t.key)||t.shiftKey&&w.includes(t.key),r=O.current;W(en(U[r],{min:s,step:u,direction:n,multiplier:e?10:1}),r,{commit:!0})}}})})})})},"Slider")),[D,P]=A(E,{startEdge:"left",endEdge:"right",size:"width",direction:1}),R=r.forwardRef(m(function(e,t){let{min:n,max:i,dir:o,inverted:s,onSlideStart:l,onSlideMove:u,onSlideEnd:f,onStepKeyDown:d,...h}=e,[v,g]=r.useState(null),y=(0,a.s)(t,g),w=r.useRef(void 0),E=(0,c.jH)(o),S=E===b.LTR,_=S&&!s||!S&&s;function M(e){let t=w.current||v.getBoundingClientRect(),r=J([0,t.width],_?[n,i]:[i,n]);return w.current=t,r(e-t.left)}return m(M,"getValueFromPointer"),(0,p.jsx)(D,{scope:e.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:(0,p.jsx)(j,{dir:E,"data-orientation":"horizontal",...h,ref:y,style:{...h.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=M(e.clientX);null==l||l(t)},onSlideMove:e=>{let t=M(e.clientX);null==u||u(t)},onSlideEnd:()=>{w.current=void 0,null==f||f()},onStepKeyDown:e=>{let t=x[_?"from-left":"from-right"].includes(e.key);null==d||d({event:e,direction:t?-1:1})}})})},"SliderHorizontal")),I=r.forwardRef(m(function(e,t){let{min:n,max:i,inverted:o,onSlideStart:s,onSlideMove:l,onSlideEnd:c,onStepKeyDown:u,...f}=e,d=r.useRef(null),h=(0,a.s)(t,d),v=r.useRef(void 0),g=!o;function b(e){let t=v.current||d.current.getBoundingClientRect(),r=J([0,t.height],g?[i,n]:[n,i]);return v.current=t,r(e-t.top)}return m(b,"getValueFromPointer"),(0,p.jsx)(D,{scope:e.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:(0,p.jsx)(j,{"data-orientation":"vertical",...f,ref:h,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=b(e.clientY);null==s||s(t)},onSlideMove:e=>{let t=b(e.clientY);null==l||l(t)},onSlideEnd:()=>{v.current=void 0,null==c||c()},onStepKeyDown:e=>{let t=x[g?"from-bottom":"from-top"].includes(e.key);null==u||u({event:e,direction:t?-1:1})}})})},"SliderVertical")),j=r.forwardRef(m(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:s,onEndKeyDown:l,onStepKeyDown:c,...u}=e,f=k(E,n);return(0,p.jsx)(d.sG.span,{...u,ref:t,onKeyDown:(0,o.mK)(e.onKeyDown,e=>{"Home"===e.key?(s(e),e.preventDefault()):"End"===e.key?(l(e),e.preventDefault()):y.concat(w).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:(0,o.mK)(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),f.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:(0,o.mK)(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:(0,o.mK)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},"SliderImpl")),C=r.forwardRef(m(function(e,t){let{__scopeSlider:n,...r}=e,i=k("SliderTrack",n);return(0,p.jsx)(d.sG.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...r,ref:t})},"SliderTrack")),z="SliderRange",U=r.forwardRef(m(function(e,t){let{__scopeSlider:n,...i}=e,o=k(z,n),s=P(z,n),l=r.useRef(null),c=(0,a.s)(t,l),u=o.values.length,f=o.values.map(e=>Y(e,o.min,o.max)),h=u>1?Math.min(...f):0,v=100-Math.max(...f);return(0,p.jsx)(d.sG.span,{"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,...i,ref:c,style:{...e.style,[s.startEdge]:h+"%",[s.endEdge]:v+"%"}})},"SliderRange")),[B,N]=A("SliderThumb");function V(e){let{__scopeSlider:t,name:n,children:i,internal_do_not_use_render:o}=e,a=k("SliderThumbProvider",t),s=_(t),[l,c]=r.useState(null),u=r.useMemo(()=>l?s().findIndex(e=>e.ref.current===l):-1,[s,l]),d=(0,f.X)(l),h=!l||!!a.form||!!l.closest("form"),v=a.values[u],m=null!=n?n:a.name?a.name+(a.values.length>1?"[]":""):void 0,g=void 0===v?0:Y(v,a.min,a.max);r.useEffect(()=>{if(l)return a.thumbs.add(l),()=>{a.thumbs.delete(l)}},[l,a.thumbs]);let b={value:v,name:m,form:a.form,isFormControl:h,index:u,thumb:l,onThumbChange:c,percent:g,size:d};return(0,p.jsx)(B,{scope:t,...b,children:er(o)?o(b):i})}m(V,"SliderThumbProvider");var F="SliderThumbTrigger",H=r.forwardRef(m(function(e,t){let{__scopeSlider:n,...r}=e,i=k(F,n),s=P(F,n),{index:l,value:c,percent:u,size:f,onThumbChange:h}=N(F,n),v=(0,a.s)(t,h),m=X(l,i.values.length),g=null==f?void 0:f[s.size],b=g?$(g,u,s.direction):0;return(0,p.jsx)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:"calc(".concat(u,"% + ").concat(b,"px)")},children:(0,p.jsx)(S.ItemSlot,{scope:n,children:(0,p.jsx)(d.sG.span,{role:"slider","aria-label":e["aria-label"]||m,"aria-valuemin":i.min,"aria-valuenow":c,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,tabIndex:i.disabled?void 0:0,...r,ref:v,style:void 0===c?{display:"none"}:e.style,onFocus:(0,o.mK)(e.onFocus,()=>{i.valueIndexToChangeRef.current=l})})})})},"SliderThumbTrigger")),G=r.forwardRef(m(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,p.jsx)(V,{__scopeSlider:n,name:r,internal_do_not_use_render:e=>{let{index:r,isFormControl:o}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(H,{...i,ref:t,__scopeSlider:n}),o?(0,p.jsx)(W,{__scopeSlider:n},r):null]})}})},"SliderThumb")),W=r.forwardRef(m(function(e,t){let{__scopeSlider:n,...i}=e,{value:o,name:s,form:l}=N("SliderBubbleInput",n),c=r.useRef(null),f=(0,a.s)(c,t),h=(0,u.Z)(o);return r.useEffect(()=>{let e=c.current;if(!e)return;let t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(h!==o&&t){let n=new Event("input",{bubbles:!0});t.call(e,o),e.dispatchEvent(n)}},[h,o]),(0,p.jsx)(d.sG.input,{style:{display:"none"},name:s,form:l,...i,ref:f,defaultValue:o})},"SliderBubbleInput"));function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}function Y(e,t,n){return(0,i.q)(100/(n-t)*(e-t),[0,100])}function X(e,t){return t>2?"Value ".concat(e+1," of ").concat(t):2===t?["Minimum","Maximum"][e]:void 0}function K(e,t){if(1===e.length)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}function $(e,t,n){let r=e/2,i=J([0,50],[0,r]);return(r-i(t)*n)*n}function Z(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Q(e,t){return!(t>0)||Math.min(...Z(e))>=t}function J(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function ee(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes("e")){let[e,n]=t.split("e"),r=e.split(".")[1]||"",i=Number(n);return Math.max(0,r.length-i)}let n=t.split(".")[1];return n?n.length:0}function et(e,t){let n=Math.pow(10,t);return Math.round(e*n)/n}function en(e,t){let n,{min:r,step:i,direction:o,multiplier:a}=t,s=ee(i),l=(e-r)/i,c=Math.round(l);return n=et(c*i+r,s)===et(e,s)?c+a*o:o>0?Math.ceil(l):Math.floor(l),et(n*i+r,s)}function er(e){return"function"==typeof e}m(q,"getNextSortedValues"),m(Y,"convertValueToPercentage"),m(X,"getLabel"),m(K,"getClosestValueIndex"),m($,"getThumbInBoundsOffset"),m(Z,"getStepsBetweenValues"),m(Q,"hasMinStepsBetweenValues"),m(J,"linearScale"),m(ee,"getDecimalCount"),m(et,"roundValue"),m(en,"getNextStepValue"),m(er,"isFunction")},83654:(e,t,n)=>{"use strict";var r=n(12115),i=n(14806),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var h=a(e,(f=c(function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(a=e,t):(a=e,s=n)}var a,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=h},[h]),u(h),h}},84288:(e,t,n)=>{"use strict";n.d(t,{X:()=>o});var r=n(12115),i=n(4129);function o(e){let[t,n]=r.useState(void 0);return(0,i.N)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=0,r=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let i=r[0];window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>{let t,r;if("borderBoxSize"in i){let e=i.borderBoxSize,n=Array.isArray(e)?e[0]:e;t=n.inlineSize,r=n.blockSize}else t=e.offsetWidth,r=e.offsetHeight;n({width:t,height:r})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}n(void 0)},[e]),t}(0,Object.defineProperty)(o,"name",{value:"useSize",configurable:!0})},85921:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(5121).A)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]])},88945:(e,t,n)=>{"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{A:()=>r})},94854:(e,t,n)=>{"use strict";n.d(t,{n:()=>a});var r=n(87548);let i=new r.Box3,o=new r.Vector3;class a extends r.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new r.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new r.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new r.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new r.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new r.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new r.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new r.InterleavedBufferAttribute(i,t,0)),this.setAttribute("instanceColorEnd",new r.InterleavedBufferAttribute(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new r.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new r.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),i.setFromBufferAttribute(t),this.boundingBox.union(i))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new r.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)o.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(o)),o.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(o));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}}}]);