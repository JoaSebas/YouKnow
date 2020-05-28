<template>
    <nav class="nav">
        <div>
            <router-link to='/' exact><h1 class="logo">You<span class="know" >Know</span></h1></router-link>
        </div>
        <ul  class="menu">
            <li><router-link to='/' exact><i class="fas fa-home"></i> Inicio</router-link></li>
            <li><router-link to='/Aprender'><i class="far fa-lightbulb"></i> Aprender</router-link></li>
             <li><router-link to='/Login'><i class="far fa-user"></i> Login</router-link></li>
        </ul>
    </nav>
</template> 
<style lang="scss" scoped>

.nav{
    background: #33cfc1;
    display: flex;
    padding: 0 10%;
    height: 50px;
 

}

.menu{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  
}
.menu > li{
    padding: 0 20px;
    color: #fff;
}

.menu >li >a{
    font-size: 18px;
}

.menu >li a:hover{
    color: #fff;
    font-weight: 700;
}



.logo{
   font-size: 30px;
   letter-spacing: 3px;
   font-weight: 700;
}

.know{
    font-family: 'Black Ops One', cursive;
    font-weight: 300;
}


.menu >li >a.router-link-active {
     color: #fff;
    font-weight: 700;
}
</style>