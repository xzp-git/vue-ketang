import LoadingComponent from "@/components/loading.vue";

const loadable = (asyncFunc) => {
    let component = () =>( {
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: asyncFunc(),
        // 异步组件加载时使用的组件
        loading: LoadingComponent, //为了增加loading
    })
    return { //loader 执行后 返回一个组件  
        render(h){
            return h(component)
        }
    }
}
export default loadable