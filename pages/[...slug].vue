<template>
  <div>
    <h4>This page is rendered with /pages/[...slug].vue</h4>
    <h3>
      These are vars used in the page for the second &lt;ContentDoc/&gt; query
      (see below):
    </h3>
    <pre>
    current locale: {{ locale }} 
    current pathWithoutLocale: {{
        pathWithoutLocale
      }} (calculated with a regex from path: {{ path }} )
    </pre>
    <hr />
    <h3>
      This is the content, rendered with a plain &lt;ContentDoc/&gt; tag: (it
      ignore the language in the url doing the query!)
    </h3>
    <ContentDoc />
    <hr />

    <h3>
      This is the content, rendered with a &lt;ContentDoc/&gt; tag enriched with
      a query with modified path (with _locale code stripped) and added _locale:
    </h3>
    <ContentDoc
      :query="{ path: pathWithoutLocale, where: { _locale: locale } }"
    />
  </div>
</template>

<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(
  new RegExp(`^/${locale.value}(\/|$)`),
  '/'
);
</script>
