(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[60],{254:function(e,a,n){"use strict";n.r(a);var l=n(64),r=n(0),t=n.n(r),o=n(542),s=n.n(o),i=n(2),c=n.n(i),m=n(549),d=n(548),u=n(39),p=n(8),b=n(536),v=n(18),h=n(23),E=n(16),S=n(535),f=n(65),g=n(145),k=n(537),y=n(538),w=n(539),T=n(540),V=n(541),N=n(7),M=n(4),C=n(5),O=n(1601),I=n(146),x=n.n(I),R=n(965),$=n(1685),L=n(1684),j=function(e){var a=e.children,n=e.className,l=Object(C.a)(e,["children","className"]);return(t.a.createElement("label",Object.assign({className:c()("vds-slider-label",n)},l),a))};j.displayName="SliderLabel";var P=j,F=n(3),z=Object(r.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(C.a)(e,["children","className"]);return(t.a.createElement("span",Object.assign({className:c()("vds-slider-label-text",l),ref:a},r),n))}));z.propTypes={children:F.node,className:F.string},z.defaultProps={},z.displayName="SliderLabelText";var B=z,D=Object(r.forwardRef)((function(e,a){var n,o=e.className,s=e.customTrackColors,i=e.customLabel,m=e.disabled,d=e.id,u=void 0===d?x.a.generate():d,p=e.label,b=e.markers,v=e.max,h=e.min,E=e.onChange,S=e.onFinalChange,f=e.tooltipPlacement,g=e.type,k=e.showTooltip,y=e.step,w=e.values,T=(Object(C.a)(e,["className","customTrackColors","customLabel","disabled","id","label","markers","max","min","onChange","onFinalChange","tooltipPlacement","type","showTooltip","step","values"]),Object(r.useRef)(u).current),V=Object(r.useState)(w),N=Object(l.a)(V,2),I=N[0],j=N[1],F=Object(r.useState)(!1),z=Object(l.a)(F,2),D=z[0],_=z[1];return a=a||Object(r.useRef)(null),t.a.createElement("div",{className:c()("vds-slider",(n={},Object(M.a)(n,"".concat("vds-state","--default-value"),1===I.length&&I[0]===h),Object(M.a)(n,"".concat("vds-state","--disabled"),m),Object(M.a)(n,"".concat("vds-slider","--").concat(g),Boolean(g)),n),o),ref:a},p?t.a.createElement(P,{htmlFor:"slider-".concat(T),id:"slider-label-".concat(T)},t.a.createElement(B,null,p)):void 0,"function"===typeof i?i(I,T):void 0,t.a.createElement(O.Range,{disabled:m,max:v,min:h,onChange:function(e){j(e),"function"===typeof E&&E(e)},onFinalChange:S,renderTrack:function(e){var n=e.props,l=e.children;return(t.a.createElement("div",Object.assign({},n,{className:"".concat("vds-slider","-track"),style:{background:Boolean(s)?Object(O.getTrackBackground)({values:I,colors:s,min:h,max:v}):void 0,backgroundSize:"discrete-number"===g&&!1===Boolean(s)?"calc(".concat(y-1,"px) 4px"):void 0}}),l,a&&a.current&&!1===Boolean(s)?t.a.createElement("div",{className:"".concat("vds-slider","-range"),style:{backgroundSize:"discrete-number"===g?"calc(".concat(y-1,"px) 4px"):void 0,width:a&&a.current?(I[0]-h)*a.current.offsetWidth/(v-h):0,zIndex:-1}}):void 0))},renderThumb:function(e){e.index;var a=e.props,n=(e.isDragged,e.value);return(t.a.createElement("div",Object.assign({},a,{"aria-labelledby":"slider-label-".concat(T),className:c()("".concat("vds-slider","-thumb")),id:"slider-".concat(T),onFocus:function(e){return _(!0)},onKeyDown:function(e){_(!0),a.onKeyDown(e)},onMouseEnter:function(e){return _(!0)},onMouseLeave:function(e){return _(!1)},onBlur:function(e){return _(!1)}}),k&&D?t.a.createElement(R.c,null,t.a.createElement($.a,null,(function(e){var a=e.ref;return(t.a.createElement("div",{ref:a}))})),t.a.createElement(L.a,{placement:f},(function(e){var a=e.ref,l=e.style,r=e.placement;e.arrowProps;return(t.a.createElement("div",{className:c()("vds-tooltip","".concat("vds-state","--show")),"data-placement":r,ref:a,style:l},t.a.createElement("div",{className:"vds-tooltip-content"},t.a.createElement("span",{className:"vds-tooltip-text"},n))))}))):void 0))},step:y,values:I}),b)}));D.defaultProps={max:100,min:0,step:1,tooltipPlacement:"top",values:[0]},D.displayName="Slider";var _=D,A=Object(r.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(C.a)(e,["children","className"]);return(t.a.createElement("ul",Object.assign({className:c()("vds-slider-marker-values",l),ref:a},r),n))}));A.propTypes={children:F.node,className:F.string},A.defaultProps={},A.displayName="SliderMarkerValues";var Z=A,X=Object(r.forwardRef)((function(e,a){var n=e.children,l=e.className,r=e.tag,o=Object(C.a)(e,["children","className","tag"]);return(t.a.createElement(r,Object.assign({className:c()("vds-slider-marker-value-item",l),ref:a},o),n))}));X.propTypes={children:F.node,className:F.string,tag:F.elementType},X.defaultProps={tag:"li"},X.displayName="SliderMarkerValueItem";var q=X,H=Object(r.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(C.a)(e,["children","className"]);return(t.a.createElement("div",Object.assign({className:c()("vds-slider-marker-value-icons",l),ref:a},r),n))}));H.propTypes={children:F.node,className:F.string},H.defaultProps={},H.displayName="SliderMarkerValueIcons";var W=H,G=Object(r.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(C.a)(e,["children","className"]);return(t.a.createElement("span",Object.assign({className:c()("vds-slider-label-value",l),ref:a},r),n))}));G.propTypes={children:F.node,className:F.string},G.defaultProps={},G.displayName="SliderLabelValue";var K=G,J=function(){return t.a.createElement(h.a,null,t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Slider"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{label:"Slider control"}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Slider with markers"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{label:"Zoom",markers:t.a.createElement(Z,null,t.a.createElement(q,null,"-100%"),t.a.createElement(q,null,"0"),t.a.createElement(q,null,"+100%")),max:100,min:-100,values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Slider Disabled"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{disabled:!0,label:"Zoom",markers:t.a.createElement(Z,null,t.a.createElement(q,null,"-100%"),t.a.createElement(q,null,"0"),t.a.createElement(q,null,"+100%")),max:100,min:-100,values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Slider with icons"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{label:"Zoom",markers:t.a.createElement(W,null,t.a.createElement(q,{tag:"div"},t.a.createElement(v.a,{"aria-label":"zoom out","aria-hidden":"false",name:"zoom-out",resolution:"low"})),t.a.createElement(q,{tag:"div"},t.a.createElement(v.a,{"aria-label":"zoom in","aria-hidden":"false",name:"zoom-in",resolution:"low"}))),max:100,min:-100,values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Slider Disabled with icons"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{disabled:!0,label:"Zoom",markers:t.a.createElement(W,null,t.a.createElement(q,{tag:"div"},t.a.createElement(v.a,{"aria-label":"zoom out","aria-hidden":"false",name:"zoom-out",resolution:"low"})),t.a.createElement(q,{tag:"div"},t.a.createElement(v.a,{"aria-label":"zoom in","aria-hidden":"false",name:"zoom-in",resolution:"low"}))),max:100,min:-100,values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},max:100,min:0,type:"continuous-number",values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with markers"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},markers:t.a.createElement(Z,null,t.a.createElement(q,null,"$0"),t.a.createElement(q,null,"$70"),t.a.createElement(q,null,"$140"),t.a.createElement(q,null,"$210"),t.a.createElement(q,null,"$280")),max:280,min:0,type:"continuous-number",values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with tooltip"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},markers:t.a.createElement(Z,null,t.a.createElement(q,null,"$0"),t.a.createElement(q,null,"$70"),t.a.createElement(q,null,"$140"),t.a.createElement(q,null,"$210"),t.a.createElement(q,null,"$280")),max:280,min:0,showTooltip:!0,type:"continuous-number",values:[0]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with preselection"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},markers:t.a.createElement(Z,null,t.a.createElement(q,null,"$0"),t.a.createElement(q,null,"$70"),t.a.createElement(q,null,"$140"),t.a.createElement(q,null,"$210"),t.a.createElement(q,null,"$280")),max:280,min:0,type:"continuous-number",values:[140]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider Disabled"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},disabled:!0,markers:t.a.createElement(Z,null,t.a.createElement(q,null,"$0"),t.a.createElement(q,null,"$70"),t.a.createElement(q,null,"$140"),t.a.createElement(q,null,"$210"),t.a.createElement(q,null,"$280")),max:280,min:0,type:"continuous-number",values:[140]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Discrete Number Slider"))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(_,{customLabel:function(e,a){return t.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},t.a.createElement(B,null,"Price"),t.a.createElement(K,null,"$",e[0]))},markers:t.a.createElement(Z,null,t.a.createElement(q,null,"$0"),t.a.createElement(q,null,"$70"),t.a.createElement(q,null,"$140"),t.a.createElement(q,null,"$210"),t.a.createElement(q,null,"$280")),max:280,min:0,showTooltip:!0,step:70,type:"discrete-number",values:[210]}))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h2"},"Warning: "),t.a.createElement(N.a,{tag:"h3"},"The above examples do not work with touch based assistive technologies such as VoiceOver or TalkBack. The required events are not yet supported. This is a known issue recorded here on ",t.a.createElement("a",{href:"https://github.com/w3c/aria-practices/issues/8#issuecomment-543176368"},"Github"),". Please use a native input type=range (see example below) if your product needs a11y support for VoiceOver or Talkback."))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement("div",{className:"vds-slider"},t.a.createElement(P,{htmlFor:"input-range-native-1"},t.a.createElement(B,null,"Native HTML Range Input Example")),t.a.createElement("input",{id:"input-range-native-1",className:"vds-slider-input",type:"range"})))))},Q=n(545),U=[n(546)],Y=n(547),ee="/* eslint-disable react/display-name */\n/* eslint-disable jsx-a11y/no-static-element-interactions */\n/* eslint-disable react/prop-types */\n\nimport React, { forwardRef, useRef, useState } from 'react';\nimport { arrayOf, bool, func, node, number, oneOf, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport { Range, getTrackBackground } from 'react-range';\nimport shortid from 'shortid';\nimport { Manager, Reference, Popper } from 'react-popper';\nimport SliderLabel from '../slider-label';\nimport SliderLabelText from '../slider-label-text';\n\nconst CSS_PREFIX = 'vds-slider';\nconst CSS_STATE = 'vds-state';\n\nconst Slider = forwardRef(({\n  className,\n  customTrackColors,\n  customLabel,\n  disabled,\n  id = shortid.generate(),\n  label,\n  markers,\n  max,\n  min,\n  onChange,\n  onFinalChange,\n  tooltipPlacement,\n  type,\n  showTooltip,\n  step,\n  values,\n  ...remainingProps\n}, ref) => {\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n  const [rangeValues, setRangeValues] = useState(values);\n  const [enableTooltip, setEnableTooltip] = useState(false);\n  ref = ref || useRef(null);\n\n  return (\n    <div\n      className={classnames(CSS_PREFIX, {\n        [`${CSS_STATE}--default-value`]: rangeValues.length === 1 && rangeValues[0] === min,\n        [`${CSS_STATE}--disabled`]: disabled,\n        [`${CSS_PREFIX}--${type}`]: Boolean(type)\n      }, className)}\n      ref={ref}\n    >\n      {\n        label\n          ? <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>{label}</SliderLabelText>\n          </SliderLabel>\n          : undefined\n      }\n      {\n        typeof customLabel === 'function'\n          ? customLabel(rangeValues, uid)\n          : undefined\n      }\n      <Range\n        disabled={disabled}\n        max={max}\n        min={min}\n        onChange={v => {\n          setRangeValues(v);\n          if (typeof onChange === 'function') {\n            onChange(v);\n          }\n        }}\n        onFinalChange={onFinalChange}\n        renderTrack={({ props, children }) => (\n          <div\n            {...props}\n            className={`${CSS_PREFIX}-track`}\n            style={{\n              background: Boolean(customTrackColors) ? getTrackBackground({\n                values: rangeValues,\n                colors: customTrackColors,\n                min,\n                max\n              }) : undefined,\n              backgroundSize: type === 'discrete-number' &&  Boolean(customTrackColors) === false ? `calc(${step - 1}px) 4px` : undefined\n            }}\n          >\n            {children}\n            {\n              ref && ref.current && Boolean(customTrackColors) === false\n                ? <div\n                  className={`${CSS_PREFIX}-range`}\n                  style={{\n                    backgroundSize: type === 'discrete-number' ? `calc(${step - 1}px) 4px` : undefined,\n                    width: ref && ref.current ? ((rangeValues[0] - min) * ref.current.offsetWidth)/(max - min) : 0,\n                    zIndex: -1\n                }} />\n                : undefined\n            }\n          </div>\n        )}\n        renderThumb={({ index, props, isDragged, value }) => (\n          <div\n            {...props}\n            aria-labelledby={`slider-label-${uid}`}\n            className={classnames(`${CSS_PREFIX}-thumb`)}\n            id={`slider-${uid}`}\n            onFocus={e => setEnableTooltip(true)}\n            onKeyDown={e => {\n              setEnableTooltip(true);\n              props.onKeyDown(e);\n            }}\n            onMouseEnter={e => setEnableTooltip(true)}\n            onMouseLeave={e => setEnableTooltip(false)}\n            onBlur={e => setEnableTooltip(false)}\n          >\n          {\n            showTooltip && enableTooltip\n              ? <Manager>\n              <Reference>\n                {({ ref }) => (\n                  <div ref={ref} />\n                )}\n              </Reference>\n              <Popper placement={tooltipPlacement}>\n                {({ ref, style, placement, arrowProps }) => (\n                  <div\n                    className={classnames('vds-tooltip', `${CSS_STATE}--show`)}\n                    data-placement={placement}\n                    ref={ref}\n                    style={style}\n                  >\n                    <div className=\"vds-tooltip-content\">\n                      <span className=\"vds-tooltip-text\">\n                        {value}\n                      </span>\n                    </div>\n                  </div>\n                )}\n              </Popper>\n            </Manager>\n              : undefined\n          }\n          </div>\n        )}\n        step={step}\n        values={rangeValues}\n      />\n      {markers}\n    </div>\n  );\n});\n\nSlider.propTypes = {\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Custom label markup\n   */\n  customLabel: func,\n\n  /**\n   * Custom track colors\n   */\n  customTrackColors: arrayOf(string),\n\n  /**\n   * Disabled\n   */\n  disabled: bool,\n\n  /**\n   * ID\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Label\n   */\n  label: node,\n\n  /**\n   * Markers\n   */\n  markers: node,\n\n  /**\n   * Max\n   */\n  max: number,\n\n  /**\n   * Min\n   */\n  min: number,\n\n  /**\n   * On Change\n   */\n  onChange: func,\n\n  /**\n   * On final change\n   */\n  onFinalChange: func,\n\n  /**\n   * Show tooltip\n   */\n  showTooltip: bool,\n\n  /**\n   * Step\n   */\n  step: number,\n\n  /**\n   * Tooltip placement\n   */\n  tooltipPlacement: oneOf([\n    'auto',\n    'bottom-end',\n    'bottom-start',\n    'bottom',\n    'left-end',\n    'left-start',\n    'left',\n    'right-end',\n    'right-start',\n    'right',\n    'top-end',\n    'top-start',\n    'top'\n  ]),\n\n  /**\n   * Type of slider\n   */\n  type: oneOf([\n    'continuous-number',\n    'discrete-number'\n  ]),\n\n  /**\n   * Values\n   */\n  values: arrayOf(number),\n\n  /**\n   * Width\n   */\n  width: string\n};\n\nSlider.defaultProps = {\n  max: 100,\n  min: 0,\n  step: 1,\n  tooltipPlacement: 'top',\n  values: [0]\n};\n\nSlider.displayName = 'Slider';\n\nexport default Slider;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),ae='import React from \'react\';\nimport Col from \'../../col\';\nimport Icon from \'../../icon\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Slider from \'../../slider\';\nimport Typography from \'../../typography\';\nimport SliderMarkerValues from \'../../slider-marker-values\';\nimport SliderMarkerValueItem from \'../../slider-marker-value-item\';\nimport SliderMarkerValueIcons from \'../../slider-marker-value-icons\';\nimport SliderLabel from \'../../slider-label\';\nimport SliderLabelText from \'../../slider-label-text\';\nimport SliderLabelValue from \'../../slider-label-value\';\n\nconst SliderExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider label="Slider control" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider with markers</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          label="Zoom"\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>-100%</SliderMarkerValueItem>\n              <SliderMarkerValueItem>0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>+100%</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider Disabled</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          disabled\n          label="Zoom"\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>-100%</SliderMarkerValueItem>\n              <SliderMarkerValueItem>0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>+100%</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider with icons</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          label="Zoom"\n          markers={\n            <SliderMarkerValueIcons>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom out"\n                  aria-hidden="false"\n                  name="zoom-out"\n                  resolution="low"\n                  />\n              </SliderMarkerValueItem>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom in"\n                  aria-hidden="false"\n                  name="zoom-in"\n                  resolution="low"\n                />\n              </SliderMarkerValueItem>\n            </SliderMarkerValueIcons>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider Disabled with icons</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          disabled\n          label="Zoom"\n          markers={\n            <SliderMarkerValueIcons>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom out"\n                  aria-hidden="false"\n                  name="zoom-out"\n                  resolution="low"\n                  />\n              </SliderMarkerValueItem>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom in"\n                  aria-hidden="false"\n                  name="zoom-in"\n                  resolution="low"\n                />\n              </SliderMarkerValueItem>\n            </SliderMarkerValueIcons>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          max={100}\n          min={0}\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with markers</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with tooltip</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          showTooltip\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with preselection</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[140]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider Disabled</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          disabled\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[140]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Discrete Number Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          showTooltip\n          step={70}\n          type="discrete-number"\n          values={[210]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Warning: </Typography>\n        <Typography tag="h3">\n          The above examples do not work with touch based assistive technologies such as VoiceOver or TalkBack.\n          The required events are not yet supported.\n          This is a known issue recorded here on <a href="https://github.com/w3c/aria-practices/issues/8#issuecomment-543176368">Github</a>.\n          Please use a native input type=range (see example below) if your product needs a11y support for VoiceOver or Talkback.</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <div className="vds-slider">\n          <SliderLabel htmlFor={`input-range-native-1`}>\n            <SliderLabelText>Native HTML Range Input Example</SliderLabelText>\n          </SliderLabel>\n          <input id=\'input-range-native-1\' className="vds-slider-input" type="range" />\n        </div>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default SliderExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),ne=function(e){var a=Object.assign({},e),n=Object(r.useState)({}),o=Object(l.a)(n,2),i=o[0],M=o[1];return Object(r.useEffect)((function(){try{M(Y.parse(ee))}catch(e){console.log("\n        React-docgen could not parse props for Slider\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),t.a.createElement(h.a,{siblingOfStickyFooter:!0},t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(N.a,{tag:"h1"},"Slider"))),t.a.createElement(E.a,null,t.a.createElement(p.a,{role:"navigation","aria-label":"Secondary"},t.a.createElement(g.a,{role:"none"},t.a.createElement(f.a,{role:void 0,tag:t.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider"),activeClassName:"vds-state--selected"})},t.a.createElement(v.a,{name:"log",resolution:"low"}),"Slider Example"),t.a.createElement(f.a,{role:void 0,tag:t.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider/code"),activeClassName:"vds-state--selected"})},t.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),t.a.createElement(f.a,{role:void 0,tag:t.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider/html"),activeClassName:"vds-state--selected"})},t.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider")})},t.a.createElement(J,a)),t.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider/code")})},t.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:ae,language:"jsx"}),(function(e){var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return(t.a.createElement("pre",{className:a,style:n},l.map((function(e,a){return t.a.createElement("div",Object.assign({},r({key:a,line:e}),{key:a}),t.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return t.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))}))))}))),t.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider/html")})},t.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:Q.format(s.a.renderToStaticMarkup(t.a.createElement(J,a)),{css:"ignore",parser:"html",plugins:U,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return(t.a.createElement("pre",{className:a,style:n},l.map((function(e,a){return t.a.createElement("div",Object.assign({},r({key:a,line:e}),{key:a}),t.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return t.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))}))))}))))),t.a.createElement(E.a,null,t.a.createElement(p.a,null,t.a.createElement(b.a,{className:c()(["components"]),dividerLines:!0,size:"compact"},t.a.createElement(S.a,{tag:"caption"},"Props"),t.a.createElement(T.a,null,t.a.createElement(V.a,{className:"vds-tr"},t.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),t.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),t.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),t.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),t.a.createElement(k.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return t.a.createElement(V.a,{className:"vds-tr",key:a},t.a.createElement(w.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?t.a.createElement("strong",null," - required"):""),t.a.createElement(y.a,{className:"vds-td"},t.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?t.a.createElement("small",{style:{color:"#1a1f71"}},t.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),t.a.createElement(y.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),t.a.createElement(y.a,{className:"vds-td"},e[1].description))})))))))};ne.displayName="SliderExample";a.default=ne},535:function(e,a,n){"use strict";var l=n(5),r=n(0),t=n.n(r),o=n(3),s=n(2),i=n.n(s),c=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=e.tag,s=Object(l.a)(e,["children","className","tag"]);return(t.a.createElement(o,Object.assign({className:i()("vds-screen-reader",r),ref:a},s),n))}));c.propTypes={children:o.node,className:o.string,tag:o.elementType},c.defaultProps={tag:"span"},c.displayName="ScreenReader",a.a=c},536:function(e,a,n){"use strict";var l=n(4),r=n(5),t=n(0),o=n.n(t),s=n(3),i=n(2),c=n.n(i),m=Object(t.forwardRef)((function(e,a){var n,t=e.children,s=e.className,i=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,b=e.revealLastColumn,v=e.rowSelection,h=e.size,E=e.stickyHeader,S=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},S,{className:c()("vds-data-table",(n={},Object(l.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(i)),Object(l.a)(n,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(l.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(l.a)(n,"".concat("vds-state","--").concat(h),Boolean(h)),Object(l.a)(n,"".concat("vds-state","--reveal"),Boolean(u)),Object(l.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(l.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(l.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(l.a)(n,"".concat("vds-state","--sticky-header"),Boolean(E)),n),s),ref:a}),t)}));m.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},m.displayName="DataTable",a.a=m},537:function(e,a,n){"use strict";var l=n(5),r=n(0),t=n.n(r),o=n(3),s=n(2),i=n.n(s),c=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(l.a)(e,["children","className"]);return(t.a.createElement("tbody",Object.assign({className:i()("vds-tbody",r),ref:a},o),n))}));c.propTypes={children:o.node,className:o.string},c.displayName="Tbody",a.a=c},538:function(e,a,n){"use strict";var l=n(4),r=n(5),t=n(0),o=n.n(t),s=n(3),i=n(2),c=n.n(i),m=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,s=e.textAlign,i=Object(r.a)(e,["children","className","textAlign"]);return(o.a.createElement("td",Object.assign({className:c()("vds-td",Object(l.a)({},"vds-text--".concat(s),Boolean(s)),t),ref:a},i),n))}));m.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},539:function(e,a,n){"use strict";var l=n(5),r=n(0),t=n.n(r),o=n(3),s=n(2),i=n.n(s),c=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(l.a)(e,["children","className"]);return(t.a.createElement("th",Object.assign({className:i()("vds-th",r),ref:a},o),n))}));c.propTypes={children:o.node,className:o.string},c.displayName="Th",a.a=c},540:function(e,a,n){"use strict";var l=n(5),r=n(0),t=n.n(r),o=n(3),s=n(2),i=n.n(s),c=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(l.a)(e,["children","className"]);return(t.a.createElement("thead",Object.assign({className:i()("vds-thead",r),ref:a},o),n))}));c.propTypes={children:o.node,className:o.string},c.displayName="Thead",a.a=c},541:function(e,a,n){"use strict";var l=n(5),r=n(0),t=n.n(r),o=n(3),s=n(2),i=n.n(s),c=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(l.a)(e,["children","className"]);return(t.a.createElement("tr",Object.assign({className:i()("vds-tr",r),ref:a},o),n))}));c.propTypes={children:o.node,className:o.string},c.displayName="Tr",a.a=c},550:function(e,a){},551:function(e,a){}}]);
//# sourceMappingURL=60.54111428.chunk.js.map