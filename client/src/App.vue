<template lang="html">
<div id="app">
  <h1>TrackShack</h1>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <a href="#" class="fa fa-facebook"></a>
  <a href="#" class="fa fa-twitter"></a>
  <a href="#" class="fa fa-instagram"></a>

  <food-search />
  <food-info />
  <food-graph :calories="totalCalories"/>
  <food-added :foodAdded="foodAdded"/>

</div>
</template>

<script>
import FoodService from './services/FoodService.js'
import FoodSearch from './components/FoodSearch.vue'
import FoodAdded from './components/FoodAdded.vue'
import FoodInfo from './components/FoodInfo.vue'
import {eventBus} from '@/main.js'
import FoodGraph from './components/FoodGraph.vue'

export default {
  name: 'app',
  data(){
    return {
      foodAdded: []
    }
  },
  computed: {
    totalCalories() {
      return this.foodAdded.reduce((total, food) => {
        return total + food.calories;
      }, 0);
    }
  },
  mounted(){

    FoodService.getFoods()
    .then( res => this.foodAdded = res);


    eventBus.$on('food-added', food => this.foodAdded.unshift(food));

    eventBus.$on('food-deleted', id => {
      const index = this.foodAdded.findIndex(food => food._id === id);
      this.foodAdded.splice(index, 1);
    })

  },

  components: {
    FoodService,
    'food-search' :FoodSearch,
    'food-info' :FoodInfo,
    'food-added' :FoodAdded,
    'food-graph' :FoodGraph
   }
}
</script>

<style lang="css" scoped>

  #app {
    text-align: center;
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
    font-style: italic;
    font-family: sans-serif;
  }

  .fa {
  padding: 5px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-instagram {
  background: linear-gradient(to bottom right, purple ,red,  yellow);
  color: white;
}


</style>
