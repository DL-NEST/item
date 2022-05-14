<template>
  <div class="top-ctrl" v-if="topShow()">
    <div class="top-ctrl_left">
      <div class="top-ctrl_left_logo">
        <img src="../../assets/favicon.svg" alt="logo" />
      </div>
      <menu-bar />
    </div>
    <div class="top-ctrl_right">
      <win-ctrl-bar/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuBar from "./MenuBar.vue";
import WinCtrlBar from "./WinCtrlBar.vue";
import {winRoutes} from '@/routes/router'
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
const router = useRoute()

const topShow = ():boolean=>{
  for (let r of winRoutes) {
    if(r.path === router.path){
      return false
    }
  }
  return true
}
onMounted(()=>{
})


</script>

<style lang="scss">
.top-ctrl {
  div{
    user-select: none;
  }
  position: relative;
  flex-shrink: 1;
  width: 100%;
  height: 2.3rem;
  background-color: var(--top-ctrl-bg);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: drag;
}
.top-ctrl_left {
  height: 100%;
  display: flex;
  flex-direction: row;
  .top-ctrl_left_logo {
    height: 100%;
    width: 3rem;
    padding: 5px 0 5px 0;
    box-sizing: border-box;
    text-align: center;
    img {
      width: auto;
      height: 100%;
    }
  }
}
.top-ctrl_right {
  height: 100%;
  width: auto;
}
</style>
