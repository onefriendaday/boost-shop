<template>
  <div class="site-box-content">
    <nuxt-link :to="'/products/' + product.slug" class="product-item style--one regular color--light">
      <div class="box--product-image primary">
        <sb-image :images="product.images" :index="0"></sb-image>
      </div>
      <div class="box--product-image secondary">
        <sb-image :images="product.images" :index="1"></sb-image>
      </div>
      <div class="caption">
        <div>
          <h3><span class="overflowed">{{ product.name }}</span></h3>
          <span class="price">
            <span class="overflowed" v-if="product.saleprice > 0">
              {{ product.saleprice | currency(product.currency) }}
              <del>{{ product.price | currency(product.currency) }}</del>
            </span>
            <span class="overflowed" v-else>
              {{ product.price | currency(product.currency) }}
            </span>
          </span>
          <span aria-hidden="true">
            <span class="longarrow">
              <span class="overflowed">
                <svg version="1.1" class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 10" style="enable-background:new 0 0 41 10; width: 41px; height: 10px;" xml:space="preserve">
                  <polygon points="0,4 35,4 35,0 41,5 35,10 35,6 0,6 "/>
                </svg>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="product-badge sale" v-if="product.saleprice > 0"><span>Sale</span></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
