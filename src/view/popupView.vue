<template>
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="left">
          </div>
          <div class="title">PACO-UI</div>
          <div class="right"></div>
        </div>
      </div>
     <div style="margin: 30%;">
        <paco-button @click="visible=true" type="primary" >显示新页面</paco-button>
     </div>
     <popup :visible="visible">
       <div style="margin-top:50px"><paco-button @click="visible=false" type="primary">关闭页面</paco-button></div>
        
     </popup>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        visible:false
      }
    }
  }
</script>