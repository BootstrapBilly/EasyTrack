const express = require('express');
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const mongoose = require("mongoose");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { Workout, Exercise, Session } = require("./models");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");
const env = require("dotenv");
const { verifyjwt } = require("./middleware");

env.config();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {

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
  
      return { models: { Workout, Exercise, Session } }
    },
  })

  await server.start();

  const app = express();

  app.use(cors(
    // { origin: "https://geteasytrack.web.app", credentials: true}
   { origin: "http://localhost:3000", credentials: true }
    ));
  app.use(verifyjwt);
  
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

 startApolloServer()

