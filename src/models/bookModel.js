const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type: String, required: true}, 
    prices: {
        indianPrice: String,
        europePrice: String,
    },
     
    tags: [String],
    authorName: String,
    totalPages : Number,
    year : {type: Number, default: 2021},
    // isPublished: Boolean,
    stockAvailable: Boolean
    
    // sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover