<template>
  <div id="ServiceSetupSmall">
    <div class="bg-custom-color custom-height w-full rounded-2xl relative">

      <div 
        class="
            absolute 
            top-1/3
            left-1/3
            transform 
            -translate-x-1/4 
            -translate-y-1/4
            mt-0.5
        "
      >
        <img width="55" :src="'img/uber/' + image + '.png'">
      </div>
    </div>

    <div class="text-xs text-center mt-2 text-gray-900">
        {{ text }}
    </div>
  </div>
</template>

<script setup>

  import { defineProps, toRefs } from 'vue';

  const props = defineProps({
    text: String,
    image: String
  })
  const { text, image } = toRefs(props)

</script>

<style lang="scss" scoped>
  #ServiceSetupSmall {
    .bg-custom-color {
      background-color: rgb(237, 237, 237);
    }
    .custom-height {
      height: 70px;
    }
  }
</style>