import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/icons' // icon
import '@/permission' // 权限

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
