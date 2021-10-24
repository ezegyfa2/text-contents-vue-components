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

<style scoped>
    .description-text {
        font-size: 90%;
    }
    @media (min-width: 1200px) {
        h4, .h4 {
            font-size: 1.5rem;
        }
    }
</style>