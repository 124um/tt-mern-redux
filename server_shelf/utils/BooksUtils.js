let mongoose = require('mongoose');

// let connect = require('../connect');
// let pool = connect.connect_db('db Dictionaries Utils run');
const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

const Book = require("../models/book")
const Cover = require("../models/cover")

exports.getBooksData = async () => {
    // const query = 'SELECT * FROM books;';
    // return Book.all();
    return booksTestData;
};

exports.getBookData = async ( bookId ) => {
    // const query = 'SELECT * FROM books WHERE id= ' + bookId + ' ;';
    // return Book.findById( bookId );
    return booksTestData.find( book => book.id == bookId );
};

exports.postBookData = async (newData) => {
    // const query =  'INSERT INTO books ( title, description, coverId)' + ' VALUES ( ' + title + ' , ' + description + ' ,' + coverId + ');';
    const book = Book.create({ title : newData.title , description : newData. description, coverId: newData.coverId });
    await book.save();
    return book;
};

exports.patchBookData = async (newData) => {
    // const query = 'UPDATE books SET title = ' + title + '  description = ' + description + ' coverId = ' + coverId + ' WHERE id = ' + bookId + ' ;';
    const book = Book.findByIdAndUpdate( newData.id, { title : newData.title , description : newData. description, coverId: newData.coverId });
    await book.save();
    return book;
};

exports.deleteBookData = async (bookId) => {
    // const query = 'DELETE FROM books WHERE id= ' + bookId + ' ;';
    return Book.remove({ id : bookId })
};

exports.getCoversData = async () => {
    // const query = 'SELECT * FROM covers;';
    // return Cover.all()
    return coversTestData
};

exports.getCoverData = async (coverId) => {
    // const query = 'SELECT * FROM covers WHERE id= ' + coverId + ' ;';
    return Cover.findById( coverId );
};

exports.postCoverData = async (newData) => {
    // const query = 'INSERT INTO covers ( name )' + ' VALUES ( ' + newData.name + ' );';
    const cover = Cover.create({ name: newData.name });
    await cover.save();
    return cover;    
};

exports.patchCoverData = async (newData) => {
    // const query = 'UPDATE covers SET name = ' + newData.name +  ' WHERE id = ' + newData.coverId + ' ;';
    const cover = Cover.findByIdAndUpdate(newData.id, { name: newData.name });
    await cover.save();
    return cover;
};

exports.deleteCoverData = async (coverId) => {
    // const query = 'DELETE FROM covers WHERE id= ' + coverId + ' ;';
    return Cover.remove({ id : coverId })
};