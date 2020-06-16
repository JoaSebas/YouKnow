<template>
  <div class="body-registro">
        <div class="home-header">
            <router-link to='/' exact><i class="fas fa-home"></i> Inicio</router-link>
        </div>
    <div class="container-registro">
      <h1 class="logo">
        You
        <span class="know">Know</span>
      </h1>
      <div class="form-registro">
        <h3>Registrar</h3>
        <div class="input-group">
          <label for>
            Nombre
            <span v-if="valido==false && nombre==''">*</span>
          </label>
          <input class="input-registro" type="text" v-model="nombre" />
        </div>
        <div class="input-group">
          <label for>
            Apellido
            <span v-if="valido==false && apellido==''">*</span>
          </label>
          <input class="input-registro" type="text" v-model="apellido" />
        </div>
        <div class="input-group fecha">
          <div class="group-fecha">
            <label for>Día</label>
            <select class="input-registro " v-model="day">
              <option v-for="day in days" :key="day">{{day}}</option>
            </select>
          </div>
          <div class="group-fecha">
            <label for>Mes</label>
            <select class="input-registro " v-model="month">
              <option v-for="month in months" :key="month.value" :value="month.value">{{month.name}}</option>
            </select>
          </div>
          <div class="group-fecha">
            <label for>Año</label>
            <select class="input-registro" v-model="year">
              <option v-for="year in years" :key="year">{{year}}</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <label for>Género</label>
          <select class="input-registro" v-model="genero">
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="input-group">
          <label for>
            Correo
            <span v-if="valido==false && correo==''">*</span>
            <span v-if="existe==true">Correo existente</span>
            <span v-if="formatEmail == false">Formato Incorrecto</span>
          </label>
          <input class="input-registro" type="text" v-model="correo" />
        </div>
        <div class="input-group">
          <label for>
            Contraseña
            <span v-if="valido==false && pass==''">*</span>
          </label>
          <input class="input-registro" type="password" v-model="pass" />
        </div>
        <div class="input-group">
          <label for>
            Verificar Contraseña
            <span v-if="valido==false && verifPass==''">*</span>
            <span v-if="igualPass == false">Las contraseñas no coinciden</span>
          </label>
          <input class="input-registro" type="password" v-model="verifPass" />
        </div>

        <div class="input-group check">
          <!-- <div class="group-check">
            <label for="premium">Premium</label>
            <label class="radio">
              <input type="radio" value="Premium" v-model="cuenta" />
              <span class="tag-radio"></span>
            </label>
          </div> -->
          <div class="group-check">
            <label for="free">Normal</label>
            <label class="radio">
              <input type="radio"  :value="true" v-model="cuenta" />
              <span  class="tag-radio"></span>
            </label>
          </div>
        </div>

        <div class="container-btn-registro">
            <div>
                   <router-link class="link-login" to="/Login">Login</router-link>
            </div>
            <div>
                    <button v-if="cargando==true" class="btn btn-ingresar"><i class="fas fa-spinner fa-spin"></i></button>
                   <button v-if="cargando==false" class="btn btn-ingresar" @click="registroApi()">Crear</button>
            </div>
        </div>
     
      </div>
    </div>
    <div class="frase-footer">
      <h1>COMPARTE</h1>
      <h1>TÚ CONOCIMIENTO</h1>
    </div>
  </div>
</template>

<script>

//import {db,auth} from '@/firebase/firebase.js'
import moment from "moment";


moment.locale('es-Es'); 

export default {
  data() {
    return {
      days: [],
      months: [],
      years: [],

      day: 1,
      month: 1,
      year: 2000,

      nombre: "",
      apellido: "",
      genero: "Masculino",
      correo: "",
      pass: "",
      verifPass: "",
      valido: null,
      cuenta: true,

      igualPass:null,
      cargando:false,
      existe:false,
      formatEmail:null
    };
  },
  created() {
    var date = new Date();


    //dias
    this.days = [];

    for (var d = 1; d <= 31; d++) {
      this.days.push(d);
    }

    //mes

    this.months = [];

    for (var m = 1; m <= 12; m++) {

        var name= moment().month(m-1).format('MMM');

      var month={
        value:m,
        name:name
      }

      this.months.push(month);

    
    }

    //año

    this.years = [];
    var listYear=[]
    for (var y = 1905; y <= date.getFullYear(); y++) {
      listYear.push(y);
    }

    this.years = listYear.sort((a,b)=>{return b-a})


    this.day = moment(date).format("D");
    this.month = moment(date).format("M");
    this.year = 1992;
  },
  methods: {
   /* async registrar (){

        this.cargando=true;

        if(this.nombre && this.apellido&&this.correo&&this.pass && this.verifPass){

           if(this.pass !== this.verifPass){
               this.igualPass=false;
                 this.cargando=false;
               
           }else{
                this.igualPass=true;

                //validar si existe correo

                    this.existe = await db.collection('users').where('email',"==",this.correo).get()
                                  .then(resp=>{

                                      var arr=[]

                                          resp.forEach(user=>{

                                              arr.push(user.data())

                                          })

                                      if(arr.length >0){
                                          return true 
                                      }

                                      return false

                                  }).catch(err=>console.log(err))

                //

                      if(this.existe==false){

                     
                            await auth.createUserWithEmailAndPassword(this.correo,this.pass)
                              .then(async resp=>{

                              var role=  await db.collection('role').where('name','==',this.cuenta).get().then(rol=>{
                                
                                    var arr =[]
                                          rol.forEach(e => {
                                                arr.push(e.id)
                                            });
                                  return arr[0]
                                  
                              })

                                var user ={
                                  name:this.nombre,
                                  lastName:this.apellido,
                                  email:this.correo,
                                  birthday:this.day +"."+this.month+"."+this.year,
                                  genre:this.genero,
                                  role: role
                                }
                                
                      
                                await  db.collection('users').doc(resp.user.uid).set(user)
                                  .then(()=>{
                                    console.log('usuario creado en la base de datos');
                                  })


                                  .catch(err=>{
                                    console.log(err);
                                  })


                              })
                              .catch(err=>{
                                console(err);
                              })

                            await auth.signOut()
                              .catch(err=>{
                                console.log(err);
                              })


                        
                              this.$router.push('/Login');
                                this.cargando=false;

                       }else{

                         this.existe=true;
                          this.cargando=false;
                       }
                 
           }

         
          this.valido=true;
            
        }else{
         
          this.valido=false;
          this.cargando=false;
        }

    },*/

    async registroApi(){
              if(this.nombre && this.apellido&&this.correo&&this.pass && this.verifPass){

              var validateEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(validateEmail.test(this.correo)){
    console.log("valido")
      this.formatEmail = true;
           if(this.pass !== this.verifPass){
               this.igualPass=false;
                 this.cargando=false;
               
           }else{

                this.valido = true;

                  var user ={
                    name:this.nombre,
                    lastName:this.apellido,
                    email:this.correo,
                    brithday:this.month +"/"+this.day+"/"+this.year,
                    genre:this.genero,
                    pass: this.pass,
                    account:this.cuenta
                  
                  }
                const options={
                  method:"POST",
                  body:JSON.stringify(user),
                  headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json; chartset=utf-8"
                  }
                }

                var url = "http://localhost:62040/"; //Este varia pero solo al localhost
                var uri = url+"api/user/registerUser";

                await fetch(uri,options)
                .then(async resp=>{
                var data = await resp.json()
                    if(data.status ==200 && data.code=='exists-email'){
                          this.existe =true
                          this.cargando=false;     
                    }

                    if(data.status ==200 && data.code=='register'){                        
                          this.$router.push('/Login');
                          this.cargando=false;
                     }  
                     if(resp.status == 404){
                       console.log('Algo salio Mal');
                     }
                })
                .catch(err=>{
                  console.log(err,'Fallo Conexion')
                })
                this.cargando=false;
           } 
              }else{
                this.formatEmail = false;
                this.valido=false;
                this.cargando=false;
              }
          }else{
          
                this.valido=false;
                this.cargando=false;
          }
      }
  },
};
</script>


<style lang="scss" scoped>
.body-registro {
  height: 100vh;
  background: url("../assets/background/background-registro.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
}
   .home-header{
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .home-header a{
        font-size: 18px;
        color: #fff;
    }

.container-registro > h1 {
  text-align: center;
  padding: 10px 0;
  color: #fff;
  text-shadow: 1px 1px 2px #333;
}

.form-registro {
  padding: 20px 30px;
  border: 1px solid #33cfc1;
  box-shadow: 1px 1px 5px #333;
  border-radius: 3px;
  background: #fff;
  width: 250px;
}

.form-registro > h3 {
  text-align: center;
}
.input-group {
  padding: 5px 0;
}
.input-group,
.group-fecha > label {
  padding: 2px 0;
  font-size: 15px;
  font-weight: 500;
}

.input-registro {
  background: none;
  border: none;
  border-bottom: 1px solid #33cfc1;
  font-weight: 700;
  font-size: 16px;
  width: 240px;
}

.input-registro:focus {
  outline: none;
}

.fecha {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.group-fecha {
  display: flex;
  flex-flow: column;
  text-align: center;
}

.group-fecha select {
  text-align-last: center;
}

.group-fecha .input-registro {
  width: 60px;
}

.check {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
}

.group-check {
  display: flex;
  flex-flow: column;
  width: 50%;
}

.group-check label {
  text-align: center;
  padding: 5px 0;
}
.group-check input {
  width: 100%;
  height: 20px;
  margin: 5px 0;
}

.radio {
  position: relative;
  height: 35px;
}

.radio input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
}

.tag-radio {
  position: absolute;
  background: #f7f7f7;
  height: 15px;
  width: 15px;
  border: 1px solid #33cfc1;
  border-radius: 3px;
  left: 40%;
  cursor: pointer;
}

.radio input:checked ~ .tag-radio {
  background-color: #33cfc1;
}

.tag-radio:after {
  content: "";
  position: absolute;
  display: none;
}

.radio input:checked ~ .tag-radio:after {
  display: block;
}

.radio .tag-radio:after {
  left: 4px;
  top: 0px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container-btn-registro{
    display: flex;
    flex-flow: row;
}

.container-btn-registro >div{
    width: 50%;
    display: flex;
    justify-content: center;
}

.link-login{
    color: #33cfc1;
    cursor: pointer;
}

.frase-footer {
  position: absolute;
  bottom: 40px;
  right: 40px;
}

.frase-footer > h1 {
  font-family: "Black Ops One", cursive;
  color: #fff;
  text-align: right;
  font-weight: 300;
  font-size: 35px;
}
</style>