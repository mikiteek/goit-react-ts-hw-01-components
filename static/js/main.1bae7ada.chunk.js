(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},function(a,e,t){a.exports={"transaction-history":"TransactionHistory_transaction-history__1LQvk","table-row":"TransactionHistory_table-row__H0csP","table-header":"TransactionHistory_table-header__2iFVl","table-td":"TransactionHistory_table-td__2M6Zx"}},function(a,e,t){a.exports={"friend-list":"FriendList_friend-list__1_l_8",item:"FriendList_item__-lYix",status:"FriendList_status__3C5jV",avatar:"FriendList_avatar__2fiZr",isOffline:"FriendList_isOffline__3xTH0",isOnline:"FriendList_isOnline__kZ_8Q",name:"FriendList_name__2fvFO"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a,e,t){a.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg","stat-list":"Statistics_stat-list__3DM9T",item:"Statistics_item__1vE2T"}},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(a,e,t){a.exports=t(17)},,,,,function(a,e,t){},function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),s=t(7),i=t.n(s),r=t(1),l=t.n(r),o=function(a){var e=a.name,t=a.tag,n=a.location,s=a.avatar,i=a.stats;return c.a.createElement("div",{className:l.a.profile},c.a.createElement("div",{className:l.a.description},c.a.createElement("img",{src:s,alt:"user avatar",className:l.a.avatar}),c.a.createElement("p",{className:l.a.name},e),c.a.createElement("p",{className:l.a.tag},"@",t),c.a.createElement("p",{className:l.a.location},n)),c.a.createElement("ul",{className:l.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Followers"),c.a.createElement("span",{className:l.a.quantity},i.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Views"),c.a.createElement("span",{className:l.a.quantity},i.views)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Likes"),c.a.createElement("span",{className:l.a.quantity},i.likes))))};o.defaultProps={};var m=o,d=t(5),u=t.n(d),f=function(){return Math.floor(256*Math.random())},p=function(a){var e=a.title,t=a.stats;return c.a.createElement("section",{className:u.a.statistics},c.a.createElement("h2",{className:u.a.title},e&&e),c.a.createElement("ul",{className:u.a["stat-list"]},t.map((function(a){var e=a.id,t=a.label,n=a.percentage;return c.a.createElement("li",{key:e,className:u.a.item,style:{backgroundColor:"rgb(".concat(f(),", ").concat(f(),", ").concat(f(),")")}},c.a.createElement("span",{className:"label"},t),c.a.createElement("span",{className:"percentage"},n,"%"))}))))},b=t(3),_=t.n(b),y=function(a){var e=a.friends;return c.a.createElement("ul",{className:_.a["friend-list"]},e.map((function(a){var e=a.avatar,t=a.name,n=a.isOnline,s=a.id,i=[_.a.status,n?_.a.isOnline:_.a.isOffline];return c.a.createElement("li",{key:s,className:_.a.item},c.a.createElement("span",{className:i.join(" ")}),c.a.createElement("img",{className:_.a.avatar,src:e,alt:t,width:"48"}),c.a.createElement("p",{className:_.a.name},t))})))},E=t(2),w=t.n(E),v=function(a){var e=a.items;return c.a.createElement("table",{className:w.a["transaction-history"]},c.a.createElement("thead",null,c.a.createElement("tr",{className:w.a["table-row"]},c.a.createElement("th",{className:w.a["table-header"]},"Type"),c.a.createElement("th",{className:w.a["table-header"]},"Amount"),c.a.createElement("th",{className:w.a["table-header"]},"Currency"))),c.a.createElement("tbody",null,e.map((function(a){var e=a.id,t=a.type,n=a.amount,s=a.currency;return c.a.createElement("tr",{key:e,className:w.a["table-row"]},c.a.createElement("td",{className:w.a["table-td"]},t),c.a.createElement("td",{className:w.a["table-td"]},n),c.a.createElement("td",{className:w.a["table-td"]},s))}))))},N=t(4),h=t(8),g=t(9),O=t(10),P=function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(m,{avatar:N.avatar,tag:N.tag,location:N.location,name:N.name,stats:N.stats}),c.a.createElement(p,{title:"Upload stats",stats:h}),c.a.createElement(y,{friends:g}),c.a.createElement(v,{items:O}))};t(16);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1bae7ada.chunk.js.map