<script setup lang="ts">
const { setLocale, localeProperties, locales } = useI18n()
</script>

<template>
  <div>
    <select
      class="bg-[#E6FFED] text-xl px-3 py-3 rounded-full appearance-none"
      name="language"
      :value="localeProperties.code"
      @change="e => setLocale(e.target.value)"
    >
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>
