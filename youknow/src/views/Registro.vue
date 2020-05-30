<template>
  <div class="body-registro">
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
              <option v-for="month in months" :key="month">{{month}}</option>
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
            <span v-if="valido==false && verrifPass==''">*</span>
          </label>
          <input class="input-registro" type="password" v-model="verifPass" />
        </div>

        <div class="input-group check">
          <div class="group-check">
            <label for="premium">Premium</label>
            <label class="radio">
              <input type="radio" id="premium" value="premium" v-model="cuenta" />
              <span for="premium" class="tag-radio"></span>
            </label>
          </div>
          <div class="group-check">
            <label for="free">Normal</label>
            <label class="radio">
              <input type="radio" id="free" value="free" v-model="cuenta" />
              <span for="free" class="tag-radio"></span>
            </label>
          </div>
        </div>

        <div class="container-btn-registro">
            <div>
                   <router-link class="link-login" to="/Login">Login</router-link>
            </div>
            <div>
                   <button class="btn btn-ingresar">Crear</button>
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
import moment from "moment";

export default {
  data() {
    return {
      days: [],
      months: [],
      years: [],

      day: 1,
      month: 1,
      year: 1,

      nombre: "",
      apellido: "",
      genero: "Masculino",
      correo: "",
      pass: "",
      verifPass: "",
      valido: null,
      cuenta: "free"
    };
  },
  created: function() {
    var date = new Date();

    console.log(date.getDay(), moment(date).format("DD/MM/YYY"));

    //dias
    this.days = [];

    for (var d = 1; d <= 31; d++) {
      this.days.push(d);
    }

    //mes

    this.months = [];

    for (var m = 1; m <= 12; m++) {
      this.months.push(m);
    }

    //año

    this.years = [];

    for (var y = 1905; y <= date.getFullYear(); y++) {
      this.years.push(y);
    }

    this.day = moment(date).format("DD");
    this.month = moment(date).format("M");
    this.year = 1905;
  }
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