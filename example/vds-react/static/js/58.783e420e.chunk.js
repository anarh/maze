(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[58],{250:function(e,a,n){"use strict";n.r(a);var l=n(144),t=n(0),r=n.n(t),o=n(538),s=n.n(o),i=n(2),c=n.n(i),m=n(544),d=n(543),u=n(39),p=n(8),b=n(532),v=n(18),f=n(23),h=n(16),E=n(530),S=n(64),g=n(531),k=n(533),y=n(534),w=n(535),T=n(536),V=n(537),N=n(7),O=n(4),C=n(5),M=n(1585),j=n(145),I=n.n(j),x=n(962),R=n(1669),$=n(1668),L=function(e){var a=e.children,n=e.className,l=Object(C.a)(e,["children","className"]);return r.a.createElement("label",Object.assign({className:c()("vds-slider-label",n)},l),a)};L.displayName="SliderLabel";var P=L,F=n(3),z=Object(t.forwardRef)((function(e,a){var n=e.children,l=e.className,t=Object(C.a)(e,["children","className"]);return r.a.createElement("span",Object.assign({className:c()("vds-slider-label-text",l),ref:a},t),n)}));z.propTypes={children:F.node,className:F.string},z.defaultProps={},z.displayName="SliderLabelText";var B=z,D=Object(t.forwardRef)((function(e,a){var n,o=e.className,s=e.customTrackColors,i=e.customLabel,m=e.disabled,d=e.id,u=void 0===d?I.a.generate():d,p=e.label,b=e.markers,v=e.max,f=e.min,h=e.onChange,E=e.onFinalChange,S=e.tooltipPlacement,g=e.type,k=e.showTooltip,y=e.step,w=e.values,T=(Object(C.a)(e,["className","customTrackColors","customLabel","disabled","id","label","markers","max","min","onChange","onFinalChange","tooltipPlacement","type","showTooltip","step","values"]),Object(t.useRef)(u).current),V=Object(t.useState)(w),N=Object(l.a)(V,2),j=N[0],L=N[1],F=Object(t.useState)(!1),z=Object(l.a)(F,2),D=z[0],A=z[1];return a=a||Object(t.useRef)(null),r.a.createElement("div",{className:c()("vds-slider",(n={},Object(O.a)(n,"".concat("vds-state","--default-value"),1===j.length&&j[0]===f),Object(O.a)(n,"".concat("vds-state","--disabled"),m),Object(O.a)(n,"".concat("vds-slider","--").concat(g),Boolean(g)),n),o),ref:a},p?r.a.createElement(P,{htmlFor:"slider-".concat(T),id:"slider-label-".concat(T)},r.a.createElement(B,null,p)):void 0,"function"===typeof i?i(j,T):void 0,r.a.createElement(M.Range,{disabled:m,max:v,min:f,onChange:function(e){L(e),"function"===typeof h&&h(e)},onFinalChange:E,renderTrack:function(e){var n=e.props,l=e.children;return r.a.createElement("div",Object.assign({},n,{className:"".concat("vds-slider","-track"),style:{background:Boolean(s)?Object(M.getTrackBackground)({values:j,colors:s,min:f,max:v}):void 0,backgroundSize:"discrete-number"===g&&!1===Boolean(s)?"calc(".concat(y-1,"px) 4px"):void 0}}),l,a&&a.current&&!1===Boolean(s)?r.a.createElement("div",{className:"".concat("vds-slider","-range"),style:{backgroundSize:"discrete-number"===g?"calc(".concat(y-1,"px) 4px"):void 0,width:a&&a.current?(j[0]-f)*a.current.offsetWidth/(v-f):0,zIndex:-1}}):void 0)},renderThumb:function(e){e.index;var a=e.props,n=(e.isDragged,e.value);return r.a.createElement("div",Object.assign({},a,{"aria-labelledby":"slider-label-".concat(T),className:c()("".concat("vds-slider","-thumb")),id:"slider-".concat(T),onFocus:function(e){return A(!0)},onKeyDown:function(e){A(!0),a.onKeyDown(e)},onMouseEnter:function(e){return A(!0)},onMouseLeave:function(e){return A(!1)},onBlur:function(e){return A(!1)}}),k&&D?r.a.createElement(x.c,null,r.a.createElement(R.a,null,(function(e){var a=e.ref;return r.a.createElement("div",{ref:a})})),r.a.createElement($.a,{placement:S},(function(e){var a=e.ref,l=e.style,t=e.placement;e.arrowProps;return r.a.createElement("div",{className:c()("vds-tooltip","".concat("vds-state","--show")),"data-placement":t,ref:a,style:l},r.a.createElement("div",{className:"vds-tooltip-content"},r.a.createElement("span",{className:"vds-tooltip-text"},n)))}))):void 0)},step:y,values:j}),b)}));D.defaultProps={max:100,min:0,step:1,tooltipPlacement:"top",values:[0]},D.displayName="Slider";var A=D,_=Object(t.forwardRef)((function(e,a){var n=e.children,l=e.className,t=Object(C.a)(e,["children","className"]);return r.a.createElement("ul",Object.assign({className:c()("vds-slider-marker-values",l),ref:a},t),n)}));_.propTypes={children:F.node,className:F.string},_.defaultProps={},_.displayName="SliderMarkerValues";var Z=_,q=Object(t.forwardRef)((function(e,a){var n=e.children,l=e.className,t=e.tag,o=Object(C.a)(e,["children","className","tag"]);return r.a.createElement(t,Object.assign({className:c()("vds-slider-marker-value-item",l),ref:a},o),n)}));q.propTypes={children:F.node,className:F.string,tag:F.elementType},q.defaultProps={tag:"li"},q.displayName="SliderMarkerValueItem";var K=q,X=Object(t.forwardRef)((function(e,a){var n=e.children,l=e.className,t=Object(C.a)(e,["children","className"]);return r.a.createElement("div",Object.assign({className:c()("vds-slider-marker-value-icons",l),ref:a},t),n)}));X.propTypes={children:F.node,className:F.string},X.defaultProps={},X.displayName="SliderMarkerValueIcons";var H=X,W=Object(t.forwardRef)((function(e,a){var n=e.children,l=e.className,t=Object(C.a)(e,["children","className"]);return r.a.createElement("span",Object.assign({className:c()("vds-slider-label-value",l),ref:a},t),n)}));W.propTypes={children:F.node,className:F.string},W.defaultProps={},W.displayName="SliderLabelValue";var G=W,J=function(){return r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Slider"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{label:"Slider control"}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Slider with markers"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{label:"Zoom",markers:r.a.createElement(Z,null,r.a.createElement(K,null,"-100%"),r.a.createElement(K,null,"0"),r.a.createElement(K,null,"+100%")),max:100,min:-100,values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Slider Disabled"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{disabled:!0,label:"Zoom",markers:r.a.createElement(Z,null,r.a.createElement(K,null,"-100%"),r.a.createElement(K,null,"0"),r.a.createElement(K,null,"+100%")),max:100,min:-100,values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Slider with icons"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{label:"Zoom",markers:r.a.createElement(H,null,r.a.createElement(K,{tag:"div"},r.a.createElement(v.a,{"aria-label":"zoom out","aria-hidden":"false",name:"zoom-out",resolution:"low"})),r.a.createElement(K,{tag:"div"},r.a.createElement(v.a,{"aria-label":"zoom in","aria-hidden":"false",name:"zoom-in",resolution:"low"}))),max:100,min:-100,values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Slider Disabled with icons"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{disabled:!0,label:"Zoom",markers:r.a.createElement(H,null,r.a.createElement(K,{tag:"div"},r.a.createElement(v.a,{"aria-label":"zoom out","aria-hidden":"false",name:"zoom-out",resolution:"low"})),r.a.createElement(K,{tag:"div"},r.a.createElement(v.a,{"aria-label":"zoom in","aria-hidden":"false",name:"zoom-in",resolution:"low"}))),max:100,min:-100,values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},max:100,min:0,type:"continuous-number",values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with markers"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},markers:r.a.createElement(Z,null,r.a.createElement(K,null,"$0"),r.a.createElement(K,null,"$70"),r.a.createElement(K,null,"$140"),r.a.createElement(K,null,"$210"),r.a.createElement(K,null,"$280")),max:280,min:0,type:"continuous-number",values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with tooltip"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},markers:r.a.createElement(Z,null,r.a.createElement(K,null,"$0"),r.a.createElement(K,null,"$70"),r.a.createElement(K,null,"$140"),r.a.createElement(K,null,"$210"),r.a.createElement(K,null,"$280")),max:280,min:0,showTooltip:!0,type:"continuous-number",values:[0]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider with preselection"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},markers:r.a.createElement(Z,null,r.a.createElement(K,null,"$0"),r.a.createElement(K,null,"$70"),r.a.createElement(K,null,"$140"),r.a.createElement(K,null,"$210"),r.a.createElement(K,null,"$280")),max:280,min:0,type:"continuous-number",values:[140]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Continuous Number Slider Disabled"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},disabled:!0,markers:r.a.createElement(Z,null,r.a.createElement(K,null,"$0"),r.a.createElement(K,null,"$70"),r.a.createElement(K,null,"$140"),r.a.createElement(K,null,"$210"),r.a.createElement(K,null,"$280")),max:280,min:0,type:"continuous-number",values:[140]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Discrete Number Slider"))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(A,{customLabel:function(e,a){return r.a.createElement(P,{htmlFor:"slider-".concat(a),id:"slider-label-".concat(a)},r.a.createElement(B,null,"Price"),r.a.createElement(G,null,"$",e[0]))},markers:r.a.createElement(Z,null,r.a.createElement(K,null,"$0"),r.a.createElement(K,null,"$70"),r.a.createElement(K,null,"$140"),r.a.createElement(K,null,"$210"),r.a.createElement(K,null,"$280")),max:280,min:0,showTooltip:!0,step:70,type:"discrete-number",values:[210]}))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h2"},"Warning: "),r.a.createElement(N.a,{tag:"h3"},"The above examples do not work with touch based assistive technologies such as VoiceOver or TalkBack. The required events are not yet supported. This is a known issue recorded here on ",r.a.createElement("a",{href:"https://github.com/w3c/aria-practices/issues/8#issuecomment-543176368"},"Github"),". Please use a native input type=range (see example below) if your product needs a11y support for VoiceOver or Talkback."))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"vds-slider"},r.a.createElement(P,{htmlFor:"input-range-native-1"},r.a.createElement(B,null,"Native HTML Range Input Example")),r.a.createElement("input",{id:"input-range-native-1",className:"vds-slider-input",type:"range"})))))},Q=n(540),U=[n(541)],Y=n(542),ee="/* eslint-disable react/display-name */\n/* eslint-disable jsx-a11y/no-static-element-interactions */\n/* eslint-disable react/prop-types */\n\nimport React, { forwardRef, useRef, useState } from 'react';\nimport { arrayOf, bool, func, node, number, oneOf, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport { Range, getTrackBackground } from 'react-range';\nimport shortid from 'shortid';\nimport { Manager, Reference, Popper } from 'react-popper';\nimport SliderLabel from '../slider-label';\nimport SliderLabelText from '../slider-label-text';\n\nconst CSS_PREFIX = 'vds-slider';\nconst CSS_STATE = 'vds-state';\n\nconst Slider = forwardRef(({\n  className,\n  customTrackColors,\n  customLabel,\n  disabled,\n  id = shortid.generate(),\n  label,\n  markers,\n  max,\n  min,\n  onChange,\n  onFinalChange,\n  tooltipPlacement,\n  type,\n  showTooltip,\n  step,\n  values,\n  ...remainingProps\n}, ref) => {\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n  const [rangeValues, setRangeValues] = useState(values);\n  const [enableTooltip, setEnableTooltip] = useState(false);\n  ref = ref || useRef(null);\n\n  return (\n    <div\n      className={classnames(CSS_PREFIX, {\n        [`${CSS_STATE}--default-value`]: rangeValues.length === 1 && rangeValues[0] === min,\n        [`${CSS_STATE}--disabled`]: disabled,\n        [`${CSS_PREFIX}--${type}`]: Boolean(type)\n      }, className)}\n      ref={ref}\n    >\n      {\n        label\n          ? <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>{label}</SliderLabelText>\n          </SliderLabel>\n          : undefined\n      }\n      {\n        typeof customLabel === 'function'\n          ? customLabel(rangeValues, uid)\n          : undefined\n      }\n      <Range\n        disabled={disabled}\n        max={max}\n        min={min}\n        onChange={v => {\n          setRangeValues(v);\n          if (typeof onChange === 'function') {\n            onChange(v);\n          }\n        }}\n        onFinalChange={onFinalChange}\n        renderTrack={({ props, children }) => (\n          <div\n            {...props}\n            className={`${CSS_PREFIX}-track`}\n            style={{\n              background: Boolean(customTrackColors) ? getTrackBackground({\n                values: rangeValues,\n                colors: customTrackColors,\n                min,\n                max\n              }) : undefined,\n              backgroundSize: type === 'discrete-number' &&  Boolean(customTrackColors) === false ? `calc(${step - 1}px) 4px` : undefined\n            }}\n          >\n            {children}\n            {\n              ref && ref.current && Boolean(customTrackColors) === false\n                ? <div\n                  className={`${CSS_PREFIX}-range`}\n                  style={{\n                    backgroundSize: type === 'discrete-number' ? `calc(${step - 1}px) 4px` : undefined,\n                    width: ref && ref.current ? ((rangeValues[0] - min) * ref.current.offsetWidth)/(max - min) : 0,\n                    zIndex: -1\n                }} />\n                : undefined\n            }\n          </div>\n        )}\n        renderThumb={({ index, props, isDragged, value }) => (\n          <div\n            {...props}\n            aria-labelledby={`slider-label-${uid}`}\n            className={classnames(`${CSS_PREFIX}-thumb`)}\n            id={`slider-${uid}`}\n            onFocus={e => setEnableTooltip(true)}\n            onKeyDown={e => {\n              setEnableTooltip(true);\n              props.onKeyDown(e);\n            }}\n            onMouseEnter={e => setEnableTooltip(true)}\n            onMouseLeave={e => setEnableTooltip(false)}\n            onBlur={e => setEnableTooltip(false)}\n          >\n          {\n            showTooltip && enableTooltip\n              ? <Manager>\n              <Reference>\n                {({ ref }) => (\n                  <div ref={ref} />\n                )}\n              </Reference>\n              <Popper placement={tooltipPlacement}>\n                {({ ref, style, placement, arrowProps }) => (\n                  <div\n                    className={classnames('vds-tooltip', `${CSS_STATE}--show`)}\n                    data-placement={placement}\n                    ref={ref}\n                    style={style}\n                  >\n                    <div className=\"vds-tooltip-content\">\n                      <span className=\"vds-tooltip-text\">\n                        {value}\n                      </span>\n                    </div>\n                  </div>\n                )}\n              </Popper>\n            </Manager>\n              : undefined\n          }\n          </div>\n        )}\n        step={step}\n        values={rangeValues}\n      />\n      {markers}\n    </div>\n  );\n});\n\nSlider.propTypes = {\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Custom label markup\n   */\n  customLabel: func,\n\n  /**\n   * Custom track colors\n   */\n  customTrackColors: arrayOf(string),\n\n  /**\n   * Disabled\n   */\n  disabled: bool,\n\n  /**\n   * ID\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Label\n   */\n  label: node,\n\n  /**\n   * Markers\n   */\n  markers: node,\n\n  /**\n   * Max\n   */\n  max: number,\n\n  /**\n   * Min\n   */\n  min: number,\n\n  /**\n   * On Change\n   */\n  onChange: func,\n\n  /**\n   * On final change\n   */\n  onFinalChange: func,\n\n  /**\n   * Show tooltip\n   */\n  showTooltip: bool,\n\n  /**\n   * Step\n   */\n  step: number,\n\n  /**\n   * Tooltip placement\n   */\n  tooltipPlacement: oneOf([\n    'auto',\n    'bottom-end',\n    'bottom-start',\n    'bottom',\n    'left-end',\n    'left-start',\n    'left',\n    'right-end',\n    'right-start',\n    'right',\n    'top-end',\n    'top-start',\n    'top'\n  ]),\n\n  /**\n   * Type of slider\n   */\n  type: oneOf([\n    'continuous-number',\n    'discrete-number'\n  ]),\n\n  /**\n   * Values\n   */\n  values: arrayOf(number),\n\n  /**\n   * Width\n   */\n  width: string\n};\n\nSlider.defaultProps = {\n  max: 100,\n  min: 0,\n  step: 1,\n  tooltipPlacement: 'top',\n  values: [0]\n};\n\nSlider.displayName = 'Slider';\n\nexport default Slider;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),ae='import React from \'react\';\nimport Col from \'../../col\';\nimport Icon from \'../../icon\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Slider from \'../../slider\';\nimport Typography from \'../../typography\';\nimport SliderMarkerValues from \'../../slider-marker-values\';\nimport SliderMarkerValueItem from \'../../slider-marker-value-item\';\nimport SliderMarkerValueIcons from \'../../slider-marker-value-icons\';\nimport SliderLabel from \'../../slider-label\';\nimport SliderLabelText from \'../../slider-label-text\';\nimport SliderLabelValue from \'../../slider-label-value\';\n\nconst SliderExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider label="Slider control" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider with markers</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          label="Zoom"\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>-100%</SliderMarkerValueItem>\n              <SliderMarkerValueItem>0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>+100%</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider Disabled</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          disabled\n          label="Zoom"\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>-100%</SliderMarkerValueItem>\n              <SliderMarkerValueItem>0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>+100%</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider with icons</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          label="Zoom"\n          markers={\n            <SliderMarkerValueIcons>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom out"\n                  aria-hidden="false"\n                  name="zoom-out"\n                  resolution="low"\n                  />\n              </SliderMarkerValueItem>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom in"\n                  aria-hidden="false"\n                  name="zoom-in"\n                  resolution="low"\n                />\n              </SliderMarkerValueItem>\n            </SliderMarkerValueIcons>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Slider Disabled with icons</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          disabled\n          label="Zoom"\n          markers={\n            <SliderMarkerValueIcons>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom out"\n                  aria-hidden="false"\n                  name="zoom-out"\n                  resolution="low"\n                  />\n              </SliderMarkerValueItem>\n              <SliderMarkerValueItem tag="div">\n                <Icon\n                  aria-label="zoom in"\n                  aria-hidden="false"\n                  name="zoom-in"\n                  resolution="low"\n                />\n              </SliderMarkerValueItem>\n            </SliderMarkerValueIcons>\n          }\n          max={100}\n          min={-100}\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          max={100}\n          min={0}\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with markers</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with tooltip</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          showTooltip\n          type="continuous-number"\n          values={[0]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider with preselection</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[140]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Continuous Number Slider Disabled</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          disabled\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          type="continuous-number"\n          values={[140]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Discrete Number Slider</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Slider\n          customLabel={(values, uid) => (\n            <SliderLabel htmlFor={`slider-${uid}`} id={`slider-label-${uid}`}>\n            <SliderLabelText>Price</SliderLabelText>\n            <SliderLabelValue>${values[0]}</SliderLabelValue>\n          </SliderLabel>)}\n          markers={\n            <SliderMarkerValues>\n              <SliderMarkerValueItem>$0</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$70</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$140</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$210</SliderMarkerValueItem>\n              <SliderMarkerValueItem>$280</SliderMarkerValueItem>\n            </SliderMarkerValues>\n          }\n          max={280}\n          min={0}\n          showTooltip\n          step={70}\n          type="discrete-number"\n          values={[210]}\n        />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Warning: </Typography>\n        <Typography tag="h3">\n          The above examples do not work with touch based assistive technologies such as VoiceOver or TalkBack.\n          The required events are not yet supported.\n          This is a known issue recorded here on <a href="https://github.com/w3c/aria-practices/issues/8#issuecomment-543176368">Github</a>.\n          Please use a native input type=range (see example below) if your product needs a11y support for VoiceOver or Talkback.</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <div className="vds-slider">\n          <SliderLabel htmlFor={`input-range-native-1`}>\n            <SliderLabelText>Native HTML Range Input Example</SliderLabelText>\n          </SliderLabel>\n          <input id=\'input-range-native-1\' className="vds-slider-input" type="range" />\n        </div>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default SliderExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),ne=function(e){var a=Object.assign({},e),n=Object(t.useState)({}),o=Object(l.a)(n,2),i=o[0],O=o[1];return Object(t.useEffect)((function(){try{O(Y.parse(ee))}catch(e){console.log("\n        React-docgen could not parse props for Slider\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(f.a,{siblingOfStickyFooter:!0},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(N.a,{tag:"h1"},"Slider"))),r.a.createElement(h.a,null,r.a.createElement(p.a,{role:"navigation","aria-label":"Secondary"},r.a.createElement(g.a,{role:"none"},r.a.createElement(S.a,{role:void 0,tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"log",resolution:"low"}),"Slider Example"),r.a.createElement(S.a,{role:void 0,tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider/code"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),r.a.createElement(S.a,{role:void 0,tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/slider/html"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider")})},r.a.createElement(J,a)),r.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider/code")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:ae,language:"jsx"}),(function(e){var a=e.className,n=e.style,l=e.tokens,t=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},l.map((function(e,a){return r.a.createElement("div",Object.assign({},t({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))),r.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/slider/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/slider/html")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:Q.format(s.a.renderToStaticMarkup(r.a.createElement(J,a)),{css:"ignore",parser:"html",plugins:U,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,l=e.tokens,t=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},l.map((function(e,a){return r.a.createElement("div",Object.assign({},t({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(b.a,{className:c()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(E.a,{tag:"caption"},"Props"),r.a.createElement(T.a,null,r.a.createElement(V.a,{className:"vds-tr"},r.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(k.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return r.a.createElement(V.a,{className:"vds-tr",key:a},r.a.createElement(w.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?r.a.createElement("strong",null," - required"):""),r.a.createElement(y.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),r.a.createElement(y.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(y.a,{className:"vds-td"},e[1].description))})))))))};ne.displayName="SliderExample";a.default=ne},530:function(e,a,n){"use strict";var l=n(5),t=n(0),r=n.n(t),o=n(3),s=n(2),i=n.n(s),c=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,o=e.tag,s=Object(l.a)(e,["children","className","tag"]);return r.a.createElement(o,Object.assign({className:i()("vds-screen-reader",t),ref:a},s),n)}));c.propTypes={children:o.node,className:o.string,tag:o.elementType},c.defaultProps={tag:"span"},c.displayName="ScreenReader",a.a=c},531:function(e,a,n){"use strict";var l=n(4),t=n(144),r=n(5),o=n(0),s=n.n(o),i=n(2),c=n.n(i),m=n(65),d=40,u=37,p=39,b=38,v=35,f=36,h=Object(o.forwardRef)((function(e,a){var n=e.children,i=e.className,h=e.orientation,E=e.role,S=e.selectedTab,g=Object(r.a)(e,["children","className","orientation","role","selectedTab"]);a=a||Object(o.useRef)();var k=Object(o.useState)(S),y=Object(t.a)(k,2),w=y[0],T=y[1],V=Object(o.useState)(w),N=Object(t.a)(V,2),O=N[0],C=N[1],M=Object(o.useState)([]),j=Object(t.a)(M,2),I=j[0],x=j[1];Object(o.useEffect)((function(){x(Array.from(a.current.querySelectorAll("li > .vds-tab:not(.vds-state--disabled)")))}),[n,a]),Object(o.useEffect)((function(){T(S)}),[S]);return s.a.createElement("ul",Object.assign({className:c()("".concat("vds-tab","-list"),Object(l.a)({},"".concat("vds-tab","--").concat(h),Boolean(h)),i),ref:a,role:E},g),o.Children.map(n,(function(e,a){return s.a.createElement(m.a,{role:"none"},Object(o.cloneElement)(e,{key:a,onClick:function(n){return function(e,a,n){T(a),C(a),"function"===typeof n.props.onClick&&n.props.onClick(e,a)}(n,a,e)},onKeyDown:function(n){return function(e,a,n){var l=e.charCode||e.keyCode,t=I.length,r=O||0;switch(l){case v:return e.preventDefault(),C(t-1),I[t-1].focus();case f:return e.preventDefault(),C(0),I[0].focus();case u:case b:return e.preventDefault(),C(r-1<0?t-1:r-1),I[r-1<0?t-1:r-1].focus();case p:case d:return e.preventDefault(),C((r+1)%t),I[(r+1)%t].focus()}return"function"===typeof n.props.onKeyDown&&n.props.onKeyDown(e,a),C(w)}(n,a,e)},selected:w===a,tabIndex:Number.isInteger(O)?O===a?0:-1:0===a?0:-1}))})))}));h.defaultProps={role:"tablist"},h.displayName="TabList",a.a=h},532:function(e,a,n){"use strict";var l=n(4),t=n(5),r=n(0),o=n.n(r),s=n(3),i=n(2),c=n.n(i),m=Object(r.forwardRef)((function(e,a){var n,r=e.children,s=e.className,i=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,b=e.revealLastColumn,v=e.rowSelection,f=e.size,h=e.stickyHeader,E=Object(t.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},E,{className:c()("vds-data-table",(n={},Object(l.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(i)),Object(l.a)(n,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(l.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(l.a)(n,"".concat("vds-state","--").concat(f),Boolean(f)),Object(l.a)(n,"".concat("vds-state","--reveal"),Boolean(u)),Object(l.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(l.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(l.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(l.a)(n,"".concat("vds-state","--sticky-header"),Boolean(h)),n),s),ref:a}),r)}));m.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},m.displayName="DataTable",a.a=m},533:function(e,a,n){"use strict";var l=n(5),t=n(0),r=n.n(t),o=n(3),s=n(2),i=n.n(s),c=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,o=Object(l.a)(e,["children","className"]);return r.a.createElement("tbody",Object.assign({className:i()("vds-tbody",t),ref:a},o),n)}));c.propTypes={children:o.node,className:o.string},c.displayName="Tbody",a.a=c},534:function(e,a,n){"use strict";var l=n(4),t=n(5),r=n(0),o=n.n(r),s=n(3),i=n(2),c=n.n(i),m=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=e.textAlign,i=Object(t.a)(e,["children","className","textAlign"]);return o.a.createElement("td",Object.assign({className:c()("vds-td",Object(l.a)({},"vds-text--".concat(s),Boolean(s)),r),ref:a},i),n)}));m.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},535:function(e,a,n){"use strict";var l=n(5),t=n(0),r=n.n(t),o=n(3),s=n(2),i=n.n(s),c=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,o=Object(l.a)(e,["children","className"]);return r.a.createElement("th",Object.assign({className:i()("vds-th",t),ref:a},o),n)}));c.propTypes={children:o.node,className:o.string},c.displayName="Th",a.a=c},536:function(e,a,n){"use strict";var l=n(5),t=n(0),r=n.n(t),o=n(3),s=n(2),i=n.n(s),c=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,o=Object(l.a)(e,["children","className"]);return r.a.createElement("thead",Object.assign({className:i()("vds-thead",t),ref:a},o),n)}));c.propTypes={children:o.node,className:o.string},c.displayName="Thead",a.a=c},537:function(e,a,n){"use strict";var l=n(5),t=n(0),r=n.n(t),o=n(3),s=n(2),i=n.n(s),c=Object(t.forwardRef)((function(e,a){var n=e.children,t=e.className,o=Object(l.a)(e,["children","className"]);return r.a.createElement("tr",Object.assign({className:i()("vds-tr",t),ref:a},o),n)}));c.propTypes={children:o.node,className:o.string},c.displayName="Tr",a.a=c},545:function(e,a){},546:function(e,a){}}]);
//# sourceMappingURL=58.783e420e.chunk.js.map