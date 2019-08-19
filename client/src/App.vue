<template lang="html">
<div id="app">

  <food-list />
  <food-info />
  <food-added :foodAdded="foodAdded"/>



</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodList from './components/FoodList.vue'
import FoodAdded from './components/FoodAdded.vue'
import FoodInfo from './components/FoodInfo.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data(){
    return {
      foodList: [],
      foodAdded: []
    }
  },
  computed: {


  },
  mounted(){
    // FoodService.getFoods2()
    // .then(foodList => this.foodList = foodList.foods); // get the 'foods' table from the API's response
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
    'food-list' :FoodList,
    'food-info' :FoodInfo,
    'food-added' :FoodAdded
   }
}
</script>

<style lang="css" scoped>
</style>
