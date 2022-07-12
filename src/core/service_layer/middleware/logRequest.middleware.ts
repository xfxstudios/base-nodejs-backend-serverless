import {NextFunction, Request, Response} from "express";
import {services} from "../custom_services";

export const log_middleware = async (req:Request, res:Response, next:NextFunction) => {
    const {headers, url, params, body, method} = req;
    await services.log.setInfo(`Request to ${url}`, {url, method, params, body, headers});
    next();
}