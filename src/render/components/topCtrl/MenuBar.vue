<template>
  <div class="menu">
    <div class="menu-node" :class="item.active?'active':''" v-for="(item,index) in menuList" role="menubar">
      <div class="menu-title" :class="item.active?'active':''" @mouseleave="" @click="handleClick($event,item)">
        {{item.name}}
      </div>
      <!-- 弹出列表 -->
      <div id="menu-block" v-if="item.active" @click="move">
        <div class="menu-list" :style="{left:(36+index*51)+'px'}" ref="node">
          <div class="menu-group" v-for="(node,index) in item.subList" role="menuitem">
            <div class="menu-item" v-for="nodeItem in node" @click="menuFun(nodeItem)" >
              <div class="menu-item-name">
                {{nodeItem.name}}
              </div>
              <div class="menu-item-shortcuts">
                {{nodeItem.shortcuts}}
              </div>
            </div>
            <hr class="menu-group-foot" v-if="index <= item.subList.length - 2" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {menuLists} from "../../../global";

export default defineComponent({
  name: "MenuBar",
  setup() {
    let menuList = ref(menuLists);
    let menuBar = ref(false)
    return {
      menuList,
      menuBar
    };
  },
  mounted() {
  },
  methods:{
    handleClick(event:any,item:any){
      if (item.active){
        item.active = false;
        this.menuList.forEach(
            (item:any) => {
              item.active = false;
            }
        );
      }else{
        this.menuList.forEach(
            (item:any) => {
              item.active = false;
            }
        );
        item.active = true;
      }
    },
    move(){
      this.menuList.forEach(
          (item:any) => {
            item.active = false;
          }
      );
    },
    menuFun(item:any){
      console.log(item.click)
      window.$ipc.send("menu_fun", item.name)
    }
  },
});

</script>

<style lang="scss">
.menu {
  height: 100%;
  width: auto;
  -webkit-app-region: no-drag;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  .menu-node{
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.3rem;
    font-family: "monospace";
    .menu-title{
      font-size: 0.8em;
      font-weight: 500;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      &:hover{
        background-color: rgba(198, 198, 198,1);
      }
    }
    .active{
      background-color: #fcfcfc!important;
    }
  }
}

#menu-block{
  position: absolute;
  z-index: 120;
  width: 100%;
  height: calc(100% - 28px);
  background-color: var(--mask-bg);
  top: 28px;
  left: 0;
  padding: 0;
  .menu-list{
    position: relative;
    display: block;
    z-index: 120;
    max-width: 17rem;
    background-color: #ffffff;
    padding-bottom: 6px;
    top: 0;
    .menu-group{
      font-size: 0.8em;
      box-sizing: border-box;
      position: relative;
      cursor: default;
      z-index: 120;
      .menu-item{
        box-sizing: border-box;
        width: 100%;
        height: 2.6rem;
        padding-left: 1.8rem;
        padding-right: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &:hover{
          background-color:  rgba(3, 102, 214, 1);
          color: #ffffff;
          .menu-item-shortcuts{
            color: #ffffff;
          }
        }
        .menu-item-name{
          padding: 0;
          height: auto;
          max-width: 100%;
          text-align: left;
          overflow:hidden;/*内容超出后隐藏*/
          text-overflow: ellipsis;/* 超出内容显示为省略号 */
          white-space: nowrap;/* 文本不进行换行 */
          margin-right: 2rem;
        }
        .menu-item-shortcuts{
          color: #888888;
        }
      }
      .menu-group-foot{
        width: 100%;
        border-style: solid;
        height: 0;
        border-top: 1px solid #858585;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
      }
    }
  }
}
//.menu-node #menu-block{
//  display: none;
//}
</style>