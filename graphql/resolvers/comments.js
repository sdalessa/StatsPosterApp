//require the Error sys from server
const {AuthenticationError,  UserInputError} = require("apollo-server");
//require the auth utility
const checkAuth = require("../../util/checkAuth");
//require the model for posting
const Post = require("../../models/Post");

module.exports = {
  Mutation: {
    //writes in what he calls arrow function, but with funny style if you ask me...(like...colon?)
    createComment: async (_, { postId, body }, context) => {
      //checking if the user is logged in
      const { username } = checkAuth(context);
      //if the comment is empty...
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }

      const post = await Post.findById(postId);
      //note 28
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
        // if that post that you want to comment on does not exist...
      } else throw new UserInputError("Post not found");
    },
    deleteComment: async ({ _, commentId }, context) => {
      //checking if the user is logged in
      const { username } = checkAuth(context);
      //find the post...
      const post = await Post.comments.findIndex(postId);
      //find the index of that comment, and delete that at that index. So this is not the PostId, but more specifically commentId
      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.Id === commentId);
        // this below allows ONLY the owner of the comment to delete that comment, based on finding corresp with same username. Awesome!
        if (post.comments[commentIndex].username === username) {
          //at this point we can delete, just one from the index (from the array of comments I guess)
          post.comments.splice(commentIndex, 1);
          return post;
          //but if the user is not auth (and the post exists)...
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        // id post does not exist...
        throw new UserInputError("post not found");
      }
    },
  },
};
