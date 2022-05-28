import Vue from 'vue'
import Vuex from 'vuex'
import loginUser from './loginUser'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // 只允许通过mutation来修改state
  modules: {
    loginUser
  }
})

window.store = store;



export default store;