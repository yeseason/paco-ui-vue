<template>
	<div v-show="visible">
    <div class="mask undefined undefined" v-on:click="confirm('mask')"></div>
	<div class="picker" >
		<div class="header">选择日期</div>
		<div  class="body">
			<div class="mirror"></div>
			<div v-el:year class="col" style="float: left">
				<div class="row" id="row1"></div>
				<div class="row year false" 
				 v-for="year in years"  
				 :class="[{ 'selected': yearvalue === $index },randomId]">{{year}}年<span style="font-size: 0px;"></span></div>
				<div class="row"></div>
			</div>
			<div v-el:month class="col" style="float: left" >
				<div class="row"></div>
				<div class="row month "  v-for="month in months" :class="[{ 'selected': monthvalue === $index ,'false':monthvalue != $index},randomId]">{{month}}月<span style="font-size: 0px;"></span></div>
				<div class="row"></div>
			</div>	
			<div v-el:day class="col" style="float: left">
				<div class="row"></div>
				<div class="row day "  v-for="day in days" :class="[{ 'selected': dayvalue === $index , 'false':dayvalue != $index},randomId]">{{day}}日<span style="font-size: 0px;"></span></div>
				<div class="row"></div>
			</div>			
		</div>

		<div class="btn-group">
			<button v-on:click="confirm('cancel')" class="btn secondary">{{cancel}}</button>
			<button class="btn  secondary"   v-on:click="confirm('confirm')">确定</button></div>
	</div>		
	</div>

</template>

<script>

	export default{
		name:'paco-picker',
		props:{
			value:{type:String},
			visible:{type:Boolean},
			starttime:{type:Number,default:2030},
			endtime:{type:Number,default:2006},
			cancel:{type:String,default:'取消'},
			setyear:{type:Number,default:1000},
			setmonth:{type:Number},
			setday:{type:Number}
		},
		data(){
			return{
				time:7,
				years:[],
				year:'',
				randomId: 'set-' + Math.round(Math.random()*100),
				yearvalue:0,
				yeartime:null,
				monthtime:null,
				daytime:null,
				monthvalue:0,
				dayvalue:0,
				monthhight:'',
				yearhight:'',
				months:[],
				itemValue:0,
				days:[],
			}
		},
		created(){

			this.time=this.endtime-this.starttime;
			let   num=1;
			let startyear = this.starttime;

			for (var i = 0; i <= this.time; i++) {
				this.years[i]=startyear++

			}
			
			for (let i = 0; i <= 12-1; i++) {

				this.months[i]=num++
			}
			this.dates();
			
		},
		ready(){
			this.showday()
		},

		methods:{
			dates(){
				let year = this.starttime+this.yearvalue;
				let month = this.monthvalue;
				let daynum=1;
				this.days =[];
				
      			let day = (new Date(year, month + 1, 1)- new Date(year, month, 1)) / (1000 * 60 * 60 * 24);
      			for (let i = 0; i<=day-1; i++){
      				this.days[i]=daynum++
      			}
      			
			},
			confirm(action){

				if(action=="confirm"){
					let year = this.starttime+this.yearvalue;
					let month = this.monthvalue;
					let day = this.dayvalue+1;

					// clearInterval(this.yeartime);
					// clearInterval(this.monthtime);
					// clearInterval(this.daytime);	
					// this.visible = false

					
					
					let time = new Date(year, month, day)/1000;
					
					this.$emit('time',time,false,action);		
				}else{
					this.$emit('time','',false,action);	
				}
			},
			showday(){
				
				let yselected = document.querySelector('.year.'+this.randomId);
				let domyear =  this.$els.year;
				let mselected = document.querySelector('.month.'+this.randomId);
				let dommoth = this.$els.month;
				let dselected = document.querySelector('.day.'+this.randomId);
				
				let domday =  this.$els.day;
				this.monthhight=dommoth.scrollTop;
				this.yearhight = domyear.scrollTop;
				this.yeartime=setInterval(()=>{
					
					if(typeof domyear !='undefined'){
						this.yearvalue=Math.round(domyear.scrollTop/yselected.clientHeight);

						if(this.yearvalue>0){
							if(this.yearhight != domyear.scrollTop){
								if(this.visible){
									this.yearhight = domyear.scrollTop;
									this.dates()
								}	
								if(dselected.className.indexOf('selected')>0){
									this.dates()
								}

							}							

						}						
					}

					
				},500)
				this.monthtime=setInterval(()=>{

					if (typeof dommoth !='undefined'){

						this.monthvalue=Math.round(dommoth.scrollTop/mselected.clientHeight);
						
						if (this.monthvalue>=0){

							if(this.monthhight != dommoth.scrollTop){
								if(this.visible){
									this.monthhight=dommoth.scrollTop
									this.dates()
								}						    
								if(dselected.className.indexOf('selected')>0){
 
									this.dates()
								}							  				
							}
						}						
					}

								
				},500)

				this.daytime=setInterval(()=>{
					dselected = document.querySelector('.day.'+this.randomId);
					
					if (typeof domday !='undefined'&&  dselected !=null){

						
						this.dayvalue=Math.round(domday.scrollTop/dselected.clientHeight);
					}
				},100)
				this.scroll = setInterval(()=>{
					if(this.visible){
						if(this.setyear>1001){
							this.yearvalue = this.setyear-this.starttime;
							this.monthvalue = this.setmonth-1;
							this.dayvalue = this.setday-1;
							domyear.scrollTop=this.yearvalue*yselected.clientHeight
							dommoth.scrollTop=this.monthvalue*mselected.clientHeight
							domday.scrollTop=this.dayvalue*dselected.clientHeight
							clearInterval(this.scroll);
						}						
					}
				})
			}			

		},
		watch:{
			setyear(){

				this.scroll = setInterval(()=>{
					if(this.visible){
						let yselected = document.querySelector('.year');
						let domyear =  this.$els.year;
						let mselected = document.querySelector('.month');
						let dommoth = this.$els.month;
						let dselected = document.querySelector('.day');
						let domday =  this.$els.day;
						if(this.setyear>1001){
							this.yearvalue = this.setyear-this.starttime;
							this.monthvalue = this.setmonth-1;
							this.dayvalue = this.setday-1;
							domyear.scrollTop=this.yearvalue*yselected.clientHeight
							dommoth.scrollTop=this.monthvalue*mselected.clientHeight
							domday.scrollTop=this.dayvalue*dselected.clientHeight
							clearInterval(this.scroll);
						}						
					}
				})
			}
		}

	}
</script>