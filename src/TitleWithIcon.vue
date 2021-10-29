<template lang="pug">
    include TitleWithIcon.pug
</template>

<script>
    import clone from 'just-clone';
    export default {
        props: {
            icon_type_class: { 
                type: String
            },
            title: {
                type: String
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "globals.less";

    @media (min-width: 1200px) {
        .title {
            font-size: 2rem;
        }
    }
    .title {
        .text-white();
        font-size: calc(1.325rem + 0.9vw);
    }
</style>
