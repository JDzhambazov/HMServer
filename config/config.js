//const {DB_USER,DB_PASSWORD,DB_NAME} =require('../secretConfig')

module.exports = {
    development: {
        port: process.env.PORT || 5000 ,
        //databaseUrl:`mongodb+srv://${DB_USER}:${DB_PASSWORD}@jtests-1kakw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    },
    production: {}
};