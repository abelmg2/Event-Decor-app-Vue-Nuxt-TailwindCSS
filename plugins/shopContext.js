import { reactive, toRefs } from 'vue';
import { decores, products } from '~/plugins/assets.js';
import { useToast } from 'vue-toastification';

export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast();

  const state = reactive({
    currency: '$',
    delivery_fee: 10,
    search: '',
    showSearch: false,
    cartItems: {},
  });

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    if (state.cartItems[itemId]) {
      if (state.cartItems[itemId][size]) {
        state.cartItems[itemId][size] += 1;
      } else {
        state.cartItems[itemId][size] = 1;
      }
    } else {
      state.cartItems[itemId] = {};
      state.cartItems[itemId][size] = 1;
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in state.cartItems) {
      for (const item in state.cartItems[items]) {
        try {
          if (state.cartItems[items][item] > 0) {
            totalCount += state.cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  };

  return {
    provide: {
      decores,
      products,
      ...toRefs(state),
      addToCart,
      getCartCount,
    },
  };
});
