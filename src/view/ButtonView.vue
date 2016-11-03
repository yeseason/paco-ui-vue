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
  <div style="width: 90%; margin-left: 5%; margin-top: 10px;">
    <paco-button type="primary" >主按钮</paco-button>
    <paco-button type="secondary" >次按钮</paco-button>
    <paco-button type="primary" disabled>不可点击按钮</paco-button>
    <paco-button type="outline" >按钮</paco-button>
    <paco-button type="outline" >三字钮</paco-button>
    <paco-button type="outline" >四字按钮</paco-button>
    <paco-button type="outline" >五个字按钮</paco-button>
  </div>
    <paco-button type="warning" >警示按钮</paco-button>
    <paco-button type="bottom" >底部按钮</paco-button>
    <paco-button type="warning" disabled >警示按钮不可点</paco-button>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>
<style>
  .btnshow .btn{
      margin-bottom: 10px;
  }

</style>