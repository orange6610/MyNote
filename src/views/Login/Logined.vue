<template>
  <div class="container">

    <div class="info">
      <p style="display:none">请先登录</p>
    </div>
    <!-- 头像区域 -->
    <div class="text-center avatar-box">
      <img src="../../assets/user.jpg"
           class="img-thumbnail avatar"
           alt="">
    </div>

    <div class="info"
         ref="refInfo2"
         style="display:block">
      <p>已登录</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MyLogined'
}
</script>

<style lang="less" scoped>
.info {
  height: 70px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.info > p {
  color: #908888;
}

.avatar-box {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
