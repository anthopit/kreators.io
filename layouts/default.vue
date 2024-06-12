<template>
  <div class="bg-white">
    <Navbar />
    <main class="isolate">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue';


</script>

<style>

</style>