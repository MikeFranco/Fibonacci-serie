<template>
  <b-container class="instructions">
    <b-row align-h="center">
      <b-col cols="4" md="4">
        <h1>A ver que sale</h1>
      </b-col>
      <b-col cols="4" md="4" align-self="center">
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
.instructions {
  background-color: cyan;
  height: 500px;
}
</style>