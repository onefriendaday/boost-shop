import Vue from 'vue'
import PortalVue from 'portal-vue'
import Accounting from 'accounting'

Vue.use(PortalVue)

Vue.directive('slidein', {
  inserted: function (el) {
    setTimeout(() => {
      let className = 'active'

      if (el.classList) {
        el.classList.add(className)
      } else {
        el.className += ' ' + className
      }

    }, 0)
  }
})

Vue.filter('resize', function(image, option) {
  if (!image) {
    return 'https://a.storyblok.com/f/39898/500x500/61c220429b/placeholder.gif'
  }
  var imageService = '//img3.storyblok.com/'
  return imageService + (option ? (option + '/') : '') + image
})

Vue.filter('currency', function(value, currency) {
  let currencies = {
    'HKD': 'HK$',
    'TWD': 'TW$',
    'USD': '$',
    'EUR': '€'
  }
  let _currency = currency || 'USD'
  return Accounting.formatMoney(value, currencies[_currency] || '$', 2, ',', '.')
})

Vue.filter('t', function(value) {
  var translations = {}

  if (translations[value]) {
    return translations[value]
  }
  return value
})
