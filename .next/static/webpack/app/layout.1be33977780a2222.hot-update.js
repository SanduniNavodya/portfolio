"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"da3e235e555d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkU6XFxwb3J0Zm9saW9cXGFwcFxcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYTNlMjM1ZTU1NWRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/main/Contact.jsx":
/*!*************************************!*\
  !*** ./components/main/Contact.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Contact = ()=>{\n    _s();\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setForm({\n            ...form,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        // Ensure this is correctly set to your email address\n        const recipientEmail = \"sanduninavodya01@gmail.com\";\n        // Pass data to the template using the correct placeholders\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"service_nplmq2g\", \"template_2uou43u\", {\n            from_name: form.name,\n            from_email: form.email,\n            to_email: recipientEmail,\n            message: form.message\n        }, \"SsEBR1JltDlhSdbuJ\" // Ensure this is set in your .env file\n        ).then(()=>{\n            setLoading(false);\n            alert(\"Thank you! Your message has been sent.\");\n            setForm({\n                name: \"\",\n                email: \"\",\n                message: \"\"\n            });\n        }, (error)=>{\n            setLoading(false);\n            console.error(error);\n            alert(\"Something went wrong. Please try again later.\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-[0.75] bg-black-100 p-8 rounded-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex py-4 ml-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500\",\n                        children: \"Contact me\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    ref: formRef,\n                    onSubmit: handleSubmit,\n                    className: \"mt-4 w-full md:w-1/2 flex flex-col gap-8 ml-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-medium mb-4\",\n                                    children: \"Your Name\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"name\",\n                                    value: form.name,\n                                    onChange: handleChange,\n                                    placeholder: \"What's your good name?\",\n                                    className: \"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-medium mb-4\",\n                                    children: \"Your Email\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: form.email,\n                                    onChange: handleChange,\n                                    placeholder: \"What's your email?\",\n                                    className: \"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-medium mb-4\",\n                                    children: \"Your Message\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    rows: 7,\n                                    name: \"message\",\n                                    value: form.message,\n                                    onChange: handleChange,\n                                    placeholder: \"What do you want to say?\",\n                                    className: \"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[150px]\",\n                            children: loading ? \"Sending...\" : \"Send\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\Contact.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Contact, \"hhlBGiwxYHcEzCSEV3KOlyRO7TU=\");\n_c = Contact;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi9Db250YWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWdEO0FBQ1Q7QUFFdkMsTUFBTUksVUFBVTs7SUFDWixNQUFNQyxVQUFVSiw2Q0FBTUE7SUFDdEIsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO1FBQzdCTSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNiO0lBRUEsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFTixJQUFJLEVBQUVPLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDVCxRQUFRO1lBQ0osR0FBR0QsSUFBSTtZQUNQLENBQUNFLEtBQUssRUFBRU87UUFDWjtJQUNKO0lBRUEsTUFBTUUsZUFBZSxDQUFDSDtRQUNsQkEsRUFBRUksY0FBYztRQUNoQk4sV0FBVztRQUVYLHFEQUFxRDtRQUNyRCxNQUFNTyxpQkFBaUI7UUFFdkIsMkRBQTJEO1FBQzNEaEIsNkRBQ1MsQ0FDRGtCLGlCQUEwQyxFQUMxQ0Esa0JBQTJDLEVBQzNDO1lBQ0lJLFdBQVduQixLQUFLRSxJQUFJO1lBQ3BCa0IsWUFBWXBCLEtBQUtHLEtBQUs7WUFDdEJrQixVQUFVUjtZQUNWVCxTQUFTSixLQUFLSSxPQUFPO1FBQ3pCLEdBQ0FXLG1CQUEwQyxDQUFDLHVDQUF1QztVQUVyRlEsSUFBSSxDQUNEO1lBQ0lqQixXQUFXO1lBQ1hrQixNQUFNO1lBQ052QixRQUFRO2dCQUNKQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ2I7UUFDSixHQUNBLENBQUNxQjtZQUNHbkIsV0FBVztZQUNYb0IsUUFBUUQsS0FBSyxDQUFDQTtZQUNkRCxNQUFNO1FBQ1Y7SUFFWjtJQUVBLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFHRCxXQUFVO2tDQUF1Rzs7Ozs7Ozs7Ozs7OEJBTXpILDhEQUFDNUI7b0JBQ0c4QixLQUFLL0I7b0JBQ0xnQyxVQUFVcEI7b0JBQ1ZpQixXQUFVOztzQ0FFViw4REFBQ0k7NEJBQU1KLFdBQVU7OzhDQUNiLDhEQUFDSztvQ0FBS0wsV0FBVTs4Q0FBOEI7Ozs7Ozs4Q0FDOUMsOERBQUNNO29DQUNHQyxNQUFLO29DQUNMakMsTUFBSztvQ0FDTE8sT0FBT1QsS0FBS0UsSUFBSTtvQ0FDaEJrQyxVQUFVN0I7b0NBQ1Y4QixhQUFZO29DQUNaVCxXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDSTs0QkFBTUosV0FBVTs7OENBQ2IsOERBQUNLO29DQUFLTCxXQUFVOzhDQUE4Qjs7Ozs7OzhDQUM5Qyw4REFBQ007b0NBQ0dDLE1BQUs7b0NBQ0xqQyxNQUFLO29DQUNMTyxPQUFPVCxLQUFLRyxLQUFLO29DQUNqQmlDLFVBQVU3QjtvQ0FDVjhCLGFBQVk7b0NBQ1pULFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNJOzRCQUFNSixXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQUtMLFdBQVU7OENBQThCOzs7Ozs7OENBQzlDLDhEQUFDVTtvQ0FDR0MsTUFBTTtvQ0FDTnJDLE1BQUs7b0NBQ0xPLE9BQU9ULEtBQUtJLE9BQU87b0NBQ25CZ0MsVUFBVTdCO29DQUNWOEIsYUFBWTtvQ0FDWlQsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUlsQiw4REFBQ1k7NEJBQ0dMLE1BQUs7NEJBQ0xQLFdBQVU7c0NBRVR2QixVQUFVLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBcEhNUDtLQUFBQTtBQXNITixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiRTpcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcbWFpblxcQ29udGFjdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFJlcXVpcmVkIGZvciB1c2luZyBSZWFjdCBob29rcyBpbiBOZXh0LmpzIDEzKyBjb21wb25lbnRzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoaXMgaXMgY29ycmVjdGx5IHNldCB0byB5b3VyIGVtYWlsIGFkZHJlc3NcclxuICAgICAgICBjb25zdCByZWNpcGllbnRFbWFpbCA9IFwic2FuZHVuaW5hdm9keWEwMUBnbWFpbC5jb21cIjtcclxuXHJcbiAgICAgICAgLy8gUGFzcyBkYXRhIHRvIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgY29ycmVjdCBwbGFjZWhvbGRlcnNcclxuICAgICAgICBlbWFpbGpzXHJcbiAgICAgICAgICAgIC5zZW5kKFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19TRVJWSUNFX0lELCAgLy8gRW5zdXJlIHRoaXMgaXMgc2V0IGluIHlvdXIgLmVudiBmaWxlXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1RFTVBMQVRFX0lELCAgLy8gRW5zdXJlIHRoaXMgaXMgc2V0IGluIHlvdXIgLmVudiBmaWxlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9uYW1lOiBmb3JtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9lbWFpbDogZm9ybS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB0b19lbWFpbDogcmVjaXBpZW50RW1haWwsICAvLyBTZW5kIHRvIHRoZSBzcGVjaWZpZWQgZW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1BVQkxJQ19LRVkgLy8gRW5zdXJlIHRoaXMgaXMgc2V0IGluIHlvdXIgLmVudiBmaWxlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptdC0xMiBmbGV4IHhsOmZsZXgtcm93IGZsZXgtY29sLXJldmVyc2UgZ2FwLTEwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtWzAuNzVdIGJnLWJsYWNrLTEwMCBwLTggcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBDZW50ZXJpbmcgdGhlIHRpdGxlIGluIHRoZSByb3cgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktNCBtbC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVs0MHB4XSBmb250LXNlbWlib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHRvLWN5YW4tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEFkanVzdGVkIHdpZHRoIG9mIHRoZSBmb3JtIGFuZCByZWR1Y2VkIHRoZSBtYXJnaW4gYmV0d2VlbiB0aXRsZSBhbmQgZm9ybSAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgbWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBnYXAtOCBtbC0wXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG1iLTRcIj5Zb3VyIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIGdvb2QgbmFtZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcHktNCBweC02IHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG1iLTRcIj5Zb3VyIEVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciBlbWFpbD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcHktNCBweC02IHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG1iLTRcIj5Zb3VyIE1lc3NhZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17N31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSB3YW50IHRvIHNheT9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcHktNCBweC02IHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBidXR0b24tcHJpbWFyeSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgdy1bMTUwcHhdXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJTZW5kaW5nLi4uXCIgOiBcIlNlbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbWFpbGpzIiwiQ29udGFjdCIsImZvcm1SZWYiLCJmb3JtIiwic2V0Rm9ybSIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVjaXBpZW50RW1haWwiLCJzZW5kIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VNQUlMSlNfU0VSVklDRV9JRCIsIk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQiLCJmcm9tX25hbWUiLCJmcm9tX2VtYWlsIiwidG9fZW1haWwiLCJORVhUX1BVQkxJQ19FTUFJTEpTX1BVQkxJQ19LRVkiLCJ0aGVuIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJlZiIsIm9uU3VibWl0IiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main/Contact.jsx\n"));

/***/ })

});