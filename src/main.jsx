import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import NavBar from './NavBar'
import './styles/index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div>
        <NavBar />
        <Home />
      </div>
    </ApolloProvider>
  </React.StrictMode>
)
