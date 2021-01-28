const mongoose = require('mongoose');

// const connect = require("../connect")

const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

const Book = require("../models/book")
const Cover = require("../models/cover")


mongoose.connect("mongodb://librarian:libpassword@localhost:27017/Books?authSource=admin", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
        if(err) return console.log(err);
});



exports.getBooksData = async () => {
    const books = Book.find({id:1})
    // return books
    console.log("exports.getBooksData= ~ books---------------------------->", books)
    return books;
};

exports.getBookData = async ( bookId ) => {
    // return Book.findById( bookId );
    return booksTestData.find( book => book.id == bookId );
};

exports.postBookData = async (newData) => {
    const book = Book.create({ title : newData.title , description : newData. description, coverId: newData.coverId });
    await book.save();
    return book;
};

exports.patchBookData = async (newData) => {
    const book = Book.findByIdAndUpdate( newData.id, { title : newData.title , description : newData. description, coverId: newData.coverId });
    await book.save();
    return book;
};

exports.deleteBookData = async (bookId) => {
    return Book.remove({ id : bookId })
};

exports.getCoversData = async () => { 
    // return Cover.find()
    return coversTestData
};

exports.getCoverData = async (coverId) => {
    return Cover.findById( coverId );
};

exports.postCoverData = async (newData) => {
    const cover = Cover.create({ name: newData.name });
    await cover.save();
    return cover;    
};

exports.patchCoverData = async (newData) => {
    const cover = Cover.findByIdAndUpdate(newData.id, { name: newData.name });
    await cover.save();
    return cover;
}; 

exports.deleteCoverData = async (coverId) => {
    return Cover.remove({ id : coverId })
};  