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
      <br>
        <paco-input til="输入内容提示"  ></paco-input>
        <br>
        <paco-input til="输入内容提示" label="true">提示标签</paco-input>
        <br>
        <paco-input value="已输入内容" label="true"> 五个字标签</paco-input>
        <br>
        <paco-input til="输入内容提示" wrong="true" label="true">提示标签</paco-input>
        <br>
        <paco-input til="输入内容提示" camera="true" highlight="true" label="true">提示标签</paco-input>
        <br>
        <paco-input til="输入校验码" vehicle="true" span="true" label="true">校验码</paco-input>
        <br>
        <paco-input til="输入校验码" captcha="true" label="true">校验码</paco-input>
        <br>
        <paco-input til="输入内容提示" wrong="true" lettip="lettip"  label="true">校验码</paco-input>
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
