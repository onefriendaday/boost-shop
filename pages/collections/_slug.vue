<template>
  <div>
    <sb-collections :category="category" :products="products"></sb-collections>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let category = await context.app.$storeapi(context.store).getCategoryBySlug(context.params.slug)
    if (!category) {
      return context.error({ statusCode: 404, message: 'Category not found' })
    }
    let products = await context.app.$storeapi(context.store).get('products', { params: { filter_by: category.id } })

    return { category: category, products: products.data }
  }
}
</script>
