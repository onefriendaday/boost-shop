<template>
<div id="site-section-collection" class="site-section mount-products mount-images">
  <div id="section-collection" class="site-box-container container--fullscreen" data-handle="furniture">
    <div v-slidein class="site-box box--big lap--box--small-fl box--typo-big box--center-align box--column-flow box__heading box--add-hr  fix-me-with-height-hard " data-order="0" data-product-resize="fill" data-size="6">
      <div class="site-box-content  lap--dark ">
        <h1 class="title  lap--dark ">
          {{ category.name }}
        </h1>
        <div class="lap--dark">
          <div>
            {{ category.excerpt }}
          </div>
        </div>
      </div>
      <span class="site-box-background with-image hide lap--show" :style="'background-image: url(' + image + ');'" aria-hidden="true"></span>
    </div>
    <div v-slidein class="site-box box--big lap--hide box--typo-big box--center-align box--column-flow box--no-padding fix-me-with-height box__collection_image" data-order="0">
      <span class="site-box-background" :style="'background-image: url(' + image + ');'" aria-hidden="true"></span>
    </div>
    <div :key="product.id" v-for="product in products" v-slidein class="site-box box--small box--typo-small lap--box--small-lg box--center-align box--no-padding box--column-flow box__collection" data-order="1">
      <sb-product-item :product="product"></sb-product-item>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['products', 'category'],
  computed: {
    image() {
      if (!this.category.images.length) {
        return null
      }
      return '//img3.storyblok.com/' + this.category.images[0].filename
    }
  }
}
</script>
