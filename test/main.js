'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-Router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueTouch = require('vue-touch');

var _vueTouch2 = _interopRequireDefault(_vueTouch);

var _index = require('../lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _TabView = require('./view/TabView.vue');

var _TabView2 = _interopRequireDefault(_TabView);

var _ButtonView = require('./view/ButtonView.vue');

var _ButtonView2 = _interopRequireDefault(_ButtonView);

var _LoadingView = require('./view/LoadingView.vue');

var _LoadingView2 = _interopRequireDefault(_LoadingView);

var _ToastView = require('./view/ToastView.vue');

var _ToastView2 = _interopRequireDefault(_ToastView);

var _ShareView = require('./view/ShareView.vue');

var _ShareView2 = _interopRequireDefault(_ShareView);

var _LineView = require('./view/LineView.vue');

var _LineView2 = _interopRequireDefault(_LineView);

var _AlertView = require('./view/AlertView.vue');

var _AlertView2 = _interopRequireDefault(_AlertView);

var _AdView = require('./view/AdView.vue');

var _AdView2 = _interopRequireDefault(_AdView);

var _SwitchView = require('./view/SwitchView.vue');

var _SwitchView2 = _interopRequireDefault(_SwitchView);

var _ModelView = require('./view/ModelView.vue');

var _ModelView2 = _interopRequireDefault(_ModelView);

var _MaskView = require('./view/MaskView.vue');

var _MaskView2 = _interopRequireDefault(_MaskView);

var _AnnouncementView = require('./view/AnnouncementView.vue');

var _AnnouncementView2 = _interopRequireDefault(_AnnouncementView);

var _InputView = require('./view/InputView.vue');

var _InputView2 = _interopRequireDefault(_InputView);

var _AgreementView = require('./view/AgreementView.vue');

var _AgreementView2 = _interopRequireDefault(_AgreementView);

var _indexView = require('./view/indexView.vue');

var _indexView2 = _interopRequireDefault(_indexView);

var _SearchView = require('./view/SearchView.vue');

var _SearchView2 = _interopRequireDefault(_SearchView);

var _ListView = require('./view/ListView.vue');

var _ListView2 = _interopRequireDefault(_ListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.warn(_index2.default);
_vue2.default.use(_index2.default);
_vue2.default.use(_vueRouter2.default);
_vue2.default.config.debug = true;
var router = new _vueRouter2.default();
_vue2.default.use(_vueTouch2.default);

router.map({
	'/': {
		name: 'index',
		component: _indexView2.default,
		title: '首页'
	},
	'/tab': {
		name: 'tab',
		component: _TabView2.default,
		title: 'tab'
	},
	'/button': {
		name: 'button',
		component: _ButtonView2.default,
		title: 'button'
	},
	'/loading': {
		name: 'loading',
		component: _LoadingView2.default,
		title: 'loading'
	},
	'/toast': {
		name: 'toast',
		component: _ToastView2.default,
		title: 'toast'
	},
	'/share': {
		name: 'share',
		component: _ShareView2.default,
		title: 'share'
	},
	'/line': {
		name: 'line',
		component: _LineView2.default,
		title: 'line'
	},
	'/alert': {
		name: 'alert',
		component: _AlertView2.default,
		title: 'alert'
	},
	'/ad': {
		name: 'ad',
		component: _AdView2.default,
		title: 'ad'
	},
	'/switch': {
		name: 'switch',
		component: _SwitchView2.default,
		title: 'switch'
	},
	'/model': {
		name: 'model',
		component: _ModelView2.default,
		title: 'model'
	},
	'/Mask': {
		name: 'Mask',
		component: _MaskView2.default,
		title: 'Mask'
	},
	'/announcement': {
		name: 'announcement',
		component: _AnnouncementView2.default,
		title: 'announcement'
	},
	'/input': {
		name: 'input',
		component: _InputView2.default,
		title: 'input'
	},
	'/agreement': {
		name: 'agreement',
		component: _AgreementView2.default,
		title: 'agreement'
	},
	'/search': {
		name: 'search',
		component: _SearchView2.default,
		title: 'Seach'
	},
	'/list': {
		name: 'list',
		component: _ListView2.default,
		title: 'list'
	}

});

router.redirect({
	'*': '/'
});
router.start(_App2.default, '#app');