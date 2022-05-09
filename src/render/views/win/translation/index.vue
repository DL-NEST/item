<template>
  <div class="translation">
      <div class="wrapper">
        <div class="text-input">
          <textarea class="from-text" v-model="inText" placeholder="From text" spellcheck="false"></textarea>
          <textarea class="to-text" v-model="outText" placeholder="Out text" spellcheck="false"></textarea>
        </div>
        <div class="controls">
          <div class="from">
            <div class="icons">
              <Icon size="16" class="icon">
                <TrashAlt/>
              </Icon>
              <Icon size="16" class="icon">
                <Copy/>
              </Icon>
            </div>
            <select>
              <option value="zh-CN">中文(简体)</option>
            </select>
          </div>
          <div class="exchange">
            <Icon size="20" class="icon">
              <ExchangeAlt/>
            </Icon>
          </div>
          <div class="to">
            <select>
              <option value="zh-CN">English</option>
            </select>
            <div class="icons">
              <Icon size="16" class="icon">
                <TrashAlt/>
              </Icon>
              <Icon size="16" class="icon">
                <Copy/>
              </Icon>
            </div>
          </div>
        </div>
      </div>
      <button @click="deepl">翻译</button>
  </div>
</template>

<script lang="ts" setup>
import { Copy, TrashAlt, ExchangeAlt } from '@vicons/fa'
import { Icon } from '@vicons/utils'
import axios from "axios";
import {ref} from "vue";

const inText = ref<string>()
const outText = ref<string>()

function deepl() {
  let url = '/deepl/v2/translate'
  let token = '4055115a-45be-e1a4-aa79-1e855603c6b6:fx'
  // let inText = '你好'
  let lang = 'zh-CN'
  let getUrl = url+`?auth_key=${token}&text=${inText.value}&target_lang=${lang}`
  console.log(getUrl)
  axios.get(url+`?auth_key=${token}&text=${inText.value}&target_lang=${lang}`,{

  }).then((data)=>{
    console.log(data)
  })
}
</script>

<style lang="scss" scoped>
.translation {
  //max-width: 690px;
  //max-height: 437px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #adadad;
  -webkit-app-region: drag;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  .wrapper {
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  button{
    width: 100%;
    padding: 14px;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    font-size: 17px;
    border-radius: 5px;
    background: #5372F0;
  }
}

.text-input {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    background: none;
    font-size: 18px;
    padding: 10px 15px;
    font-family: 'Poppins', sans-serif;
  }
  .to-text {
    border-left: 1px solid #ccc;
  }
}
.controls {
  user-select: none;
  display: flex;
  list-style: none;
  padding: 17px 15px;
  flex-direction: row;
  justify-content: space-between;
  select{
    color: #333;
    border: none;
    outline: none;
    font-size: 18px;
    background: none;
    padding-left: 5px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .from{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icons{
      padding-right: 15px;
      border-right: 1px solid #ccc;
      margin-right: 20px;
    }
  }
  .to{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icons{
      padding-left: 15px;
      border-left: 1px solid #ccc;
      margin-left: 20px;
    }
  }
}

.icon{
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    cursor: pointer;
  }
}
</style>