import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-client";
import {ApolloProvider} from "react-apollo";
import Books from "./components/Books";
import {InMemoryCache} from "apollo-boost";
import * as authLink from "apollo-link";
import { createHttpLink } from 'apollo-link-http'

function App() {
    const uri = "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql";
    const httpLink = createHttpLink({ uri, fetch })

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      uri
  });

    return (
      <ApolloProvider client={client}>
        <div id="posts">
          <Books />
        </div>
      </ApolloProvider>
  );
}

export default App;
