<template>
  <h6 :class="className">{{ subTitle }}</h6>
</template>

<script>
export default {
  name: "SubTitle",
  props: ["subTitle", "className"],
};
</script>

<style scoped></style>
