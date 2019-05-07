<template>
  <div>
    Configuration
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
    }
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(this.structuredData) }
      ]
    }
  },
  asyncData (context) {
    let roomleApi = axios.create({
      baseURL: 'https://api.roomle.com/v2/'
    })

    let token = '03-MjAxOC0wMS0yNlQxMDozMzoxMC4yNTBaO2Fub255bW91cztzdG9yeWJsb2s='
    let roomleId = context.params.slug
    let productId = context.query.id

    return roomleApi.get(`configurations/${roomleId}`, {
      token: token,
      apiKey: 'storyblok',
      currentTenant: 9
    }).then((res) => {
      console.log(res.data.configuration.parts)
      let partListObj = JSON.parse(res.data.configuration.parts)
      let partList = partListObj.fullList

      let total = partList
        .map((elem) => { return (elem.price || 0) * (elem.count || 1) })
        .reduce((a, b) => a + b, 0)
        .toFixed(2)

      let skus = partList.map((elem) => { return elem.articleNr })

      return {
        structuredData: {
          '@type': 'ProductInfo',
          '@id': 'Testproduct',
          sku: 'Testproduct',
          price: parseFloat(context.query.price),
          parts: [
            { quantity: 1, product_id: 240059, url: 'http://4c9ef9f0.ngrok.io/' }
          ]
        }
      }
    }).catch((res) => {
      console.log(res)
      if (res.response) {
        context.error({ statusCode: res.response.status, message: res.response.data })
      } else {
        context.error({ statusCode: 500, message: res })
      }
    })
  }
}
</script>
