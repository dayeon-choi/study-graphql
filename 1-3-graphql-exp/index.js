const { ApolloServer } = require("apollo-server");

const queries = require("./typedefs-resolvers/_queries");
const mutations = require("./typedefs-resolvers/_mutations");
const enums = require("./typedefs-resolvers/_enums");
const teams = require("./typedefs-resolvers/teams");
const people = require("./typedefs-resolvers/people");
const roles = require("./typedefs-resolvers/roles");
const equipments = require("./typedefs-resolvers/equipments");
const softwares = require("./typedefs-resolvers/softwares");
const supplies = require("./typedefs-resolvers/supplies");
const tools = require("./typedefs-resolvers/tools");
const givens = require("./typedefs-resolvers/givens");

const typeDefs = [
  queries,
  mutations,
  enums,
  teams.typeDefs,
  people.typeDefs,
  roles.typeDefs,
  equipments.typeDefs,
  softwares.typeDefs,
  supplies.typeDefs,
  tools.typeDefs,
  givens.typeDefs,
];

const resolvers = [
  teams.resolvers,
  people.resolvers,
  roles.resolvers,
  equipments.resolvers,
  softwares.resolvers,
  supplies.resolvers,
  tools.resolvers,
  givens.resolvers,
];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/*
GraphQL의 강점 나의 언어로 요약
: 필요한 정보들만 원하는 만큼 부족하지도 과하지도 않게 한번에 가져오고 요청할 수 있음
*/
