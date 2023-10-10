export default {
    install(Vue) {
        Vue.component('text-content-with-middle-line', () => import('./Component.vue'))
    }
}