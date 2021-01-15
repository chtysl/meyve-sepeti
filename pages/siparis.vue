<template>
  <div class="flex items-center justify-center h-screen bg-blue-400 flex-col">
    <div v-if="cart.length">
      <div
        v-for="paket in cart"
        :key="paket"
        class="border-2 rounded-md m-1 p-1"
      >
        <h1 class="">{{ paket.kutuBoy }}</h1>
      </div>
      <h1>Toplam Fiyat: {{ toplamFiyat }}</h1>
      <AppSiparisForm />
    </div>
    <div v-else class="flex justify-center items-center flex-col">
      <h1 class="mb-4 text-5xl text-white">Sepetiniz boş</h1>
      <button class="border-2 p-2 rounded-xl text-white">
        <nuxt-link to="/">Doldurun</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppSiparisForm from '@/components/AppSiparisForm.vue'

export default {
  components: {
    AppSiparisForm,
  },
  computed: {
    ...mapState(['cart']),
    toplamFiyat() {
      if (!this.cart.length) return 0
      return this.cart.reduce((acc, next) => acc + +next.fiyat, 0)
    },
  },
}
</script>
