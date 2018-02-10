<template>
<div id="block-section-header" class="block-section mount-header">
  <header id="site-header" class="site-header desktop-view--classic header-scroll">
    <!-- logo -->
    <h1 class="logo" itemscope itemtype="//schema.org/Organization">
      <a class="logo-img" href="/" itemprop="url">
      <img src="//a.storyblok.com/f/42571/246x36/93298de1a0/logo.png" alt="Logo" style="max-width: 123px;" />
      </a>
    </h1>
    <!-- menu -->
    <div id="site-nav--desktop" class="site-nav style--classic">
      <div class="site-nav-container portable--hide">
        <nav class="primary-menu">
          <ul class="main-menu link-list size-5">
            <li class="has-submenu collections-menu">
              <a  href="/collections/furniture">
                <span>Collections</span>
                <span class="icon-go go-next go-down">
                  <svg version="1.1" class="svg longarrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 10" style="enable-background:new 0 0 41 10; width: 41px; height: 10px;" xml:space="preserve">
                    <polygon points="0,4 35,4 35,0 41,5 35,10 35,6 0,6 "/>
                  </svg>
                </span>
              </a>
              <ul class="submenu">
                <li>
                  <nuxt-link @click="closeNav" to="/collections/furniture"><span>Furniture</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link @click="closeNav" to="/collections/furniture"><span>Accessories</span></nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/pages/about-us"><span>About Us</span></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs/news"><span>Blog</span></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/pages/faq"><span>FAQ</span></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/pages/contacts"><span>Contacts</span></nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <span id="site-search-handle" class="site-search-handle" aria-label="Open search" title="Open search">
        <a href="/search">
          <span class="search-menu" aria-hidden="true">
            <svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27; width: 24px; height: 27px;" xml:space="preserve">
              <path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"/>
              <rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8"/>
            </svg>
          </span>
        </a>
      </span>
      <span id="site-cart-handle" class="site-cart-handle overlay" aria-label="Open cart" title="Open cart">
        <a href="/checkout">
          <span class="cart-menu" aria-hidden="true">
            <svg version="1.1" class="svg cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27; width: 24px; height: 27px;" xml:space="preserve">
              <g>
                <path d="M0,6v21h24V6H0z M22,25H2V8h20V25z"/>
              </g>
              <g>
                <path d="M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z"/>
              </g>
            </svg>
            <span class="count-holder"><span class="count">{{ $store.state.checkout.order_items.length }}</span></span>
          </span>
        </a>
      </span>
      <button id="site-menu-handle" class="site-menu-handle hide portable--show" aria-label="Open menu" title="Open menu">
      <span class="hamburger-menu" aria-hidden="true"><span class="bar"></span></span>
      </button>
    </div>
  </header>
  <div id="site-nav--mobile" class="site-nav style--sidebar">
    <div id="site-navigation" class="site-nav-container">
      <div class="site-nav-container-last">
        <p class="title">Menu</p>
        <div class="top">
          <nav class="primary-menu">
            <ul class="main-menu link-list size-5">
              <li class="has-submenu collections-menu">
                <a  href="/collections/all">
                  <span>Collections</span>
                  <span class="icon-go go-next go-down">
                    <svg version="1.1" class="svg longarrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 10" style="enable-background:new 0 0 41 10; width: 41px; height: 10px;" xml:space="preserve">
                      <polygon points="0,4 35,4 35,0 41,5 35,10 35,6 0,6 "/>
                    </svg>
                  </span>
                </a>
                <ul class="submenu">
                  <li >
                    <nuxt-link to="/collections/furniture"><span>Furniture</span></nuxt-link>
                  </li>
                  <li >
                    <nuxt-link to="/collections/decoration"><span>Accessories</span></nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <a  href="/pages/about-us"><span>About Us</span></a>
              </li>
              <li>
                <a  href="/blogs/news"><span>Blog</span></a>
              </li>
              <li>
                <a  href="/pages/theme-features"><span>Theme Features</span></a>
              </li>
              <li>
                <a  href="/pages/faq"><span>FAQ</span></a>
              </li>
              <li>
                <a  href="/pages/contacts"><span>Contacts</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="to-bottom-content">
          <div class="site-social" aria-label="Follow us on social media">
            <a href="https://twitter.com/storyblok" target="_blank" aria-label="Twitter">
              <span class="icon regular" aria-hidden="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 22 22" style="enable-background:new 0 0 22 22; width: 22px; height: 22px;" xml:space="preserve">
                  <path d="M22,4.2c-0.8,0.4-1.7,0.6-2.6,0.7c0.9-0.6,1.6-1.4,2-2.5c-0.9,0.5-1.8,0.9-2.9,1.1c-0.8-0.9-2-1.4-3.3-1.4
                    c-2.5,0-4.5,2-4.5,4.5c0,0.4,0,0.7,0.1,1c-3.8-0.2-7.1-2-9.3-4.7C1.1,3.6,0.9,4.3,0.9,5.2c0,1.6,0.8,2.9,2,3.8c-0.7,0-1.4-0.2-2-0.6
                    c0,0,0,0,0,0.1c0,2.2,1.6,4,3.6,4.4C4.1,12.9,3.7,13,3.3,13c-0.3,0-0.6,0-0.8-0.1C3,14.7,4.7,16,6.7,16C5.1,17.3,3.2,18,1.1,18
                    c-0.4,0-0.7,0-1.1-0.1c2,1.3,4.4,2,6.9,2c8.3,0,12.8-6.9,12.8-12.8c0-0.2,0-0.4,0-0.6C20.6,5.9,21.4,5.1,22,4.2z"/>
                </svg>
              </span>
            </a>
            <a href="https://www.facebook.com/storyblok" target="_blank" aria-label="Facebook">
              <span class="icon regular" aria-hidden="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 22 22" style="enable-background:new 0 0 22 22; width: 22px; height: 22px;" xml:space="preserve">
                  <path d="M19.3,2H2.8C2.3,2,2,2.3,2,2.7v16.5C2,19.7,2.3,20,2.8,20h8.8v-6.8H9.3v-2.8h2.3V8.2
                    c0-2.3,1.5-3.5,3.5-3.5c1,0,1.8,0.1,2.1,0.1v2.4l-1.4,0c-1.1,0-1.4,0.5-1.4,1.3v1.9h2.8l-0.6,2.8h-2.3l0,6.8h4.8
                    c0.4,0,0.8-0.3,0.8-0.8V2.7C20,2.3,19.7,2,19.3,2z"/>
                </svg>
              </span>
            </a>
            <a href="https://plus.google.com/+storyblok" target="_blank" aria-label="Google Plus">
              <span class="icon regular" aria-hidden="true">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22; width: 22px; height: 22px;" xml:space="preserve">
                  <path d="M11.1,2.7c0.2,0.1,0.3,0.2,0.5,0.4c0.2,0.2,0.4,0.4,0.6,0.7c0.2,0.3,0.3,0.6,0.5,0.9c0.1,0.4,0.2,0.8,0.2,1.2
                    c0,0.9-0.2,1.6-0.6,2.1c-0.2,0.3-0.4,0.5-0.6,0.7c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.2,0.4-0.2,0.7
                    c0,0.3,0.1,0.5,0.2,0.6c0.1,0.2,0.3,0.3,0.4,0.4l0.8,0.7c0.5,0.4,1,0.9,1.4,1.4c0.4,0.5,0.6,1.2,0.6,2c0,1.2-0.5,2.2-1.6,3.1
                    c-1.1,0.9-2.7,1.4-4.8,1.4c-1.8,0-3.1-0.4-3.9-1.1C2.4,18.5,2,17.7,2,16.7c0-0.4,0.1-0.9,0.4-1.5c0.3-0.5,0.8-1,1.5-1.4
                    c0.8-0.4,1.7-0.7,2.6-0.9c0.9-0.1,1.6-0.2,2.2-0.2c-0.2-0.2-0.3-0.5-0.5-0.7c-0.2-0.3-0.2-0.6-0.2-0.9c0-0.2,0-0.4,0.1-0.5
                    c0.1-0.1,0.1-0.3,0.2-0.4c-0.3,0-0.6,0-0.8,0c-1.3,0-2.3-0.4-3-1.2C3.6,8.2,3.2,7.3,3.2,6.4c0-1.2,0.5-2.3,1.6-3.2
                    C5.5,2.6,6.3,2.2,7,2c0.8-0.1,1.5-0.2,2.1-0.2h5l-1.5,0.9H11.1z M12,16.6c0-0.6-0.2-1.1-0.6-1.6c-0.4-0.4-1.1-1-2.1-1.6
                    c-0.2,0-0.3,0-0.6,0c-0.1,0-0.5,0-1,0c-0.5,0.1-1,0.2-1.6,0.3c-0.1,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.5,0.2-0.7,0.4
                    c-0.2,0.2-0.4,0.4-0.6,0.7c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.8,0.4,1.5,1.2,2.1c0.8,0.5,1.8,0.8,3.1,0.8c1.2,0,2.1-0.3,2.7-0.8
                    C11.7,17.9,12,17.3,12,16.6z M8.5,9.5c0.7,0,1.2-0.3,1.6-0.7c0.2-0.3,0.3-0.6,0.4-0.9c0-0.3,0.1-0.6,0.1-0.8c0-1-0.3-1.9-0.8-2.9
                    C9.7,3.7,9.4,3.3,9,3C8.6,2.8,8.1,2.6,7.6,2.6c-0.7,0-1.2,0.3-1.7,0.8C5.5,3.9,5.4,4.5,5.4,5.2c0,0.9,0.3,1.8,0.8,2.7
                    c0.3,0.4,0.6,0.8,1,1.1C7.6,9.3,8,9.5,8.5,9.5z"/>
                  <path d="M20,10.4h-2.5V7.9h-1.2v2.5h-2.5v1.2h2.5v2.5h1.2v-2.5H20V10.4z"/>
                </svg>
              </span>
            </a>
            <a href="https://www.pinterest.com/storyblok" target="_blank" aria-label="Pinterest">
              <span class="icon regular" aria-hidden="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22; width: 22px; height: 22px;" xml:space="preserve">
                  <path d="M11,1C5.5,1,1,5.5,1,11c0,4.2,2.6,7.9,6.4,9.3c-0.1-0.8-0.2-2,0-2.9c0.2-0.8,1.2-5,1.2-5S8.3,11.9,8.3,11
                    c0-1.4,0.8-2.4,1.8-2.4c0.9,0,1.3,0.6,1.3,1.4c0,0.9-0.5,2.1-0.8,3.3c-0.2,1,0.5,1.8,1.5,1.8c1.8,0,3.1-1.9,3.1-4.6
                    c0-2.4-1.7-4.1-4.2-4.1c-2.8,0-4.5,2.1-4.5,4.3c0,0.9,0.3,1.8,0.7,2.3c0.1,0.1,0.1,0.2,0.1,0.3c-0.1,0.3-0.2,1-0.3,1.1
                    c0,0.2-0.1,0.2-0.3,0.1c-1.2-0.6-2-2.4-2-3.9c0-3.2,2.3-6.1,6.6-6.1c3.5,0,6.2,2.5,6.2,5.8c0,3.4-2.2,6.2-5.2,6.2
                    c-1,0-2-0.5-2.3-1.1c0,0-0.5,1.9-0.6,2.4c-0.2,0.9-0.8,2-1.2,2.6C9,20.8,10,21,11,21c5.5,0,10-4.5,10-10C21,5.5,16.5,1,11,1z"/>
                </svg>
              </span>
            </a>
          </div>
          <div class="site-copyright">
            <p class="copy">Copyright &copy; 2018</p>
          </div>
        </div>
      </div>
    </div>
    <div id="site-cart" class="site-nav-container" tabindex="-1">
      <div class="site-nav-container-last">
        <p class="title">Cart</p>
        <p class="subtitle" data-added-singular="count product added" data-added-plural="count products added">{{ $store.state.checkout.order_items.length }} product(s) in your cart</p>
        <div class="top">
          <form action="/cart" method="post" novalidate class="cart" id="site-cart-form-sidebar">
            <div class="cart-items" :key="orderItem.id" v-for="orderItem in orderItems">
              <div class="cart-item">
                <div class="thumbnail">
                  <img :src="orderItem.image | resize('200x240')" alt="Product">
                </div>
                <div class="content">
                  <div class="title">
                    <span v-if="orderItem.meta_data">
                      {{ orderItem.meta_data.name }}
                    </span>
                    <span>
                      {{ orderItem.sku }}
                    </span>
                  </div>
                  <span class="price">{{ orderItem.value | currency }}</span>
                  <small>{{ orderItem.sku }}</small>
                </div>
                <div>
                  <span class="no-qty">x{{ orderItem.quantity }}</span>
                </div>
              </div>
            </div>
            <div class="cart-out">
              <p class="total" id="CartTotal">Total: <span>{{ $store.state.checkout.total | currency }}</span></p>
              <small>Shipping &amp; taxes calculated at checkout</small>
              <div style="margin-top: 20px;">
                <nuxt-link class="button accent" @click.native="closeSidebar" to="/checkout">Go to Checkout</nuxt-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="site-search" class="site-nav-container" tabindex="-1">
      <div class="site-nav-container-last">
        <p class="title">Search</p>
        <form action="/search" method="get" class="input-group search-bar ajax" role="search" autocomplete="off">
          <input type="search" name="q" value="" placeholder="Enter a keyword" class="input-group-field" aria-label="Enter a keyword" autocomplete="off">
          <span class="input-group-btn">
            <button type="submit" class="btn icon-fallback-text" aria-label="Search">
              <span class="icon icon-search" aria-hidden="true">
                <svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27; width: 24px; height: 27px;" xml:space="preserve">
                  <path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"/>
                  <rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8"/>
                </svg>
              </span>
            </button>
          </span>
        </form>
        <div class="top">
          <div class="preloader" aria-hidden="true"><span>.</span><span>.</span><span>.</span></div>
          <div id="search-results" class="search-results"></div>
        </div>
      </div>
    </div>
    <button id="site-close-handle" class="site-close-handle" aria-label="Close sidebar" title="Close sidebar">
    <span class="hamburger-menu active" aria-hidden="true"><span class="bar animate"></span></span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    orderItems() {
      return this.$store.state.checkout.order_items.filter((item) => {
        return item.parent_item_id == null
      })
    }
  },
  mounted() {
    window.CUBER.ready()
  },
  methods: {
    closeNav() {

    },
    closeSidebar() {
      jQuery("body").removeClass("sidebar-move")
      jQuery("#site-overlay").removeClass("active")
      jQuery("#site-nav--mobile").removeClass("active")
    }
  }
}
</script>
