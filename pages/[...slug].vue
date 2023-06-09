<template>
  <div>
    <h4>This page is rendered with /pages/[...slug].vue</h4>
   <h3>These are  vars obtained used the page for the second ContentDoc query (see below):</h3> 
    <pre>
    current locale: {{ locale }} 
    current pathWithoutLocale: {{ pathWithoutLocale }} (calculated with a regex from path: {{ path }} )
    </pre>
    <hr/>
    <h3>This is the content, rendered with a plain ContentDoc tag: (I think it ignore the language doing the query)</h3>
    <ContentDoc/>
    <hr/>

    <h3>This is the content, rendered with a ContentDoc tag enriched with a query:</h3>
    <ContentDoc
      :query="{ path: pathWithoutLocale, where: { _locale: locale } }"
    />
  </div>
</template>

<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(new RegExp(`^/${locale.value}(\/|$)`), '/');
</script>
