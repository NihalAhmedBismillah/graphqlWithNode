const authors = require('./../graphql/dummyAuthors.json').Authors;
let assert = require('assert');
let makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const resolvers = {

  Query: {
    authors: () => {
      // TODO : get author data from database here i am doing dummy author json
      let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
          resolve(authors);
        }, 10)

      })
      return promise;

    }
  }
};

const typeDefs = `
type Author {
  id: ID!
  firstName: String
  lastName: String
}
type Query {authors: [Author]}`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

exports.schema = schema;