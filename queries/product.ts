import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
query Products( $first: Int,  $skip: Int) {
  products(first:  $first, skip: $skip) {
    id
    title
    price
    rating
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
  }
}
`

export const GET_PRODUCT = gql`
query Products( $id: ID) {
  products(where: {id: $id}) {
    id
    title
    price
    rating
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
  }
}
`