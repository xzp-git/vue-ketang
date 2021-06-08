import loadable from "@/utils/loadable.js";

export default [//权限管理 和后台 对应

    {
        path:'lesson-manager',
        meta:{
           auth:'lesson' 
        },
        component:loadable(() => import('@/views/other/lesson-manager.vue'))
    },

    {
        path:'student-manager',
        meta:{
           auth:'student' 
        },
        component:loadable(() => import('@/views/other/student-manager.vue'))
    },
    {
        path:'points',
        meta:{
           auth:'points' 
        },
        component:loadable(() => import('@/views/other/points.vue'))
    },
    {
        path:'collect',
        name:'profile',
        meta:{
           auth:'collect' 
        },
        component:loadable(() => import('@/views/other/collect.vue'))
    },
]