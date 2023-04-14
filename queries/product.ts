import { gql } from 'graphql-request';

export const GET_PRODUCTS = gql`
  query Products($first: Int, $skip: Int, $filters: ProductWhereInput) {
    products(first: $first, skip: $skip, where: $filters) {
      id
      title
      price
      rating
      genre
      image {
        url
      }
      tradeMark {
        name
      }
      category {
        name
      }
      color {
        hex
        css
      }
      discount
      stocks {
        id 
        sizeChart
        stock
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($id: ID) {
    product(where: { id: $id }) {
      id
      title
      price
      rating
      genre
      image {
        url
      }
      tradeMark {
        name
      }
      category {
        name
      }
      color {
        hex
        css
      }
      discount
      stocks {
        id 
        sizeChart
        stock
      }
    }
  }
`;
