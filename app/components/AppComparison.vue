<script setup lang="ts">
const list = [
  {
    icon: 'icon-table-map',
    el: 'Périmètre de pénétration',
    amentech: 'Tout le territoire national',
    prev: 'Quartier ou ville',
  },
  {
    icon: 'icon-table-leaf',
    el: 'Ecologie/Papier',
    amentech: '100% paperless',
    prev: 'Des tonnes de papiers nécessaires',
  },
  {
    icon: 'icon-table-history',
    el: 'Visibilité et synchronisation',
    amentech: 'Synchronisation en temps réel',
    prev: 'Données décalées, mises à jour manuelles',
  },
  {
    icon: 'icon-table-arrow',
    el: 'Lancement produit / time-to-market',
    amentech: 'Agile, rapide à déployer',
    prev: 'Temps de formation long et ressources mobilisées',
  },
  {
    icon: 'icon-table-chart',
    el: 'Suivi et évolution',
    amentech: 'Mises à jour automatisées, évolutivité simple',
    prev: 'Processus lourds et coûteux pour chaque mise à jour',
  },
]
</script>

<template>
  <section class="mx-auto mt-28 max-w-[1530px]">
    <h3 class="text-5xl font-bold">Plus rapide, plus agile, plus efficace.</h3>
    <p class="mt-7 max-w-[53ch] text-2xl">Cette section montre pourquoi la solution Amentech surpasse les méthodes
      traditionnelles (agence physique/webmarchand standard).</p>

    <div class="mt-6 grid w-full grid-cols-3 grid-rows-[auto_repeat(5,minmax(0,1fr))]">
      <div class="rounded-[40px] shadow-2xl [grid-column:1/-1] [grid-row:2/-1]" />

      <div class="col-span-3 grid grid-cols-subgrid p-2">
        <div/>
        <div><img src="/amentech-logo-table.png" alt="amentech"></div>
        <div class="flex items-center text-2xl">Auparavant</div>
      </div>

      <template v-for="(i,idx) in list" :key="i.icon">

        <div
          :style="{'grid-row-start': idx+2}"
          class="col-span-3 col-start-1 grid grid-cols-subgrid p-16 even:bg-[#F3FFF6]"
        >
          <div class="flex items-center text-[1.75rem] font-bold">
            <div class="flex items-center gap-x-4">
              <img :src="`/${i.icon}.svg`" alt="i.icon">
              {{ i.el }}
            </div>
          </div>

          <div class="text-xl">
            <div class="flex items-center gap-x-4">
              <span class="inline-block h-20 w-2 rounded-full bg-[#2CB14E]"/>
              {{ i.amentech }}
            </div>
          </div>

          <div class="text-xl">
            <div class="flex items-center gap-x-4">
              <span class="inline-block h-20 w-2 rounded-full bg-[#DE4E3A]"/>
              {{ i.prev }}
            </div>
          </div>
        </div>

      </template>
    </div>
  </section>
</template>

