<template>
  <div
    v-for="(transaction) in transactions"
    @mouseover="controlDelBtn(transaction.id)"
    @mouseleave="unshowBtn"
    :key="transaction.id"
    class="rounded list-group-item active d-flex justify-content-between my-3"
    :class="className"
    aria-current="true"
  >
    <p class="mb-0">{{ transaction.tranName }}</p>
    <p class="mb-0">
      {{ transaction.picked == "income" ? "+" : "-" }}{{ transaction.price }}
    </p>
    <button class="btn btn-outline-danger btn-sm" :class="[{'d-none' : isShow}]" @click="toDel(transaction.id)">
      <i class="fas fa-fw fa-trash-alt"></i>
    </button>
  </div>
</template>

<script>
  import sweetToastMixin from "../mixins/sweetToast";
export default {
  name: "List",
  mixins: [sweetToastMixin],
  data() {
    return {
      isShow: true
    }
  },
  props: ["transactions", "className"],
  methods: {
    toDel(id) {
       this.$emit("del",id)
      this.showAlert("Transaction Deleted");
    },
    controlDelBtn(id) {
      if (id)
      this.isShow = false
    },
    unshowBtn() {
      this.isShow = true
    }
  },
};
</script>

<style scoped></style>
