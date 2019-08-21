<template lang="html">
  <div class="charts">


  <highcharts id="graph" :options="chartOptions"></highcharts>
  <highcharts id="pie" :options="pieCharts"></highcharts>

</div>
</template>

<script>
import {Chart} from 'highcharts-vue'


export default {
  name: 'food-graph',
  props: [ 'calories', 'fat', 'protein', 'carbs', 'sugar' ],
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
          text: 'Calories Consumed'
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
    },
      pieCharts() {
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
            name: 'Total Breakdown',
            colorByPoint: true,
            data: [{
              name: 'Fat',
              y: this.fat,
              sliced: true,
              selected: true
            }, {
              name: 'Carbs',
              y: this.carbs
            }, {
              name: 'Protein',
              y: this.protein
            }, {
              name: 'Sugar',
              y: this.sugar
            }]

          }],
          credits: {
            enabled: false
          }
        }
      }
    }
};


</script>

<style lang="css" scoped>

.charts {
  display: flex;
}

  #graph {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  #pie {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
