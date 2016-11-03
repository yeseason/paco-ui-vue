<template>
	<a class="announcement-wrapper" v-if="show"> 
		<div class="announcement">
			<i v-on:click="close" class="paco icon-close icon"></i>
			<span class="message">
				<slot></slot>
			</span>
		</div>
	</a>
</template>
<script>
	export default{
		name:'Announcement',
		data(){
			return{
				show:true
			}
		},
		methods:{
			close(){
				this.show=false
			}
		}

	}	
</script>




