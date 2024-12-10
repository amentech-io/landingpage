<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const tabsList = {
  dommage: [
    {
      title: 'Auto',
      description: 'Simplifiez la gestion des contrats d’assurance auto, avec une interfacedédiée pour souscription et sinistres',
      icon: 'icon-auto',
    },
    {
      title: 'Habitation',
      description: 'Gérez facilement l’assurance habitation, de la souscription à la réclamation, tout en gardant une vue d’ensemble.',
      icon: 'icon-habitation',
    },
    {
      title: 'Multirisque Professionnelle',
      description: 'Offrez à vos clients professionnels une couverturecomplète avec des outils de gestion intuitifs.',
      icon: 'icon-multirisque-pro',
    },
  ],
  vie: [
    {
      title: 'Assurance Voyage',
      description: 'Protégez vos clients durant leurs déplacements avec des solutions flexibles et immédiates.',
      icon: 'icon-airplane',
    },
    {
      title: 'Assurance Santé',
      description: 'Une couverture santé accessible, simple à souscrire et à gérer ccccpour vos clients.',
      icon: 'icon-guard',
    },
    {
      title: 'Assurance Omra',
      description: 'Une assurance spécifique pour les voyages religieux avec des garanties sur mesure.',
      icon: 'icon-omra',
    },
  ],
  assistance: [
    {
      title: 'Assurance Voyage',
      description: 'Protégez vos clients durant leurs déplacements avec des solutions flexibles et immédiates.',
      icon: 'icon-assurance-voyage',
    },
    {
      title: 'Assurance Santé',
      description: 'Une couverture santé accessible, simple à souscrire et à gérer ccccpour vos clients.',
      icon: 'icon-assurance-sante',
    },
    {
      title: 'Assurance Omra',
      description: 'Une assurance spécifique pour les voyages religieux avec des garanties sur mesure.',
      icon: 'icon-omra',
    },
  ]
}
</script>

<template>
  <section class="mx-auto mt-32 max-w-[1530px]">
    <h3 class="text-center text-5xl font-bold">Nos Solutions d'Assurance à 360°</h3>
    <p class="mx-auto mt-4 max-w-[85ch] text-center text-2xl font-thin">
      Nous proposons une gamme complète de solutions d'assurance digitale, couvrant tous les aspects de vos besoins,
      qu'il s'agisse de la gestion des dommages, des assurances de vie, ou de l'assistance routière. Sélectionnez une
      catégorie pour découvrir nos produits.
    </p>

    <Tabs default-value="vie" class="mt-12">
      <TabsList class="mx-auto mb-20 mt-12 grid w-[1149px] grid-cols-3 rounded-full bg-[#E6FFED] p-3">
        <TabsTrigger
          value="dommage" class="py-5 text-2xl
          data-[state=active]:rounded-full
          data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00200B]
          data-[state=active]:to-[#00862E]
          data-[state=active]:text-white data-[state=active]:shadow-none
          ">
          Assurance Dommage
        </TabsTrigger>
        <TabsTrigger
          value="vie" class="py-5 text-2xl
          data-[state=active]:rounded-full
          data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00200B]
          data-[state=active]:to-[#00862E]
          data-[state=active]:text-white data-[state=active]:shadow-none
          ">
          Assurance Vie
        </TabsTrigger>
        <TabsTrigger
          value="assistance" class="py-5 text-2xl
          data-[state=active]:rounded-full
          data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00200B]
          data-[state=active]:to-[#00862E]
          data-[state=active]:text-white data-[state=active]:shadow-none
          ">
          Assistance
        </TabsTrigger>
      </TabsList>

      <TabsContent class="mt-0 grid grid-cols-2" value="dommage">
        <div>
          <p class="text-2xl font-bold">
            Assurance Dommage
          </p>
          <p class="mt-5 text-xl">
            Optimisez vos assurances dommages avec une solution digitale complète. Automatisez la souscription et la
            gestion des sinistres pour offrir à vos clients uneexpérience fluide et sans effort.
          </p>

          <ul class="mt-10 grid grid-cols-[30ch_30ch] gap-x-10 gap-y-7">
            <li v-for="i in tabsList.dommage" :key="i.icon">
              <div>
                <img :src="`/${i.icon}.svg`" :alt="i.icon">
              </div>
              <p class="pb-4 pt-3 text-xl font-bold">
                {{ i.title }}
              </p>
              <p class="text-lg">
                {{ i.description }}
              </p>
            </li>
          </ul>

          <div class="mt-10">
            <button
              class="flex items-center gap-x-3 rounded-full border border-[#ACFEC1] bg-[#E6FFED] px-4 py-3 font-bold">
              En savoir plus
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 11.5651L12 8.23177M12 8.23177L8.66667 4.89844M12 8.23177L4 8.23177" stroke="#1E1E1E"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </TabsContent>
      <TabsContent class="mt-0 grid grid-cols-2" value="vie">
        <div>
          <p class="text-2xl font-bold">
            Suite Assurance Vie
          </p>
          <p class="mt-5 text-xl">
            Optimisez la gestion de vos assurances vie avec une solution digitale fluide.
            Simplifiezla souscription et offrez à vos clients une protection personnalisée,
            sans complexité.
          </p>

          <ul class="mt-10 grid grid-cols-[30ch_30ch] gap-x-10 gap-y-7">
            <li v-for="i in tabsList.vie" :key="i.icon">
              <div>
                <img :src="`/${i.icon}.svg`" :alt="i.icon">
              </div>
              <p class="pb-4 pt-3 text-xl font-bold">
                {{ i.title }}
              </p>
              <p class="text-lg">
                {{ i.description }}
              </p>
            </li>
          </ul>

          <div class="mt-10">
            <button
              class="flex items-center gap-x-3 rounded-full border border-[#ACFEC1] bg-[#E6FFED] px-4 py-3 font-bold">
              En savoir plus
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 11.5651L12 8.23177M12 8.23177L8.66667 4.89844M12 8.23177L4 8.23177" stroke="#1E1E1E"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </TabsContent>
      <TabsContent class="mt-0 grid grid-cols-2" value="assistance">
        <div>
          <p class="text-2xl font-bold">
            Suite Assurance Vie
          </p>
          <p class="mt-5 text-xl">
            Optimisez la gestion de vos assurances vie avec une solution digitale fluide. Simplifiezla souscription et offrez à vos clients une protection personnalisée, sans complexité.
          </p>

          <ul class="mt-10 grid grid-cols-[30ch_30ch] gap-x-10 gap-y-7">
            <li v-for="i in tabsList.assistance" :key="i.icon">
              <div>
                <img :src="`/${i.icon}.svg`" :alt="i.icon">
              </div>
              <p class="pb-4 pt-3 text-xl font-bold">
                {{ i.title }}
              </p>
              <p class="text-lg">
                {{ i.description }}
              </p>
            </li>
          </ul>

          <div class="mt-10">
            <button
              class="flex items-center gap-x-3 rounded-full border border-[#ACFEC1] bg-[#E6FFED] px-4 py-3 font-bold">
              En savoir plus
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 11.5651L12 8.23177M12 8.23177L8.66667 4.89844M12 8.23177L4 8.23177" stroke="#1E1E1E"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </section>
</template>
