import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import Navigator from './navigation';
import {GRAPHQL_URL} from './config';
import {FAVORITE_PRODUCT_FRAGMENT} from './graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Product: {
        fields: {
          favorite: {
            read(favorite: any | undefined = false) {
              return favorite;
            },
          },
          price(price) {
            return `${price} $`;
          },
        },
      },
    },
  }),
  resolvers: {
    Mutation: {
      addOrRemoveProductFromFavorite(_root, args, {client, cache}) {
        const productId = cache.identify({
          __typename: 'Product',
          id: args.productId,
        });
        const {favorite} = client.readFragment({
          fragment: FAVORITE_PRODUCT_FRAGMENT,
          id: productId,
        });
        client.writeFragment({
          fragment: FAVORITE_PRODUCT_FRAGMENT,
          id: productId,
          data: {
            favorite: !favorite,
          },
        });
      },
    },
  },
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
};
