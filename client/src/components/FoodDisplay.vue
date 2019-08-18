<template lang="html">
  <div>
    <h3>All Foods</h3>

    <div class="">

      <select @change="foodSelected">
        <option selected disabled></option>
        <option v-for="(food, index) in foodDisplay" :value="index">{{food.name}}</option>
      </select>

    </div>



  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'food-display',
  props: ['foodDisplay'],
  methods: {
    foodSelected(event){
      const selectedIndex = event.target.value;
      eventBus.$emit('food-displayed', selectedIndex);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
