import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull} from 'graphql';
import request from './request';

// GraphQL Schemas
const responseObject = {
	Title: {
		type: GraphQLString,
		description: 'Title of the movie or tv show'
	},
	Year: {
		type: GraphQLString,
		description: 'Year the movie was released'
	},
	Rated: {
		type: GraphQLString,
		description: 'Movie rating (eg. 12+)'
	},
	Released: {
		type: GraphQLString,
		description: 'Full date of release'
	},
	Runtime: {
		type: GraphQLString,
		description: 'Runtime of the movie'
	},
	Genre: {
		type: GraphQLString,
		description: 'Genre of the movie'
	},
	Director: {
		type: GraphQLString,
		description: 'Movie Director(s)'
	},
	Writer: {
		type: GraphQLString,
		description: 'Movie Writer(s)'
	},
	Actors: {
		type: GraphQLString,
		description: 'Actors'
	},
	Plot: {
		type: GraphQLString,
		description: 'Plot'
	},
	Language: {
		type: GraphQLString,
		description: 'Language'
	},
	Country: {
		type: GraphQLString,
		description: 'Country or countries where the movie was made'
	},
	Awards: {
		type: GraphQLString,
		description: 'Awards'
	},
	Poster: {
		type: GraphQLString,
		description: 'Link to a movie poster'
	},
	Metascore: {
		type: GraphQLString,
		description: 'Metascore'
	},
	imdbRating: {
		type: GraphQLString,
		description: 'Rating from IMDb'
	},
	imdbVotes: {
		type: GraphQLString,
		description: 'Number of votes from IMDb'
	},
	Type: {
		type: GraphQLString,
		description: 'Type (movie, tv show etc.)'
	},
	DVD: {
		type: GraphQLString,
		description: 'DVD release date'
	},
	BoxOffice: {
		type: GraphQLString,
		description: 'Box Office'
	},
	Production: {
		type: GraphQLString,
		description: 'Production company'
	},
	Website: {
		type: GraphQLString,
		description: 'Website of the movie'
	},
	Response: {
		type: GraphQLString,
		description: 'Check, if there was a response from OMDb'
	}
};

const TitleType = new GraphQLObjectType({
	name: 'Title',
	description: 'Title of the movie/tv show',
	fields: () => (
		responseObject
	)
});

const SpecificType = new GraphQLObjectType({
	name: 'Specific',
	description: 'Find specific movie/tv show with IMDB id',
	fields: () => (
		responseObject
	)
});

// Setup query types
const QueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		ByTitle: {
			type: TitleType,
			args: {
				title: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: (root, {title}) => request(title, '&t=').then(payload => {
				return payload;
			})
		},
		ByID: {
			type: SpecificType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: (root, {id}) => request(id).then(payload => {
				return payload;
			})
		}
	})
});

export default new GraphQLSchema({
	query: QueryType
});
