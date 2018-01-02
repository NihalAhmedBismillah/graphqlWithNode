

let authors = require('./dummyAuthors.json').Authors;
exports.resolvers = {

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
}