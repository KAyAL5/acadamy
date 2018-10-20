import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from 'cookie-parser';
import * as mongoose from "mongoose";

import config from '../lib/config/config';

import { CmrRoutes } from "./routes/crmRoutes";
import { UserRoutes } from "./routes/UserRoutes";

class App {
    
    public mongoUrl: string = config.DB_HOST; 
    public app: express.Application;

    public routeCrm: CmrRoutes = new CmrRoutes();
    public routeuser: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routeuser.routes(this.app);
        this.routeCrm.routes(this.app);
        //==================================
        // let router: express.Router = express.Router();
        // router.use('/api/cmr',CmrRoutes);
        // router.use('/admin', adminRouter);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(this.allowCrossDomain);
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useCreateIndex: true, useNewUrlParser: true });    
    }

    // add cors
    private allowCrossDomain(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }

}

export default new App().app;