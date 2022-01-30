<template>
    <button class="btn" @submit="add()" :class="className">{{ name }}</button>
</template>

<script>
    export default {
        name: "Button",
        props: ['name','className'],
        methods: {
            add() {
                this.emit("addTran");
            }
        },
    }
</script>

<style scoped>

</style>