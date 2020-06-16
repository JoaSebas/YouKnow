<template>
    <div>
        <Menu/>
        <h1>Bienvenido al Sistema youKnow</h1>
        <span @click="logout()">LogOut</span>
    </div>
   
</template>

<script>
import Menu from '@/components/Menu'

export default {
  /*components:{
      Menu
  }*/
  methods:{
      logout(){
        this.$cookies.remove('user');
        this.$router.push({name:"Inicio"});
      }     
  }
}
</script>