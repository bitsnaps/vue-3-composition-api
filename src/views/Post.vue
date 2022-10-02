<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import usePost from '../composables/usePost'

const route = useRoute()
const { post, fetchOne } = usePost()

// This is not possible using the setup() use the useRoute composable
// fetchOne(this.$route.params.id)

fetchOne(route.params.id)

const user = {
  name: "Leanne Graham",
};
</script>
