<template>
    <a @click="click">Click me!</a>
</template>

<script>
    export default {
        name: 'ActionLink',
        methods: {
            click( event ) {
                this.$emit( 'click', event );
            }
        }
    };
</script>

<style scoped>

</style>
