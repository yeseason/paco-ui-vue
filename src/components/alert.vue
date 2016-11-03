<template>
	<div>
	<div class="mask" v-if="visible">
	</div>
	<div class="alert" v-if="visible">
		<p class="header">{{title}}</p>
		<p class="message">{{num}}{{message}}</p>
		<div class="btn-group "v-show="btn" :class="{'col-1':!showCancelButton,'col-2':showCancelButton}">
			<button class="btn secondary" v-show="cancelButtonText" @click="handleActions('cancel')">{{cancelButtonText}}</button><button class="btn secondary" @click="handleActions('confirm')">{{confirmButtonText}}</button>
		</div>
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
		ready(){
			let num = this.num; 
			console.log(num);
			if(num!=""){
				console.log(num);
				var t = setInterval(()=>{
					num = num-1
					this.num = num
					if(num ==0){
						window.clearInterval(t);
					}
					console.log(num);
				},1000)

			}

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
				btn:true,
				num:"",
				duration:"",
				callback:null
			}
		},

	}
</script>