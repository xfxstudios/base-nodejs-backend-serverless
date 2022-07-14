"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
class TestController {
    async testMethod(req, res) {
        const data = {
            error: false,
            message: "Hola Mundo"
        };
        return res.json(data);
    }
}
exports.TestController = TestController;
