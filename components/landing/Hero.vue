<template>
  <div class="relative pt-14">
        <div class="py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl red-circle">{{ hero.title }}</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">{{ hero.subtitle }}</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink :to="hero.cta.left.link" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ hero.cta.left.text }}</NuxtLink>
                <NuxtLink :to="hero.cta.right.link" class="text-sm font-semibold leading-6 text-gray-900">{{ hero.cta.right.text }} <span aria-hidden="true">→</span></NuxtLink>
              </div>
            </div>
            <div class="mt-16 flow-root sm:mt-24">
              <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <!-- <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-gray-900/10 corner-only" /> -->
                <div class="diff aspect-[16/9] rounded-md shadow-2xl ring-1 ring-gray-900/10 corner-only">
                  <div class="diff-item-1">
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
                  </div>
                  <div class="diff-item-2">
                    <img alt="daisy" src="/assets/IMG_3684 1.png" />
                  </div>
                  <div class="diff-resizer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
      </div>
</template>

<script lang="ts" setup>


const { data: page, refresh } = await useAsyncData('hero',() => queryContent('fr/landing').only('hero').findOne())

const hero = computed(() => page.value?.hero)

</script>

<style>

.red-circle::after {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: #e52622;
}

.corner-only {
  --s: 50px; /* the size on the corner */
  
  padding: 10px; /* the gap between the border and image */
  border: 5px solid #1e1e1c; /* the thickness and color */
  -webkit-mask:
    conic-gradient(at var(--s) var(--s),#0000 75%,#000 0)
    0 0/calc(100% - var(--s)) calc(100% - var(--s)),
    linear-gradient(#000 0 0) content-box;
}

</style>