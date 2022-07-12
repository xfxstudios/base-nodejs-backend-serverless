import { Router } from 'express';
import {controllers} from '../../controller';
import {log_middleware} from '../middleware/logRequest.middleware';
const route = Router();
//Routes Here!!!
const {test} = controllers;

route.get('/test', log_middleware, test.testMethod);


export {
    route
};