<template>
  <div class="alert">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ message }}</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['message'],
  computed: {
    ...mapGetters(['getAlert']),
    getAlertVariable() {
      return this.getAlert;
    }
  },
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      dissmissableAlert: false
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dissmissableAlert = true;
      this.dismissCountDown = this.dismissSecs
    }
  },
  watch: {
    getAlertVariable: 'showAlert'
  }
};
</script>

<style scoped>
.alert {
  max-width: 400px;
  position: fixed;
  top: 0;
  left: 42%;
}
</style>