<template lang="html">
  <div id="app">
    <div class="foods" v-for="food in foodAdded"/>
      <h2>Saved Food</h2>
      <h3>Name: {{ food.name }}</h3>
      <p>Calories: {{ food.calories }}</p>
      <p>Fat: {{ food.fat }}</p>
      <p>Protein: {{ food.protein }}</p>
      <p>Carbs: {{ food.carbs }}</p>
    </div>


  </div>
</template>

<script>

export default {
  name: 'food-added',
  props: [ 'foodAdded' ]

}
</script>

<style lang="css" scoped>
</style>
