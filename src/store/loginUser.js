import * as user from '@/api/user'

export default {
  namespaced: true, // 开启命名空间
  state: {
    loading: false,
    user: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }, 
    setUser(state, payload) {
      state.user = payload;
    }
  },
  getters: {
    status(state) {
      if(state.loading) {
        return 'loading'
      } else if(state.user) {
        return 'login'
      } else {
        return 'unlogin'
      }
    }
  },
  actions: {
    async login(ctx, payload) {
      ctx.commit('setLoading', true);
      const res = await user.login(payload.username, payload.password);
      if(res) { // 拿到结果，登录成功
        ctx.commit('setUser', res);
      }
      ctx.commit('setLoading', false);
      return res;
    }, 
    async logOut(ctx) {
      ctx.commit('setLoading', true);
      await user.loginOut();
      ctx.commit('setUser', null);
      ctx.commit('setLoading', false);
    }, 
    async whoAmI(ctx) {
      ctx.commit('setLoading', true);
      const resp = await user.whoAmI();
      ctx.commit('setUser', resp);
      ctx.commit('setLoading', false)
    }
  }
}