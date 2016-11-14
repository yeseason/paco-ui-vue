<template>
	<div class="actionsheet-wrapper">
		<div class="mask" v-show="visible"></div>
		<div class="actionsheet" v-show="visible">
			<div class="tips">{{tips}}</div>
			<button @click="handleActions('confirm')" class="btn bottom">{{btn}}</button>
			<button @click="handleActions('del')" class="btn warning">{{del}}</button>
			<button @click="handleActions('cancel')" class="btn bottom">{{cancel}}</button>
		</div>
	</div>
</template>
<script >
export default{
	name:'Actionsheet',
	data(){
		return{
			tips:"提示",
			btn:"编辑",
			del:"删除",
			visible:true,
			callback:null,
			cancel:"取消"
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