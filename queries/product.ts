import { gql } from "graphql-request";

export const GET_ALL_PRODUCT = gql`
query Products {
    products {
        id
        title
        price
        rating
        image {
            url
        }
        color {
            hex
            css
        }
    }
}

`