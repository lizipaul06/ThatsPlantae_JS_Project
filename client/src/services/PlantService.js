const baseURL = 'http://localhost:9000/hello' //BaseURL may need to change due to back-end.
// const indivURL = 'http://localhost:9000/plant'
 export default {

   //this function shall get us our plants(nae details)
   getPlants(){
     return fetch(baseURL)
     .then(res => res.json())
   },

   getPlant(link){
     return fetch(link)
     .then(res => res.json())
   },


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
