import { Request, Response, NextFunction } from "express";

import verifyToken from '../handlers/verifyToken'; 
import { UserController } from "../controllers/userController";

export class UserRoutes {

    public userController: UserController = new UserController();

    public routes(app): void {

        // For test
        app.route('/api/user')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET user request successfulll!!!!'
                })
            });

        // Register a new user
        app.route('/api/user/register')
            .post(this.userController.addNewUser);
        
        // Login a register user
        app.route('/api/user/login')
            .post(verifyToken, this.userController.registeredUserlogin);

        // Get all users
        app.route('/api/user/users')
            .get(this.userController.getUsers);


        // get a specific user
        app.route('/api/user/:userId')
            .get(this.userController.getUserByID);

        /** Remember that we don’t have to call app.route(‘/contact/:contactId’) 
        * every single time for GET, PUT or DELETE a single contact. You can combine them
        */
        // update a specific user
        // app.route('/contact/:contactId')
        //     .put(this.userController.updateContact)

        app.route('/api/user/:userId')
            // edit specific user
            .get(this.userController.getUserByID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser)

        // delete a specific contact
        app.route('/contact/:contactId')
            .delete(this.userController.deleteUser)
    }
}
