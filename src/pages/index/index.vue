<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="defaultText"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto"> 
        <card :text="motto"></card>
      </div>
    </div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapGetters, mapActions } from 'vuex'
import api from '@/api'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters(['defaultText'])
  },
  components: {
    card,
  },

  methods: {
    ...mapActions([
      'commitDefaultText'
    ]),
    bindViewTap () {
      // 修改 store.state
      console.log('传值')

      this.commitDefaultText(200)
    },
    getUserInfo () {
      console.log('getUserInfo')
      // 调用登录接口
      let _this = this 
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              _this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log("-------------------")
      console.log('clickHandle:', msg, ev)
    }
  },
  mounted () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/scss/variable.scss';
.content {
  height: 1.2rem ;
  line-height: 1.2rem;
  background-color: #f3f3f3;
}
button {
  width: 2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  display: inline-block;
  margin: 0 auto;
}
.float {
  display: inline-block;
  height: 1.2rem;
  line-height: 1.2rem;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  color: $default_color;
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
