import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: String
    email: String
  }

  type Query {
    users: [User]!
  }
`;