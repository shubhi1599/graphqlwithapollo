const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServere() {
//   const server = new ApolloServer({ typeDefs });

  /** Another way to initialize an apollo server by passing schema directly */
  /** Instead of passing directly typeDefs we pass pass schema to test data */

  const server = new ApolloServer({
    schema: addMocksToSchema({
        schema: makeExecutableSchema({typeDefs}),
        mocks,
    })
  })

  /** To start the server we use startStandaloneServer by passing an url */
  const { url } = await startStandaloneServer(server);
  console.log(`server is running on ${url}`);
}

startApolloServere();