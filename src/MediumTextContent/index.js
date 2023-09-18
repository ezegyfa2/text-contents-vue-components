export default {
    install(Vue) {
        require('../TextContent').default.install(Vue)

        registerVueComponent(
            'medium-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}