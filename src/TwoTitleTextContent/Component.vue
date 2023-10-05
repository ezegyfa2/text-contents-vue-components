<template lang="pug">
    include Template.pug
</template>

<script>
    import TextContent from '../TextContent/Component.vue'

    export default {
        mixins: [
            TextContent
        ],
        props: {
            sub_title: {
                type: String
            }
        }
    }
</script>
