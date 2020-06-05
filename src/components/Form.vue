<template>
  <div class="background-div">
    <div class="opacity">
      <b-container>
        <b-row class="text-center row-main mx-2">
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
            <b-input-group>
              <b-form-input
                placeholder="Ingresa el número"
                v-model="number"
                type="number"
                @keyup.enter="getFibonacciNumber(number)"
              ></b-form-input>
              <b-input-group-append>
                <b-button @click="getFibonacciNumber(number)"
                  >Calcular</b-button
                >
              </b-input-group-append>
            </b-input-group>
            <b-col cols="4" class="history-div">
              <div class="results">
                <div v-if="results.length > 0">
                  <h3>Historial: </h3>
                  <h5 v-for="(result, index) in results" :key="index"
                    >Resultado de {{ result[0] }}: {{ result[1] }}</h5
                  >
                </div>
                <h3 v-else>Aún no hay resultados </h3>
              </div>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
      <Alert message="Por favor, ingresa un valor mayor a 0" />
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getResults']),
    results() {
      return this.getResults;
    }
  },
  components: {
    Alert
  },
  data() {
    return {
      number: ''
    };
  },
  methods: {
    getFibonacciNumber(number) {
      if (number >= 0) {
        this.$store.commit('addNewResult', [number, this.fibonacci(number)]);
        this.number = '';
      } else {
        this.$store.commit('toggleAlert');
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
.background-div::after {
  background-color: #c4bbbb;
  background-image: url('../assets/fibonacci.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -100;
  opacity: 0.5;
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

.results {
  margin-top: 25%;
  height: 35vh;
  width: 50vh;
  overflow-y: auto;
}

@media (min-width: 100px) and (max-width: 320px) {
  .history-div {
    padding: 0;
  }
  .results {
    width: 20vh;
  }
  .col-left h1 {
    font-size: 22px;
  }
  .col-left p {
    font-size: 14px;
  }
}

@media (min-width: 321px) and (max-width: 360px) {
  .history-div {
    padding: 0;
  }
  .results {
    width: 20vh;
  }
  .col-left h1 {
    font-size: 25px;
  }
  .col-left p {
    font-size: 14px;
  }
}
@media (min-width: 361px) and (max-width: 376px) {
  .history-div {
    padding: 0;
  }
  .results {
    width: 17vh;
  }
  .col-left h1 {
    font-size: 25px;
  }
  .col-left p {
    font-size: 14px;
  }
}
@media (min-width: 377px) and (max-width: 662px) {
  .history-div {
    padding: 0;
  }
  .results {
    width: 19vh;
  }
  .col-left h1 {
    font-size: 30px;
  }
  .col-left p {
    font-size: 17px;
  }
}

@media (min-width: 662px) and (max-width: 1024px){
  .results {
    width: 28vh;
  }
}
</style>