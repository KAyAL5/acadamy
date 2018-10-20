import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import config from '../config/config';

import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export class UserController {

    decodedtoken: string ='';

    constructor() {}

    public async addNewUser(req: Request, res: Response) {
        const hash = await bcrypt.hash(req.body.password.toString().toLowerCase(), config.SALT_ROUNDS);
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash
        });

        await newUser.save()
            .then(function (doc) {
                return res.status(201).json(doc);
            })
            .catch(function (err) {
                return res.status(501).json({ message: 'Error registering user.' })
            })
    }

    public registeredUserlogin(req: Request, res: Response, next: NextFunction) {
        const promise = User.findOne({ email: req.body.email }).exec();

        promise.then((user) => {
            if (user) {
                const isValidUser =  bcrypt.compareSync(req.body.password.toString().toLowerCase(), user.password);
                if (isValidUser) {
                    // generate token
                    const token = jwt.sign({ email: user.email }, config.JWT_ENCRYPTION, { expiresIn: config.JWT_EXPIRATION });
                    return res.status(200).json(token);
                } else {
                    return res.status(501).json({ message: 'Invalid Credentials' });
                }
            }
            else {
                return res.status(501).json({ message: 'User email is not registered.' })
            }
         });
        promise.catch(function (err) {
            return res.status(501).json({ message: 'Some internal server error' });
        })
    }

    // Get all users (GET request)
    public async getUsers(req: Request, res: Response): Promise<any> {
        await User.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getUserByID(req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }

    private hashPassword(password): string {
        console.log('hashPassword', password);
        return bcrypt.hashSync(password, 10);
    }

    private isValid(password, hashedpassword) {
        return bcrypt.compareSync(hashedpassword, password);
    }
}