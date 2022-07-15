//require('dotenv').config();

import "reflect-metadata";
import * as express from 'express';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import {resolvers} from './core/data_layer/graph/resolvers';
import {mongoConnect} from './core/service_layer/config/conn';
import {route} from "./core/service_layer/routes";
import {log_middleware} from "./core/service_layer/middleware/logRequest.middleware";
import {controllers} from "./core/controller";
const serverless = require('serverless-http');

const app = express();
//const port = process.env.PORT!;
const pfx = process.env.REST_ROUTE_PREFIX!;
const {test} = controllers;

(async () => {

    // GraphQL 
    const schema = await buildSchema({
        resolvers: resolvers
    });

    //Middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('public'));
    
    //GraphQl Load
    app.use(
        "/graphql",
        graphqlHTTP(async (req, res, params) => ({
            schema,
            introspection: false,
            customFormatErrorFn: (err) => {
                return ({
                    message: err.message,
                    path: err.path,
                    name: err.name,
                    stack: err.stack
                })
            }
        }))
    );
    app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

    //Routes Load
    //app.use(`${pfx}/test`, log_middleware, test.testMethod);

    app.use(pfx, route);

    mongoConnect
})();

module.exports.handler = serverless(app);