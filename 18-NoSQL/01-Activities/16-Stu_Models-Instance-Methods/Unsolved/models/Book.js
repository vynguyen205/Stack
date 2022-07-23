const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
})
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    this.price /= 2;
    console.log(
        ` "${this.title}" has been reduced to $${this.price} `
    );
};
// TODO: Call the custom instance method on the instance
bookSchema.methods.logInfo = function () {
    ` "${this.title}" has been reduced to $${this.price} `
}
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);


// TODO: Create a new instance of the model
const aBook = new Book({ title: 'Where is my discount', author: "you", price: 10 })
aBook.logInfo();
aBook.getDiscount();

module.exports = Book;
