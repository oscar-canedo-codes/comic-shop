const mongoose = require('mongoose');
const db = require('../../config/db');
const User = require('../models/User');


const users = [
    { 
        email: 'Marcos@upgrade.com', 
        password: 'upgrade123',
        name: 'Marcos',
        role: 'admin',
    },
    { 
        email: 'Oscar@upgrade.com', 
        password: 'upgrade123',
        name: 'Oscar',
        role: 'admin',
    },
    { 
        email: 'Estefania@upgrade.com', 
        password: 'upgrade123',
        name: 'Estefania',
        role: 'user',
    },

];


const usersDocument = users.map(user => new User(user));

db.connectDB()
    .then(async() => {
        const allUsers = await User.find();
        if (allUsers.length > 0) {
            await User.collection.drop();
        }
    })
    .catch(err => console.error(`Error deleting information from the DB ${err}`))
    .then(async () =>{
        await User.insertMany(usersDocument)
    })
    .catch(err => console.error (`Error creating document in DB: ${err}`))
    .finally(() => mongoose.disconnect());