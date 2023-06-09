# Nuxt 3 + content + I18n double language setup

- based on Nuxt 3 Minimal Starter

## open issues:

1. what is the right setup to have multi language content preserving default routing?

- using content locales the automatic mapping url---> content is not working: had to patch the path removing the language prefix url and adding language to the query

```js
// [...slug].vue

<template>
    ...
    <ContentDoc
    :query="{ path: pathWithoutLocale, where: { _locale: locale } }"
    />
    ...
</template>

<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(new RegExp(`^/${locale.value}(\/|$)`), '/');
</script>
```

a side effect of this is that automatic routing of / to index.md is not working anymore. Had to add a 1. prefix to the index.md file to make it work. (if not any file named with a name that precedes index.md in alphabetical order will be showed as result of the query)

test it with:

```bash
    npx nuxi dev
```

2. generated static files give a 404 when point manually to some urls (e.g. clicking on foo link from italian home page is working but navigating to /it/foo is not )

   test it with:

```bash
   npx nuxi generate
   npx http-server dist
```
