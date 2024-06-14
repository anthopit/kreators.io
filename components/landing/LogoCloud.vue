<template>
      <!-- Logo cloud -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img v-for="logo in logo.logos" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="logo" alt="Transistor" width="158" height="48" />
        </div>
        <div class="mt-16 flex justify-center">
          <p class="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span class="hidden md:inline">{{ logo.description }}</span>
            <a :href="logo.link" class="font-semibold text-primary"><span class="absolute inset-0" aria-hidden="true" /> {{ logo.descriptionlink }} <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
</template>

<script lang="ts" setup>

const { data: page, refresh } = await useAsyncData('logo',() => queryContent('fr/landing').only('logocloud').findOne())

const logo = computed(() => page.value?.logocloud)
</script>

<style>

</style>