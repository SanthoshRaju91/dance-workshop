require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./app/server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.all('*', function (req, res) {
    res.json({
        ok: true
    });
});

exports.default = app;

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

};
//# sourceMappingURL=0.e74026a1fa075aff66b7.hot-update.js.map