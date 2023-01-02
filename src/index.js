export default {
	install(Vue) {
		registerVueComponent('small-text-content', require('./SmallTextContent/Component.vue').default, Vue);
		registerVueComponent('medium-text-content', require('./MediumTextContent.vue').default, Vue);
		registerVueComponent('large-text-content', require('./LargeTextContent/Component.vue').default, Vue);
		registerVueComponent('title-with-icon', require('./TitleWithIcon/Component.vue').default, Vue);
		//colored
		registerVueComponent('large-white50-text-content', require('./ColoredTextContents/LargeWhite50TextContent.vue').default, Vue);
		registerVueComponent('medium-white50-text-content', require('./ColoredTextContents/MediumWhite50TextContent.vue').default, Vue);
		registerVueComponent('small-white50-text-content', require('./ColoredTextContents/SmallWhite50TextContent.vue').default, Vue);
		registerVueComponent('small-black50-text-content', require('./ColoredTextContents/SmallBlack50TextContent.vue').default, Vue);
	}
};