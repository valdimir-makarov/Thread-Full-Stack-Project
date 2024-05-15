const express = require('express');
const { connect } = require('./db/connectDB');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user'); // Rename the router variable to userRouter
const app = express();

app.use(cors());

const port = 3000;
app.use(bodyParser.json());
app.use('/singupuser', userRouter); // Use userRouter instead of router

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
