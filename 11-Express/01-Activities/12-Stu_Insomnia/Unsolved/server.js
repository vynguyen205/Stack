const express = require('express');
const PORT = 3001;
// TODO: Require the json file located in `/db`
const reposJson = require('./db/repos.json')
// TODO: Create an `app` variable set to the value of `express()`
const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => res.json(reposJson));

// TODO: Have the app listen on port 3001
app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);
