<template>
  <div class="sb-order-summary" v-if="order">
    <div v-if="!order.order_items || !order.order_items.length">
      {{ $t('cart_empty') }}
    </div>
    <div v-else>
      <div class="sb-products">
        <div class="cart-items">
          <transition-group name="list" tag="div">
            <sb-cart-item :is-order="isOrder" :currency="order.currency" :key="cartItem.id" v-for="cartItem in orderItems" :cart-item="cartItem"></sb-cart-item>
          </transition-group>
        </div>
      </div>
      <div class="sb-sums">
        <div class="sb-summary__row">
          <div class="sb-price-title">
            {{ $t('subtotal') }}
          </div>
          <div class="sb-summary__price">
            {{ order.subtotal | currency(order.currency) }}
          </div>
        </div>
        <div class="sb-summary__row" v-if="order.coupon_discount">
          <div class="sb-price-title">
            {{ $t('coupon_discount') }}
          </div>
          <div class="sb-summary__price">
            -{{ order.coupon_discount | currency(order.currency) }}
          </div>
        </div>
        <div class="sb-summary__row" v-if="order.shipping">
          <div class="sb-price-title">
            {{ $t('shipping') }}
          </div>
          <div class="sb-summary__price">
            {{ order.shipping | currency(order.currency) }}
          </div>
        </div>
        <div class="sb-summary__row" v-if="order.tax">
          <div class="sb-price-title">
            {{ $t('tax') }}
          </div>
          <div class="sb-summary__price">
            {{ order.tax | currency(order.currency) }}
          </div>
        </div>
        <div class="sb-summary__row">
          <div class="sb-price-title">
            <strong>{{ $t('grand_total') }}</strong>
          </div>
          <div class="sb-summary__price">
            <strong>{{ order.total | currency(order.currency) }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['order', 'isOrder'],

  computed: {
    orderItems() {
      return this.order.order_items.filter((item) => {
        return item.parent_item_id == null
      })
    },

    itemCount() {
      if (this.order !== null && typeof this.order.order_items !== 'undefined') {
        return this.order.order_items.length
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
