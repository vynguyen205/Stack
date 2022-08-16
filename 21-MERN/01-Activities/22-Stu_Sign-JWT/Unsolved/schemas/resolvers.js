const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    // this is the mutation for creating a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // signToken is a function that takes in a user object and returns a JWT token
      const token = signToken(user);
      // return the destructured user object and the token
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below\
    // thi is for checking the users credentials
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // if not user found, throw an error
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // chcking to see if the password matches the user's password
      const correctPw = await user.isCorrectPassword(password);
      // if not correct password, throw an error
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // signToken is a function that takes in a user object and returns a JWT token
      const token = signToken(user);
      return { token, user };
    },
    // this is for creating a new thought...getting the data from the dta base.
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
