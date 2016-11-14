<template>

		<div class="border" :style="style"><slot></slot></div>
</template>
<script>
	export default{
		name:"Border",
		props:{
			style:{type:String}
		}
	}
</script>
