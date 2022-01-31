<template>
  <div class="">
    <label class="form-label">{{ name }}</label>
    <input :type="inputType" v-model="tranName" class="form-control mb-2" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["name", "inputType"],
  data() {
    return {
      tranName: "",
    };
  },
};
</script>

<style scoped></style>
