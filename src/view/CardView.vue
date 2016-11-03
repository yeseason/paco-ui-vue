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
      <card >
        <span slot="header">头条</span>
        <span slot="title">标题</span>
        <span slot="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
      </card>
      <card thumbnail="true" src="http://placehold.it/688x346/1cabeb/ffffff?text=PACO-UI">
        <span slot="title"> 标题</span>
        <span slot="tips">2016-08-08</span>
        <span slot="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
      </card>
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