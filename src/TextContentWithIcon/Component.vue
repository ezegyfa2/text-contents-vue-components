<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from 'helper-vue-components/ClassAdder/Component.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            title: { 
                type: String
            },
            content: {
                type: String
            },
            icon_class: { 
                type: String
            }
        }
    }
</script>
