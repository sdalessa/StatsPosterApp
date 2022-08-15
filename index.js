const {ApolloServer} = require('apollo-server');
//below one of the dependencies of ApolloServer
//const gql = require('graphql-tag');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
//note 4
//note 6
const Stats = require('./models/Stats')
//mongoDB connection string
const {MONGODB} = require('./config.js') 
 
//set up Apollo server instance. Takes the typeDef 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});
//to avoid deprec warnings
mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('MongoDB Connected')
    return server.listen({port: 4001})
})
.then((res) =>{
    console.log(`Server running at ${res.url}`)
})

// not using: {UseUnifiedTopology: true}
//starting server

    
