import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { UserSchema } from '../models/user';

var express = require('express');
var router = express.Router();
//var User = require('../models/user');

const User = mongoose.model('User', UserSchema);

export class UserController {

    decodedToken: String = '';

    // post
    public register(req: Request, res: Response) {

        //let newUser = new User(req.body);
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: User.hashPassword(req.body.password),
            creation_dt: Date.now()
        });

        let promise = newUser.save();
        promise.then(function (doc) {
            return res.status(201).json(doc);
        })
        promise.catch(function (err) {
            return res.status(501).json({ message: 'Error registering user.' })
        })
    }

    //post
    public login(req: Request, res: Response) {
        let promise = User.findOne({ email: req.body.email }).exec();
        promise.then(function (user) {
            if (user) {
                if (user.isValid(req.body.password)) {
                    // generate token
                    let token = jwt.sign({ username: user.username }, 'secret', { expiresIn: '3h' });
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
        })
    }

    //Get
    public username(req: Request, res: Response) {
        this.verifyToken(req, res);
        router.get('/username', this.verifyToken, function (req, res, next) {
            return res.status(200).json(this.decodedToken.username);
        })
    }

    private verifyToken(req: Request, res: Response) {
        let token = req.query.token;
        jwt.verify(token, 'secret', function (err, tokendata) {
            if (err) {
                return res.status(400).json({ message: ' Unauthorized request' });
            }
            if (tokendata) {
                this.decodedToken = tokendata;
                //next();
            }
        })
    }
}
