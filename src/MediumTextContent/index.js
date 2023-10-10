export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        Vue.component('medium-text-content', () => import('./Component.vue'))
    }
}