<template>
  <div id="ServiceSetupLarge">
    <div class="bg-custom-color custom-height w-full rounded-2xl">

      <div v-if="promo" class="w-full relative z-10">
        <span 
          class=
            "
              absolute    
              top-1/2
              left-1/2
              transform 
              -translate-x-1/2 
              -translate-y-1/2    
              bg-green-700 
              p-0.5 
              px-2 
              text-gray-100
              rounded-3xl
              text-xs
            "
        >
          Promo
        </span>
      </div>

      <div class="flex justify-between p-2">
        <div class="text-lg ml-2 text-gray-900 mt-14">
          {{ text }}
        </div>
        <div class="mt-3 mr-1">
          <img :width="imageWidth" :src="'img/uber/' + image + '.png'">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { defineProps, toRefs } from 'vue';

  const props = defineProps({
    text: String,
    imageWidth: String,
    image: String,
    promo: { Boolean, default: false }
  })
  const { text, imageWidth, image, promo } = toRefs(props)

</script>

<style lang="scss" scoped>
  #ServiceSetupLarge {
    .bg-custom-color {
      background-color: rgb(237, 237, 237);
    }
    .custom-height {
      height: 100px;
    }
  }
</style>