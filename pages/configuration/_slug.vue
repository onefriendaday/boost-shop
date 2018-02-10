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
      let partList = JSON.parse(res.data.configuration.parts)
      let total = partList
        .map((elem) => { return elem.price * elem.count })
        .reduce((a, b) => a + b, 0)

      let skus = partList.map((elem) => { return elem.articleNr })

      return {
        structuredData: {
          '@type': 'ProductInfo',
          '@id': 'Testproduct',
          sku: 'Testproduct',
          image: '//img3.storyblok.com/1440x0/http://assets.storeblok.com/s/42570/furniture2.jpg',
          price: 10,
          parts: [
            { quantity: 1, product_id: 240059, url: 'http://4c9ef9f0.ngrok.io/' }
          ]
        }
      }
    }).catch((res) => {
      if (res.response) {
        context.error({ statusCode: res.response.status, message: res.response.data })
      } else {
        context.error({ statusCode: 500, message: res })
      }
    })
  }
}
</script>
