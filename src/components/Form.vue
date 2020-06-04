<template>
  <b-container>
    <b-row align-v="stretch">
      <b-col class="col-left" align-self="center">
        <h1>Serie Fibonacci</h1>
        <p
          >Ingresa cualquier número entero mayor a 0 y te diré cuál es el número
          inmediato de la serie de Fibonacci</p
        >
      </b-col>
      <b-col align-self="center" class="col-right">
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Ingresa el número"
          ></b-input>
          <b-button variant="primary">Calcular</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  height: 600px;
  margin-top: 14%;
  border-radius: 4%;
}
.col-left {
  background-color: blue;
  height: 100%;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
}

.col-right {
  background-color: red;
  height: 100%;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
}
</style>