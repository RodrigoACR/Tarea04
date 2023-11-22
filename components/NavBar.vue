<template>
  <header class="flex items-center justify-between h-20 px-[5%] lg:px-[15%]">
    <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
      <span class="text-primary">C</span>astro's
    </NuxtLink>
    <nav class="flex items-center space-x-7 text-gray-600">
      
      <template v-for="(n, i) in links" :key="`navLink-${i}`">
        <NuxtLink :to="n.link" class="inline-block nav-link hover:text-primary group">
          <div class="flex items-center space-x-2">
            <Icon :icon="n.icon" class="w-4 h-4" />
            <span class="font-medium"> {{ n.name }}</span>
          </div>
          <div
            class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all">
          </div>
        </NuxtLink>
      </template>
  
      <div class="header_actions flex" >
        <button class="snipcart-items-count snipcart-checkout button">0</button>        
        <button class="header_checkout snipcart-checkout button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2h1.142zm3.716 11l-1.23-8h13.028l-2.4 8H7.858zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
          </svg>
        </button>
        <button class="snipcart-total-price snipcart-checkout button">$0.00</button> 
      </div>
    
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links = [
  {
    name: "Películas",
    icon: "mdi:video-film",
    link: "/pelicula",
  },
  {
    name: "Estudios",
    icon: "ph:film-slate-duotone",
    link: "/estudio",
  },
  {
    name: "Director",
    icon: "tabler:chair-director",
    link: "/director",
  },
  {
    name: "",
    icon: "uiw:home",
    link: "/",
  },
];
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  @apply text-primary;
}
</style>
