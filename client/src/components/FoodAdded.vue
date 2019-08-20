<template lang="html">
  <div id="app">
    <h2>Saved Food</h2>
    <ul>
      <li v-for="food in foodAdded">
        <food-breakdown :food="food"/>


        <button @click="handleDelete(food._id)">Delete Food</button>
      </li>
    </ul>

  </div>
</template>

<script>
import { eventBus } from '@/main';
import FoodService from '@/services/FoodService.js';
import FoodBreakdown from './FoodBreakdown.vue';

export default {
  name: 'food-added',
  props: [ 'foodAdded' ],
  methods: {
    handleDelete(id){
      FoodService.deleteFood(id)
      .then(response => eventBus.$emit('food-deleted', id));
    }
  },
  components: {
    'food-breakdown' : FoodBreakdown
  }

}
</script>

<style lang="css" scoped>

#app {
  border: solid black;
}
</style>
