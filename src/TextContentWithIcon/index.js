export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'text-content-with-icon',
            require('./Component.vue').default,
            Vue
        )
    }
}