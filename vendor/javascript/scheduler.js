var e={};function f(e,n){var t=e.length;e.push(n);e:for(;0<t;){var a=t-1>>>1,l=e[a];if(!(0<g(l,n)))break e;e[a]=n,e[t]=l,t=a}}function h(e){return 0===e.length?null:e[0]}function k(e){if(0===e.length)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var a=0,l=e.length,r=l>>>1;a<r;){var i=2*(a+1)-1,u=e[i],o=i+1,s=e[o];if(0>g(u,t))o<l&&0>g(s,u)?(e[a]=s,e[o]=t,a=o):(e[a]=u,e[i]=t,a=i);else{if(!(o<l&&0>g(s,t)))break e;e[a]=s,e[o]=t,a=o}}}return n}function g(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}if("object"===typeof performance&&"function"===typeof performance.now){var n=performance;e.unstable_now=function(){return n.now()}}else{var t=Date,a=t.now();e.unstable_now=function(){return t.now()-a}}var l=[],r=[],i=1,u=null,o=3,s=!1,c=!1,b=!1,d="function"===typeof setTimeout?setTimeout:null,_="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(e){for(var n=h(r);null!==n;){if(null===n.callback)k(r);else{if(!(n.startTime<=e))break;k(r),n.sortIndex=n.expirationTime,f(l,n)}n=h(r)}}function H(e){b=!1;G(e);if(!c)if(null!==h(l))c=!0,I(J);else{var n=h(r);null!==n&&K(H,n.startTime-e)}}function J(n,t){c=!1;b&&(b=!1,_(m),m=-1);s=!0;var a=o;try{G(t);for(u=h(l);null!==u&&(!(u.expirationTime>t)||n&&!M());){var i=u.callback;if("function"===typeof i){u.callback=null;o=u.priorityLevel;var d=i(u.expirationTime<=t);t=e.unstable_now();"function"===typeof d?u.callback=d:u===h(l)&&k(l);G(t)}else k(l);u=h(l)}if(null!==u)var v=!0;else{var p=h(r);null!==p&&K(H,p.startTime-t);v=!1}return v}finally{u=null,o=a,s=!1}}var p=!1,y=null,m=-1,w=5,P=-1;function M(){return!(e.unstable_now()-P<w)}function R(){if(null!==y){var n=e.unstable_now();P=n;var t=!0;try{t=y(!0,n)}finally{t?x():(p=!1,y=null)}}else p=!1}var x;if("function"===typeof v)x=function(){v(R)};else if("undefined"!==typeof MessageChannel){var C=new MessageChannel,T=C.port2;C.port1.onmessage=R;x=function(){T.postMessage(null)}}else x=function(){d(R,0)};function I(e){y=e;p||(p=!0,x())}function K(n,t){m=d((function(){n(e.unstable_now())}),t)}e.unstable_IdlePriority=5;e.unstable_ImmediatePriority=1;e.unstable_LowPriority=4;e.unstable_NormalPriority=3;e.unstable_Profiling=null;e.unstable_UserBlockingPriority=2;e.unstable_cancelCallback=function(e){e.callback=null};e.unstable_continueExecution=function(){c||s||(c=!0,I(J))};e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<e?Math.floor(1e3/e):5};e.unstable_getCurrentPriorityLevel=function(){return o};e.unstable_getFirstCallbackNode=function(){return h(l)};e.unstable_next=function(e){switch(o){case 1:case 2:case 3:var n=3;break;default:n=o}var t=o;o=n;try{return e()}finally{o=t}};e.unstable_pauseExecution=function(){};e.unstable_requestPaint=function(){};e.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=o;o=e;try{return n()}finally{o=t}};e.unstable_scheduleCallback=function(n,t,a){var u=e.unstable_now();"object"===typeof a&&null!==a?(a=a.delay,a="number"===typeof a&&0<a?u+a:u):a=u;switch(n){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}o=a+o;n={id:i++,callback:t,priorityLevel:n,startTime:a,expirationTime:o,sortIndex:-1};a>u?(n.sortIndex=a,f(r,n),null===h(l)&&n===h(r)&&(b?(_(m),m=-1):b=!0,K(H,a-u))):(n.sortIndex=o,f(l,n),c||s||(c=!0,I(J)));return n};e.unstable_shouldYield=M;e.unstable_wrapCallback=function(e){var n=o;return function(){var t=o;o=n;try{return e.apply(this,arguments)}finally{o=t}}};const L=e.unstable_now,F=e.unstable_IdlePriority,E=e.unstable_ImmediatePriority,N=e.unstable_LowPriority,j=e.unstable_NormalPriority,q=e.unstable_Profiling,B=e.unstable_UserBlockingPriority,U=e.unstable_cancelCallback,W=e.unstable_continueExecution,Y=e.unstable_forceFrameRate,D=e.unstable_getCurrentPriorityLevel,z=e.unstable_getFirstCallbackNode,A=e.unstable_next,O=e.unstable_pauseExecution,Q=e.unstable_requestPaint,S=e.unstable_runWithPriority,V=e.unstable_scheduleCallback,X=e.unstable_shouldYield,Z=e.unstable_wrapCallback;export{e as default,F as unstable_IdlePriority,E as unstable_ImmediatePriority,N as unstable_LowPriority,j as unstable_NormalPriority,q as unstable_Profiling,B as unstable_UserBlockingPriority,U as unstable_cancelCallback,W as unstable_continueExecution,Y as unstable_forceFrameRate,D as unstable_getCurrentPriorityLevel,z as unstable_getFirstCallbackNode,A as unstable_next,L as unstable_now,O as unstable_pauseExecution,Q as unstable_requestPaint,S as unstable_runWithPriority,V as unstable_scheduleCallback,X as unstable_shouldYield,Z as unstable_wrapCallback};

