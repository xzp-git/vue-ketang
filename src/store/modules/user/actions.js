import * as Types from '@/store/actions-types'
import { toLogin, validate} from "@/api/user";


const userActions = {
    async [Types.SET_LOGIN]({commit}, payload){
        let userInfo = await toLogin(payload);
        commit(Types.SET_USER,userInfo)
        commit(Types.SET_PERMISSION,true)
    },
    async [Types.VALIDATE]({commit}, payload){
        // 此时需要 看一下用户 是否登陆过
        if (!localStorage.getItem('token')) return false
        try {
            let result = await validate()
            commit(Types.SET_USER,result)
            commit(Types.SET_PERMISSION,true)
            return true
        } catch (error) {
            commit(Types.SET_USER,{})
            commit(Types.SET_PERMISSION,false)
            return false
        }
        
    },

}

export default userActions