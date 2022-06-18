const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root',
    port: '8889',
    database: 'courses_db'
  },
  
);

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
// ? is a placeholder for the id, which is 3 in this case that can be passed in later. 
// you can use ? as many times as you want.
db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
  // if you want to pass in multiple paarameters, you can use an array.
  // db.query(`DELETE FROM course_names WHERE id = ? AND name = ?`, [3, 'JavaScript'], (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM course_names', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
