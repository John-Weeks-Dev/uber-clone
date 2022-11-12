<template>
  <div id="Home" class="flex flex-col h-screen">
    <div class="m-3 mb-auto">

      <div class="my-20">
        <img width="150" src="img/uber/uber2.svg">
      </div>

      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge
          @click="router.push('/directions')" 
          text="Ride"
          imageWidth="74"
          image="ride"
        />
        <ServiceSelectLarge
          text="Food"
          imageWidth="72"
          image="food"
          :promo="true"
        />
      </div>

      <div class="grid grid-cols-4 gap-3 my-3">
        <ServiceSelectSmall
          text="2 Wheels"
          image="2wheels"
        />
        <ServiceSelectSmall
          text="Transit"
          image="transit"
        />
        <ServiceSelectSmall
          text="Reserve"
          image="reserve"
        />
        <ServiceSelectSmall
          text="Travel"
          image="travel"
        />
      </div>

      <div 
        @click="router.push('/directions')" 
        class="
          w-full 
          bg-custom-color 
          h-14 
          rounded-full 
          flex 
          items-center p-3
        "
      >
        <MagnifyIcon :size="40" />
        <div class="ml-3 text-xs font-semibold text-gray-700">
          Enter pick-up point
        </div>
      </div>

    </div>
    <footer 
      class="
          w-full 
          z-50 
          flex 
          justify-around 
          p-1 
          mb-2 
          border-t-2 
          border-t-gray-200
        "
      >
      <div class="grid place-items-center">
        <HomeIcon :size="30" fillColor="#1f1e1e"/>
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Home
        </div>
      </div>
      <div @click="router.push('/directions')" class="grid place-items-center">
        <MapMarkerIcon :size="30" fillColor="#b3b1b1"/>
        <div class="w-full -mt-1 text-xs text-center text-gray-400 font-semibold">
          Destination
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import ServiceSelectSmall from '@/components/ServiceSelectSmall.vue';
    import ServiceSelectLarge from '@/components/ServiceSelectLarge.vue';

    import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
    import HomeIcon from 'vue-material-design-icons/Home.vue';
    import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
    import { onMounted } from '@vue/runtime-core';
    import { useDirectionStore } from '@/store/direction-store';

    const router = useRouter()
    const direction = useDirectionStore()

    onMounted(() => {
      direction.pickup = null
      direction.destination = null
    })
</script>

<style lang="scss" scoped>
  #Home {
    .bg-custom-color {
      background-color: rgb(237, 237, 237);
    }
  }
</style>
