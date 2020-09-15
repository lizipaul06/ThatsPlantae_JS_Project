import axios from 'axios'

const state = {
  gardenPlants: [],
  updatedPlant: ""

};

const getters = {
  allGardenPlants: (state) => state.gardenPlants,
  ownedGardenPlants: (state) => {
    return state.gardenPlants.filter(plant => plant.owned == true)
  },
  wishlistPlants: (state) => {
    return state.gardenPlants.filter(plant => plant.owned == false)
  },
  plantUrls: (state) => {
    let owned = state.gardenPlants.filter(plant => plant.owned)
    return owned.map(plant => plant.imageUrl)

  }


}

const actions = {
  async fetchGardenPlants({
    commit
  }) {
    const response = await axios.get('http://localhost:3000/api/garden')
    commit('setGardenPlants', response.data)

  },
  async updatePlantStatus({
    commit
  }, updatedPlant) {
    await axios.put(`http://localhost:3000/api/garden/${updatedPlant._id}`, {
      mood: updatedPlant.mood
    })
    commit('updatePlant', updatedPlant);
  },
  async updatePlantOwned({
    commit
  }, updatedPlant) {
     await axios.post(`http://localhost:3000/api/garden`, {

           ...updatedPlant,
           _id: updatedPlant._id
    })

    commit('addPlant', updatedPlant);
  },
  async updatePlantWished({
    commit
  }, updatedPlant) {


   await axios.post(`http://localhost:3000/api/garden/${updatedPlant._id}`, {

         ...updatedPlant,
         _id: updatedPlant._id
  })


    commit('updatePlant', updatedPlant);

  },
  async deletePlant({
    commit
  }, _id) {
    await axios.delete(`http://localhost:3000/api/garden/${_id}`)
    commit('removePlant', _id);
  }

}
const mutations = {
  setGardenPlants(state, gardenPlants) {
    state.gardenPlants = gardenPlants
  },
  newPlant(state, plant) {
    state.gardenPlants.push({
      plant
    })

  },
  removePlant(state, _id) {

 return state.gardenPlants = state.gardenPlants.filter(plant => plant._id !== _id)

  },
  addPlant(state, updatedPlant) {


      return state.gardenPlants =  state.gardenPlants.push( updatedPlant)

  },
  updatePlant(state, updatedPlant) {
    const index = state.gardenPlants.findIndex(plant => plant._id == updatedPlant._id);
    if (index !== -1) {
      return state.gardenPlants.splice(index, 1, updatedPlant)
    }
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
