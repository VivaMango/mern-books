const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models/Book.js");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mernbooks";
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// MAIN SCREEN TURN ON
const mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'connection error:'));
mongo.once('open', function() {
    console.log(`Mongoose Connected to DB Succesfully using ${MONGODB_URI}`)
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
