<template lang="html">
  <div class="">

    <h3>Name: {{ food.name }}</h3>
    <p>Serving Size: {{ food.servingSize }}</p>
    <p>Calories: {{ food.calories }}</p>
    <p>Fat: {{ food.fat }}</p>
    <p>Protein: {{ food.protein }}</p>
    <p>Carbs: {{ food.carbs }}</p>

  </div>


</template>

<script>

export default {
  name: 'food-breakdown',
  props: [ 'food' ]
}
</script>

<style lang="css" scoped>
</style>
