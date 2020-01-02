(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[34],{256:function(e,a,n){"use strict";n.r(a);var t=n(85),r=n(518),s=n(0),c=n.n(s),o=n(517),l=n.n(o),d=n(2),i=n.n(d),u=n(524),p=n(522),m=n(39),h=n(8),b=n(508),v=n(18),f=n(24),g=n(17),E=n(509),C=n(62),N=n(134),y=n(510),O=n(511),j=n(512),B=n(513),I=n(514),V=n(7),k=n(749),T=n(5),M=n(528),A=n.n(M),S=n(858),x=n(551),w=n(546),P=n(4),R=function(e){var a=e.children,n=e.className,t=e.type,r=Object(T.a)(e,["children","className","type"]);return c.a.createElement("div",Object.assign({className:i()("vds-card-indicator",Object(P.a)({},"".concat("vds-card-indicator","--").concat(t),Boolean(t)),n)},r),a)};R.displayName="InputCardIndicator";var L=R,_=k.a.AMEX,F=k.a.AMEX_MASK,X=k.a.LENGTH_AMEX,D=k.a.LENGTH_DEFAULT,H=k.a.NON_AMEX_MASK,G=k.b.acceptedBrandsCheck,K=k.b.binCheck,U=k.b.brands,q=k.b.checkMod,z=k.b.filterAcceptedBrands,Y=k.b.possibleBrand,J=Object(s.forwardRef)((function(e,a){var n=e.acceptedCards,r=void 0===n?U:n,o=e.cardBins,l=e.checkMods,d=e.className,u=e.css,p=e.errorText,m=e.handleCardNumberChange,h=e.id,b=void 0===h?A.a.generate():h,v=e.inputMode,f=e.isValidCard,g=e.label,E=e.name,C=e.placeholder,N=e.shouldValidateAcceptedCards,y=e.type,O=e.validateMod11,j=Object(T.a)(e,["acceptedCards","cardBins","checkMods","className","css","errorText","handleCardNumberChange","id","inputMode","isValidCard","label","name","placeholder","shouldValidateAcceptedCards","type","validateMod11"]),B=Object(s.useState)(j.value?j.value:j.defaultValue?j.defaultValue:""),I=Object(t.a)(B,2),V=I[0],k=I[1],M=Object(s.useState)(V?Y(V,o):""),P=Object(t.a)(M,2),R=P[0],J=P[1],W=V?K(V,o):f,$=!N||!r||G(R,r),Q=N&&r?z(r):r,Z=Object(s.useState)(N?W&&$:W),ee=Object(t.a)(Z,2),ae=(ee[0],ee[1]),ne=Object(s.useState)(R===_?X:D),te=Object(t.a)(ne,2),re=te[0],se=te[1],ce=Object(s.useRef)(b).current,oe=$;j.mask=R===_?F:H,j.onChange=function(e){isNaN(e.target.value.replace(/\s/g,""))||function(e){var a=e.target.value,n=a.replace(/\s/g,""),t=Y(n,o),r=K(n,o),s=N&&Q,c=s?G(t,Q):oe;J(t),ae(s?r&&c:r),k(a);var d=!(a.length===re&&l)||q(n,O);se(t===_?X:D),m&&m(e,{brand:t,isSupported:c,isValid:s?r&&c:r,passesMod:d,value:e.target.value})}(e)};var le=Object(S.a)(j).getInputProps;return c.a.createElement("div",{className:i()("vds-input-card",d),css:u},c.a.createElement(x.a,Object.assign({},j,le,{errorText:p,id:ce,inputMode:v,label:g,maxLength:re,name:E,onBlur:j.onBlur,onFocus:j.onFocus,onKeyUp:j.onKeyUp,placeholder:C,type:y,value:V}),c.a.createElement(w.a,null,c.a.createElement(L,{type:U.includes(R)?R.toLowerCase():void 0}))))}));J.defaultProps={autoComplete:"cc-number",inputMode:"decimal",isValidCard:!0,name:"cardNumber",type:"text"},J.displayName="InputCard";var W=J,$=k.b.validator,Q=function(){var e=Object(s.useState)(null),a=Object(t.a)(e,2),n=a[0],r=a[1],o=Object(s.useState)(""),l=Object(t.a)(o,2),d=l[0],i=l[1],u=Object(s.useState)(""),p=Object(t.a)(u,2),m=p[0],b=p[1],v=Object(s.useState)(!0),E=Object(t.a)(v,2),C=E[0],N=E[1],y=Object(s.useState)(!0),O=Object(t.a)(y,2),j=O[0],B=O[1],I=function(e,a){return{EMPTY:"You need to enter a value",INVALID_BIN:"That is not a real card brand",INVALID_BIN_BRAND:"You sure that is a real ".concat(a," card?"),INVALID_GENERIC:"Something is not correct",NOT_SUPPORTED:"Apologies but we do not accept that card brand",PARTIAL:"Incomplete card number!"}[e]};return c.a.createElement(f.a,null,c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement(V.a,{tag:"h2"},"Input Card"),c.a.createElement(V.a,null,"All Card Brands Accepted with Full Validation"))),c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement("form",{noValidate:!0},c.a.createElement(W,{acceptedCards:["AMEX","DISCOVER","ELO","MASTERCARD","VISA"],cardBins:[400444,412356,506717,512346,650590,612345],checkMods:!0,errorText:m,handleCardNumberChange:function(e,a){var t=a.brand,s=a.isSupported,c=a.isValid,o=a.value,l=$(!1,{brand:n,checkMod11:!1,checkMods:!0,isSupported:s,isValid:c,value:o}),d=I(l,t);r(t),i(o),N(s),B(c),b(d)},helpText:"Enter your card number here",invalid:!j,label:"Card Number",onBlur:function(){var e=$(!0,{brand:n,checkMod11:!1,checkMods:!0,isSupported:C,isValid:j,value:d}),a=I(e,n);B(!0!==Boolean(a)),b(a)},placeholder:"15 to 16 digits",required:!0,shouldValidateAcceptedCards:!0,showErrorText:!0,showHelpText:!0,type:"tel",validateMod11:!0})))))},Z=n(519),ee=[n(520)],ae=n(521),ne="import React, { forwardRef, useRef, useState } from 'react';\nimport { arrayOf, bool, func, number, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport shortid from 'shortid';\nimport { constants, utilities } from '@visa/ui-utils/lib/js/card-number';\nimport { useTextMask } from '@visa/ui-utils/lib/js/text-mask/react';\nimport Input from '../input';\nimport InputOption from '../input-option';\nimport InputCardIndicator from '../input-card-indicator';\n\nconst CSS_PREFIX = 'vds-input-card';\n\nconst {\n  AMEX,\n  AMEX_MASK,\n  LENGTH_AMEX,\n  LENGTH_DEFAULT,\n  NON_AMEX_MASK\n} = constants;\n\nconst {\n  acceptedBrandsCheck,\n  binCheck,\n  brands,\n  checkMod,\n  filterAcceptedBrands,\n  possibleBrand\n} = utilities;\n\n/**\n * @return {JSX}\n */\nconst InputCard = forwardRef(({\n  acceptedCards = brands,\n  cardBins,\n  checkMods,\n  className,\n  css,\n  errorText,\n  handleCardNumberChange,\n  id = shortid.generate(),\n  inputMode,\n  isValidCard,\n  label,\n  name,\n  placeholder,\n  shouldValidateAcceptedCards,\n  type,\n  validateMod11,\n  ...remainingProps\n}, ref) => { // eslint-disable-line no-unused-vars\n  const [value, setValue] = useState(\n    remainingProps.value\n      ? remainingProps.value\n      : remainingProps.defaultValue\n        ? remainingProps.defaultValue\n        : ''\n  );\n  const [cardBrand, setCardBrand] = useState(value ? possibleBrand(value, cardBins) : '');\n  const isValidBin = value ? binCheck(value, cardBins) : isValidCard;\n\n  const isSupportedCard =\n    shouldValidateAcceptedCards && acceptedCards ? acceptedBrandsCheck(cardBrand, acceptedCards) : true;\n  const partnerAcceptedCards =\n    shouldValidateAcceptedCards && acceptedCards ? filterAcceptedBrands(acceptedCards) : acceptedCards;\n\n  // eslint-disable-next-line no-unused-vars\n  const [isValidCardNum, setIsValidCardNum] = useState(\n    shouldValidateAcceptedCards ? isValidBin && isSupportedCard : isValidBin\n  );\n  const [maxLength, setMaxLength] = useState(cardBrand === AMEX ? LENGTH_AMEX : LENGTH_DEFAULT);\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n  const __isPartnerAccepted = isSupportedCard;\n\n  /**\n   * @description check entered value for validity then pass that info to caller for its validation and own purposes\n   * Since caller owns and determines validation it will need to inform CardNumber if entered value is valid\n   * along with the desired error message.\n   *\n   * @param {SyntheticEvent} e\n   */\n  const handleValueChange = e => {\n    // e.persist();\n    const cardInput = e.target;\n    const enteredValue = cardInput.value;\n    const enteredCardNumber = enteredValue.replace(/\\s/g, '');\n    const possibleEnteredBrand = possibleBrand(enteredCardNumber, cardBins);\n    const isEnteredBinValid = binCheck(enteredCardNumber, cardBins);\n    const shouldCheckAcceptedBrands = shouldValidateAcceptedCards && partnerAcceptedCards;\n    const isEnteredCardSupported = shouldCheckAcceptedBrands\n      ? acceptedBrandsCheck(possibleEnteredBrand, partnerAcceptedCards)\n      : __isPartnerAccepted;\n\n    setCardBrand(possibleEnteredBrand);\n    setIsValidCardNum(shouldCheckAcceptedBrands ? isEnteredBinValid && isEnteredCardSupported : isEnteredBinValid);\n    setValue(enteredValue);\n\n    const shouldCheckMod = enteredValue.length === maxLength && checkMods;\n    const passesMod = shouldCheckMod ? checkMod(enteredCardNumber, validateMod11) : true;\n\n    setMaxLength(possibleEnteredBrand === AMEX ? LENGTH_AMEX : LENGTH_DEFAULT);\n\n    handleCardNumberChange &&\n      handleCardNumberChange(e, {\n        brand: possibleEnteredBrand,\n        isSupported: isEnteredCardSupported,\n        isValid: shouldCheckAcceptedBrands ? isEnteredBinValid && isEnteredCardSupported : isEnteredBinValid,\n        passesMod,\n        value: e.target.value\n      });\n  };\n\n  /**\n   * @description handle change event but only for numbers-only values so field error state is correct\n   * @param {SyntheticEvent} e\n   */\n  const handleOnChange = e => {\n    if (!isNaN(e.target.value.replace(/\\s/g, ''))) {\n      handleValueChange(e);\n    }\n  };\n\n  remainingProps.mask = cardBrand === AMEX ? AMEX_MASK : NON_AMEX_MASK;\n  remainingProps.onChange = handleOnChange;\n\n  const textMaskProps = useTextMask(remainingProps).getInputProps;\n\n  return (\n    <div\n      className={classnames(CSS_PREFIX, className)}\n      css={css}\n    >\n      <Input\n        {...remainingProps}\n        {...textMaskProps}\n        errorText={errorText}\n        id={uid}\n        inputMode={inputMode}\n        label={label}\n        maxLength={maxLength}\n        name={name}\n        onBlur={remainingProps.onBlur}\n        onFocus={remainingProps.onFocus}\n        onKeyUp={remainingProps.onKeyUp}\n        placeholder={placeholder}\n        // ref={ref}\n        type={type}\n        value={value}\n      >\n        <InputOption>\n          <InputCardIndicator\n            type={brands.includes(cardBrand) ? cardBrand.toLowerCase() : undefined}\n          />\n        </InputOption>\n      </Input>\n    </div>\n  );\n});\n\nInputCard.propTypes = {\n  /**\n   * @type {!array}\n   * Accepted cards\n   */\n  acceptedCards: arrayOf(string),\n\n  /**\n   * @type {!string}\n   * Auto complete\n   */\n  autoComplete: string,\n\n  /**\n   * @type {!array}\n   * Card Bins\n   */\n  cardBins: arrayOf(number).isRequired,\n\n  /**\n   * @type {!bool}\n   * Check Mods\n   */\n  checkMods: bool,\n\n  /**\n   * @type {!string}\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * @type {!string}\n   * @ignore\n   */\n  css: func,\n\n  /**\n   * @type {!string}\n   * Error\n   */\n  errorText: string,\n\n  /**\n   * @type {?function(Event)}\n   * Handle card number change\n   */\n  handleCardNumberChange: func,\n\n  /**\n   * While overriding this value is likely to not cause issues it is recommended to override with caution.\n   * See jsdoc for `name` for more information.\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Input Mode to force mobile screens to use large number pad\n   */\n  inputMode: string,\n\n  /**\n   * @type {bool}\n   * is valid card\n   */\n  isValidCard: bool,\n\n  /**\n   * Label\n   */\n  label: string,\n\n  /**\n   * @type {!string}\n   *\n   * Note: It is not recommended to override this name. It must follow a specific convention\n   to support card scanning and autocomplete.\n   * See: https://developers.google.com/web/fundamentals/design-and-ux/input/forms/#recommended_input_name_and_autocomplete_attribute_values\n  for more information.\n   * This name has been chosen based on experiences with real-world usage of applications.\n   *\n   * Variations of this value have not been tested and may not be supported, so override with caution.\n   *\n   * Overriding this value should be done only if there are multiple cardNumber fields present in the same form\n   or on the same screen at the same time.\n   */\n  name: string,\n\n  /**\n   * @type {?function(Event)}\n   * On Blur\n   */\n  onBlur: func,\n\n  /**\n   * @type {?function(Event)}\n   * On Focus\n   */\n  onFocus: func,\n\n  /**\n   * @type {?function(Event)}\n   * On Keyup\n   */\n  onKeyUp: func,\n\n  /**\n   * Placeholder\n   */\n  placeholder: string,\n\n  /**\n   * @type {!bool}\n   * Should validate accepted cards\n   */\n  shouldValidateAcceptedCards: bool,\n\n  /**\n   * Type\n   */\n  type: string,\n\n  /**\n   * @type {bool}\n   * Validate mod 11\n   */\n  validateMod11: bool\n};\n\nInputCard.defaultProps = {\n  autoComplete: 'cc-number',\n  inputMode: 'decimal',\n  isValidCard: true,\n  name: 'cardNumber',\n  type: 'text'\n};\n\nInputCard.displayName = 'InputCard';\n\nexport default InputCard;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),te="import React, { useState } from 'react';\nimport { utilities } from '@visa/ui-utils/lib/js/card-number';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport InputCard from '../../input-card';\nimport Row from '../../row';\nimport Typography from '../../typography';\n\nconst { validator } = utilities;\n\nconst InputCardExample = () => {\n  const [cardBrand, setCardBrand] = useState(null);\n  const [cardNumber, setCardNumber] = useState('');\n  const [error, setError] = useState('');\n  const [isSupportedBrand, setIsSupportedBrand] = useState(true);\n  const [isValidCardNumber, setIsValidCardNumber] = useState(true);\n  const acceptedCards = ['AMEX', 'DISCOVER', 'ELO', 'MASTERCARD', 'VISA'];\n  const cardBins = [\n    400444,\n    412356,\n    506717,\n    512346,\n    650590,\n    612345\n  ];\n  const checkMod11 = false;\n  const checkMods = true;\n\n  const getInlineError = (type, brand) => {\n    const inlineErrors = {\n      'EMPTY': 'You need to enter a value',\n      'INVALID_BIN': 'That is not a real card brand',\n      'INVALID_BIN_BRAND': `You sure that is a real ${brand} card?`,\n      'INVALID_GENERIC': 'Something is not correct',\n      'NOT_SUPPORTED': 'Apologies but we do not accept that card brand',\n      'PARTIAL': 'Incomplete card number!'\n    };\n\n    return inlineErrors[type];\n  };\n\n  const handleBlur = () => {\n    const isBlur = true;\n    const conditions = {\n      brand: cardBrand,\n      checkMod11,\n      checkMods,\n      isSupported: isSupportedBrand,\n      isValid: isValidCardNumber,\n      value: cardNumber\n    };\n\n    const errorType = validator(isBlur, conditions);\n    const errorMessage = getInlineError(errorType, cardBrand);\n\n    setIsValidCardNumber(Boolean(errorMessage) !== true);\n    setError(errorMessage);\n  };\n\n  const handleChange = (e, { brand, isSupported, isValid, value }) => {\n    const isBlur = false;\n    const conditions = {\n      brand: cardBrand,\n      checkMod11,\n      checkMods,\n      isSupported,\n      isValid,\n      value\n    };\n\n    const errorType = validator(isBlur, conditions);\n    const errorMessage = getInlineError(errorType, brand);\n\n    setCardBrand(brand);\n    setCardNumber(value);\n    setIsSupportedBrand(isSupported);\n    setIsValidCardNumber(isValid);\n    setError(errorMessage);\n  };\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag=\"h2\">Input Card</Typography>\n          <Typography>All Card Brands Accepted with Full Validation</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <form noValidate>\n            <InputCard\n              acceptedCards={acceptedCards}\n              cardBins={cardBins}\n              checkMods\n              errorText={error}\n              handleCardNumberChange={handleChange}\n              helpText=\"Enter your card number here\"\n              invalid={!isValidCardNumber}\n              label=\"Card Number\"\n              onBlur={handleBlur}\n              placeholder=\"15 to 16 digits\"\n              required\n              shouldValidateAcceptedCards\n              showErrorText\n              showHelpText\n              type=\"tel\"\n              validateMod11\n            />\n          </form>\n        </Col>\n      </Row>\n\n    </Grid>\n  );\n};\n\nexport default InputCardExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),re=function(e){var a=Object(r.a)({},e),n=Object(s.useState)({}),o=Object(t.a)(n,2),d=o[0],k=o[1];return Object(s.useEffect)((function(){try{k(ae.parse(ne))}catch(e){console.log("\n        React-docgen could not parse props for InputCard\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(f.a,{siblingOfStickyFooter:!0},c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement(V.a,{tag:"h1"},"Input Card"))),c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement(N.a,null,c.a.createElement(C.a,{tag:c.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/input-card"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"log",resolution:"low"}),"Input Card Example"),c.a.createElement(C.a,{tag:c.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/input-card/code"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),c.a.createElement(C.a,{tag:c.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/input-card/html"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/input-card"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/input-card")})},c.a.createElement(Q,a)),c.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/input-card/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/input-card/code")})},c.a.createElement(u.a,Object.assign({},u.b,{theme:p.a,code:te,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,s=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return c.a.createElement("div",r({key:a,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",s({key:a,token:e}))})))})))}))),c.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/input-card/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/input-card/html")})},c.a.createElement(u.a,Object.assign({},u.b,{theme:p.a,code:Z.format(l.a.renderToStaticMarkup(c.a.createElement(Q,a)),{css:"ignore",parser:"html",plugins:ee,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,s=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return c.a.createElement("div",r({key:a,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",s({key:a,token:e}))})))})))}))))),c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(E.a,{tag:"caption"},"Props"),c.a.createElement(B.a,null,c.a.createElement(I.a,{className:"vds-tr"},c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(y.a,null,d.props&&Object.entries(d.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return c.a.createElement(I.a,{className:"vds-tr",key:a,tabIndex:"0"},c.a.createElement(O.a,{className:"vds-td"},e[0]," ",e[1].required?c.a.createElement("sup",{style:{color:"red"}}," required"):""),c.a.createElement(O.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),c.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};re.displayName="InputCardExample";a.default=re},508:function(e,a,n){"use strict";var t=n(4),r=n(5),s=n(0),c=n.n(s),o=n(3),l=n(2),d=n.n(l),i=Object(s.forwardRef)((function(e,a){var n,s=e.children,o=e.className,l=e.customizableColumns,i=e.dividerLines,u=e.keyValuePairs,p=e.reveal,m=e.revealFirstColumn,h=e.revealLastColumn,b=e.rowSelection,v=e.size,f=e.stickyHeader,g=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},g,{className:d()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(l)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(i)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--").concat(b),Boolean(b)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(f)),n),o),ref:a}),s)}));i.propTypes={children:o.node,className:o.string,columns:Object(o.arrayOf)(Object(o.shape)({})),customizableColumns:o.bool,data:Object(o.arrayOf)(Object(o.shape)({})),dividerLines:o.bool,keyValuePairs:o.bool,reveal:o.bool,revealFirstColumn:o.bool,revealLastColumn:o.bool,rowSelection:Object(o.oneOf)(["multi-select","single-select"]),size:Object(o.oneOf)(["compact"]),stickyHeader:o.bool},i.displayName="DataTable",a.a=i},509:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=e.tag,o=Object(t.a)(e,["children","className","tag"]);return s.a.createElement(c,Object.assign({className:l()("vds-sr",r),ref:a},o),n)}));d.propTypes={children:c.node,className:c.string,tag:c.elementType},d.defaultProps={tag:"span"},d.displayName="Sr",a.a=d},510:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=Object(t.a)(e,["children","className"]);return s.a.createElement("tbody",Object.assign({className:l()("vds-tbody",r),ref:a},c),n)}));d.propTypes={children:c.node,className:c.string},d.displayName="Tbody",a.a=d},511:function(e,a,n){"use strict";var t=n(4),r=n(5),s=n(0),c=n.n(s),o=n(3),l=n(2),d=n.n(l),i=Object(s.forwardRef)((function(e,a){var n=e.children,s=e.className,o=e.textAlign,l=Object(r.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:d()("vds-td",Object(t.a)({},"vds-text--".concat(o),Boolean(o)),s),ref:a},l),n)}));i.propTypes={children:o.node,className:o.string,textAlign:Object(o.oneOf)(["center","left","right"])},i.displayName="Td",a.a=i},512:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=Object(t.a)(e,["children","className"]);return s.a.createElement("th",Object.assign({className:l()("vds-th",r),ref:a},c),n)}));d.propTypes={children:c.node,className:c.string},d.displayName="Th",a.a=d},513:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=Object(t.a)(e,["children","className"]);return s.a.createElement("thead",Object.assign({className:l()("vds-thead",r),ref:a},c),n)}));d.propTypes={children:c.node,className:c.string},d.displayName="Thead",a.a=d},514:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=Object(t.a)(e,["children","className"]);return s.a.createElement("tr",Object.assign({className:l()("vds-tr",r),ref:a},c),n)}));d.propTypes={children:c.node,className:c.string},d.displayName="Tr",a.a=d},525:function(e,a){},526:function(e,a){},542:function(e,a,n){"use strict";var t=n(4),r=n(5),s=n(0),c=n.n(s),o=n(2),l=n.n(o),d=function(e){var a,n=e.children,s=e.className,o=e.css,d=e.disabled,i=e.expanded,u=e.filled,p=e.focus,m=e.invalid,h=e.isTextarea,b=e.readOnly,v=Object(r.a)(e,["children","className","css","disabled","expanded","filled","focus","invalid","isTextarea","readOnly"]);return c.a.createElement("div",Object.assign({className:l()((a={},Object(t.a)(a,"".concat("vds-input"),!h),Object(t.a)(a,"".concat("vds-input","-textarea-container"),Boolean(h)),Object(t.a)(a,"".concat("vds-state","--disabled"),Boolean(d)),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(m)),Object(t.a)(a,"".concat("vds-state","--expanded"),Boolean(i)),Object(t.a)(a,"".concat("vds-state","--filled"),Boolean(u)),Object(t.a)(a,"".concat("vds-state","--focus"),Boolean(p)),Object(t.a)(a,"".concat("vds-state","--readonly"),Boolean(b)),Object(t.a)(a,"".concat("vds-state","--success"),"boolean"===typeof m&&!m),a),s),css:o},v),n)};d.displayName="InputContainer",a.a=d},543:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(3),o=n(2),l=n.n(o),d=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,c=Object(t.a)(e,["children","className"]);return s.a.createElement("label",Object.assign({className:l()("vds-input-label",r),ref:a},c),n)}));d.propTypes={children:c.node,className:c.string},d.displayName="InputLabel",a.a=d},544:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(2),o=n.n(c),l=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return s.a.createElement("div",Object.assign({className:o()("vds-input-bar",n)},r),a)};l.displayName="InputBar",a.a=l},545:function(e,a,n){"use strict";var t=n(4),r=n(5),s=n(0),c=n.n(s),o=n(2),l=n.n(o),d=function(e){var a,n=e.ariaAtomic,s=e.children,o=e.className,d=e.invalid,i=e.role,u=e.show,p=Object(r.a)(e,["ariaAtomic","children","className","invalid","role","show"]);return c.a.createElement("span",Object.assign({"aria-atomic":n,"aria-live":d?"assertive":"polite",className:l()("vds-input-message",(a={},Object(t.a)(a,"".concat("vds-state","--hidden"),!u),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(d)),a),o),role:i},p),s)};d.defaultProps={ariaAtomic:"true",role:"alert"},d.displayName="InputMessage",a.a=d},546:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(2),o=n.n(c),l=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return s.a.createElement("span",Object.assign({className:o()("vds-input-option",n)},r),a)};l.displayName="InputOption",a.a=l},549:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(2),o=n.n(c),l=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return s.a.createElement("span",Object.assign({className:o()("vds-input-hint",n)},r),a)};l.displayName="InputHint",a.a=l},551:function(e,a,n){"use strict";var t=n(4),r=n(85),s=n(5),c=n(0),o=n.n(c),l=n(2),d=n.n(l),i=n(528),u=n.n(i),p=n(542),m=n(543),h=n(544),b=n(549),v=n(553),f=n(3),g=Object(c.forwardRef)((function(e,a){var n=e.className,t=e.type,r=Object(s.a)(e,["className","type"]);return o.a.createElement("input",Object.assign({className:d()("vds-input--input-text",n),ref:a,type:t},r))}));g.propTypes={className:f.string,type:f.string},g.defaultProps={type:"text"},g.displayName="InputText";var E=g,C=n(545),N=n(546),y=n(18),O=Object(c.forwardRef)((function(e,a){var n=e.ariaLabel,l=e.checkmarkIcon,i=e.children,f=e.className,g=e.containerProps,y=e.css,O=e.disabled,j=e.errorIcon,B=e.errorText,I=e.expanded,V=e.helpIcon,k=e.helpText,T=e.id,M=void 0===T?u.a.generate():T,A=e.invalid,S=e.label,x=e.labelId,w=e.noValidate,P=e.onBlur,R=e.onChange,L=e.onFocus,_=e.placeholder,F=e.readOnly,X=e.showCheckmark,D=e.showErrorText,H=e.showHelpText,G=e.useNativePlaceholder,K=Object(s.a)(e,["ariaLabel","checkmarkIcon","children","className","containerProps","css","disabled","errorIcon","errorText","expanded","helpIcon","helpText","id","invalid","label","labelId","noValidate","onBlur","onChange","onFocus","placeholder","readOnly","showCheckmark","showErrorText","showHelpText","useNativePlaceholder"]),U=Object(c.useState)(!1),q=Object(r.a)(U,2),z=q[0],Y=q[1],J=Object(c.useState)(Boolean(K.value)||Boolean(K.defaultValue)),W=Object(r.a)(J,2),$=W[0],Q=W[1],Z=Object(c.useState)(!1),ee=Object(r.a)(Z,2),ae=ee[0],ne=ee[1],te=Object(c.useState)(A),re=Object(r.a)(te,2),se=re[0],ce=re[1],oe=Object(c.useRef)(M).current,le=function(e){w||(z&&ce(!e.target.checkValidity()||e.target.required&&!e.target.value.trim().length),z||!e.target.required||e.target.value.trim().length||ce(!0),!z||e.target.required||e.target.value.trim().length||ce(void 0))};Object(c.useEffect)((function(){Q(Boolean(K.defaultValue)||Boolean(K.value))}),[K.defaultValue,K.value]),Object(c.useEffect)((function(){ce(A)}),[A]);return o.a.createElement(p.a,Object.assign({className:d()(f),css:y,disabled:O,expanded:I,filled:$,focus:ae,readOnly:F,invalid:se},g),S?o.a.createElement(m.a,{id:x,htmlFor:oe},S):void 0,o.a.createElement(h.a,null,o.a.createElement(v.a,null,_&&!G?o.a.createElement(b.a,null,_):void 0,o.a.createElement(E,Object.assign({"aria-describedby":D||H?"input-message-".concat(oe):void 0,"aria-label":S?void 0:n,"aria-invalid":se,id:oe,disabled:O,onBlur:function(e){ne(!1),le(e),"function"===typeof P&&P(e)},onChange:function(e){Q(""!==e.target.value),"boolean"===typeof se&&le(e),Y(!0),"function"===typeof R&&R(e)},onFocus:function(e){ne(!0),"function"===typeof L&&L(e)},placeholder:G?_:void 0,readOnly:F,ref:a},K))),X&&"boolean"===typeof se&&!se&&Boolean(l)?o.a.createElement(N.a,{className:d()(Object(t.a)({},"".concat("vds-state","--hidden"),"boolean"===typeof se&&se))},l):void 0,i),function(){var e=null;return(H||D)&&(e=o.a.createElement(C.a,{id:"input-message-".concat(oe),show:H&&Boolean(k)||D&&Boolean(B),invalid:se},!se&&ae&&H&&Boolean(k)?o.a.createElement(c.Fragment,null,V," ",k):void 0,!0===se&&D&&Boolean(B)?o.a.createElement(c.Fragment,null,j," ",B):void 0)),e}())}));O.defaultProps={checkmarkIcon:o.a.createElement(y.a,{name:"checkmark",resolution:"low"}),errorIcon:o.a.createElement(y.a,{name:"error",resolution:"low"})},O.displayName="Input";a.a=O},553:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),c=n(2),o=n.n(c),l=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return s.a.createElement("div",Object.assign({className:o()("vds-input-input",n)},r),a)};l.displayName="InputInput",a.a=l},858:function(e,a,n){"use strict";n(758);var t=n(695),r=n.n(t),s=n(0),c=n(750);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.guide,n=void 0!==a&&a,t=e.mask,o=e.onChange,l=e.placeholderChar,d=void 0===l?"X":l,i=e.upperCaseValue,u=void 0!==i&&i,p=e.value,m=Object(s.useRef)(null),h=Object(s.useRef)(null),b=Object(s.useState)({adjustedCaretPosition:void 0,conformedValue:Object(c.j)(p)?"":p.toString(),placeholder:void 0}),v=r()(b,2),f=v[0],g=v[1],E=function(){return Object(c.g)({guide:n,inputElement:m.current,mask:t,placeholderChar:d,upperCaseValue:u})};return Object(s.useEffect)((function(){h.current=E();var e=h.current.update(),a=e.adjustedCaretPosition,n=e.conformedValue,t=e.previousPlaceholder;g({adjustedCaretPosition:a,conformedValue:n,placeholder:t})}),[n,t,d]),Object(s.useEffect)((function(){if(h.current){var e=h.current.update(p),a=e.adjustedCaretPosition,n=e.conformedValue,t=e.previousPlaceholder;g({adjustedCaretPosition:a,conformedValue:n,placeholder:t})}}),[p]),Object(s.useEffect)((function(){if(!m.current)throw new Error(c.a);if(!(Object(c.h)(t)&&t.length>0))throw new Error(c.b);h.current=E();var e=h.current.update(p),a=e.adjustedCaretPosition,n=e.conformedValue,r=e.previousPlaceholder;g({adjustedCaretPosition:a,conformedValue:n,placeholder:r})}),[]),{getInputProps:{onChange:function(e){var a=h.current.update(),n={adjustedCaretPosition:a.adjustedCaretPosition,conformedValue:a.conformedValue,placeholder:a.previousPlaceholder};g(n),"function"===typeof o&&o(e,n)},ref:m,value:f.conformedValue},meta:{adjustedCaretPosition:f.adjustedCaretPosition,placeholder:f.placeholder}}}n.d(a,"a",(function(){return o}))}}]);
//# sourceMappingURL=34.8acadbdd.chunk.js.map