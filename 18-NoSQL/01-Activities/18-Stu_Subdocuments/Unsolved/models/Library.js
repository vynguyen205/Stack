const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  book: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookInfo = { title: "How to drink water", price: 100}

Library.create(
  { name: "oldest lib", book: bookInfo},
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
)

module.exports = Library;
