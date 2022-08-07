const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// requireing apollo server and destructuring the server object
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
// destructuring the typeDefs and resolvers from the imported file
const { typeDefs, resolvers } = require('./schemas');
// connecto to the database
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// making a new instance of the ApolloServer class
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
// this is the function that starts the server
const startApolloServer = async (typeDefs, resolvers) => {
// starting the server instance we have above
await server.start();
server.applyMiddleware({ app });

// once the db opens, listen to the port and log a message
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
// calling the function to start the server
startApolloServer(typeDefs, resolvers);
