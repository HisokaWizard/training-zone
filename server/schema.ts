const graphQL = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema } = graphQL;

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	})
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
			}
		}
	})
});

const graphQLSchema = new GraphQLSchema({
	query: Query,
});

module.exports = graphQLSchema;
