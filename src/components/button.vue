<template>
<button class="btn" v-bind:class="{primary:type=='primary',secondary:type=='secondary',outline:type=='outline',warning:type=='warning',bottom:type=='bottom',disabled:disabled}" v-bind:disabled="disabled"><slot></slot></button>
</template>
<script>
    export default{
    	name:'paco-button',
        props:{
            type:{type:String,default:'primary'},
            disabled:{type:Boolean}
        }
    }
</script>