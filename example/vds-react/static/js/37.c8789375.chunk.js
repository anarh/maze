(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[37],{241:function(e,a,t){"use strict";t.r(a);var n=t(85),o=t(518),l=t(0),i=t.n(l),c=t(517),r=t.n(c),s=t(2),d=t.n(s),p=t(523),m=t(522),u=t(39),g=t(8),h=t(508),b=t(18),f=t(24),y=t(17),v=t(509),E=t(62),w=t(134),D=t(510),C=t(511),T=t(512),O=t(513),S=t(514),k=t(7),N=t(562),j=t(541),x=t(539),B=t(4),R=t(5),W=t(3),F=t(1484),A=t.n(F),H=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=e.role,l=Object(R.a)(e,["children","className","role"]);return i.a.createElement("div",Object.assign({className:d()("vds-dialog-card",n),ref:a,role:o},l),t)}));H.propTypes={children:W.node,className:W.string,role:W.string},H.displayName="DialogCard";var I=H,q=Object(l.forwardRef)((function(e,a){var t,n=e.children,o=e.className,c=e.css,r=e.open,s=e.type,p=Object(R.a)(e,["children","className","css","open","type"]);return i.a.createElement(l.Fragment,null,r?i.a.createElement(A.a,p,i.a.createElement("div",{className:d()("vds-dialog",(t={},Object(B.a)(t,"".concat("vds-state","--show"),!0),Object(B.a)(t,"".concat("vds-state","--").concat(s),Boolean(s)),t),o),css:c,ref:a},i.a.createElement(I,null,n))):void 0)}));q.propTypes={children:W.node,className:W.string,css:W.func,open:W.bool,type:Object(W.oneOf)(["error","success","warning"])},q.displayName="Dialog";var G=q,L=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("div",Object.assign({className:d()("vds-dialog-card--body",n),ref:a},o),t)}));L.propTypes={children:W.node,className:W.string},L.displayName="DialogCardBody";var P=L,V=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("div",Object.assign({className:d()("vds-dialog-card--close",n),ref:a},o),t)}));V.propTypes={children:W.node,className:W.string},V.displayName="DialogCardClose";var z=V,M=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("div",Object.assign({className:d()("vds-dialog-card--footer",n),ref:a},o),t)}));M.propTypes={children:W.node,className:W.string},M.displayName="DialogCardFooter";var _=M,J=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("div",Object.assign({className:d()("vds-dialog-card--head",n),ref:a},o),t)}));J.propTypes={children:W.node,className:W.string},J.displayName="DialogCardHead";var X=J,$=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("span",Object.assign({className:d()("vds-dialog-card--head-icon",n),ref:a},o),t)}));$.propTypes={children:W.node,className:W.string},$.displayName="DialogCardHeadIcon";var K=$,Q=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("span",Object.assign({className:d()("vds-dialog-card--head-title",n),ref:a},o),t)}));Q.propTypes={children:W.node,className:W.string},Q.displayName="DialogCardHeadTitle";var U=Q,Y=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,o=Object(R.a)(e,["children","className"]);return i.a.createElement("span",Object.assign({className:d()("vds-dialog-subtitle",n),ref:a},o),t)}));Y.propTypes={children:W.node,className:W.string},Y.displayName="DialogSubtitle";var Z=Y,ee=function(){var e=Object(l.useState)({open:!1}),a=Object(n.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)({open:!1}),r=Object(n.a)(c,2),s=r[0],d=r[1],p=Object(l.useState)({open:!1}),m=Object(n.a)(p,2),u=m[0],h=m[1],v=Object(l.useState)({open:!1}),E=Object(n.a)(v,2),w=E[0],D=E[1],C=Object(l.useState)({open:!1}),T=Object(n.a)(C,2),O=T[0],S=T[1];return i.a.createElement(f.a,null,i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(k.a,{tag:"h2"},"Dialog"),i.a.createElement(k.a,null,"Based off [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)"))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(x.a,{onClick:function(){return o({open:!t.open})}},t.open?"Close":"Open"," Dialog"),i.a.createElement(G,{onExit:function(){return o({open:!1})},open:t.open,titleText:"Dialog Example"},i.a.createElement(X,null,i.a.createElement(U,null,"VDS React Dialog Example")),i.a.createElement(P,null,i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use."),i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use.")),i.a.createElement(_,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){return o({open:!t.open})}},"Cancel"),i.a.createElement(x.a,{colorScheme:"primary",onClick:function(){return o({open:!t.open})}},"Accept")))))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,"Dialog Success")),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(x.a,{onClick:function(){return d({open:!s.open})}},s.open?"Close":"Open"," Success Dialog"),i.a.createElement(G,{onExit:function(){return d({open:!1})},open:s.open,titleText:"Dialog Example",type:"success"},i.a.createElement(X,null,i.a.createElement(K,null,i.a.createElement(b.a,{name:"success",resolution:"low"})),i.a.createElement(U,null,"VDS React Dialog Example")),i.a.createElement(P,null,i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility r requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use."),i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use.")),i.a.createElement(_,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){return d({open:!s.open})}},"Cancel"),i.a.createElement(x.a,{colorScheme:"primary",onClick:function(){return d({open:!s.open})}},"Accept")))))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,"Dialog Warning")),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(x.a,{onClick:function(){return h({open:!u.open})}},u.open?"Close":"Open"," Warning Dialog"),i.a.createElement(G,{onExit:function(){return h({open:!1})},open:u.open,titleText:"Dialog Example",type:"warning"},i.a.createElement(X,null,i.a.createElement(K,null,i.a.createElement(b.a,{name:"warning",resolution:"low"})),i.a.createElement(U,null,"VDS React Dialog Example")),i.a.createElement(P,null,i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use."),i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use.")),i.a.createElement(_,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){return h({open:!u.open})}},"Cancel"),i.a.createElement(x.a,{colorScheme:"primary",onClick:function(){return h({open:!u.open})}},"Accept")))))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,"Dialog Error")),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(x.a,{onClick:function(){return D({open:!w.open})}},w.open?"Close":"Open"," Error Dialog"),i.a.createElement(G,{onExit:function(){return D({open:!1})},open:w.open,titleText:"Dialog Example",type:"error"},i.a.createElement(X,null,i.a.createElement(K,null,i.a.createElement(b.a,{name:"error",resolution:"low"})),i.a.createElement(U,null,"VDS React Dialog Example")),i.a.createElement(P,null,i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use."),i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use.")),i.a.createElement(_,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){return D({open:!w.open})}},"Cancel"),i.a.createElement(x.a,{colorScheme:"primary",onClick:function(){return D({open:!w.open})}},"Accept")))))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,"Dialog With Close button")),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(x.a,{onClick:function(){return S({open:!O.open})}},O.open?"Close":"Open"," Dialog With Close Button"),i.a.createElement(G,{onExit:function(){return S({open:!1})},open:O.open,titleText:"Dialog Example"},i.a.createElement(z,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(j.a,{ariaLabel:"close",iconType:"light-tiny",onClick:function(){return S({open:!O.open})}},i.a.createElement(b.a,{name:"close",resolution:"tiny"})))),i.a.createElement(X,null,i.a.createElement(U,null,"VDS React Dialog Example")),i.a.createElement(P,null,i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use."),i.a.createElement(k.a,null,i.a.createElement(Z,null,"Subtitle")," We maintain that accessibility is a key component of any modern web application. As such, we have created this dialog in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable dialog component for general use.")),i.a.createElement(_,null,i.a.createElement(N.a,{direction:"right"},i.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){return S({open:!O.open})}},"Cancel"),i.a.createElement(x.a,{colorScheme:"primary",onClick:function(){return S({open:!O.open})}},"Accept")))))))},ae=t(519),te=[t(520)],ne=t(521),oe="import React, { forwardRef, Fragment } from 'react';\nimport { bool, func, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\nimport ReactAriaModal from 'react-aria-modal';\nimport DialogCard from '../dialog-card';\n\nconst CSS_PREFIX = 'vds-dialog';\nconst CSS_STATE = 'vds-state';\n\nconst Dialog = forwardRef(({\n  children,\n  className,\n  css,\n  open,\n  type,\n  ...remainingProps\n}, ref) => (\n  <Fragment>\n    {\n      open\n        ? <ReactAriaModal {...remainingProps}>\n          <div\n            className={classnames(CSS_PREFIX, {\n              [`${CSS_STATE}--show`]: true,\n              [`${CSS_STATE}--${type}`]: Boolean(type)\n            }, className)}\n            css={css}\n            ref={ref}\n          >\n            <DialogCard>\n              {children}\n            </DialogCard>\n          </div>\n        </ReactAriaModal>\n        : undefined\n    }\n  </Fragment>\n));\n\nDialog.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * @ignore\n   */\n  css: func,\n\n  /**\n   * Show dialog\n   */\n  open: bool,\n\n  /**\n   * Dialog Type\n   */\n  type: oneOf(['error', 'success', 'warning'])\n};\n\nDialog.displayName = 'Dialog';\n\nexport default Dialog;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),le='import React, { useState } from \'react\';\nimport ButtonGroup from \'../../button-group\';\nimport ButtonIcon from \'../../button-icon\';\nimport ButtonText from \'../../button-text\';\nimport Col from \'../../col\';\nimport Dialog from \'../../dialog\';\nimport DialogCardBody from \'../../dialog-card-body\';\nimport DialogCardClose from \'../../dialog-card-close\';\nimport DialogCardFooter from \'../../dialog-card-footer\';\nimport DialogCardHead from \'../../dialog-card-head\';\nimport DialogCardHeadIcon from \'../../dialog-card-head-icon\';\nimport DialogCardHeadTitle from \'../../dialog-card-head-title\';\nimport DialogSubtitle from \'../../dialog-subtitle\';\nimport Grid from \'../../grid\';\nimport Icon from \'../../icon\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst DialogExample = () => {\n  const [stateOne, setStateOne] = useState({ open: false });\n  const [stateTwo, setStateTwo] = useState({ open: false });\n  const [stateThree, setStateThree] = useState({ open: false });\n  const [stateFour, setStateFour] = useState({ open: false });\n  const [stateFive, setStateFive] = useState({ open: false });\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="h2">Dialog</Typography>\n          <Typography>Based off [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ButtonText onClick={() => setStateOne({ open: !stateOne.open })}>\n            {stateOne.open ? \'Close\' : \'Open\'} Dialog\n          </ButtonText>\n\n          <Dialog\n            onExit={() => setStateOne({ open: false })}\n            open={stateOne.open}\n            titleText="Dialog Example"\n          >\n            <DialogCardHead>\n              <DialogCardHeadTitle>VDS React Dialog Example</DialogCardHeadTitle>\n            </DialogCardHead>\n            <DialogCardBody>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key\n                  component of any modern web application.\n                  As such, we have created this dialog in such a way\n                   that it fulfills the accessibility requirements\n                   of the modern web. We seek to keep the focus on\n                   accessibility while providing a functional,\n                   capable dialog component for general use.\n              </Typography>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component of\n                  any modern web application. As such, we have created\n                  this dialog in such a way that it fulfills the\n                  accessibility requirements of the modern web. We\n                  seek to keep the focus on accessibility while providing\n                  a functional, capable dialog component for general use.\n              </Typography>\n            </DialogCardBody>\n            <DialogCardFooter>\n              <ButtonGroup direction="right">\n                <ButtonText\n                  colorScheme="secondary"\n                  onClick={() => setStateOne({ open: !stateOne.open })}\n                >\n                  Cancel\n                </ButtonText>\n                <ButtonText\n                  colorScheme="primary"\n                  onClick={() => setStateOne({ open: !stateOne.open })}\n                >\n                  Accept\n                </ButtonText>\n              </ButtonGroup>\n            </DialogCardFooter>\n          </Dialog>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          Dialog Success\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ButtonText onClick={() => setStateTwo({ open: !stateTwo.open })}>\n            {stateTwo.open ? \'Close\' : \'Open\'} Success Dialog\n          </ButtonText>\n\n          <Dialog\n            onExit={() => setStateTwo({ open: false })}\n            open={stateTwo.open}\n            titleText="Dialog Example"\n            type="success"\n          >\n            <DialogCardHead>\n              <DialogCardHeadIcon>\n                <Icon name="success" resolution="low" />\n              </DialogCardHeadIcon>\n              <DialogCardHeadTitle>VDS React Dialog Example</DialogCardHeadTitle>\n            </DialogCardHead>\n            <DialogCardBody>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key\n                  component of any modern web application.\n                  As such, we have created this dialog in such\n                  a way that it fulfills the accessibility r\n                  requirements of the modern web.\n                  We seek to keep the focus on accessibility\n                  while providing a functional, capable dialog\n                  component for general use.\n              </Typography>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component\n                  of any modern web application. As such, we\n                  have created this dialog in such a way that it\n                  fulfills the accessibility requirements of the modern web.\n                  We seek to keep the focus on accessibility while providing a\n                  functional, capable dialog component for general use.\n              </Typography>\n            </DialogCardBody>\n            <DialogCardFooter>\n              <ButtonGroup direction="right">\n                <ButtonText\n                  colorScheme="secondary"\n                  onClick={() => setStateTwo({ open: !stateTwo.open })}\n                >\n                  Cancel\n                </ButtonText>\n                <ButtonText\n                  colorScheme="primary"\n                  onClick={() => setStateTwo({ open: !stateTwo.open })}\n                >\n                  Accept\n                </ButtonText>\n              </ButtonGroup>\n            </DialogCardFooter>\n          </Dialog>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          Dialog Warning\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n\n          <ButtonText onClick={() => setStateThree({ open: !stateThree.open })}>\n            {stateThree.open ? \'Close\' : \'Open\'} Warning Dialog\n          </ButtonText>\n\n          <Dialog\n            onExit={() => setStateThree({ open: false })}\n            open={stateThree.open}\n            titleText="Dialog Example"\n            type="warning"\n          >\n            <DialogCardHead>\n              <DialogCardHeadIcon>\n                <Icon name="warning" resolution="low" />\n              </DialogCardHeadIcon>\n              <DialogCardHeadTitle>VDS React Dialog Example</DialogCardHeadTitle>\n            </DialogCardHead>\n            <DialogCardBody>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key\n                  component of any modern web application.\n                  As such, we have created this dialog in such a\n                  way that it fulfills the accessibility requirements\n                  of the modern web. We seek to keep the focus on\n                  accessibility while providing a functional,\n                  capable dialog component for general use.\n              </Typography>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key\n                  component of any modern web application.\n                  As such, we have created this dialog in such a\n                  way that it fulfills the accessibility requirements\n                  of the modern web. We seek to keep the focus on accessibility\n                  while providing a functional, capable dialog component for general use.\n              </Typography>\n            </DialogCardBody>\n            <DialogCardFooter>\n              <ButtonGroup direction="right">\n                <ButtonText\n                  colorScheme="secondary"\n                  onClick={() => setStateThree({ open: !stateThree.open })}\n                >\n                  Cancel\n                </ButtonText>\n                <ButtonText\n                  colorScheme="primary"\n                  onClick={() => setStateThree({ open: !stateThree.open })}\n                >\n                  Accept\n                </ButtonText>\n              </ButtonGroup>\n            </DialogCardFooter>\n          </Dialog>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          Dialog Error\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n\n          <ButtonText onClick={() => setStateFour({ open: !stateFour.open })}>\n            {stateFour.open ? \'Close\' : \'Open\'} Error Dialog\n          </ButtonText>\n\n          <Dialog\n            onExit={() => setStateFour({ open: false })}\n            open={stateFour.open}\n            titleText="Dialog Example"\n            type="error"\n          >\n            <DialogCardHead>\n              <DialogCardHeadIcon>\n                <Icon name="error" resolution="low" />\n              </DialogCardHeadIcon>\n              <DialogCardHeadTitle>VDS React Dialog Example</DialogCardHeadTitle>\n            </DialogCardHead>\n            <DialogCardBody>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component\n                  of any modern web application. As such, we have created\n                  this dialog in such a way that it fulfills the accessibility requirements of\n                  the modern web. We seek to keep the focus on accessibility while\n                   providing a functional, capable dialog component for general use.\n              </Typography>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component\n                  of any modern web application. As such, we have created\n                  this dialog in such a way that it fulfills the accessibility requirements of\n                  the modern web. We seek to keep the focus on accessibility while\n                   providing a functional, capable dialog component for general use.\n              </Typography>\n            </DialogCardBody>\n            <DialogCardFooter>\n              <ButtonGroup direction="right">\n                <ButtonText\n                  colorScheme="secondary"\n                  onClick={() => setStateFour({ open: !stateFour.open })}\n                >\n                  Cancel\n                </ButtonText>\n                <ButtonText\n                  colorScheme="primary"\n                  onClick={() => setStateFour({ open: !stateFour.open })}\n                >\n                  Accept\n                </ButtonText>\n              </ButtonGroup>\n            </DialogCardFooter>\n          </Dialog>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          Dialog With Close button\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ButtonText onClick={() => setStateFive({ open: !stateFive.open })}>\n            {stateFive.open ? \'Close\' : \'Open\'} Dialog With Close Button\n          </ButtonText>\n\n          <Dialog\n            onExit={() => setStateFive({ open: false })}\n            open={stateFive.open}\n            titleText="Dialog Example"\n          >\n            <DialogCardClose>\n              <ButtonGroup direction="right">\n                <ButtonIcon\n                  ariaLabel="close"\n                  iconType="light-tiny"\n                  onClick={() => setStateFive({ open: !stateFive.open })}\n                >\n                  <Icon name="close" resolution="tiny" />\n                </ButtonIcon>\n              </ButtonGroup>\n            </DialogCardClose>\n            <DialogCardHead>\n              <DialogCardHeadTitle>VDS React Dialog Example</DialogCardHeadTitle>\n            </DialogCardHead>\n            <DialogCardBody>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component\n                  of any modern web application. As such, we have\n                  created this dialog in such a way that it fulfills the\n                  accessibility requirements of the modern web. We\n                  seek to keep the focus on accessibility while providing\n                  a functional, capable dialog component for general use.\n              </Typography>\n              <Typography>\n                <DialogSubtitle>Subtitle</DialogSubtitle> We maintain that accessibility is a key component\n                  of any modern web application. As such, we have\n                  created this dialog in such a way that it fulfills the\n                  accessibility requirements of the modern web. We\n                  seek to keep the focus on accessibility while providing\n                  a functional, capable dialog component for general use.\n              </Typography>\n            </DialogCardBody>\n            <DialogCardFooter>\n              <ButtonGroup direction="right">\n                <ButtonText\n                  colorScheme="secondary"\n                  onClick={() => setStateFive({ open: !stateFive.open })}\n                >\n                  Cancel\n                </ButtonText>\n                <ButtonText\n                  colorScheme="primary"\n                  onClick={() => setStateFive({ open: !stateFive.open })}\n                >\n                  Accept\n                </ButtonText>\n              </ButtonGroup>\n            </DialogCardFooter>\n          </Dialog>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default DialogExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),ie=function(e){var a=Object(o.a)({},e),t=Object(l.useState)({}),c=Object(n.a)(t,2),s=c[0],N=c[1];return Object(l.useEffect)((function(){try{N(ne.parse(oe))}catch(e){console.log("\n        React-docgen could not parse props for Dialog\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),i.a.createElement(f.a,{siblingOfStickyFooter:!0},i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(k.a,{tag:"h1"},"Dialog"))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(w.a,null,i.a.createElement(E.a,{tag:i.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/dialog"),activeClassName:"vds-state--selected"})},i.a.createElement(b.a,{name:"log",resolution:"low"}),"Dialog Example"),i.a.createElement(E.a,{tag:i.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/dialog/code"),activeClassName:"vds-state--selected"})},i.a.createElement(b.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),i.a.createElement(E.a,{tag:i.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/dialog/html"),activeClassName:"vds-state--selected"})},i.a.createElement(b.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/dialog"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/dialog")})},i.a.createElement(ee,a)),i.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/dialog/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/dialog/code")})},i.a.createElement(p.a,Object.assign({},p.b,{theme:m.a,code:le,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,o=e.getLineProps,l=e.getTokenProps;return i.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return i.a.createElement("div",o({key:a,line:e}),i.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return i.a.createElement("span",l({key:a,token:e}))})))})))}))),i.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/dialog/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/dialog/html")})},i.a.createElement(p.a,Object.assign({},p.b,{theme:m.a,code:ae.format(r.a.renderToStaticMarkup(i.a.createElement(ee,a)),{css:"ignore",parser:"html",plugins:te,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,n=e.tokens,o=e.getLineProps,l=e.getTokenProps;return i.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return i.a.createElement("div",o({key:a,line:e}),i.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return i.a.createElement("span",l({key:a,token:e}))})))})))}))))),i.a.createElement(y.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{className:d()(["components"]),dividerLines:!0,size:"compact"},i.a.createElement(v.a,{tag:"caption"},"Props"),i.a.createElement(O.a,null,i.a.createElement(S.a,{className:"vds-tr"},i.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),i.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),i.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),i.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),i.a.createElement(D.a,null,s.props&&Object.entries(s.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return i.a.createElement(S.a,{className:"vds-tr",key:a,tabIndex:"0"},i.a.createElement(C.a,{className:"vds-td"},e[0]," ",e[1].required?i.a.createElement("sup",{style:{color:"red"}}," required"):""),i.a.createElement(C.a,{className:"vds-td"},i.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?i.a.createElement("small",{style:{color:"#1a1f71"}},i.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),i.a.createElement(C.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),i.a.createElement(C.a,{className:"vds-td"},e[1].description))})))))))};ie.displayName="DialogExample";a.default=ie},508:function(e,a,t){"use strict";var n=t(4),o=t(5),l=t(0),i=t.n(l),c=t(3),r=t(2),s=t.n(r),d=Object(l.forwardRef)((function(e,a){var t,l=e.children,c=e.className,r=e.customizableColumns,d=e.dividerLines,p=e.keyValuePairs,m=e.reveal,u=e.revealFirstColumn,g=e.revealLastColumn,h=e.rowSelection,b=e.size,f=e.stickyHeader,y=Object(o.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return i.a.createElement("table",Object.assign({},y,{className:s()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(r)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(g)),Object(n.a)(t,"".concat("vds-state","--").concat(h),Boolean(h)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(f)),t),c),ref:a}),l)}));d.propTypes={children:c.node,className:c.string,columns:Object(c.arrayOf)(Object(c.shape)({})),customizableColumns:c.bool,data:Object(c.arrayOf)(Object(c.shape)({})),dividerLines:c.bool,keyValuePairs:c.bool,reveal:c.bool,revealFirstColumn:c.bool,revealLastColumn:c.bool,rowSelection:Object(c.oneOf)(["multi-select","single-select"]),size:Object(c.oneOf)(["compact"]),stickyHeader:c.bool},d.displayName="DataTable",a.a=d},509:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(3),c=t(2),r=t.n(c),s=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,i=e.tag,c=Object(n.a)(e,["children","className","tag"]);return l.a.createElement(i,Object.assign({className:r()("vds-sr",o),ref:a},c),t)}));s.propTypes={children:i.node,className:i.string,tag:i.elementType},s.defaultProps={tag:"span"},s.displayName="Sr",a.a=s},510:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(3),c=t(2),r=t.n(c),s=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,i=Object(n.a)(e,["children","className"]);return l.a.createElement("tbody",Object.assign({className:r()("vds-tbody",o),ref:a},i),t)}));s.propTypes={children:i.node,className:i.string},s.displayName="Tbody",a.a=s},511:function(e,a,t){"use strict";var n=t(4),o=t(5),l=t(0),i=t.n(l),c=t(3),r=t(2),s=t.n(r),d=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=e.textAlign,r=Object(o.a)(e,["children","className","textAlign"]);return i.a.createElement("td",Object.assign({className:s()("vds-td",Object(n.a)({},"vds-text--".concat(c),Boolean(c)),l),ref:a},r),t)}));d.propTypes={children:c.node,className:c.string,textAlign:Object(c.oneOf)(["center","left","right"])},d.displayName="Td",a.a=d},512:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(3),c=t(2),r=t.n(c),s=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,i=Object(n.a)(e,["children","className"]);return l.a.createElement("th",Object.assign({className:r()("vds-th",o),ref:a},i),t)}));s.propTypes={children:i.node,className:i.string},s.displayName="Th",a.a=s},513:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(3),c=t(2),r=t.n(c),s=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,i=Object(n.a)(e,["children","className"]);return l.a.createElement("thead",Object.assign({className:r()("vds-thead",o),ref:a},i),t)}));s.propTypes={children:i.node,className:i.string},s.displayName="Thead",a.a=s},514:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(3),c=t(2),r=t.n(c),s=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,i=Object(n.a)(e,["children","className"]);return l.a.createElement("tr",Object.assign({className:r()("vds-tr",o),ref:a},i),t)}));s.propTypes={children:i.node,className:i.string},s.displayName="Tr",a.a=s},524:function(e,a){},525:function(e,a){},526:function(e,a,t){"use strict";var n=t(5),o=t(0),l=t.n(o),i=t(2),c=t.n(i),r=function(e){var a=e.children,t=e.className,o=Object(n.a)(e,["children","className"]);return l.a.createElement("span",Object.assign({className:c()("vds-btn-label",t)},o),a)};r.displayName="ButtonLabel",a.a=r},539:function(e,a,t){"use strict";var n=t(4),o=t(5),l=t(0),i=t.n(l),c=t(3),r=t(2),s=t.n(r),d=t(526),p=Object(l.forwardRef)((function(e,a){var t,l=e.active,c=e.children,r=e.className,p=e.colorScheme,m=e.disabled,u=e.flippable,g=e.isFullWidth,h=e.role,b=e.tabIndex,f=e.tag,y=e.type,v=Object(o.a)(e,["active","children","className","colorScheme","disabled","flippable","isFullWidth","role","tabIndex","tag","type"]);return i.a.createElement(f,Object.assign({className:s()((t={},Object(n.a)(t,"".concat("vds-btn-text"),!1===Boolean(p)),Object(n.a)(t,"".concat("vds-state","--active"),Boolean(l)),Object(n.a)(t,"".concat("vds-btn-text","--").concat(p),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--flippable"),Boolean(u)),Object(n.a)(t,"".concat("vds-btn-text","--fullwidth"),Boolean(g)),Object(n.a)(t,"".concat("vds-state","--disabled"),Boolean(m)),t),r),disabled:m,role:"button"===f?void 0:h,tabIndex:["span","div"].includes(f)?b:void 0,type:"button"===f?y:void 0,ref:a},v),i.a.createElement(d.a,null,c))}));p.propTypes={active:c.bool,children:c.node,className:c.string,colorScheme:Object(c.oneOf)(["primary","secondary","tertiary"]),disabled:c.bool,flippable:c.bool,isFullWidth:c.bool,role:c.string,tabIndex:Object(c.oneOfType)([c.number,c.string]),tag:Object(c.oneOf)(["a","button","div","span"]),type:c.string},p.defaultProps={role:"button",tabIndex:0,tag:"button",type:"button"},p.displayName="ButtonText",a.a=p},541:function(e,a,t){"use strict";var n=t(4),o=t(5),l=t(0),i=t.n(l),c=t(3),r=t(2),s=t.n(r),d=t(526),p=Object(l.forwardRef)((function(e,a){var t=e.ariaLabel,l=e.children,c=e.className,r=e.disabled,p=e.iconType,m=e.type,u=Object(o.a)(e,["ariaLabel","children","className","disabled","iconType","type"]);return i.a.createElement("button",Object.assign({"aria-label":t,className:s()("vds-btn-icon",Object(n.a)({},"".concat("vds-btn-icon","--").concat(p),Boolean(p)),c),disabled:r,ref:a,type:m},u),i.a.createElement(d.a,null,l))}));p.propTypes={ariaLabel:c.string.isRequired,children:c.node,className:c.string,disabled:c.bool,iconType:Object(c.oneOf)(["dark","dark-outline","dark-tiny","light","light-fill","light-outline","light-tiny"]),type:c.string},p.defaultProps={type:"button"},p.displayName="ButtonIcon",a.a=p},562:function(e,a,t){"use strict";var n=t(4),o=t(5),l=t(0),i=t.n(l),c=t(2),r=t.n(c),s=function(e){var a=e.children,t=e.className,l=e.direction,c=Object(o.a)(e,["children","className","direction"]);return i.a.createElement("div",Object.assign({className:r()("vds-btn-group",Object(n.a)({},"".concat("vds-btn-group","--").concat(l),Boolean(l)),t)},c),a)};s.displayName="ButtonGroup",a.a=s}}]);
//# sourceMappingURL=37.c8789375.chunk.js.map