<template>
  <div class="request">
    <div class="request-list" :style="{width:XWide+'px'}" >
      <XHandle :XWide="XWide" @modify="(x)=>{this.XWide = x}"/>
    </div>
    <div class="request-content">
      <div class="urlInput">
        <input type="text" v-model="inUrl" />
        <button @click="res">请求</button>
        <div class="url">请求地址：{{inUrl}}</div>
      </div>
      <div class="result">
        <JsonViewer :value="output" copyable boxed sort theme="light"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, inject, ref} from "vue";
import axios from "axios";
import XHandle from "@/components/XHandle.vue";
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import api from '@/request'

export default defineComponent({
  name: "index",
  components: {XHandle,JsonViewer},
  setup() {
    let inUrl = ref('/v1/sys/getSysInfo')
    let output = ref<object>({})
    let XWide = ref<number>(230)
    return{
      inUrl,
      output,
      XWide,
    }
  },
  mounted() {
  },
  methods: {
    res(){
      api.get(this.inUrl).then(data=>{
        this.output = data.data
      })
    },
  },
})

</script>

<style lang="scss">
.request{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.request-list{
  min-width: 200px;
  max-width: 400px;
  position: relative;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.request-content{
  overflow: auto;
  box-sizing: border-box;
  padding: 50px;
  flex-grow: 1;
  height: 100%;
  .urlInput{
    input{
      width: 300px;
      height: 40px;
      margin-bottom: 10px;
      border-radius: 8px;
      user-select: none;
      border: 1px solid #5e5e5e;
      outline:medium;
      box-sizing: border-box;
      font-size: 2em;
      padding: 10px;
    }
    .url{
      color: #ffffff;
      font-size: 2em;
      height: 36px;
      background-color: #9d9d9d;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      padding: 25px;
      box-sizing: border-box;
      border-radius: 8px;
    }
    button{
      width: 100px;
      height: 36px;
      margin-bottom: 10px;
      border-radius: 8px;
      outline:medium;
    }
  }
  .result{
    display: block;
    height: auto;
    width: 100%;
    font-size: 1.6em;
  }
}
</style>