"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/main/Contact.jsx":
/*!*************************************!*\
  !*** ./components/main/Contact.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nconst Contact = ()=>{\n    _s();\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setForm({\n            ...form,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {\n            from_name: form.name,\n            to_name: \"Your Name or Business\",\n            from_email: form.email,\n            to_email: \"your-email@example.com\",\n            message: form.message\n        }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(()=>{\n            setLoading(false);\n            alert(\"Thank you! Your message has been sent.\");\n            setForm({\n                name: \"\",\n                email: \"\",\n                message: \"\"\n            });\n        }, (error)=>{\n            setLoading(false);\n            console.error(error);\n            alert(\"Something went wrong. Please try again later.\");\n        });\n    };\n//   return (\n//     <div className=\"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden\">\n//       <div className=\"flex-[0.75] bg-black-100 p-8 rounded-2xl\">\n//         <p className=\"text-xl text-white\">Get in touch</p>\n//         <h3 className=\"text-3xl font-bold text-white\">Contact.</h3>\n//         <form\n//           ref={formRef}\n//           onSubmit={handleSubmit}\n//           className=\"mt-12 flex flex-col gap-8\"\n//         >\n//           <label className=\"flex flex-col\">\n//             <span className=\"text-white font-medium mb-4\">Your Name</span>\n//             <input\n//               type=\"text\"\n//               name=\"name\"\n//               value={form.name}\n//               onChange={handleChange}\n//               placeholder=\"What's your good name?\"\n//               className=\"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n//             />\n//           </label>\n//           <label className=\"flex flex-col\">\n//             <span className=\"text-white font-medium mb-4\">Your Email</span>\n//             <input\n//               type=\"email\"\n//               name=\"email\"\n//               value={form.email}\n//               onChange={handleChange}\n//               placeholder=\"What's your email?\"\n//               className=\"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n//             />\n//           </label>\n//           <label className=\"flex flex-col\">\n//             <span className=\"text-white font-medium mb-4\">Your Message</span>\n//             <textarea\n//               rows={7}\n//               name=\"message\"\n//               value={form.message}\n//               onChange={handleChange}\n//               placeholder=\"What do you want to say?\"\n//               className=\"bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium\"\n//             />\n//           </label>\n//           <button\n//             type=\"submit\"\n//             className=\"bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary\"\n//           >\n//             {loading ? \"Sending...\" : \"Send\"}\n//           </button>\n//         </form>\n//       </div>\n//       <div className=\"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]\">\n//         {/* Add an Earth Canvas or an image here */}\n//       </div>\n//     </div>\n//   );\n};\n_s(Contact, \"58R0GEs1du47OQKk4ndsIAOg/ow=\");\n_c = Contact;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi9Db250YWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFZ0Q7QUFDVDtBQUV2QyxNQUFNSSxVQUFVOztJQUNkLE1BQU1DLFVBQVVKLDZDQUFNQTtJQUN0QixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7UUFDL0JNLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFFQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVOLElBQUksRUFBRU8sS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENULFFBQVE7WUFDTixHQUFHRCxJQUFJO1lBQ1AsQ0FBQ0UsS0FBSyxFQUFFTztRQUNWO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLENBQUNIO1FBQ3BCQSxFQUFFSSxjQUFjO1FBQ2hCTixXQUFXO1FBRVhULDZEQUNPLENBQ0hpQixPQUFPQSxDQUFDQyxHQUFHLENBQUNDLDhCQUE4QixFQUMxQ0YsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRSwrQkFBK0IsRUFDM0M7WUFDRUMsV0FBV2xCLEtBQUtFLElBQUk7WUFDcEJpQixTQUFTO1lBQ1RDLFlBQVlwQixLQUFLRyxLQUFLO1lBQ3RCa0IsVUFBVTtZQUNWakIsU0FBU0osS0FBS0ksT0FBTztRQUN2QixHQUNBVSxPQUFPQSxDQUFDQyxHQUFHLENBQUNPLDhCQUE4QixFQUUzQ0MsSUFBSSxDQUNIO1lBQ0VqQixXQUFXO1lBQ1hrQixNQUFNO1lBQ052QixRQUFRO2dCQUNOQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ1g7UUFDRixHQUNBLENBQUNxQjtZQUNDbkIsV0FBVztZQUNYb0IsUUFBUUQsS0FBSyxDQUFDQTtZQUNkRCxNQUFNO1FBQ1I7SUFFTjtBQUVGLGFBQWE7QUFDYiwwRkFBMEY7QUFDMUYsbUVBQW1FO0FBQ25FLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFFdEUsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixvQ0FBb0M7QUFDcEMsa0RBQWtEO0FBQ2xELFlBQVk7QUFDWiw4Q0FBOEM7QUFDOUMsNkVBQTZFO0FBQzdFLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMscURBQXFEO0FBQ3JELHVJQUF1STtBQUN2SSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLDhDQUE4QztBQUM5Qyw4RUFBOEU7QUFDOUUscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4QyxpREFBaUQ7QUFDakQsdUlBQXVJO0FBQ3ZJLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsOENBQThDO0FBQzlDLGdGQUFnRjtBQUNoRix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLHVEQUF1RDtBQUN2RCx1SUFBdUk7QUFDdkksaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUVyQixvQkFBb0I7QUFDcEIsNEJBQTRCO0FBQzVCLDRIQUE0SDtBQUM1SCxjQUFjO0FBQ2QsZ0RBQWdEO0FBQ2hELHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsZUFBZTtBQUVmLHFFQUFxRTtBQUNyRSx1REFBdUQ7QUFDdkQsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1A7R0FoSE0xQjtLQUFBQTtBQWtITixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiRTpcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcbWFpblxcQ29udGFjdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFJlcXVpcmVkIGZvciB1c2luZyBSZWFjdCBob29rcyBpbiBOZXh0LmpzIDEzKyBjb21wb25lbnRzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtKHtcclxuICAgICAgLi4uZm9ybSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmQoXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19TRVJWSUNFX0lELFxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZnJvbV9uYW1lOiBmb3JtLm5hbWUsXHJcbiAgICAgICAgICB0b19uYW1lOiBcIllvdXIgTmFtZSBvciBCdXNpbmVzc1wiLFxyXG4gICAgICAgICAgZnJvbV9lbWFpbDogZm9ybS5lbWFpbCxcclxuICAgICAgICAgIHRvX2VtYWlsOiBcInlvdXItZW1haWxAZXhhbXBsZS5jb21cIixcclxuICAgICAgICAgIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfUFVCTElDX0tFWVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LlwiKTtcclxuICAgICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOm10LTEyIGZsZXggeGw6ZmxleC1yb3cgZmxleC1jb2wtcmV2ZXJzZSBnYXAtMTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1bMC43NV0gYmctYmxhY2stMTAwIHAtOCByb3VuZGVkLTJ4bFwiPlxyXG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZVwiPkdldCBpbiB0b3VjaDwvcD5cclxuLy8gICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5Db250YWN0LjwvaDM+XHJcblxyXG4vLyAgICAgICAgIDxmb3JtXHJcbi8vICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XHJcbi8vICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTIgZmxleCBmbGV4LWNvbCBnYXAtOFwiXHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bSBtYi00XCI+WW91ciBOYW1lPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4vLyAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm5hbWV9XHJcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIGdvb2QgbmFtZT9cIlxyXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHB5LTQgcHgtNiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgZm9udC1tZWRpdW1cIlxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgPC9sYWJlbD5cclxuLy8gICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1tZWRpdW0gbWItNFwiPllvdXIgRW1haWw8L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbi8vICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuLy8gICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cclxuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIHlvdXIgZW1haWw/XCJcclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBweS00IHB4LTYgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgb3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvbnQtbWVkaXVtXCJcclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG1iLTRcIj5Zb3VyIE1lc3NhZ2U8L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4vLyAgICAgICAgICAgICAgIHJvd3M9ezd9XHJcbi8vICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4vLyAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IHdhbnQgdG8gc2F5P1wiXHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcHktNCBweC02IHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb250LW1lZGl1bVwiXHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuLy8gICAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHB5LTMgcHgtOCByb3VuZGVkLXhsIG91dGxpbmUtbm9uZSB3LWZpdCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzaGFkb3ctbWQgc2hhZG93LXByaW1hcnlcIlxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICB7bG9hZGluZyA/IFwiU2VuZGluZy4uLlwiIDogXCJTZW5kXCJ9XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpmbGV4LTEgeGw6aC1hdXRvIG1kOmgtWzU1MHB4XSBoLVszNTBweF1cIj5cclxuLy8gICAgICAgICB7LyogQWRkIGFuIEVhcnRoIENhbnZhcyBvciBhbiBpbWFnZSBoZXJlICovfVxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImVtYWlsanMiLCJDb250YWN0IiwiZm9ybVJlZiIsImZvcm0iLCJzZXRGb3JtIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VNQUlMSlNfU0VSVklDRV9JRCIsIk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQiLCJmcm9tX25hbWUiLCJ0b19uYW1lIiwiZnJvbV9lbWFpbCIsInRvX2VtYWlsIiwiTkVYVF9QVUJMSUNfRU1BSUxKU19QVUJMSUNfS0VZIiwidGhlbiIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main/Contact.jsx\n"));

/***/ })

});