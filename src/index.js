export default {
	install(Vue) {
		Vue.component('small-text-content', require('./SmallTextContent/Component.vue').default);
		Vue.component('medium-text-content', require('./MediumTextContent.vue').default);
		Vue.component('large-text-content', require('./LargeTextContent/Component.vue').default);
		Vue.component('title-with-icon', require('./TitleWithIcon/Component.vue').default);
		//colored
		Vue.component('large-white50-text-content', require('./ColoredTextContents/LargeWhite50TextContent.vue').default);
		Vue.component('medium-white50-text-content', require('./ColoredTextContents/MediumWhite50TextContent.vue').default);
		Vue.component('small-white50-text-content', require('./ColoredTextContents/SmallWhite50TextContent.vue').default);
		Vue.component('small-black50-text-content', require('./ColoredTextContents/SmallBlack50TextContent.vue').default);
	}
};