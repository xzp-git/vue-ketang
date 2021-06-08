export default {
    'has':{
        inserted(el,bindings,vnode){
            let value = bindings.value //v-has=""
            let permission = vnode.context.$store.state.user.btnPermission

            if (!permission.includes(value)) {
                el.parentNode.removeChild(el)
            }
        }
    }
}