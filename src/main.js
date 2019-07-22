import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCounter: state => state.count,
  },
  mutations: {
    increase() {
      this.state.count++
    },
    decrease() {
      this.state.count--
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')