import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resultsArray: []
  },
  getters: {
    getResults: state => {
      return state.resultsArray;
    }
  },
  mutations: {
    addNewResult(state, newValue) {
      state.resultsArray.push(newValue);
    }
  }
});
