const mongoose = require('mongoose');

// const connect = require("../connect")

const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

const Book = require("../models/book")
const Cover = require("../models/cover")

mongoose.connect("mongodb://librarian:libpassword@localhost:27017/LIBRARY?authSource=admin&readPreference=primary", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
        if(err) return console.log(err);
});


exports.getBooksData = async () => {
    const books = Book.find({})
    return books
};

exports.getBookData = async ( bookId ) => {
    return Book.findById( bookId );
};

exports.postBookData = async (newData) => {
    const book = Book.create({ title : newData.title , description : newData. description, coverId: newData.coverId });
    return book.save();
};

exports.patchBookData = async (newData) => {
    const book = Book.findByIdAndUpdate( newData.id, { title : newData.title , description : newData. description, coverId: newData.coverId });
    return book.save();
};

exports.deleteBookData = async (bookId) => {
    return Book.deleteOne({ id : bookId })
};

exports.getCoversData = async () => { 
    return Cover.find({})
};

exports.getCoverData = async (coverId) => {
    return Cover.findById( coverId );
};

exports.postCoverData = async (newData) => {
    const cover = Cover.create({ name: newData.name });
    return cover.save();    
};

exports.patchCoverData = async (newData) => {
    const cover = Cover.findByIdAndUpdate(newData.id, { name: newData.name });
    return cover.save();
}; 

exports.deleteCoverData = async (coverId) => {
    return Cover.deleteOne({ id : coverId })
};  