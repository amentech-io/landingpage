<script setup lang="ts">
import { animate, inView, stagger } from 'motion'
let stopInView: any
let animateRef: any

onMounted(() => {
  stopInView = inView('.card-inview', () => {
    animateRef = animate('.card-animate', {
      scale: [0, 1.03, 1],
      opacity: [0, 1],
    }, {
      delay: stagger(0.1)
    })

    return () => animateRef.stop()
  },
    { margin: "0px 0px -300px 0px" }
  )
})

onUnmounted(() => {

  stopInView()
})


const list = [
  {
    title: 'Technologie de pointe',
    icon: 'partner-icon-face',
  },
  {
    title: 'Customisable',
    icon: 'partner-icon-light',
  },
  {
    title: 'Intégration facile',
    icon: 'partner-icon-usb',
  },
  {
    title: 'Solutions sécurisées',
    icon: 'partner-icon-guard',
  },
]
</script>

<template>
  <section class="card-inview mt-5 mx-auto max-w-[1840px]">
    <div class="flex justify-between gap-5">
      <div
        class="card-animate bg-[#023C16] relative overflow-hidden isolate text-white min-w-[450px] rounded-[32px] pl-11 py-6">
        <div class="absolute size-[213px] bg-[#ACFEC1]/40 -z-10 rounded-full blur-[60px] -top-10 -right-10" />
        <p class="font-bold text-[38px]">
          <span class="text-[72px]">
            <span class="inline-block">+</span>08
          </span>
          Produits
        </p>
        <div class="flex justify-between items-center mt-[93px]">
          <div class="bg-white/20 rounded-full py-1 px-5">
            <img src="/partner-icon-thunder.svg" alt="thunder">
          </div>
          <p class="w-[10ch] text-2xl">3 branches majeures.</p>
        </div>
      </div>

      <div class="card-animate bg-[#023C16] relative overflow-hidden isolate text-white min-w-[450px] rounded-[32px]">
        <img class="w-full object-cover h-full" src="/feat-card.png" alt="features">
      </div>

      <div class="card-animate bg-[#ACFEC1] rounded-[2rem] grid grid-cols-[2fr_1fr_1fr] p-11 gap-4">
        <div class="card-animate bg-white rounded-[2rem] p-8 row-span-2">
          <p class="flex gap-2 items-center text-lg">
            <img src="/partner-icon-app.svg" alt="app">

            Assurance et technologie
          </p>

          <p class="text-lg mt-3">Transformez vos produits d’assurances</p>
          <p class="text-lg underline font-bold">avec nos solutions métiers sur-mesure.</p>

          <a class="mt-6 text-white inline-flex items-center font-bold gap-2 px-4 py-2 rounded-full bg-[#191E34]">
            <img src="/partner-icon-ai.svg" alt="ai">

            <span>Découvrir</span>
          </a>
        </div>

        <div v-for="i in list" :key="i.icon" class="card-animate bg-white p-5 rounded-[20px]">
          <img :src="`/${i.icon}.svg`" :alt="i.icon">
          <p class="mt-3">Technologie de pointe</p>
        </div>
      </div>

    </div>

    <div class="mt-5 p-6 flex flex-col gap-y-12 rounded-[40px]
        bg-gradient-to-r from-0% via-49% to-100%
        from-[#E6FFED] via-white to-[#E6FFED]
    ">
      <p class="text-center text-2xl">
        Trusted by over All these companies of all sizes
      </p>

      <ul class="flex transition-[filter] gap-24 justify-center">
        <li class="grayscale hover:grayscale-0"><img src="/partner-logo-saa.png" alt="saa"></li>
        <li class="grayscale hover:grayscale-0"><img src="/partner-logo-ciar.png" alt="ciar"></li>
        <li class="grayscale hover:grayscale-0"><img src="/partner-logo-cash.png" alt="cash"></li>
        <li class="grayscale hover:grayscale-0"><img src="/partner-logo-asf.png" alt="asf"></li>
      </ul>
    </div>
  </section>
</template>

<style>
.card-animate {
  opacity: 0;
}
</style>
