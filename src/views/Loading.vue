<template>
  <h1>正在登录...</h1>
</template>

<script>
export default {
  created() {
    // 监听 store.status 的状态，在 destoryed的时候 销毁这个监听
    this.status = this.$watch(() => this.$store.getters['loginUser/status'], (newVal, oldVal) => {
      if(newVal !== 'loading') {
        this.$router.push(this.$route.query.returnurl || '/').catch(() => {})
      }
    }, {
      immediate: true
    })
  }
};
</script>

<style></style>
