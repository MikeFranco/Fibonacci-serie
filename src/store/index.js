import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resultsArray: [],
    showAlert: false
  },
  getters: {
    getResults: state => {
      return state.resultsArray;
    },
    getAlert: state => {
      return state.showAlert;
    }
  },
  mutations: {
    addNewResult(state, newValue) {
      state.resultsArray.push(newValue);
    },
    toggleAlert(state){
      state.showAlert = !state.showAlert;
    }
  }
});