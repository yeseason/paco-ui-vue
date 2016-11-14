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
      <paco-button @click="openModel"> 按钮</paco-button>
  </div>
</template>

<script>
import { Model } from '../index.js'

export default {
  methods:{
    openModel(){
       Model({
          message:"<img class='image' src='http://hcz.pingan.com/common/images/download.png' role='presentation'><div class='desc'>说明方案</div><div class='tips'>终极辅助说明方案</div>",
          btn:"主按钮"
       },function(action){
          
       })
    }
  }
}
</script>
