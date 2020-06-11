import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'vue-cookies'


Vue.config.productionTip = false

Vue.use(cookies);

let app = null


  if(!app){
    app= new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
 


