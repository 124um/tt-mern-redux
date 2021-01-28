const mongoose = require('mongoose');
const Book = require("../models/book")
const Cover = require("../models/cover")
const { DBCONNECT } = require("../config/config.json")

mongoose.connect( DBCONNECT, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
        if(err) return console.log(err);
});

exports.getBooksData = async () => {
    return Book.find({})
};

exports.getBookData = async ( bookId ) => {
    return Book.findById({ _id: bookId._id });
};

exports.postBookData = async (newData) => {
    return Book.create({ id: newData.id, title : newData.title , description : newData. description, coverId: newData.coverId });
};

exports.patchBookData = async (newData) => {
    return Book.findById( newData.id ).updateOne( { title : newData.title , description : newData.description, coverId: newData.coverId });
};

exports.deleteBookData = async (bookId) => {
    return Book.deleteOne({ _id: bookId._id })
};

exports.getCoversData = async () => { 
    return Cover.find({})
};

exports.getCoverData = async (coverId) => {
    return Cover.findById({  _id: coverId._id });
};

exports.postCoverData = async (newData) => {
    return Cover.create({ name: newData.name });
};

exports.patchCoverData = async (newData) => {
    return Cover.findByIdAndUpdate(newData.id, { name: newData.name });
}; 

exports.deleteCoverData = async (coverId) => {
    return Cover.deleteOne({ _id : coverId._id })
};  