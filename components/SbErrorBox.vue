<template>
  <div class="sb-alert" v-if="messages">
    <div :key="key" v-for="(error, key) in messages">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages'],

  data: function() {
    return {

    }
  }
}
</script>
