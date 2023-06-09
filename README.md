## Setup for Nuxt 3 + Content + I18n with Dual Language

I need assistance in properly setting up a Nuxt3 project with the Content and I18n modules for a static site with two languages. My goal is to create a basic working prototype of a Nuxt3 installation that can be easily populated with content and customized.

I have started by installing and configuring the necessary modules and attempting to establish correct routing and static file generation.

Here are the current issues that need to be resolved:

1. Multi-language content setup with preserved default routing:

   - The automatic mapping of URLs to content using content locales is not functioning correctly. As a workaround, I had to modify the path by removing the language prefix from the URL and adding the language as a query parameter.

   Example:

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

   An unintended side effect of this modification is that the automatic routing of "/" to "index.md" no longer works. To address this, I had to prefix the "index.md" file with "1." to ensure it is recognized as the default file. Without this prefix, any file with a name that precedes "index.md" alphabetically would be displayed instead.

   To test this setup, run the following command:

   ```bash
   npx nuxi dev
   ```

2. 404 errors when manually accessing specific URLs in the generated static files:

   - Manually navigating to certain URLs, such as "/it/foo," results in a 404 error, even though clicking on a "foo" link from the Italian homepage works correctly.

   To test this issue, run the following commands:

   ```bash
   npx nuxi generate
   npx http-server dist
   ```

Please assist me in resolving these issues and ensuring that the Nuxt3 project is properly set up with the Content and I18n modules for dual-language support.
