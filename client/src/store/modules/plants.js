import axios from 'axios';

const state = {
  plants: [

  ],
  selectedPlant: {},
  randomPlant: {}
};

const getters = {
  allPlants: (state) => state.plants,
  selectedPlant: (state) => state.selectedPlant,
  randomPlant: state => state.randomPlant
}


const actions = {
  async fetchPlants({commit}){
    const response = await axios.get('http://localhost:9000/plants');
    commit('setPlants', response.data)
  },
  async fetchPlant({commit}, id){
    const response = await axios.get('http://localhost:9000/plant/' + id)
    commit('setPlant', response.data)},

 async fetchRandomPlant({commit}, id){
   const response = await axios.get('http://localhost:9000/plant/' + id)
   commit('setRandomPlant', response.data)
 }
 }





const mutations = {
  setPlants: (state, plants) => (state.plants = plants),
  setPlant: (state, selectedPlant) => (state.selectedPlant = selectedPlant),
  setRandomPlant: (state, randomPlant) => (state.randomPlant = randomPlant)
}

export default{
  state,
  getters,
  actions,
  mutations
}
