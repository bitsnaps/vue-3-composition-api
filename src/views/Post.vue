<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<!-- This async allows script to be executed asynchronously (used for <Suspense>) -->
<!-- <script setup async> -->
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'
import useResource from '../composables/useResource'

// import usePost from '../composables/usePost'
// import useUser from '../composables/useUser'

const route = useRoute()
// const { post, fetchOne } = usePost()
// const { user, fetchOne: fetchUser } = useUser()

// This is not possible using the setup() use the useRoute composable
// fetchOne(this.$route.params.id)
// fetchOne(route.params.id)

const { item: post, fetchOne: fetchPost } = useResource('posts')
// await fetchPost(route.params.id) // used for <Suspense>
fetchPost(route.params.id)

const { item: user, fetchOne: fetchUser } = useResource('users')
// fetchUser(post.value.userId) // used for <Suspense>

// this is not needed when using using for <Suspense>
watch(
  () => ({ ...post.value}),
  () => fetchUser(post.value.userId)
)

/*/ Self-invoking function is the alternative option at the moment (instead of using <Suspense>)
(async ()=>{ 
  await fetchPost(route.params.id)
  fetchUser(post.value.userId)
})()
*/

</script>
