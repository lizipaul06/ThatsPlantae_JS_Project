const {GraphQLObjectType,GraphQLString, GraphQLInt, GraphQLList} = require('graphql');
const GrowthType = require('./GrowthType')


const FlowerType = new GraphQLObjectType({
  name: 'Flower',
  fields: () =>({
    color: { type: new GraphQLList(GraphQLString)  }
  })
})




const MainSpeciesType = new GraphQLObjectType({
  name: 'MainSpecies',
  fields: () =>({
    growth: {type: GrowthType},
    flower: {type: FlowerType}
  })
})

module.exports = MainSpeciesType;
