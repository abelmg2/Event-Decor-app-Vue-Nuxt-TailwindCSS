<template>
    <div class="inline-flex gap-2 items-center mb-3">
      <p class="text-gray-500">
        {{ text1 }} <span class="text-gray-700 font-medium">{{ text2 }}</span>
      </p>
      <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text1: {
        type: String,
        required: true,
      },
      text2: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  