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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"ac45b9081e2c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkU6XFxwb3J0Zm9saW9cXGFwcFxcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhYzQ1YjkwODFlMmNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/main/EarthCanvas.js":
/*!****************************************!*\
  !*** ./components/main/EarthCanvas.js ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.core.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n// components/EarthCanvas.js\n\nvar _s = $RefreshSig$();\n\n\nconst EarthCanvas = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"EarthCanvas.useEffect\": ()=>{\n            // Create the scene\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            // Set up the camera with perspective projection\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            // Create the WebGL renderer and add it to the DOM\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                alpha: true\n            }); // Transparent background\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            renderer.setClearColor(0x000000, 0); // Transparent background (alpha = 0)\n            // Append the renderer's canvas to the DOM\n            document.getElementById('earthCanvas').appendChild(renderer.domElement);\n            // Create a sphere geometry\n            const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(5, 32, 32); // Radius, width segments, height segments\n            // Load the texture for the sphere\n            const texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('/sphere.png'); // Ensure this path is correct for your image\n            // Create material using the texture (basic material for a simple, unlit sphere)\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n                map: texture\n            });\n            // Create the sphere mesh and add it to the scene\n            const sphere = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n            scene.add(sphere);\n            // Set the camera position to see the entire sphere\n            camera.position.z = 10;\n            // Function to animate the scene (rotate the sphere)\n            const animate = {\n                \"EarthCanvas.useEffect.animate\": function() {\n                    requestAnimationFrame(animate);\n                    sphere.rotation.y += 0.01; // Rotate the sphere around the Y-axis\n                    renderer.render(scene, camera);\n                }\n            }[\"EarthCanvas.useEffect.animate\"];\n            animate();\n            // Clean up the renderer when the component is unmounted\n            return ({\n                \"EarthCanvas.useEffect\": ()=>{\n                    renderer.dispose(); // Dispose resources when the component is removed\n                }\n            })[\"EarthCanvas.useEffect\"];\n        }\n    }[\"EarthCanvas.useEffect\"], []); // Empty dependency array to run the effect once when the component mounts\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow-hidden\",\n        id: \"earthCanvas\"\n    }, void 0, false, {\n        fileName: \"E:\\\\portfolio\\\\components\\\\main\\\\EarthCanvas.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EarthCanvas, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = EarthCanvas;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EarthCanvas);\nvar _c;\n$RefreshReg$(_c, \"EarthCanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi9FYXJ0aENhbnZhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDRCQUE0Qjs7O0FBQ007QUFDSDtBQUUvQixNQUFNRSxjQUFjOztJQUNsQkYsZ0RBQVNBO2lDQUFDO1lBQ1IsbUJBQW1CO1lBQ25CLE1BQU1HLFFBQVEsSUFBSUYsd0NBQVc7WUFFN0IsZ0RBQWdEO1lBQ2hELE1BQU1JLFNBQVMsSUFBSUosb0RBQXVCLENBQUMsSUFBSU0sT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXLEVBQUUsS0FBSztZQUU1RixrREFBa0Q7WUFDbEQsTUFBTUMsV0FBVyxJQUFJVCxnREFBbUIsQ0FBQztnQkFBRVcsT0FBTztZQUFLLElBQUkseUJBQXlCO1lBQ3BGRixTQUFTRyxPQUFPLENBQUNOLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztZQUN0REMsU0FBU0ksYUFBYSxDQUFDLFVBQVUsSUFBSSxxQ0FBcUM7WUFFMUUsMENBQTBDO1lBQzFDQyxTQUFTQyxjQUFjLENBQUMsZUFBZUMsV0FBVyxDQUFDUCxTQUFTUSxVQUFVO1lBRXRFLDJCQUEyQjtZQUMzQixNQUFNQyxXQUFXLElBQUlsQixpREFBb0IsQ0FBQyxHQUFHLElBQUksS0FBSywwQ0FBMEM7WUFFaEcsa0NBQWtDO1lBQ2xDLE1BQU1vQixVQUFVLElBQUlwQixnREFBbUIsR0FBR3NCLElBQUksQ0FBQyxnQkFBZ0IsNkNBQTZDO1lBRTVHLGdGQUFnRjtZQUNoRixNQUFNQyxXQUFXLElBQUl2QixvREFBdUIsQ0FBQztnQkFBRXlCLEtBQUtMO1lBQVE7WUFFNUQsaURBQWlEO1lBQ2pELE1BQU1NLFNBQVMsSUFBSTFCLHVDQUFVLENBQUNrQixVQUFVSztZQUN4Q3JCLE1BQU0wQixHQUFHLENBQUNGO1lBRVYsbURBQW1EO1lBQ25EdEIsT0FBT3lCLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHO1lBRXBCLG9EQUFvRDtZQUNwRCxNQUFNQztpREFBVTtvQkFDZEMsc0JBQXNCRDtvQkFDdEJMLE9BQU9PLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJLE1BQU0sc0NBQXNDO29CQUNqRXpCLFNBQVMwQixNQUFNLENBQUNqQyxPQUFPRTtnQkFDekI7O1lBRUEyQjtZQUVBLHdEQUF3RDtZQUN4RDt5Q0FBTztvQkFDTHRCLFNBQVMyQixPQUFPLElBQUksa0RBQWtEO2dCQUN4RTs7UUFDRjtnQ0FBRyxFQUFFLEdBQUcsMEVBQTBFO0lBRWxGLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLElBQUc7Ozs7OztBQUtUO0dBdkRNdEM7S0FBQUE7QUF5RE4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkU6XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXG1haW5cXEVhcnRoQ2FudmFzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvRWFydGhDYW52YXMuanNcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jb25zdCBFYXJ0aENhbnZhcyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBzY2VuZVxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIFxyXG4gICAgLy8gU2V0IHVwIHRoZSBjYW1lcmEgd2l0aCBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uXHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgV2ViR0wgcmVuZGVyZXIgYW5kIGFkZCBpdCB0byB0aGUgRE9NXHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7IC8vIFRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLCAwKTsgLy8gVHJhbnNwYXJlbnQgYmFja2dyb3VuZCAoYWxwaGEgPSAwKVxyXG4gICAgXHJcbiAgICAvLyBBcHBlbmQgdGhlIHJlbmRlcmVyJ3MgY2FudmFzIHRvIHRoZSBET01cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aENhbnZhcycpLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHNwaGVyZSBnZW9tZXRyeVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNSwgMzIsIDMyKTsgLy8gUmFkaXVzLCB3aWR0aCBzZWdtZW50cywgaGVpZ2h0IHNlZ21lbnRzXHJcbiAgICBcclxuICAgIC8vIExvYWQgdGhlIHRleHR1cmUgZm9yIHRoZSBzcGhlcmVcclxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9zcGhlcmUucG5nJyk7IC8vIEVuc3VyZSB0aGlzIHBhdGggaXMgY29ycmVjdCBmb3IgeW91ciBpbWFnZVxyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgbWF0ZXJpYWwgdXNpbmcgdGhlIHRleHR1cmUgKGJhc2ljIG1hdGVyaWFsIGZvciBhIHNpbXBsZSwgdW5saXQgc3BoZXJlKVxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmUgfSk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSB0aGUgc3BoZXJlIG1lc2ggYW5kIGFkZCBpdCB0byB0aGUgc2NlbmVcclxuICAgIGNvbnN0IHNwaGVyZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBzY2VuZS5hZGQoc3BoZXJlKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGNhbWVyYSBwb3NpdGlvbiB0byBzZWUgdGhlIGVudGlyZSBzcGhlcmVcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTA7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYW5pbWF0ZSB0aGUgc2NlbmUgKHJvdGF0ZSB0aGUgc3BoZXJlKVxyXG4gICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICBzcGhlcmUucm90YXRpb24ueSArPSAwLjAxOyAvLyBSb3RhdGUgdGhlIHNwaGVyZSBhcm91bmQgdGhlIFktYXhpc1xyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuICAgIFxyXG4gICAgLy8gQ2xlYW4gdXAgdGhlIHJlbmRlcmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTsgLy8gRGlzcG9zZSByZXNvdXJjZXMgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWRcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biB0aGUgZWZmZWN0IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ4bDpmbGV4LTEgeGw6aC1hdXRvIG1kOmgtWzU1MHB4XSBoLVszNTBweF0gb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgaWQ9XCJlYXJ0aENhbnZhc1wiXHJcbiAgICA+XHJcbiAgICAgIHsvKiBUaGUgM0QgY2FudmFzIHdpbGwgYmUgcmVuZGVyZWQgaGVyZSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFYXJ0aENhbnZhcztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlRIUkVFIiwiRWFydGhDYW52YXMiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJ0ZXh0dXJlIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwic3BoZXJlIiwiTWVzaCIsImFkZCIsInBvc2l0aW9uIiwieiIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyb3RhdGlvbiIsInkiLCJyZW5kZXIiLCJkaXNwb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main/EarthCanvas.js\n"));

/***/ })

});