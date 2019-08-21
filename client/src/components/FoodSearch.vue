<template lang="html">
  <div id="searchDiv">
    

    <div class="searchBar">
      <form @submit.prevent="getFoods2">

        <input id="search" name="search" v-model="search" type="text" placeholder="Search food..." />
        <input id="searchButton" type="submit" value="Search">

      </form>
    </div>



  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'food-search',
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
      .then(data => this.foods = data.foods)
      .then(res => eventBus.$emit('food-search-result', this.foods))
      .then(res => this.search = '');
    }
  }
}
</script>

<style lang="css" scoped>



  h3 {
    font-size: 40px;
    font-family: ‘Cutive Mono’, monospace;
    font-weight: lighter;
    color: #587682;
    opacity: 10%;
  }

  .searchBar {
    padding: 20px;
  }

  #searchDiv {
    text-align: center;
  }

  #search {
    text-align: center;
    font-size: 20px;
    padding: 10px;
    background-color: white;

  }

  #searchButton {
    font-size: 20px;
    padding: 10px;
    background-color: #587682;
    opacity: 50%;
    font-family: ‘Cutive Mono’, monospace;
    font-weight: lighter;
    color: white;
    opacity: 10%;

  }

</style>
