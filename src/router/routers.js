module.exports = [
      {
        path:'pages/index/index',
        config: { // 页面配置，即 page.json 的内容
            navigationBarBackgroundColor: "#fff",
            enablePullDownRefresh: true,
            navigationBarTitleText: "微信接口功能演示",
            navigationBarTextStyle:'black',
            backgroundColor: "#eeeeee",
            backgroundTextStyle: "light"
          }
     },
    {
        path:'pages/logs/index',
        config: { // 页面配置，即 page.json 的内容
            navigationBarBackgroundColor: "red",
            enablePullDownRefresh: true
          }
    }
]