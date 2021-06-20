import Vue from 'vue'
import VueRouter from 'vue-router'


// 安装插件
Vue.use(VueRouter)

// 创建router
const routes=[
    
]
const router=new VueRouter({
    routes,
    mode:'history'
})

export default router