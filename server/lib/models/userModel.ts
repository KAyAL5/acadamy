import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
/**
 * Email regex
 */
const rexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


export const UserSchema = new Schema({
    
    //_id: mongoose.Schema.Types.ObjectId,
    email : {
        trim: true,
        type: String,
        required: 'Enter a email',
        unique : true,
		match: rexEmail
    },
    role: {
        default: 1,
        type: Number,
    },
    username: {
        trim: true,
        type: String,
        required: 'Enter user name'
    },
    password: {
        trim: true,
        type: String,
        required: true         
    },
    company: {
        trim: true,
        type: String            
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
