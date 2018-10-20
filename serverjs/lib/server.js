const express = require('express');
const bodyParser = require('body-parser');

const config = require('../lib/config/config');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = config.db;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUrl = dbConfig.host;
// Connecting to the database
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": 'GET user request successfully from js!!!!'});
});

// Require User routes
require('./routes/userRoutes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});