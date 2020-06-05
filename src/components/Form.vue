<template>
  <b-container>
    <b-row>
      <b-col class="col-left">
        <h1>Serie Fibonacci</h1>
        <p
          >Ingresa cualquier número entero mayor a 0 y te diré cuál es el número
          inmediato de la serie de Fibonacci</p
        >
      </b-col>
      <b-col class="col-right">
        <b-form inline>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Ingresa el número"
            v-model="number"
            type="number"
          ></b-form-input>
          <b-button variant="primary" @click="getFibonacciNumber(number)"
            >Calcular</b-button
          >
        </b-form>
        <h3 v-show="showResult">result: {{ result }}</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      result: 0,
      showResult: false
    };
  },
  methods: {
    getFibonacciNumber(number) {
      this.result = this.fibonacci(number);
      this.showResult = true;
    },
    fibonacci(number, x = 0, y = 1) {
      return y <= number
        ? this.fibonacci(number, y, x + y)
        : y - number > number - x && number >= y
        ? y
        : x;
    }
  }
};
</script>

<style scoped>
.row {
  height: 600px;
  margin-top: 14%;
  border-radius: 4%;
  box-shadow: 15px 15px 15px 2px #524f4f;
}
.col-left {
  padding-top: 20%;
  background-color: #ff5d0d;
  color: white;
  height: 100%;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
}

.col-right {
  padding-top: 10%;
  background-color: #3e3e3e;
  height: 100%;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
}
</style>