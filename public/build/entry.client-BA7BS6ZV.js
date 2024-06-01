import {
  require_client
} from "/build/_shared/chunk-O4BRYNJ4.js";
import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-VMEJ562X.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-226QHLOR.js";
import {
  CssBaseline_default,
  ThemeProvider
} from "/build/_shared/chunk-KJLNTWDN.js";
import {
  CacheProvider,
  createCache,
  init_emotion_cache_browser_esm,
  init_emotion_react_browser_esm
} from "/build/_shared/chunk-KJC6JVZ2.js";
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

// app/entry.client.tsx
var React = __toESM(require_react());
var ReactDOM = __toESM(require_client());
init_emotion_react_browser_esm();

// app/src/createEmotionCache.ts
init_emotion_cache_browser_esm();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/createEmotionCache.ts"
  );
  import.meta.hot.lastModified = "1717170904000";
}
function createEmotionCache() {
  return createCache({ key: "css" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/entry.client.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1717170904000";
}
function ClientCacheProvider({
  children
}) {
  _s();
  const [cache, setCache] = React.useState(createEmotionCache());
  const clientStyleContextValue = React.useMemo(() => ({
    reset() {
      setCache(createEmotionCache());
    }
  }), []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext_default.Provider, { value: clientStyleContextValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(ClientCacheProvider, "SCB+MKDmvJaXD2ZKWjt8CMfkuGc=");
_c = ClientCacheProvider;
var hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { theme: theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/entry.client.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 49,
      columnNumber: 36
    }, this));
  });
};
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
var _c;
$RefreshReg$(_c, "ClientCacheProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
//# sourceMappingURL=/build/entry.client-BA7BS6ZV.js.map
