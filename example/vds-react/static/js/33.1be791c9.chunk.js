(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[33],{1355:function(e,a,t){e.exports=t(1356)},1356:function(e,a){e.exports=u,u.addTo=function(e,a){return e?"string"===typeof e?function(e,a){return v(h(e,a))}(e,A(a)):function(e,a){return f(e,a).map(v)}(e,A(a)):""},u.parse=function(e,a){return e?"string"===typeof e?h(e,A(a)):f(e,A(a)):{}},u.find=u;var t=2,n=" -\\/:-@\\[-`\\{-\\~",r=/^[A-Z]+$/,l=/\(([^)]+)\)/,c=/^[^\s]+@[^\s]+$/,o=/@[^\s]+/,s=/[\w._-]+@[\w.-]+[\w]/g,i=new RegExp("(^|["+n+"])[^"+n+"]","g"),m=new RegExp("["+n+"]","g");function u(e,a){return e?"string"===typeof e?d(e,A(a)):p(e,A(a)):""}function d(e,a){var t,n,r,l=a.length||2;if(r=E(e,a))return r;if(!(e=g(e)))return"";if((t=e.match(i).map((function(e){return e[e.length-1]}))).length<2)return e.length>l?e.substr(0,l):e;if((n=t.join("")).length>=l)return n;for(var c=y(e),o=0;o<c.length;o++)if(c[o].length>=l)return c[o]}function p(e,a){var t,n,r,l=[],c={},o={},s={},i=a.length||2;e.forEach((function(e){if(e||(e=""),!s[e])if(e.length<i)s[e]=[e];else{if(n=E(e,a))return c[n]=1,void(s[e]=[n]);r=y(e).filter((function(e){return e.length===i&&(c[e]&&(o[e]=1),c[e]=1,!0)})),s[e]=r}}));var m=[];for(var u in s)m.unshift(u);for(var d=m.length,h=0;h<d;h++){r=s[m[h]],l.push(r);for(var f=0;f<r.length;f++)o[r[f]]>0&&(o[r[f]]--,r.splice(f,1))}return 0===(t=l.map((function(e){return e.length}))).length?e:0===Math.min.apply(null,t)?(a.length++,p(e,a)):e.map((function(e){return s[e][0]}))}function h(e,a){var t,n,c,o={};return e?((t=E(e,a))&&(e=(e=e.replace(r,"")).replace(l,"")),a.initials&&(t=a.initials),t||(t=d(e,a)),null!=(c=e.match(s))&&(n=c.pop()),n&&(e=e.replace(n,"")).trim()==="<"+n+">"&&(e="",t||(t=d(n,a))),(e=e.replace(m," ").trim())&&(o.name=e),t&&(o.initials=t),n&&(o.email=n),o):{}}function f(e,a){var t=p(e,a);return e.map((function(e,n){return a.existing[e]=t[n],h(e,a)}))}function v(e){return e.name||e.email?e.email?e.name?e.name+" ("+e.initials+") <"+e.email+">":e.email+" ("+e.initials+")":e.name+" ("+e.initials+")":e.initials}function g(e){return e=(e=c.test(e)?e.replace(o,""):e.replace(s,"")).replace(m," ").trim()}function E(e,a){var t;return a.existing[e]?a.existing[e]:r.test(e)?e:null!=(t=e.match(l))?t.pop():void 0}var b={};function y(e){var a,t=[];return e=g(e),b[e]?b[e].slice(0):(a=e.split(" ").map(O),t=(t=function e(a){var t=a.shift();var n;var r;return a.length>0?(r=[],n=e(a),t.forEach((function(e){n.forEach((function(a){r.push(e+a)}))})),r):t}(a)).sort((function(e,a){return e.length-a.length||t.indexOf(e)-t.indexOf(a)})),b[e]=t,t.slice(0))}function O(e){for(var a=[];e.length;)a.unshift(e),e=e.substr(0,e.length-1);return a}function A(e){return e||(e={length:t}),"number"===typeof e&&(e={length:e}),e.length=Math.max(e.length||0,t),e.existing=e.existing||{},e}},266:function(e,a,t){"use strict";t.r(a);var n=t(96),r=t(513),l=t(0),c=t.n(l),o=t(4),s=t.n(o),i=t(516),m=t(514),u=t.n(m),d=t(37),p=t(8),h=t(504),f=t(16),v=t(23),g=t(17),E=t(505),b=t(60),y=t(132),O=t(506),A=t(507),w=t(508),j=t(509),N=t(510),C=t(7),R=t(1355),S=t.n(R),x=t(138),k=t(763),T=t(141),P=function(){return c.a.createElement(v.a,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Default with initials"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,{initials:"AS",label:"Adam Smith"}))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Default as link"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,{tag:c.a.createElement("a",null),href:"#",initials:"AS",label:"Adam Smith"}))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Photographic"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,null,c.a.createElement(k.a,{label:"Adam Smith"},c.a.createElement("img",{alt:"Adam Smith",src:"http://themethemer-bff0.kxcdn.com/dist/_imgs/stockphoto.jpg"}))),c.a.createElement(x.a,null,c.a.createElement(k.a,{label:"Adam Smith"},c.a.createElement(f.a,{name:"account",resolution:"low"}))))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Text (light and dark fonts)"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,{style:{backgroundColor:"#15195a"}},c.a.createElement(T.a,{textShade:"light"},"Adam Smith")),c.a.createElement(x.a,null,c.a.createElement(T.a,{textShade:"dark"},"Adam Smith")))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Company Logo"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,null,c.a.createElement(k.a,{label:"FDNB logo",type:"company-logo"},c.a.createElement("img",{alt:"FDNB logo",src:"http://themethemer-bff0.kxcdn.com/dist/_imgs/bank.png"}))))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h2"},"Usage with initials generated from name."))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(x.a,{initials:S()("Adam Smith"),label:"Adam Smith"})," ",c.a.createElement("span",null,"Adam Smith"))))},B=t(515),D="import React, { cloneElement, forwardRef, Fragment } from 'react';\nimport { element, node, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-avatar';\n\nconst Avatar = forwardRef(({\n  children,\n  className,\n  tag,\n  initials,\n  label,\n  ...remainingProps\n}, ref) => {\n  const initialsMarkup = (initials, label) => (\n    <Fragment>\n      <div className={`${CSS_PREFIX}--label`}>{label || initials}</div>\n      <div className={`${CSS_PREFIX}--initials`} aria-hidden=\"true\" role=\"presentation\">\n        {initials}\n      </div>\n    </Fragment>\n  );\n\n  return (\n    cloneElement(\n      tag,\n      {\n        children: initials && label ? initialsMarkup(initials, label) : children,\n        className: classnames(CSS_PREFIX, className),\n        ref,\n        ...remainingProps\n      }\n    )\n  );\n});\n\nAvatar.propTypes = {\n  /**\n   * @ignore\n   */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Initials\n   */\n  initials: string,\n\n  /**\n   * Label\n   */\n  label: string,\n\n  /**\n  * Tag\n  */\n  tag: element\n};\n\nAvatar.defaultProps = {\n  tag: <div />\n};\n\nAvatar.displayName = 'Avatar';\n\nexport default Avatar;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),F='import React from \'react\';\nimport initials from \'initials\';\nimport Avatar from \'../../avatar\';\nimport AvatarPhoto from \'../../avatar-photo\';\nimport AvatarText from \'../../avatar-text\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Icon from \'../../icon\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst AvatarExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Default with initials</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar initials="AS" label="Adam Smith" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Default as link</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar tag={<a />} href="#" initials="AS" label="Adam Smith" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Photographic</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar>\n          <AvatarPhoto label="Adam Smith">\n            <img\n              alt="Adam Smith"\n              src="http://themethemer-bff0.kxcdn.com/dist/_imgs/stockphoto.jpg"\n            />\n          </AvatarPhoto>\n        </Avatar>\n        <Avatar>\n          <AvatarPhoto label="Adam Smith">\n            <Icon name="account" resolution="low" />\n          </AvatarPhoto>\n        </Avatar>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Text (light and dark fonts)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar style={{ backgroundColor: \'#15195a\' }}>\n          <AvatarText textShade="light">Adam Smith</AvatarText>\n        </Avatar>\n        <Avatar>\n          <AvatarText textShade="dark">Adam Smith</AvatarText>\n        </Avatar>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Company Logo</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar>\n          <AvatarPhoto label="FDNB logo" type="company-logo">\n            <img\n              alt="FDNB\n              logo"\n              src="http://themethemer-bff0.kxcdn.com/dist/_imgs/bank.png"\n            />\n          </AvatarPhoto>\n        </Avatar>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Usage with initials generated from name.</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Avatar initials={initials(\'Adam Smith\')} label="Adam Smith" /> <span>Adam Smith</span>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default AvatarExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),L=function(e){var a=Object(r.a)({},e),t=Object(l.useState)({}),o=Object(n.a)(t,2),m=o[0],R=o[1];return Object(l.useEffect)((function(){try{R(B.parse(D))}catch(e){console.log("\n        React-docgen could not parse props for Avatar\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(v.a,{siblingOfStickyFooter:!0},c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(C.a,{tag:"h1"},"Avatar"))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(y.a,null,c.a.createElement(b.a,{tag:c.a.createElement(d.c,{exact:!0,to:"".concat("/vds-react","/components/avatar"),activeClassName:"vds-state--selected"})},c.a.createElement(f.a,{name:"log",resolution:"low"}),"Avatar Example"),c.a.createElement(b.a,{tag:c.a.createElement(d.c,{exact:!0,to:"".concat("/vds-react","/components/avatar/code"),activeClassName:"vds-state--selected"})},c.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Avatar Example")))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:s()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/avatar/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/avatar/code")})},c.a.createElement(P,a)),c.a.createElement("div",{className:s()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/avatar/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/avatar/code")})},c.a.createElement(i.a,Object.assign({},i.b,{theme:u.a,code:F,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return c.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return c.a.createElement("div",r({key:a,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",l({key:a,token:e}))})))})))}))))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(h.a,{className:s()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(E.a,{tag:"caption"},"Props"),c.a.createElement(j.a,null,c.a.createElement(N.a,{className:"vds-tr"},c.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(O.a,null,m.props&&Object.entries(m.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return c.a.createElement(N.a,{className:"vds-tr",key:a,tabIndex:"0"},c.a.createElement(A.a,{className:"vds-td"},e[0]," ",e[1].required?c.a.createElement("sup",{style:{color:"red"}}," required"):""),c.a.createElement(A.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),c.a.createElement(A.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(A.a,{className:"vds-td"},e[1].description))})))))))};L.displayName="AvatarExample";a.default=L},504:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),o=t(3),s=t(4),i=t.n(s),m=Object(l.forwardRef)((function(e,a){var t,l=e.children,o=e.className,s=e.customizableColumns,m=e.dividerLines,u=e.keyValuePairs,d=e.reveal,p=e.revealFirstColumn,h=e.revealLastColumn,f=e.rowSelection,v=e.size,g=e.stickyHeader,E=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},E,{className:i()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(s)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(h)),Object(n.a)(t,"".concat("vds-state","--").concat(f),Boolean(f)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(g)),t),o),ref:a}),l)}));m.propTypes={children:o.node,className:o.string,columns:Object(o.arrayOf)(Object(o.shape)({})),customizableColumns:o.bool,data:Object(o.arrayOf)(Object(o.shape)({})),dividerLines:o.bool,keyValuePairs:o.bool,reveal:o.bool,revealFirstColumn:o.bool,revealLastColumn:o.bool,rowSelection:Object(o.oneOf)(["multi-select","single-select"]),size:Object(o.oneOf)(["compact"]),stickyHeader:o.bool},m.displayName="DataTable",a.a=m},505:function(e,a,t){"use strict";var n=t(5),r=t(0),l=t.n(r),c=t(3),o=t(4),s=t.n(o),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,c=e.tag,o=Object(n.a)(e,["children","className","tag"]);return l.a.createElement(c,Object.assign({className:s()("vds-sr",r),ref:a},o),t)}));i.propTypes={children:c.node,className:c.string,tag:c.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",a.a=i},506:function(e,a,t){"use strict";var n=t(5),r=t(0),l=t.n(r),c=t(3),o=t(4),s=t.n(o),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,c=Object(n.a)(e,["children","className"]);return l.a.createElement("tbody",Object.assign({className:s()("vds-tbody",r),ref:a},c),t)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tbody",a.a=i},507:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),o=t(3),s=t(4),i=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=e.textAlign,s=Object(r.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(o),Boolean(o)),l),ref:a},s),t)}));m.propTypes={children:o.node,className:o.string,textAlign:Object(o.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},508:function(e,a,t){"use strict";var n=t(5),r=t(0),l=t.n(r),c=t(3),o=t(4),s=t.n(o),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,c=Object(n.a)(e,["children","className"]);return l.a.createElement("th",Object.assign({className:s()("vds-th",r),ref:a},c),t)}));i.propTypes={children:c.node,className:c.string},i.displayName="Th",a.a=i},509:function(e,a,t){"use strict";var n=t(5),r=t(0),l=t.n(r),c=t(3),o=t(4),s=t.n(o),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,c=Object(n.a)(e,["children","className"]);return l.a.createElement("thead",Object.assign({className:s()("vds-thead",r),ref:a},c),t)}));i.propTypes={children:c.node,className:c.string},i.displayName="Thead",a.a=i},510:function(e,a,t){"use strict";var n=t(5),r=t(0),l=t.n(r),c=t(3),o=t(4),s=t.n(o),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,c=Object(n.a)(e,["children","className"]);return l.a.createElement("tr",Object.assign({className:s()("vds-tr",r),ref:a},c),t)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tr",a.a=i},517:function(e,a){},763:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),o=t(4),s=t.n(o);function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var u=function(e){var a,t=e.children,o=e.className,i=e.label,u=e.type,d=Object(r.a)(e,["children","className","label","type"]);return"img"===l.Children.only(t).type?Object(l.cloneElement)(t,m({alt:l.Children.only(t).props.alt||i,className:s()((a={},Object(n.a)(a,"".concat("vds-avatar","--photo"),!1===Boolean(u)),Object(n.a)(a,"".concat("vds-avatar","--").concat(u),Boolean(u)),a),o)},d)):c.a.createElement("div",Object.assign({className:s()("".concat("vds-avatar","--photo"),o)},d),Object(l.cloneElement)(t,m({ariaLabel:i},d)))};u.displayName="AvatarPhoto",a.a=u}}]);
//# sourceMappingURL=33.1be791c9.chunk.js.map