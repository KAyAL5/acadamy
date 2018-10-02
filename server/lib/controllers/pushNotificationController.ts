import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
// import { webpush } from 'web-push';

import { PushNotificationSchema } from '../models/pushNotificationModel';

const webpush = require('web-push');

const PushNotification = mongoose.model('PushNotification', PushNotificationSchema);
export class PushNotificationController {
    
    // const vapidKeys = {
    //     "publicKey":"BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo",
    //     "privateKey":"PkVHOUKgY29NM7myQXXoGbp_bH_9j-cxW5cO-fGcSsA"
    // };
    
    public addNotification(req: Request, res: Response) {
        let newNotification = new PushNotification(req.body);

        newNotification.save((err, notification) => {
            if (err) {
                res.send(err);
            }
            res.json(notification);
        });
    }

    // Get all contacts (GET request)
    public getPushNotificationsOld(req: Request, res: Response) {
        PushNotification.find({}, (err, notification) => {
            if (err) {
                res.send(err);
            }
            res.json(notification);
        });
    }

    public getPushNotificationWithID (req: Request, res: Response) {           
        PushNotification.findById(req.params._id, (err, notification) => {
            if(err){
                res.send(err);
            }
            res.json(notification);
        });
    }

    public getPushNotifications(req: Request, res: Response) {
        PushNotification.find({}, (err, notification) => {
            if (err) {
                res.send(err);
            }
            //res.json(notification);
            const allSubscriptions = notification;
            
            console.log('KAAYYAALL',allSubscriptions);
            
            const notificationPayload = {
                "notification": {
                    "title": "Angular News",
                    "body": "Newsletter Available!",
                    "icon": "../assets/bell.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    },
                    "actions": [{
                        "action": "explore",
                        "title": "Go to the site"
                    }]
                }
            };
            console.log('KAAYYAALL',allSubscriptions);
            Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
                sub, JSON.stringify(notificationPayload) )))
                .then(() => res.status(200).json({message: 'Newsletter sent successfully.'}))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        });
    }
    
}