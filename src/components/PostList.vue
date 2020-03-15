<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <router-link :to="`/post/${post.id}`">View More</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
};
</script>