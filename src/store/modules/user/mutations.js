import * as Types from '@/store/actions-types'


const userMutations = {
    [Types.SET_USER](state, payload) {
        state.authList = payload.authList
        state.token = payload.token
        state.username = payload.username

        if (payload.token) {
            localStorage.setItem('token',payload.token)
        }
    },
    [Types.SET_PERMISSION](state, payload) {
        state.hasPermission = payload
    },
    [Types.SET_MENU_PERMISSION](state, payload) {
        state.menuPermission = payload
    },
}

export default userMutations