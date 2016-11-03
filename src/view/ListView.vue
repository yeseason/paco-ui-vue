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
      <List icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
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