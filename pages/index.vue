<template>
  <div>
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: {
        content: {
          component: 'sb-page'
        }
      }
    }
  }
}
</script>

<style>

</style>
