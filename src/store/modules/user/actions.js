import * as Types from '@/store/actions-types'
import { toLogin } from "@/api/user";


const userActions = {
    async [Types.SET_LOGIN]({commit}, payload){
        let userInfo = await toLogin(payload);
        debugger
    },
    async [Types.VALIDATE]({commit}, payload){

    },

}

export default userActions