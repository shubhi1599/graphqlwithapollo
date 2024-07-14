import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const root = createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

/** The client is ready to use but how to actuall make it available throw all component in our react app? */
/** Well that'swhere apollo provider comes in, apollo provider component uses react's context API to make a configure apollo client
 * instance available throwout our react components
 */
root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>
  // </React.StrictMode>
);
