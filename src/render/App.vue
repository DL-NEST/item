<template>
  <top-ctrl />
    <div class="container">
      <router-view/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import TopCtrl from "./components/topCtrl/TopCtrl.vue";
import {globalIpc} from "@/global";

onMounted(()=>{
  globalIpc(this)
})

</script>

<style lang="scss">
#app{
  display: flex;
  flex-direction: column;
}
.container{
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
