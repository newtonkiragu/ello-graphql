import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/client";
import Books from "./components/books/Books";
import {InMemoryCache} from "apollo-boost";
import client from './ApolloCLient/client'

function App() {

    return (
      <ApolloProvider client={client}>
        <div id="posts">
          <Books />
        </div>
      </ApolloProvider>
  );
}

export default App;
