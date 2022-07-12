const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
import {services} from "../custom_services";
import appConfig from "./appConfig";

const { appStage } = appConfig;

const host = process.env.SEQUELIZE_HOST!;
const name = process.env.SEQUELIZE_DB_NAME!;
const user = process.env.SEQUELIZE_USER!;
const drive = process.env.SEQUELIZE_DRIVE!;
const password = process.env.SEQUELIZE_PASSWORD!;


const sequelize = new Sequelize(name, user, password, {
	host: host,
	dialect: 'mysql',
	models: ['../../app/model/mysql']
});

const mongoConnect = ( async () => {
	const mongo = `${appConfig.dataBase[appStage].db_url}:${appConfig.dataBase[appStage].db_port}/${appConfig.dataBase[appStage].db_name}`;

	let mongoOptions = {};

	await Object.keys(appConfig.dataBase[appStage].config).map((item) => {
		let conf = appConfig.dataBase[appStage].config;
		mongoOptions = {
			...mongoOptions,
			[item]: conf[item]
		}
	})

	const mongoCon = mongoose.connect(mongo, mongoOptions);
	mongoose.connection.on('error', async (err) => {
		await services.log.setError(`Mongodb: ${err.message}`);
	});
	mongoose.connection.on('connect', async () => {
		await services.log.setInfo("MongoDB connected");
	});
	return mongoCon
})();

export {
	sequelize,
	mongoConnect
};