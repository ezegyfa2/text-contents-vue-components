export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        Vue.component('text-content', () => import('./Component.vue'))
    }
}