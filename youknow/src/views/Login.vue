<template>
    <div class="body-login">
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
               
                <button class="btn btn-ingresar" @click="ingresar()">Ingresar</button>
            </div>
            <div class="registro">
                <router-link to="/Registro" class="btn-registro">Registrarse</router-link>
            </div>
           

        </div>
    </div>
</template>

<script>
import  '@/firebase/firebase.js'
import firebase from 'firebase'

export default {
    data(){
        return{
            user:"",
            pass:"",
            valido:null
        }
    },
    methods: {
        ingresar(){

            if(this.user!="" && this.pass!=""){             
                  this.valido=true;

                firebase.auth().signInWithEmailAndPassword(this.user,this.pass)
                .then(()=>{
                    
                    this.$router.push({name:"Welcome"})
                      console.log('Sesion Iniciada')
                })
                .catch(err=>{
                    console.log('No se pudo iniciar',err)
                })


            }else{
                    this.valido=false;
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

    .input-group{
        padding: 10px 0;
        display: flex;
        flex-flow: column;
    }

    .input-group span{
        color: red;
    }

    .input-group > label{
        padding: 5px 0;
    }


    .btn-ingresar{
            background: #33cfc1;
            font-weight: 700;
            font-size: 16px;
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

</style>