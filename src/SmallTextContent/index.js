export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        Vue.component('small-text-content', () => import('./Component.vue'))
    }
}