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
          text: 'Caloroies Eaten'
        },
        xAxis: {
          categories: ["women", "men"]
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Your intake',
          data: [this.calories, this.calories]
        },{
          name: "Allowance",
          data: [2000, 2500]
        }]
      }
    }
  }
};


</script>

<style lang="css" scoped>
</style>
