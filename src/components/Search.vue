<template>
<div>
		<div v-on:click="mask"  class="mask " v-bind:class="{hide:!focus}"></div>
		<div class="search false" v-bind:class="{focus:focus}">
			<div class="input">
				<input ref='search' v-on:keydown.13="submit" type="search" required v-model="value">
				<span v-on:click="search" class="placeholder">
					<i class="icon paco icon-search"></i>
					<span class="text">搜索</span>
				</span>
					<i class="icon clear paco icon-wrong"></i>
			</div>
			<span class="cancel" v-on:click="mask">取消</span>
		</div>		
</div>

</template>
<script>
	export default{
		name:'paco-search',
		props:{
			value:{type:String}
		},
		data(){
			return{
				focus:false
			}
		},
		methods:{
			search () {
				this.focus=true
			},
			mask () {
				this.focus=false
			},
			del(){
				this.value=''
			}
		}
	}
</script>