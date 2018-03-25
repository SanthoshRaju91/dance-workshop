import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express'
import { userResolvers } from './resources/users/user.resolvers';
import userType from './resources/users/user.graphql';


// base / root schema for graphql
const baseSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

// merging schemas, resolvers to make a executable router
const schema = makeExecutableSchema({
    typeDefs: [
        baseSchema,
        userType
    ],

    resolvers: merge(
        {},
        userResolvers
    )
});

// creating a graphQL router to be mounted to the application instance
export const graphQLRouter = graphqlExpress((req) => ({
    schema,
    context: {
        req,
        user: req.user
    }
}));

