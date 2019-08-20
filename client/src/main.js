import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false
Vue.use(HighchartsVue)

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
