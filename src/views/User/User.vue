   <template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card"
         ref="refUser1">
      <!-- 用户头像、姓名 -->
      <van-cell ref="refUser2">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img src="../../assets/user.jpg"
               alt=""
               class="avatar" />
        </template>
        <template #title>
          <span class="username">{{name}}</span>
        </template>
        <template #label>
          <van-tag color="#fff"
                   text-color="#007bff">账号:123456789</van-tag>
        </template>
      </van-cell>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit"
                title="编辑资料"
                @click="show=true"
                is-link />
      <van-action-sheet v-model="show"
                        :actions="actions"
                        cancel-text="取消"
                        @select="onSelect"
                        get-container='body' />
      <div class='name'
           ref="refName">
        <van-cell-group>
          <van-field v-model="value"
                     placeholder="请输入用户名"
                     @keyup.enter="changeName" />
        </van-cell-group>
      </div>

      <van-cell icon="info-o"
                title="关于"
                is-link
                @click="about" />

      <van-cell icon="warning-o"
                title="退出登录"
                is-link
                @click='exit' />
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'

export default {
  name: 'MyUser',
  data() {
    return {
      count: 1,
      show: false,
      actions: [{ name: 'name' }],
      value: '',
      name: '游客'
    }
  },
  created() {
    // localStorage.setItem('lists', JSON.stringify(this.list))
    // 从本地存储读取数据
    const name1 = JSON.parse(localStorage.getItem('name'))
    // console.log(data1)
    this.name = name1
    // const data2 = JSON.parse(localStorage.getItem('id'))
    // console.log(data2)
  },
  methods: {
    about() {
      Dialog.alert({
        title: '关于',
        message: '这是一个简易的备忘录~'
      }).then(() => {
        // on close
      })
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false
      // Toast(item.name)
      if (item.name === 'name') {
        this.$refs.refName.style.display = 'block'
      }
      if (item.name === 'avatar') {
        this.$refs.refAva.style.display = 'block'
      }
    },
    changeName() {
      // console.log(this.value)
      this.name = this.value
      localStorage.setItem('name', JSON.stringify(this.name))
      this.$refs.refName.style.display = 'none'
      this.value = ''
      Toast('已修改')
    },
    exit() {
      localStorage.removeItem('token')
      this.$router.push('/')
      // console.log(this.$refs)
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-card {
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    color: white;
    padding-top: 20px;
    .van-cell {
      background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
.name {
  display: none;
}
</style>
