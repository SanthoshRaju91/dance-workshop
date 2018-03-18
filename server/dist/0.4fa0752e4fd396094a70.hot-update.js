require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./app/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _http = __webpack_require__("http");

var _http2 = _interopRequireDefault(_http);

var _server = __webpack_require__("./app/server.js");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _http.createServer)(_server2.default);
var currentApp = _server2.default;

server.listen(3000, function () {
    console.log('Server listening on port 3000');
});

if (true) {
    module.hot.accept(["./app/server.js"], function () {
        server.removeListener('request', currentApp);
        server.on('request', _server2.default);
        currentApp = _server2.default;
    });
}

/***/ }),

/***/ "./app/server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "express":
false,

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })

};
//# sourceMappingURL=0.4fa0752e4fd396094a70.hot-update.js.map