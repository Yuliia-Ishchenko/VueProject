import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import highchart from './plugins/highchart';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  highchart,
  render: h => h(App)
}).$mount('#app')
