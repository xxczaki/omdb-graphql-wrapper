import {readFileSync} from 'fs';
import {join} from 'path';
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import compression from 'compression';

import get from './api';
import config from './config';

const resolvers = {
	Query: {
		ByTitle: (root, {title}) => get(title, '&t=').then(payload => {
			return payload;
		}),
		ByID: (root, {id}) => get(id, '&i=').then(payload => {
			return payload;
		})
	}
};

// Configure Apollo GraphQL Server
const server = new ApolloServer({
	typeDefs: gql(readFileSync(join(__dirname, './schema.graphql')).toString()), resolvers,
	playground: true,
	engine: {
		apiKey: config.apollo
	}
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

