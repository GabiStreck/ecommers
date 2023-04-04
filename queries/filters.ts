import { gql } from 'graphql-request';

export const GET_TRADEMARKS = gql`
  query TradeMarks {
    tradeMarks {
      name
      id
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories($first: Int, $skip: Int) {
    categories(first: $first, skip: $skip) {
      name
      id
    }
  }
`;

export const GET_RATINGS = gql`
  query Ratings {
    products(orderBy: rating_DESC, first: 100) {
      rating
    }
  }
`;

export const GET_MAYOR_PRICE = gql`
  query Price {
    products(orderBy: price_DESC, first: 1) {
      price
    }
  }
`;
