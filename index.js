const express = require('express');
const app = express();
const devPort = 3000;
const port = process.env.PORT || devPort;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./assets/js/schema');
const resolver = require('./assets/js/resolver');

app.use(express.static('/assets/img'));
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