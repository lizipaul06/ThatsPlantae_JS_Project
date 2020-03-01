<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plants="plants" />
    <plant-list :plants="fakePlants"></plant-list>
    <ul>
      <li v-for="(plant, index) in this.plants" :key="index" :plant="plant"> {{plant.common_name}} </li>
    </ul>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/PlantList.vue';
import Search from './components/Search.vue';

export default {
  name:'app',
  components: {
    "plant-list": PlantList,
    "search": Search
  },
  data(){
    return{
      plants:[],
      plantData: [],
      plantDetails: [],
      // an array of fake plants to use to test search function etc.
      // To be replaced by plantDetails once data returning correctly
      fakePlants: [
        {
          "varieties": [
            {
              "year": null,
              "type": "var",
              "synonym": false,
              "status": "Unknown",
              "sources": [
                {
                  "species_id": 149927,
                  "source_url": "https://plants.usda.gov",
                  "name": "USDA",
                  "last_update": "2019-01-11T10:36:42.092963"
                }
              ],
              "slug": "liatris-pycnostachya-var-lasiophylla",
              "scientific_name": "Liatris pycnostachya var. lasiophylla",
              "main_species_id": 149926,
              "link": "http://trefle.io/api/plants/149927",
              "is_main_species": false,
              "id": 149927,
              "family_common_name": "Aster family",
              "complete_data": true,
              "common_name": "prairie blazing star",
              "bibliography": null,
              "author": null
            },
            {
              "year": null,
              "type": "var",
              "synonym": false,
              "status": "Unknown",
              "sources": [
                {
                  "species_id": 149928,
                  "source_url": "https://plants.usda.gov",
                  "name": "USDA",
                  "last_update": "2019-01-11T10:36:42.232873"
                }
              ],
              "slug": "liatris-pycnostachya-var-pycnostachya",
              "scientific_name": "Liatris pycnostachya var. pycnostachya",
              "main_species_id": 149926,
              "link": "http://trefle.io/api/plants/149928",
              "is_main_species": false,
              "id": 149928,
              "family_common_name": "Aster family",
              "complete_data": true,
              "common_name": "prairie blazing star",
              "bibliography": null,
              "author": null
            }
          ],
          "sub_species": [],
          "scientific_name": "Liatris pycnostachya",
          "order": {
            "slug": "asterales",
            "name": "Asterales",
            "link": "http://trefle.io/api/division_orders/12",
            "id": 12
          },
          "native_status": "L48(N)",
          "main_species": {
            "year": null,
            "type": "species",
            "synonym": false,
            "status": "Unknown",
            "specifications": {
              "toxicity": "None",
              "shape_and_orientation": "Erect",
              "regrowth_rate": "Slow",
              "nitrogen_fixation": "None",
              "max_height_at_base_age": {
                "ft": null,
                "cm": null
              },
              "mature_height": {
                "ft": 3.5,
                "cm": 106.67479427003961
              },
              "low_growing_grass": null,
              "lifespan": "Moderate",
              "leaf_retention": null,
              "known_allelopath": null,
              "growth_rate": "Slow",
              "growth_period": "Summer",
              "growth_habit": "Forb/herb",
              "growth_form": "Multiple Stem",
              "fire_resistance": null,
              "fall_conspicuous": null,
              "coppice_potential": null,
              "c_n_ratio": "Medium",
              "bloat": "None"
            },
            "sources": [
              {
                "species_id": 149926,
                "source_url": "https://plants.usda.gov",
                "name": "USDA",
                "last_update": "2019-01-11T10:36:41.926805"
              }
            ],
            "soils_adaptation": {
              "medium": true,
              "fine": true,
              "coarse": true
            },
            "slug": "liatris-pycnostachya",
            "seed": {
              "vegetative_spread_rate": "None",
              "small_grain": null,
              "seeds_per_pound": 120000,
              "seedling_vigor": "Medium",
              "seed_spread_rate": "Slow",
              "commercial_availability": "Routinely Available",
              "bloom_period": "Mid Summer"
            },
            "scientific_name": "Liatris pycnostachya",
            "propagation": {
              "tubers": null,
              "sprigs": null,
              "sod": null,
              "seed": true,
              "cuttings": null,
              "corms": true,
              "container": true,
              "bulbs": null,
              "bare_root": null
            },
            "products": {
              "veneer": null,
              "pulpwood": null,
              "protein_potential": "Medium",
              "post": null,
              "palatable_human": null,
              "palatable_graze_animal": "Low",
              "palatable_browse_animal": "Low",
              "nursery_stock": true,
              "naval_store": null,
              "lumber": null,
              "fuelwood": null,
              "fodder": null,
              "christmas_tree": null,
              "berry_nut_seed": null
            },
            "native_status": "L48(N)",
            "main_species_id": null,
            "is_main_species": true,
            "images": [
              {
                "url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Liatris_pycnostachya_var._pycnostachya.jpg"
              },
              {
                "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/SeedsLiatrispycnostachya.jpg"
              }
            ],
            "id": 149926,
            "growth": {
              "temperature_minimum": {
                "deg_f": -23,
                "deg_c": -30.555555555555554
              },
              "shade_tolerance": "Intolerant",
              "salinity_tolerance": "None",
              "root_depth_minimum": {
                "inches": 14,
                "cm": 35.56007112014225
              },
              "resprout_ability": null,
              "precipitation_minimum": {
                "inches": 18,
                "cm": 45.720091440182884
              },
              "precipitation_maximum": {
                "inches": 26,
                "cm": 66.04013208026417
              },
              "planting_density_minimum": {
                "sqm": 10926522,
                "acre": 2700
              },
              "planting_density_maximum": {
                "sqm": 28328020,
                "acre": 7000
              },
              "ph_minimum": 6,
              "ph_maximum": 7.8,
              "moisture_use": "Medium",
              "hedge_tolerance": "None",
              "frost_free_days_minimum": 120,
              "fire_tolerance": "High",
              "fertility_requirement": "Medium",
              "drought_tolerance": "Low",
              "cold_stratification_required": true,
              "caco_3_tolerance": "High",
              "anaerobic_tolerance": "Medium"
            },
            "fruit_or_seed": {
              "seed_persistence": null,
              "seed_period_end": "Fall",
              "seed_period_begin": "Summer",
              "seed_abundance": "Medium",
              "conspicuous": null,
              "color": "Brown"
            },
            "foliage": {
              "texture": "Coarse",
              "porosity_winter": "Porous",
              "porosity_summer": "Moderate",
              "color": "Green"
            },
            "flower": {
              "conspicuous": true,
              "color": "Purple"
            },
            "family_common_name": "Aster family",
            "duration": "Perennial",
            "complete_data": true,
            "common_name": "prairie blazing star",
            "bibliography": null,
            "author": null
          },
          "images": [
            {
              "url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Liatris_pycnostachya_var._pycnostachya.jpg"
            },
            {
              "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/SeedsLiatrispycnostachya.jpg"
            }
          ],
          "id": 149926,
          "hybrids": [],
          "genus": {
            "slug": "liatris",
            "name": "Liatris",
            "link": "http://trefle.io/api/genuses/4149",
            "id": 4149
          },
          "forms": [
            {
              "year": null,
              "type": "form",
              "synonym": false,
              "status": "Accepted",
              "sources": [
                {
                  "species_id": 261061,
                  "source_url": "http://www.tropicos.org",
                  "name": "Tropicos",
                  "last_update": "2019-01-12T07:32:31.942760"
                }
              ],
              "slug": "liatris-pycnostachya-fo-hubrichti",
              "scientific_name": "Liatris pycnostachya fo. hubrichti",
              "main_species_id": 149926,
              "link": "http://trefle.io/api/plants/261061",
              "is_main_species": false,
              "id": 261061,
              "family_common_name": "Aster family",
              "complete_data": true,
              "common_name": "prairie blazing star",
              "bibliography": "Missouri Botanical Garden Bulletin 25: 122. 1937. (Missouri Bot. Gard. Bull.) ",
              "author": "E.S. Anderson"
            },
            {
              "year": null,
              "type": "form",
              "synonym": false,
              "status": "Accepted",
              "sources": [
                {
                  "species_id": 261062,
                  "source_url": "http://www.tropicos.org",
                  "name": "Tropicos",
                  "last_update": "2019-01-12T07:32:32.631938"
                }
              ],
              "slug": "liatris-pycnostachya-fo-pycnostachya",
              "scientific_name": "Liatris pycnostachya fo. pycnostachya",
              "main_species_id": 149926,
              "link": "http://trefle.io/api/plants/261062",
              "is_main_species": false,
              "id": 261062,
              "family_common_name": "Aster family",
              "complete_data": true,
              "common_name": "prairie blazing star",
              "bibliography": null,
              "author": null
            }
          ],
          "family_common_name": "Aster family",
          "family": {
            "slug": "asteraceae",
            "name": "Asteraceae",
            "link": "http://trefle.io/api/families/13",
            "id": 13,
            "common_name": "Aster family"
          },
          "duration": "Perennial",
          "division": {
            "slug": "magnoliophyta",
            "name": "Magnoliophyta",
            "link": "http://trefle.io/api/divisions/1",
            "id": 1
          },
          "cultivars": [],
          "common_name": "prairie blazing star",
          "class": {
            "slug": "magnoliopsida",
            "name": "Magnoliopsida",
            "link": "http://trefle.io/api/division_classes/1",
            "id": 1
          }
        },
        {
          "varieties": [],
          "sub_species": [],
          "scientific_name": "Solanum melongena",
          "order": null,
          "native_status": "L48(I)PR(I)",
          "main_species": {
            "year": null,
            "type": "species",
            "synonym": false,
            "status": "Unknown",
            "specifications": {
              "toxicity": "Slight",
              "shape_and_orientation": "Erect",
              "regrowth_rate": null,
              "nitrogen_fixation": "None",
              "max_height_at_base_age": {
                "ft": null,
                "cm": null
              },
              "mature_height": {
                "ft": 4,
                "cm": 121.91405059433097
              },
              "low_growing_grass": null,
              "lifespan": "Short",
              "leaf_retention": true,
              "known_allelopath": null,
              "growth_rate": "Rapid",
              "growth_period": "Year Round",
              "growth_habit": "Subshrub, Forb/herb",
              "growth_form": "Single Stem",
              "fire_resistance": null,
              "fall_conspicuous": true,
              "coppice_potential": null,
              "c_n_ratio": "Medium",
              "bloat": "None"
            },
            "sources": [
              {
                "species_id": 182532,
                "source_url": "https://plants.usda.gov",
                "name": "USDA",
                "last_update": "2019-01-11T12:02:00.292244"
              }
            ],
            "soils_adaptation": {
              "medium": true,
              "fine": null,
              "coarse": true
            },
            "slug": "solanum-melongena",
            "seed": {
              "vegetative_spread_rate": "None",
              "small_grain": null,
              "seeds_per_pound": null,
              "seedling_vigor": null,
              "seed_spread_rate": "None",
              "commercial_availability": "Routinely Available",
              "bloom_period": "Indeterminate"
            },
            "scientific_name": "Solanum melongena",
            "propagation": {
              "tubers": null,
              "sprigs": null,
              "sod": null,
              "seed": true,
              "cuttings": true,
              "corms": null,
              "container": true,
              "bulbs": null,
              "bare_root": null
            },
            "products": {},
            "native_status": "L48(I)PR(I)",
            "main_species_id": null,
            "is_main_species": true,
            "images": [],
            "id": 182532,
            "growth": {
              "temperature_minimum": {
                "deg_f": 17,
                "deg_c": -8.333333333333334
              },
              "shade_tolerance": "Intermediate",
              "salinity_tolerance": "Low",
              "root_depth_minimum": {
                "inches": 24,
                "cm": 60.96012192024385
              },
              "resprout_ability": null,
              "precipitation_minimum": {
                "inches": 60,
                "cm": 152.40030480060963
              },
              "precipitation_maximum": {
                "inches": 80,
                "cm": 203.20040640081282
              },
              "planting_density_minimum": {
                "sqm": 6879662,
                "acre": 1700
              },
              "planting_density_maximum": {
                "sqm": 10926522,
                "acre": 2700
              },
              "ph_minimum": 5.5,
              "ph_maximum": 7.2,
              "moisture_use": "High",
              "hedge_tolerance": "Low",
              "frost_free_days_minimum": 365,
              "fire_tolerance": "None",
              "fertility_requirement": "High",
              "drought_tolerance": "Low",
              "cold_stratification_required": null,
              "caco_3_tolerance": "Medium",
              "anaerobic_tolerance": "Low"
            },
            "fruit_or_seed": {
              "seed_persistence": null,
              "seed_period_end": "Year Round",
              "seed_period_begin": "Year Round",
              "seed_abundance": "Low",
              "conspicuous": true,
              "color": "Purple"
            },
            "foliage": {
              "texture": "Fine",
              "porosity_winter": "Moderate",
              "porosity_summer": "Dense",
              "color": "Green"
            },
            "flower": {
              "conspicuous": null,
              "color": null
            },
            "family_common_name": "Potato family",
            "duration": "Perennial",
            "complete_data": true,
            "common_name": "eggplant",
            "bibliography": null,
            "author": null
          },
          "images": [],
          "id": 182532,
          "hybrids": [],
          "genus": {
            "slug": "solanum",
            "name": "Solanum",
            "link": "http://trefle.io/api/genuses/4329",
            "id": 4329
          },
          "forms": [],
          "family_common_name": "Potato family",
          "family": null,
          "duration": "Perennial",
          "division": null,
          "cultivars": [],
          "common_name": "eggplant",
          "class": null
        },
        {
          "varieties": [
            {
              "year": null,
              "type": "var",
              "synonym": false,
              "status": "Unknown",
              "sources": [
                {
                  "species_id": 162792,
                  "source_url": "https://plants.usda.gov",
                  "name": "USDA",
                  "last_update": "2019-01-11T11:05:00.958467"
                }
              ],
              "slug": "paspalum-dilatatum-var-pauciciliatum",
              "scientific_name": "Paspalum dilatatum var. pauciciliatum",
              "main_species_id": 162791,
              "link": "http://trefle.io/api/plants/162792",
              "is_main_species": false,
              "id": 162792,
              "family_common_name": "Grass family",
              "complete_data": true,
              "common_name": "dallisgrass",
              "bibliography": null,
              "author": null
            }
          ],
          "sub_species": [],
          "scientific_name": "Paspalum dilatatum",
          "order": null,
          "native_status": "L48(I)HI(I)PR(I)",
          "main_species": {
            "year": null,
            "type": "species",
            "synonym": false,
            "status": "Unknown",
            "specifications": {
              "toxicity": "Slight",
              "shape_and_orientation": "Decumbent",
              "regrowth_rate": "Moderate",
              "nitrogen_fixation": "None",
              "max_height_at_base_age": {
                "ft": null,
                "cm": null
              },
              "mature_height": {
                "ft": 3,
                "cm": 91.43553794574824
              },
              "low_growing_grass": null,
              "lifespan": "Moderate",
              "leaf_retention": null,
              "known_allelopath": null,
              "growth_rate": "Moderate",
              "growth_period": "Spring",
              "growth_habit": "Graminoid",
              "growth_form": "Bunch",
              "fire_resistance": null,
              "fall_conspicuous": null,
              "coppice_potential": null,
              "c_n_ratio": "Medium",
              "bloat": "None"
            },
            "sources": [
              {
                "species_id": 162791,
                "source_url": "https://plants.usda.gov",
                "name": "USDA",
                "last_update": "2019-01-11T11:05:00.795874"
              }
            ],
            "soils_adaptation": {
              "medium": true,
              "fine": true,
              "coarse": null
            },
            "slug": "paspalum-dilatatum",
            "seed": {
              "vegetative_spread_rate": "Slow",
              "small_grain": null,
              "seeds_per_pound": 281200,
              "seedling_vigor": "Medium",
              "seed_spread_rate": "Moderate",
              "commercial_availability": "Routinely Available",
              "bloom_period": "Mid Spring"
            },
            "scientific_name": "Paspalum dilatatum",
            "propagation": {
              "tubers": null,
              "sprigs": null,
              "sod": null,
              "seed": true,
              "cuttings": null,
              "corms": null,
              "container": null,
              "bulbs": null,
              "bare_root": null
            },
            "products": {
              "veneer": null,
              "pulpwood": null,
              "protein_potential": "Low",
              "post": null,
              "palatable_human": null,
              "palatable_graze_animal": "High",
              "palatable_browse_animal": "Medium",
              "nursery_stock": null,
              "naval_store": null,
              "lumber": null,
              "fuelwood": null,
              "fodder": true,
              "christmas_tree": null,
              "berry_nut_seed": null
            },
            "native_status": "L48(I)HI(I)PR(I)",
            "main_species_id": null,
            "is_main_species": true,
            "images": [
              {
                "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Paspalum_dilatatum1.jpg"
              },
              {
                "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/PLoS_Mu_transposon_in_maize.jpg"
              }
            ],
            "id": 162791,
            "growth": {
              "temperature_minimum": {
                "deg_f": -3,
                "deg_c": -19.444444444444443
              },
              "shade_tolerance": "Intermediate",
              "salinity_tolerance": "Medium",
              "root_depth_minimum": {
                "inches": 6,
                "cm": 15.240030480060963
              },
              "resprout_ability": null,
              "precipitation_minimum": {
                "inches": 35,
                "cm": 88.90017780035562
              },
              "precipitation_maximum": {
                "inches": 60,
                "cm": 152.40030480060963
              },
              "planting_density_minimum": {
                "sqm": null,
                "acre": null
              },
              "planting_density_maximum": {
                "sqm": null,
                "acre": null
              },
              "ph_minimum": 4.9,
              "ph_maximum": 6.5,
              "moisture_use": "High",
              "hedge_tolerance": "None",
              "frost_free_days_minimum": 165,
              "fire_tolerance": "High",
              "fertility_requirement": "High",
              "drought_tolerance": "Low",
              "cold_stratification_required": null,
              "caco_3_tolerance": "Low",
              "anaerobic_tolerance": "High"
            },
            "fruit_or_seed": {
              "seed_persistence": null,
              "seed_period_end": "Summer",
              "seed_period_begin": "Spring",
              "seed_abundance": "Low",
              "conspicuous": null,
              "color": "Brown"
            },
            "foliage": {
              "texture": "Medium",
              "porosity_winter": "Porous",
              "porosity_summer": "Moderate",
              "color": "Green"
            },
            "flower": {
              "conspicuous": null,
              "color": "Yellow"
            },
            "family_common_name": "Grass family",
            "duration": "Perennial",
            "complete_data": true,
            "common_name": "dallisgrass",
            "bibliography": null,
            "author": null
          },
          "images": [
            {
              "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Paspalum_dilatatum1.jpg"
            },
            {
              "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/PLoS_Mu_transposon_in_maize.jpg"
            }
          ],
          "id": 162791,
          "hybrids": [],
          "genus": {
            "slug": "paspalum",
            "name": "Paspalum",
            "link": "http://trefle.io/api/genuses/2451",
            "id": 2451
          },
          "forms": [],
          "family_common_name": "Grass family",
          "family": null,
          "duration": "Perennial",
          "division": null,
          "cultivars": [],
          "common_name": "dallisgrass",
          "class": null
        }
      ]
    }
  },
  methods: {
  },
  mounted(){
    PlantService.getPlants()
    .then( plants => this.plantData = plants.map(plant => plant.id))
    .then(() => {
      let fetches = []
      this.plantData.map(id => ( fetches.push(PlantService.getPlant(id))))
      console.log(fetches)
    })

    // PlantService.getPlants()
    // .then( plants => this.plantData = plants.map(plant => plant.id))
    // .then(() => {
    //   let fetches = []
    //   this.plantData.map(id => ( fetches.push(PlantService.getPlant(id))))
    //   console.log(fetches)
    //   Promise.all(fetches).then(data => console.log(data))
    // })
  }

}
</script>

<style lang="css" scoped>

.body {
  font-family: cursive;
  font-size: 60px;
  background: url('../public/background.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(0.25, 255, 255, 255);
  color: white;
}

#title {
  display: flex;
  justify-content: center;
  color: white;
}

</style>
