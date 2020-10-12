export const typeDef = `
# Root Query
type Query {
    testString: String
    testStringConnector: PersonType 
}
`;

export const resolver = {
  Query: {
    testString() {
      return "it Works!";
    },
    testStringConnector(root, args, ctx) {
      return ctx.testConnector.testString;
    },
  },
};
