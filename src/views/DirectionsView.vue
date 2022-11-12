<template>
  <div id="Directions">
    <div class="grid grid-cols-12 mt-4 shadow-md">

      <div class="col-span-2 mx-auto">
        <div @click="router.push('/')">
          <ArrowLeftIcon :size="35" />
        </div>
        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray' ]" />
          <div class="line"></div>
          <div :class="[!isPickupActive ? 'square-black' : 'square-gray' ]" />
        </div>
      </div>

      <div class="col-span-9">

        <div class="w-full h-5"></div>

        <div class="mb-2 mt-5">
          <AutoCompleteInput
            @click="isPickupActive = true"
            v-model:input="pickup"
            :inputRef="true"
            placeholder="Enter pick-up location"
          />
        </div>

        <div class="mb-3">
          <AutoCompleteInput
            @click="isPickupActive = false"
            v-model:input="destination"
            :inputRef="false"
            placeholder="Where to?"
          />
        </div>

      </div>
    </div>

    <div v-for="address in addressData" :key="address">
      <div 
        @click="storeAddress(address.description)" 
        class="flex items-center custom-border-bottom"
      >
        <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
          <MapMarkerIcon :size="30" fillColor="#f5f5f5"/>
        </div>
        <div>
          <div class="text-lg text-gray-600">{{ address.description }}</div>
          <div class="text-lg text-gray-400">{{ address.terms[2].value }}</div>
        </div>
      </div>
    </div>   

  </div>
</template>

<script setup>
  import { useDirectionStore } from '@/store/direction-store'
  import { debounce } from 'lodash'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { onMounted, ref, watch } from 'vue';
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
  import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
  import AutoCompleteInput from '../components/AutoCompleteInput.vue'

  const router = useRouter()
  const direction = useDirectionStore()

  let isPickupActive = ref(true)

  let pickup = ref(null)
  let destination = ref(null)
  let addressData = ref(null)

  onMounted(() => {
    pickup.value = direction.pickup
    destination.value = direction.destination
  })

  const storeAddress = (address) => {
    if (isPickupActive.value) {
      direction.pickup = address
      pickup.value = address
    } else {
      direction.destination = address
      destination.value = address
    }

    if (direction.pickup.length > 0 && direction.destination.length > 0) {
      router.push('/map')
    }
  }

  const findAddress = debounce(async (address) => {
    try {
      if (address.length < 1) { 
        addressData.value = null 
        return null
      } 

      let res = await axios.get('http://localhost:4001/api/address/' + address)
      addressData.value = res.data
    } catch (err) {
      console.log(err)
    }
  }, 500)

  watch(pickup, async (pickup) => await findAddress(pickup) )
  watch(destination, async (destination) => await findAddress(destination) )

</script>

<style lang="scss" scoped>
  #Directions {
    .bg-custom-color {
      background-color: rgb(237, 237, 237);
    }

    .circle-black {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: black;
      border-radius: 100%;
    }

    .circle-gray {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: rgb(191, 191, 191);
      border-radius: 100%;
    }

    .square-black {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: black;
    }

    .square-gray {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: rgb(191, 191, 191);
    }

    .line {
      margin: 0 auto;
      width: 2px;
      height: 45px;
      background-color: rgb(191, 191, 191);
    }

    .custom-border-bottom {
      border-bottom: 1px solid rgb(230, 230, 230);
    }
  }
</style>