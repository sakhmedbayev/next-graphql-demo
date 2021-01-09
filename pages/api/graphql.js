import { ApolloServer, gql } from "apollo-server-micro";
import knex from "knex";
import { blogPosts } from "..";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
  useNullAsDefault: true,
});

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    text: String!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    postId: String
    author: String!
    text: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String!, text: String!): Post!
    createComment(postId: ID!, author: String!, text: String!): Comment!
  }
`;

const resolvers = {
  Post: {
    comments: async (parent, args, _context) => {
      return await db.select("*").from("comment").where({ postId: parent.id });
    },
  },

  Query: {
    posts: async (_parent, args, _context) => {
      return await db.select("*").from("post");
    },
  },

  Mutation: {
    createPost: async (_parent, { title, text }, _context) => {
      const [id] = await db
        .insert({
          title,
          text,
        })
        .into("post");

      const insertedPost = await db
        .select("*")
        .from("post")
        .where({ id })
        .first();

      return insertedPost;
    },
    createComment: async (_parent, { postId, author, text }, _context) => {
      const [id] = await db
        .insert({
          postId,
          author,
          text,
        })
        .into("comment");

      const insertedComment = await db
        .select("*")
        .from("comment")
        .where({ id })
        .first();

      return insertedComment;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {};
  },
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
