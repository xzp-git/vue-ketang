import * as Types from '@/store/actions-types'


const homeMutations = {
    [Types.SET_CATEGORY](state,payload){ //修改分类状态
        state.category = payload
    },

    [Types.SET_SLIDES](state,payload){ //修改分类状态
        state.slides = payload
    },
}

export default homeMutations