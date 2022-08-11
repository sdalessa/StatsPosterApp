const { model, Schema } = require("mongoose");
const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
    // NOTE 30!!!
  ],
  // ###########
  // ###########
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    //linking the post to a specific user (type is referring to another schema obj)...
    type: Schema.Types.ObjectId,
    //passing the table or collection called 'users' allows to later use mongoose to auto populate the users field and be able to use in case some mongoose methods.
    ref: "users",
  },
});

module.exports = model("Post", postSchema);

//here will add some Schemas to be able to actually post STATS!
//   stats: [
//     {
//       playername: String, //must recognize the users info as username in db of users (would recognize via username, or id? or email?)
//       gameType: Number, // Or boolean to mean either the short or the long game (11 pts total or 21pts total)
//       points: Number,
//       totalShots: Number,
//       threesAttempted: Number,
//       threesMade: Number,
//       rebounds: Number,
//       assists: Number,
//       turnovers: Number,
//       steals: Number,
//     },
//   ],