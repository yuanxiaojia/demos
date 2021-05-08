import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
process.env.VUE_APP_MOCK === 'true' && require('./mock/index')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
