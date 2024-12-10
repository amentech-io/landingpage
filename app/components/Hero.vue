<script setup lang="ts">
import { animate } from 'motion-v'

let animationGrid: any
let animationBg: any
const mouse = reactive({ x: 0, y: 0 })

watch(mouse, () => {
  const alfa1 = 0.004
  const alfa2 = -0.002

  animationBg = animate('.img-bg',
    { skewX: `${mouse.x * alfa1}deg`, skewY: `${mouse.y * alfa1}deg` },
    { duration: 0.5 }
  )

  animationGrid = animate('.img-grid',
    { skewX: `${mouse.x * alfa2}deg`, skewY: `${mouse.y * alfa2}deg` },
    { duration: 1 }
  )
})

onUnmounted(() => {
  animationBg.cancel()
  animationGrid.cancel()
})

function eventHandler(e: MouseEvent) {
  const { clientX, clientY } = e
  mouse.x = clientX
  mouse.y = clientY
}
</script>

<template>
  <section @mousemove="eventHandler" @mouseleave="() => { mouse.x = 0; mouse.y = 0 }"
    class="relative px-24 mx-auto max-w-[1840px] overflow-hidden">
    <NavBar />
    <div class="mt-[150px]">
      <h1 class="max-w-[20ch] text-7xl font-bold bg-clip-text
        text-transparent
        bg-gradient-to-br from-30% via-52% to-100%
        from-[#E6FFED] via-[#4FFB7A] to-[#ACFEC1]">
        Assurez vos clients, nous assurons
        la solution.
      </h1>
      <p class="text-white max-w-[45ch] text-2xl mt-6 mb-24 [&>span]:text-[#ACFEC1]">
        Une visibilité en temps réel à <span>100%</span> sur vos opérations.
        Réduisez l'utilisation du papier de plus de <span>60%</span>.
        Réduisez vos processus manuels de <span>50%</span>.
        Gérez les réclamations et contrats <span>2x</span> plus vite.
        Une expérience utilisateur que <span>tout le monde</span> va adorer.
      </p>

      <div class="pb-64">
        <NuxtLink href="#" class="inline-block bg-[#ACFEC1] font-bold rounded-full text-2xl py-5 px-20">
          Demandez une Démo
        </NuxtLink>
      </div>

      <div class="absolute grid rounded-[2.5rem] -z-10 inset-0
        bg-gradient-to-tl from-33% via-78% to-100%
        from-[#01260E] via-[#023C16] to-[#048C34]
        ">
        <img class="img-bg  grid-cols-full row-start-1 col-start-1 ml-auto h-full object-contain" src="/hero-bg.png"
          alt="phone mockup">
        <img class="img-grid ml-auto row-start-1 col-start-1 h-full object-contain" src="/hero-bg-grid.png" alt="grid">
      </div>
    </div>
  </section>
</template>

