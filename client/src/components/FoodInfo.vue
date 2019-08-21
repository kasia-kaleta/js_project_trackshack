<template lang="html">

<div class="info">


    <!-- <ul v-for="(food, index) in foods" :key="index" :food="food">
      <li>Food name: {{ food.food_name }}</li>
      <li>Serving Size: {{ food.serving_unit }}</li>
      <button @click="addFood(index)">Save Food</button>
    </ul> -->
  <template v-if="foods !== undefined  ">
    <table v-for="(food, index) in foods" :key="index" :food="food" >
      <tr>
        <th>Food</th>
        <th>Serving</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Protein</th>
        <th>Carbs</th>
        <th>Sugar</th>
      </tr>
      <tr>
        <td>{{ food.food_name }}</td>
        <td>{{ food.serving_unit }}</td>
        <td>{{ food.nf_calories }}</td>
        <td>{{ food.nf_total_fat }}</td>
        <td>{{ food.nf_protein }}</td>
        <td>{{ food.nf_total_carbohydrate }}</td>
        <td>{{ food.nf_sugars }}</td>
      </tr>
      <img :src="food.photo.thumb" alt="">
      <button @click="addFood(index)">Save Food</button>
    </table>
  </template>
<template v-else>
  <h3>food not found, try again!</h3>
</template>



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
         servingSize: this.foods[index].serving_unit,
         name: this.foods[index].food_name,
         calories: this.foods[index].nf_calories,
         fat: this.foods[index].nf_total_fat,
         protein: this.foods[index].nf_protein,
         carbs: this.foods[index].nf_total_carbohydrate,
         sugar: this.foods[index].nf_sugars,
         img_url: this.foods[index].photo.thumb

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

button {
  margin-left: auto;
  margin-right: auto;
}

.info {
  font-size: 20px;
  font-weight: bold;
  color: maroon;
  padding-bottom: 20px;
}

table, td, th, tr {
  margin-left: auto;
  margin-right: auto;
  border: solid black 1px;
  padding: 5px;
}
ul {
padding-inline-start: 0px;
}

li {
  list-style-type: none;
}

</style>
