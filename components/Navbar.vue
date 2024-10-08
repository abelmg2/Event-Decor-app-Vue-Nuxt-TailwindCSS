<template>
    <div class="flex items-center justify-between py-5 font-medium">
      <NuxtLink to="/">
        <img :src="assets.logo" class="w-36" alt="" />
      </NuxtLink>
  
      <ul class="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" class="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" class="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" class="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" class="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
  
      <div class="flex items-center gap-6">
        <img @click="setShowSearch(true)" :src="assets.search_icon" alt="" class="w-5 cursor-pointer" />
  
        <div class="group relative">
          <img :src="assets.profile_icon" alt="" class="w-5 cursor-pointer" />
          <div class="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div class="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p class="cursor-pointer hover:text-black">My Profile</p>
              <p class="cursor-pointer hover:text-black">Orders</p>
              <p class="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
  
        <NuxtLink to="/cart" class="relative">
          <img :src="assets.cart_icon" alt="" class="w-5 min-w-5" />
          <p class="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {{ getCartCount() }}
          </p>
        </NuxtLink>
  
        <img @click="visible = true" :src="assets.menu_icon" alt="" class="w-5 cursor-pointer sm:hidden" />
      </div>
  
      <!-- Sidebar menu for small screens -->
      <div :class="`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`">
        <div class="flex flex-col text-gray-600">
          <div @click="visible = false" class="flex items-center gap-4 p-3">
            <img :src="assets.dropdown_icon" alt="" class="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink @click="visible = false" class="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink @click="visible = false" class="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
          <NavLink @click="visible = false" class="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink @click="visible = false" class="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, inject } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { assets } from '../plugins/assets'; // Adjust the path if necessary
  
  export default {
    setup() {
      const visible = ref(false);
      const shopContext = inject('ShopContext');
      const { setShowSearch, getCartCount } = shopContext;
  
      return {
        visible,
        assets,
        setShowSearch,
        getCartCount,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  