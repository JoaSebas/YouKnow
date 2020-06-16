<template>
    <div class="body-login">
        <div class="home-header">
            <router-link to='/' exact><i class="fas fa-home"></i> Inicio</router-link>
        </div>
        <div class="container-login">
            <h1 class="logo">You<span class="know" >Know</span></h1>
            <div class="form-login">
                <span v-if="invalidUser==true">Usuario o contrasena incorrectos</span>
                <div class="input-group">
                     <label for="">Correo <span v-if="valido==false && user==''">*</span>
                     <span v-if="formatEmail == false">Formato Incorrecto</span>
                  </label>
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
//import {auth} from '@/firebase/firebase.js'

export default {
    data(){
        return{
            user:"",
            pass:"",
            valido:null,
            cargando:false,
            formatEmail:null,
            invalidUser:false
        }
    },
    methods: {
      /*  ingresar(){

            if(this.user!="" && this.pass!=""){             
                  this.valido=true;

                auth.signInWithEmailAndPassword(this.user,this.pass)
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

           

        }*/
       async ingresar(){

            if(this.user!="" && this.pass!=""){
                
                var validateEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                if(validateEmail.test(this.user)){
                console.log("valido")
                this.formatEmail = true;



                  this.valido=true;
                var login = {
                    email : this.user,
                    pass : this.pass
                }

                const options={
                  method:"POST",
                  body:JSON.stringify(login),
                  headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json; chartset=utf-8"
                  }
                }

                var url = "http://localhost:62040/"; //Este varia pero solo al localhost
                var uri = url+"api/user/loginUser";

                await fetch(uri, options)
                .then(async resp =>{
                    var code = await resp.json();

                    console.log(code);
                        if(code == "invalid-user"){
                                this.invalidUser = true
                        }
                        if(code =="email-not-exists"){
                            this.invalidUser = true
                        }
                        if(code == "correct-login"){
                            this.invalidUser = false;
                            this.$router.push({name:"Welcome"})
                            console.log('Sesion Iniciada')
                        }
                        if(code == "error-login"){
                                console.log(code, "Error 404")
                        }

                

                }).catch(err=>{
                    console.log(err,"Error de conexion")
                })

            }else{
                    this.valido=false;
            }

            }else{
                    this.valido = false;
                    this.cargando = false;
                    this.formatEmail=null;
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