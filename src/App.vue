<template>
  <div>
    <Alert message="Hay un error en la captura" />
    <Form />
  </div>
</template>

<script>
import Alert from './components/Alert.vue';
import Form from './components/Form.vue';
export default {
  name: 'App',
  components: { Alert, Form }
};
</script>
