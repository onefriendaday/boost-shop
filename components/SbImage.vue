<template>
  <img :src="small"
       :data-srcset="srcset"
       data-sizes="auto"
       class="lazyload" />
</template>

<script>
export default {
  props: ['images', 'index'],
  computed: {
    image() {
      if (!this.images[this.index]) {
        return 'https://a.storyblok.com/f/39898/500x500/61c220429b/placeholder.gif'
      }
      return this.images[this.index].filename
    },

    small() {
      return `//img3.storyblok.com/480x0/${this.image}`
    },

    medium() {
      return `//img3.storyblok.com/720x0/${this.image}`
    },

    large() {
      return `//img3.storyblok.com/960x0/${this.image}`
    },

    huge() {
      return `//img3.storyblok.com/1440x0/${this.image}`
    },

    srcset() {
      return `${this.small} 480w, ${this.medium} 720w, ${this.large} 960w, ${this.huge} 1440w`
    }
  }
}
</script>
