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
  async fetchPlants({
    commit
  }) {
    const response = await graphqlClient.query({
      query: gql `
          query{
       plants{
        _id
        common_name
        slug
      }
      }`,
    });
    commit('setPlants', response.data.plants)

  },
  async fetchPlant({
    commit
  }, slug) {
    const response = await graphqlClient.query({
      query: gql `
      query plantDetail($slug: String!) {
        plantDetail(slug: $slug) {
          slug
          common_name
          _id
          scientific_name
          family_common_name
          main_species {
            growth {
              precipitation_minimum {
                inches
              }
              precipitation_maximum {
                inches
              }
              ph_minimum
              ph_maximum
              shade_tolerance
              root_depth_minimum {
                inches
              }
            }
            flower {
              color
            }
          },
          image_url
          duration
        }
      }
      `,
      variables: {
        slug: slug
      },
    });
    console.log(response.data.plantDetail)
    commit('setPlant', response.data.plantDetail)
  },


  async fetchPlantDetailsGarden({
    commit
  }, slug) {
    console.log(slug)
    const response = await graphqlClient.query({
      // It is important to not use the
      // ES6 template syntax for variables
      // directly inside the `gql` query,
      // because this would make it impossible
      // for Babel to optimize the code.
      query: gql `
            query plantDetail($slug: String!) {
                plantDetail(slug: $slug) {
                  slug
                  common_name
                  _id
                  family_common_name
                    scientific_name
                  main_species {
                    growth {
                      precipitation_minimum {
                        inches
                      }
                      precipitation_maximum {
                        inches
                      }
                      ph_minimum
                      ph_maximum
                      shade_tolerance
                      root_depth_minimum {
                        inches
                      }
                    }
                    flower {
                      color
                    }

                    image_url
                    duration
                  }
                }
                `,
      variables: {
        slug: slug
      },
    });
    console.log(response)
    commit('setPlantDetails', response.data.plantDetail)
  },

  async fetchRandomPlant({
    commit
  }, slug) {
    const response = await graphqlClient.query({
      query: gql `
   query plantDetail($slug: String!) {
     plantDetail(slug: $slug) {
       slug
       common_name
       _id
       image_url
     }
   }
   `,
      variables: {
        slug: slug
      },
    });

    console.log(response.data.plantDetail)
    commit('setRandomPlant', response.data.plantDetail)
  }
}







const mutations = {
  setPlants: (state, plants) => (state.plants = plants),
  setPlant: (state, selectedPlant) => (state.selectedPlant = selectedPlant),
  setRandomPlant: (state, randomPlant) => (state.randomPlant = randomPlant),
  setPlantDetails: (state, gardenPlant) => (state.gardenPlant = gardenPlant)
}

export default {
  state,
  getters,
  actions,
  mutations
}
