<template lang="html">
  <div>
    <h3>All Foods</h3>

    <div class="">
      <form @submit.prevent="getFoods2">

        <input name="search" v-model="search" type="text" placeholder="search food..." />
        <input type="submit" id="search" value="Search">

      </form>
    </div>



  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'food-list',
  props: ['foodList'],
  data(){
    return {
      search: '',
      foods: []
    }
  },
  methods: {
    getFoods2(){
      return fetch('http://localhost:3000/search', {
        method: 'POST',
        body: `{"query": "${this.$data.search}"}`,
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(data => this.foods = data)
    },
    foodSelected(event){
      const selectedIndex = event.target.value;
      eventBus.$emit('food-list-item-selected', selectedIndex);
    }
  }
}

  </script>

  <style lang="css" scoped>
  </style>
