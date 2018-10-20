const jwt = require('jsonwebtoken');

const config = require('../config/config')
const User = require('../models/userModel');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }

    // Create a user
    //const hash = await bcrypt.hash(req.body.password, config.SALT_ROUNDS);
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: 'hash'
    });

    // Save user in the database
    newUser.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });

};

// user login 
exports.login = (req, res) => {
    const promise = User.findOne({ email: req.body.email }).exec();
    promise.then(function (doc) {
        if (doc) {
            if (doc.isValid(req.body.password)) {
                // generate token
                const secret = JSON.stringify({
                    role: doc.role,
                    id: doc._id,
                    email: doc.email,
                    username: doc.username
                });
                const token = jwt.sign({ username: doc.username }, secret, { expiresIn: config.jwt.expiration });
                return res.status(200).json(token);
            } else {
                return res.status(501).json({ message: ' Invalid Credentials' });
            }
        }
        else {
            return res.status(501).json({ message: 'User email is not registered.' })
        }
    });

    promise.catch(function (err) {
        return res.status(501).json({ message: 'Some internal error' });
    });
}

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// check email exist
exports.isEmailExist = (req, res) => {
    return new Promise((resolve, reject) => {
        User.findOne({ email: data.email })
            .exec((err, doc) => {
                if (err) return reject(err)
                if (doc) {
                    return reject(new Error(  data.email + ' is already exists.'))
                } else {
                    resolve();
                }
                // const user = new User(data)
                // user.save((err) => {
                //     if (err) return reject(err)
                //     resolve()
                // })
            })
    })
};

// Find a single user with a userId
exports.findOne = (req, res, next) => {
    // const promise = User.findOne(req.params).exec();
    // promise.then(function (doc) {
    //     if (doc) {
    //         return res.status(200).json(doc);
    //     }
    //     else {
    //         return res.status(501).json({ message: 'Invalid User' })
    //     }
    // });
    // promise.catch(function (err) {
    //     return res.status(501).json({ message: 'Some internal error' });
    // });

    getByuserId(req.params).then((doc)=>{
        return res.status(200).json(doc);
    })
    // promise1.then((doc)=>{
    //     return res.status(200).json(doc);
    // });
    next();
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {

};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {

};

exports.getByuserId = (userId) => {
    console.log(userId);
    // return new Promise((resolve, reject) => {
    //     User.findOne(userId)
    //         .exec((err, doc) => {
    //             if (err) return reject(err)
    //             if (doc) {
    //                 return reject(new Error(' Not Found.'))
    //             } else {
    //                 resolve();
    //             }
    //         })
    // })

    const promise = User.findOne({_id: userId}).exec();
    promise.then((doc) => {
        if (doc) {
            console.log('resolve');
            return promise.resolve(doc);
        }
        else {
            console.log('resolve invalid');
            return promise.resolve({ message: 'Invalid User' });
        }
    });
    promise.catch(function (err) {
        console.log('reject');
        return promise.reject({ message: 'Some internal error' });
    });    
}

exports.generateToken = (userEmail) => {
    return jwt.sign({ unique: userEmail, timeStamp: Date.now }, config.keys.jsonwebtoken)
}