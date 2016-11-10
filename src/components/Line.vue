<template>
    <div class="line x" v-bind:class="{right:right,left:left}"></div>
</template>
<script>
export default{
	name:"Line",
	data(){
		return {
			show:true
		}
	},
    props:{
        right:{type:Boolean,String},
        left:{type:Boolean,String}
    },
    methods:{
    	notify(){
    		this.$dispatch('click-msg',this.show)
    	}
    }
}
</script>