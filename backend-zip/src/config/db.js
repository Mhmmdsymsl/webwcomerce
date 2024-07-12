const mongoose = require("mongoose");


const mongoDbUrl = 'mongodb://localhost:27017/ecommerce'; 

const connectDb = () => {
    return mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = { connectDb };
