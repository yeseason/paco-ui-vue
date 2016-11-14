<template>
	<div v-if="active" class="mask"></div>
	<div v-if="active" class="share col-3">
		<div v-on:click="friends" class="channel">
			<div class="bg">
				<img src="http://hcz.pingan.com/common/images/wechat-friends.png" class="image" role="presentation">
			</div>
			<div class="name">微信朋友圈</div>
		</div>
		<div v-on:click="wechat" class="channel">
			<div class="bg">
				<img src="http://hcz.pingan.com/common/images/wechat.png" class="image" role="presentation">
			</div>
			<div class="name">微信好友</div>
		</div>
		<div v-on:click="weibo" class="channel">
			<div class="bg">
				<img src="http://hcz.pingan.com/common/images/weibo.png" class="image" role="presentation">
			</div>
			<div class="name">新浪微博</div>
		</div>
		<div class="cancel">
			<button v-on:click="cancel" class="btn secondary">取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Share",
		props:{
			active:{type:[Boolean,String],default:false,twoWay:true}
		},
		methods:{
			cancel(){
				this.active=false
			},
			friends () {
				this.active=false
			},
			wechat() {
				this.active=false
			},
			weibo() {
				this.active=false
			}
		}
	}
</script>