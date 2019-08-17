<template lang="html">


    <ul v-if="food !== null">
      <li>{{food.name}}</li>
      <li>{{food.calories}}</li>
      <li>{{food.fat}}</li>
      <li>{{food.carbs}}</li>
      <li>{{food.protein}}</li>
      <button @click="addFood(food._id)">Save Food</button>
    </ul>


</template>

<script>
import FoodService from '@/services/FoodService.js';
import { eventBus } from '../main.js';

export default {
  name: 'food-info',
  props: ['food'],
  methods: {
    addFood(){
      // e.preventDefault()
       const food = {
         name: this.food.name,
         calories: this.food.calories,
         fat: this.food.fat,
         protein: this.food.protein,
         carbs: this.food.carbs
       }
       FoodService.postFood(food)
         .then(res => eventBus.$emit('food-added', res))
     }
  }

}
</script>

<style lang="css" scoped>
</style>
