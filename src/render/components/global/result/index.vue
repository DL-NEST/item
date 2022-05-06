<template>
  <div class="global">
    <div class="global-mask" v-show="mask" @click="gb">
      <div class="request-out" v-if="result(out)">
        <transition name="mask"
                    enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeInDown">
          <div class="request-out-is" v-show="mask" @click.stop>
            <div class="code">Code: {{out.code}}</div>
            <div class="msg">msg: {{out.msg}}</div>
            <JsonViewer :value="out.data" copyable boxed sort theme="light" @click.stop/>
          </div>
        </transition>
      </div>
      <div class="request-out" v-if="!result(out)">
        <JsonViewer :value="out" copyable boxed sort theme="light" @click.stop/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide, reactive, ref} from "vue";
import {JsonViewer} from "vue3-json-viewer"
import "vue3-json-viewer/dist/index.css";
import 'animate.css';


export default defineComponent({
  name: "result",
  components: {JsonViewer},
  setup() {
    let out = ref<object>({data:'null'})
    let mask = ref(false)
    let updateMask = (data) => {
      mask.value = true
      out.value = data
    }
    provide('out',out)
    provide('mask',mask)
    provide('updateMask',updateMask)
    return{
      out,
      mask,
      updateMask
    }
  },
  mounted() {
  },
  methods: {
    gb(){
      this.mask = false
    },
    result(out){
      if (out.code !== undefined && out.data !== undefined && out.msg !== undefined){
        return true
      }else {
        return false
      }
    }
  }
})

</script>

<style lang="scss">
.global{
  width: 100%;
  height: 100%;
  --animate-duration: 0.5s;
}
.global-mask{
  user-select: none;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: calc(100% - 28px);
  left: 0;
  top: 28px;
  background-color: var(--mask-bg);
  overflow: auto;
  .request-out{
    z-index: 30;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    padding: 80px;
    .request-out-is{
      background-color: #ffffff;
      border-radius: 8px;
      font-size: 2em;
      padding: 20px;
      div{
        margin-bottom: 10px;
        margin-left: 20px;
      }
      .code{

      }
      .msg{

      }
    }
  }
}

// 滚动条
.global-mask::-webkit-scrollbar {
  width: 0;
}
</style>