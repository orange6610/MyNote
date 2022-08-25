<template>
  <div class="container">

    <div class="info">
      <p>请先登录</p>
    </div>
    <!-- 头像区域 -->
    <div class="text-center avatar-box">
      <img src="../../assets/user.jpg"
           class="img-thumbnail avatar"
           alt="">
    </div>
    <!-- 登录区域 -->
    <div class="login">
      <!-- 登录名称 -->
      <div class="admin">
        <van-cell-group>
          <van-field v-model="username"
                     placeholder="请输入账号"
                     size="large"
                     input-align="center" />
        </van-cell-group>
      </div>
      <!-- 登录密码 -->
      <div>
        <van-password-input :value="value"
                            info="请输入6位数字密码"
                            @focus="showKeyboard = true" />
      </div>
      <!-- 数字键盘 -->
      <van-number-keyboard :show="showKeyboard"
                           @input="onInput"
                           @delete="onDelete"
                           @blur="showKeyboard = false" />

    </div>
    <div>
      <div class="btn">
        <van-button type="default"
                    @click="reset">重置</van-button>
        <van-button type="default"
                    @click="login">登录</van-button>
      </div>
    </div>
    <div class="info"
         ref="refInfo2"
         style="display:none">
      <p>已登录</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MyLogin',

  data() {
    return {
      username: '',
      value: '',
      showKeyboard: true
    }
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6)
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1)
    },

    reset() {
      this.username = ''
      this.value = ''
    },
    login() {
      if ((this.username === '123456789') & (this.value === '123456')) {
        localStorage.setItem('token', JSON.stringify('Bearerxxxx'))
        this.$router.push('/logined')
      } else {
        localStorage.removeItem('token')
      }
      this.username = ''
      this.value = ''
    }
  }
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
.login-container {
  display: flex;
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
.btn {
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
