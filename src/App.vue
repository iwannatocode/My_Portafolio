<template>
  <controlls-button></controlls-button>
  <dark-theme></dark-theme>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import ControllsButton from "@/components/ControllsButton.vue";
import DarkTheme from "@/components/DarkTheme.vue";

export default {
  components: {
    "controlls-button": ControllsButton,
    "dark-theme": DarkTheme,
  },
};
</script>

<style lang="scss">
.section {
  margin-left: 7%;
  margin-right: 16%;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
