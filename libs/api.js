import axios from 'axios'
let endpoint = 'capi.storyblok.com'

export default function(store) {
  let client = axios.create({
    baseURL: 'https://' + endpoint + '/v1/',
    withCredentials: true,
    headers: {
      'Authorization': 'Token token=' + store.state.token,
      'Locale': store.state.locale,
      'Currency': store.state.currency
    }
  })
  return client
}
