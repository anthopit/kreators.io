<template>
  <div class=" py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-primary">{{ features.tagline }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ features.title }}</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features.items" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <UIcon :name="feature.icon" class="h-5 w-5 flex-none text-primary"/>
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <div class="mt-16 flex items-center justify-center gap-x-6">
          <a :href="features.cta.left.link" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-kreatorsRed-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ features.cta.left.text }}</a>
          <a :href="features.cta.right.link" class="text-sm font-semibold leading-6 text-gray">{{ features.cta.left.text }}<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


const { data: page, refresh } = await useAsyncData('features',() => queryContent('fr/landing').only('features').findOne())

const features = computed(() => page.value?.features)

const features2 = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
  },
]

</script>
