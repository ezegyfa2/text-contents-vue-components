export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        Vue.component('two-title-text-content', () => import('./Component.vue'))
    }
}