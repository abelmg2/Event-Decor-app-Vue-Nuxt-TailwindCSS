<template>
    <div v-if="productData" class="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <!-- --------------------- Product Data ---------------------- -->
      <div class="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <!-- ------------------- Product Images -------------------- -->
        <div class="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div class="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            <img
              v-for="(item, index) in productData.image"
              :key="index"
              :src="item"
              @click="image = item"
              class="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              alt=""
            />
          </div>
          <div class="w-full sm:w-[80%]">
            <img :src="image" class="w-full h-auto" alt="" />
          </div>
        </div>
  
        <!-- -------------------- Product Info ------------------- -->
        <div class="flex-1">
          <h1 class="font-medium text-2xl mt-2">{{ productData.name }}</h1>
          <div class="flex items-center gap-1 mt-2">
            <img v-for="i in 4" :key="i" src="~/assets/star_icon.png" class="w-3 5" alt="star" />
            <img src="~/assets/star_dull_icon.png" class="w-3 5" alt="star-dull" />
            <p class="pl-2">(122)</p>
          </div>
          <p class="mt-5 text-3xl font-medium">{{ currency }}{{ productData.price }}</p>
          <p class="mt-5 text-grey-500 md:w-4/5">{{ productData.description }}</p>
          <div class="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div class="flex gap-2">
              <button
                v-for="(item, index) in productData.sizes"
                :key="index"
                @click="size = item"
                :class="['border py-2 px-4 bg-grey-100', size === item ? 'border-orange-500' : '']"
              >
                {{ item }}
              </button>
            </div>
          </div>
          <button @click="addToCart(productData._id, size)" class="bg-black text-white px-8 py-3 text-sm active:bg-grey-700">
            ADD TO CART
          </button>
          <hr class="mt-8 sm:w-4/5" />
          <div class="text-sm text-grey-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
  
      <!-- -------- Description & Review Section --------- -->
      <div class="mt-20">
        <div class="flex">
          <b class="border px-5 py-3 text-sm">Description</b>
          <p class="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div class="flex flex-col gap-4 border px-6 py-6 text-sm text-grey-500">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the
            internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with
            customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense
            popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any
            available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      </div>
  
      <!-- ---------- Related Products ---------- -->
      <RelatedProducts :category="productData.category" :subCategory="productData.subCategory" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useShopContext } from '~/context/ShopContext'
  import RelatedProducts from '~/components/RelatedProducts.vue'
  import { useRoute } from 'vue-router'
  
  const { products, currency, addToCart } = useShopContext()
  const route = useRoute()
  const productId = route.params.productId
  const productData = ref(null)
  const image = ref('')
  const size = ref('')
  
  const fetchProductData = () => {
    const product = products.find(item => item._id === productId)
    if (product) {
      productData.value = product
      image.value = product.image[0]
    }
  }
  
  fetchProductData()
  </script>
  
  <style scoped>
  /* Add your scoped CSS here if needed */
  </style>
  