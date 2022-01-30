<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Padauk:wght@400;700&display=swap');
$font-family-sans-serif : 'Montserrat', sans-serif;

$primary : #42b983;

@import "~bootstrap/scss/bootstrap";
</style>
