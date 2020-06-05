<template>
  <div class="background-div">
    <div class="opacity">
      <b-container>
        <b-row class="text-center row-main">
          <b-col class="col-left">
            <b-row class="justify-content-center">
              <b-col cols="10">
                <h1>Serie Fibonacci</h1>
                <p
                  >Ingresa cualquier número entero mayor a 0 y te diré cuál es
                  el número inmediato de la serie de Fibonacci</p
                >
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-right">
            <b-form inline>
              <b-form-input
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Ingresa el número"
                v-model="number"
                type="number"
              ></b-form-input>
              <b-button @click.prevent="getFibonacciNumber(number)"
                >Calcular</b-button
              >
            </b-form>
            <h3 v-show="showResult">result: {{ result }}</h3>
          </b-col>
        </b-row>
      </b-container>
      <Alert
        :errorAlert="errorAlert"
        message="Por favor, ingresa un valor mayor a 0"
      />
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue';
export default {
  components: {
    Alert
  },
  data() {
    return {
      number: 0,
      result: 0,
      showResult: false,
      errorAlert: false
    };
  },
  methods: {
    getFibonacciNumber(number) {
      if (number > 0) {
        this.result = this.fibonacci(number);
        this.showResult = true;
      } else {
        this.errorAlert = true;
      }
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
.background-div {
  height: 100vh;
  background-color: #c4bbbb;
  background-image: url('../assets/fibonacci.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.opacity {
  opacity: 1;
}
.container {
  padding-top: 10%;
}
.row-main {
  box-shadow: 15px 15px 15px 2px #948e8e;
  border-radius: 50px;
  height: 60vh;
  background-color: white;
}
.col-left {
  background-color: #ff5d0d;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  color: white;
  padding-top: 15%;
}

.col-left p {
  font-size: 22px;
}
.col-right {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding-top: 10%;
}
.btn {
  background-color: #ff5d0d;
}

@media (max-width: 376px) {
  .col-left h1 {
    font-size: 25px;
  }
  .col-left p {
    font-size: 14px;
  }
}

@media (min-width: 377px) and (max-width: 662px) {
  .col-left h1 {
    font-size: 30px;
  }
  .col-left p {
    font-size: 17px;
  }
}
/* .row {
  height: 600px;
  margin-top: 14%;
  
  box-shadow: 15px 15px 15px 2px #524f4f;
}
.col-left {
  padding-top: 20%;
  color: white;
  height: 100%;
  
}

.col-right {
  padding-top: 10%;
  background-color: #3e3e3e;
  height: 100%;
  
} */
</style>