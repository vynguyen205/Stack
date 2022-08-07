const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  # defining what is avaliable in graphQL
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # defines the entry point to our server. Definining the root query
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
