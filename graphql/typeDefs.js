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
# ////////////////////// will the below be required with excl mark?
    # stats: [Stats]!
  }
  # type Stats {
  #   id: ID!
  #   createdAt: String!
  #   username: String!
  #   points: Int! # by the way, should I make this rather Float ? Does this help when calculating the average or makes no diff? At this stage the number can only be int anyways though, calculation does the front end I guess. 
  #   playername: String! #//must recognize the users info as username in db of users (would recognize via username, or id? or email?)
  #   gameType: Int, #// Or boolean to mean either the short or the long game (11 pts total or 21pts total)
  #   totalShots: Int,
  #   threesAttempted: Int,
  #   threesMade: Int,
  #   rebounds: Int,
  #   assists: Int,
  #   turnovers: Int,
  #   steals: Int,
  # }
# /////////////////////////////////////////////////////////////////////
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
# //////////////////////////
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
# ///////////////////////////
    # getUser(username: String!): User  # <- 
# //////////////////////////
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
# should I add stats into the parenthesis so that I can include it as part of the mutation alongside the body? How do I do that?
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
