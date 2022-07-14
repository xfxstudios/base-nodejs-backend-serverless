"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
const custom_services_1 = require("../custom_services");
const appConfig_1 = require("./appConfig");
const { appStage } = appConfig_1.default;
const host = process.env.SEQUELIZE_HOST;
const name = process.env.SEQUELIZE_DB_NAME;
const user = process.env.SEQUELIZE_USER;
const drive = process.env.SEQUELIZE_DRIVE;
const password = process.env.SEQUELIZE_PASSWORD;
const sequelize = new Sequelize(name, user, password, {
    host: host,
    dialect: 'mysql',
    models: ['../../app/model/mysql']
});
exports.sequelize = sequelize;
const mongoConnect = (async () => {
    const mongo = `${appConfig_1.default.dataBase[appStage].db_url}:${appConfig_1.default.dataBase[appStage].db_port}/${appConfig_1.default.dataBase[appStage].db_name}`;
    let mongoOptions = {};
    await Object.keys(appConfig_1.default.dataBase[appStage].config).map((item) => {
        let conf = appConfig_1.default.dataBase[appStage].config;
        mongoOptions = {
            ...mongoOptions,
            [item]: conf[item]
        };
    });
    const mongoCon = mongoose.connect(mongo, mongoOptions);
    mongoose.connection.on('error', async (err) => {
        await custom_services_1.services.log.setError(`Mongodb: ${err.message}`);
    });
    mongoose.connection.on('connect', async () => {
        await custom_services_1.services.log.setInfo("MongoDB connected");
    });
    return mongoCon;
})();
exports.mongoConnect = mongoConnect;
