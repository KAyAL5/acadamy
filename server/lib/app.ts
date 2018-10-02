import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { CmrRoutes } from "./routes/crmRoutes";
import { PushNotificationRoutes } from "./routes/pushNotificationRoutes";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/CRMdb';
    public routePrv: CmrRoutes = new CmrRoutes();
    public routesPushNotification: PushNotificationRoutes = new PushNotificationRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);   
        this.routesPushNotification.routes(this.app);
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
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;