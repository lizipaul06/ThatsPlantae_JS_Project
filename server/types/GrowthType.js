const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const InchesType = new GraphQLObjectType({
  name: 'inches',
  fields: () => ({
    inches: {
      type: GraphQLString
    }
  })
})

const GrowthType = new GraphQLObjectType({
  name: 'Growth',
  fields: () => ({
    precipitationMinimum: {
      type: InchesType,
      resolve:
        ({precipitation_minimum}) => precipitation_minimum,
    },
    precipitationMaximum: {
      type: InchesType,
      resolve:
        ({precipitation_maximum}) => precipitation_maximum,
    },
    phMinimum: {
      type: GraphQLString,
      resolve:
        ({ph_minimum}) => ph_minimum,
    },
    phMaximum: {
      type: GraphQLString,
      resolve:
        ({ph_maximum}) => ph_maximum,
    },
    shadeTolerance: {
      type: GraphQLString,
      resolve:
        ({shade_tolerance}) => shade_tolerance,
    },
    rootDepthMinimum: {
      type: InchesType,
      resolve:
        ({root_depth_minimum}) => root_depth_minimum,
    },
  })
})

module.exports = GrowthType;
