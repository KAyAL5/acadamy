const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');
var mongoose = require('mongoose');

var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var config = require('../lib/config/config');

const app = express();

//var indexRouter = require('./routes/index');
var usersRouter = require('../lib/routes/userRoutes');


var mongoUrl = config.db.host;

// add mongoose 
mongoose.connect(mongoUrl);

// add cors 
app.use(cors({
    origin: 'http://localhost:4200'
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.json());
// //support application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(this.allowCrossDomain);

//app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//import * as express from "express";
// import * as bodyParser from "body-parser";
//import * as cookieParser from 'cookie-parser';
//import * as mongoose from "mongoose";

// import config from '../lib/config/config';

// import { CmrRoutes } from "./routes/crmRoutes";
// import { UserRoutes } from "./routes/UserRoutes";

// public mongoUrl: string = config.DB_HOST; 
// public app: express.Application;

// public routeCrm: CmrRoutes = new CmrRoutes();
// public routeuser: UserRoutes = new UserRoutes();

// constructor() {
//     this.app = express();
//     this.config();
//     this.mongoSetup();
//     this.routeuser.routes(this.app);
//     this.routeCrm.routes(this.app);
// }

// private config(): void{
//     // support application/json type post data
//     this.app.use(bodyParser.json());
//     //support application/x-www-form-urlencoded post data
//     this.app.use(bodyParser.urlencoded({ extended: false }));
//     this.app.use(cookieParser());
//     this.app.use(this.allowCrossDomain);
// }

module.exports = app;