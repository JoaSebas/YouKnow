import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Aprender from '../views/Aprender.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'


//AUTH VIEWS
//import firebase from 'firebase'
import Welcome from '../views/Auth/Inicio.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    meta:{
      title:"You Know"
    }
  },
  {
    path: '/Aprender',
    name: 'Aprender',
    component: Aprender,
    meta:{
      title:"Aprender - You Know" 
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      title:"Login"
    }
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro,
    meta:{
      title:"Registrase"
    }
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome,
    meta:{
      title:"Cuenta You Know",
      auth:true
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



/*router.beforeEach((to,from,next)=>{
  document.title = to.meta.title

    //let user = firebase.auth().currentUser
    let auth = to.matched.some(ruta=>ruta.meta.auth)
  
    if(auth && !user){
          next('Login')
      }
      else if(!auth && user){
          next('/Welcome')
      }else{
        next()
      }
      if(auth)
      {
        next('Login')
      }else{
        next()
      }


})*/

export default router
