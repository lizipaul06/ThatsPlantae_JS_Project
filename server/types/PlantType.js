const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const PlantType = new GraphQLObjectType({
  name: 'Plant',
  fields: () => ({
    commonName: {
      type: GraphQLString,
      resolve:
        ({common_name}) => common_name,
    },
    _id: {
      type: GraphQLInt,
      resolve:
        ({id}) => id,
    },
    link: {
      type: GraphQLString
    },
    familyCommonName: {
      type: GraphQLString,
      resolve:
        ({family_common_name}) => family_common_name,
    },
    slug: {
      type: GraphQLString
    }
  })
});

module.exports = PlantType;
