<template>
    <div class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default{
    	name:"Tab",
        props: {
            title:{type:String,required: true},
            active:{type:[Boolean,String],default:false}
        }
    }
</script>