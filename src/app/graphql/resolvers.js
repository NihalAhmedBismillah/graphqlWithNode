
const authors = require('./dummyAuthors.json').Authors;

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
exports.resolvers = resolvers;