<template>
<div>
	<div class="mask" v-show="visible"></div>
	<div class="modal " v-show="visible" >
	    <i v-on:click="handleActions('cancel')" class="close paco icon-close"></i>
		<img class='image' v-bind:src="img" role='presentation'>
		<div class='desc'>{{desc}}</div>
		<div class='desc'>{{tips}}</div>
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
				desc:"",
				tips:"",
				img:"",
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
