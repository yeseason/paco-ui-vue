import Ad from './components/Ad.vue';
import Actionsheet from './components/Actionsheet.js';
import Button from './components/button.vue';
import Border from './components/Border.vue';
import Agreement from './components/Agreement.vue';
import Alert from './components/alert.js';
import Announcement from './components/Announcement.vue';
import Card from './components/card.vue';
import Switch from './components/Switch.vue';
import Input from './components/Input.vue';
import Check from './components/Check.vue';
import Mask from './components/Mask.vue';
import List from './components/List.vue';
import Loading from './components/Loading.vue';
import Search from './components/Search.vue';
import Model from './components/Model.js';
import Share from './components/Share.vue';
import Tab from './components/Tab.vue';
import Tabs from './components/Tabs.vue';
import Toast from './components/Toast.js'
import Popup from './components/popup.vue'
import Illustration from './components/illustration.vue'
import Picker from './components/picker.vue'
import Keyboard from './components/Keyboard.vue'

const install = function(Vue) {
    Vue.component(Ad.name, Ad);
    Vue.component(Actionsheet.name, Actionsheet);
    Vue.component(Keyboard.name,Keyboard);
    Vue.component(Button.name, Button);
    Vue.component(Border.name, Border);
    Vue.component(Card.name,Card);
    Vue.component(Agreement.name, Agreement);
    Vue.component(Alert.name, Alert);
    Vue.component(Announcement.name, Announcement);
    Vue.component(Picker.name,Picker);
    Vue.component(Switch.name, Switch);
    Vue.component(Input.name, Input);
    Vue.component(Check.name, Check);
    Vue.component(Mask.name, Mask);
    Vue.component(List.name, List);
    Vue.component(Loading.name, Loading);
    Vue.component(Search.name, Search);
    Vue.component(Model.name, Model);
    Vue.component(Share.name, Share);
    Vue.component(Tab.name, Tab);
    Vue.component(Tabs.name,Tabs);
    Vue.component(Toast.name, Toast);
    Vue.component(Popup.name,Popup);
    Vue.component(Illustration.name,Illustration);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
  install,
  Ad,
  Actionsheet,
  Keyboard,
  Button,
  Border,
  Agreement,
  Picker,
  Alert,
  Announcement,
  Card,
  Switch,
  Input,
  Check,
  Mask,
  List,
  Loading,
  Search,
  Model,
  Switch,
  Share,
  Tab,
  Tabs,
  Toast,
  Illustration
};
