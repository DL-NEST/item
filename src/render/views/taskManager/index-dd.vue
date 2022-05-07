<template>
  <div class="task-manager">
    <div class="task-ctrl">
      <n-button type="success" size="small">DevTool</n-button>
      <n-button type="success" size="small">IpcLog</n-button>
      <n-button type="success" size="small">Show</n-button>
      <n-button type="error" size="small">Kill</n-button>
      <n-button type="error" size="small" @click="get">get</n-button>
    </div>
    <div class="task-list">
      <n-data-table class="list-table" :columns="dataRule" :data="data" :row-props="rowProps" :single-line="true"/>
    </div>
  </div>
  <div class="YMenu" v-show="YMenu.show"
       :style="{left:`${YMenu.x}px`,top:`${YMenu.y}px`}"
       @blur="()=>{YMenu.show = false}"
  >
    <ul class="YMenu-list" v-for="list in menuData">
      <li class="YMenu-item" v-for="item in list">
        <button class="menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
          {{item.name}}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import {defineComponent, ref} from "vue";
import {NButton,NDataTable} from 'naive-ui'

type Process = {
  name:string
  pid:number,
  mark:string,
  vacant:number
}

type MenuOp = {
  show: boolean,
  x: number,
  y: number
}
type menuList = {
  icon:any,
  name:string,
  onClick?: () => any,
  child?:menuList[]
}

const menuData:menuList[][] = [
  [
    {
      icon:'显示',
      name:'显示(window)'
    },
    {
      icon:'DevTool',
      name:'DevTool'
    },
    {
      icon:'Ipc',
      name:'Ipc日记'
    }
  ],
  [
    {
      icon:'挂起进程',
      name:'挂起进程'
    },
    {
      icon:'结束进程',
      name:'结束进程'
    }
  ],
]

const dataRule:any =[
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Pid',
    key: 'pid'
  },
  {
    title: 'Mark',
    key: 'mark'
  },
  {
    title: 'Vacant',
    key: 'vacant'
  }
]

let processData:Process[] = [
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
  {
    name: 'main',
    pid: 3252,
    mark: 'electron',
    vacant: 1341
  },
]

export default defineComponent({
  name: "taskManager",
  components:{NButton,NDataTable},
  setup () {
    let data = ref(processData)
    let YMenu = ref<MenuOp>({
      show : false,
      x: 100,
      y: 0
    })
    function showMenu(even:any) {
      YMenu.value.show = !YMenu.value.show
      YMenu.value.y = even.pageY
      YMenu.value.x = even.pageX
      console.log(even)
    }
    return {
      dataRule,
      data,
      YMenu,
      menuData,
      rowProps: (row:any) => {
        return {
          style: 'cursor: pointer;',
          onmouseup: (even:any)=>{
            if (even.button === 2){
              showMenu(even)
              console.log('右键,name:'+row.name)
            }
            if (even.button === 0){
              console.log('左键,name:'+row.name)
            }
          },
        }
      },
    }
  },
  mounted() {
    document.onclick= ()=>{
      this.YMenu.show = false
    }
    window.$ipc.on('taskManager_z',(event, args)=>{
      console.log(args)
    })
  },
  methods: {
    get(){
      window.$ipc.send('taskManager','render hallo')
    }
  }
})

</script>

<style lang="scss">
.task-manager{
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgb(255,255,255);
  .task-ctrl{
    width: 100%;
    height: 40px;
    background-color: rgb(203, 203, 204);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    -webkit-app-region: drag;
    button{
      -webkit-app-region: no-drag;
      margin-right: 5px;
      font-size: 1.1em ;
    }
  }
  .task-list{
    width: 100%;
    height: 100%;
    background-color: #d0d6df;
    overflow: auto;
  }
}
.YMenu{
  -webkit-app-region: no-drag;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: 200;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15);
  .YMenu-list{
    margin: 0;
    display: block;
    width: 100%;
    padding: 8px;
  }
  .YMenu-list + .YMenu-list {
    border-top: 1px solid #ddd;
  }
  .YMenu-item{
    position: relative;
  }
  .menu-button{
    font: inherit;
    border: 0;
    padding: 6px 36px 6px 8px;
    width: 100%;
    border-radius: 8px;
    text-align: left;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #ffffff;
    &:hover{
      background-color: #e2e7ee;
    }
    svg{
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
}
ol, ul {
  list-style: none;
}

.task-list::-webkit-scrollbar {
  width: 0.7rem;
}
.task-list::-webkit-scrollbar-track {
  background: rgba(231, 231, 231, 0.5);
  border-radius: 2px;
  -webkit-border-radius: 2px;
}
// 滚动条的颜色
.task-list::-webkit-scrollbar-thumb {
  background: rgba(71, 71, 71, 0.5);
  -webkit-border-radius: 3px;
}
// 滚动条的选中的颜色
.task-list::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 147, 147, 0.8);
}

.task-list::-webkit-scrollbar-corner {
  background: #545454;
}


</style>