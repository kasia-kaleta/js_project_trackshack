<template lang="html">
  <div id="app">
    <form action="/search" method="get">
      <div class="search">
        <label for="search-food">Search food: </label>
        <input type="text" placeholder="search..." >
        <input type="submit" name="" value="Submit">
      </div>
    </form>

  </div>
</template>

<script>

import FoodService from '@/services/FoodService.js'
import  { eventBus } from '@/main.js'



export default {
  name: 'food-form',
  data(){
    return {
      food: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
    }
  },
  methods: {
    getFood(event){
      event.preventDefault();
      const payload = {
        food: this.food,

      }
    }
  }

}
</script>

<style lang="css" scoped>
</style>
