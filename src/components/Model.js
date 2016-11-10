import Vue from 'vue';
import modelvue from './model.vue';

let defaults = {
  btn: '确定',
  message: ''
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

let modelConstructor = Vue.extend(modelvue);

let currentMsg, instance;
let msgQueue = [];

let initInstance = function() {
  instance = new modelConstructor({
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

let model = function(options, callback) {
  msgQueue.push({
    options: merge({}, defaults, model.defaults || {}, options),
    callback: callback
  });

  showNextMsg();
};

export default model;
export {
  model
};