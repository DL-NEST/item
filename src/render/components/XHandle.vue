<template>
  <div class="XHandle" @mousedown="mousedown($event)">
    <div ref="XHandle"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "XHandle",
  props: ['XWide'],
  setup() {
    let mouse = ref(false)
    let currentX = ref()
    return{
      mouse,
      currentX
    }
  },
  mounted() {
  },
  methods: {
    mousedown(event:any){
      let XHandle = this.$refs.XHandle as HTMLDivElement
      XHandle.style.backgroundColor = '#494949'
      let startX = event.clientX;
      document.onmousemove = (e) => {
        let endX = e.clientX;
        let moveLen = this.XWide + (endX - startX)
        startX = moveLen
        this.$emit('modify',moveLen)
      }
      document.onmouseup = (e) =>{
        XHandle.style.backgroundColor = ''
        document.onmousemove = null;
        document.onmouseup = null;
      }
    },
  }
})

</script>

<style lang="scss">
.XHandle{
  position: absolute;
  right: -5px;
  top: 0;
  height: 100%;
  width: 10px;
  cursor: col-resize;
  user-select: none;
  display: flex;
  justify-content: center;
  div{
    height: 100%;
    width: 2px;
    background-color: #c7c7c7;
  }
}
</style>