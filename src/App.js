import './App.css';
import { ApolloProvider } from "@apollo/client";
import Books from "./components/books/Books";
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
