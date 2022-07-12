
class AlgoMas {

    async estoAlgo(){
        return "Clase Algo";
    }

}

const algoMas = new AlgoMas();


export const helpers = {
    algo: ()=> {return "Algo"},
    algoMas,
}