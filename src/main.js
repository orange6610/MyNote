import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant, { ActionSheet } from 'vant'
import 'vant/lib/index.css'

Vue.use(ActionSheet)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  Vant,
  render: h => h(App)
}).$mount('#app')
