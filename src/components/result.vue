<template>
<div>
	<div class="result" v-bind:class="type">
		<i class="icon paco " v-bind:class="'icon-'+type"></i>
		<div class="title">{{title}}</div>
		<div class="description">{{description}}</div>
	</div>
	<button v-on:click="handleActions('confirm')" class="btn primary" style="margin-top: 80%;">{{btn}}</button>
</div>
</template>
<script>
export default{
	name:'paco-result',
	props:{
		description:{type:String},
		title:{type:String},
		btn:{type:String},
		type:{type:String}
	},
	methods:{
		handleActions(action){
			this.$emit('handleActions',action)
		}
	}
}
</script>