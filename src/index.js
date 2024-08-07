const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require("./router/userRotes");


const app = express();
const port = 3007;

// Connect to MongoDB
mongoose.connect('mongodb+srv://BIKASH:2NQSqnkWjFq2TWNe@cluster0.bbmcbft.mongodb.net/user_management', {
  useNewUrlParser: true,
}).then(() => {
  console.log('MongoDB is Connected');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the process if unable to connect to MongoDB LjAGGrKsAsKtsMRS
});

// Parse JSON bodies for POST requests
//app.use("/api",router)
app.use(bodyParser.json());

// Handle form submission
 app.use('/auth', userRoutes);
 


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

