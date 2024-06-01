import {
  Grid_default,
  TextField_default
} from "/build/_shared/chunk-56FO4VJU.js";
import "/build/_shared/chunk-KJLNTWDN.js";
import "/build/_shared/chunk-4WY2DPXY.js";
import "/build/_shared/chunk-KJC6JVZ2.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-UVK4EPLJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/about.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1717226214003.4814";
}
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(React.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { container: true, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { id: "outlined-basic", label: "Outlined", variant: "outlined" }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 27,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 25,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default
};
//# sourceMappingURL=/build/routes/about-DRY5KEQI.js.map
