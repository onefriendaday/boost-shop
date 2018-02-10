<template>
  <div class="cart-item">
    <div class="thumbnail">
      <img :src="cartItem.image | resize('200x240')" />
    </div>
    <div class="content">
      <div class="title">
        <span v-if="cartItem.meta_data">{{ cartItem.meta_data.name }}</span>
        <span v-else>{{ cartItem.sku }}</span>
      </div>
      <span class="price">{{ cartItem.value * cartItem.quantity | currency(currency) }}</span>
      <div class="sb-cart-item__options">
        <ul>
          <li :key="key" v-for="(option, key) in cartItem.options">{{key}}: {{option[0]}}</li>
        </ul>
      </div>
    </div>
    <div class="actions">
      <input class="qty" type="number" :value="cartItem.quantity" min="0" aria-label="Quantity">
      <a v-if="!isOrder" href="#" v-on:click.prevent="remove(cartItem.id)" class="remove" aria-label="Remove item from cart">
        <span aria-hidden="true">
          <svg version="1.1" class="svg close" x="0px" y="0px" width="45px" height="45px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812   22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812 "></polygon>
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import store from '../libs/store'

export default {
  props: ['cartItem', 'isOrder', 'currency'],

  methods: {

    updateQuantity(id, e) {
      let uuid = store.get('uuid')

      let orderItem = {
        quantity: e.currentTarget.value
      }

      this.$storeapi.put(`/checkouts/${uuid}/order_items/${id}`, orderItem)
        .then((res) => {
          this.$store.commit('setCheckout', res.data.checkout)
        })
        .catch((error) => {
          console.log(error)
          this.$store.commit('setErrors', error.response.data)
        })
    },

    remove(id) {
      let uuid = store.get('uuid')

      this.$storeapi().delete(`/checkouts/${uuid}/order_items/${id}`)
        .then((res) => {
          this.$store.commit('setCheckout', res.data.checkout)
        })
        .catch((error) => {
          console.log(error)
          this.$store.commit('setErrors', error.response.data)
        })
    }
  }
}
</script>
