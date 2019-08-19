<template lang="html">
  <div>
    <h3>All Foods</h3>

    <div class="">
      <input @submit="getFoods2" type="text" placeholder="search food..." method="post"/>
      <input type="submit" id="save" value="Search">

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
      search: ''
    }
  },
  methods: {
    foodSelected(event){
      const selectedIndex = event.target.value;
      eventBus.$emit('food-list-item-selected', selectedIndex);
    },
    getFoods2(event){
      event.preventDefault()
      const food = {
        
      }
    }
  }

}
</script>

<style lang="css" scoped>
</style>
