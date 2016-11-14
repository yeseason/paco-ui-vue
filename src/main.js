import Vue from 'vue'
import Router from 'vue-Router'
import Paco from './index.js'


import App from './App.vue'
import Actionsheet from './view/ActionsheetView.vue'
import Tab from './view/TabView.vue'
import Button from './view/ButtonView.vue'
import Border from './view/Border.vue'
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
import Picker from './view/pickerView.vue'
import Announcement from './view/AnnouncementView.vue'
import Input from './view/InputView.vue'
import Agreement from './view/AgreementView.vue'
import Index from './view/indexView.vue'
import Agreeme from './view/AgreemeView.vue'
import Search from './view/SearchView.vue'
import List from './view/ListView.vue'
import Illustration from './view/illustration.vue'
import Text from './view/text.vue'
import Keyboard from './view/KeyboardView.vue'
import Result from './view/resultView.vue'

Vue.use(Paco)
Vue.use(Router)
Vue.config.debug = true
const router = new Router()



router.map({
	'/':{
		name:'index',
		component:Index,
		title:'首页'
	},
	'/actionsheet':{
		name:'actionsheet',
		component:Actionsheet,
		title:'actionsheet'
	},
	'/agreeme':{
		name:'agreeme',
		component:Agreeme,
		title:'agreeme'
	},
	'/tab':{
		name:'tab',
		component:Tab,
		title:'tab'
	},
	'/button':{
		name:'button',
		component:Button,
		title:'button'
	},
	'/border':{
		name:'border',
		component:Border,
		title:'border'
	},
	'/keyboard':{
		name:'keyboard',
		component:Keyboard,
		title:'border'
	},
	'/result':{
		name:'result',
		component:Result,
		title:'title'
	},
	'/loading':{
		name:'loading',
		component:Loading,
		title:'loading'
	},
	'/card':{
		name:'card',
		component:Card,
		title:'card'
	},
	'/picker':{
		name:'picker',
		component:Picker,
		title:'picker'
	},
	'/toast':{
		name:'toast',
		component:Toast,
		title:'toast'
	},
	'/checkbox':{
		name:'checkbox',
		component:Checkbox,
		title:'checkbox'
	},
	'/share':{
		name:'share',
		component:Share,
		title:'share'
	},
	'/alert':{
		name:'alert',
		component:Alert,
		title:'alert'
	},
	'/ad':{
		name:'ad',
		component:Ad,
		title:'ad'
	},
	'/switch':{
		name:'switch',
		component:Switch,
		title:'switch'
	},
	'/model':{
		name:'model',
		component:Model,
		title:'model'
	},
	'/mask':{
		name:'Mask',
		component:Mask,
		title:'Mask'
	},
	'/announcement':{
		name:'announcement',
		component:Announcement,
		title:'announcement'
	},
	'/input':{
		name:'input',
		component:Input,
		title:'input'
	},
	'/agreement':{
		name:'agreement',
		component:Agreement,
		title:'agreement'
	},
	'/search':{
		name:'search',
		component:Search,
		title:'Seach'
	},
	'/list':{
		name:'list',
		component:List,
		title:'list'
	},
	'/text':{
		name:'text',
		component:Text,
		title:'text'
	},
	'/illustration':{
		name:'illustration',
		component:Illustration,
		title:'illustration'
	}


})

router.redirect({
	'*':'/'
})
router.start(App,'#app')
