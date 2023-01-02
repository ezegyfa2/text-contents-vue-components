<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: { 
                type: String
            },
            content: {
                type: String
            },
            button_title: {
                type: String
            },
            button_link: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
