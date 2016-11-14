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
    <Loading :active.sync="active"></Loading>
  </div>
</template>

<script>
export default {
  data(){
    return{
        active:true
    }
  }
}
</script>
<style>
  .btnshow .btn{
      margin-bottom: 10px;
  }
</style>