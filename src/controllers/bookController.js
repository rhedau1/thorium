const { count } = require("console")
// const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const getBooksData= async function (req, res) {

    let allBooks= await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0})  //normally this is an asynchronous call..but await makes it synchronous
    console.log(allBooks)
 
    res.send({msg: allBooks})
}

// const booklist = async function(req, res){
//     let allList= await BookModel.find()
//     res.send({msg: booklist})
// }

const getBooksinYear = async function(req, res){
    // let book=req.body
    let Name = req.query.authorName
    let year = req.query.year
    
    // let booksyear= await BookModel.find( { authorName : "Chetan Bhagat" } )

    let booksyear = await BookModel.find( { $or: [ {authorName : "robert cialdini" } , {  "year": 2021 }]} )
    // let booksyear= await BookModel.find()
    res.send({msg: booksyear})
}

const getXINRBooks = async function(req, res){
    // let booksvalue= await BookModel.find()
    
    let booksvalue= await BookModel.find({ prices: {indianPrice: 100 }})
    // { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    res.send({msg: booksvalue})
}


const getRandombooks = async function(req, res){
    let random= await BookModel.find({ totalPages: { $gt:  500 },stockAvailable:true  })

    // let random= await BookModel.find()
    res.send({msg: random})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.booklist= booklist

// module.exports.getBooksinYear= getBooksinYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandombooks= getRandombooks