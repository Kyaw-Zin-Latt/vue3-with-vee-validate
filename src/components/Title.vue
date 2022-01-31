<template>
  <h2 :class="className">{{ title }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: ["title", "className"],
};
</script>

<style scoped></style>
