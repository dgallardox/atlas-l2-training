import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const WORDPRESS_URL = "https://atlasl2trainin.wpengine.com/graphql";

const link = createHttpLink({
  uri: WORDPRESS_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
