import express from 'express';
import connection from './db/connection.js'; // Importing the connection function
import cookieParser from 'cookie-parser';
import route from './routes/userRoutes.js'; // Importing the route module

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/username', route);

// Connect to MongoDB
connection()
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  });
//