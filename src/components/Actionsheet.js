var defaults = {
      tips:"提示",
      btn:"编辑",
      del:"删除",
      cancel:"取消"
};

import Vue from 'vue';
import Actionsheetvue from './Actionsheet.vue';

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

var ActionsheetConstructor = Vue.extend(Actionsheetvue);

var currentMsg, instance;
var msgQueue = [];

var initInstance = function() {
  instance = new ActionsheetConstructor({
    el: document.createElement('div')
  });

  instance.callback = function(action) {
      var callback = currentMsg.callback;
      callback(action);
  };
};

var showNextMsg = function() {

  if (!instance) {

    initInstance();
  }
 
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
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

var Actionsheet = function(options, callback) {
 

    msgQueue.push({
      options: merge({}, defaults, Actionsheet.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
};



export default Actionsheet;
export { Actionsheet };
