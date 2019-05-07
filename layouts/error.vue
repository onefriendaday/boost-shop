<template>
  <div id="section-404" class="site-box-container container--fullscreen">
    <div class="site-box box--bigger lap--box--small-fl box--typo-big box--center-align box--column-flow box__heading box--add-hr box--404 fix-me-with-height-hard active" data-order="0" style="height: 341px; min-height: 341px;">
      <div class="site-box-content">
        <h1>The page you’re looking for could not be found</h1>
        <p>Go to the <nuxt-link to="/">homepage</nuxt-link></p>
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
