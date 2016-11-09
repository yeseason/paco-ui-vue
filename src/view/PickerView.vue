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
      <List v-on:click.native="showtime" icon="true"><span slot="title">时间</span><span slot="desc">{{timenow}}</span></List>
      <paco-picker :visible="visible" type="normal" :setyear="setyear" :setmonth="setmonth" :setday="setday" cancel="清空" :starttime="2000" :endtime="2040" v-on:time="time"> </paco-picker>
      <List v-on:click.native="showpicker" icon="true"><span slot="title">时间</span><span slot="desc">{{timeend}}</span></List>
      <paco-picker :visible="show"  :setyear="setyear1" :setmonth="setmonth1" :setday="setday1" cancel="清空" :starttime="2000" :endtime="2040" v-on:time="endshowtime"> </paco-picker>
  </div>
</template>

<script>

export default {
  data(){
    return{
      timenow:null,
      timeend:null,
      visible:false,
      show:false,
      setyear:2004,
      setmonth:6,
      setday:5,
      setyear1:2006,
      setmonth1:8,
      setday1:2
    }
  },
  created(){


  },
  methods:{
    time(val,visible,action){
      this.timenow=val
      this.visible=visible
      this.setyear = 2005
      this.setmonth = 7
      this.setday = 20
    },
    showtime(){

      this.visible=true
    },
    showpicker(){
      this.show=true
    },
    endshowtime(val,visible){
      this.timeend=val
      
      this.show=visible
    }
  }
}
</script>