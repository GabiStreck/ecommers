import { GraphQLClient } from 'graphql-request';

const GRAPHQL_API =
  typeof window === 'undefined'
    ? process.env.GRAPHQL_API
    : process.env.NEXT_PUBLIC_GRAPHQL_API;
/* @ts-ignore */
export const client = new GraphQLClient(GRAPHQL_API, { headers: {} });
