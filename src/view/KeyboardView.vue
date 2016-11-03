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
	<paco-keyboard v-on:keyboard="values"></paco-keyboard>	
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