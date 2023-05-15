import React from "react";
import ReactDOM from "react-dom/client";
import { inject } from '@vercel/analytics';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';

inject()

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <CssBaseline />
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
