<template>
<div>
    <div class="tabs  " v-bind:class="{normal:type=='normal',pills:type=='pills','col-2':tabnum,'col-3':!tabnum}">
      <div v-for="(tabs,index) in tablist" class="tab "  v-bind:class='{active:tabindex==index}'  v-on:click="tab(index)">{{tabs.title}}</div>
    </div>
    <div class="tabs-content ">
        <slot></slot>
    </div>    
</div>

</template>

<script>
export default{
	name:'Tabs',
	props: {
		type:{},
        act:{type:[Number,String],required: 0}
	},
	data(){
		return{
			tabindex:null,
            num:null,
            tabnum:true,
			tablist:[]
		}
	},
    cread(){
        
    },	
	mounted(){
		this.tabindex=this.act
        this.num = 0
        let children = this.$children
    	children.forEach(c=>{
            this.num = this.num+1
        	this.tablist.push({
                "title": c.title,
                "active": c.active
            });
    	})
        this.$children[this.act].active=true;
        this.num==2?this.tabnum=true:this.tabnum=false
        
	},
		methods: {
		tab(num) {
			this.tabindex=num

			this.$children.forEach(c=>{
				c.active=false
			})
			this.$children[num].active=true;

            this.$emit('tba-msg', this.tabindex);
		}
		}
	
}
</script>