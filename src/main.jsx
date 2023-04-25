import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "./styles/index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NavBar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
