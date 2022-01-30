<template>
  <div class="">
    <Form @submit="addTran" :validation-schema="schema">
      <div class="">
        <label class="form-label mb-3">Name</label>
        <Field
          name="tranName"
          type="text"
          class="form-control"
          v-model.trim="transactions.tranName"
        />
        <ErrorMessage class="text-danger text-capitalize fw-bolder small" name="tranName" />
      </div>
      <div class="">
        <label class="form-label">Price</label>
        <Field
          name="price"
          type="number"
          class="form-control"
          v-model.number="transactions.price"
        />
        <ErrorMessage class="text-danger text-capitalize fw-bolder small" name="price" />
      </div>
      <div class="mb-3">
        <input type="radio" class="form-check-inline" id="one" value="income" v-model="transactions.picked">
        <label for="one" class="form-label">Income</label>

        <input type="radio" id="two" class="form-check-inline  ms-3" value="expense" v-model="transactions.picked">
        <label for="two" class="form-label">Expense</label>
      </div>
      <div class="my-3">
        <button type="submit" class="btn btn-primary w-100">
          Add Transaction
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';
  import sweetToastMixin from "../mixins/sweetToast";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  mixins : [sweetToastMixin],
  name: "TransactionAdd",
  data() {

    return {
      transactions: {

        tranName: "",
        price: "",
        picked: ""
      },
    };
  },
  computed: {
    schema() {
      return yup.object({
        tranName: yup.string().required(),
        price: yup.string().required(),
      });
    }
  },
  methods: {
    addTran() {

      this.$emit("addTran", this.transactions);
      this.transactions.tranName = "";
      this.transactions.price = "";
      this.transactions.picked = "";
      this.showAlert("Transaction is added");
    },
  },
};
</script>

