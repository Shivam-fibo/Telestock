
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sg641818:6UP95srpxEqtt2AJ@cluster0.4wijm1i.mongodb.net')


const subscriptionRoutes = require('./routes/subscriptionRoutes');
app.use('/subscribe', subscriptionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
