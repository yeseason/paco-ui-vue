<template>
<div v-if="active">
	<div class="mask"></div>
	<div class="toast" v-if="active">
		<div class="icon loading"></div>
		<p class="message">载入中</p>
	</div>	
</div>

</template>
<script>
	export default{
		name:"Loading",
		props:{
			active:{type:[Boolean,String],default:false}
		}
	}
</script>