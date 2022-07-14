"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_middleware = void 0;
const custom_services_1 = require("../custom_services");
const log_middleware = async (req, res, next) => {
    const { headers, url, params, body, method } = req;
    await custom_services_1.services.log.setInfo(`Request to ${url}`, { url, method, params, body, headers });
    next();
};
exports.log_middleware = log_middleware;
