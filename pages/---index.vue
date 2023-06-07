<!-- this page component exists because when I add a where parameter to the query the / path does not return index.md, so I created home.md and manually mapped to index.vue-->
<template>
  <ContentDoc :query="{ path: '/home', where: { _locale: locale } }" />
</template>

<script setup>
const { locale } = useI18n();
</script>
