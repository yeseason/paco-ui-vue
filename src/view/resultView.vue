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
      <paco-result description=所提交内容已成功完成验证 title=支付成功 btn=success type=success v-on:handleActions="result"></paco-result>
  </div>
</template>
<script>
    export default{
          methods:{
             result(action){
                console.log(action)
             }
          }
    }
</script>