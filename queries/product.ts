import { gql } from "graphql-request";

export const GET_ALL_PRODUCT = gql`
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