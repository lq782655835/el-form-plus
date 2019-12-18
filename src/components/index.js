import Component from './el-form-plus.vue'

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('el-form-plus', Component)
}

// auto plugin install
let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
}
console.log(GlobalVue, 123)
if (GlobalVue) {
    GlobalVue.use({
        install
    })
}

// export default
Component.install = install
export default Component