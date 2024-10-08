<template>
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  </template>
  
  <script setup>
  // Import your components
  import Hero from '~/components/Hero.vue'
  import LatestCollection from '~/components/LatestCollection.vue'
  import BestSeller from '~/components/BestSeller.vue'
  import OurPolicy from '~/components/OurPolicy.vue'
  import NewsletterBox from '~/components/NewsletterBox.vue'
  </script>
  
  <style scoped>
  /* Add any styles specific to this component here */
  </style>
  