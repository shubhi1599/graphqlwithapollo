const gql = require('graphql-tag');

const typeDefs = gql`

 type Query {
    tracksForHome: [Track!]!
 }

 type Track {
    id: ID!
    title: String
    thumbnail: String
    author: Author!
    length: Int
    moduleCount: Int 
 }

 type Author {
    id: ID!
    name: String
    photo: String
 }
`

module.exports = typeDefs;