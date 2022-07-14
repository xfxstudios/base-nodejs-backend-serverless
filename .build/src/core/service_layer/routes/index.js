"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const logRequest_middleware_1 = require("../middleware/logRequest.middleware");
const route = express_1.Router();
exports.route = route;
//Routes Here!!!
const { test } = controller_1.controllers;
route.get('/test', logRequest_middleware_1.log_middleware, test.testMethod);
