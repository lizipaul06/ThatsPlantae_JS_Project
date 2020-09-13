const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const MainSpeciesType = require('./MainSpeciesType');




const PlantDetailType = new GraphQLObjectType({
  name: 'PlantDetail',
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
    familyCommonName: {
      type: GraphQLString,
      resolve:
        ({family_common_name}) => family_common_name,
    },
    scientificName: {
      type: GraphQLString,
      resolve:
        ({scientific_name}) => scientific_name,
    },
    mainSpecies: {
      type: MainSpeciesType,
      resolve:
        ({main_species}) => main_species,
    },
    imageUrl: {
      type: GraphQLString,
      resolve:
        ({image_url}) => image_url
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
