const mongoose = require('mongoose');

// Define the connect function
const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://nurfarhanbubun2010049:BGcqqN9gAPesu8h3@cluster0.iamerv0.mongodb.net/');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

// Export the connect function
module.exports.connect = connect;
