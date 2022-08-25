<template>
  <div>
    <van-nav-bar title="备忘录"
                 right-text="新建"
                 @click-right="add"
                 class="navBar">
      <van-icon name="smile-o"
                slot="left" />
    </van-nav-bar>

    <input type="text"
           v-model.trim="inputText"
           placeholder="   写点什么吧"
           ref="refInput"
           @keyup.enter="save">

    <div v-for="item in list"
         :key="item.id"
         :id="item.id">
      <van-swipe-cell :right-width="65">
        <van-cell-group>
          <van-cell :title="item.time"
                    :value='item.text' />
        </van-cell-group>
        <span slot="right"
              :id='item.id'
              @click="del(item.id)">删除</span>
      </van-swipe-cell>
      <h1>{{color}}</h1>
    </div>

  </div>

</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'MyHome',
  data() {
    return {
      date: 0,
      inputText: '',
      id: 1,
      list: [],
      color: ''
    }
  },
  created() {
    // localStorage.setItem('lists', JSON.stringify(this.list))
    // 从本地存储读取数据
    const data1 = JSON.parse(localStorage.getItem('lists'))
    // console.log(data1)
    this.list = data1
    // const data2 = JSON.parse(localStorage.getItem('id'))
    // console.log(data2)
    console.log(this.list)
    if (this.list === null) {
      this.list = [{ id: 0, text: '好好学习 天天向上', time: '2022-8-23 13:14:13' }]
      console.log(this.list)
    }
  },

  methods: {
    add() {
      // console.log(this.$refs.refInput)
      this.$refs.refInput.style.display = 'block'
    },
    save() {
      if (this.inputText !== '') {
        // 判断输入是否为空
        this.$refs.refInput.style.display = 'none'
        // console.log(this.inputText)
        const aData = new Date()
        this.date =
          aData.getFullYear() +
          '-' +
          (aData.getMonth() + 1) +
          '-' +
          aData.getDate() +
          ' ' +
          aData.getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()) +
          ':' +
          (new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds())
        this.id = JSON.parse(localStorage.getItem('id'))
        this.list.push({ id: this.id, text: this.inputText, time: this.date })
        localStorage.setItem('lists', JSON.stringify(this.list))
        // console.log(this.list)
        this.id++
        // console.log(this.id)
        localStorage.setItem('id', JSON.stringify(this.id))
        // const data1 = JSON.parse(localStorage.getItem('lists'))
        // console.log(data1)
        // console.log(new Date())
        this.inputText = ''
        // console.log(this.list)
      } else Toast('内容不得为空')
    },
    del(id) {
      const result = this.list.filter(item => item.id !== id)
      this.list = result
      localStorage.setItem('lists', JSON.stringify(this.list))
      // console.log(result)
      if (!this.list.length) {
        // localStorage.clear()
        localStorage.setItem('id', JSON.stringify(0))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-nav-bar__text {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
}
.input {
  height: 45px;
}
input {
  display: none;
  width: 100%;
  height: 45px;
  padding: 0;
  border-radius: 4px;
  flex: 1;
  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  outline-style: none;
  border: 1px solid#fcb69f;
}
input:focus {
  border-color: orange;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
/deep/ .van-swipe-cell__right {
  display: inline-block;
  width: 65px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background-color: #f44;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
</style>
