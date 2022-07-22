<script>
    import TextContent from './TextContent/Component.vue'

    export default {
        mixins: [
            TextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'h2'
                }
            }
        }
    }
</script>