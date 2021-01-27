// var connect = require('../connect');
// let pool = connect.connect_db('db Dictionaries Utils run');
const booksTestData = require( '../data/books.json')
const coversTestData = require( '../data/covers.json')

exports.getBooksData = async () => {
    const query = 'SELECT * FROM books;';
    // return pool.query(query);
    return booksTestData
};

exports.getBookData = async ( id ) => {
    const query = 'SELECT * FROM books;';
    // return pool.query(query);
    return booksTestData.find( book => book.id == id )
};

exports.postBookData = async (title, description, coverId) => {
    const query =  'INSERT INTO books ( title, description, coverId)' + ' VALUES ( ' + title + ' , ' + description + ' ,' + coverId + ');';
    // return pool.query(query);
};

exports.pathBookData = async ( idBook, title, description, coverId) => {
    const query = 'UPDATE books SET title = ' + title + '  description = ' + description + ' coverId = ' + coverId + ' WHERE id = ' + idBook + ' ;';
    // return pool.query(query);
};

exports.deleteBookData = async (idBook) => {
    const query = 'DELETE FROM books WHERE id= ' + idBook + ' ;';
    // return pool.query(query);
};

exports.getCoversData = async () => {
    const query = 'SELECT * FROM covers;';
    // return pool.query(query);
    return coversTestData
};

