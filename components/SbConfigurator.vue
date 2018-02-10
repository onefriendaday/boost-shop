<template>
<portal to="fullscreen">
  <transition appear name="fade">
    <div class="sb-configurator">
      <div class="sb-configurator__head">
        <span class="sb-configurator__price">Price: {{ total | currency }}</span>
        <div class="sb-configurator__add">
          <sb-buy-button :hide-quantity="true"
                         :product="product"
                         :config-id="'umdasch:Kassa006:AEA3FB722CDF285DDC951C65C1315E9A475DA7070AAC115A17E8E1A12158F75C'"></sb-buy-button>
        </div>
        <button @click.prevent="$emit('close')" class="sb-configurator__close">
          <span class="hamburger-menu active" aria-hidden="true"><span class="bar animate"></span></span>
        </button>
      </div>
      <div id="roomle-stage" class="sb-configurator__stage">

      </div>
    </div>
  </transition>
</portal>
</template>

<script>
export default {
  data() {
    return {
      total: 199,
      skus: [],
      configId: 'umdasch:Kassa006:AEA3FB722CDF285DDC951C65C1315E9A475DA7070AAC115A17E8E1A12158F75C',
      partList: [],
      product: {}
    }
  },

  mounted() {
    this.$nextTick(this.initRoomle)
  },

  destroyed() {
    RoomleConfigurator.removeChangeListener()
  },

  methods: {
    initRoomle() {
      // RoomleConfigurator.loadConfigurableItemId('usm:frame')
      // RoomleConfigurator.loadConfigurationId('usm:frame:b227fc54b375747afe1ac05cb351ce11c88fcc98f574f2435e54ec25610bb2de')
      // RoomleConfigurator.saveCurrentConfiguration((data) => {console.log(data)})
      const initWith = 'usm:frame:BB3BB3E7951BC15109B1FF86D78C95DE3FB46E9F78714C46FFA2DE91866A2C2B'
      this.configId = initWith
      RoomleConfigurator.init('design-bestseller', 'roomle-stage', initWith, {debugLow: true}, (initialData) => {
        console.log(initialData)
        RoomleConfigurator.addChangeListener((data) => {
          let products = []

          this.configId = data.hash
          this.partList = data.partList
          this.total = this.partList
            .map((elem) => { return elem.price * elem.count })
            .reduce((a, b) => a + b, 0)

          this.skus = this.partList.map((elem) => { return elem.articleNr })
        })
      })
    },

    getProducts() {
      this.$storeapi().get('products', {
        params: {
          sku: this.skus
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.sb-configurator {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw + 20px);
  height: calc(100vh + 20px);
  z-index: 7777;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #e0dfe5;
}

.sb-configurator__head {
  height: 84px;
  text-align: center;
  font-size: 1.3rem;
}

.sb-configurator__close {
  position: absolute;
  top: 22px;
  right: 50px;
  width: 35px;
  height: 35px;
  z-index: 999;
  transition: transform 150ms linear;
}

.sb-configurator__close:hover {
  transform: scale(1.1);
}

.sb-configurator__stage {
  height: calc(100vh - 84px);
}

.sb-configurator__price {
  font-size: 1.3rem;
  line-height: 84px;
}

.sb-configurator__add {
  margin-left: 15px;
  display: inline-block;
}
</style>
