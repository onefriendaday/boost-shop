import axios from 'axios'
import Vue from 'vue'

const Client = {
  install () {
    if (!Vue.prototype.$storeapi) {
      let endpoint = 'capi.storyblok.com'

      Vue.prototype.$storeapi = function(storeContext) {
        let store = this.$store || storeContext
        let client = axios.create({
          baseURL: 'https://' + endpoint + '/v1/',
          withCredentials: true,
          headers: {
            'Authorization': 'Token token=' + store.state.token,
            'Locale': store.state.locale,
            'Currency': store.state.currency
          }
        })

        client.cache = {
          categories: []
        }

        client.getCategoryBySlug = function(slug) {
          return new Promise((resolve) => {
            if (!this.cache.categories.length) {
              this.get('categories')
                  .then((res) => {
                    this.cache.categories = res.data
                    let category = this.cache.categories.filter((category) => { return slug == category.slug })
                    resolve(category[0])
                  })
            } else {
              let category = this.cache.categories.filter((category) => { return slug == category.slug })
              resolve(category[0])
            }
          })
        }

        return client
      }
    }
  }
}

Vue.use(Client)

export default ({ app }, inject) => {
  app.$storeapi = Vue.prototype.$storeapi
}
