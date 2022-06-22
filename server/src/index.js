const { ApolloServer } = require('apollo-server');
const {urlPhoto, urlThumbnail } = require('./constants/index');
const typeDefs = require('./schema');

const mocks = {
  Query: () => ({
    tracksForHome: () => [
      ...new Array(6)
    ]
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo: urlPhoto
      };
    },
    thumbnail: () => urlThumbnail,
    length: () => 1210,
    modulesCount: () => 6
  })
};

const server = new ApolloServer({ 
  typeDefs,
  mocks
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
})
