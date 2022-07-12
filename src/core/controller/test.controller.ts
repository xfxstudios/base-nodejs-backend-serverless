import {Request, Response} from "express";
import {services} from "../service_layer/custom_services";

export class TestController {

    async testMethod(req:Request, res:Response){

        const data = {
            error: false,
            message: "Hola Mundo"
        };

        return res.json(data)
    }

}