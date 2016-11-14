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
    
    <paco-button v-on:click="openToast" type="primary" >success</paco-button>
    <paco-button v-on:click="openToastfail" type="primary" >fail</paco-button>
    <paco-button v-on:click="openToastopps" type="primary" >opps</paco-button>
  </div>
</template>

<script>
import { Toast } from '../index.js';
export default {

  methods:{
    openToast(){
      Toast("成功提醒");
    },
    openToastfail(){
      Toast({
        message:"失败提醒",
        duration:1000,
        type:"fail"      
      });
    },
    openToastopps(){
      Toast({
        message:"网络无法连接",
        duration:5000,
        type:"opps"      
      });
    }

  }

}
</script>
<style>
  .btnshow .btn{
      margin-bottom: 10px;
  }
</style>