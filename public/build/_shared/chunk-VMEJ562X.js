import {
  createTheme_default,
  red_default
} from "/build/_shared/chunk-KJC6JVZ2.js";
import {
  createHotContext
} from "/build/_shared/chunk-UVK4EPLJ.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/src/ClientStyleContext.tsx
var React = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ClientStyleContext.tsx"
  );
  import.meta.hot.lastModified = "1717170904000";
}
var ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/theme.ts"
  );
  import.meta.hot.lastModified = "1717170904000";
}
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

export {
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-VMEJ562X.js.map
