import './App.css';
import { ApolloProvider } from '@apollo/client';
import Books from './components/books/Books';
import client from './ApolloCLient/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <a className="title" href="">MY BOOK</a>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
