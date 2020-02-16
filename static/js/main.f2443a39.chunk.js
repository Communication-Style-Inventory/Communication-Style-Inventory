(this["webpackJsonpcommunication-style-inventory"]=this["webpackJsonpcommunication-style-inventory"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),l=(n(97),n(98),n(80)),s=n(33),c=n(71),u=n(26),m=n(144),d=n(110),p=n(145),y=n(146),h=n(82),f=n(180),E=n(147),v=n(148),w=n(40),b=n(23),g=n(50),k=n(51),I=n(58),A=n(140),B=n(142),O=n(184),S=n(143),j=n(183),z=n(137),C=(Object(z.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}})),function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(A.a,{component:"fieldset"},o.a.createElement(B.a,{component:"legend"},"Question# ",this.props.number),o.a.createElement(O.a,{"aria-label":"option",name:"customized-radios",onChange:function(t){return e.props.clicked(t.target.value)}},o.a.createElement(S.a,{value:"A",control:o.a.createElement(j.a,null),label:this.props.A}),o.a.createElement(S.a,{value:"B",control:o.a.createElement(j.a,{onClick:function(){return e.props.clicked("B")}}),label:this.props.B})))}}]),t}(o.a.Component));var q=function(e){var t=e.communicationStyleData,n=o.a.useState({}),a=Object(u.a)(n,2),r=a[0],i=a[1],l=o.a.useState("Unknown"),s=Object(u.a)(l,2),w=s[0],b=s[1],g=Object.keys(t.questions).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return o.a.createElement(m.a,{key:e,divider:!0},o.a.createElement(C,{number:e,A:t.questions[e].A,B:t.questions[e].B,clicked:(n=e,function(e){var t={};t[n]=e,i((function(e){return Object(c.a)({},e,{},t)}))})}));var n}));return o.a.createElement(d.a,{elevation:3},o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(h.a,{variant:"h6",component:"h2"},"This is an informal survey, designed to determine how you usually act in everyday related situations.  The idea is to get a clear description of how you see yourself. On the answer sheet, circle A or B in ea ch pair of statements below, which shows the one that MOST, describes you."))),o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(h.a,{variant:"h5",component:"h2"},"Name"),o.a.createElement(f.a,{id:"outlined-basic",label:"Outlined",variant:"outlined",onChange:function(e){return function(e){b(e)}(e.target.value)}}))),o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(E.a,null,g),o.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){if(Object.keys(r).length<Object.keys(t).length)alert("Please complete all questions!");else{var e={answers:r,name:w},n=JSON.stringify(e),a=btoa(n);window.location="".concat("/Communication-Style-Inventory","/results?data=").concat(a)}}},"Submit"))),o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null)))},D=function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{elevation:3},o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(h.a,{variant:"h5",component:"h2"},"About"),o.a.createElement(h.a,{color:"textSecondary"},"Survey taken from The Platinum Rule by Tony Alessandra, Ph.D, & Michael J. O\u2019Connor Ph.D. New York, New York, Warner Brooks 1996"))))}}]),t}(o.a.Component),N=n(149);function x(e){return o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(N.a,{variant:"body3",href:"".concat("/Communication-Style-Inventory","/questions")},"Take the Quiz")))}function T(e){var t=e.resultInfo.bullets.map((function(e,t){return o.a.createElement(m.a,{key:t,divider:!0},e)}));return o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(h.a,{color:"textSecondary"},"".concat(e.resultInfo.type)),o.a.createElement(E.a,null,t)))}var R=function(e){var t=e.communicationStyleData,n=window.location.search,a=function(e){var t={};try{t=JSON.parse(atob(e))}catch(n){console.log(n)}return t}(new URLSearchParams(n).get("data")),r=[{key:"O",count:l("O",a.answers)},{key:"G",count:l("G",a.answers)},{key:"D",count:l("D",a.answers)},{key:"I",count:l("I",a.answers)}].sort((function(e,t){return t.count-e.count})),i=[r[0].key,r[1].key].sort().join("");function l(e,n){var a=0,o=t.groupResults[e];for(var r in o)o[r]===n[r]&&a++;return a}return console.log(t.resultInfos),console.log(i),console.log(t.resultInfos[i]),o.a.createElement(d.a,{elevation:3},o.a.createElement(x,null),o.a.createElement(p.a,{variant:"outlined"},o.a.createElement(y.a,null,o.a.createElement(h.a,{variant:"h4",component:"h2"},"Results for: ".concat(a.name||"Unknown")))),o.a.createElement(T,{resultInfo:t.resultInfos[i]}),o.a.createElement(x,null))},P=n(181),G=n(182),J=n(150),L=n(152),V=n(154),F=n(156),M=n(158),U=n(160),W=n(162),Y=n(164),H=n(166),Q=n(168),$=n(170),K=n(172),X=n(174),Z=n(176),_=n(178),ee=n(151),te=n(153),ne=n(155),ae=n(157),oe=n(159),re=n(161),ie=n(163),le=n(165),se=n(167),ce=n(169),ue=n(171),me=n(173),de=n(175),pe=n(177),ye=n(179),he=function(e){return o.a.createElement("div",null,o.a.createElement(P.a,{bg:"dark",variant:"dark"},o.a.createElement(P.a.Brand,{href:"/Communication-Style-Inventory/"},"COMMUNICATIONS STYLE INVENTORY"),o.a.createElement(G.a,{className:"mr-auto"},o.a.createElement(G.a.Link,{href:"/Communication-Style-Inventory/"},"Home"),o.a.createElement(G.a.Link,{href:"/Communication-Style-Inventory/about"},"About"),o.a.createElement(G.a.Link,{href:"/Communication-Style-Inventory/questions"},"Questions"))),e.children,o.a.createElement(P.a,{bg:"dark",variant:"dark",fixed:"bottom"},o.a.createElement(J.a,{url:window.location},o.a.createElement(ee.a,{size:32,round:!0})),o.a.createElement(L.a,{url:window.location},o.a.createElement(te.a,{size:32,round:!0})),o.a.createElement(V.a,{url:window.location},o.a.createElement(ne.a,{size:32,round:!0})),o.a.createElement(F.a,{url:window.location},o.a.createElement(ae.a,{size:32,round:!0})),o.a.createElement(M.a,{url:window.location},o.a.createElement(oe.a,{size:32,round:!0})),o.a.createElement(U.a,{url:window.location},o.a.createElement(re.a,{size:32,round:!0})),o.a.createElement(W.a,{url:window.location},o.a.createElement(ie.a,{size:32,round:!0})),o.a.createElement(Y.a,{url:window.location},o.a.createElement(le.a,{size:32,round:!0})),o.a.createElement(H.a,{url:window.location},o.a.createElement(se.a,{size:32,round:!0})),o.a.createElement(Q.a,{url:window.location},o.a.createElement(ce.a,{size:32,round:!0})),o.a.createElement($.a,{url:window.location},o.a.createElement(ue.a,{size:32,round:!0})),o.a.createElement(K.a,{url:window.location},o.a.createElement(me.a,{size:32,round:!0})),o.a.createElement(X.a,{url:window.location},o.a.createElement(de.a,{size:32,round:!0})),o.a.createElement(Z.a,{url:window.location},o.a.createElement(pe.a,{size:32,round:!0})),o.a.createElement(_.a,{url:window.location},o.a.createElement(ye.a,{size:32,round:!0}))))},fe=n(60);var Ee=function(){return o.a.createElement(l.a,{basename:"/Communication-Style-Inventory"},o.a.createElement(he,null),o.a.createElement(s.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(q,Object.assign({},e,{communicationStyleData:fe}))}}),o.a.createElement(s.a,{path:"/about",render:function(e){return o.a.createElement(D,null)}}),o.a.createElement(s.a,{path:"/questions",render:function(e){return o.a.createElement(q,Object.assign({},e,{communicationStyleData:fe}))}}),o.a.createElement(s.a,{path:"/results",render:function(e){return o.a.createElement(R,Object.assign({},e,{communicationStyleData:fe}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e){e.exports=JSON.parse('{"questions":{"1":{"A":"I\'m usually open to getting to know people personally and establishing relationships with them.","B":"I\'m not usually open to getting to know people personally and establishing relationships with them."},"2":{"A":"I usually react slowly and deliberately","B":"I usually react quickly and spontaneously"},"3":{"A":"I\'m usually guarded about other people\'s use of my time.","B":"I\'m usually open to other people\'s use of my time."},"4":{"A":"I usually introduce myself at social gatherings.","B":"I usually wait for others to introduce themselves to me at social gatherings."},"5":{"A":"I usually focus my conversations on the interests of the people involved, even if that means straying from the business or subject at hand.","B":"I usually focus my conversations on the tasks, issues, business, or subject at hand."},"6":{"A":"I\'m usually not assertive, and I can be patient with a slow pace.","B":"I\'m usually assertive, and at times I can be impatient with a slow pace."},"7":{"A":"I usually make decisions based on facts or evidence.","B":"I usually make decisions based on feelings, experiences or relationships."},"8":{"A":"I usually contribute frequently to group conversations.","B":"I usually contribute infrequently to group conversations."},"9":{"A":"I usually prefer to work with and through others, providing support when possible.","B":"I usually prefer to work independently or dictate the conditions in terms of how others are involved."},"10":{"A":"I usually ask questions or speak tentatively and indirectly.","B":"I usually make empathic statements or directly expressed opinions."},"11":{"A":"I usually focus primarily on ideas, concepts, or results.","B":"I usually focus primarily on persons, interactions, and feelings."},"12":{"A":"I usually use gestures, facial expression, and voice intonations to emphasize points.","B":"I usually do not use gestures, facial expressions, and voice intonations to emphasize points"},"13":{"A":"I usually accept others\' points of view (ideas, feelings, and concerns).","B":"I usually don\'t accept others\' points of view (ideas, feelings, and concerns)"},"14":{"A":"I usually respond to risk and change in a cautious or predictable manner.","B":"I usually respond to risk and change in dynamic or unpredictable manner."},"15":{"A":"I usually prefer to keep personal feelings and thoughts private, sharing only when I wish to do to.","B":"I usually find it natural and easy to share and discuss my feelings with others."},"16":{"A":"I usually seek out new or different experiences and situations.","B":"I usually choose known or similar situations and relationships."},"17":{"A":"I\'m usually responsive to others\' agendas, interests, and concerns.","B":"I\'m usually directed toward my own agendas, interests and concerns."},"18":{"A":"I usually respond to conflict slowly and indirectly.","B":"I usually respond to conflict quickly and directly."}},"groupResults":{"O":{"1":"A","3":"B","5":"A","7":"B","9":"A","11":"B","13":"A","15":"B","17":"A"},"G":{"1":"B","3":"A","5":"B","7":"A","9":"B","11":"A","13":"B","15":"A","17":"B"},"D":{"2":"B","4":"A","6":"B","8":"A","10":"B","12":"A","14":"B","16":"A","18":"B"},"I":{"2":"A","4":"B","6":"A","8":"B","10":"A","12":"B","14":"A","16":"B","18":"A"}},"resultInfos":{"DG":{"type":"Controller/Director","bullets":["Commander","Values getting the job done","Decisive risk taker","Good at delegating work to others","Not shy but private about personal matters; comes on strong in conversation","Likes to be where the action is","Take charge, enterprising, competitive, efficient approach","Fearless; no obstacle is too big to tackle","Results Oriented"]},"DO":{"type":"Promoter/Socializer","bullets":["Entertainer","Values enjoyment and helping others with the same","Full of ideas and impulsive in trying them","Wants to work to be fun for everyone","Talkative and open about self; asks others\' opinions; loves to brainstorm","Flexible; easily bored with routine","Intuitive, creative, spontaneous, flamboyant approach","Optimist; nothing is beyond hope","Celebration Oriented"]},"IO":{"type":"Supporter/Relater","bullets":["Harmonizer","Values acceptance and stability in circumstances","Slow with big decisions; dislikes change","Builds networks of friends to help do work","Good listener; timid about voicing contrary opinions; concerned for others\' feelings","Easy-going; likes slow, steady pace","Friendly & sensitive; no person in unlovable","Relationship Oriented"]},"GI":{"type":"Analyzer/Thinker","bullets":["Assessor","Values accuracy in details & being right","Plans thoroughly before deciding to act","Prefers to work alone","Introverted; quick to think and slow to speak; closed about personal matters","Highly organized; even plans spontaneity!","Cautious, logical, thrifty approach","Thoughtful; no problem is too big to ponder","Idea Oriented"]}}}')},92:function(e,t,n){e.exports=n(109)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.f2443a39.chunk.js.map