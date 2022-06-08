// TODO: Import express
const express = require('express');
const path = require('path');
const app = express();
// TODO: Import 'terms.json' file
const terms = require('./terms.json');

const PORT = 3001;

// TODO: Initialize app variable

app.get('/', (req,res) => {
  res.sendFile (path.join(__dirname, "term.json"));
});

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req,res) => {
  res.json(terms)
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
