<template>
    <Link class="text-gray-700 cursor-pointer" :to="`/product/${id}`">
      <div class="overflow-hidden">
        <img :src="image[0]" alt="" class="hover:scale-110 transition ease-in-out" />
      </div>
      <p class="pt-3 pb-1 text-sm">{{ name }}</p>
      <p class="text-sm font-medium">{{ currency }}{{ price }}</p>
    </Link>
  </template>
  
  <script>
  import { inject } from 'vue';
  import { Link } from 'vue-router'; // Ensure you have Vue Router installed and set up
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      image: {
        type: Array,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
    setup() {
      const { currency } = inject('ShopContext'); // Inject the ShopContext
  
      return {
        currency,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  