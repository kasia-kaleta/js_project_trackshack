<template lang="html">


    <ul v-if="food !== null">
      <li>{{food.name}}</li>
      <li>{{foot.fat}}</li>

    </ul>


</template>

<script>
export default {
  name: 'food-info',
  props: ['food']
}
</script>

<style lang="css" scoped>
</style>
