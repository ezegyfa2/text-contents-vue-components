<template lang="pug">
    include MediumTextContent.pug
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

    .content {
        .text-white-50();
    }
    .title {
        .text-white();
    }
</style>