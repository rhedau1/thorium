const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    
        name:String,    //Catcher in the Rye
        category:String, //book
        price:{
            type:Number, require:true } //mandatory property
     
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users