import axios from 'axios'

const state = {
  gardenPlants: [],

};

const getters = {
  allGardenPlants: (state) => state.gardenPlants,
  ownedGardenPlants: (state) => {
      return state.gardenPlants.filter(plant => plant.owned)
    },
    wishlistPlants: (state) => {
        return state.gardenPlants.filter(plant => plant.owned == false)
      },
      plantUrls: (state) => {
      let owned =  state.gardenPlants.filter(plant => plant.owned )
      return owned.map(plant => plant.images[0])

      }


  }

  const actions = {
    async fetchGardenPlants({commit}){
      const response = await axios.get('http://localhost:3000/api/garden')
      commit('setGardenPlants', response.data)

    },

  }
  const mutations = {
    setGardenPlants(state, gardenPlants){
    state.gardenPlants = gardenPlants
  },


  }

  export default{
    state,
    getters,
    actions,
    mutations
  }
