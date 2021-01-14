!function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=null,r={"Alice's House":{x:279,y:100},"Bob's House":{x:295,y:203},Cabin:{x:372,y:67},"Daria's House":{x:183,y:285},"Ernie's House":{x:50,y:283},Farm:{x:36,y:118},"Grete's House":{x:35,y:187},Marketplace:{x:162,y:110},"Post Office":{x:205,y:57},Shop:{x:137,y:212},"Town Hall":{x:202,y:213}},o=Object.keys(r),i=function(){function n(t,e,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.worldState=t,this.robot=e,this.robotState=r,this.turn=0;var i=window.__sandbox?window.__sandbox.output.div:document.body,a=i.ownerDocument;this.node=i.appendChild(a.createElement("div")),this.node.style.cssText="position: relative; line-height: 0.1; margin-left: 10px",this.map=this.node.appendChild(a.createElement("img")),this.map.src="img/village2x.png",this.map.style.cssText="vertical-align: -8px",this.robotElt=this.node.appendChild(a.createElement("div")),this.robotElt.style.cssText="position: absolute; transition: left ".concat(.4,"s, top ").concat(.4,"s;"),this.robotElt.appendChild(a.createElement("img")).src="img/robot_moving2x.gif",this.parcels=[],this.text=this.node.appendChild(a.createElement("span")),this.button=this.node.appendChild(a.createElement("button")),this.button.style.cssText="color: white; background: #28b; border: none; border-radius: 2px; padding: 2px 5px; line-height: 1.1; font-family: sans-serif; font-size: 80%",this.button.textContent="Stop",this.button.addEventListener("click",(function(){return o.clicked()})),this.schedule(),this.updateView(),this.updateParcels(),this.robotElt.addEventListener("transitionend",(function(){return o.updateParcels()}))}var i,a;return i=n,(a=[{key:"updateView",value:function(){var t=r[this.worldState.place];this.robotElt.style.top=t.y-38+"px",this.robotElt.style.left=t.x-16+"px",this.text.textContent=" Turn ".concat(this.turn," ")}},{key:"updateParcels",value:function(){for(;this.parcels.length;)this.parcels.pop().remove();var e,n={},i=function(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw a}}}}(this.worldState.parcels);try{for(i.s();!(e=i.n()).done;){var a=e.value,l=a.place,s=a.address,u=n[l]||(n[l]=0);n[l]+=14;var c=document.createElement("div"),f=16*o.indexOf(s);if(c.style.cssText="position: absolute; height: 16px; width: 16px; background-image: url(img/parcel2x.png); background-position: 0 -"+f+"px",l==this.worldState.place)c.style.left="25px",c.style.bottom=20+u+"px",this.robotElt.appendChild(c);else{var h=r[l];c.style.left=h.x-5+"px",c.style.top=h.y-10-u+"px",this.node.appendChild(c)}this.parcels.push(c)}}catch(t){i.e(t)}finally{i.f()}}},{key:"tick",value:function(){var t=this.robot(this.worldState,this.robotState),e=t.direction,n=t.memory;this.worldState=this.worldState.move(e),this.robotState=n,this.turn++,this.updateView(),0==this.worldState.parcels.length?(this.button.remove(),this.text.textContent=" Finished after ".concat(this.turn," turns"),this.robotElt.firstChild.src="img/robot_idle2x.png"):this.schedule()}},{key:"schedule",value:function(){var t=this;this.timeout=setTimeout((function(){return t.tick()}),500)}},{key:"clicked",value:function(){null==this.timeout?(this.schedule(),this.button.textContent="Stop123",this.robotElt.firstChild.src="img/robot_moving2x.gif"):(clearTimeout(this.timeout),this.timeout=null,this.button.textContent="Start123",this.robotElt.firstChild.src="img/robot_idle2x.png")}}])&&e(i.prototype,a),n}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e,n){for(var r=[{at:e,route:[]}],o=0;o<r.length;o++){var i,s=r[o],u=s.at,c=s.route,f=l(t[u]);try{var h=function(){var t=i.value;if(t==n)return{v:c.concat(t)};r.some((function(e){return e.at==t}))||r.push({at:t,route:c.concat(t)})};for(f.s();!(i=f.n()).done;){var p=h();if("object"===a(p))return p.v}}catch(t){f.e(t)}finally{f.f()}}}function c(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=function(t){var e=Object.create(null);function n(t,n){null==e[t]?e[t]=[n]:e[t].push(n)}var r,o,i,a=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(["Alice's House-Bob's House","Alice's House-Cabin","Alice's House-Post Office","Bob's House-Town Hall","Daria's House-Ernie's House","Daria's House-Town Hall","Ernie's House-Grete's House","Grete's House-Farm","Grete's House-Shop","Marketplace-Farm","Marketplace-Post Office","Marketplace-Shop","Marketplace-Town Hall","Shop-Town Hall"].map((function(t){return t.split("-")})));try{for(a.s();!(r=a.n()).done;){var l=(o=r.value,i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}(o,i)||c(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],u=l[1];n(s,u),n(u,s)}}catch(t){a.e(t)}finally{a.f()}return e}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t){return t[Math.floor(Math.random()*t.length)]}var y,b,m,v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.place=e,this.parcels=n}var e,n;return e=t,(n=[{key:"move",value:function(e){var n=this;if(h[this.place].includes(e)){var r=this.parcels.map((function(t){return t.place!=n.place?t:{place:e,address:t.address}})).filter((function(t){return t.place!=t.address}));return new t(e,r)}return this}}])&&p(e.prototype,n),t}();v.random=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e=[],n=0;n<t;n++){var r=d(Object.keys(h)),o=void 0;do{o=d(Object.keys(h))}while(o==r);e.push({place:o,address:r})}return new v("Post Office",e)},y=v.random(),b=function(t,e){var n=t.place,r=t.parcels;if(0==e.length){var o=r[0];e=o.place!=n?u(h,n,o.place):u(h,n,o.address)}return{direction:e[0],memory:e.slice(1)}},m=[],n&&null!=n.timeout&&clearTimeout(n.timeout),n=new i(y,b,m)}();