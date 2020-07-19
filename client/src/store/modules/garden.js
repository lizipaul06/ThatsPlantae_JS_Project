import axios from 'axios'

const state = {
  gardenPlants: [],
  updatedPlant: ""

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
    async updatePlant({commit}, updatedPlant){
  console.log(updatedPlant)
    await   axios.put(`http://localhost:3000/api/garden/${updatedPlant._id}`, {status: updatedPlant.status})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
          commit('updatePlant', updatedPlant);
    },
    async deletePlant({commit}, id){
    await axios.delete(`http://localhost:3000/api/garden/${id}`)
        commit('removePlant', id);
    }

  }
  const mutations = {
    setGardenPlants(state, gardenPlants){
    state.gardenPlants = gardenPlants
  },
   newPlant(state, plant){
    setGardenPlants.push({plant})

   },
   removePlant(state, id){
     state.gardenPlants = state.gardenPlants.filter(plant => plant._id !== id)
   },
   updatePlant(state, updatedPlant){
     console.log(updatedPlant)
     const index = state.gardenPlants.findIndex(plant => plant._id == updatedPlant._id);
     console.log(index)
     if(index !== -1){
       state.gardenPlants.splice(index, 1, updatedPlant)
     }
   }

  }

  export default{
    state,
    getters,
    actions,
    mutations
  }