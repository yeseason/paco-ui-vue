const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';

var defaults = {
  title: '',
  message: '',
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  btn:true,
  duration:"3000",
  num:"",
  showCancelButton:true
};

import Vue from 'vue';
import alertvue from './alert.vue';

var merge = function(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

var alertConstructor = Vue.extend(alertvue);

var currentMsg, instance,duration;
var msgQueue = [];

var initInstance = function() {
  instance = new alertConstructor({
    el: document.createElement('div')
  });

  instance.callback = function(action) {
      var callback = currentMsg.callback;
      callback(action);
  };
};


var showNextMsg = function(options) {



    initInstance();


    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if(!options.btn){

        duration  = options.duration
      }
      
      document.body.appendChild(instance.$el);


      Vue.nextTick(() => {
        instance.visible = true;
          if(!options.btn){
            setTimeout(()=>{

              instance.$remove();
              var callback = currentMsg.callback;
              callback("duration");
              
            },duration)
          }
      });
    }
  
};

var alert = function(options, callback) {

    msgQueue.push({
      options: merge({}, defaults, alert.defaults || {}, options),
      callback: callback
    });

    showNextMsg(options);
};

export default alert;
export { alert };
