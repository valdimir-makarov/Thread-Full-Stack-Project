// db/connection.js

import { connect } from 'mongoose';

const connection = async () => {
  try {
    await connect('mongodb+srv://BUBUN:G7FxPrtFdoH4Qae6@cluster0.06k58cu.mongodb.net/');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export default connection; // Exporting the connection function as the default export
