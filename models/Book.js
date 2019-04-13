var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

BookSchema.plugin(uniqueValidator);

var Book = mongoose.model("Book" , BookSchema);

module.exports = Book;