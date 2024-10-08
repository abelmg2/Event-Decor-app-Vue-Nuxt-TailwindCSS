<template>
    <div class="my-10">
      <div class="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p class="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <!-- Rendering Products -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        <ProductItem
          v-for="(item, index) in latestProducts"
          :key="index"
          :id="item._id"
          :image="item.image"
          :name="item.name"
          :price="item.price"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted, inject } from 'vue';
  import Title from './Title.vue'; // Adjust the path if necessary
  import ProductItem from './ProductItem.vue'; // Adjust the path if necessary
  
  export default {
    components: {
      Title,
      ProductItem,
    },
    setup() {
      const shopContext = inject('ShopContext');
      const decores = shopContext.decores;
      
      const latestProducts = ref([]);
  
      onMounted(() => {
        latestProducts.value = decores.slice(0, 10);
      });
  
      return {
        latestProducts,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  