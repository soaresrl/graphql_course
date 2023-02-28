import { gql } from 'apollo-server';
import { postTypesDefs } from './post/typedefs';
import { postResolvers } from './post/resolvers';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { apiFiltersTypeDefs } from './api-filters/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';

const rootTypeDefs = gql`
    type Query {
        _empty: Boolean
    }
`;

const rootResolvers = {
    Query: {
        _empty: () => true,
    },
};

export const typeDefs = [
    rootTypeDefs,
    userTypeDefs,
    postTypesDefs,
    apiFiltersTypeDefs,
];
export const resolvers = [
    rootResolvers,
    userResolvers,
    postResolvers,
    apiFiltersResolvers,
];
