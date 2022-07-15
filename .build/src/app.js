"use strict";
//require('dotenv').config();
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const type_graphql_1 = require("type-graphql");
const express_graphql_1 = require("express-graphql");
const graphql_playground_middleware_express_1 = require("graphql-playground-middleware-express");
const resolvers_1 = require("./core/data_layer/graph/resolvers");
const conn_1 = require("./core/service_layer/config/conn");
const routes_1 = require("./core/service_layer/routes");
const serverless = require('serverless-http');
const app = express();
//const port = process.env.PORT!;
const pfx = process.env.REST_ROUTE_PREFIX;
(async () => {
    // GraphQL 
    const schema = await type_graphql_1.buildSchema({
        resolvers: resolvers_1.resolvers
    });
    //Middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('public'));
    //GraphQl Load
    app.use("/graphql", express_graphql_1.graphqlHTTP(async (req, res, params) => ({
        schema,
        introspection: false,
        customFormatErrorFn: (err) => {
            return ({
                message: err.message,
                path: err.path,
                name: err.name,
                stack: err.stack
            });
        }
    })));
    app.get("/playground", graphql_playground_middleware_express_1.default({ endpoint: "/graphql" }));
    //Routes Load
    app.use(pfx, routes_1.route);
    conn_1.mongoConnect;
})();
module.exports.handler = serverless(app);
