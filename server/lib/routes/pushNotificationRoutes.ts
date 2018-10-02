import { Request, Response } from "express";

import { PushNotificationController } from "../controllers/pushNotificationController";

export class PushNotificationRoutes {

    public pushNotificationController: PushNotificationController = new PushNotificationController();

    public routes(app): void {

        app.route('/api')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET Push Notificationrequest successfulll!!!!'
                })
            })

        // Get all contacts
        app.route('/api/pushNotification')
            .get(this.pushNotificationController.getPushNotifications);


        // get a specific contact
        app.route('/api/pushNotification/:notificationId')
            .get(this.pushNotificationController.getPushNotificationWithID);

        // Create a new Push Notification
        app.route('/api/pushNotification')
            .post(this.pushNotificationController.addNotification);

        // Contact 
        app.route('/api/pushNotification')
            .get((req: Request, res: Response) => {           
                res.status(200).send({
                    message: 'GET push notification request successfulll!!!!'
                })
            })
    }
}