<template>
  <div 
    id="AutoCompleteInput" 
    class="flex items-center"
  >
    <input 
        :id="theId"
        @click="emit('isActive', true);"
        v-model="inputComputed"
        class="
            text-md
            bg-gray-100
            appearance-none 
            rounded 
            w-full 
            py-2.5
            px-3
            text-gray-700 
            leading-tight 
            focus:outline-none 
            focus:shadow-outline
            focus:bg-gray-200
        "
        type="text" 
        :placeholder="placeholder" 
        autocomplete="off"
    />
    <WindowCloseIcon 
      fillColor="#2e2e2d" 
      @click="$emit('clearInput')" 
    />
  </div>
</template>

<script setup>

  import { computed, defineEmits, defineProps, toRefs } from 'vue';
  import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue';

  const emit = defineEmits(['update:input', 'clearInput', 'isActive'])

  const props = defineProps({
    theId: String,
    input: String,
    placeholder: String
  })

  const { theId, input, placeholder } = toRefs(props)

  const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
  })

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