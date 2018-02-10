import Vue from 'vue'

export default new Vue({
  data() {
    return {
      resolvedEvents: {}
    }
  },
  methods: {
    waitUntil(event) {
      return new Promise((resolve, reject) => {
        if (this.resolvedEvents[event]) {
          return resolve()
        }

        var ready = function() {
          this.$off(event, this)
          resolve()
        }

        this.$on(event, ready)
      })
    },

    resolve(event) {
      this.resolvedEvents[event] = true
      this.$emit(event)
    }
  }
})
