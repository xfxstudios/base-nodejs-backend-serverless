"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const node_smart_logger_1 = require("node_smart_logger");
const index_helper_1 = require("./helpers/index.helper");
const log = new node_smart_logger_1.default();
exports.services = {
    ...index_helper_1.helpers,
    log
};
