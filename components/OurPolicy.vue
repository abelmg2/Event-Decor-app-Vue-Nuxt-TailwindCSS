<template>
    <div class="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-grey-700">
      
      <div>
        <img :src="assets.exchange_icon" class="w-12 m-auto mb-5" alt="Easy Exchange Policy" />
        <p class="font-semibold">Easy Exchange Policy</p>
        <p class="text-grey-400">We offer hassle-free exchange policy</p>
      </div>
  
      <div>
        <img :src="assets.quality_icon" class="w-12 m-auto mb-5" alt="7 Days Return Policy" />
        <p class="font-semibold">7 Days Return Policy</p>
        <p class="text-grey-400">We provide 7 days free return policy</p>
      </div>
  
      <div>
        <img :src="assets.support_img" class="w-12 m-auto mb-5" alt="Best customer support" />
        <p class="font-semibold">Best customer support</p>
        <p class="text-grey-400">We provide 24/7 customer support</p>
      </div>
  
    </div>
  </template>
  
  <script>
  import { assets } from '../plugins/assets'; // Adjust the path according to your folder structure
  
  export default {
    data() {
      return {
        assets,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  