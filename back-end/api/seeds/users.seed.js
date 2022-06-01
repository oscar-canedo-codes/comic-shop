const mongoose = require('mongoose');
const db = require('../db');
const User = require('../models/User');

const users = [
    { name: 'Marcos', lastName:'Villegas', age: 35 },
    { name: 'Oscar', lastName:'Cañedo', age: 31 },
    { name: 'Estefania', lastName:'Valdez' },        
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