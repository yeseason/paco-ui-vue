import Vue from 'vue';
import Actionsheetvue from './Actionsheet.vue';


let defaults = {
      tips:"提示",
      btn:"编辑",
      del:"删除",
      cancel:"取消"
};



let merge = function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i];
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

let ActionsheetConstructor = Vue.extend(Actionsheetvue);

let currentMsg, instance;
let msgQueue = [];

let initInstance = function() {
  instance = new ActionsheetConstructor({
    el: document.createElement('div')
  });

  instance.callback = function(action) {
      let callback = currentMsg.callback;
      callback(action);
  };
};

let showNextMsg = function() {

  if (!instance) {

    initInstance();
  }
 
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      let options = currentMsg.options;
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.visible = true;
      });
    }
  
};

let Actionsheet = function(options, callback) {
 

    msgQueue.push({
      options: merge({}, defaults, Actionsheet.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
};



export default Actionsheet;
export { Actionsheet };
