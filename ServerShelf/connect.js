const { config } = require('./config/config');

exports.connect_db = function (req) {

    var mongoose = require('mongoose');
    
    const connectionString = config;

    mongoose.connect(connectionString);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;


    db.on(function (err) {
        if (!err) {
            console.log(req +  " ==> Database is connected ... nn");
        } else {
            console.log(req +  " ==> Error connecting database ... nn");
        }
    });
    return db;
}; 