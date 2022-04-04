import { GraphQLString } from "graphql";

const greetings = {
  type: GraphQLString,
  resolve: () => 'hello world',

};

export default greetings;