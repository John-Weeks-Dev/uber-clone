<template>
  <div id="AutoCompleteInput">
    <input 
        v-model="inputComputed"
        class="
            text-lg
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
        :ref="inputRef ? 'isInputRef' : ''"
        :placeholder="placeholder" 
    />
  </div>
</template>

<script setup>

  import { computed, defineEmits, defineProps, nextTick, onMounted, ref, toRefs } from 'vue';

  let isInputRef = ref(null)

  onMounted(() => {
    nextTick(() => {
        if (inputRef) {
            isInputRef.value.focus()
        }
    });
  })

  const emit = defineEmits(['update:input'])

  const props = defineProps({
    input: String,
    inputRef: Boolean,
    placeholder: String
  })

  const { input, inputRef, placeholder } = toRefs(props)

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