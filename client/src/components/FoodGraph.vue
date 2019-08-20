<template lang="html">

  <highcharts :options="chartOptions"></highcharts>

</template>

<script>
import {Chart} from 'highcharts-vue'


export default {
  name: 'food-graph',
  props: [ 'calories' ],
  components: {
    highcharts: Chart
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Calories Eaten'
        },
        xAxis: {
          categories: ["totals"]
        },
        yAxis: {
          title: {
            text: "Calories"
          }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: "Female Allowance",
          data: [2000]
        },{
          name: 'Your intake',
          data: [this.calories]
        },{
          name: "Male Allowance",
          data: [2500]
        }]
      }
    }
  }
};


</script>

<style lang="css" scoped>
</style>
