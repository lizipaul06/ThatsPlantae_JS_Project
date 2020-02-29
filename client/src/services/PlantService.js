<<<<<<< HEAD

const baseURL = 'http://localhost:9000/plants' //BaseURL may need to change due to back-end.
const individualURL = 'http://localhost:9000/plant/'


=======
const baseURL = 'http://localhost:9000/hello'
const individualURL = 'http://localhost:9000/plant/'
>>>>>>> eb94fc2eda332963a3e8a2b3a544571602ad7465

 export default {

   //this function shall get us our plants(nae details)
   getPlants(){
     return fetch(baseURL)
     .then(res => res.json())
   },

   getPlant(id){
     return fetch(individualURL + id)
     .then(res => res.json())
   },
<<<<<<< HEAD
=======

>>>>>>> eb94fc2eda332963a3e8a2b3a544571602ad7465
   //we should be able to post something to our DB.
   postPlant(payload){
     return fetch(baseURL, {
       method: 'POST',
       body: JSON.stringify(payload),
       headers: {'Content-Type': 'application/json'}
     })
     .then(res => res.json())
   },

   //we can update our garden.
   updateGarden(id, payload){
     return fetch(baseURL + id, {
       method: 'PUT',
       body: JSON.stringify(payload),
       headers: {'Content-Type': 'application/json'}
     })
     .then(res => res.json())
   },

   //one of our plants from out db can be deleted
   deletePlant(id, payload){
     return fetch(baseURL + id, {
       method: 'DELETE'
     })
   }
 }
