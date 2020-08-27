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
        commonName
        slug
      }
      }`,
    });
    commit('setPlants', response.data.plants)

  },
  async fetchPlant({
    commit
  }, slug) {
   console.log(slug)
    const response = await graphqlClient.query({
      query: gql `
      query plantDetail($slug: String!) {
        plantDetail(slug: $slug) {
          slug
          commonName
          _id
          familyCommonName
          scientificName
          imageUrl
          duration
          mainSpecies {
            growth {
              precipitationMinimum {
                inches
              }
              precipitationMaximum {
                inches
              }
              phMinimum
              phMaximum
              shadeTolerance
              rootDepthMinimum {
                inches
              }
            }
            flower {
              color
            }



          }
          }
        }
      `,
      variables: {
        slug: slug
      },
    });
    console.log(response)
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
                  commonName
                  _id
                  familyCommonName
                  scientificName
                  imageUrl
                  duration
                  mainSpecies {
                    growth {
                      precipitationMinimum {
                        inches
                      }
                      precipitationMaximum {
                        inches
                      }
                      phMinimum
                      phMaximum
                      shadeTolerance
                      rootDepthMinimum {
                        inches
                      }
                    }
                    flower {
                      color
                    }



                  }
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
       commonName
       _id
       imageUrl
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
