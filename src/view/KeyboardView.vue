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
	<paco-keyboard citytitle="粤B" v-on:keyboard="values"></paco-keyboard>	
</div>
</template>
<script>
	export default{
		data(){
			return{
				key:''
			}
		},
		methods:{
			values(val){
				this.key = val
				console.log(this.key)
			}
		}
	}
</script>
<style type="text/css">
.cursor.blink {
    -webkit-animation: terminal-blink 1s infinite steps(1, start);
    -moz-animation: terminal-blink 1s infinite steps(1, start);
    -ms-animation: terminal-blink 1s infinite steps(1, start);
    animation: terminal-blink 1s infinite steps(1, start);
}
.cursor.blink {
    background-color: #00aaee;
    color: #fff;
    width: .14888em;
    display: inline-block;
    height: 1.1111111111111112em;
    vertical-align: text-bottom;
}
@-webkit-keyframes terminal-blink {
  0%, 100% {
      background-color: #fff;
      color: #00aaee;
  }
  50% {
      background-color: #00aaee;
      color: #000;
  }
}

@-ms-keyframes terminal-blink {
  0%, 100% {
      background-color: #fff;
      color: #00aaee;
  }
  50% {
      background-color: #00aaee;
      color: #fff;
  }
}

@-moz-keyframes terminal-blink {
  0%, 100% {
      background-color: #000;
      color: #00aaee;
  }
  50% {
      background-color: #00aaee;
      color: #000;
  }
}
@keyframes terminal-blink {
  0%, 100% {
      background-color: #fff;
      color: #00aaee;
  }
  50% {
      background-color: #00aaee; 
      color: #fff;
  }
}
.plate {
    display: inline-block;
    width: 3.3em;
}
.input-box>.message{
    font-size: .9em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    height: 2.93333em;
    line-height: 2.93333em;
    width: 14em;
}
.keyboard>.keys>.key.upper{
	margin-right:0;
}
.input-box>.title{
    display: inline-block;
    line-height: 3;
    white-space: nowrap;
    min-width: 4.66667em;
    max-width: 5.66667em;
    overflow-x: hidden;
    font-size: 1em;
    vertical-align: top;
    margin-left: 0.9375em;
}
.plate:after{
	margin-top: 0;
    right: 0;
    position: absolute;
    bottom: 1.066665em;
}
.addon{
	padding-left: .5em;
	padding-right: .5em;
}
.carlist {
	margin-top:.8em;
	text-align: right;
	
}	
</style>