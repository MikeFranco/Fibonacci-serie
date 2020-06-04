<template>
  <div class="alert">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      class="alert"
    >
      <p>{{ message }}</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <!-- 
      <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button> -->
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
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