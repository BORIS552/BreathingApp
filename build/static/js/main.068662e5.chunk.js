(this.webpackJsonpBreathingApp=this.webpackJsonpBreathingApp||[]).push([[7],{50:function(e,t,n){e.exports=n(77)},56:function(e,t,n){var o={"./ion-action-sheet-ios.entry.js":[81,29],"./ion-action-sheet-md.entry.js":[82,30],"./ion-alert-ios.entry.js":[83,31],"./ion-alert-md.entry.js":[84,32],"./ion-app_8-ios.entry.js":[85,13],"./ion-app_8-md.entry.js":[86,14],"./ion-avatar_3-ios.entry.js":[87,33],"./ion-avatar_3-md.entry.js":[88,34],"./ion-back-button-ios.entry.js":[89,35],"./ion-back-button-md.entry.js":[90,36],"./ion-backdrop-ios.entry.js":[91,79],"./ion-backdrop-md.entry.js":[92,80],"./ion-button_2-ios.entry.js":[93,37],"./ion-button_2-md.entry.js":[94,38],"./ion-card_5-ios.entry.js":[95,39],"./ion-card_5-md.entry.js":[96,40],"./ion-checkbox-ios.entry.js":[97,41],"./ion-checkbox-md.entry.js":[98,42],"./ion-chip-ios.entry.js":[99,43],"./ion-chip-md.entry.js":[100,44],"./ion-col_3.entry.js":[101,81],"./ion-datetime_3-ios.entry.js":[102,19],"./ion-datetime_3-md.entry.js":[103,20],"./ion-fab_3-ios.entry.js":[104,45],"./ion-fab_3-md.entry.js":[105,46],"./ion-img.entry.js":[106,82],"./ion-infinite-scroll_2-ios.entry.js":[107,83],"./ion-infinite-scroll_2-md.entry.js":[108,84],"./ion-input-ios.entry.js":[109,47],"./ion-input-md.entry.js":[110,48],"./ion-item-option_3-ios.entry.js":[111,49],"./ion-item-option_3-md.entry.js":[112,50],"./ion-item_8-ios.entry.js":[113,51],"./ion-item_8-md.entry.js":[114,52],"./ion-loading-ios.entry.js":[115,53],"./ion-loading-md.entry.js":[116,54],"./ion-menu_3-ios.entry.js":[117,55],"./ion-menu_3-md.entry.js":[118,56],"./ion-modal-ios.entry.js":[119,15],"./ion-modal-md.entry.js":[120,16],"./ion-nav_2.entry.js":[121,25],"./ion-popover-ios.entry.js":[122,17],"./ion-popover-md.entry.js":[123,18],"./ion-progress-bar-ios.entry.js":[124,57],"./ion-progress-bar-md.entry.js":[125,58],"./ion-radio_2-ios.entry.js":[126,59],"./ion-radio_2-md.entry.js":[127,60],"./ion-range-ios.entry.js":[128,61],"./ion-range-md.entry.js":[129,62],"./ion-refresher_2-ios.entry.js":[130,63],"./ion-refresher_2-md.entry.js":[131,64],"./ion-reorder_2-ios.entry.js":[132,27],"./ion-reorder_2-md.entry.js":[133,28],"./ion-ripple-effect.entry.js":[134,85],"./ion-route_4.entry.js":[135,65],"./ion-searchbar-ios.entry.js":[136,66],"./ion-searchbar-md.entry.js":[137,67],"./ion-segment_2-ios.entry.js":[138,68],"./ion-segment_2-md.entry.js":[139,69],"./ion-select_3-ios.entry.js":[140,70],"./ion-select_3-md.entry.js":[141,71],"./ion-slide_2-ios.entry.js":[142,86],"./ion-slide_2-md.entry.js":[143,87],"./ion-spinner.entry.js":[144,23],"./ion-split-pane-ios.entry.js":[145,88],"./ion-split-pane-md.entry.js":[146,89],"./ion-tab-bar_2-ios.entry.js":[147,72],"./ion-tab-bar_2-md.entry.js":[148,73],"./ion-tab_2.entry.js":[149,26],"./ion-text.entry.js":[150,74],"./ion-textarea-ios.entry.js":[151,75],"./ion-textarea-md.entry.js":[152,76],"./ion-toast-ios.entry.js":[153,77],"./ion-toast-md.entry.js":[154,78],"./ion-toggle-ios.entry.js":[155,21],"./ion-toggle-md.entry.js":[156,22],"./ion-virtual-scroll.entry.js":[157,90]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=56,e.exports=a},58:function(e,t,n){var o={"./ion-icon.entry.js":[161,93]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=58,e.exports=a},63:function(e,t,n){},65:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(27),r=n.n(s),i=n(13),c=n(10),l=n(43),u=n(3),m=n(4),d=n(7),y=n(6),j=(n(63),n(46)),_=n.n(j),p=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={breathe:"BREATHE IN",play:!0,breathe_out_status:!1,breathe_in_hold_status:!1,breathe_in_status:!0,breathe_out_hold:!1,count:0,dcount:0,toggle:0,breathe_status:"Breathe In",pulse_class_name:"pulse_breathe_in"},e.componenDidMount=function(){e.setState({breathe_in_status:!0}),e.setState({play:!0}),console.log(e.state.play),console.log("Play clicked"),document.getElementById("myAudio").play()},e.playAudio=function(){e.setState({play:!0}),console.log(e.state.play),console.log("Play clicked"),document.getElementById("myAudio").play()},e.pauseAudio=function(){e.setState({play:!1}),console.log(e.state.play),console.log("Pause clicked"),document.getElementById("myAudio").pause()},e.endBreatheIn=function(){e.state.play&&0==e.state.toggle&&(console.log("Play clicked"),document.getElementById("myAudio").play(),e.setState({toggle:1}));e.setState({count:e.state.count+1}),e.setState({dcount:e.state.dcount+1}),e.state.count>=0&&e.state.count<=6&&(e.setState({breathe_status:"Breathe In"}),e.setState({pulse_class_name:"pulse_breathe_in"}),6==e.state.count&&e.setState({dcount:0})),e.state.count>=7&&e.state.count<=10&&(e.setState({breathe_status:"Hold"}),e.setState({pulse_class_name:"pulse_hold"}),10==e.state.count&&e.setState({dcount:0})),e.state.count>=11&&e.state.count<=15&&(e.setState({breathe_status:"Breathe Out"}),e.setState({pulse_class_name:"pulse_breathe_out"}),15==e.state.count&&e.setState({dcount:0})),e.state.count>=16&&e.state.count<=19&&(e.setState({breathe_status:"Hold"}),e.setState({pulse_class_name:"pulse_hold"}),19==e.state.count&&e.setState({dcount:0})),e.state.count>=19&&(e.setState({count:0}),e.setState({dcount:0})),console.log("timer")},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.breathe_status,t=this.state.dcount;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"audio_div"},a.a.createElement("div",{className:"head"},a.a.createElement("b",null,e),a.a.createElement(_.a,{timeout:1e3,enabled:!0,callback:this.endBreatheIn})),a.a.createElement("br",null),a.a.createElement("div",{className:"animation"},a.a.createElement("div",{className:"center"},a.a.createElement("div",{className:this.state.pulse_class_name},a.a.createElement("h3",{className:"blink_text"},t)))),a.a.createElement("div",{className:"audio_control"},a.a.createElement("audio",{id:"myAudio",ref:"audio_tag",src:"/assets/sounds/audio_file.mpeg",loop:!0}),this.state.play?a.a.createElement("button",{className:"pause",onClick:this.pauseAudio},a.a.createElement("img",{src:"/assets/pause.png"})):a.a.createElement("button",{className:"play",onClick:this.playAudio},a.a.createElement("img",{src:"/assets/play.png"})))),a.a.createElement("div",{className:"foot"},a.a.createElement("h3",null,"Love for the FrontLine"),a.a.createElement("p",null,"Music by Alibi Music")))}}]),n}(o.Component),h=(n(65),function(){return a.a.createElement(c.f,{className:"main"},a.a.createElement(c.c,null,a.a.createElement(c.d,{collapse:"condense"},a.a.createElement(c.i,null,a.a.createElement(c.h,{size:"large"},"Blank"))),a.a.createElement(p,null)))}),b=(n(66),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),function(){return a.a.createElement(c.b,null,a.a.createElement(l.a,null,a.a.createElement(c.g,null,a.a.createElement(i.c,{path:"/home",component:h,exact:!0}),a.a.createElement(i.c,{exact:!0,path:"/",render:function(){return a.a.createElement(i.b,{to:"/home"})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,9,12]]]);
//# sourceMappingURL=main.068662e5.chunk.js.map