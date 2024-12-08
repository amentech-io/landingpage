<template>
  <nav class="flex justify-between items-center">
    <!-- TODO: use svg logo -->
    <NuxtLink href="/">
      <img class="w-[284px]" src="/amentech-logo-h.svg" alt="amentech">
    </NuxtLink>

    <ul class="flex text-lg gap-9 text-white">
      <li>
        <NuxtLink href="#">
          Acceuil
        </NuxtLink>
      </li>
      <li>Solutions</li>
      <li>Etude de cas</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>

    <LangSelect />
  </nav>
</template>
