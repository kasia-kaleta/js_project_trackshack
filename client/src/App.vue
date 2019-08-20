<template lang="html">
<div id="app">

  <food-search />
  <food-info />
  <food-added :foodAdded="foodAdded"/>



</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodSearch from './components/FoodSearch.vue'
import FoodAdded from './components/FoodAdded.vue'
import FoodInfo from './components/FoodInfo.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data(){
    return {
      foodAdded: []
    }
  },
  computed: {


  },
  mounted(){

    FoodService.getFoods()
    .then( res => this.foodAdded = res);


    eventBus.$on('food-added', food => this.foodAdded.push(food));

    eventBus.$on('food-deleted', id => {
      const index = this.foodAdded.findIndex(food => food._id === id);
      this.foodAdded.splice(index, 1);
    })

  },

  components: {
    FoodService,
    'food-search' :FoodSearch,
    'food-info' :FoodInfo,
    'food-added' :FoodAdded
   }
}
</script>

<style lang="css" scoped>
</style>
