(this.webpackJsonpBreathingApp=this.webpackJsonpBreathingApp||[]).push([[7],{49:function(e,n,t){e.exports=t(75)},55:function(e,n,t){var o={"./ion-action-sheet-ios.entry.js":[79,29],"./ion-action-sheet-md.entry.js":[80,30],"./ion-alert-ios.entry.js":[81,31],"./ion-alert-md.entry.js":[82,32],"./ion-app_8-ios.entry.js":[83,13],"./ion-app_8-md.entry.js":[84,14],"./ion-avatar_3-ios.entry.js":[85,33],"./ion-avatar_3-md.entry.js":[86,34],"./ion-back-button-ios.entry.js":[87,35],"./ion-back-button-md.entry.js":[88,36],"./ion-backdrop-ios.entry.js":[89,79],"./ion-backdrop-md.entry.js":[90,80],"./ion-button_2-ios.entry.js":[91,37],"./ion-button_2-md.entry.js":[92,38],"./ion-card_5-ios.entry.js":[93,39],"./ion-card_5-md.entry.js":[94,40],"./ion-checkbox-ios.entry.js":[95,41],"./ion-checkbox-md.entry.js":[96,42],"./ion-chip-ios.entry.js":[97,43],"./ion-chip-md.entry.js":[98,44],"./ion-col_3.entry.js":[99,81],"./ion-datetime_3-ios.entry.js":[100,19],"./ion-datetime_3-md.entry.js":[101,20],"./ion-fab_3-ios.entry.js":[102,45],"./ion-fab_3-md.entry.js":[103,46],"./ion-img.entry.js":[104,82],"./ion-infinite-scroll_2-ios.entry.js":[105,83],"./ion-infinite-scroll_2-md.entry.js":[106,84],"./ion-input-ios.entry.js":[107,47],"./ion-input-md.entry.js":[108,48],"./ion-item-option_3-ios.entry.js":[109,49],"./ion-item-option_3-md.entry.js":[110,50],"./ion-item_8-ios.entry.js":[111,51],"./ion-item_8-md.entry.js":[112,52],"./ion-loading-ios.entry.js":[113,53],"./ion-loading-md.entry.js":[114,54],"./ion-menu_3-ios.entry.js":[115,55],"./ion-menu_3-md.entry.js":[116,56],"./ion-modal-ios.entry.js":[117,15],"./ion-modal-md.entry.js":[118,16],"./ion-nav_2.entry.js":[119,25],"./ion-popover-ios.entry.js":[120,17],"./ion-popover-md.entry.js":[121,18],"./ion-progress-bar-ios.entry.js":[122,57],"./ion-progress-bar-md.entry.js":[123,58],"./ion-radio_2-ios.entry.js":[124,59],"./ion-radio_2-md.entry.js":[125,60],"./ion-range-ios.entry.js":[126,61],"./ion-range-md.entry.js":[127,62],"./ion-refresher_2-ios.entry.js":[128,63],"./ion-refresher_2-md.entry.js":[129,64],"./ion-reorder_2-ios.entry.js":[130,27],"./ion-reorder_2-md.entry.js":[131,28],"./ion-ripple-effect.entry.js":[132,85],"./ion-route_4.entry.js":[133,65],"./ion-searchbar-ios.entry.js":[134,66],"./ion-searchbar-md.entry.js":[135,67],"./ion-segment_2-ios.entry.js":[136,68],"./ion-segment_2-md.entry.js":[137,69],"./ion-select_3-ios.entry.js":[138,70],"./ion-select_3-md.entry.js":[139,71],"./ion-slide_2-ios.entry.js":[140,86],"./ion-slide_2-md.entry.js":[141,87],"./ion-spinner.entry.js":[142,23],"./ion-split-pane-ios.entry.js":[143,88],"./ion-split-pane-md.entry.js":[144,89],"./ion-tab-bar_2-ios.entry.js":[145,72],"./ion-tab-bar_2-md.entry.js":[146,73],"./ion-tab_2.entry.js":[147,26],"./ion-text.entry.js":[148,74],"./ion-textarea-ios.entry.js":[149,75],"./ion-textarea-md.entry.js":[150,76],"./ion-toast-ios.entry.js":[151,77],"./ion-toast-md.entry.js":[152,78],"./ion-toggle-ios.entry.js":[153,21],"./ion-toggle-md.entry.js":[154,22],"./ion-virtual-scroll.entry.js":[155,90]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=55,e.exports=r},57:function(e,n,t){var o={"./ion-icon.entry.js":[159,93]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=57,e.exports=r},62:function(e,n,t){},63:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(27),a=t.n(i),s=t(13),c=t(10),l=t(43),m=t(3),y=t(4),d=t(7),u=t(6),j=(t(62),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={breathe:"BREATHE IN",play:!1},e.playAudio=function(){e.setState({play:!0}),console.log(e.state.play),console.log("Play clicked"),document.getElementById("myAudio").play()},e.pauseAudio=function(){e.setState({play:!1}),console.log(e.state.play),console.log("Pause clicked"),document.getElementById("myAudio").pause()},e}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"audio_div"},r.a.createElement("div",{className:"head"},r.a.createElement("strong",null,this.state.breathe)),r.a.createElement("br",null),r.a.createElement("div",{className:"animation"},r.a.createElement("div",{className:"watch-face"},r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}))),r.a.createElement("div",{className:"audio_control"},r.a.createElement("audio",{id:"myAudio",ref:"audio_tag",src:"/assets/sounds/audio_file.mpeg",loop:!0}),this.state.play?r.a.createElement("button",{className:"pause",onClick:this.pauseAudio},r.a.createElement("img",{src:"/assets/pause.png"})):r.a.createElement("button",{className:"play",onClick:this.playAudio},r.a.createElement("img",{src:"/assets/play.png"})))))}}]),t}(o.Component)),p=(t(63),function(){return r.a.createElement(c.f,{className:"main"},r.a.createElement(c.c,null,r.a.createElement(c.d,{collapse:"condense"},r.a.createElement(c.i,null,r.a.createElement(c.h,{size:"large"},"Blank"))),r.a.createElement(j,null)))}),_=(t(64),t(65),t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),function(){return r.a.createElement(c.b,null,r.a.createElement(l.a,null,r.a.createElement(c.g,null,r.a.createElement(s.c,{path:"/home",component:p,exact:!0}),r.a.createElement(s.c,{exact:!0,path:"/",render:function(){return r.a.createElement(s.b,{to:"/home"})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,9,12]]]);
//# sourceMappingURL=main.175034e1.chunk.js.map