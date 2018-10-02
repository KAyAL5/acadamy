import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PushNotificationSchema = new Schema({
    title: {
        type: String,
        required: 'Enter push notification title'
    },
    msg: {
        type: String,
        required: 'Enter push notification message'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});