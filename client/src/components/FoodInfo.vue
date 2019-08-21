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
        <th></th>
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
      <div class="wrap">
        <a @click="addFood(index)" href="#" class="button">Add to Diary</a>
      </div>
      <!-- <button @click="addFood(index)">Save Food</button> -->
    </table>
  </template>
<template v-else>
  <h3>Food not found, try again!</h3>
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

.info {
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding-bottom: 20px;
}

table, td, th, tr {
  margin-left: auto;
  margin-right: auto;
  border: solid #D8C3A5 1px;
  padding: 5px;
  background-color: white;
  text-transform: capitalize;
}
ul {
padding-inline-start: 0px;
}

li {
  list-style-type: none;
}

wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -86px;
    margin-left: -89px;
    text-align: center;
}

a {
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    display: block;
    margin: 20px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 20px 30px;
}

a.button {
    color: #587682;
    box-shadow: #587682 0 0px 0px 2px inset;
}

a.button:hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: #587682 0 0px 0px 40px inset;
}

</style>
