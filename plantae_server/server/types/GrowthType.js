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
    precipitation_minimum: {
      type: InchesType
    },
    precipitation_maximum: {
      type: InchesType
    },
    ph_minimum: {
      type: GraphQLString
    },
    ph_maximum: {
      type: GraphQLString
    },
    shade_tolerance: {
      type: GraphQLString
    },
    root_depth_minimum: {
      type: InchesType
    },
  })
})

module.exports = GrowthType;