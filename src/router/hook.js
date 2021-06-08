import store from "../store"
import * as Types from '@/store/actions-types'


export default{
    // 此字段只是给自己看的没有任何实际意义
    'clear_token': async (to, from, next) => {
        store.commit(Types.CLEAR_TOKEN) //清空token
        next()
    },
    'login_permission': async (to,from,next) => {

        // 用户是否需要登录
       let needLogin = to.matched.some(item =>item.meta.needLogin)
        //若果vuex有值
        if (!store.state.user.hasPermission) {
           let isLogin = await  store.dispatch(`user/${Types.VALIDATE}`)
           console.log(isLogin);
            
           if (needLogin) {
               if (!isLogin) {
                   next('/login') //需要登录没登录
               }else{
                   next() //需要登录登录了
               }
           }else{ //不需要登录
            if (to.name == 'login') { //访问的是登录页面
                if (!isLogin) {
                    next() //没登录
                }else{
                    next('/profile') //需要登录登录了
                }
            }else{
                next()
            }
           }
       
       
        }else{
            if (to.name == 'login') {
                next('/profile')
            }else{
                next()
            }
        }
    
    },
    'menu-permission': async (to , from, next) => {
        // 这里对权限经行处理 动态的添加路由
        if (store.state.user.hasPermission){ //如果用户登录，才能去拿菜单的权限
            if (!store.state.user.menuPermission){ //没菜单权限 才需要处理
                await store.dispatch(`user/${Types.ADD_ROUTE}`)
                //路由动态加载 此时 组件是异步加载 、 我希望等待组件加载完毕 后跳转过去
                next({
                    ...to,
                    replace:true
                })
            }else{
                next()
            }
        }else{
            next()
        }

    }
}