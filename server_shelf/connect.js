const { DBCONNECT } = require('./config/config');
const mongoose = require('mongoose')

const connectDb = () => { 
    mongoose.Promise = bluebird
    const options = {
        useMongoClient: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }

    mongoose.connect(DBCONNECT, options)
    console.log("connect! ", DBCONNECT)
    
    return mongoose.connection
};

module.exports = require('./connect.js');
