import Vue from 'vue'
import Router from 'vue-Router'
import Paco from './index'

import App from './App.vue'
import Actionsheet from './view/ActionsheetView.vue'
import Tab from './view/TabView.vue'
import Button from './view/ButtonView.vue'
import Border from './view/BorderView.vue'
import Loading from './view/LoadingView.vue'
import Card from './view/CardView.vue'
import Checkbox from './view/checkboxView.vue'
import Toast from './view/ToastView.vue'
import Share from './view/ShareView.vue'
import Alert from './view/AlertView.vue'
import Ad from './view/AdView.vue'
import Switch from './view/SwitchView.vue'
import Model from './view/ModelView.vue'
import Mask from './view/MaskView.vue'
import Announcement from './view/AnnouncementView.vue'
import Input from './view/InputView.vue'
import Agreement from './view/AgreementView.vue'
import Index from './view/indexView.vue'
import Agreeme from './view/AgreemeView.vue'
import Search from './view/SearchView.vue'
import List from './view/ListView.vue'
import Illustration from './view/illustration.vue'
import Text from './view/TextView.vue'
import Picker from './view/PickerView.vue'
import Keyboard from './view/KeyboardView.vue'
import Result from './view/resultView.vue'

Vue.use(Paco)
Vue.use(Router)
Vue.config.debug = true
const router = new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: Index,
		title: '首页'
	}, {
		path: '/keyboard',
		name: 'keyboard',
		component: Keyboard,
		title: 'keyboard'
	}, {
		path: '/actionsheet',
		name: 'actionsheet',
		component: Actionsheet,
		title: 'actionsheet'
	}, {
		path: '/agreeme',
		name: 'agreeme',
		component: Agreeme,
		title: 'agreeme'
	}, {
		path: '/tab',
		name: 'tab',
		component: Tab,
		title: 'tab'
	}, {
		path: '/button',
		name: 'button',
		component: Button,
		title: 'button'
	}, {
		path: '/border',
		name: 'border',
		component: Border,
		title: 'border'
	}, {
		path: '/loading',
		name: 'loading',
		component: Loading,
		title: 'loading'
	}, {
		path: '/card',
		name: 'card',
		component: Card,
		title: 'card'
	}, {
		path: '/toast',
		name: 'toast',
		component: Toast,
		title: 'toast'
	}, {
		path: '/checkbox',
		name: 'checkbox',
		component: Checkbox,
		title: 'checkbox'
	}, {
		path: '/share',
		name: 'share',
		component: Share,
		title: 'share'
	}, {
		path: '/alert',
		name: 'alert',
		component: Alert,
		title: 'alert'
	}, {
		path: '/ad',
		name: 'ad',
		component: Ad,
		title: 'ad'
	}, {
		path: '/picker',
		name: 'picker',
		component: Picker,
		title: 'picker'
	}, {
		path: '/switch',
		name: 'switch',
		component: Switch,
		title: 'switch'
	}, {
		path: '/model',
		name: 'model',
		component: Model,
		title: 'model'
	}, {
		path: '/mask',
		name: 'Mask',
		component: Mask,
		title: 'Mask'
	}, {
		path: '/announcement',
		name: 'announcement',
		component: Announcement,
		title: 'announcement'
	}, {
		path: '/input',
		name: 'input',
		component: Input,
		title: 'input'
	}, {
		path: '/agreement',
		name: 'agreement',
		component: Agreement,
		title: 'agreement'
	}, {
		path: '/search',
		name: 'search',
		component: Search,
		title: 'Seach'
	}, {
		path: '/list',
		name: 'list',
		component: List,
		title: 'list'
	}, {
		path: '/text',
		name: 'text',
		component: Text,
		title: 'text'
	}, {
		path: '/illustration',
		name: 'illustration',
		component: Illustration,
		title: 'illustration'
	}, {
		path: '/result',
		name: 'result',
		component: Result,
		title: 'result'
	}, {
		path: '*',
		redirect: '/'
	}]

})

new Vue({
	router
}).$mount('#root')