// var connect = require('../connect');
// let pool = connect.connect_db('db Dictionaries Utils run');
const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

exports.getBooksData = async () => {
    const query = 'SELECT * FROM books;';
    // return pool.query(query);
    return booksTestData
};

exports.getBookData = async ( bookId ) => {
    const query = 'SELECT * FROM books WHERE id= ' + bookId + ' ;';
    // return pool.query(query);
    return booksTestData.find( book => book.id == bookId )
};

exports.postBookData = async (title, description, coverId) => {
    const query =  'INSERT INTO books ( title, description, coverId)' + ' VALUES ( ' + title + ' , ' + description + ' ,' + coverId + ');';
    // return pool.query(query);
};

exports.patchBookData = async ( bookId, title, description, coverId) => {
    const query = 'UPDATE books SET title = ' + title + '  description = ' + description + ' coverId = ' + coverId + ' WHERE id = ' + bookId + ' ;';
    // return pool.query(query);
};

exports.deleteBookData = async (bookId) => {
    const query = 'DELETE FROM books WHERE id= ' + bookId + ' ;';
    // return pool.query(query);
};

exports.getCoversData = async () => {
    const query = 'SELECT * FROM covers;';
    // return pool.query(query);
    return coversTestData
};

exports.getCoverData = async (coverId) => {
    const query = 'SELECT * FROM covers WHERE id= ' + coverId + ' ;';
    // return pool.query(query);
    return coversTestData
};

exports.postCoverData = async (newData) => {
    const query = 'INSERT INTO covers ( name )' + ' VALUES ( ' + newData.name + ' );';
    // return pool.query(query);
    return coversTestData
};

exports.patchCoverData = async (newData) => {
    const query = 'UPDATE covers SET name = ' + newData.name +  ' WHERE id = ' + newData.coverId + ' ;';
    // return pool.query(query);
    return coversTestData
};

exports.deleteCoverData = async (coverId) => {
    const query = 'DELETE FROM covers WHERE id= ' + coverId + ' ;';
    // return pool.query(query);
    return coversTestData
};