export default {
    install(Vue) {
        registerVueComponent(
            'large-text-content',
            require('./Component.vue').default,
            Vue,
			'text-contents-vue-components/LargeTextContent/Component.vue'
        )
    }
}