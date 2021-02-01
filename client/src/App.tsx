import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import Navigator from './navigation';
import {GRAPHQL_URL} from './config';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
};
