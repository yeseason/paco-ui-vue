<template>
	<span class="checkbox">
		<input type="checkbox" v-bind:value="value" >
		<i class="paco icon icon-right"></i>
		<slot></slot>
	</span>
</template>
<script >
	export default{
		name:"paco-check",
		props:{
			value:{type:String}
		}

	}
</script>
