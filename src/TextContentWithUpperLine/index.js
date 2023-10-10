export default {
    install(Vue) {
        Vue.component('upper-line-text-content', () => import('./Component.vue'))
    }
}