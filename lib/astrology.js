!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.astrology=o():e.astrology=o()}(window,function(){return function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=2)}([function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=o.PLANETARY_SYMBOLS={sun:"a",moon:"s",mercury:"d",venus:"f",earth:"g",mars:"h",jupiter:"j",saturn:"k",uranus:"ö",neptune:"ä",pluto:"#","south node":"?","north node":"ß",ceres:"A",pallas:"S",juno:"D",vesta:"F",lilith:"ç",cupido:"L",chiron:"l",nessus:"ò",pholus:"ñ",chariklo:"î",eris:"È",chaos:"Ê",fortuna:"%"};o.planetFactory=function(e){var o=e.name,n=e.longitude,r=e.latitude,a=e.speed;return{name:o,longitude:n,latitude:r,speed:a,symbol:t[o.toLowerCase()],isRetrograde:a<0,isMajor:["sun","moon","mercury","venus","mars","jupiter","saturn","uranus","neptune","pluto","north node","south node"].indexOf(o.toLowerCase())>-1,isOutOfBounds:Math.abs(r)>23.45}}},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.aspectFactory=o.aspectTypes=void 0,n(0);var t=o.aspectTypes={conjunct:{name:"conjunct",major:!0,angle:0,orb:6,symbol:"<"},semisextile:{name:"semisextile",major:!1,angle:30,orb:3,symbol:"y"},decile:{name:"decile",major:!1,angle:36,orb:1.5,symbol:">"},novile:{name:"novile",major:!1,angle:40,orb:1.9,symbol:"M"},semisquare:{name:"semisquare",major:!1,angle:45,orb:3,symbol:"="},septile:{name:"septile",major:!1,angle:51.417,orb:2,symbol:"V"},sextile:{name:"sextile",major:!0,angle:60,orb:6,symbol:"x"},quintile:{name:"quintile",major:!1,angle:72,orb:2,symbol:"Y"},bilin:{name:"bilin",major:!1,angle:75,orb:.9,symbol:"-"},binovile:{name:"binovile",major:!1,angle:80,orb:2,symbol:";"},square:{name:"square",major:!0,angle:90,orb:6,symbol:"c"},biseptile:{name:"biseptile",major:!1,angle:102.851,orb:2,symbol:"N"},tredecile:{name:"tredecile",major:!1,angle:108,orb:2,symbol:"X"},trine:{name:"trine",major:!0,angle:120,orb:6,symbol:"Q"},sesquiquadrate:{name:"sesquiquadrate",major:!1,angle:135,orb:3,symbol:"b"},biquintile:{name:"biquintile",major:!1,angle:144,orb:2,symbol:"C"},inconjunct:{name:"inconjunct",major:!1,angle:150,orb:3,symbol:"n"},treseptile:{name:"treseptile",major:!1,angle:154.284,orb:1.1,symbol:"B"},tetranovile:{name:"tetranovile",major:!1,angle:160,orb:3,symbol:":"},tao:{name:"tao",major:!1,angle:165,orb:1.5,symbol:"—"},opposition:{name:"opposition",major:!0,angle:180,orb:6,symbol:"m"}};o.aspectFactory=function(e){var o=e.p1,n=e.p2,r=o.longitude,a=n.longitude,l=Math.abs(r-a),s=o.isRetrograde,i=n.isRetrograde,u=Math.abs(o.speed),m=Math.abs(n.speed),b=!1;l>180+t.opposition.orb&&(l=r>a?360-r+a:360-a+r,b=!0);var c=Object.values(t).find(function(e){return l>=e.angle-e.orb&&l<=e.angle+e.orb});if(void 0===c)throw new Error("There is no aspect between these two planets.");var p=Number((l%1).toFixed(6)),d=l-c.angle;return{p1:o,p2:n,type:c,orb:p,isApplying:(d<0&&!b&&a>r||d>0&&!b&&r>a||d<0&&b&&r>a||d>0&&b&&a>r)&&(!s&&!i&&m>u||s&&i&&u>m||s&&!i)||(d>0&&!b&&a>r||d<0&&!b&&r>a||d>0&&b&&r>a||d<0&&b&&a>r)&&(!s&&!i&&u>m||s&&i&&m>u||!s&&i),isParallel:Math.abs(o.latitude-n.latitude)<=1,isContraparallel:Math.abs(o.latitude+n.latitude)<=1}}},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(0);Object.defineProperty(o,"planetFactory",{enumerable:!0,get:function(){return t.planetFactory}});var r=n(1);Object.defineProperty(o,"aspectFactory",{enumerable:!0,get:function(){return r.aspectFactory}})}])});