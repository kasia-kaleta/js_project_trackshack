<template lang="html">
<div id="app">
  <food-display :foodDisplay="foodDisplay"/>
  <food-info :food="selectedFood"/>
  <food-added :foodAdded="foodAdded"/>



</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodDisplay from './components/FoodDisplay.vue'
import FoodAdded from './components/FoodAdded.vue'
import FoodInfo from './components/FoodInfo.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data(){
    return {
      foodDisplay: [],
      foodAdded: [],
      selectedFood: null
    }
  },
  computed: {

  },
  mounted(){
    FoodService.getFoods()
    .then(foodDisplay => this.foodDisplay = foodDisplay);

    eventBus.$on('food-displayed', (selectedIndex) => {
      this.selectedFood = this.foodDisplay[selectedIndex];
    });

    eventBus.$on('food-added', food => this.foodAdded.push(food));

  },

  components: {
    FoodService,
    'food-display' :FoodDisplay,
    'food-info' :FoodInfo,
    'food-added' :FoodAdded
   }
}
</script>

<style lang="css" scoped>
</style>
