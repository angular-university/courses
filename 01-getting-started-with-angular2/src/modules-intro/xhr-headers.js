"use strict";
var http_1 = require("@angular/http");
function xhrHeaders() {
    var headers = new http_1.Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return { headers: headers };
}
exports.xhrHeaders = xhrHeaders;
//# sourceMappingURL=xhr-headers.js.map