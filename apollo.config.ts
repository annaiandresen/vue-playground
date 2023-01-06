module.exports = {
  client: {
    service: {
      name: "vue-playground",
      // URL to the GraphQL API
      uri: "https://rickandmortyapi.com/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/*.vue"],
  },
};
