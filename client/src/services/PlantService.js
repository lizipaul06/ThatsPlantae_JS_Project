
const dbBaseURL = 'http://localhost:3000/api/garden/'
const baseURL = 'http://localhost:9000/plants' //BaseURL may need to change due to back-end.
const individualURL = 'http://localhost:9000/plant/'


 export default {

// API ROUTES
   //this function shall get us our plants(nae details)
   // from the front end server via the api
   getPlants(){
     return fetch(baseURL)
     .then(res => res.json())
   },

   // this function returns the detailed data for an individual plant
   // again from the front end server via api
   getPlant(id){
     return fetch(individualURL + id)
     .then(res => res.json())
   },

// MONGO DB ROUTES
   // retrieve all the plants from our garden DB
   getMyPlants(){
     return fetch(dbBaseURL)
     .then(res => res.json())
   },
   //we should be able to post something to our mongo DB
   // this will add a plant to our garden
   postPlant(payload){
     return fetch(dbBaseURL, {
       method: 'POST',
       body: JSON.stringify(payload),
       headers: {'Content-Type': 'application/json'}
     })
     .then(res => res.json())
   },

   //we can update entries in our garden.
   updatePlant(id, payload){
     return fetch(dbBaseURL + id, {
       method: 'PUT',
       body: JSON.stringify(payload),
       headers: {'Content-Type': 'application/json'}
     })
     .then(res => res.json())
   },

   //one of our plants from out db can be deleted
   deletePlant(id, payload){
     return fetch(dbBaseURL + id, {
       method: 'DELETE'
     })
   }
 }
