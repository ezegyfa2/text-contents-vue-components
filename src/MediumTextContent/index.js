export default {
    install(Vue) {
        registerVueComponent(
            'medium-text-content',
            require('./Component.vue').default,
            Vue,
			'text-contents-vue-components/MediumTextContent/Component.vue'
        )
    }
}