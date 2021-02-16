import {gql} from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      desc
      favorite @client
      thumb {
        id
        url
      }
    }
  }
`;

export const ADD_OR_REMOVE_PRODUCT_FROM_FAVORITE = gql`
  mutation AddOrRemoveProductFromFavorite($productId: ID!) {
    addOrRemoveProductFromFavorite(productId: $productId) @client
  }
`;

export const FAVORITE_PRODUCT_FRAGMENT = gql`
  fragment FavoriteProductFragment on Product {
    favorite
  }
`;
