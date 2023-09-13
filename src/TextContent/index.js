export default {
    install(Vue) {
        registerVueComponent(
            'text-content',
            require('./Component.vue').default,
            Vue,
			'text-contents-vue-components/TextContent/Component.vue'
        )
    }
}