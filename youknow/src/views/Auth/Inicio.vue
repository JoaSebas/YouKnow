<template>
        <div>
        <h1>Bienvenido al Sistema youKnow</h1>
            <span @click="logout()">LoutOut</span>
        
                <button @click="verPerfil()">ver perfil</button>
        </div>
   
</template>




<script>
export default {
   methods: {
       logout(){

           this.$cookies.remove('user');
           this.$router.push({name:"Inicio"})
       },

        async verPerfil(){

            const options={
                          method:"POST",
                          body:JSON.stringify({id:"user"}),
                          headers:{
                            Accept:"application/json",
                            "Content-Type":"application/json; charset=utf-8"
                          }

                        };

                      var url ="http://localhost:50892/";

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