"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_client_1 = require("@azure-rest/core-client");
function createClient(Endpoint, credentials, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : "".concat(Endpoint, "/language");
    options.apiVersion = (_b = options.apiVersion) !== null && _b !== void 0 ? _b : "2022-05-15-preview";
    options = __assign(__assign({}, options), { credentials: {
            scopes: ["https://cognitiveservices.azure.com/.default"],
            apiKeyHeaderName: "ocp-apim-subscription-key"
        } });
    var userAgentInfo = "azsdk-js-ai-language-conversations-rest/1.0.0-beta.1";
    var userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? "".concat(options.userAgentOptions.userAgentPrefix, " ").concat(userAgentInfo)
        : "".concat(userAgentInfo);
    options = __assign(__assign({}, options), { userAgentOptions: {
            userAgentPrefix: userAgentPrefix
        } });
    var client = (0, core_client_1.getClient)(baseUrl, credentials, options);
    return client;
}
exports["default"] = createClient;
