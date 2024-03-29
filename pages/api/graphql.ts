import { ApolloServer } from 'apollo-server-micro';
import resolvers from '@lib/graphql/resolvers';
import typeDefs from '@lib/graphql/type-definitions';

const server = new ApolloServer({resolvers, typeDefs});
const handler = server.createHandler({path: '/api/graphql'});

export const config = {api: {bodyParser: false}};

export default handler;
