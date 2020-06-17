<template>
    <div>
        <router-link to="/:user/Inicio">Perfil</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created(){
        this.verifySession()
    },
    methods:{
     async verifySession(){
             var token = this.$cookies.get('token')

             var options={
                 method:"POST",
                 header:{
                     Authorizate: 'Beared ' + token,
                     "Content-Type":"application/json; charset=utf-8"
                     }
                 };

                var api = "http://localhost:62040/";
               var uri = "api/profile/verifySession";

                var url = api + uri;
                 await fetch(url,options)
                 .then(async resp=>{
                     var data = await resp.json()
                        console.log(data)
                 })
                 .catch(err=>console.log(err))
             }
        }
    }
</script>