<template>
      <div>
              <Menu/>
            <router-view></router-view>
      </div>
   
  
</template>


<script>

import Menu from '@/components/Menu'

export default {
  components:{
      Menu
  }
}
</script>

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

</style>
