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
    return owned.map(plant => plant.image_url)

  }


}

const actions = {
  async fetchGardenPlants({
    commit
  }) {
    const response = await axios.get('http://localhost:3000/api/garden')
    console.log(response.data)
    commit('setGardenPlants', response.data)

  },
  async updatePlantStatus({
    commit
  }, updatedPlant) {
    console.log(updatedPlant)
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
  async deletePlant({
    commit
  }, _id) {
    console.log(_id)
    await axios.delete(`http://localhost:3000/api/garden/${_id}`)
    commit('removePlant', _id);
  }

}
const mutations = {
  setGardenPlants(state, gardenPlants) {
    state.gardenPlants = gardenPlants
  },
  newPlant(state, plant) {
    setGardenPlants.push({
      plant
    })

  },
  removePlant(state, _id) {


console.log(_id)
 return state.gardenPlants = state.gardenPlants.filter(plant => plant._id !== _id)
    console.log(state.gardenPlants)
  },
  addPlant(state, updatedPlant) {

    const index = state.gardenPlants.findIndex(plant => plant._id == updatedPlant._id);

       // it will properly update an array item, but also it will trigger getUsersNames()


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
