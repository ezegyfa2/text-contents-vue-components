export default {
    install(Vue) {
        Vue.component('large-text-content', () => import('./Component.vue'))
    }
}