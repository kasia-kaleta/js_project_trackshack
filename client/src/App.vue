<template lang="html">
<div id="app">
  <food-list :foodList="foodList"/>
  <food-info :food="selectedFood"/>
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
      foodAdded: [],
      selectedFood: null
    }
  },
  computed: {


  },
  mounted(){
    // FoodService.getFoods2()
    // .then(foodList => this.foodList = foodList.foods); // get the 'foods' table from the API's response

    eventBus.$on('food-list-item-selected', (selectedIndex) => {
      this.selectedFood = this.foodList[selectedIndex];
    });

    eventBus.$on('food-added', food => this.foodAdded.push(food));

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
