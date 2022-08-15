const { model, Schema } = require("mongoose");
const statsSchema = new Schema({
  username: String,
  createdAt: String,
  body:
      {
    type: Schema.Types.ObjectId,
    ref: "bodySchema"
      }
})
  ///really dont know how to avoid errors https://stackoverflow.com/questions/64829947/graphql-mongoose-schema-how-to-store-an-array-of-mongoose-objectid-reference

  const bodySchema = new Schema({
    username: String,
    points: Number,
    totalShots: Number,
    threesAttempted: Number,
    threesMade: Number,
    rebounds: Number,
    assists: Number,
    turnovers: Number,
    steals: Number,
  });

  //   body: [ //calling this body and no longer stats to harmonize with the resolvers' language in statposts
  //     {
  //       username: String, //must recognize the users info as username in db of users (would recognize via username, or id? or email?)
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
  //   likes: [
  //     {
  //       username: String,
  //       createdAt: String,
  //     },
  //   ],
  //   user: {
  //     //linking the post to a specific user (type is referring to another schema obj)...
  //     type: Schema.Types.ObjectId,
  //     //passing the table or collection called 'users' allows to later use mongoose to auto populate the users field and be able to use in case some mongoose methods.
  //     ref: "users",
  //   },


module.exports = model("Stats", statsSchema);
