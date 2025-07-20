"use strict";
// React Hook to get screen width
// TODO: make this support screen height as well once that is needed
// TODO: figure out if debouncing this is needed
// Blame robin for the bad naming here <3
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenSize = void 0;
var react_1 = require("react");
var ScreenSize = function () {
    var _a = (0, react_1.useState)(0), width = _a[0], setWidth = _a[1];
    (0, react_1.useEffect)(function () {
        var updateWidth = function () { return setWidth(window.innerWidth); };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return function () { return window.removeEventListener("resize", updateWidth); };
    }, []);
    return width;
};
exports.ScreenSize = ScreenSize;
