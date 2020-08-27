const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const MainSpeciesType = require('./MainSpeciesType');




const PlantDetailType = new GraphQLObjectType({
  name: 'PlantDetail',
  fields: () => ({
    common_name: {
      type: GraphQLString
    },
    _id: {
      type: GraphQLInt,
      resolve:
        ({id}) => id,

    },
    family_common_name: {
      type: GraphQLString
    },
    scientific_name: {
      type: GraphQLString
    },
    main_species: {
      type: MainSpeciesType
    },
    image_url: {
      type: GraphQLString
    },
    duration: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    }
  })
})

module.exports = PlantDetailType;
