import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistense from 'vuex-persistedstate'

import user from './modules/user'

// 持久化存储数据
const vuexLocal = new VuexPersistense({
  storage: localStorage,
  reducer: val => {
    return {
      user: {
        authorization: val.user.authorization
      }
    }
  }
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters,
  plugins: [vuexLocal]
})

export default store
