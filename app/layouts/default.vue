<script setup lang="ts">
const head = useLocaleHead({ seo: true });
const { localeProperties } = useI18n();
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="localeProperties?.dir">

  <Head>
    <template v-for="link in head.link" :key="link.hid">
      <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.hid">
      <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
    </template>
  </Head>

  <Body :class="!head.htmlAttrs?.lang.startsWith('ar')
    ? 'font-sans'
    : 'font-cairo'
    " />

  <Body>
    <slot />
  </Body>

  </Html>
</template>
