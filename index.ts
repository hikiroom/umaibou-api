import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './src/ts/schema';
import resolver from './src/ts/resolver';

const app = express();
const devPort = 3000;
const port = process.env.PORT || devPort;

app.use(express.static('src/img'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
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