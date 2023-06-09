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

<style>
  header { background-color: #eee;
  padding: 10px; }
  nav { background-color: #ddd; }
  

main a { background-color: #ff0;
color: red;}

</style>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
