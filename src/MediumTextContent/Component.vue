<script>
    import TextContent from '../TextContent/Component.vue'

    export default {
        mixins: [
            TextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'h2'
                    }
                }
            }
        }
    }
</script>