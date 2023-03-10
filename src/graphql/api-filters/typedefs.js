import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
    input ApiFiltersInput {
        _sort: String
        _order: ApiFiltersOrder
        _start: Int
        _limit: Int
    }

    enum ApiFiltersOrder {
        ASC
        DESC
    }
`;
