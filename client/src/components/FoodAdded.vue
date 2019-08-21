<template lang="html">
  <div id="added">
    <h2>Todays Food Diary</h2>
    <ul>
      <li v-for="food in foodAdded">
        <food-breakdown :food="food"/>
      </li>
    </ul>

  </div>
</template>

<script>

import FoodBreakdown from './FoodBreakdown.vue';

export default {
  name: 'food-added',
  props: [ 'foodAdded' ],
  components: {
    'food-breakdown' : FoodBreakdown
  }

}
</script>

<style lang="css" scoped>

.button {
  background: #3D4C53;
  margin : 20px auto;
  width : 200px;
  height : 50px;
  overflow: hidden;
  text-align : center;
  transition : .2s;
  cursor : pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
}
.btnTwo {
  position : relative;
  width : 200px;
  height : 100px;
  margin-top: -100px;
  padding-top: 2px;
  background : #26A69A;
  left : -250px;
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
  left: -130px;
}
.button:hover .btnText{ /*When hovering over .button change .btnText*/
  margin-left : 65px;
}
.button:active { /*Clicked and held*/
  box-shadow: 0px 5px 6px rgba(0,0,0,0.3);
}


h2 {
  text-decoration: underline;
  font-size: 40px;
  font-family: ‘Cutive Mono’, monospace;
  font-weight: lighter;
  color: #587682;
  opacity: 10%;
  padding: 20px;
}

ul {
 list-style-type: none;
 padding-inline-start: 0px;
}

li {
  display: inline-flex;
  padding: 10px;
  border: solid #D8C3A5;
  margin: 10px;
  background-color: white;
}

</style>
