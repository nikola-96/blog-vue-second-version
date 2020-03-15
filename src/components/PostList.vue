<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
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