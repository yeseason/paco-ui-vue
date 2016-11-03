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
      <paco-search v-on:search="values"></paco-search>		
</div>

</template>

<script >
	export default{
		data(){
			return{
				value:'',
			}
		},
		methods:{
			values(val){
				this.value = val
				console.log(this.value)
				
			}
		}
	} 
</script>
