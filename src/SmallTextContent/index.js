export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        registerVueComponent(
            'small-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}