export default {
    install(Vue) {
        registerVueComponent(
            'upper-line-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}