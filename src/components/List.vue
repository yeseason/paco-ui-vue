<template>

    <div class="item " v-bind:class="{thumbnail:thumbnail,single:list=='single',double:list=='double'}" >
    <img v-bind:src="style?imageSrc:imageSrcblue" v-if="thumbnail" role="presentation">
        <span class="title">
            
           <slot name="title"></slot>
            
        </span>
        <span class="badge-ctn" v-bind:class="{'unread':read,'new':unnew}"></span>
        <span class="description">
            <slot name="desc"></slot>
            <i class="icon-wrapper paco icon-arrow-right undefined" v-if="icon"></i>
            <span class="icon" v-if="icondes" ><slot name="icon"></slot></span>
            
        </span>
        <div class="time"><slot name="time"></slot></div>
    </div>


</template>
<script>
	export default{
		name:'List',
        props:{
            read:{type:[Boolean,String],default:false},
            unnew:{type:[Boolean,String],default:false},
            icon:{type:[Boolean,String],default:false},
            thumbnail:{type:[Boolean,String],default:false},
            list:{type:String,default:'single'},
            style:{type:[Boolean,String],default:false},
            icondes:{type:[Boolean,String],default:false},
            title:{type:String}
        },
        data(){
            return{
                imageSrc:"http://placehold.it/29x29?text="+this.title,
                imageSrcblue:"http://placehold.it/45/1cabeb/ffffff?text="+this.title,
                desc:false
            }
        }
	}
</script>