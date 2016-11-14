<template>
  <div class="btnshow">
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="left">
          </div>
          <div class="title">PACO-UI</div>
          <div class="right"></div>
        </div>
      </div>
      <paco-button v-on:click="openAlert" type="primary" >主按钮</paco-button>

  </div>
</template>

<script>
import { Alert } from '../index.js';
export default {
  methods:{
    openAlert(){
      Alert({
        title:"温馨提示",
        message:"你确定这么做"
      },function (action) {
        console.log(action);
      }
    );
    }
  }
}
</script>
