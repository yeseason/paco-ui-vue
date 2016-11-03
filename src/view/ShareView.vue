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
    <paco-button type="primary" v-on:click.native="share" >立即分享</paco-button>
    <share :active='active' v-on:share="type"></share>
  </div>
</template>

<script>
export default {
  data(){
    return{
        active:false
    }
  },
  methods:{
    share(){
      this.active=true
    },
    type(action){
      //console.log(action)
      this.active=false
    } 
  }
}
</script>
<style>
  .btnshow .btn{
      margin-bottom: 10px;
  }
</style>