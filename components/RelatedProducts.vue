<template>
    <div class="my-24">
      <div class="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
  
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        <ProductItem
          v-for="(item, index) in related"
          :key="index"
          :id="item._id"
          :name="item.name"
          :price="item.price"
          :image="item.image"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, inject } from 'vue';
  import { ShopContext } from '../context/ShopContext'; // Adjust the import according to your context path
  import ProductItem from './ProductItem';
  import Title from './Title';
  
  export default {
    props: {
      category: {
        type: String,
        required: true,
      },
      subCategory: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const { products } = inject(ShopContext);
      const related = ref([]);
  
      onMounted(() => {
        if (products.length > 0) {
          const productsCopy = products.filter(item => 
            props.category === item.category && props.subCategory === item.subCategory
          );
  
          related.value = productsCopy.slice(0, 5);
        }
      });
  
      return {
        related,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  