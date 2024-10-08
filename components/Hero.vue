<template>
    <div class="flex flex-col sm:flex-row border border-gray-400">
      <!-- Hero left side -->
      <div class="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div class="text-[#414141]">
          <div class="flex items-center gap-2">
            <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p class="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 class="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
            Recent Organized Events
          </h1>
          <div class="flex items-center gap-2">
            <p class="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <!-- Hero Right side -->
      <img class="w-full sm:w-1/2" :src="amenAssets.hero_1" alt="" />
    </div>
  </template>
  
  <script>
  import { amen_assets } from '../plugins/assets'; // Adjust the path if necessary
  
  export default {
    data() {
      return {
        amenAssets: amen_assets,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  