const qraphql = require('graphql');
let makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
//let schema = require('./../graphql/schema').schema
const authors = require('./../graphql/dummyAuthors.json').Authors;
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
    resolvers,
});

class ClsGraphqlController {

    static init(app) {

        let promise = new Promise((resolve, reject) => {

            app.post('/api/v1/graphql', (req, res) => {
                const query = `{
                   
                    authors{
                        firstName
                    }   
                }`
                qraphql.graphql(schema, query).then((result) => {
                    res.send(result);
                }).catch((error) => {
                    console.log(error);
                })
            })
            resolve();
        })
        return promise;
    }
}


module.exports = ClsGraphqlController;