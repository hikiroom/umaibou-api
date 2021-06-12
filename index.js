const express = require('express');
const app = express();
const devPort = 3000;
const port = process.env.PORT || devPort;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./assets/js/schema');
const resolver = require('./assets/js/resolver');
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');

    if (req.methods === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
};

app.use('/graphql', allowCrossDomain);
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