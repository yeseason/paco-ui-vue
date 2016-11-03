<template>
	<a v-if="active" v-bind:href="link"  :style="style" class="ad">
		<img v-if="show" class="logo" v-bind:src="src"   role="presentation">
		<div class="content">
			<div class="title">{{title}}</div>
			<div class="desc"><slot></slot></div>
		</div>
		<span v-bind:click="close" class="close">×</span>
	</a>
</template>
<script>
	export default{
		name:'paco-ad',
		data(){
			return {
				active:true,
				style:'',
			}
		},
		props:{
			title:{type:String},
			baksrc:{type:String,default:null},
			show:{type:[Boolean,String],default:false},
			src:{type:String,default:"http://hcz.pingan.com/common/images/logo.png"},
			link:{type:String}
		},
		ready(){
			
			if(this.baksrc!=null){

				this.style='background:url('+this.baksrc+'); background-size: 100% 100%;';
			}
			
		},
		methods:{
			close(e){
				this.active=false
				e.preventDefault();
			}
		}
	}
</script>
