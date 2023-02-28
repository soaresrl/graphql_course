import { gql } from 'apollo-server';

// prettier-ignore
export const postTypesDefs = gql`
    extend type Query {
        post(id: ID!): PostResult!
        posts(input: ApiFiltersInput): [Post!]!
    }

    union PostResult = PostNotFoundError | PostTimeoutError | Post

    interface PostError {
        statusCode: Int!
        message: String!
    }

    type PostNotFoundError implements PostError {
        statusCode: Int!
        message: String!
        postId: ID!
    }

    type PostTimeoutError implements PostError {
        statusCode: Int!
        message: String!
        timeout: Int!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        indexRef: Int!
        createdAt: String!
        # user: User!
        unixTimestamp: String!
    }
`;
