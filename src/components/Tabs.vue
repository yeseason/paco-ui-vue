<template>
	<div class="tabs normal " v-bind:class="{normal:type=='normal',pills:type=='pills','col-2':tabnum,'col-3':!tabnum}">
      <div v-for="tabs in tablist" class="tab "  v-bind:class='{active:tabindex==$index}'  v-on:click="tab($index)">{{tabs.title}}</div>
    </div>
    <div class="tabs-content ">
    	<slot></slot>
    </div>
</template>

<script>
	export default{
		name:'Tabs',
		props: {
			type:{}
		},
		data(){
			return{
				tabindex:null,
                num:null,
                tabnum:true,
				tablist:[]
			}
		},		
		ready(){
			this.tabindex=0
            this.num = 0
			let self = this;
        	this.$children.forEach(c=>{
                this.num = this.num+1
            	self.tablist.push({
                    "title": c.title,
                    "active": c.active
                });
        	})
            if (this.num==2) {
                this.tabnum=true
            }else{
                this.tabnum=false
            }
		},
  		methods: {
    		tab(num) {
    			this.tabindex=num
    			this.$children.forEach(c=>{
    				c.active=false
    			})
    			this.$children[num].active=true;

    		}
  		}
		
	}
</script>