(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(14)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(2),i=n.n(c),o=(n(10),n(11),n(3)),s=n(4);n(12),n(13);var m=function(e){var a,n=e.id,t=e.name,c=e.type,i=e.exp;return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},t),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:"".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((a=n,a<=999?"00".concat(a).slice(-3):a),".png"),alt:t})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",c),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",i))};var l=function(e){var a=e.pokemon,n=e.exp,t=e.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Hand"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Hand");return r.a.createElement("div",{className:"Pokedex"},t,r.a.createElement("h4",null,"Total Experience: ",n),r.a.createElement("div",{className:"Pokedex-cards"},a.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))};var p=function(){for(var e=Object(t.useState)([{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]),a=Object(s.a)(e,2),n=a[0],c=(a[1],[]),i=Object(o.a)(n);c.length<i.length;){var m=Math.floor(Math.random()*i.length),p=i.splice(m,1)[0];c.push(p)}var d=c.reduce((function(e,a){return e+a.base_experience}),0),u=i.reduce((function(e,a){return e+a.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(l,{pokemon:c,exp:d,isWinner:d>u}),r.a.createElement(l,{pokemon:i,exp:u,isWinner:u>d}))};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.917fe096.chunk.js.map