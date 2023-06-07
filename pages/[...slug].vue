<template>
  <div>
    <ContentDoc :query="{ path: '/', where: {_locale:locale} }" />
  </div>
</template>
<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(`/${locale.value}/`, '');


</script>
