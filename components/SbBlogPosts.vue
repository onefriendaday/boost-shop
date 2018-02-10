<template>
<div id="site-section-blog" class="site-section mount-blog">
  <div class="site-box-container container--fullscreen box--can-stick">
    <div class="site-box box--big lap--box--small-fl box--typo-big box--center-align box--column-flow box__heading " data-order="0">
      <div class="site-box-content fix-me-with-margin">
        <h1 class="title">
          News
        </h1>
        <div class="meta tags">
          <a href="/blogs/news" class="active">All</a>
          <a href="/blogs/news/tagged/business">Business</a>
          <a href="/blogs/news/tagged/inspiration">Inspiration</a>
          <a href="/blogs/news/tagged/integrity">Integrity</a>
          <a href="/blogs/news/tagged/solutions">Solutions</a>
          <a href="/blogs/news/tagged/work">Work</a>
        </div>
      </div>
    </div>
    <div class="site-box box--big lap--box--bigger box--typo-big box--center-align box--column-flow box--no-padding box__blog scroll-movers-parent" data-order="1">
      <div class="site-box-content">
        <a class="blog-item img-right" href="/blogs/news/no-one-understands-this-better-than-you" title="The Tirpitz Museum" >
          <div class="content no-image ">
            <div>
              <div class="header">
                <h3 class="title">The Tirpitz Museum</h3>
                <p class="meta">
                  by  Ruben Bristian Tarnita  on  <time datetime="2017-05-04T08:06:00Z"> May 04, 2017 </time>
                </p>
              </div>
              <p class="excerpt">
                The Tirpitz museum near Blåvand designed by architects BIG - Bjarke Ingels Group. Featuring Palissade, Soft Edge, New Order, Loop Stand and CPH Deux. The Tirpitz bunker that...
              </p>
            </div>
          </div>
        </a>
        <a class="blog-item img-right" href="/blogs/news/how-to-live-and-work-with-integrity" title="HAY Kitchen Market" >
          <div class="content no-image ">
            <div>
              <div class="header">
                <h3 class="title">HAY Kitchen Market</h3>
                <p class="meta">
                  by  Ruben Bristian Tarnita  on  <time datetime="2017-04-25T07:05:00Z"> Apr 25, 2017 </time>
                </p>
              </div>
              <p class="excerpt">
                The most essential tools for today’s kitchen curated by Mette Hay together with the Danish chef Frederik Bille Brahe. The HAY Kitchen Market launched globally at the...
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="site-sharing rss out-with-you">
    <a href="/blogs/news.atom" target="_blank" aria-label="Follow our RSS feed" title="Follow our RSS feed">
      <span aria-hidden="true">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 22 22" style="enable-background:new 0 0 22 22; width: 22px; height: 22px;" xml:space="preserve">
          <circle cx="4.4" cy="17.3" r="2.7"/>
          <path d="M20.7,20H17c0-8.5-6.9-15.4-15.4-15.4V1C12.1,1,20.7,9.5,20.7,20z"/>
          <path d="M14.3,20h-3.6c0-5-4.1-9-9-9V7.3C8.7,7.3,14.3,13,14.3,20z"/>
        </svg>
      </span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    CUBER.Main.animate()
  }
}
</script>
