"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.noContent = exports.serverError = void 0;
const serverError = (error) => ({
    statusCode: 500,
    body: error
});
exports.serverError = serverError;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
//# sourceMappingURL=http-helper.js.map