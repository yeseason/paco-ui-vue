import Vue from 'vue'

const Toast = Vue.extend(require('./toast.vue'));
let toastPool = [];

let getAnInstange = function(){
	if(toastPool.length>0){
		let instance = toastPool[0];
		toastPool.splice(0,1);
		return instance;
	}
	return new Toast({
		el: document.createElement('div')
	})
};

let returnAnInstance =function(instance){
	if(instance){
		toastPool.push(instance);
	}
};

export default function(options){
	options =options ||{};
	let message,duration,type;

	if(typeof(options) === 'string'){
		message = options;
		duration  = 3000
		type    = "success"
	}else{
		message = options.message;
		duration  = options.duration
		type    = options.type
	}
	
	let instance = getAnInstange()
	instance.message = message;
	instance.type    = type;
	Vue.nextTick(function(){
		instance.$appendTo(document.body);
		setTimeout(()=>{
			instance.$remove();
			returnAnInstance(instance);
		},duration)
	})
}