import { buildSchema } from 'graphql';

export default buildSchema(`
    type Item {
        name: String
        catchCopy: String
        detail: String
        releaseDate: String
        img: String
        premium: Boolean
    }
    type Query {
        list: [Item]
        item(name: String!): Item!
    }
`);
