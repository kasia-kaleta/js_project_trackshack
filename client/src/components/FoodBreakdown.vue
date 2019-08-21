<template lang="html">
  <div id="break">

    <div id="div1">

      <table>
        <tr>
          <th></th>
          <th>Serving</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Protein</th>
          <th>Carbs</th>
          <th>Sugar</th>
          <th></th>
        </tr>
        <tr>
          <td>{{food.name}}</td>
          <td>{{food.servingSize}}</td>
          <td>{{food.calories}}g</td>
          <td>{{food.fat}}g</td>
          <td>{{food.protein}}g</td>
          <td>{{food.carbs}}g</td>
          <td>{{food.sugar}}g</td>
          <td>
            <div class="button">
                <p class="btnText">Delete</p>
                <div class="btnTwo">
                  <p @click="handleDelete(food._id)" class="btnText2">X</p>
                </div>
             </div>
          </td>
        </tr>
      </table>


    </div>

    <div id="div2">

      <highcharts id="pie" :options="highCharts"></highcharts>

    </div>

  </div>

</template>

<script>
import { eventBus } from '@/main';
import {Chart} from 'highcharts-vue';
import FoodService from '@/services/FoodService.js';

export default {
  name: 'food-breakdown',
  props: [ 'food' ],
  components: {
    highcharts: Chart
  },
  methods: {
    handleDelete(id){
      FoodService.deleteFood(id)
      .then(response => eventBus.$emit('food-deleted', id));
    }
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

        }],
        credits: {
          enabled: false
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-transform: capitalize;
  padding: 5px;
}

#pie {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
}

.button {
  background: #3D4C53;
  margin : 20px auto;
  width : 100px;
  height : 40px;
  overflow: hidden;
  text-align : center;
  transition : .2s;
  cursor : pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
}
.btnTwo {
  position : relative;
  width : 250px;
  height : 100px;
  margin-top: -105px;
  padding-top: 2px;
  background : darkred;
  left : -270px;
  transition : .3s;
}
.btnText {
  color : white;
  transition : .3s;
}
.btnText2 {
  margin-top : 63px;
  margin-right : -130px;
  color : #FFF;
}
.button:hover .btnTwo{ /*When hovering over .button change .btnTwo*/
  left: -145px;
}
.button:hover .btnText{ /*When hovering over .button change .btnText*/
  margin-left : 65px;
}
.button:active { /*Clicked and held*/
  box-shadow: 0px 5px 6px rgba(0,0,0,0.3);
}

</style>
