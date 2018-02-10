import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: '3gh0SOQl9uGiFhDk0OQCBQtt',
      language: 'en',
      locale: 'en',
      currency: 'EUR',
      checkout: {
        order_items: []
      },
      customer: {},
      loggedIn: false,
      checkingUserStatus: true,
      settings: {
        main_navi: []
      },
      errors: [],
      locales: ['en']
    },
    mutations: {
      setSettings (state, settings) {
        state.settings = settings
      },
      setLanguage (state, language) {
        if (state.locales.indexOf(language) !== -1) {
          state.locale = language
        }
      },
      setErrors (state, v) { state.errors = v },
      setCheckout (state, v) { state.checkout = v },
      setCustomer (state, v) { state.customer = v },
      setLoggedIn (state, v) { state.loggedIn = v },
      setCheckingUserStatus (state, v) { state.checkingUserStatus = v }
    },
    actions: {
      loadSettings ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
          version: context.version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      }
    }
  })
}

export default createStore
