<template>
    <div class="body-login">
        <div class="home-header">
            <router-link to='/' exact><i class="fas fa-home"></i> Inicio</router-link>
        </div>
        <div class="container-login">
            <h1 class="logo">You<span class="know" >Know</span></h1>
            <div class="form-login">
                <div class="input-group">
                     <label for="">Usuario <span v-if="valido==false && user==''">*</span></label>
                     <input type="text" v-model="user">
                </div>
                <div class="input-group">
                     <label for="">Contraseña <span v-if="valido==false && pass==''">*</span></label>
                    <input type="password" v-model="pass">
                </div>
               
                  <button v-if="cargando==true" class="btn btn-ingresar"><i class="fas fa-spinner fa-spin"></i></button>
                <button v-if="cargando==false" class="btn btn-ingresar" @click="ingresar()">Ingresar</button>
            </div>
            <div class="registro">
                <router-link to="/Registro" class="btn-registro">Registrarse</router-link>
            </div>
           

        </div>
    </div>
</template>

<script>

import {auth} from  '@/firebase/firebase.js'

export default {
    data(){
        return{
            user:"",
            pass:"",
            valido:null,
            cargando:false
        }
    },
    methods: {
       async  ingresar(){

                this.cargando=true;
            if(this.user!="" && this.pass!=""){             
                  this.valido=true;

                await auth.signInWithEmailAndPassword(this.user,this.pass)
                .then(()=>{
                    
                    this.$router.push({name:"Welcome"})
                      console.log('Sesion Iniciada')
                })
                .catch(err=>{
                    console.log('No se pudo iniciar',err)
                })


                this.cargando=false;

            }else{
                    this.valido=false;
                      this.cargando=false;
            }

           

        }
    },
}
</script>




<style lang="scss" scoped>
    .body-login{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url('../assets/background/background-form.png');
        background-size: cover;
    }

    .container-login >h1{
        text-align: center;
        padding: 10px 0;

    }

    .form-login{
        padding: 20px 30px;
        border: 1px solid #33cfc1;
        box-shadow: 1px 1px 5px #cbcbcb;
        border-radius: 3px;
        background: #fff;
    }

   


  

    .registro{
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .btn-registro{
        color: #33cfc1;
        text-align: right;
    }

    .home-header{
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .home-header a{
        font-size: 18px;
    }

</style>