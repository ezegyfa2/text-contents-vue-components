<script>
    export default {
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'text-white',
                        '.content': 'text-white-50'
                    }
                }
            }
        }
    }
</script>
