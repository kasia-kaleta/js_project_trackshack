<template lang="html">
<div id="app">
  <food-display :foodDisplay="foodDisplay"/>
  <food-info :food="selectedFood"/>



</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodDisplay from './components/FoodDisplay.vue'
import FoodInfo from './components/FoodInfo.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data(){
    return {
      foodDisplay: [],
      selectedFood: null
    }
  },
  mounted(){
    FoodService.getFoods()
    .then(foodDisplay => this.foodDisplay = foodDisplay);

    eventBus.$on('food-displayed', (selectedIndex) => {
      this.selectedFood = this.foodDisplay[selectedIndex];
    });

  },

  components: {
    FoodService,
    'food-display' :FoodDisplay,
    'food-info' :FoodInfo
   }
}
</script>

<style lang="css" scoped>
</style>
