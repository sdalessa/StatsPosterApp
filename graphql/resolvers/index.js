//combining
const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');
const statpostsResolvers = require('./statposts');

module.exports = {
    Query: {
        ...postsResolvers.Query,
        ...statpostsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};

