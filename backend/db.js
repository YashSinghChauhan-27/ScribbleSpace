const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo", error);
    }
};

module.exports = connectToMongo;