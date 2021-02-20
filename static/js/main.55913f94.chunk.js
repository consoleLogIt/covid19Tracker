(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{104:function(e,t,a){e.exports=a(239)},11:function(e,t,a){e.exports={container:"Cards_container__22GDt",card:"Cards_card__3AP4y",active:"Cards_active__1Babf",confirmed:"Cards_confirmed__2bvHn",recovered:"Cards_recovered__3t90n",deceased:"Cards_deceased__23ykj",gridwrap:"Cards_gridwrap__yjLrb"}},239:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(86),o=a.n(c),s=a(5),i=a.n(s),u=a(10),d=a(87),l=a(88),m=a(101),p=a(100),f=a(257),v=a(258),g=a(262),h=a(259),b=a(260),E=a(15),_=a.n(E),C=a(19),x=a.n(C),y=a(11),k=a.n(y);var S=function(e){var t=e.data;console.log(e);var a=t.message,r=t.active,c=t.confirmed,o=t.recovered,s=t.deaths,i=t.aChanges,u=t.cChanges,d=t.dChanges,l=t.rChanges;return a?n.a.createElement("h1",{style:{fontWeight:"normal"}},a):r?n.a.createElement("div",{className:k.a.container},n.a.createElement(v.a,{className:k.a.gridwrap,container:!0,spacing:3,justify:"space-evenly",md:"auto"},n.a.createElement(v.a,{item:!0,component:g.a,xs:12,md:3,className:x()(k.a.card,k.a.active)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Active"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(_.a,{start:0,end:r,duration:2.5,separator:","})),n.a.createElement(b.a,{gutterBottom:!0},i>0&&"+",n.a.createElement(_.a,{start:0,end:i,duration:2.5,separator:","})))),n.a.createElement(v.a,{item:!0,component:g.a,xs:12,md:3,className:x()(k.a.card,k.a.confirmed)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(_.a,{start:0,end:c,duration:2.5,separator:","})),n.a.createElement(b.a,{gutterBottom:!0},u>0&&"+",n.a.createElement(_.a,{start:0,end:u,duration:2.5,separator:","})))),n.a.createElement(v.a,{item:!0,component:g.a,xs:12,md:3,className:x()(k.a.card,k.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(_.a,{start:0,end:o,duration:2.5,separator:","})),n.a.createElement(b.a,{gutterBottom:!0},l>0&&"+",n.a.createElement(_.a,{start:0,end:l,duration:2.5,separator:","})))),n.a.createElement(v.a,{item:!0,component:g.a,xs:12,md:3,className:x()(k.a.card,k.a.deceased)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(_.a,{start:0,end:s,duration:2.5,separator:","})),n.a.createElement(b.a,{gutterBottom:!0},d>0&&"+",n.a.createElement(_.a,{start:0,end:d,duration:2.5,separator:","})))))):n.a.createElement(f.a,null)},w=a(38),j=a(39),O=a.n(j),N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,n,c,o,s,u,d,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.covidindiatracker.com/total.json");case 3:return t=e.sent,a=t.data,r=a.active,n=a.confirmed,c=a.recovered,o=a.deaths,s=a.aChanges,u=a.cChanges,d=a.dChanges,l=a.rChanges,e.abrupt("return",{active:r,confirmed:n,recovered:c,deaths:o,aChanges:s,cChanges:u,dChanges:d,rChanges:l});case 16:return e.prev=16,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{message:"Total endpoint is down right now but you check by states"});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),B="https://api.covid19india.org/data.json",A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(B);case 3:return t=e.sent,a=t.data.cases_time_series,r=a.map((function(e){return{confirmed:e.dailyconfirmed,deaths:e.dailydeceased,recovored:e.dailyrecovered,date:e.date}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s,u,d,l,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(B);case 3:if(a=e.sent,r=a.data.statewise,!t){e.next=13;break}if("Total"!==t){e.next=10;break}return e.next=9,N();case 9:return e.abrupt("return",e.sent);case 10:return n=r.filter((function(e){return e.state===t})),c=n[0],o=c.active,s=c.confirmed,u=c.recovered,d=c.deaths,l=c.deltaconfirmed,m=c.deltadeaths,p=c.deltarecovered,e.abrupt("return",{active:o,confirmed:s,recovered:u,deaths:d,cChanges:l,dChanges:m,rChanges:p});case 13:return e.abrupt("return",r.map((function(e){return{State:e.state,statecode:e.statecode}})));case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),T=a(54),I=a(96),L=a.n(I);var P=function(e){var t={props:e},a=t.confirmed,c=t.active,o=t.recovered,s=t.deaths,d=t.State,l=Object(r.useState)([]),m=Object(w.a)(l,2),p=m[0],f=m[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=p.map((function(e){return e.date.substring(0,6)})),g=p.length?n.a.createElement(T.b,{data:{labels:v,datasets:[{label:"confirmed",data:p.map((function(e){return e.confirmed})),fill:!0,backgroundColor:"rgba(54, 162, 235,0.1)",borderColor:"rgb(54, 162, 235)"},{label:"recovered",data:p.map((function(e){return e.recovored})),fill:!0,backgroundColor:"rgba(0, 255, 0,0.1)",borderColor:"rgba(0, 255, 0)"},{label:"deaths",data:p.map((function(e){return e.deaths})),fill:!0,backgroundColor:"rgba(255, 99, 132,0.2)",borderColor:"rgb(255, 99, 132)"}]}}):null,h=a?n.a.createElement(T.a,{data:{labels:["active","confirmend","recovored","deaths"],datasets:[{data:[c,a,o,s],backgroundColor:["rgba(255, 206, 86, 0.2)","rgba(54, 162, 235, 0.2)","rgba(10, 210, 10, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 206, 10, 1)","rgba(54, 162, 235, 1)","rgba(50, 192, 45, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]},options:{legend:{display:!1},title:{display:!0,text:"Current Status of ".concat(d)}}}):null;return n.a.createElement("div",{className:L.a.container},d?h:g)},z=a(263),J=a(261),V=a(97),W=a.n(V);var G=function(e){var t=e.handleStateChange,a=Object(r.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),n.a.createElement(z.a,{className:W.a.formControl},n.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},o.map((function(e){return n.a.createElement("option",{key:e.statecode,value:e.State},e.State)}))))},H=a(98),M=a.n(H);var Q=function(e){return n.a.createElement("div",{className:M.a.fontStyle},n.a.createElement("h1",null,e.text?e.text:"INDIA"))},R=a(99),U=a.n(R),Y=a(40),q=a.n(Y),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},State:""},e.handleStateChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:r=t.sent,console.log(r),e.setState({data:r,State:"Total"===a?null:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.State;return n.a.createElement("div",{className:q.a.container},n.a.createElement("img",{className:x()(q.a.image,q.a.rotate),src:U.a,alt:"CoronaLogo"}),n.a.createElement(Q,{text:a}),n.a.createElement(S,{data:t}),n.a.createElement(G,{handleStateChange:this.handleStateChange}),n.a.createElement(P,{data:t,State:a}))}}]),a}(r.Component);o.a.render(n.a.createElement(F,null),document.getElementById("root"))},40:function(e,t,a){e.exports={container:"App_container__2DD8z",imageContainer:"App_imageContainer__U-yYB",image:"App_image__30D_a",rotate:"App_rotate__2kfP2",rotation:"App_rotation__1o7dd"}},96:function(e,t,a){e.exports={container:"Chart_container__3lTVA"}},97:function(e,t,a){},98:function(e,t,a){e.exports={fontStyle:"IndiaTextLogo_fontStyle__2zNPQ"}},99:function(e,t,a){e.exports=a.p+"static/media/covid19.01cc6a34.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.55913f94.chunk.js.map