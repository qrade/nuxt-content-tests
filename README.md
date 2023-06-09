# Nuxt 3 + content + I18n double language setup

- based on Nuxt 3 Minimal Starter
- open issues:

1. what is the right setup to have multi language content preserving default routing?

- using language the default route is not working: had to patch the path removing the language and adding language to the query
- using language the automatic query of Content components are not working: had to make a query in \[...slug].vue page

2. generated static files give a 404 when point manually to some urls (e.g. clicking on foo link from italian home page is working but navigating to /it/foo is not )
