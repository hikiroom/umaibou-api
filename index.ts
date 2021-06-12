const express = require('express');
const app = express();
const devPort = 3000;
const port = process.env.PORT || devPort;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/ts/schema');
const resolver = require('./src/ts/resolver');

app.use(express.static('src/img'));
app.post('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: false
}));
app.get('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
}));

app.listen(port);