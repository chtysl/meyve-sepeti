export const state = () => ({
  kucukkutu: {
    fiyat: 100,
    kutuBoy: 'Küçük Kutu 100₺',
    elma: '0,5kg   Amasya Elması',
    mandalina: '1kg   Mandalina İzmir Gümüldür',
    kivi: '0,5kg   Kivi Doğu Karadeniz',
    hurma: '0,5kg   Cennet Hurması',
    havuç: '0,5kg   Bebek Havuç',
    pırasa: '0,5kg   Pırasa',
    brokoli: '0,5kg   Brokoli Beypazarı',
  },
  buyukkutu: {
    fiyat: 200,
    kutuBoy: 'Büyük Kutu 200₺',
    elma: '1kg   Amasya Elması',
    mandalina: '2kg   Mandalina İzmir Gümüldür',
    kivi: '1kg   Kivi Doğu Karadeniz',
    hurma: '1kg   Cennet Hurması',
    havuç: '1kg   Bebek Havuç',
    pırasa: '1kg   Pırasa',
    brokoli: '1kg   Brokoli Beypazarı',
  },
  cart: [],
})

// export const getters = {
//   getterValue: (state) => {
//     return state.value
//   },
// }

export const mutations = {
  updateCart: (state, payload) => {
    state.cart.push(payload)
  },
}

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   },
// }
