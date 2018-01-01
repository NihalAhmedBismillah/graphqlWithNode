
let makeExecutableSchema  = require('graphql-tools').makeExecutableSchema;
let  resolver  = require('./resolvers');

const typeDefs = `
type Author {
  id: ID!
  firstName: String
  lastName: String
}
type Query {authors: [Author]}`

const schema = makeExecutableSchema({
    typeDefs,
    resolver,
  });

exports.schema =  schema;