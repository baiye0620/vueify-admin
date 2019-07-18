import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify/lib' // 样式库
import 'vuetify/dist/vuetify.min.css'

import _ from 'lodash' // js工具库

import 'babel-polyfill'

import api from '@/api/index' // 接口全局引入
import ENUM from '@/utils/enumService' // 枚举类引入
import global from '@/utils/global' // 公用方法引入
import '@/utils/filters'

Vue.use(Vuetify)

Vue.prototype._ = _
Vue.prototype.$api = api
Vue.prototype.ENUM = ENUM
Vue.prototype.global = global

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
