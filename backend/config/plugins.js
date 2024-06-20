// module.exports = () => ({});

// module.exports = {
// other plugins...
//   graphql: {
//     enabled: true,
//     config: {},
//   },
// };


module.exports = {
  //
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
};