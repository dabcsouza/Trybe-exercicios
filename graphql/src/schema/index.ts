import { GraphQLObjectType, GraphQLSchema } from "graphql";
import greetings from "./queries/greetings";

const rootQuery = new GraphQLObjectType({
  name: 'root',
  fields: {
    greetings,
  }
});
export default new GraphQLSchema({
  query: rootQuery,
  // mutation: {},
});

