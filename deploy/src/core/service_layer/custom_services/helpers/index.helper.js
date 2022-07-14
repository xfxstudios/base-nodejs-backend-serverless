"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
class AlgoMas {
    async estoAlgo() {
        return "Clase Algo";
    }
}
const algoMas = new AlgoMas();
exports.helpers = {
    algo: () => { return "Algo"; },
    algoMas,
};
