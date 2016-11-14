const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';

var defaults = {
  title: '',
  message: '',
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
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

var currentMsg, instance;
var msgQueue = [];

var initInstance = function() {
  instance = new alertConstructor({
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

var alert = function(options, callback) {
 

    msgQueue.push({
      options: merge({}, defaults, alert.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
};

alert.setDefaults = function(defaults) {
  alert.defaults = defaults;
};


alert.close = function() {
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

export default alert;
export { alert };
