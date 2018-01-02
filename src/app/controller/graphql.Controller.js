
const qraphql = require('graphql');
let makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
let schema = require('./../graphql/schema').schema;


class ClsGraphqlController {

    static init(app) {

        let promise = new Promise((resolve, reject) => {

            app.post('/api/v1/graphql', (req, res) => {
                const query = `{
                   
                    authors{
                        firstName,
                        lastName
                    }   
                }`
                qraphql.graphql(schema, query).then((result) => {
                    res.send(result);
                }).catch((error) => {
                    console.log(error);
                    res.send('Error! during qraphql query execution!');
                })
            })
            resolve();
        })
        return promise;
    }
}


module.exports = ClsGraphqlController;