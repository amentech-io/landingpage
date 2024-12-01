<script setup lang="ts">
const { setLocale, localeProperties, locales } = useI18n()
</script>

<template>
  <div>
    <ClientOnly>
      <select name="language" :value="localeProperties.code" @change="e => setLocale(e.target.value)">
        <option v-for="locale in locales" :value="locale.code">{{ locale.code }}</option>
      </select>
    </ClientOnly>
  </div>
</template>
