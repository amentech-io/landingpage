<template>
  <section class="mt-40 bg-[#01210C] pb-20 pt-[90px]">
    <div class="mx-auto max-w-[1530px]">
      <div class="flex items-end justify-between">
        <div class="grid max-w-[240px] gap-y-7 text-center">
          <img class="mx-auto" src="/footer-logo.svg" alt="amentech">
          <p class="text-xs text-white">
            La vraie innovation rend un produit ou service
            <span class="text-[#ACFEC1]">plus accessible et plus abordable</span>
          </p>
        </div>

        <div class="flex gap-x-14">
          <ul v-for="i in 4" :key="i" class="flex flex-col gap-y-3 text-2xl text-white">
            <li class="mb-3">Solutions</li>
            <li class="text-lg text-white/70">Assurance dommage</li>
            <li class="text-lg text-white/70">Assurance vie</li>
            <li class="text-lg text-white/70">Assistance</li>
          </ul>
        </div>
      </div>

      <div class="mt-24 flex justify-between">
        <p class="text-lg text-white">Copyright © 2024 - 2023
          <span class="underline">SARL AMENTECH</span>
          - Tous droits réservés.
        </p>
        <ul class="flex gap-x-6">
          <li>
            <a href="#">
              <img src="/icon-linkedin.svg" alt="linkedin">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icon-email.svg" alt="email">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icon-facebook.svg" alt="facebook">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
