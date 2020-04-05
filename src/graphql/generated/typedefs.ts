const s = `# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

"""
A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
"""
scalar DateTime

type Mutation {
  signUp(input: SignUpInput!): User!
  signIn(input: SignInInput!): SignInResult!
}

type Query {
  users: [User!]!
  user(name: String!): User!
}

input SignInInput {
  name: String!
  password: String!
}

type SignInResult {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  version: Int!
  token: String!
}

input SignUpInput {
  name: String!
  email: String!
  password: String!
}

type User {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  version: Int!
}
`;

export default s;
