<template>
    <div>
      <div class="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img :src="assets.logo" alt="" class="mb-5 w-32" />
          <p class="w-full md:w-2/3 text-grey-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
  
        <div>
          <p class="text-xl font-medium mb-5">COMPANY</p>
          <ul class="flex flex-col gap-1 text-grey-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
  
        <div>
          <p class="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul class="flex flex-col gap-1 text-grey-600">
            <li>+1-212-456-7898</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
  
      <div>
        <hr />
        <p class="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { assets } from '../plugins/assets'; // Adjust the path if necessary
  
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
  