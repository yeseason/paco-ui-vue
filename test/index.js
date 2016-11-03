'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _module$exports;

var _Ad = require('./components/Ad.vue');

var _Ad2 = _interopRequireDefault(_Ad);

var _button = require('./components/button.vue');

var _button2 = _interopRequireDefault(_button);

var _Agreement = require('./components/Agreement.vue');

var _Agreement2 = _interopRequireDefault(_Agreement);

var _alert = require('./components/alert.vue');

var _alert2 = _interopRequireDefault(_alert);

var _Announcement = require('./components/Announcement.vue');

var _Announcement2 = _interopRequireDefault(_Announcement);

var _Switch = require('./components/Switch.vue');

var _Switch2 = _interopRequireDefault(_Switch);

var _Input = require('./components/Input.vue');

var _Input2 = _interopRequireDefault(_Input);

var _Check = require('./components/Check.vue');

var _Check2 = _interopRequireDefault(_Check);

var _Mask = require('./components/Mask.vue');

var _Mask2 = _interopRequireDefault(_Mask);

var _Line = require('./components/Line.vue');

var _Line2 = _interopRequireDefault(_Line);

var _List = require('./components/List.vue');

var _List2 = _interopRequireDefault(_List);

var _Loading = require('./components/Loading.vue');

var _Loading2 = _interopRequireDefault(_Loading);

var _Search = require('./components/Search.vue');

var _Search2 = _interopRequireDefault(_Search);

var _Model = require('./components/Model.vue');

var _Model2 = _interopRequireDefault(_Model);

var _Share = require('./components/Share.vue');

var _Share2 = _interopRequireDefault(_Share);

var _Tab = require('./components/Tab.vue');

var _Tab2 = _interopRequireDefault(_Tab);

var _Toast = require('./components/Toast.js');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
    Vue.component(_Ad2.default.name, _Ad2.default);
    Vue.component(_button2.default.name, _button2.default);
    Vue.component(_Agreement2.default.name, _Agreement2.default);
    Vue.component(_alert2.default.name, _alert2.default);
    Vue.component(_Announcement2.default.name, _Announcement2.default);
    Vue.component(_Switch2.default.name, _Switch2.default);
    Vue.component(_Input2.default.name, _Input2.default);
    Vue.component(_Check2.default.name, _Check2.default);
    Vue.component(_Mask2.default.name, _Mask2.default);
    Vue.component(_Line2.default.name, _Line2.default);
    Vue.component(_List2.default.name, _List2.default);
    Vue.component(_Loading2.default.name, _Loading2.default);
    Vue.component(_Search2.default.name, _Search2.default);
    Vue.component(_Model2.default.name, _Model2.default);
    Vue.component(_Share2.default.name, _Share2.default);
    Vue.component(_Tab2.default.name, _Tab2.default);
    Vue.component(_Toast2.default.name, _Toast2.default);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = (_module$exports = {
    install: install,
    Ad: _Ad2.default,
    Button: _button2.default,
    Agreement: _Agreement2.default,
    Alert: _alert2.default,
    Announcement: _Announcement2.default,
    Switch: _Switch2.default,
    Input: _Input2.default,
    Check: _Check2.default,
    Mask: _Mask2.default,
    Line: _Line2.default,
    List: _List2.default,
    Loading: _Loading2.default,
    Search: _Search2.default,
    Model: _Model2.default
}, (0, _defineProperty3.default)(_module$exports, 'Switch', _Switch2.default), (0, _defineProperty3.default)(_module$exports, 'Share', _Share2.default), (0, _defineProperty3.default)(_module$exports, 'Tab', _Tab2.default), (0, _defineProperty3.default)(_module$exports, 'Toast', _Toast2.default), _module$exports);