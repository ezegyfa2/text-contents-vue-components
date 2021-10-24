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

<style type="text/css">
    .signup-section {
        padding: 10rem 0;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
    }
    
    @media (min-width: 992px) {
        .g-lg-5, .gx-lg-5 {
            --bs-gutter-x: 3rem;
        }
    }
    @media (min-width: 1200px) {
        h2, .h2 {
            font-size: 2rem;
        }
    }
    h2, .h2 {
        font-size: calc(1.325rem + 0.9vw);
    }
    .g-4, .gx-4 {
        --bs-gutter-x: 1.5rem;
    }
</style>
