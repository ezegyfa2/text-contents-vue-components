<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from '../../../helper-vue-components/src/ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            title: { 
                type: String
            },
            icon_type_class: { 
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
