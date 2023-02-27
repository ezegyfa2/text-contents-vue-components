<script>
    export default {
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'text-black',
                        '.content': 'text-black-50'
                    }
                }
            }
        }
    }
</script>
