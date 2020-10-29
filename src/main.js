import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from "./store/index"

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// axios.defaults.baseURL = 'http://domen-one.test/'
axios.defaults.baseURL = 'http://mobile-api.test/'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

