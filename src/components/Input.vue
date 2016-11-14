<template>
	<div class="input-box">
		<label class="label " v-if="label" ><slot></slot></label>
		<span class="addon left" v-if="lettip"><i class="icon-wrapper paco icon-camera highlight"></i></span>
		<input class="input" v-bind:placeholder="til" v-model="value">
		<span class="addon undefined">
			<i class="icon-wrapper paco" v-bind:class="{'icon-wrong':wrong,'icon-camera':camera,'highlight':highlight}" ></i>
			<span v-if="vehicle">
				<span v-on:click="times()" v-if="show"  v-bind:class="{'false':!span,'captcha':span}" >{{check}}</span>
				<span v-else v-bind:class="{'waiting':span,'captcha':span}"  >{{check}}</span>					
			</span>

			<span class="captcha false" v-if="captcha">
				<span>
					<img src="http://placehold.it/128x64?text=21389" role="presentation">
					<i class="icon-wrapper paco icon-refresh undefined"></i>
				</span>
			</span>				
		</span>
		

	</div>
</template>
<script >
	export default{
		name:'paco-input',
		props:{
			label:{type:[Boolean,String],default:false},
			span:{type:[Boolean,String],default:false},
			wrong:{type:[Boolean,String],default:false},
			camera:{type:[Boolean,String],default:false},
			highlight:{type:[Boolean,String],default:false},
			til:{type:String},
			value:{type:String}
		},
		data(){
			return{
				check:'发送校验码',
				show:true
			}
		},
		methods:{
			times(){
				let s=60
				let t=setInterval(()=>{
					if(s>1){
						s--
						this.check=s+"秒后重新发送"
						this.show=false
					}else{
						window.clearInterval(t);
						this.check="重发校验码"
						this.show=true
						
					}
				},1000);
			}

		}

	}
</script>

