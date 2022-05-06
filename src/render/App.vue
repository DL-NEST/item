<template>
  <top-ctrl />
    <div class="container">
      <router-view/>
    </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance} from "vue";
import TopCtrl from "./components/topCtrl/TopCtrl.vue";

export default defineComponent({
  name: "App",
  components: {TopCtrl},
  mounted() {
  }
});
</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
}
</style>
