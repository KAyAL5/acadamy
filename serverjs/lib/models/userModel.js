const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
/**
 * Email regex
 */
const rexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const UserSchema = new Schema({
    
    //_id: mongoose.Schema.Types.ObjectId,
    email : {
        lowercase: true,
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

UserSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

UserSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User', UserSchema)