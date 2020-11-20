const env = process.env.NODE_ENV || 'development';
global.__appPath = __dirname;
const config = require('./config/config')[env];
const app = require('express')();
const adressRouter = require('./routes/adressrouts')

const mongoose = require('mongoose')

//MongoDB locally
const { DB_NAME } = require('./secretConfig')
const dbPath = `mongodb://localhost:27017/${DB_NAME}`;

//MongoDB cloud
//change DB_USER and DB_PASSWORD in secretConfig.js
//const dbPath = config.databaseUrl;


mongoose.connect(dbPath,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(`Database: ${DB_NAME} is runing`)
    })

require('./config/express')(app);
app.use('/',adressRouter)

app.get('/', (req, res, next) => {
    res.send({
        user: 'jhljhg',
        pass: 'fffffff'
    })
})


app.listen(config.port, console.log(`Server Listening on port ${config.port}! Now its up to you...`));