const { gql } = require("apollo-server");
//below tagTemplateString, where we write our GraphQL types and what they should return
module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
  }
  type Stats {
    id: ID!
    createdAt: String!
    username: String!
    # body: String!
    body: [StatsPost]!
    # likes: [Like]!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type StatsPost {
  statsId: ID!
  username: String!
  gameType: Int! #// Or boolean to mean either the short or the long game (11 pts total or 21pts total)
  points: Int! 
  totalShots: Int!
  threesAttempted: Int!
  threesMade: Int!
  rebounds: Int!
  assists: Int!
  turnovers: Int!
  steals: Int!
  }

  type Query {
    getPosts: [Post]
    getStats: [Stats]
    getPost(postId: ID!): Post
    getSingleStats(statsId: ID!): Stats
    # getUser(username: String!): User  # <-
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    #createStatsPost(array: String!):StatsPost!
    # line above giving me headache. Question is, what type does the createStatsPost take? I started by calling it Stats, but now I am going for array (or is it obj???)
    #createStats(stats: String!):StatsPost!

  }
`;
