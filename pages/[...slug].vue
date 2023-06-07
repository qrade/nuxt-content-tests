<template>
  <div>
    <pre>
    current locale: {{ locale }} 
    current pathWithoutLocale: {{ pathWithoutLocale }}
    </pre>
    <ContentDoc
      :query="{ path: pathWithoutLocale, where: { _locale: locale } }"
    />
  </div>
</template>

<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(`/${locale.value}`, '/');
</script>
