export default {
    install(Vue) {
        registerVueComponent(
            'text-content-with-middle-line',
            require('./Component.vue').default,
            Vue
        )
    }
}