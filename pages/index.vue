<template>
  <div>
    <div class="min-h-screen bg-img flex justify-center items-center">
      <h1 class="text-white text-5xl">
        Mevsiminde toplanan meyve ve sebzeler tarladan sofranıza
      </h1>
    </div>
    <div class="flex justify-center items-center flex-col bg-green-200">
      <h1 class="text-3xl mb-4">Bu haftanın ürünleri</h1>
      <div class="flex justify-center">
        <div
          class="flex justify-center items-center flex-col text-white bg-green-600 rounded-3xl p-5 m-5"
        >
          <h1 class="text-white text-2xl mb-2">Küçük kutu 100₺</h1>
          <ul v-for="item in kucukkutu" :key="item">
            <li>{{ item }}</li>
          </ul>
          <button
            class="bg-blue-300 rounded-3xl p-2 text-white mt-4"
            @click="addToCartKucuk(item)"
          >
            <nuxt-link to="/siparis">Sipariş ver</nuxt-link>
          </button>
        </div>
        <div
          class="flex justify-center items-center flex-col text-white bg-green-600 rounded-3xl p-5 m-5"
        >
          <h1 class="text-white text-2xl mb-2">Büyük kutu 200₺</h1>
          <ul v-for="item in buyukkutu" :key="item">
            <li>{{ item }}</li>
          </ul>
          <button
            class="bg-blue-300 rounded-3xl p-2 text-white mt-4"
            @click="addToCartBuyuk"
          >
            <nuxt-link to="/siparis">Sipariş ver</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['buyukkutu', 'kucukkutu']),
  },
  methods: {
    addToCartBuyuk() {
      this.$store.commit('updateCart', this.buyukkutu)
    },
    addToCartKucuk() {
      this.$store.commit('updateCart', this.kucukkutu)
    },
  },
}
</script>

<style scoped>
.bg-img {
  background: url('../static/mysb.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
