<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
  </nav>
  <div class="container">

    <router-view></router-view>

    <!-- Suspense is experimental, here is how to use it: -->
    <!-- <router-view v-slot="{ Component }">
    <template v-if="Component">

      <Suspense>
        <template #default>
          <component :is="Component"></component>
        </template>

        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
      
    </template>
  </router-view> -->
  </div>
</template>

<script setup>
import usePageRequests from './composables/usePageRequests'

const { isLoading } = usePageRequests()

</script>

<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
