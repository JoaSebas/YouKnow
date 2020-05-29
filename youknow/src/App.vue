<template>
      <div>           
            <router-view></router-view>
      </div>
   
  
</template>



<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-family: 'Anonymous Pro', monospace;
  }

  body{
        color: #333;
  }

  a{
    text-decoration: none;
    color: #333;
  }

  ul{
    list-style: none;
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

input{
  background: #f7f7f7;
  border: none;
  height: 30px;
  width: 190px;
  border-radius: 3px;
  padding-left: 10px;
}

.btn{
  height: 30px;
  width: 200px;
  border: none;
}


</style>
