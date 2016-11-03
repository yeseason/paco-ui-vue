'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (options) {
	options = options || {};
	var message = void 0,
	    duration = void 0,
	    type = void 0;

	if (typeof options === 'string') {
		message = options;
		duration = 3000;
		type = "success";
	} else {
		message = options.message;
		duration = options.duration;
		type = options.type;
	}

	var instance = getAnInstange();
	instance.message = message;
	instance.type = type;
	_vue2.default.nextTick(function () {
		instance.$appendTo(document.body);
		setTimeout(function () {
			instance.$remove();
			returnAnInstance(instance);
		}, duration);
	});
};

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = _vue2.default.extend(require('./toast.vue'));
var toastPool = [];

var getAnInstange = function getAnInstange() {
	if (toastPool.length > 0) {
		var instance = toastPool[0];
		toastPool.splice(0, 1);
		return instance;
	}
	return new Toast({
		el: document.createElement('div')
	});
};

var returnAnInstance = function returnAnInstance(instance) {
	if (instance) {
		toastPool.push(instance);
	}
};