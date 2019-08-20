<template lang="html">
  <div class="">

    <h3>Name: {{ food.name }}</h3>
    <p>Serving Size: {{ food.servingSize }}</p>
    <p>Calories: {{ food.calories }}</p>
    <p>Fat: {{ food.fat }}</p>
    <p>Protein: {{ food.protein }}</p>
    <p>Carbs: {{ food.carbs }}</p>
    <p>Sugar: {{ food.sugar }}</p>

    <highcharts :options="highCharts"></highcharts>

    <!-- <div id="container" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div> -->

  </div>


</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  name: 'food-breakdown',
  props: [ 'food' ],
  components: {
    highcharts: Chart
  },
  computed: {
    highCharts() {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Total nutrients'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: this.food.name,
          colorByPoint: true,
          data: [{
            name: 'Fat',
            y: this.food.fat,
            sliced: true,
            selected: true
          }, {
            name: 'Carbs',
            y: this.food.carbs
          }, {
            name: 'Protein',
            y: this.food.protein
          }, {
            name: 'Sugar',
            y: this.food.sugar
          }]

        }]
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
