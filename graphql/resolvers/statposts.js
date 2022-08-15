// const { AuthenticationError } = require("apollo-server");
const Stats = require("../../models/Stats");
// const checkAuth = require("../../util/checkAuth");

//note 3
module.exports = {
  Query: {
    async getStats() {
      try {
        const stats = await Stats.find();
        return stats;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getSingleStats(_, { statsId }) {
      try {
        const singlestats = await Stats.findById(statsId);
        if (singlestats) {
          return singlestats;
        } else {
          throw new Error("Stats not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

//   Mutation: {
//     async createStats(_, { body }, context) { //Here!! I dont know what goes there to replace "body!!"
//       const user = checkAuth(context);

//       const newStats = new Stats({
//         body,  //Here!! I dont know what goes there to replace "body!!"
//         user: user.id,
//         username: user.username,
//         createdAt: new Date().toISOString(),
//       });
//       const stats = await newStats.save();

//       return stats;
//     },

// };
