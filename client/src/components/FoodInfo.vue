<template lang="html">

<div class="">


    <ul v-for="(food, index) in foods" :key="index" :food="food">
      <li>Food name: {{ food.food_name }}</li>
      <li>Serving Size: {{ food.serving_unit }}</li>
      <button @click="addFood(index)">Save Food</button>
    </ul>

</div>
</template>

<script>
import FoodService from '@/services/FoodService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'food-info',
  data(){
    return {
      foods: []
    }
  },
  methods: {
    addFood(index){
      // e.preventDefault()
       const food = {
         servingSize: this.foods[index].serving_qty,
         name: this.foods[index].food_name,
         calories: this.foods[index].nf_calories,
         fat: this.foods[index].nf_total_fat,
         protein: this.foods[index].nf_protein,
         carbs: this.foods[index].nf_total_carbohydrate,
         sugar: this.foods[index].nf_sugars
       }
       FoodService.postFood(food)
         .then(res => eventBus.$emit('food-added', res))
    }
  },
  mounted() {
    eventBus.$on('food-search-result', newFood => {
      this.foods = newFood;
    }),
    eventBus.$on('food-deleted', id => {
      const index = this.foods.findIndex(food => food._id === id);
      this.foods.splice(index, 1);
    })

  }
}

</script>

<style lang="css" scoped>

li {
  list-style-type: none;
}

</style>
