<template>
    <div class="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <!-- Filter Options -->
      <div class="min-w-60">
        <p @click="showFilter = !showFilter" class="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img :class="`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`" src="~/assets/dropdown_icon.png" alt="" />
        </p>
  
        <!-- Category Filter -->
        <div :class="`border border-grey-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`">
          <p class="mb-3 text-sm font-medium">CATEGORIES</p>
          <div class="flex flex-col gap-2 text-sm font-light text-grey-700">
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Men" @change="toggleCategory" /> Men
            </p>
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Event" @change="toggleCategory" /> Event Decor
            </p>
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Gift" @change="toggleCategory" /> Gift Packages
            </p>
          </div>
        </div>
  
        <!-- Subcategory Filter -->
        <div :class="`border border-grey-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`">
          <p class="mb-3 text-sm font-medium">TYPE</p>
          <div class="flex flex-col gap-2 text-sm font-light text-grey-700">
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Topwear" @change="toggleSubCategory" /> Topwear
            </p>
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Wedding" @change="toggleSubCategory" /> Wedding
            </p>
            <p class="flex gap-2">
              <input class="w-3" type="checkbox" value="Birthday" @change="toggleSubCategory" /> Birthday
            </p>
          </div>
        </div>
      </div>
  
      <!-- Right Side -->
      <div class="flex-1">
        <div class="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <!-- Product Sort -->
          <select @change="e => sortType = e.target.value" class="border-2 border-grey-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
  
        <!-- Map Products -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          <ProductItem
            v-for="(item, index) in filterProducts"
            :key="index"
            :name="item.name"
            :id="item._id"
            :price="item.price"
            :image="item.image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, reactive, toRefs } from 'vue'
  import { useShopContext } from '~/context/ShopContext'
  import ProductItem from '~/components/ProductItem.vue'
  import Title from '~/components/Title.vue'
  
  export default {
    components: {
      ProductItem,
      Title,
    },
    setup() {
      const { products, search, showSearch } = useShopContext()
      const showFilter = ref(false)
      const state = reactive({
        filterProducts: [],
        category: [],
        subCategory: [],
        sortType: 'relevant',
      })
  
      const toggleCategory = (e) => {
        if (state.category.includes(e.target.value)) {
          state.category = state.category.filter(item => item !== e.target.value)
        } else {
          state.category.push(e.target.value)
        }
      }
  
      const toggleSubCategory = (e) => {
        if (state.subCategory.includes(e.target.value)) {
          state.subCategory = state.subCategory.filter(item => item !== e.target.value)
        } else {
          state.subCategory.push(e.target.value)
        }
      }
  
      const applyFilter = () => {
        let productsCopy = [...products]
  
        if (showSearch && search) {
          productsCopy = productsCopy.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        }
  
        if (state.category.length > 0) {
          productsCopy = productsCopy.filter(item =>
            state.category.includes(item.category)
          )
        }
  
        if (state.subCategory.length > 0) {
          productsCopy = productsCopy.filter(item =>
            state.subCategory.includes(item.subCategory)
          )
        }
  
        state.filterProducts = productsCopy
      }
  
      const sortProduct = () => {
        let fpCopy = [...state.filterProducts]
  
        switch (state.sortType) {
          case 'low-high':
            state.filterProducts = fpCopy.sort((a, b) => a.price - b.price)
            break
          case 'high-low':
            state.filterProducts = fpCopy.sort((a, b) => b.price - a.price)
            break
          default:
            applyFilter()
            break
        }
      }
  
      onMounted(() => {
        applyFilter()
      })
  
      return {
        ...toRefs(state),
        toggleCategory,
        toggleSubCategory,
        applyFilter,
        sortProduct,
        showFilter,
      }
    },
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  