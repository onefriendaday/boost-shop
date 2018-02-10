<template>
  <div>
    <sb-header></sb-header>
    <main class="wrapper main-content" id="main" role="main">
      <nuxt />
    </main>
    <sb-footer></sb-footer>
    <sb-global></sb-global>
    <portal-target name="fullscreen"></portal-target>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
