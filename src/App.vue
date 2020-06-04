<template id="main">
  <div>
    <Alert message="Hay un error en la captura" />
    <Form />
  </div>
</template>

<script>
import Alert from './components/Alert.vue';
import Form from './components/Form.vue';
export default {
  components: { Alert, Form }
};
</script>

<style scoped>
#main {
  background-color: rgba(18, 75, 197, 0.856);
  height: 100%;
}
</style>
