<template lang="html">
  <div>
    <h3>All Foods</h3>
    <ul>
      <li v-for="food in foodDisplay">{{food.name}}</li>
      
    </ul>

  </div>
</template>

<script>
export default {
  name: 'food-display',
  props: ['foodDisplay']
}
</script>

<style lang="css" scoped>
</style>
