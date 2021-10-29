<template lang="pug">
    include SmallTextContent.pug
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

    @media (min-width: 1200px) {
        .title {
            font-size: 1.5rem;
        }
    }

    .title {
        .text-white();
        font-size: 90%;
    }
    .content {
        .text-white-50();
    }
</style>