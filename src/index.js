export default {
    install(Vue) {
        Vue.component('small-text-content', () => import('./SmallTextContent/Component.vue'));
        Vue.component('medium-text-content', () => import('./MediumTextContent/Component.vue'));
        Vue.component('large-text-content', () => import('./LargeTextContent/Component.vue'));
        Vue.component('title-with-icon', () => import('./TitleWithIcon/Component.vue'));
        //colored
        Vue.component('large-white50-text-content', () => import('./ColoredTextContents/LargeWhite50TextContent.vue'));
        Vue.component('medium-white50-text-content', () => import('./ColoredTextContents/MediumWhite50TextContent.vue'));
        Vue.component('small-white50-text-content', () => import('./ColoredTextContents/SmallWhite50TextContent.vue'));
        Vue.component('small-black50-text-content', () => import('./ColoredTextContents/SmallBlack50TextContent.vue'));
    },
};
