<template lang="html">
  <div id="app">
    <h2>Saved Food</h2>
    <ul>
      <li v-for="food in foodAdded">
        <h3>Name: {{ food.name }}</h3>
        <p>Serving Size: {{ food.servingSize }}</p>
        <p>Calories: {{ food.calories }}</p>
        <p>Fat: {{ food.fat }}</p>
        <p>Protein: {{ food.protein }}</p>
        <p>Carbs: {{ food.carbs }}</p>

        <button @click="handleDelete(food._id)">Delete Food</button>
      </li>
    </ul>

  </div>
</template>

<script>
import { eventBus } from '@/main';
import FoodService from '@/services/FoodService.js'

export default {
  name: 'food-added',
  props: [ 'foodAdded' ],
  methods: {
    handleDelete(id){
      FoodService.deleteFood(id)
      .then(response => eventBus.$emit('food-deleted', id));
    }
  }

}
</script>

<style lang="css" scoped>

#app {
  border: solid black;
}
</style>
