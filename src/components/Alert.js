
import Vue from 'vue';
import alertvue from './alert.vue';

const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';

let defaults = {
  title: '',
  message: '',
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  btn: true,
  duration: "3000",
  num: "",
  showCancelButton: true
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

let alertConstructor = Vue.extend(alertvue);

let currentMsg, instance, duration;
let msgQueue = [];

let initInstance = function() {
  instance = new alertConstructor({
    el: document.createElement('div')
  });

  instance.callback = function(action) {
    let callback = currentMsg.callback;
    callback(action);
  };
};


let showNextMsg = function(options) {



  initInstance();


  if (msgQueue.length > 0) {
    currentMsg = msgQueue.shift();

    let options = currentMsg.options;
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
    if (!options.btn) {

      duration = options.duration
    }

    document.body.appendChild(instance.$el);


    Vue.nextTick(() => {
      instance.visible = true;
      if (!options.btn) {
        setTimeout(() => {

          instance.$remove();
          let callback = currentMsg.callback;
          callback("duration");

        }, duration)
      }
    });
  }

};

let alert = function(options, callback) {

  msgQueue.push({
    options: merge({}, defaults, alert.defaults || {}, options),
    callback: callback
  });

  showNextMsg(options);
};

export default alert;
export {
  alert
};