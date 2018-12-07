import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import compression from 'compression';
import schema from './schemas';

// Configure Apollo GraphQL Server
const server = new ApolloServer({
	schema,
	playground: true
});

const app = express();

// Use compression
app.use(compression());

// Setup middleware & the GraphQL endpoint
server.applyMiddleware({app, path: '/'});

// Port
const port = 2121;

// Start a server
app.listen({port}, () =>
	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);

