<template>
  <div class="login-container">
    <div class="h2">login</div>
    <div class="form-item">
      <label>用户名</label>
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="form-item">
      <label>密码</label>
      <input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        @keyup.enter="handleSubmit"
      />
    </div>
    <div class="btn" :disabled="loading" @click.enter="handleSubmit">{{ loading ? "loading..." : "登录" }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  // computed: mapState({
  //   loading: state => state.loginUser.loading
  // }),
  // computed: {
  //   ...mapState({
  //     loading: state => state.loginUser.loading
  //   })
  // },
  // computed: {
  //   ...mapState('loginUser', ['loading'])
  // },
  computed: {
    ...mapState('loginUser', {
      loading: 'loading'
    })
  },
  // computed:{
  //   loading() {
  //     return this.$store.state.loginUser.loading;
  //   }
  // },
  methods: {
    async handleSubmit() {
      const res = await this.$store.dispatch('loginUser/login',{
        username: this.username,
        password: this.password
      })
      if(res) {
        const path = this.$route.query.returnurl || '/'
        this.$router.push({
          path
        })
      } else {
        alert('账号密码错误');
        this.username = '';
        this.password = '';
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  .h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .form-item {
    margin-bottom: 20px;
    label {
      display: inline-block;
      width: 70px;
      text-align: left;
      font-size: 18px;
      margin-right: 10px;
    }
    input {
      padding: 4px;
      padding-left:10px;
      font-size: 20px;
    }
  }
  .btn {
    width: 100px;
    height: 30px;
    margin: 0 auto;
    background-color: #eeccee;
    line-height: 30px;
    border-radius: 4px;
    cursor: pointer;
    &.disabled {
      background-color: lighten(#eeccee, 5%);
    }
  }
}
</style>
