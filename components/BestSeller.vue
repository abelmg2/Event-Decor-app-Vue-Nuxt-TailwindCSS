<template>
    <div class="my-10">
      <div class="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLER" />
        <p class="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        <ProductItem
          v-for="(item, index) in bestSeller"
          :key="index"
          :id="item._id"
          :name="item.name"
          :image="item.image"
          :price="item.price"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted, inject } from 'vue';
  import Title from './Title.vue';
  import ProductItem from './ProductItem.vue';
  
  export default {
    components: {
      Title,
      ProductItem,
    },
    setup() {
      // Inject the ShopContext
      const { products } = inject('ShopContext'); 
  
      const bestSeller = ref([]);
  
      onMounted(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        bestSeller.value = bestProduct.slice(0, 5);
      });
  
      return {
        bestSeller,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  