import React from "react";
import { ThemeProvider as TP } from "theme-ui";
var theme = {
    colors: {
        primary: "#00FFFF",
    },
    buttons: {
        primary: {
            cursor: "pointer",
        },
    },
};
var internalTheme = theme;
var ThemeProvider = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? internalTheme : _b, children = _a.children;
    return React.createElement(TP, { theme: theme }, children);
};
export { theme, ThemeProvider };
