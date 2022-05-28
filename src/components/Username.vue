<template>
  <div class="username-container">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'login'"> 
      <router-link to="/profile">{{user.name}}</router-link>
      <a @click.prevent="handleLogout">退出</a>
    </template>
    <router-link to="/login" exact-path v-else>Login</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('loginUser', ['user']),
    ...mapGetters('loginUser', ['status'])
  },
  methods: {
    // ...mapActions('loginUser',['logOut'])
    async handleLogout() {
      await this.$store.dispatch('loginUser/logOut')
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.username-container {
  display: inline-block;
}
a,
span {
  margin-right: 16px;
}
</style>
