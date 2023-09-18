export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        registerVueComponent(
            'two-title-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}