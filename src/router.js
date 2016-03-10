
var index = require('./view/index.vue');
var App = require('./view/app.vue');
var produce = require('./view/produce.vue');
var about = require('./view/about.vue');
var login = require('./view/login.vue');
// import produce from './view/produce.vue'
// import about from './view/about.vue'


module.exports = function(Vue,VueRouter)
{
    Vue.use(VueRouter)
    // 创建一个路由器实例
    // 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
    router = new VueRouter()

    // 定义路由规则
    // 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
    // 创建的组件构造函数，也可以是一个组件选项对象。
    // 稍后我们会讲解嵌套路由
    router.map({
    	'/index': {
            component: index
        },
        '/produce': {
            component: produce
        },
        '/login': {
            component: login
        },
        '/about': {
            component: about
        }
    })

    router.beforeEach(function () {
      window.scrollTo(0, 0)
    })

    router.redirect({
      '*': '/index'
    });
    // 现在我们可以启动应用了！
    // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
    router.start(App, '#app')
    return App
}