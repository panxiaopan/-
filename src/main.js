import Vue from 'vue'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from '@/store'
// 引入 weui 
import '@/assets/css/weui.css'
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/index'],
    tabBar: {
      color: '#A3A1A1',
      selectedColor: '#1afa29',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list:[
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: '../dist/static/imges/home.png',
          selectedIconPath:'../dist/static/imges/selecthome.png'
        },
        {
          pagePath: 'pages/logs/index',
          text: '测试',
         iconPath: '../dist/static/imges/test.png',
         selectedIconPath:'../dist/static/imges/selecttest.png'
        }
      ]
    }
  }
}
