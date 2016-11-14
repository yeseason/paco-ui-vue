<template>
	<div class="card" v-bind:class="{thumbnail:thumbnail}">
		<div class="header" v-if="!thumbnail"><slot name="header"></slot></div>
		<div class="body">
			<div class="title"><slot name="title"></slot></div>
			<div class="tips" v-if="thumbnail"><slot name='tips'></slot></div>
			<img v-if="thumbnail" v-bind:src="src" role="presentation">
			<div class="content">
				<slot name="content"></slot>
			</div>
			
			<div class="tips" v-if="!thumbnail"></div>
			<div class="link">
				<a v-bind:href="link">更多</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Card',
		props:{
			src:{type:String},
			thumbnail:{type:[Boolean,String],default:false},
			link:{type:String},
		}
	}
</script>