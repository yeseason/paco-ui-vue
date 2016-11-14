var defaults = {
  btn: '确定',
  message: ''
};

import Vue from 'vue';
import modelvue from './model.vue';

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

var modelConstructor = Vue.extend(modelvue);

var currentMsg, instance;
var msgQueue = [];

var initInstance = function() {
  instance = new modelConstructor({
    el: document.createElement('div')
  });

  instance.callback = function(action) {
    if (currentMsg) {
      var callback = currentMsg.callback;
      if (typeof callback === 'function') {
        if (instance.showInput) {
          callback(instance.inputValue, action);
        } else {
          callback(action);
        }
      }
      if (currentMsg.resolve) {
        var $type = currentMsg.options.$type;
        if ($type === 'confirm' ) {
          if (action === 'confirm') {
            if (instance.showInput) {
              currentMsg.resolve({ value: instance.inputValue, action });
            } else {
              currentMsg.resolve(action);
            }
          } else if (action === 'cancel' && currentMsg.reject) {
            currentMsg.reject(action);
          }
        } else {
          currentMsg.resolve(action);
        }
      }
    }
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
      
      instance.$appendTo(document.body);

      Vue.nextTick(() => {
        instance.visible = true;
      });
    }
  
};

var model = function(options, callback) {
 

    msgQueue.push({
      options: merge({}, defaults, model.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
};

model.setDefaults = function(defaults) {
  model.defaults = defaults;
};


model.close = function() {
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

export default model;
export { model };
