<template>
<div class="site-section">
  <div id="site-section-product" class="site-section mount-product mount-images">
    <div id="section-product" class="site-box-container container--fullscreen box--can-stick" itemscope itemtype="//schema.org/Product" data-collection="furniture" data-gallery-size="5">
      <div v-slidein class="site-box box--big lap--box--bigger box--typo-big box--no-padding box__product-gallery scroll" data-lap="box--bigger" data-order="0">
        <div class="site-box-content">
          <div :key="index" v-for="(image, index) in product.images" class="box--product-image gallery-item" :data-index="index" >
            <sb-image :images="[image]" :index="0"></sb-image>
          </div>
        </div>
        <div id="product-zoom-in" class="product-zoom out-with-you no-sharing" aria-label="Zoom in" title="Zoom in">
          <span class="zoom-in" aria-hidden="true">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 36 36" style="enable-background:new 0 0 36 36; width: 36px; height: 36px;" xml:space="preserve">
              <polyline points="6,14 9,11 14,16 16,14 11,9 14,6 6,6 "/>
              <polyline points="22,6 25,9 20,14 22,16 27,11 30,14 30,6 "/>
              <polyline points="30,22 27,25 22,20 20,22 25,27 22,30 30,30 "/>
              <polyline points="14,30 11,27 16,22 14,20 9,25 6,22 6,30 "/>
            </svg>
          </span>
        </div>
      </div>
      <div v-slidein class="site-box box--big lap--box--bigger box--typo-big box--center-align box--column-flow box__product-content"  data-lap="box--bigger" data-order="1">
        <div class="site-box-content fix-me-with-margin">
          <h1 itemprop="name">{{ product.name }}</h1>
          <p id="product-vendor" itemprop="brand">by Roomle</p>
          <span id="price">
            <div class="product-badge sale" v-if="product.saleprice > 0"><span>Sale</span></div>
            <span v-if="product.saleprice > 0">
              <span class="product-price">{{ product.saleprice | currency(product.currency) }}</span>
              <span class="info">{{ product.price | currency(product.currency) }}</span>
            </span>
            <span class="product-price" v-else>
              {{ product.price | currency(product.currency) }}
            </span>
          </span>
          <div class="offers" itemprop="offers" itemscope itemtype="//schema.org/Offer">
            <meta itemprop="price" content="USD">
            <meta itemprop="priceCurrency" content="25000">
            <link itemprop="availability" href="//schema.org/InStock">
            <form action="/cart/add" method="post" enctype="multipart/form-data" id="add-to-cart" class="style--minimal" data-type="overlay">
              <div class="product-variant selector-wrapper hidden">
                <label for="product-size">Size</label>
                <select class="product-variants" id="product-size">
                  <option selected>Small</option>
                  <option >Medium</option>
                  <option >Large</option>
                </select>
              </div>
              <select id="productSelect" name="id" class="styled" style="display: none;">
                <option  selected="selected"  value="29584845067">
                  Small
                </option>
                <option  value="29584845131">
                  Medium
                </option>
                <option  value="29584845195">
                  Large
                </option>
              </select>
              <div class="cart-functions">
                <div class="product__configure">
                  <h3>Configure this product live in 3D</h3>
                  <button type="button" @click.prevent="configure" class="button color color--highlight">
                    <span>Configure</span>
                    <svg viewBox="0 0 32.19 29.5" width="64" height="64"><path d="M21,22.36c-1.57,0-1.87,1.36-1.87,3s0.17,3,1.87,3,1.87-1.36,1.87-3S22.59,22.36,21,22.36Z" transform="translate(-9 -15.26)"></path><path d="M31.1,22.36c-1.57,0-1.87,1.36-1.87,3s0.17,3,1.87,3S33,27,33,25.36,32.66,22.36,31.1,22.36Z" transform="translate(-9 -15.26)"></path><path d="M26,15.26c-5.86,0-17,.73-17,3.48V31.89a1.16,1.16,0,0,0,.17.49c1,2.06,9.46,3,16.85,3,5.86,0,17-.73,17-3.48V18.74C43,16,31.86,15.26,26,15.26ZM21,30.11c-3.46,0-4.69-2.14-4.69-4.79S17.6,20.53,21,20.53s4.69,2.14,4.69,4.79S24.47,30.11,21,30.11Zm10.08,0c-3.46,0-4.69-2.14-4.69-4.79s1.28-4.79,4.69-4.79,4.69,2.14,4.69,4.79S34.55,30.11,31.1,30.11Z" transform="translate(-9 -15.26)"></path><path d="M31.1,28.36c-1.7,0-1.87-1.36-1.87-3s0.3-3,1.87-3,1.87,1.36,1.87,3S32.8,28.36,31.1,28.36Z" transform="translate(-9 -15.26)"></path><path d="M21,28.36c-1.7,0-1.87-1.36-1.87-3s0.3-3,1.87-3,1.87,1.36,1.87,3S22.72,28.36,21,28.36Z" transform="translate(-9 -15.26)"></path></svg>
                  </button>
                </div>

                <sb-configurator v-if="cfgVisible" @close="cfgVisible = false"></sb-configurator>
                <sb-buy-button :product="product"
                               config-id="umdasch:Kassa006:AEA3FB722CDF285DDC951C65C1315E9A475DA7070AAC115A17E8E1A12158F75C"></sb-buy-button>
              </div>
            </form>
          </div>
          <div class="rte" itemprop="description">
            <p class="hide-when-small"><span style="color: #666666;"><em>This is a demonstration store.</em></span></p>
            <p class="hide-when-small">{{ product.excerpt }}</p>
            <p class="hide-when-small">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="section-related-products" class="site-box-container container--fullscreen">
      <div v-slidein class="site-box box--big lap--box--small-fl palm--box--small-lg box--typo-big box--center-align box--column-flow box__heading box--add-hr">
        <div class="site-box-content">
          <h4 class="title">You may also like</h4>
        </div>
      </div>
      <div v-slidein :key="product.id" v-for="product in relatedProducts" class="site-box box--small lap--box--small-lg box--center-align box--no-padding box--column-flow box__collection" data-order="1">
        <sb-product-item :product="product"></sb-product-item>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['product', 'relatedProducts'],

  data() {
    return {
      cfgVisible: false
    }
  },

  mounted() {
    CUBER.Product.unmount()
    CUBER.Product.mount()
  },

  methods: {
    configure() {
      this.cfgVisible = true
    }
  }
}
</script>
