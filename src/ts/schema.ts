const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Item {
        name: String
        catchCopy: String
        detail: String
        releaseDate: String
        img: String
        color: [String]
    }
    type Query {
        list: [Item]
        item(name: String!): Item!
    }
`);
