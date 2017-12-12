import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialogue: false,
    counter: 0, // for later
  },
  getters: {
    getDialogueBool: state => state.dialogue,
  },

});