"use strict";(self.webpackChunkkim_aide=self.webpackChunkkim_aide||[]).push([[735],{"./src/components/ChatMenu/ChatBtn/ChatBtn.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HasNotification:()=>HasNotification,TooManyNotification:()=>TooManyNotification,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"components/ChatMenu/ChatBtn",component:__webpack_require__("./src/components/ChatMenu/ChatBtn/ChatBtn.tsx").A,argTypes:{notificationCount:{description:"현재 알림의 개수를 의미합니다.",control:{type:"number"}},maxDisplayNotificationCount:{description:"표시할 알림의 최대 개수입니다.",control:{type:"number"}},onClick:{description:"본 컴포넌트를 클릭했을 때 호출할 콜백 함수를 의미합니다.",control:{type:"object"}}},parameters:{docs:{description:{component:"`ChatBtn`은 채팅창을 여는 데 사용하는 버튼 컴포넌트입니다. 부가적인 기능으로 새로운 채팅의 개수를 시각적으로 보여줍니다."}}}},Default={args:{notificationCount:0,maxDisplayNotificationCount:99}},HasNotification={args:{notificationCount:5,maxDisplayNotificationCount:99}},TooManyNotification={args:{notificationCount:123,maxDisplayNotificationCount:99}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    notificationCount: 0,\n    maxDisplayNotificationCount: 99\n  }\n}",...Default.parameters?.docs?.source},description:{story:"알림이 없는 경우에는 알림의 개수를 표시하지 않습니다.",...Default.parameters?.docs?.description}}},HasNotification.parameters={...HasNotification.parameters,docs:{...HasNotification.parameters?.docs,source:{originalSource:"{\n  args: {\n    notificationCount: 5,\n    maxDisplayNotificationCount: 99\n  }\n}",...HasNotification.parameters?.docs?.source}}},TooManyNotification.parameters={...TooManyNotification.parameters,docs:{...TooManyNotification.parameters?.docs,source:{originalSource:"{\n  args: {\n    notificationCount: 123,\n    maxDisplayNotificationCount: 99\n  }\n}",...TooManyNotification.parameters?.docs?.source},description:{story:"현재 알림의 개수(`notificationCount`)가 표시할 알림의 최대 개수(`maxDisplayNotificationCount`)보다 큰 경우에는, 알림의 최대 개수로 표시되고, `+`가 뒤에 붙습니다.\n굉장히 많은 알림의 개수를 표시할 때 사용할 수 있습니다.\n- 아래는 알림이 `123`개, 알림의 최대 개수가 `99`개인 예시입니다.",...TooManyNotification.parameters?.docs?.description}}};let __namedExportsOrder=["Default","HasNotification","TooManyNotification"];try{Default.displayName="Default",Default.__docgenInfo={description:"알림이 없는 경우에는 알림의 개수를 표시하지 않습니다.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatMenu/ChatBtn/ChatBtn.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/components/ChatMenu/ChatBtn/ChatBtn.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{TooManyNotification.displayName="TooManyNotification",TooManyNotification.__docgenInfo={description:"현재 알림의 개수(`notificationCount`)가 표시할 알림의 최대 개수(`maxDisplayNotificationCount`)보다 큰 경우에는, 알림의 최대 개수로 표시되고, `+`가 뒤에 붙습니다.\n굉장히 많은 알림의 개수를 표시할 때 사용할 수 있습니다.\n- 아래는 알림이 `123`개, 알림의 최대 개수가 `99`개인 예시입니다.",displayName:"TooManyNotification",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatMenu/ChatBtn/ChatBtn.stories.tsx#TooManyNotification"]={docgenInfo:TooManyNotification.__docgenInfo,name:"TooManyNotification",path:"src/components/ChatMenu/ChatBtn/ChatBtn.stories.tsx#TooManyNotification"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ChatMenu/ChatBtn/ChatBtn.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChatBtn_ChatBtn}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");let Container=emotion_styled_browser_esm.A.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n	position: relative;\n	width: 40px;\n	height: 40px;\n	background: none;\n\n	& > svg {\n		width: 100%;\n		height: 100%;\n		color: ",";\n		transition: color 0.2s;\n	}\n\n	&:hover > svg {\n		color: ",";\n	}\n"])),_ref=>{let{theme}=_ref;return theme.colors.WHITE},_ref2=>{let{theme}=_ref2;return theme.colors.LIGHT_GRAY}),NotificationCircle=emotion_styled_browser_esm.A.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n	position: absolute;\n	right: 0;\n	bottom: 0;\n	display: inline-block;\n	min-width: 16px;\n	height: 16px;\n	border-radius: 7px;\n	background-color: ",";\n	font-weight: 700;\n	font-size: 12px;\n	line-height: 16px;\n"])),_ref3=>{let{theme}=_ref3;return theme.colors.TOMATO});var svg=__webpack_require__("./src/assets/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let ChatBtn=_ref=>{let{notificationCount,maxDisplayNotificationCount,onClick}=_ref,notificationDisplayText=notificationCount>maxDisplayNotificationCount?"".concat(maxDisplayNotificationCount,"+"):String(notificationCount),ariaLabel=notificationCount>0?"채팅방 열기. 확인하지 않은 ".concat(notificationCount,"개의 채팅이 있습니다."):"채팅방 열기";return(0,jsx_runtime.jsxs)(Container,{type:"button","aria-label":ariaLabel,onClick:onClick,children:[(0,jsx_runtime.jsx)(svg.yw,{}),notificationCount>0&&(0,jsx_runtime.jsx)(NotificationCircle,{children:notificationDisplayText})]})},ChatBtn_ChatBtn=ChatBtn;try{ChatBtn.displayName="ChatBtn",ChatBtn.__docgenInfo={description:"",displayName:"ChatBtn",props:{notificationCount:{defaultValue:null,description:"",name:"notificationCount",required:!0,type:{name:"number"}},maxDisplayNotificationCount:{defaultValue:null,description:"",name:"maxDisplayNotificationCount",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatMenu/ChatBtn/ChatBtn.tsx#ChatBtn"]={docgenInfo:ChatBtn.__docgenInfo,name:"ChatBtn",path:"src/components/ChatMenu/ChatBtn/ChatBtn.tsx#ChatBtn"})}catch(__react_docgen_typescript_loader_error){}}}]);