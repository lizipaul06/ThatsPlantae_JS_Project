const {GraphQLObjectType,GraphQLString, GraphQLInt} = require('graphql');
const PlantType = new GraphQLObjectType({
  name: 'Plant',
  fields: () => (
    {
      common_name: {type: GraphQLString},
      id: {type: GraphQLInt},
      link: {type: GraphQLString},
      family_common_name: {type: GraphQLString},
            slug:{type: GraphQLString}
    })
});

module.exports = PlantType;
