import { gql } from "graphql-request";

export const GET_TRADEMARKS = gql`
query TradeMarks {
  tradeMarks {
    name
    id
  }
}
`

export const GET_CATEGORIES = gql`
query Categories ($first: Int, $skip: Int){
  categories(first: $first, skip: $skip) {
    name
    id
  }
}
`

export const GET_COLORS = gql`
query Colors($first: Int, $skip: Int) {
    products(first: $first, skip: $skip) {
    color {
            css
        }
    }
}
`

export const GET_RATINGS = gql`
query Ratings {
  products(orderBy: rating_DESC, first: 100) {
    rating
  }
}
`
