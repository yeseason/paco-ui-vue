<template>
<div>
	<div class="mask" v-show="visible"></div>
	<div class="modal " v-show="visible" v-html="message">
	    <i v-on:click="handleActions('cancel')" class="close paco icon-close"></i>
		<div v-html="message"></div>
		
		<button v-on:click="handleActions('confirm')" class="btn primary">{{btn}}</button>
		
	</div>	
</div>

</template>
<script>
	export default{
		name:'Model',
		data(){
			return{
				btn:"确定",
				message:"",
				callback:null,
				visible:true
			}
		},
		methods:{
			handleActions(action){
				this.visible=false;
				var callback = this.callback
				callback(action)
			}
		}
	}
</script>
