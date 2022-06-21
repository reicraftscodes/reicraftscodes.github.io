"use strict";(self.webpackChunkv3=self.webpackChunkv3||[]).push([[527],{5790:function(e,t,n){n.r(t);var l,a,r,i,o=n(1880),c=n(7294),s=n(5414),m=n(518),u=n(448),d=n(1034),p=n(3230),f=n(9),h=n(1428),E=h.rS.colors,g=h.rS.fonts,b=h.rS.fontSizes,x=(0,f.default)(h.or).withConfig({displayName:"archive__StyledMainContainer",componentId:"sc-u5epm8-0"})([""]),y=f.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-u5epm8-1"})(["margin:100px -20px;",";"],h.BC.tablet(l||(l=(0,o.Z)(["\n    margin: 100px -10px;\n  "])))),v=f.default.table.withConfig({displayName:"archive__StyledTable",componentId:"sc-u5epm8-2"})(["width:100%;border-collapse:collapse;.hide-on-mobile{",";}tbody tr{transition:",";&:hover,&:focus{background-color:",";}}th,td{cursor:default;line-height:1.5;padding:10px 20px;",";}th{text-align:left;}td{&.year{width:10%;",";}&.title{padding-top:15px;color:",";font-size:",";font-weight:700;}&.company{width:15%;padding-top:15px;font-size:",";}&.tech{font-size:",";font-family:",";.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{",";}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}"],h.BC.tablet(a||(a=(0,o.Z)(["\n      display: none;\n    "]))),h.rS.transition,E.lightNavy,h.BC.tablet(r||(r=(0,o.Z)(["\n      padding: 10px;\n    "]))),h.BC.tablet(i||(i=(0,o.Z)(["\n        font-size: ",";\n      "])),b.sm),E.lightestSlate,b.xl,b.lg,b.xs,g.SFMono,h.tA.flexCenter);t.default=function(e){var t=e.location,n=e.data.allMarkdownRemark.edges,l=(0,c.useRef)(null),a=(0,c.useRef)(null),r=(0,c.useRef)([]);return(0,c.useEffect)((function(){m.Z.reveal(l.current,(0,u.srConfig)()),m.Z.reveal(a.current,(0,u.srConfig)()),r.current.forEach((function(e,t){return m.Z.reveal(e,(0,u.srConfig)(10*t))}))}),[]),c.createElement(d.Ar,{location:t},c.createElement(s.q,null,c.createElement("title",null,"Archive")),c.createElement(x,null,c.createElement("header",{ref:l},c.createElement("h1",{className:"big-title"},"Archive"),c.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),c.createElement(y,{ref:a},c.createElement(v,null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Year"),c.createElement("th",null,"Title"),c.createElement("th",{className:"hide-on-mobile"},"Made at"),c.createElement("th",{className:"hide-on-mobile"},"Built with"),c.createElement("th",null,"Link"))),c.createElement("tbody",null,n.length>0&&n.map((function(e,t){var n=e.node.frontmatter,l=n.date,a=n.github,i=n.external,o=n.title,s=n.tech,m=n.company;return c.createElement("tr",{key:t,ref:function(e){return r.current[t]=e}},c.createElement("td",{className:"overline year"},""+new Date(l).getFullYear()),c.createElement("td",{className:"title"},o),c.createElement("td",{className:"company hide-on-mobile"},m?c.createElement("span",null,m):c.createElement("span",null,"—")),c.createElement("td",{className:"tech hide-on-mobile"},s.length>0&&s.map((function(e,t){return c.createElement("span",{key:t},e,"",t!==s.length-1&&c.createElement("span",{className:"separator"},"·"))}))),c.createElement("td",{className:"links"},c.createElement("span",null,i&&c.createElement("a",{href:i,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},c.createElement(p.SK,{name:"External"})),a&&c.createElement("a",{href:a,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"GitHub Link"},c.createElement(p.SK,{name:"GitHub"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-543625e9f044766dc290.js.map