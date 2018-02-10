<template>
  <div id="section-cart" class="site-box-container container--fullscreen">

    <div class="site-box box--big box--padded box--column-flow box--add-hr active" data-order="0">
      <div class="site-box-content site-box-content--full">
        <h1 class="sb-checkout__title title">Checkout</h1>
        <sb-checkout-steps v-if="checkout.order_items.length > 0"></sb-checkout-steps>
      </div>
    </div>
    <div class="site-box box--big lap--box--bigger box--column-flow box__cart active" data-order="1">
      <div class="site-box-content fix-me-with-margin">
        <sb-order-summary :order="checkout" v-if="checkout.order_items.length > 0" ></sb-order-summary>
      </div>
    </div>

  </div>
</template>

<script>
import store from '../libs/store'

export default {
  data: function() {
    return {
      couponCode: ''
    }
  },

  computed: {
    checkout: function() {
      return this.$store.state.checkout
    },

    itemCount: function() {
      return this.$store.state.checkout.order_items.length
    }
  },

  created() {

  },

  methods: {
    emptyCart() {
      this.$store.state.checkout = {}
      store.set('uuid', null)
    },

    applyCoupon() {
      this.$storeapi().post(`/checkouts/${this.$store.state.checkout.uuid}/coupons`, {
          code: this.couponCode
        })
        .then((res) => {
          this.$store.state.checkout = res.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            this.$store.state.errors = ['This coupon could not be found']
          } else {
            this.$store.state.errors = error.response.data
          }
          console.log(error)
        })
    }
  }
}
</script>

<style>
.sb-checkout__title {
  font-size: 2rem;
  margin: 40px 0 20px 0;
  width: 100%;
}
</style>
