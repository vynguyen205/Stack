const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

//connect to the database
const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

//take payload from post req and create a new document in the bookCollection.
app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

//bulk creating books
app.post('/create-many', function (req, res) {
  db.collection('bookCollection').insertMany(
    [
      {"title" : "Oh the Places We Will Go!"},
      {"title" : "Diary of Anne Frank"}
    ], 
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

//seeing all the books in this collection
app.get('/read', (req, res) => {
  // Selects documents in a collection or view and returns a cursor to the selected documents.
  db.collection('bookCollection')
  // To return all documents in a collection, omit this parameter or pass an empty document ({}).
    .find({})
    // An array of documents.
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
