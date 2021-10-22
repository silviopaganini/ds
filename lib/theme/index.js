import React from "react";
import { ThemeProvider as TP } from "theme-ui";
var theme = {
    colors: {
        primary: "0xFF0000",
    },
    buttons: {
        primary: {
            cursor: "pointer",
        },
    },
};
var ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return (React.createElement(TP, { theme: theme }, children));
};
export { theme, ThemeProvider };
