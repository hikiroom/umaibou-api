const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Data {
        name: String
        catchCopy: String
        detail: String
        releaseDate: String
        img: String
        color: [String]
    }
    type Query {
        list: [Data]
        item(name: String!): Data!
        hello: String
    }
`);
