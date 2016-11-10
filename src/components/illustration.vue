<template>
	<div>
		<div class="illustration">
			<img v-bind:src="src" role="presentation">
				<div class="body">
					<p>
						<slot name="title"></slot>
					</p>
					<p>
						<slot name="desc"></slot>
					</p>
					<button v-if="show" class="btn secondary">{{text}}</button>
				</div>
		</div>
	</div>
</template>
<script >
export default{
	name:'illustration',
	props:{
		src:{type:String,default:"http://placehold.it/135"},
		show:{type:[Boolean,String],default:false},
		text:{type:String,default:"刷新"}
	}
}
</script>