import { createStore } from "vuex"

export default createStore({
  state: {
    inVoiceModal: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.inVoiceModal = !state.inVoiceModal
    },
  },
  actions: {},
  modules: {},
})
