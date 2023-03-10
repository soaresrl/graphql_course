import { gql } from 'apollo-server';

// prettier-ignore
export const userTypeDefs = gql`
    extend type Query {
        user(id: ID! teste: Boolean): User!
        users(input: ApiFiltersInput): [User!]!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String
        indexRef: Int!
        createdAt: String!
        perUser: String
        # posts: [Post!]!
    }
`;
