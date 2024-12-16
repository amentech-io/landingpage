<template>
  <section class="mx-auto mt-28 max-w-[1530px]">
    <p
      class="text-center text-5xl font-bold"
    >
      Explorez Nos Derniers Articles
    </p>
    <p class="mx-auto mt-7 max-w-[78ch] text-center text-2xl">
      Découvrez les insights et tendances du secteur de l’assurance. Restez informé avecdes articles sur l'innovation, la digitalisation, et bien plus encore.
    </p>

    <div class="mt-9 grid grid-cols-[repeat(3,minmax(0,419px))] justify-between">
      <div v-for="i in 3" :key="i">
        <img src="/blog-img-1.png" alt="Trilingue Support">
        <div class="mt-5 rounded-b-[40px] border-x border-b px-5 pb-7">
          <p class="text-sm font-semibold text-[#2B7B3F]">
            08 juillet 2024
          </p>
          <p class="text-xl font-bold">
            Trilingue Support
          </p>
          <p class="mt-8 text-lg text-[#5E5152]">
            Assistance client disponible en plusieurs langues (français, arabe, anglais). Assistance client disponible en plusieurs langues (français, arabe, anglais).Assistance client disponible en plusieurs langues (français, arabe, anglais).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
