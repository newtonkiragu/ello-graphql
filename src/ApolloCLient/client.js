import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http'
import * as authLink from "apollo-link";


const uri = "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql";
const httpLink = createHttpLink({ uri, fetch })

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    uri
});

export default client;
