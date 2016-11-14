<template>
	<div class="mask" v-if="visible">
	</div>
	<div class="alert" v-if="visible">
		<p class="header">{{title}}</p>
		<p class="message">{{message}}</p>
		<div class="btn-group " :class="{'col-1':!showCancelButton,'col-2':showCancelButton}">
			<button class="btn secondary" v-show="cancelButtonText" @click="handleActions('cancel')">{{cancelButtonText}}</button><button class="btn secondary" @click="handleActions('confirm')">{{confirmButtonText}}</button>
		</div>
	</div>
</template>
<script>
  var CONFIRM_TEXT = '确定';
  var CANCEL_TEXT = '取消';
	export default{
		name:'Alert',
		props:{

		},
		methods:{
			handleActions(action){
				var callback = this.callback;
        		this.visible = false;
        		callback(action);
			}
		},
		data(){
			return{
				title:'',
				message:'',
				cancelButtonText:CANCEL_TEXT ,
				confirmButtonText:CONFIRM_TEXT,
				showCancelButton: true,
				visible :true,
				callback:null
			}
		},

	}
</script>