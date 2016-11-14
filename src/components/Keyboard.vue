<template>
<div>
 <div class="input-box"><label class="carName">车牌号</label><span class="addon left"><span @click="city" class="plate">{{cityval}}</span></span><input @click="vehicleLicence" v-model="vehicleLicenceCode" placeholder="A-88888" value="" maxlength="7" readonly="" class="carN"></div>
 <div v-show="visible">
    <div @click="visible=false" class="mask transparent false" ></div>
    <div class="keyboard false"  v-if="type">
      <div v-for="vals in keyval" class="keys" >
          <a v-for="val in vals" class="key false" @click="getvalue"   >{{ val}}</a>
      </div>
    
    </div>
    <div class="keyboard false" v-else>
        <div class="keys"  >
          <a v-for="val in keyval[0]" @click="getvalue"   class="key false" v-bind:class="{disabled:val.disabled&&unber}">{{ val.name}}</a>
        </div>    
        <div class="keys">
          <a v-for="val in keyval[1]" class="key false" @click="getvalue" v-bind:class="{disabled:['I', 'O'].indexOf(val)>=0&&unber}"    >{{ val}}</a>          
        </div>
        <div class="keys">
           <a v-for="val in keyval[2]" class="key false" @click="getvalue"   >{{ val}}</a> 
        </div>
        <div class="keys">
          <button v-bind:class="lastbutton[0].class" v-bind:disabled="lastbutton[0].disabled"  class="key"></button>
          <a v-for="val in keyval[3]" class="key false" @click="getvalue"   >{{ val}}</a> 
          <button   @click="delval" v-bind:class="lastbutton[1].class" v-bind:disabled="lastbutton[1].disabled&&unber"  class="key"></button>                 
        </div>
    </div>
 
 </div>
    
</div>

</template>
<script>
	export default{
		name:'paco-keyboard',
    props:{
        val:{type:String}
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
            unber:false,
            type:true,
      			vehicleLicenceCode:'',
      			numbers:['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      			codes :[
        			[
          				'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        			],
        			['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        			[
            			'Z', 'X', 'C', 'V', 'B', 'N', 'M',
        			],
      			],
            lastbutton:[
                  { name: '', value: 'UPPER', class: ['paco', 'icon-upper', 'upper'], disabled: true },
                  { name: '', value: 'DELETE', class: ['paco', 'icon-delete', 'delete'],disabled:true },
            ],
      			cityval:'京',
      			keyval:[]
			}

		},
		methods:{
    		getvalue(event){
      			if(this.pro==='city'){
        			this.cityval=event.target.innerText
        			this.vehicleLicence()
      			}else{
        			if(this.vehicleLicenceCode.length===0){
          				this.vehicleLicenceCode +=event.target.innerText+'-'
          				this.vehicleLicence()
        			}else if(this.vehicleLicenceCode.length<=6){
          
          				this.vehicleLicenceCode +=event.target.innerText
        			} 
      	  
      			}
            this.val = this.cityval+this.vehicleLicenceCode;
            
    		},
    		delval(){
      			this.vehicleLicenceCode=this.vehicleLicenceCode.length===2?'':this.vehicleLicenceCode.substr(0,this.vehicleLicenceCode.length -1);
      			if(this.vehicleLicenceCode.length===0)
        			this.vehicleLicence()
      			
   		 	},	
			  city(){
				    this.visible=true
      			this.pro = 'city'
      			this.keyval=this.provinces
            this.type=true
    		},
   			 vehicleLicence(){
      			this.visible=true
      			this.pro = 'vehicle'
      			if(this.vehicleLicenceCode.length===0){
        			this.unber = true;
        			this.keyval=[this.numbers.map(name => ({ name, disabled: true })), ...this.codes]
              
      			}else{
        			this.unber = false;
        			this.keyval=[this.numbers.map(name => ({ name, disabled: false })), ...this.codes]
             
      			}
            this.type=false
    		}	
    	}
}
</script>