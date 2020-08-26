const axios = require('axios')
const {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLNonNull, GraphQLList, GraphQLSchema} = require('graphql');
const TOKEN = require("./token.js");
const BASE_URL = "https://trefle.io/api/v1/plants"
const PlantType = require('./Types/PlantType.js');
const PlantDetailType = require('./Types/PlantDetailType.js');

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





const UrlType = new GraphQLObjectType({
  name: 'Url',
  fields: () =>({
    url: {type: GraphQLString}
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

const getUsers = async function(pageNo = 1) {

let actualUrl =`${BASE_URL}${TOKEN}&filter_not[edible_part]&&filter_not[image_url]=null&&filter_not[common_name]=null&&order[common_name]=asc&page=${pageNo}`
 var apiResults= await axios.get(actualUrl)
.then(res=> res.data.data);

return apiResults;

}

const getEntireUserList = async function(pageNo = 1) {
  const results = await getUsers(pageNo);

  console.log("Retreiving data from API for page : " + pageNo);
  if (pageNo < 6) {
    return results.concat(await getEntireUserList(pageNo+1));
  } else {
      // console.log(results)
    return results;

  }
};



    const entireList= getEntireUserList();
    return entireList

}
    //
    //   return axios.get(`${BASE_URL}/${TOKEN}&page=1&complete_data=true&page_size=1953`)
    //   .then( res => res.data.data);
    // }
  },
//trefle.io/api/v1/plants/XgX9f2jJkjLUOIZpht4FiqGeQ610go07jk_QV_nstwg&page=1&complete_data=true&page_size=1953
  //
  // plant: {
  //    type: PlantType,
  //    description: 'One plant',
  //  },
   plantDetail:{
     type: PlantDetailType,
     args: {
       slug:{ type: new GraphQLNonNull(GraphQLString)}
     },
     resolve: ( _, args) => {

       let {slug} = args
       return axios.get(`${BASE_URL}/${slug}/${TOKEN}`)
       .then(response => response.data.data)
     }
     }




}

})


module.exports = new GraphQLSchema({
  query: RootQuery
})
