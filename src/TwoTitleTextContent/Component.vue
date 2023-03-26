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
            },
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'h3',
                        '.sub-title': 'h3',
                        '.content': 'text-muted'
                    }
                }
            }
        }
    }
</script>
