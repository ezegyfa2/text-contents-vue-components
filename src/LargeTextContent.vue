<template lang="pug">
    include LargeTextContent.pug
</template>

<script>
    import TextContent from './TextContent.vue';

    export default {
        mixins: [
            TextContent
        ]
    }
</script>

<style lang="less" scoped>
    @import "globals.less";

    @media (min-width: 992px) {
        .title {
            font-size: 6.5rem;
            line-height: 6.5rem;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .title {
            font-size: 4rem;
            line-height: 4rem;
        }
    }
    @media (max-width: 768px) {
        .title {
            font-size: 2.5rem;
            line-height: 2.5rem;
        }
    }
    .title {
        mx-auto();
        font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        letter-spacing: 0.8rem;
        background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-transform: uppercase !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
    @media (min-width: 992px) {
        .content {
            max-width: 30rem;
            font-size: 1.25rem;
        }
    }
    .content {
        mx-auto();
        text-white-50();
        max-width: 20rem;
        font-size: 1rem;
    }
    .mx-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }
</style>