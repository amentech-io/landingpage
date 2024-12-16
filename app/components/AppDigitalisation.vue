<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChevronDownIcon } from '@radix-icons/vue'

const list = [
  {
    img: 'digitale-handshake',
    title: 'Prise de contact & analyse des besoins',
    duration: 'Durée : 1-3 semaines',
    description: 'Contactez nos experts pour analyser vos besoins spécifiques et définir vos  objectifs de digitalisation',
  },
  {
    img: 'digitale-writing',
    title: 'Adaptation & Creation de la charte',
    duration: 'Durée : 4-6 semaines',
    description: 'Nous adaptons votre projet et créons une charte personnalisée, conforme à vos attentes  et exigences métier',
  },
  {
    img: 'digitale-integration',
    title: 'Intégration & Déploiement progressif',
    duration: 'Durée : 3-4 semaines',
    description: 'Intégrez Progressivement  nos solutions digitales pour un déploiement  fluide et sans interruption',
  },
  {
    img: 'digitale-amelioration',
    title: 'Suivi & améliorations continues ',
    duration: 'Durée : 90 jours et au-delà',
    description: 'Bénéficier d’un suivi régulier et d’amélioration continues pour assurer une performance optimale et durable',
  },

]
</script>

<template>
  <section class="mx-auto mt-28 max-w-[1530px]">
    <p
      class="text-5xl font-bold"
    >
      Une Transformation Digitale Personnalisée en 4 Étapes
    </p>
    <p class="mt-7 text-2xl">
      Passez au digital en toute sérénité avec Amentech. Profitez d'une mise en œuvrerapide et continuez à améliorer vos performances avec un accompagnement sur mesure.
    </p>

    <Accordion type="single" collapsible class="relative mt-10" default-value="digitale-handshake">
      <AccordionItem 
        v-for="i in list"
        :key="i.img"
        :value="i.img"
        class="w-2/3 border-b-[#ACFEC1]"
      >
        <AccordionTrigger
          class="px-3 pt-10 hover:no-underline data-[state=open]:bg-[#F7FFF9] [&[data-state='closed']>img]:hidden [&[data-state=open]>svg]:border-[#ACFEC1]"
        >
          <div class="flex flex-col items-start">
            <p class="text-[1.7rem] font-bold">  {{ i.title }}</p>
            <p class="mt-2 text-xl text-[#2B7B3F]"> {{ i.duration }} </p>
          </div>
          <template #icon>
            <ChevronDownIcon
              class="size-8 shrink-0 rounded-[10px] border border-[#ACFEC1] p-2 text-muted-foreground transition-transform duration-200"
            />
          </template>
          <img
            class="absolute end-0 top-0 mt-20 size-[400px]"
            :src="`/${i.img}.svg`"
            alt="handshake"
          >
        </AccordionTrigger>
        <AccordionContent class="bg-[#F7FFF9] px-3 pb-10 text-2xl">
          <p> {{ i.description }} </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>
