const axios = require('axios')
const {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLNonNull, GraphQLList, GraphQLSchema} = require('graphql');
const TOKEN = require("./token.js");
const BASE_URL = "https://trefle.io/api/v1/plants"

const InchesType = new GraphQLObjectType({
  name: 'inches',
  fields: () =>({
    inches: {type: GraphQLString}
  })
})
const GrowthType = new GraphQLObjectType({
  name: 'Growth',
  fields: () =>({
    precipitation_minimum: {type: InchesType},
    precipitation_maximum: {type: InchesType},
    ph_minimum: {type: GraphQLString},
    ph_maximum: {type: GraphQLString},
    shade_tolerance: {type: GraphQLString},
    root_depth_minimum: {type: InchesType},
  })
})

const ColorType = new GraphQLObjectType({
  name: 'Color',
    fields: () =>({
      colors: {type: GraphQLString}
    })
})

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
const UrlType = new GraphQLObjectType({
  name: 'Url',
  fields: () =>({
    url: {type: GraphQLString}
  })
})

const PlantType = new GraphQLObjectType({
  name: 'Plant',
  fields: () => (
    {
      common_name: {type: GraphQLString},
      id: {type: GraphQLInt},
      link: {type: GraphQLString}
    })
})

const PlantDetailType = new GraphQLObjectType({
  name: 'PlantDetail',
  fields: () => (
    {
      common_name: {type: GraphQLString},
      id: {type: GraphQLInt},
      main_species: {type: MainSpeciesType},
          image_url: {type: GraphQLString},
      duration: {type: GraphQLString}
    })
})



// XgX9f2jJkjLUOIZpht4FiqGeQ610go07jk_QV_nstwg
//root query

const RootQuery = new GraphQLObjectType({
  name: 'rootQueryName',
  fields:{
  plants: {
    type: new GraphQLList(PlantType),
    resolve(parent, args){
      return axios.get(`${BASE_URL}/${TOKEN}&page=1&complete_data=true&page_size=1953`)
      .then( res => res.data.data);
    }
  },
  //
  // plant: {
  //    type: PlantType,
  //    description: 'One plant',
  //  },
   plantDetail:{
     type: PlantDetailType,
     args: {
       id:{ type: new GraphQLNonNull(GraphQLString)}
     },
     resolve: ( _, args) => {
       let {id} = args
       return axios.get(`${BASE_URL}/${id}/${TOKEN}`)
       .then(response => response.data.data)
     }
     }




}
})


module.exports = new GraphQLSchema({
  query: RootQuery
})
