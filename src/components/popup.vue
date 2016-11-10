<template>
	<div class="popup" v-show="visible">
		<slot></slot>
	</div>
</template>
<script >
export default{
	name:'popup',
	props:{
		visible:{type:[String,Boolean],default:false}
	}
}
</script>