export default {
    appStage: process.env.APP_STAGE!,
    dataBase: {
        local: {
            db_url: process.env.MONGO_DB_URL!,
            db_port: process.env.MONGO_DB_PORT!,
            db_name: process.env.SERVICE_DB_NAME,
            config: {
                useNewUrlParser: process.env.LOCAL_USE_URL_PARSE!,
                useUnifiedTopology: process.env.LOCAL_USE_UNIFIED_TOPOLOGY!,
                retrywrites: process.env.LOCAL_RETRY_WRITES!
            }
        },
        docker: {
            db_url: process.env.MONGO_DB_URL!,
            db_port: process.env.MONGO_DB_PORT!,
            db_name: process.env.MONGO_DB_NAME!,
            config: {
                useNewUrlParser: process.env.LOCAL_USE_URL_PARSE!,
                useUnifiedTopology: process.env.LOCAL_USE_UNIFIED_TOPOLOGY!,
                retrywrites: process.env.LOCAL_RETRY_WRITES!
            }
        },
        kube: {
            db_url:                     process.env.MONGO_DB_URL!,
            db_port:                    process.env.MONGO_DB_PORT!,
            db_name:                    process.env.MONGO_DB_NAME!,
            config:{
                useNewUrlParser:        process.env.LOCAL_USE_URL_PARSE!, 
                useUnifiedTopology:     process.env.LOCAL_USE_UNIFIED_TOPOLOGY!,
                retrywrites:            process.env.LOCAL_RETRY_WRITES!,
                ssl:                    process.env.DEV_SSL!,
                sslValidate:            process.env.DEV_SSL_VALIDATE!,
                directConnection: process.env.DIRECT_CONNECTION!,
                authSource: process.env.AUTH_SOURCE!
            }
        }
    }
}