
// webpack 内置的
const files = require.context('.', true, /\.js$/)

const modules = {}
files.keys().forEach(key => {
    const path = key.replace(/\.\/|\.js/g,'')
    if (path == 'index') return //自己不做任何处理

    let [namespace,type] = path.split('/') // home/action home action
    if (!modules[namespace]) {
        modules[namespace] = {
            namespaced:true //都增加了命名空间
        }
    }
    // {home:{namespaced:true,state:{},user:{namespaced:true,...}}}
    modules[namespace][type] = files(key).default; //获取文件导出的结果

})

export default modules