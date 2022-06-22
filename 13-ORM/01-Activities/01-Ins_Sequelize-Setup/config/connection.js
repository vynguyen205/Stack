const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  //need to pass in 4 parameters
  // Database name
  'library_db',
  // User
  'root',
  // Password
  'root',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
  }
);

module.exports = sequelize;
