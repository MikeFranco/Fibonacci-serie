<template>
  <div class="alert">
    <b-alert
      :show="errorAlert"
      dismissible
      fade
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      class="alert"
    >
      <p>{{ message }}</p>
    </b-alert>
    <!-- 
      <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button> -->
  </div>
</template>

<script>
export default {
  props: ['message', 'errorAlert'],
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },
  watch: {
    errorAlert: 'showAlert'
  }
};
</script>

<style scoped>
.alert {
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 42%;
}
</style>