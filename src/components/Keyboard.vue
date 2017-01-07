<template>
<div>
    <div class="input-box">
        <span class="title">车牌号</span>
            <span class="addon left">
              <span @click="city" class="plate">{{citytip}}</span>
            </span>
            <span @click="vehicleLicence"  class="message" v-html="vehicleLicencetitle"></span>
    </div>
    <div @click="visible=false" class="mask transparent false" v-show="visible"></div>
    <div class="keyboard false"  v-show="visible">
      <div v-for="vals in keyval" class="keys">
        <a v-for="val in vals" v-if=" val.value ==='UPPER'" v-bind:class="[val.class,{disabled:val.disabled}]"  class="key"></a>
        <a v-for="val in vals" @click="getvalue(val.disabled&&unber)" v-if="val.name !=''&&typeof val ==='object'"  class="key" v-bind:class="{disabled:val.disabled&&unber}">{{ val.name}}</a>
        <a v-for="val in vals" @click="getvalue((['I'].indexOf(val)>=0&&unber)||(['I','O'].indexOf(val)>=0&&nextunber))"
         v-bind:class="{disabled:(['I'].indexOf(val)>=0&&unber)||(['I','O'].indexOf(val)>=0&&nextunber)}" v-if="typeof val ==='string'"   class="key">{{val}}</a>
        <a v-for="val in vals" v-if=" val.value ==='DELETE'"  @click="delval" v-bind:class="val.class"   class="key"></a>
      </div>
    </div>    
</div>

</template>
<script>
	export default{
		name:'paco-keyboard',
    props:{
        citytitle:''
    },
		data(){
			return{
				visible:false,
  			provinces : [
    			['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏'],
    			['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤'],
    			['桂', '琼', '渝', '川', '贵', '云', '藏'],
    			['陕', '甘', '青', '宁', '新'],
  			],
  			vehicleLicenceCode:'',
  			numbers:['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        unber:false,
        nextunber:false,
  			codes :[
    			[
      				'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    			],
    			['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    			[
      				{ name: '', value: 'UPPER', class: ['paco', 'icon-upper', 'upper'], disabled: true },
        			'Z', 'X', 'C', 'V', 'B', 'N', 'M',
      				{ name: '', value: 'DELETE', class: ['paco', 'icon-delete', 'delete'] },
    			],
  			],
  			cityval:'',
        vehicleLicencetitle:'',
        vehicleLicenceCode:'',
        plate:'<span class="cursor blink"></span>',
  			keyval:[]
			}

		},
    computed:{
       citytip:{
          get(){
            if(this.cityval==''){
              return this.citytitle
            }else{
              
              return this.cityval
            }
          }
       }
    },
		methods:{
    		getvalue(disabled){
      			if(this.pro==='city'){
        			this.cityval=event.target.innerText
        			this.vehicleLicence()
      			}else{
        			if(this.cityval.length===1){
                if(!disabled){
                  this.cityval +=event.target.innerText

                  this.vehicleLicence()
                   
                }
        			}else if(this.vehicleLicenceCode.length<=5){
                if(!disabled){
                  this.vehicleLicenceCode +=event.target.innerText
                  this.vehicleLicencetitle = this.vehicleLicenceCode+this.plate                  
                }

        			} 
      	  
      			}
            let val = this.citytip+'-'+this.vehicleLicenceCode;
            this.$emit('keyboard',val); 
    		},
    		delval(){
      			this.vehicleLicenceCode=this.vehicleLicenceCode.substr(0,this.vehicleLicenceCode.length -1);
            this.vehicleLicencetitle = this.vehicleLicenceCode+this.plate
      			if(this.vehicleLicenceCode.length===0){
        			this.vehicleLicence()
      			}
   		 	},	
        city(){
            this.visible=true
        		this.pro = 'city'
        		this.keyval=this.provinces
        },
   			 vehicleLicence(){
      			this.visible=true
      			this.pro = 'vehicle'
      			if(this.citytip.length<2){
        			this.unber = true;
              this.nextunber = false;

        			this.keyval=[this.numbers.map(name => ({ name, disabled: true })), ...this.codes]
      			}else{
        			this.unber = false;
              this.nextunber = true;
        			this.keyval=[this.numbers.map(name => ({ name, disabled: true })), ...this.codes]
      			}

            if(this.vehicleLicenceCode==''){
              this.vehicleLicencetitle=this.plate
            }
    		}	
    	}
}
</script>