<template lang="html">
<div id="app">
  <food-display :foodDisplay="foodDisplay"/>


</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodDisplay from './components/FoodDisplay.vue'

export default {
  name: 'app',
  data(){
    return {
      foodDisplay: []
    }
  },
  mounted(){
    FoodService.getFoods()
    .then(foodDisplay => this.foodDisplay = foodDisplay);
  },

  components: {
    FoodService,
    'food-display' :FoodDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
