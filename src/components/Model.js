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

var model = function(options, callback) {
 

    msgQueue.push({
      options: merge({}, defaults, model.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
};

export default model;
export { model };
