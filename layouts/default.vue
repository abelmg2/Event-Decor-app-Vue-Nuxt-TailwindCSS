<template>
    <div class="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <!-- Toast Notification -->
      <ToastContainer />
  
      <!-- Navbar and SearchBar Components -->
      <Navbar />
      <SearchBar />
  
      <!-- Nuxt.js will handle the routing here -->
      <Nuxt />
  
      <!-- Footer Component -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  // Vue auto-imports components from the `components` directory, no need to manually import them.
  // If you use a toast library, import the toast component as follows:
  
  import ToastContainer from '@/components/ToastContainer.vue' // Assuming this is your Vue toast component
  </script>
  
  <style scoped>
  /* Import your global styles here, similar to what you used in `index.css` in Next.js */
  @import "@/assets/css/index.css";
  
  /* Additional component styles can be added here if needed */
  </style>
  

