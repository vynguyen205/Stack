const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// A resolver is a function that's responsible for populating the data for a single field in your schema
// You define all of your server's resolvers in a single JavaScript object (named resolvers above). This object is called the resolver map.
const resolvers = {
  
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // thi gets the classes from the database and returns them
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
