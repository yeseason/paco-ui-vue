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
      <paco-button @click.native="openModel"> 按钮</paco-button>
  </div>
</template>

<script>
import { Model } from '../index.js'

export default {
  methods:{
    openModel(){
       Model({
          img:"http://placehold.it/250/1cabeb/ffffff?text=PACO-UI",
          desc:"说明方案",
          tips:"终极辅助说明方案",
          btn:"主按钮"
       },function(action){
          console.log(action);
       })
    }
  }
}
</script>
