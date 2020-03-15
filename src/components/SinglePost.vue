<template>
  <div>
    <h1>{{ post.title }}</h1>
  </div>
</template>
<script>
import { postService } from "@/services/Post.js";

export default {
  name: "SinglePost",
  data() {
    return {
      post: {}
    };
  },
  async created() {
    this.post = await postService.getSingle(this.$route.params.id);
  }
};
</script>