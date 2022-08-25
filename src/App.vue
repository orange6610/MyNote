<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <van-tabbar route
                active-color="grey"
                inactive-color="#000"
                ref="refTabbar">
      <van-tabbar-item icon="certificate"
                       to="/">登录</van-tabbar-item>
      <van-tabbar-item icon="smile-o"
                       to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o"
                       to="/user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
export default {
  data() {
    return { active: 0 }
  },
  methods: {}
}
</script>

<style lang="less">
:deep(.van-icon) {
  color: white;
}
</style>
