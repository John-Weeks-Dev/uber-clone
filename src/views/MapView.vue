<template>
  <div>

    <div 
      id="BackBtn" 
      class="absolute z-50 rounded-full bg-white p-1 top-8 left-4"
      @click="router.push('/directions')"
    >
      <ArrowLeftIcon :size="40" />
    </div>

    <div id="map" />

    <div id="VehicleSelection" class="absolute bottom-0 w-full">
      <div class="w-full h-2 border-t"></div>
      <div class="w-full text-center border-t-2 p-1.5 text-gray-700 text-lg font-semibold">
        Distance - {{ distance.text }}
      </div>

      <div>

        <div class="bg-custom-gray">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/ride.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">UberX</div>
                <div class="text-xl">{{ calculatePrice(1, distance.value) }}</div>
              </div>
              <div class="text-gray-500">{{ duration.text }}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/comfort.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">Comfort</div>
                <div class="text-xl">£{{ calculatePrice(1.25, distance.value) }}</div>
              </div>
              <div class="text-gray-500">{{ duration.text }}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/uberxl.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">UberXL</div>
                <div class="text-xl">£{{ calculatePrice(1.5, distance.value) }}</div>
              </div>
              <div class="text-gray-500">{{ duration.text }}</div>
            </div>
          </div>
        </div>

      </div>

      <div 
        class="
          flex 
          items-center 
          justify-center 
          bg-white
          py-6 
          px-4
          w-full 
          absolute 
          bottom-0 
          shadow-inner
        "
      >
        <button 
          class="
            bg-black 
            text-2xl 
            text-white
            py-4 
            px-4 
            rounded-sm
            w-full
          "
        >
          Confirm UberX
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
  import { useDirectionStore } from '@/store/direction-store';

  const router = useRouter()
  const direction = useDirectionStore()

  let markers = []
  const distance = ref({text: '', value: null})
  const duration = ref({text: '', value: null})
  const latLng = ref({ start: { lat: null, lng: null }, end: { lat: null, lng: null } })

  onMounted(async () => {
    if (!direction.pickup || !direction.destination) { router.push('/') }
    setTimeout(() => { initMap() }, 50)
  })

  const initMap = () => {

    const directionsService = new window.google.maps.DirectionsService()
    const directionsRenderer = new window.google.maps.DirectionsRenderer()

    directionsRenderer.setOptions({
      polylineOptions: {
        strokeColor: '#212121',
        strokeWeight: 6
      }
    });

    // https://snazzymaps.com/editor/customize/15
    const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        minZoom: 3,
        maxZoom: 17,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "9"
            },
            {
                "gamma": "1.94"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "61"
            },
            {
                "color": "#3cc1e0"
            },
            {
                "gamma": "0.94"
            },
            {
                "saturation": "58"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#0075ff"
            },
            {
                "saturation": "-38"
            },
            {
                "lightness": "-9"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            },
            {
                "color": "#5e87f1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            },
            {
                "color": "#1100ff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#002aff"
            },
            {
                "saturation": "-48"
            },
            {
                "lightness": "78"
            },
            {
                "gamma": "1.23"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "gamma": "10.00"
            },
            {
                "lightness": "63"
            },
            {
                "saturation": "8"
            },
            {
                "weight": "7.35"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#4d06f2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#008bff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
      });

      if (direction.pickup && direction.destination) { 
        getDirections(map, directionsRenderer, directionsService)
        getDistance()
      }

      return map
  }

  const getDirections = (map, directionsRenderer, directionsService) => {
    
    directionsRenderer.setMap(map)

    const request = {
      origin: direction.pickup,
      destination: direction.destination,
      optimizeWaypoints: true, // set to true if you want google to determine the shortest route or false to use the order specified.
      travelMode: 'DRIVING'
    }

    directionsService.route(request, function (result, status) {
      if (status === 'OK') {

        latLng.value.start.lat = result.routes[0].legs[0].start_location.lat()
        latLng.value.start.lng = result.routes[0].legs[0].start_location.lng()
        latLng.value.end.lat = result.routes[0].legs[0].end_location.lat()
        latLng.value.end.lng = result.routes[0].legs[0].end_location.lng()

        directionsRenderer.setDirections(result)
      }
    })
  }

  const getDistance = async () => {
    let res = await axios.get('http://localhost:4001/api/distance/' + direction.pickup + '/' + direction.destination)

    distance.value.text = res.data.rows[0].elements[0].distance.text
    distance.value.value = res.data.rows[0].elements[0].distance.value
    duration.value.text = res.data.rows[0].elements[0].duration.text
    duration.value.value = res.data.rows[0].elements[0].duration.value
  }

  const calculatePrice = (multiplier, price) => {
    let res = (price / 900) * multiplier
    return res.toFixed(2)
  }

  watch(markers, () => {
    console.log('console', markers)
  })
</script>

<style lang="scss">

  #map {
    width:100%;
    height: 45vh;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .gm-style-cc {
    display: none;
  }

  #VehicleSelection {
    height: 55vh;

    .bg-custom-gray {
      background-color: rgb(237, 237, 237);
    }
  }
</style>