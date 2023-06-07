<template>
  <div>
    <header>
      <h1><NuxtLink to="/">Nuxt Content test</NuxtLink></h1>
      <nav>
        <NuxtLink :to="switchLocalePath('it')">Italiano</NuxtLink>
        |
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
