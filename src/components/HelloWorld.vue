<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-12">
        <Title
          class-name="text-primary text-center fw-bolder"
          title="Expense Tracker"
        />
        <sub-title
          class-name="text-uppercase mt-5 fw-bolder"
          sub-title="your balance"
        />
        <Title class-name="fw-bolder mb-4" :title="'$'+yourBalance" />
        <div class="card shadow">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-6 px-3 py-3 border-end">
                <p class="mb-0 text-center fw-bolder">Income</p>
                <p class="mb-0 text-center fw-bolder text-success">
                  ${{ incomedAmount }}
                </p>
              </div>

              <div class="col-6 px-3 py-3">
                <p class="mb-0 text-center fw-bolder">Expense</p>
                <p class="mb-0 text-center fw-bolder text-danger">
                  ${{ expensedAmount }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <sub-title
          class-name="text-uppercase mt-5 fw-bolder"
          sub-title="History"
        />
        <hr />
        <List :transactions="transactions" @del="delTran" class-name="b-danger" />
        <sub-title
          class-name="text-uppercase mt-5 fw-bolder"
          sub-title="Add new transaction"
        />
        <hr />
        <TransactionAdd @addTran="addTran" />
        <hr>

      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import SubTitle from "./SubTitle";
import List from "./List";
import TransactionAdd from "./TransactionAdd";

export default {
  name: "HelloWorld",
  components: {TransactionAdd, List, SubTitle, Title },
  data() {
    return {
      transactions: [
        {
          id : "1",
          tranName: "Car",
          price: 500,
          picked : 'expense'
        },
        {
          id : '2',
          tranName: "Book",
          price: 500,
          picked : 'expense'
        },
        {
          id : "3",
          tranName: "Salary",
          price: 500000,
          picked : 'income'
        },
      ],
    };
  },
  computed: {
    expensedAmount() {
      return this.transactions.filter(el => el.picked == 'expense').reduce((total,curr) => total + curr.price ,0);
    },
    incomedAmount() {
      return this.transactions.filter(el => el.picked == 'income').reduce((total,curr) => total + curr.price ,0);
    },
    yourBalance() {
      return this.incomedAmount - Math.abs(this.expensedAmount);
    }
  },
  methods: {
    addTran(transactions) {
      this.transactions.push({id : this.transactions.length,...transactions});

    },
    delTran(id) {
      this.transactions = this.transactions.filter(el => el.id != id);
    }


  },
};
</script>

<style scoped>
.b-danger {
  border-right: 5px red solid !important;
}
.b-success {
  border-right: 5px green solid !important;
}
</style>
