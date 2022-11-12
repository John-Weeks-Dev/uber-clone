<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
  .slide-leave-active {
    transition: transform 0.175s ease-out;
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
</style>
