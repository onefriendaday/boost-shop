<template>
  <div>
    <sb-product :product="product"
                :related-products="relatedProducts"></sb-product>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let products = await context.app.$storeapi(context.store)
      .get(`products`, { params: { slug: context.params.slug } })

    if (!products.data.length) {
      return context.error({ statusCode: 404, message: 'Category not found' })
    }

    let product = products.data[0]
    let relatedProducts = await context.app.$storeapi(context.store)
      .get('products', { params: { per_page: 4, filter_by: product.category_ids[0] } })

    return { product: products.data[0], relatedProducts: relatedProducts.data }
  }
}
</script>
