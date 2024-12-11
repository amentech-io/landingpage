<script setup lang="ts">
const cardList = [
  {
    icon: 'icon-online-subscription',
    title: 'Souscription en ligne',
    description: 'Optimisez le parcours de souscription avec un processus entièrement digital.',
  },
  {
    icon: 'icon-gestion-des-sinistres',
    title: 'Gestion des sinistres',
    description: 'Automatisez et suivez les sinistres en temps réel',
  },
  {
    icon: 'icon-espace-client-dedie',
    title: 'Espace client dédié',
    description: 'Un espace personnalisé pour chaque client pour unegestion simplifiée. ',
  },
  {
    icon: 'icon-parcours-digital-multicanal',
    title: 'Parcours digital multicanal',
    description: 'Une expérience utilisateur sans rupture sur tous les canaux',
  },
  {
    icon: 'icon-reporting-marketing',
    title: 'Reporting & Marketing',
    description: 'Suivi et analyse des performances marketinget commerciales.',
  },
  {
    icon: 'icon-integration-facile-avec-erp',
    title: 'Intégration facile avec ERP',
    description: 'Connectez facilement votre ERP pour une gestion centralisée.',
  },
  {
    icon: 'icon-trilingue-support',
    title: 'Trilingue Support',
    description: 'Assistance client disponible en plusieurs langues (français, arabe, anglais).',
  },
  {
    icon: 'icon-court-time-to-market',
    title: 'Court time-to-market',
    description: 'Lancez rapidement vos produits grâce à une plateforme agile. ',
  },
]
</script>

<template>
  <section class="mx-auto mt-28 max-w-[1530px]">
    <div class="grid">
      <div class="z-10 col-start-1 row-start-1">
        <h3 class="mx-auto mt-20 max-w-[32ch] text-center text-5xl font-bold text-white">Les Fonctionnalités Clés qui Transforment Vos Opérations</h3>
      </div>
      <div class="col-start-1 row-start-1">
        <FeaturesSvg />
      </div>
    </div>

    <div class="mt-8 flex flex-wrap justify-between gap-y-8">
      <div
        v-for="i in cardList"
        :key="i.icon"
        class="flex max-w-[324px] shrink-0 flex-col gap-y-3 rounded-[40px] border border-[#ACFEC1] p-7 text-center hover:bg-[#F7FFF9]">
        <div>
          <img class="mx-auto" :src="`/${i.icon}.svg`" :alt="i.icon">
        </div>
        <p class="text-xl font-bold">{{ i.title }}</p>
        <p class="text-lg">{{ i.description }}</p>
      </div>
    </div>
  </section>
</template>
