const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { Workout } = require("./models");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");
const env = require("dotenv");

env.config();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({
    schema,
    context: async () => {
        try {
        await mongoose
        .connect(
            process.env.DBSTRING, 
            { useUnifiedTopology: true, useNewUrlParser: true }
        )
        } catch (error) {
          console.log('could not connect to the database', error)
        }
  
      return { models: { Workout } }
    },
  })

server.listen(4000);
console.log("\n\x1b[36mWorkouts running on port 4000\n")

