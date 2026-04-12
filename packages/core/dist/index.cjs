var import_node_module = require("node:module");
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= new WeakMap).get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  __moduleCache.set(from, entry);
  return entry;
};
var __moduleCache;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// src/index.ts
var exports_src = {};
__export(exports_src, {
  warmSandTheme: () => import_definitions.warmSandTheme,
  useTheme: () => import_ThemeProvider.useTheme,
  useInjectStyles: () => import_useInjectStyles.useInjectStyles,
  typography: () => import_tokens2.typography,
  tokenToCssProperty: () => import_types.tokenToCssProperty,
  synthwaveTheme: () => import_definitions.synthwaveTheme,
  spacing: () => import_tokens.spacing,
  slateTheme: () => import_definitions.slateTheme,
  shadows: () => import_tokens.shadows,
  semantic: () => import_tokens2.semantic,
  radii: () => import_tokens.radii,
  pipboyTheme: () => import_definitions.pipboyTheme,
  pacmanTheme: () => import_definitions.pacmanTheme,
  neuralTheme: () => import_definitions.neuralTheme,
  mossTheme: () => import_definitions.mossTheme,
  coralTheme: () => import_definitions.coralTheme,
  colors: () => import_tokens.colors,
  ThemeProvider: () => import_ThemeProvider.ThemeProvider
});
module.exports = __toCommonJS(exports_src);
