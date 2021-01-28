let mongoose = require('mongoose');

// let connect = require('../connect');
// let pool = connect.connect_db('db Dictionaries Utils run');

const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

const Book = require("../models/book")
const Cover = require("../models/cover")

exports.getBooksData = async () => {
    // return Book.all();
    return booksTestData;
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
    // return Cover.all()
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