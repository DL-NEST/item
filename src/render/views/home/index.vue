<template>
  <div class="home">
    <div class="home-menu" :class="menuLink?'up':'down'">
      <div class="menu-top">
        <div class="menu-list" v-for="(list,i) in menuData">
          <div class="menu-item" @click="item_btn($event,item.path)" :class="index===0&&i===0?'activity':''" v-for="(item,index) in list">
            <div class="item-icon">
              <icon size="21">
                <component :is="item.icon"/>
              </icon>
            </div>
            <div v-show="menuLink" class="item-name">{{ item.name }}</div>
          </div>
          <div class="list-sep"></div>
        </div>
      </div>
      <div class="menu-bottom">
        <div class="bottom-user">
          <div class="user-card" v-show="menuLink">
            <img src="../../assets/head.jpg" alt="">
            DL-Nest
          </div>
          <icon class="user-out" size="20">
            <exit-outline/>
          </icon>
        </div>
      </div>
      <!--  控制  -->
      <div class="deploy-area" >
        <div class="deploy-btn" @click="menuLink=!menuLink">
        </div>
      </div>

    </div>
    <div class="home-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage} from "element-plus";

import {
  ExitOutline,
  EaselOutline,
  FileTrayFullOutline,
  LayersOutline,
  LogoPython,
  SyncSharp,
  SettingsOutline,
  HeadsetOutline,
  CloudDownloadOutline
} from '@vicons/ionicons5'
import {Icon} from '@vicons/utils'
import {Buffer} from '@vicons/fa'
import {ref, reactive, onMounted} from "vue";
import {useRouter} from "vue-router";

type menuStd = {
  icon:any,
  name: string,
  path: string
}

const routers = useRouter()
const menuLink = ref<boolean>(true)
const menuData:menuStd[][] = [
    [
      {
        icon: LayersOutline,
        name: '项目管理',
        path: 'itemManager'
      },
      {
        icon: EaselOutline,
        name: '项目看板',
        path: 'itemBoard'
      },
      {
        icon: FileTrayFullOutline,
        name: '文件管理',
        path: 'fileManager'
      },
      {
        icon: LogoPython,
        name: 'py脚本',
        path: 'pythonScript'
      },
      {
        icon: SyncSharp,
        name: '项目同步',
        path: 'itemSync'
      },
      {
        icon: HeadsetOutline,
        name: '音乐库',
        path: 'musicLibrary'
      }
    ],
    [
      {
        icon: CloudDownloadOutline,
        name: '传输列表',
        path: 'transferList'
      },
      {
        icon: SettingsOutline,
        name: '设置',
        path: 'setup'
      }
    ]
]
// 控制标签变换路由跳转
function item_btn(ever: any, path: string) {
  (document.querySelectorAll(".menu-item") as any).forEach(
      (node: HTMLElement) => {
        node.classList.remove("activity");
      }
  );
  ever.currentTarget.classList.add("activity");
  console.log(`/home/${path}`)
  routers.push(`/home/${path}`)
}

</script>

<style lang="scss">

$main-bg:rgba(245, 245, 246,1);
$btn-hover-bg:rgba(236, 236, 238,1);
$btn-click-bg: rgb(224, 224, 227);
$line-cl: rgba(196, 195, 195,1);
$card-hover-bg: rgb(227, 227, 229);
$card-out-bg: rgba(227, 227, 229,1);
$card-out-hover-bg: rgb(250, 244, 244);

$icon-cl:rgba(37, 38, 43,0.8);

.home{
  position: relative;
  width: 100%;
  height: 100%;
  // 布局
  display: flex;
  flex-direction: row;
  color: $icon-cl;
  .home-menu{
    height: 100%;
    flex-shrink: inherit;
    background-color: $main-bg;
    position: relative;
    *{
      user-select: none;
    }
    .deploy-area{
      $width : 12px;
      position: absolute;
      right: -$width;
      top: 0;
      height: 100%;
      width: $width;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .deploy-btn{
        $height: 4rem;
        position: relative;
        top: - calc(4rem/2);
        width: 100%;
        height: $height;
        background-color: #d2d2d2;
        cursor: pointer;
        &:hover{
          background-color: #a9a9a9;
        }
      }
    }
    .menu-list{
      width: 100%;
    }
    .menu-bottom{
      width: 100%;
      height: 16rem;
    }
  }
  .home-content{
    flex-grow: 1;
    height: 100%;
  }
}
// 侧边控制栏
.home-menu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: width .66s cubic-bezier(0.66, 0, 0.01, 1);
  border-right: 1px solid #E8E9F0;
  .menu-list{
    padding: 1.2rem 1.2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu-item{
      user-select: none;
      width: 100%;
      height: 3.6rem;
      //background-color: $btn-bg;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 1.4rem;
      padding-right: 1.4rem;
      border-radius: 0.6rem;
      cursor: pointer;
      .item-icon{
        span{
          color: $icon-cl;
        }
      }
      .item-name{
        white-space: nowrap;
        font-family: "monospace";
        font-size: 1.23em;
        flex-shrink: 1;
        overflow: hidden;
      }
      &:hover{
        background-color: $btn-hover-bg;
      }
    }
    &:last-child .list-sep{
      width: 100%;
      height: 0;
      border-bottom: 0;
    }
    .list-sep{
      box-sizing: border-box;
      width: 90%;
      height: 2rem;
      border-bottom: 1px solid $line-cl;
    }
  }
  .menu-bottom{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .bottom-user{
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease-in-out;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1.6rem;
      border-top: 1px solid $line-cl;
      .user-card{
        user-select: none;
        // 用户卡片的布局
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.2em;
        overflow: hidden;
        white-space: nowrap;
        img{
          width: 30px;
          border-radius: 50%;
          margin-right: 1rem;
        }
      }
      .user-out{
        user-select: none;
        cursor: pointer;
        width: 26px;
        height: 26px;
        background-color: $card-out-bg;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        &:hover{
          background-color: $card-out-hover-bg;
        }
      }
      &:hover{
        transition: background-color 0.3s ease-in-out;
        background-color: $card-hover-bg;
      }
    }
  };
}
// 选中样式
.activity{
  background-color: $btn-click-bg!important;
}

.up{
  width: 18.6rem;
  .menu-item {
    .item-icon{
      margin: 1.2rem;
    }
  }
  .bottom-user{
    justify-content: space-between;
    .user-out{
      margin-right: 12px;
    }
  }
}

.down{
  width: 6.6rem;
  .menu-item {
    justify-content: center;
    .item-icon{
      margin: 0;
    }
  }
  .bottom-user{
    justify-content: center;
    .user-out{
      margin: 0;
    }
  }
}

.home-menu .menu-list .menu-item .item-icon {

}


// home内容
.home-content{
  flex-grow: 1;
  height: 100%;
}

</style>