<template>
    <div>
        <Menu/>
        <h1>Inicio</h1>
        <button @click="verPerfil()">Ver Perfil</button>
    </div>


   
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components:{
      Menu
  },
  methods: {
      async verPerfil(){

            const options={
                          method:"POST",
                         // body:JSON.stringify({id:"user"}),
                          headers:{
                            Accept:"application/json",
                            "Content-Type":"application/json; charset=utf-8"
                          }

                        };

                      var url ="http://localhost:62040/";

                      var uri= url + "api/profile/dataProfile"


                      await fetch(uri,options)
                      .then(async resp=>{

                            var data = await resp.json();

                            console.log(data)
                      })
                      .catch('Error')
      }
  },
}
</script>