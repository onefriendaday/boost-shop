<template>
  <div></div>
</template>

<script>
import store from '../libs/store'
import EventBus from '../libs/EventBus'

export default {
  data: function() {
    return {
      resolvedEvents: {}
    }
  },

  mounted() {
    this.loadCheckout()
    this.loadCustomer()
  },

  methods: {
    loadCheckout() {
      let uuid = store.get('uuid')

      if (uuid !== null && uuid !== '') {
        this.$storeapi().get(`checkouts/${uuid}`)
          .then((res) => {
            this.$store.commit('setCheckout', res.data)

            if (this.$store.state.checkout.status == 'Closed') {
              this.$store.commit('setCheckout', {})
              store.set('uuid', '')
            }
          })
          .catch((error) => {
            if (error.response.status === 404) {
              store.set('uuid', '')
            }
          })
      }
    },

    loadCustomer() {
      this.$storeapi().get('customer_accounts/me')
      .then((res) => {
        this.$store.commit('setCustomer', res.data)
        this.$store.commit('setLoggedIn', true)
        this.$store.commit('setCheckingUserStatus', false)
        EventBus.resolve('customerLoaded')
      })
      .catch((error) => {
        this.$store.commit('setCustomer', {})
        this.$store.commit('setLoggedIn', false)
        this.$store.commit('setCheckingUserStatus', false)
      })
    }
  }
}

</script>

<style lang="scss">
  @import '../scss/commerce/styles.scss';
</style>
