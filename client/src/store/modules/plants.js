import axios from 'axios';
import gql from 'graphql-tag';

import graphqlClient from '../../utils/graphql';

const state = {
  plants: [

  ],
  selectedPlant: {},
  randomPlant: {},
  gardenPlant: {}
};

const getters = {
  allPlants: (state) => state.plants,
  selectedPlant: (state) => state.selectedPlant,
  randomPlant: state => state.randomPlant,
  gardenPlant: state => state.gardenPlant
}


const actions = {
  async fetchPlants({commit}){
    const response = await graphqlClient.query({
      query: gql`
          query{
       plants{
        id
        common_name
        slug
      }
      }`,
    });
    commit('setPlants', response.data.plants)

},
  async fetchPlant({commit}, slug){
      const response = await graphqlClient.query({
    query: gql`
      query PlantDetail($slug: String!) {
        plantDetail(slug: $slug) {
          slug
common_name
id
main_species {
growth{
precipitation_minimum{
inches
}
precipitation_maximum{
inches
}
ph_minimum
ph_maximum
shade_tolerance
root_depth_minimum{
inches
}
}
flower{
color
}
},
image_url
duration
        }
      }`,
                  variables:{slug: slug},
    });
    commit('setPlant', response.data.plantDetail)
  },


      async fetchPlantDetailsGarden({ commit }, slug) {
        const response = await graphqlClient.query({
          // It is important to not use the
          // ES6 template syntax for variables
          // directly inside the `gql` query,
          // because this would make it impossible
          // for Babel to optimize the code.
          query: gql`
            query PlantDetail($slug: String!) {
              plantDetail(slug:$slug) {
                slug
common_name
id
main_species {
growth{
  precipitation_minimum{
    inches
  }
  precipitation_maximum{
  inches
}
  ph_minimum
  ph_maximum
  shade_tolerance
  root_depth_minimum{
    inches
  }
}
flower{
  color
}

  image_url
duration
              }
            }`,
            variables:{slug: slug},
          });
          commit('setPlant', response.data)
       },

 async fetchRandomPlant({commit}, slug){
   const response = await graphqlClient.query({
     // It is important to not use the
     // ES6 template syntax for variables
     // directly inside the `gql` query,
     // because this would make it impossible
     // for Babel to optimize the code.
     query: gql`
       query PlantDetail($slug: slug) {
         plantDetail(slug: $slug) {
           slug
common_name
id
main_species {
growth{
precipitation_minimum{
inches
}
precipitation_maximum{
inches
}
ph_minimum
ph_maximum
shade_tolerance
root_depth_minimum{
inches
}
}
flower{
color
}
},
image_url
duration
         }
       }`,
         variables:{slug: slug},
     });
   commit('setRandomPlant', response.data)
}
}







const mutations = {
  setPlants: (state, plants) => (state.plants = plants),
  setPlant: (state, selectedPlant) => (state.selectedPlant = selectedPlant),
  setRandomPlant: (state, randomPlant) => (state.randomPlant = randomPlant),
  setPlantDetails: (state, gardenPlant) => (state.gardenPlant = gardenPlant)
}

export default{
  state,
  getters,
  actions,
  mutations
}
