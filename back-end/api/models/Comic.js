const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comicSchema = new Schema({

        hero:{type: String, required:true},
        illustrator:{type: String},
        author: {type: String, required:true},
        year:{type: Number, required:true},
        description: {type: String},
        image:{type: String},
        issue:{type: Number, required:true},
        
},{
    timestamps:true
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;