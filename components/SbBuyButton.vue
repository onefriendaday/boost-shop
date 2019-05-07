<template>
  <div class="sb-buy-btn">
    <input v-if="!hideQuantity" ref="input" class="sb-quantity-input__input" id="quantity" name="quantity" v-bind:value="quantity" v-on:input="updateValue($event.target.value)">
    <button :class="{'sb-buy-btn--loading': loading}" :disabled="outOfStock" class="button color" @click.prevent="addToCart">
      <span class="sb-buy-btn__loading">{{ $t('add_to_cart_loading') }}</span>
      <span class="sb-buy-btn__text">{{ $t('add_to_cart') }}</span>
    </button>
    <div v-if="product.type == 'variantable'">
      <div class="sb-buy-btn__hint" v-if="variant !== null && outOfStock">
        {{ $t('out_of_stock') }}
      </div>
      <div class="sb-buy-btn__hint" v-if="variant === null">
        {{ $t('choose_variant') }}
      </div>
    </div>
    <div v-else>
      <div class="sb-buy-btn__hint" v-if="outOfStock">
        {{ $t('out_of_stock') }}
      </div>
    </div>
  </div>
</template>

<script>
import store from '../libs/store'

export default {
  props: ['product', 'hideQuantity', 'configId', 'price'],

  data() {
    return {
      loading: false,
      stock: 0,
      productId: null,
      quantity: 1,
      outOfStock: false
    }
  },

  created() {
    this.stock = this.product.quantity
    this.productId = this.product.id
  },

  methods: {
    addToCart() {
      this.loading = true
      let id = this.productId
      let uuid = store.get('uuid')

      if (uuid) {
        this.addOrderItem(id, uuid)
      } else {
        this.$storeapi().post('checkouts', {
            currency: this.$store.state.currency,
            origin: this.$store.state.country
          })
          .then((res) => {
            if (res.data.uuid) {
              store.set('uuid', res.data.uuid)
              this.addOrderItem(id, res.data.uuid)
            } else {
              this.loading = false
            }
          })
          .catch((error) => {
            this.loading = false
            this.$store.state.errors = error.response.data
          })
      }
    },

    addOrderItem(id, uuid) {
      let orderItem = {
        url: `https://sb-commerce.now.sh/configuration/${this.configId}?id=${id}&price=${this.price}`,
        sku: 'Testproduct',
        value: this.price,
        quantity: this.quantity,
        meta_data: {
          name: 'Testproduct',
          image: '//img3.storyblok.com/1440x0/http://assets.storeblok.com/s/42570/furniture2.jpg'
        }
      }

      this.$storeapi().post(`checkouts/${uuid}/order_items`, orderItem)
        .then((res) => {
          this.$store.state.checkout = res.data.checkout
          this.$store.state.minicartOpen = true
          this.loading = false

          jQuery("body").addClass("sidebar-move")
          jQuery("#site-overlay").addClass("active")
          jQuery("#site-nav--mobile").addClass("show-cart").addClass("active")
        })
        .catch((error, res) => {
          this.loading = false
          this.$store.state.errors = error.response.data
        })
    },

    updateValue(quantity) {
      quantity = parseInt(quantity)

      if (isNaN(quantity)) {
        quantity = 1
      }

      if (quantity < 1) {
        this.quantity = 1
      } else {
        this.quantity = quantity
        this.$refs.input.value = quantity
      }
    }
  }
}
</script>

<style lang="scss">
.sb-buy-btn__loading {
  display: none;
}

.sb-buy-btn--loading {
  .sb-buy-btn__loading {
    display: block;
  }

  .sb-buy-btn__text {
    display: none;
  }
}

.sb-buy-btn__hint {
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.4;
}
</style>
