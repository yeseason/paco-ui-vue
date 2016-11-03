<template>
  <div class="ui">
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="left">
          </div>
          <div class="title">PACO-UI</div>
          <div class="right"></div>
        </div>
      </div>
      <paco-button @click.native="openActionsheet">按钮</paco-button>
  </div>
</template>

<script>
import { Actionsheet } from "../index.js"

export default {
    methods:{
        openActionsheet(){
           Actionsheet({
              tips:"说明文字说明文字说明文字",
              btn:"编辑",
              del:"删除",
              cancel:"取消"
           },function(action){
              console.log(action);
           })
        }
    }
}
</script>