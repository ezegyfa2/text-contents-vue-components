export default {
	install(Vue, options) {
		Vue.component('small-text-content', require('./SmallTextContent.vue').default);
		Vue.component('medium-text-content', require('./MediumTextContent.vue').default);
		Vue.component('large-text-content', require('./LargeTextContent.vue').default);
		Vue.component('title-with-icon', require('./TitleWithIcon.vue').default);
	}
};