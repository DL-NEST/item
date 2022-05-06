<template>
  <div class="nav">
    <div class="nav-name">路由页</div>
    <div class="router" v-for="(index) in this.$router.options.routes.length-1" :key="index">
      <div class="router-dad" @click="this.$router.push($router.options.routes[index].name)" style="display: flex;flex-direction: row;justify-content: center">
        <p >{{$router.options.routes[index].name}}</p>
        <p v-show="$router.options.routes[index].ps!==undefined">-{{$router.options.routes[index].ps}}</p>
      </div>
      <div class="router-children" @click="this.$router.push(item.name)" v-for="(item,index1) in $router.options.routes[index].children" :key="index1">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss">
.nav{
  width: 100%;
  height: 100%;
  background-color: #ffffff;
// 布局
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.nav-name{
  font-size: 2em;
  position: absolute;
  top: 5rem;
}
.router{
  width: 200px;
  height: auto;
  background-color: rgb(227, 226, 226);
  margin-bottom: 16px;
  border-radius: 4px;
  box-sizing:border-box;
  padding: 4px 18px;
  .router-dad:hover{
    p{
      color: #6060fa;
    }
  }
  p{
    -webkit-user-select: none;
    -webkit-app-region: no-drag;
    color: black;
    font-size: 1.6em;
    cursor: pointer;
    margin: 0;
  }
  .router-children{
    -webkit-user-select: none;
    -webkit-app-region: no-drag;
    font-size: 1.1em;
    width: 100%;
    border-radius: 4px;
  }
  .router-children:hover{
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    color: white;
  }
}
</style>
