"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
exports.__esModule = true;
exports.isUnexpected = void 0;
var responseMap = {
    "POST /:analyze-conversations": ["200"],
    "POST /analyze-conversations/jobs": ["200", "202"],
    "GET /analyze-conversations/jobs": ["200", "202"]
};
function isUnexpected(response) {
    var lroOriginal = response.headers["x-ms-original-url"];
    var url = new URL(lroOriginal !== null && lroOriginal !== void 0 ? lroOriginal : response.request.url);
    var method = response.request.method;
    var pathDetails = responseMap["".concat(method, " ").concat(url.pathname)];
    if (!pathDetails) {
        return true;
    }
    return !pathDetails.includes(response.status);
}
exports.isUnexpected = isUnexpected;
