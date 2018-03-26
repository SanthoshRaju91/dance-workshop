import ApolloClient from 'apollo-client-preset';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:5000/graphql'
    })
});

export default client;