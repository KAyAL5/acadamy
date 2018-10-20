module.exports = (app) => {
    const users = require('../controllers/userController');

    // Create a new user
    app.post('/users', users.create);

    app.post('/api/user/login', users.login);

    // Retrieve all users
    app.get('/api/user/users', users.findAll);

    // Retrieve a single user with userId
    app.get('/api/user/:_id', users.findOne);

    // Update a user with userId
    app.put('/users/:userId', users.update);

    // Delete a user with userId
    app.delete('/users/:userId', users.delete);
}