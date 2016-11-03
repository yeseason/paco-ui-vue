<template>
  <div>
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="left">
          </div>
          <div class="title">PACO-UI</div>
          <div class="right"></div>
        </div>
      </div>
     <div style="margin: 30%;">
      <paco-check v-model="val">选我选我</paco-check>
      <br>
      <paco-check >选他选他</paco-check>
     </div>    
  </div>

</template>

<script>
export default {
  data(){
    return{
      val:'on'
    }
  }
}
</script>