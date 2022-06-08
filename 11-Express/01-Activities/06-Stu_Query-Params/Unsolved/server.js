const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route

//express is running/getting the path of the URl
// This route path will match requests to the root route, /.

// TODO: Add a comment describing what this route will return
app.get('/api/term/:term?', (req, res) => {
  //  IF THERE IS NO PARAM TERM
    // TODO: Add a comment describing the content of req.params in this instance
    if (!req.params.term) {
      const hasQuery = Object.keys(req.query).length > 0;
  
      if (hasQuery && req.query.sort === 'dsc') {
        return res.json(sortHelper('dsc'));
      }
  
      if (hasQuery && req.query.sort === 'asc') {
        return res.json(sortHelper('asc'));
      }
      res.json(termData);
    }
    const requestedTerm = req.params.term.toLowerCase();
  
  
  //IF THERE IS A PARAM TERM
    const hasQuery = Object.keys(req.query).length > 0;
    if (hasQuery && req.query.sort === 'dsc') {
      sortHelper('dsc')
    }
    if (hasQuery && req.query.sort === 'asc') {
      sortHelper('asc')
    }
    const filteredData = termData.filter(item => item.category.toLocaleLowerCase() === requestedTerm)
    if(filteredData.length) return res.json(filteredData)
    return res.json('No term found');
    // this is just a test line
    // return res.sendFile()
  });

  //you can set this to be an error page, where it will display can't find anything if the usr click something wrong
  app.get('/api/*', (req, res) => {
    
    // const categories = termData.map((term) => term.category);
    
    const result = "Nick is cool!"
    
    return res.json(result);
  });
  
// TODO: Add a comment describing what this route will return
//this is returning a new array that only has the categories 
app.get('/api/categories', (req, res) => {
  //.map is calling the defined function and returns it in a new array
  const categories = termData.map((term) => term.category);
  //.filter is returning a new array that meets the condition specified. 
  //this filters out only the categories
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
